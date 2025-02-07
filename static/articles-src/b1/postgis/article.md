---
title: "PostGISで観察する北海道の産業施設" 
description: ""
thumbnail: "muroran.webp"
created_at: "2025-01-28"
---

# はじめに

今年度履修していたDB工学の講義にて自由課題があったため、PostGISに入門しました。課題の提出期限が終了したため、自分の提出内容を共有します。

## テーマ

![苫小牧市の工業団地。OpenStreetMapから取得・PostGISで管理した産業施設の位置情報をQGISで可視化したもの](articles-src/b1/postgis/images/tomakomai.webp)

北海道の多様な産業施設について、その立地や施設名を管理するDBを作成します。今回はあくまで課題用のデモのため、気軽に利用できるOpenStreetMapの生のデータから抽出したものを利用します。

ここでの産業施設の定義は、OpenStreetMapのタグに基づいて

- `landuse=industrial` (産業施設)
- `landuse=quarry` (鉱山や採石場)
- `power` (発電所など)
- `harbour`, `port` (港湾施設)

を対象とします。

## PostGIS

PostGISは、空間データを扱う機能やデータ構造を提供するPostgreSQLの拡張機能です、

公式ページ: https://postgis.net/

SQLと親和性の高い形で[一通りの空間タスクを提供しており](https://postgis.net/docs/reference.html)、データクエリの段階でも十分色々な要求に応えられそうです。

また`INDEX`と同じ要領で[空間インデックスを構築できる](https://postgis.net/docs/using_postgis_dbmanagement.html#build-indexes)点も興味深い特徴です。

## 基本的な流れ

主な流れは以下の通りです。

1. Overpass APIにて所定のデータを取得
1. DockerにてDB建立
1. GDAL/OGRにてデータのDBへの取り込み
1. PostGISにてデータを整理
1. QGISによる可視化

### Overpass APIにて所定のデータを取得

インスタンスとして[Overpass Turbo](https://overpass-turbo.eu/)を利用しました。形式はGeoJSONです。

```plaintext
[out:json];
area[name="北海道"]->.hokkaido;
(
  // 産業施設
  way["landuse"="industrial"](area.hokkaido);
  relation["landuse"="industrial"](area.hokkaido);
  
  // 鉱山や採石場
  way["landuse"="quarry"](area.hokkaido);
  relation["landuse"="quarry"](area.hokkaido);
  
  // 発電所など（送電線を除外）
  way["power"]["power"!="line"]["power"!="cable"](area.hokkaido);
  relation["power"]["power"!="line"]["power"!="cable"](area.hokkaido);
  
  // 港湾施設
  way["harbour"](area.hokkaido);
  relation["harbour"](area.hokkaido);
  way["port"](area.hokkaido);
  relation["port"](area.hokkaido);
);
out body;
>;
out skel qt;
```

この他にも、市町村と振興局の境界もそれぞれ独立に取得します。これらの結合は、後述のPostGISの提供する空間クエリで行います。

### DockerにてDB建立

DockerでPostGISのコンテナを立ち上げます。[公式のイメージ](https://github.com/postgis/docker-postgis)があるのはありがたい話です。

### GDAL/OGRにてデータのDBへの取り込み

GDAL/OGRを用いてGeoJSONの内容を関係データベースのテーブルとして取り込みます。OpenStreetMapのタグがそのままカラムになっているのが良い感じです。DBは環境変数や`createdb`等で事前に立ち上げておく必要があるようです。

```shell
$ ogr2ogr -f PostgreSQL PG:"dbname=mydb user=postgres" ./resources/city.geojson -nln cities_raw -nlt PROMOTE_TO_MULTI -lco GEOMETRY_NAME=geom -lco FID=gid
$ ogr2ogr -f PostgreSQL PG:"dbname=mydb user=postgres" ./resources/industry.geojson -nln industries_raw -nlt PROMOTE_TO_MULTI -lco GEOMETRY_NAME=geom -lco FID=gid
$ ogr2ogr -f PostgreSQL PG:"dbname=mydb user=postgres" ./resources/subprefecture.geojson -nln subprefectures_raw -nlt PROMOTE_TO_MULTI -lco GEOMETRY_NAME=geom -lco FID=gid
```

![直接importしたOSMデータのカラム。多くのタグは実データ上でNULLとなっていることが予想されるので、整理が必要](articles-src/b1/postgis/images/columns.webp)

### PostGISにてデータを整理

産業施設テーブル・市町村テーブル・振興局テーブルを作成しデータを整理します。テーブル設計は以下の通りです。

```
- 産業施設テーブル `industries`
  - 産業施設ID (主キー)
  - 産業施設名
  - 市町村ID (外部キー)
  - 面積
  - ジオメトリ <空間インデックス>

- 市町村テーブル `cities`
  - 市町村ID (主キー)
  - 市町村名
  - 振興局ID (外部キー)
  - ジオメトリ <空間インデックス>

- 振興局テーブル `subprefectures`
  - 振興局ID (主キー)
  - 振興局名
  - ジオメトリ <空間インデックス>
```

初期化のスクリプトは次のとおりです。PostGISの拡張機能を利用するため、`CREATE EXTENSION`を実行しておきます。`industries_raw`, `cities_raw`, `subprefectures_raw`はそれぞれ産業施設、市町村、振興局の生データを取り込んだテーブルで、それぞれのデータを整理する新しいテーブルを作成します。

拙いクエリをお許しください。

```sql
CREATE EXTENSION IF NOT EXISTS postgis;

DROP TABLE IF EXISTS industries;
DROP TABLE IF EXISTS cities;
DROP TABLE IF EXISTS subprefectures;

CREATE TABLE IF NOT EXISTS subprefectures (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  geom GEOMETRY NOT NULL
);

INSERT INTO subprefectures (id, name, geom) (
  SELECT DISTINCT id, name, ST_GeomFromEWKB(geom)
  FROM subprefectures_raw
  WHERE id IS NOT NULL
  AND name IS NOT NULL
);

CREATE INDEX subprefectures_geom_idx ON subprefectures USING GIST (geom);

CREATE TABLE IF NOT EXISTS cities (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  subprefecture_id TEXT NOT NULL,
  geom GEOMETRY NOT NULL,
  FOREIGN KEY (subprefecture_id) REFERENCES subprefectures (id)
);

INSERT INTO cities (id, name, subprefecture_id, geom) (
  SELECT DISTINCT ct.id, ct.name, sb.id, ST_GeomFromEWKB(ct.geom)
  from cities_raw AS ct
  JOIN subprefectures AS sb ON ST_Contains(sb.geom, ST_GeomFromEWKB(ct.geom))
  AND ct.id IS NOT NULL
  AND ct.name IS NOT NULL
);

CREATE INDEX cities_geom_idx ON cities USING GIST (geom);

CREATE TABLE IF NOT EXISTS industries (
  id SERIAL PRIMARY KEY,
  name TEXT,
  city_id TEXT,
  geom GEOMETRY NOT NULL,
  area FLOAT NOT NULL,
  FOREIGN KEY (city_id) REFERENCES cities (id)
);

INSERT INTO industries (name, city_id, geom, area) (
  SELECT ind.name, ct.id, ST_GeomFromEWKB(ind.geom), ST_Area(ST_GeomFromEWKB(ind.geom)::geography)
  from industries_raw AS ind
  JOIN cities AS ct ON ST_Contains(ct.geom, ST_Centroid(ST_GeomFromEWKB(ind.geom)))
);

CREATE INDEX industries_geom_idx ON industries USING GIST (geom);
```

以上でデータの準備ができました。

### QGISによる可視化

結果の確認用および撮影用にQGISでPostGISに接続し、データを可視化します。ベースのレイヤとしてOpenStreetMapのほか、航空写真用に[地理院タイル:全国最新写真（シームレス）](https://maps.gsi.go.jp/development/ichiran.html#seamlessphoto)を利用しました。

## 結果

### スナップショット

![北海道全体での産業施設の立地。各境界線は振興局・総合振興局の境界(赤)および市町村境界(緑)。胆振地方に産業施設が集中しているように見える](articles-src/b1/postgis/images/all.webp)

![室蘭市の産業施設](articles-src/b1/postgis/images/muroran.webp)

![上川地域北部の産業施設。自動車関連の試験場が目立つ](articles-src/b1/postgis/images/shibetsu_wide.webp)

### 産業施設ごとの所属市町村・振興局・面積 (サンプル)


```sql
SELECT ind.name, ct.name, sb.name, ROUND(CAST(ind.area AS NUMERIC),2)
FROM industries AS ind
JOIN cities AS ct ON ind.city_id=ct.id
JOIN subprefectures AS sb ON ct.subprefecture_id=sb.id
Where ind.name IS NOT NULL
LIMIT 10;
```

![|(施設名)|(市町村)|(振興局)|(面積, 平方メートル)|](articles-src/b1/postgis/images/1.webp)

### 産業施設ごとの面積 (大きい順)

```sql
SELECT ind.name, ct.name, sb.name, ROUND(CAST(ind.area AS NUMERIC),2)
FROM industries AS ind
JOIN cities AS ct ON ind.city_id=ct.id
JOIN subprefectures AS sb ON ct.subprefecture_id=sb.id
ORDER BY ind.area DESC
LIMIT 30;
```

![|(施設名)|(市町村)|(振興局)|(面積, 平方メートル)|](articles-src/b1/postgis/images/2.webp)

自動車関連の試験場が多くを占めています。詳しく調べた所、士別市は「自動車等試験研究のまち・士別市」として街をPRしているらしい。

士別市ホームページより: https://www.city.shibetsu.lg.jp/soshikikarasagasu/homupejikanrisha/3721.html

> これら5か所の試験場の総面積は、行政区域面積の約2.8％を占める1,670haに及び、全国に類のない規模の試験場の集積地となりました。...(中略)...士別市はかつての冬期間の耐寒試験だけのまちから、自動車等試験研究のまちへと変貌を遂げました。

QGISを確認すると、確かに贅沢に土地を使って立地しています。

![士別市の自動車関連の試験場。特に左のトヨタとダイハツの試験場が目立つ。他にマツダが近隣にあるほか、細長いものはヤマハの試験場のよう](articles-src/b1/postgis/images/shibetsu.webp)

> 特に北海道北部の内陸部は、寒冷地で積雪量も多く、広い土地が比較的容易に確保できることから、寒冷地試験の適地として試験場の造成が進められ、現在、道内の自動車関連試験場は28を数えます。

過酷な環境がアドバンテージになっているのは興味深い話です。周辺には他にも、下川や仁宇布に試験場が位置しているようです。

### 振興局ごとの産業施設の面積の合計 (大きい順)

```sql
SELECT sb.name, ROUND(CAST(SUM(ind.area) AS NUMERIC),2) AS indsum
FROM industries AS ind
JOIN cities AS ct ON ind.city_id=ct.id
JOIN subprefectures AS sb ON ct.subprefecture_id=sb.id
GROUP BY sb.id
ORDER BY indsum DESC;
```

![|(振興局名)|(面積合計, 平方メートル)|](articles-src/b1/postgis/images/3.webp)

上川地方が面積を広く取っていることがわかります。これも自動車関連の試験場の多さによるものと思われますが、少々想定外の結果ではあります。ただしこの尺度に置いても、苫小牧・室蘭・白老を抱える胆振地方は重工業の影響を強く受け、上川地方と土地利用の傾向の近い十勝地方を上回る二番目に位置しています。

![留萌や檜山地域は控えめだが、風力発電が力強く生きている](articles-src/b1/postgis/images/rumoi.webp)

### 市町村ごとの産業施設の面積の合計 (大きい順)

```sql
WITH rank_ind AS (
  SELECT ind.id, ind.name, ROW_NUMBER() OVER (PARTITION BY ct.id ORDER BY ind.area DESC) AS rn
  FROM industries AS ind, cities AS ct
  WHERE ind.city_id=ct.id
)
SELECT ct.name, sb.name, ROUND(CAST(SUM(ind.area) AS NUMERIC),2) AS indsum, rank_ind.name
FROM cities AS ct
JOIN industries AS ind ON ind.city_id=ct.id
JOIN subprefectures AS sb ON ct.subprefecture_id=sb.id
JOIN rank_ind ON rank_ind.id=ind.id
WHERE rank_ind.rn=1
GROUP BY ct.id, sb.name, rank_ind.name
ORDER BY indsum DESC
LIMIT 20;
```

![|(市町村名)|(振興局名)|(面積合計, 平方メートル)|(最大の産業施設名)|](articles-src/b1/postgis/images/4.webp)

自動車関連の試験場の他に特徴的なものとしては、製鉄所(室蘭)や製紙工場(旭川・白老)のある都市が目立ちます。ほかは工業団地や発電所、石油備蓄基地といった施設を抱える都市が多い印象です。

### 身近な地域 (北緯42.25度線以南かつ渡島・檜山地域内) の産業施設の面積 (大きい順)

```sql
SELECT ind.name, ct.name, sb.name, ROUND(CAST(ind.area AS NUMERIC),2)
FROM industries AS ind
JOIN cities AS ct on ind.city_id=ct.id
JOIN subprefectures AS sb on ct.subprefecture_id=sb.id 
WHERE ST_Y(ST_Centroid(ind.geom)) < 42.25
AND sb.name IN ('渡島総合振興局', '檜山振興局')
ORDER BY ind.area
DESC LIMIT 10;
```

![|(施設名)|(市町村)|(振興局)|(面積, 平方メートル)|](articles-src/b1/postgis/images/5.webp)

施設名が`NULL`のものが多いですが、これをOpenStreetMapを参照しつつ見ると、上位にあるものはセメント関連の施設となっています。

![北斗市。西側の峩朗鉱山(石灰石)や海に伸びるベルトコンベアが目立つ](articles-src/b1/postgis/images/hokuto2.webp)

このあたりのセメント産業については「[北斗市歴史年表](https://www.city.hokuto.hokkaido.jp/bunkazai/data/sement.htm)」(北斗市のサイトのようですが更新されているかは怪しく、各所に味が出ている)に詳しい話があります。最盛期には専用の電気鉄道もあったようです。

## おわりに

厳密な調査に基づいたものではない為、結果が正確とは言えませんが、道内の産業の概観が伺え興味深いものでした。

道南地域は鉱山が目立ったことが印象的です。道内には閉山した鉱山が多く所在し、また自動車関連の試験場は昭和50年代以降に設置されたものであることから、仮に過去の土地利用を参照できれば、今と相当異なる結果が得られる可能性があります。

PostGISについては、空間インデックスもしかり、空間的な内包関係による絞り込みを`WHERE`句で処理するといった具合に、空間タスクをSQLにうまく落とし込んでいるのが良い感触でした。

## 参考リンク

- [士別市ホームページ, 「自動車等試験研究のまち・士別市」](https://www.city.shibetsu.lg.jp/soshikikarasagasu/homupejikanrisha/3721.html)
- [北斗市ホームページ, 「北斗市歴史年表」](https://www.city.hokuto.hokkaido.jp/bunkazai/data/sement.htm)
- [OpenStreetMap Wiki, 「JA: タグ」](https://wiki.openstreetmap.org/wiki/JA:%E3%82%BF%E3%82%B0)
- [OpenStreetMap](https://www.openstreetmap.org/)
- [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API)
- [Overpass Turbo](https://overpass-turbo.eu/)
- [PostGIS](https://postgis.net/)
- [GDAL/OGR](https://gdal.org/)