---
id: "95ebbd04-55e6-44cd-a208-3a497603327c"
title: "ポートフォリオをアップデートしました"
description: "v1.2.0"
thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Farticles%2F95ebbd04-55e6-44cd-a208-3a497603327c%2F1_2_0_home.webp?alt=media&token=88df4e76-08aa-40e8-aa3f-e4416f299258&_gl=1*1f82k1z*_ga*NDUwOTM1NzM2LjE2Njk3Njk4NzE.*_ga_CW55HF8NVT*MTY4NjI0Mzg3Ni40MC4xLjE2ODYyNDQzMTIuMC4wLjA."
created_at: "2023-06-08T17:04:23.263158490Z"
updated_at: "2023-06-08T17:37:19.160771701Z"
tags: 活動 技術 Web開発 attr-old
---


ポートフォリオをアップデートし、v1.2.0としてリリースしました。

[レポジトリ(GitHub)](https://github.com/TadaTeruki/portfolio-front-next)

# 改善点

## 見た目

見た目を一新しました。

▼ ホーム画面(旧)
![home_1](https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Farticles%2F95ebbd04-55e6-44cd-a208-3a497603327c%2F1_1_0_home.webp?alt=media&token=e7c04941-b954-4094-a8f5-dc53547ea6b1&_gl=1*qhrlhg*_ga*NDUwOTM1NzM2LjE2Njk3Njk4NzE.*_ga_CW55HF8NVT*MTY4NjI0Mzg3Ni40MC4xLjE2ODYyNDQzMTkuMC4wLjA.)


▼ ホーム画面(新)
![home_2](https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Farticles%2F95ebbd04-55e6-44cd-a208-3a497603327c%2F1_2_0_home.webp?alt=media&token=88df4e76-08aa-40e8-aa3f-e4416f299258&_gl=1*1f82k1z*_ga*NDUwOTM1NzM2LjE2Njk3Njk4NzE.*_ga_CW55HF8NVT*MTY4NjI0Mzg3Ni40MC4xLjE2ODYyNDQzMTIuMC4wLjA.)

▼ ブログ画面(旧)
![blog_1](https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Farticles%2F95ebbd04-55e6-44cd-a208-3a497603327c%2F1_1_0_blog.webp?alt=media&token=87020013-d274-460c-acd8-f44b1b8a1816&_gl=1*n4p6ad*_ga*NDUwOTM1NzM2LjE2Njk3Njk4NzE.*_ga_CW55HF8NVT*MTY4NjI0Mzg3Ni40MC4xLjE2ODYyNDQzMjUuMC4wLjA.)

▼ ブログ画面(新)
![blog_2](https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Farticles%2F95ebbd04-55e6-44cd-a208-3a497603327c%2F1_2_0_blog.webp?alt=media&token=f7b1f3cd-0727-4f92-9d59-96fa94a82fab&_gl=1*18674dr*_ga*NDUwOTM1NzM2LjE2Njk3Njk4NzE.*_ga_CW55HF8NVT*MTY4NjI0Mzg3Ni40MC4xLjE2ODYyNDQzMTYuMC4wLjA.)

### バナーの追加

写真付きのきれいなバナーをつけたのがポイントです。フッターもふくめ、これらには自分が撮った写真が使われています。いい感じです。


### ブログ検索機能の追加

ブログに検索機能をつけました。まだブログ自体が少ないのであまり使い物にはなりませんが、見た目のアクセントとしてもうまく機能しています。


## 実装面

技術的な負債となりうる部分を解消しました。

 - ファイル構成の見直し
componnentsのなかに無造作に入れてしまっていたコンポーネントをまとめ直しました。

 - prettierのセットアップ
コードフォーマッタの環境設定が行えていなかったため、新しく行いました。

 - パッケージのバージョンのアップデート
恥ずかしながら、node.jsでは勝手に最新版がインポートされるものだと思っていました。検証すると古いバージョンのものや非推奨のパッケージも多くあった他、すでに使っていないパッケージも多く残っていたため、まとめて一掃しました。大変でした。

 - cssのサイズ指定の単位の変更
フォントやコンテンツのサイズを指定するのに、なぜか今までmmを使っていました。結果、デバイスによってめちゃめちゃデカく表示されてしまったりしていました。アップデートを通してこれらをemまたはpxのどちらかに変更しました。

この他にも、語るには恥ずかしいたくさんの負債を解消しています。

## ドキュメント

README.mdを更新しました。(レポジトリ参照)

# 余談

せっかくなので、今までのポートフォリオの見た目も振り返ってみます。

▼ v1.0.0
![home_0](https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Farticles%2F95ebbd04-55e6-44cd-a208-3a497603327c%2F1_0_0.webp?alt=media&token=79f595ae-0a4f-403d-a4e8-50bbcfc88cd1&_gl=1*1pf2qtd*_ga*NDUwOTM1NzM2LjE2Njk3Njk4NzE.*_ga_CW55HF8NVT*MTY4NjI0Mzg3Ni40MC4xLjE2ODYyNDUyNTcuMC4wLjA.)

サイズ指定が全てmmだった頃です。透明感のあるデザインを意識していましたが、すこしゴツすぎた印象です。プロフィールにはなぜか堂々の顔写真。

▼ 初期段階
![home_pre](https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Farticles%2F95ebbd04-55e6-44cd-a208-3a497603327c%2F0_1_0.webp?alt=media&token=83548305-b3bd-4537-b632-f26417b70462&_gl=1*1tqoywm*_ga*NDUwOTM1NzM2LjE2Njk3Njk4NzE.*_ga_CW55HF8NVT*MTY4NjI0Mzg3Ni40MC4xLjE2ODYyNDUyNjAuMC4wLjA.)

公開直後の初期段階、[この記事を書いた頃](https://portfolio.peruki.dev/blog/article/public/36fead8f-536d-49d6-9a25-cd08e659fddf)の見た目です。質素ですが、これはこれですてきだった気もします。

