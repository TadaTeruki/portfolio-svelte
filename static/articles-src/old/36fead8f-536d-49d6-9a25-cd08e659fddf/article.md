---
id: "36fead8f-536d-49d6-9a25-cd08e659fddf"
title: "ポートフォリオ開発 ほぼ知らん技術だけで30日間Web開発 "
description: "FUN Advent Calendar 2022 の記事です。当サイトの開発について"
thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Farticles%2F36fead8f-536d-49d6-9a25-cd08e659fddf%2Fhenshu.webp?alt=media&token=2ba52091-6440-41c5-b8c8-01455e19772f&_gl=1*1ughnl8*_ga*NDUwOTM1NzM2LjE2Njk3Njk4NzE.*_ga_CW55HF8NVT*MTY4NTg5MDU0Ni4zNC4xLjE2ODU4OTE1NTcuMC4wLjA."
created_at: "2022-12-10T11:03:09.367259696Z"
updated_at: "2023-06-08T17:37:00.891561169Z"
tags: 技術 FUN-Advent-Calendar Web開発
---

# はじめに

この記事は、[FUN Advent Calendar 2022](https://adventar.org/calendars/7402) の10日目の記事です。
もともと釧路の街を紹介する記事を書くつもりでしたが、12/3に釧路高専にお邪魔する予定が消えてしまったため、急遽記事の方向性を変更する運びとなりました。

## 昨日の記事

 - [Compose for Webで始めるWebアプリ開発](https://qiita.com/kotambourine/items/f9c581c50ee7f241c2f3) by こた先輩
Compose for Webを用いて戦争x美少女x音ゲーを制作したお話でした。僕の最高スコアは63です。ちなみに、以前この方に車でおいしいシロノワールやさんに連れていただきました。

 - [一般情報系学生向け就活体験録](https://mochi-mks.hatenablog.com/entry/2022/12/09/090340?_ga=2.34635749.571247334.1670474787-885289335.1667545595) by mochiさん
未来大生が近く直面するであろうor既にしている、就活に関するお話でした。企業の関わりの持ち方やFUNキャリの活用、準備の仕方(面接練習がない！)など、貴重な情報ばかりでとてもよい知見を得られました。

 - [入学前は美少女になろう](https://yourein.github.io/2022-12-09-ilgen/) by Yourein
近頃流行りのstable diffusionを用いた、美少女アイコン制作についてのお話でした。新入生の方、この記事を読んでぜひともstable美少女になりましょう。

# なにをしたか

**デスマーチ**です。

具体的には、**30日**でゼロからWeb開発をしました。
**今あなたが見ているサイト**(Peruki's Portfolio) がその成果物です。


使った技術は:

**バックエンド** : Rust + tokio + axum + serde
**フロントエンド** : TypeScript + Next.js + React + axios
**ホスティング** : render.com, Cloudflare Pages
**データベース** : Cloud Firestore
その他 : Jwt



この中で、ひと月前まで使えていた技術はひとつもありません。デスマーチたる所以です。せめて言うなら、データベースとして使ったCloud Firestoreについては、ハッカソンで使用した経験がありました。ただそれも、Go製のSDKでしか使っていませんでした。またRustも若干使った経験がありますが、2年前のほんのわずかな期間の話であり、もはや言語仕様を覚えていませんでした。つまるところ、なに一つ知らなかったわけです。

# 開発の流れ

## きっかけ

デスマーチを開始したのは11月8日頃です。ちょうど未来大の学内ハッカソン*p2hacks*の話が舞い込んだ時期であり、チームメンバーで話し合いを進めていましたが、**どのように分けても共通の技術スタックでまとまらない**ことが判明します。フロントエンドもバックエンドも全員どちらか(orどちらも)開発経験がありますが、それぞれ違う言語・フレームワーク・思想なので、バランスよくまとめることできませんその中でも、経験希薄な自分はGoでバックエンドを書くことで精一杯だったので、柔軟な対応をする余裕がなく、とても焦っていました。

そこで、「**Rustでバックエンド書かね？**」という話になります。

バックエンドの言語をGoからRustに変えれば、役割分担がうまくまとまったのです。自分自身Rustに以前から興味があり、さらにメンバーの中でも暇な方だったので、いちから学ぶ余裕がありました。
そこで、思い立ったが吉日、Rust修行をすることにしました。

## 11月8日-11月30日 (22日間)

**Rustとaxumへの入門**

Rustコミュニティには[Tour of Rust](https://tourofrust.com/)という素晴らしい入門サイトがあったため、特徴的な概念(特にメモリ管理)をのぞいてすぐに飲み込むことができました。実際、Rustに入門してすぐの11月12日、最初の作品を完成することができました。それがこちら →

[perufetch - GitHub](https://github.com/TadaTeruki/perufetch)

[![perufetch](https://github-readme-stats.vercel.app/api/pin/?username=TadaTeruki&repo=perufetch)](https://github.com/TadaTeruki/perufetch)

![perufetch](https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Farticles%2F36fead8f-536d-49d6-9a25-cd08e659fddf%2Fperufetch.webp?alt=media&token=9112ee83-db4e-4af1-8d7d-e1c0d4309c47&_gl=1*6y95ku*_ga*NDUwOTM1NzM2LjE2Njk3Njk4NzE.*_ga_CW55HF8NVT*MTY4NTg5MDU0Ni4zNC4xLjE2ODU4OTE1NDIuMC4wLjA.)

ノリでやっても特に問題ないだろうと考えた私は、WebAPIに挑戦することにしました。
axumはRust製Webフレームワークの中でも比較的新しいもので、先輩や有識者の意見を参考に採用しました。

最終的にちゃんと動くものが完成しました:

[**portfolio-server** (GitHub)](https://github.com/TadaTeruki/portfolio-server)

[![portfolio-server](https://github-readme-stats.vercel.app/api/pin/?username=TadaTeruki&repo=portfolio-server)](https://github.com/TadaTeruki/portfolio-server)


ブログサイトの制作を想定して開発したAPIです。

本当は、これをリリースした時点で目的は果たしたので、プロジェクトは終わるはずでした。しかし、**こんなに頑張って書いたのに、持ちくさすのは悲しくなります。** ということで、フロントも書くことにしました。なんもわからんが大丈夫か...？

## 12月1日-12月5日 (5日間)

**ReactとTypeScriptへの入門**

React+TypeScript修行を始めました。Reactを採用した理由は特になく、なんとなくナウくキラキラしている印象があったので使ってみました。

いろいろあったにはあったのですが、意外と順調で、なんとか余裕を持って書き終えました。

[**portfolio-front** (GitHub)](https://github.com/TadaTeruki/portfolio-front)

[![portfolio-front](https://github-readme-stats.vercel.app/api/pin/?username=TadaTeruki&repo=portfolio-front)](https://github.com/TadaTeruki/portfolio-front)

無事フロントも開発したので、あとはデプロイするだけと思っていました。

## 12月6日

**render.comによるデプロイ修行**

ホスティングサービスは[render.com](https://render.com/)を使いました。学祭のハッカソンで利用していた経験もあり、これを使えばよしなにデプロイ出来るやろ...と思っていましたが、問題が発生しました。

**遅すぎる...**

[**最初のデプロイ (期間限定公開)**](https://peruki-portfolio.onrender.com)

たまにスムーズに動くのですが、たいてい記事の読み込みが遅すぎてタイムアウトしてしまうはずです。

この原因ですが、どうやらホスティングサービスとして使っていた*render.com*に問題があるっぽいのです。というのも、無料枠ではどうしても速度を出せないわけですし、その上でフロントもサーバーも立ち上げるわけですから、恐ろしく時間がかかるわけです。そもそもケチるなという話なんですが…

フロント側は別のホスティングサービス**Cloudflare Pages**に移植すれば解決できそうですが、WebAPIは(それもRust製となると)どうしてもrender.com以外に対応しているものがなく、どこかでrender.comへの問い合わせを挟む必要がありました。

これについて、某有識者に相談したところ



> 某「今のコードを使ってなんとかするのは難しそう」

> P「え…どうにかならんのか」

> 某「表示内容をフロント側にあらかじめレンダリングして常駐させておくといいかもね」

> P「お、そんなことができるのか、、やります、どうすればいい？」

> 某「**Next.jsを使うといいですよ**」

> …

ここまで来たら、やるしかなかった...

## 12月7日-12月8日 (2日間)

**Next.jsで地獄の書き直し作業**

ということでNext.jsで全部書き直すことになったかですが、そのことについて具体的に説明します。


**SSG(Static Site Generator)** とは、ビルド時にページの表示内容を全部レンダリングして常駐させておく技術のようです(参考:[Cloudflare](https://www.cloudflare.com/learning/performance/static-site-generator/))。ページ表示時にサーバーに毎回問い合わせる必要がなくなるので、バックエンドが遅い問題をなんとか回避できます。

**Next.js**は、このSSGを標準でサポートするフレームワークです。さらにReactベースなので、今まで書いたコードもある程度使い回せます。

サーバーへの問い合わせ処理が遅かったわけですから、フロント側のアクセスですめばすべて解決するだろうという算段です。

命をかけた実装の末...

[**portfolio-front-next** (GitHub)](https://github.com/TadaTeruki/portfolio-front-next)

[![portfolio-front-next](https://github-readme-stats.vercel.app/api/pin/?username=TadaTeruki&repo=portfolio-front-next)](https://github.com/TadaTeruki/portfolio-front-next)

**動いた！動いたぞ！**
偉すぎです。あとはデプロイするだけです。

## 12月9日

デプロイを完了しました。

[**制作した作品**](https://portfolio-front-next.pages.dev)

最後は*Cloudflare Pages*でデプロイしました。WebAPIはそのサービスでは運用できなかったため*render.com*のままですが、SSGのおかげで高速にレンダリングできます。書き直してよかった...

# 実装した機能

 - **記事閲覧機能**
    
   ブログ機能の基礎です。公開する記事は事前レンダリングし、非公開の記事は別途サーバーから問い合わせてクライアントでレンダリングする、という形にしています。

 - **認証機能**
   
   記事の編集・作成・削除などもページ内で済ませたかったので、管理者権限を認証する機能を実装することにしました。認証情報のやりとりには、高度ICTでも使われていた**JSON Web Tokens(Jwt)** を使いました。

 - **記事編集画面**

   まあまあ凝りました。画面左は記事の入力欄、画面右はプレビューが表示されます(Qiitaを意識しました)。この記事も当然サイト上で編集しています。

![記事編集画面](https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Farticles%2F36fead8f-536d-49d6-9a25-cd08e659fddf%2Fhenshu.webp?alt=media&token=2ba52091-6440-41c5-b8c8-01455e19772f&_gl=1*1ughnl8*_ga*NDUwOTM1NzM2LjE2Njk3Njk4NzE.*_ga_CW55HF8NVT*MTY4NTg5MDU0Ni4zNC4xLjE2ODU4OTE1NTcuMC4wLjA.)

### 実装が間に合わなかった機能

 - **記事の検索機能**

   実は、純粋なReactで書いたときには[ちゃんと実装していました](https://peruki-portfolio.onrender.com)。Next.jsに移植することになったときは、本当に時間がなかったので、、、諦めました。これから作っていきたいところです。

 - **記事のタグ機能**

   本当は、記事タイトル下部のタグをクリックすることで、同じタグの記事を検索できる機能を実装する予定でした。この記事にも「#技術」「#Web開発」といったタグのようなものがありますが、検索機能が実装できていないので、当然これを使った記事の検索もできません。この機能もReact版では[ちゃんと実装しており](https://peruki-portfolio.onrender.com)、Next.js移植時にやむなく諦めたものです(カーソルを重ねると色が変わるのはその名残です)。

 - **記事の作成・更新による即時公開機能**
   
   実はSSGには罠があります。ビルド時にすべての記事をレンダリングするので、途中で追加した記事は公開されません。[これ](https://developers.cloudflare.com/pages/platform/api)をみるとできそうな気がしていますが、当然よくわからないので要調査です。

# 開発の影響

 - GitHubのプロフィールのMost Used Languagesの欄が、知らん技術で埋まる

[![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=TadaTeruki&hide=html,shell,makefile)](https://github.com/anuraghazra/github-readme-stats)

 - 電子工学基礎を落とした気がする (追記: 単位ギリギリ認定でした)

# おわりに

この30日間の進捗はかなり満足です。大学生活の中で「やろう、絶対やろう」と考えつつ全くできていなかったことのうち、2つや3つを短期間で果たすことができたので大満足です。

明日(1時間後)は「********っぽいものをGo言語で自作してみた」by Jugesuke、「AIチャットに言われた通りに何かを作る(準備編)」by ハニー・トー、「初めて記事を書くかもしれない人...(略)」by nagata の三本です。こうご期待！


## 話は変わりますが...

**未来大生の皆さん、2/4、釧路へ行きましょう。**

[**compass**](https://nitkc-kpc.connpass.com/event/264673/)

きたるこの日、釧路高専の方々とLTをすることになりました。僕も行きます。
みなさんも行きましょう。今こそ距離感覚をバグらせる時！

