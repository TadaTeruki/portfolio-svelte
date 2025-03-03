---
title: "p2hacks 2023を終えて"
description: "学内ハッカソン「p2hacks 2023」の振り返り記事"
thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Farticles%2Fcaa1a97c-41d2-4d9a-87d2-0601df48f4be%2Fp2hacks.webp?alt=media&token=f353ed49-0783-40fc-9448-86d2a104455b"
created_at: "2023-12-18T15:22:05.689362571Z"
updated_at: "2023-12-19T01:58:23.373027191Z"
tags: 活動 技術 ハッカソン attr-old
---

![p2hacks](https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Farticles%2Fcaa1a97c-41d2-4d9a-87d2-0601df48f4be%2Fp2hacks.webp?alt=media&token=f353ed49-0783-40fc-9448-86d2a104455b) 
▲ p2hacks会場の様子


ぺるきです。

先日、学内ハッカソンp2hacksに参加し、「この世界は熱すぎる!!!」という作品を開発しました。
結果、学部1・2年の参加枠となるPre-PBL部門にて、優秀賞をいただきました。一緒に開発してくれた2人には本当に感謝しています。そしてp2hacksを支えた運営の先輩方や関係者にも、このような刺激的な場を用意して頂いたこと改めて感謝申し上げます。

# 開発したもの

![この世界は暑すぎる](https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Farticles%2Fcaa1a97c-41d2-4d9a-87d2-0601df48f4be%2F%E3%81%93%E3%81%AE%E4%B8%96%E7%95%8C%E3%81%AF%E7%86%B1%E9%81%8E%E3%81%8D%E3%82%99%E3%82%8B.webp?alt=media&token=89e667f8-27d3-4251-8cae-ee736a712e3d) 


<img alt="sc1" src="https://github.com/p2hacks2023/pre-06/assets/69315285/82ace60e-df42-42b7-8860-3e5e2f85418c" width="28%"></img>
<img alt="sc2" src="https://github.com/p2hacks2023/pre-06/assets/69315285/d77446c0-d8a2-4c64-8993-6315ef9ef148" width="28%"></img>
<img alt="sc3" src="https://github.com/p2hacks2023/pre-06/assets/69315285/23f789bd-8ec4-48b7-bfa9-3862f22c896f" width="28%"></img>

<br>

___

**この世界は熱すぎる!!!**

**アンチひんやり**を破壊し、世界平和を取り戻せ!!!

___

<br>

### 遊びたい方向け

**リンク: https://p2.jugesuke.net/** <br>
(GitHub: https://github.com/p2hacks2023/pre-06)

スマホ縦持ち推奨です。タブレットや横持ちでも一応プレイできます。<br>
PC非対応 (Responsive Design Modeで遊べるのは秘密)。<br>
しばらくプレイできますが、予告なく公開を停止する場合があります。<br>

<br>

___

<br>


...要旨だけ説明すると「赤いもの (=アンチひんやり) 」を破壊して気持ちよくなるゲームです。ちなみにハッカソンのテーマは「ひんやり」でした。赤いものは熱い、拡大解釈にも程がある。

普段ゲーム開発をしない3人によるゲーム開発でした。 (特に最初の段階では) うまくいくか終始不安でしたが、なんとか要件のほぼ全てを実装完了し、プロダクトの公開まで漕ぎ着けました。

## メンバーについて

企画とプレゼンはYourein君が行っています。詳しいところは[Yourein君の記事](https://yourein.github.io/2023-12-17-5fac3b/)が全部語っているのでそちらを見てください。強すぎる世界観もさながら、勢いのあるプレゼンで本当に良かったです。

メインとなるTSでの実装部分は、ぺるきとJugesuke君で開発しました。
今回の開発はぺるきが初期段階で設計・構築した独自フレームワーク上での実装となっており、Jugesuke君にはオレオレ環境を押し付ける形となってしまったので、申し訳ない気持ちです。

またJugesuke君は、CI/CD含むインフラ環境の整備も担当していました。今回のようなゲーム開発においては、実装したグラフィカルなUIや演出が、世界観と合致し、かつ全員が納得する形で実装できているのかをすり合わせる必要がありました。そのため、デプロイ結果を共有するだけで非同期でもレビューを受けられるCI/CD環境は、本当に有り難いものでした。

実装部分にはYourein君も参加しており、ボトルネックになる画像処理の部分をRust (wasm) で実装していました。動作検証の難しい状況で、テストまで書いて出していて助かりました。

# 技術的な話

ここからは自分が担当した部分の話をします。ソフトウェア設計のほか、ゲームロジックのコア部分、そして各種演出を実装しています。ここではかいつまんで紹介します。

## フレームワーク設計


最初の段階で、HTML/Canvas環境上で共同開発するための独自フレームワークを設計・実装しました。ゲームの部品をコンポーネントとして切り離し、それぞれでテストできるようにしています。またブラウザの機能およびフレーム・シーンの管理を抽象化し、イベントとして各コンポーネントで処理できるようにしています。

```typescript
import Bound from "../geometry/bound";
import Point from "../geometry/point";
import { TouchEndEvent, TouchMoveEvent, TouchStartEvent } from "../model/event";
import { Scene } from "../model/scene";

export interface Component {
  // コンポーネントの領域
  bound: Bound;

  // 画面が描画される時
  draw (context: CanvasRenderingContext2D) : void;

  // 画面が擦られた時
  onScratch? (previousCursor: Point, currentCursor: Point) : void;

  // シーンが変化した時 (ただし、コンポーネントが前後両方のシーンで有効である必要がある) 
  onSceneChanged? (previousScene: Scene, currentScene: Scene) : void;

  // タッチされた最初のフレームの時
  onTouchStart? (event: TouchStartEvent) : void;

  // タッチされている時
  onTouchMove? (event: TouchMoveEvent) : void;

  // タッチが離された時、またはタッチがコンポーネントから外れた時
  onTouchEnd? (event: TouchEndEvent) : void;
}
```
▲ *pre-06/src/engine/component/component.ts*

このインターフェイスを実装したクラスを各自で作り、インスタンスを適切に配置すれば、ゲーム上で動かせるようになります。入力イベントを利用する際の面倒な実装 (各コンポーネントの範囲に基づくタッチの判定、使用する座標系の指定、カーソルが外れた時の対応など) も、各コンポーネントを処理する前によしなに処理しています。

半日で開発したので、今改めて見ていると色々とアラはあります。それでも、このフレームワークを原因に技術的課題が発生することは最後まで無かったため、安心しています。

## 画像が「崩れる」演出

<img alt="sc2" src="https://github.com/p2hacks2023/pre-06/assets/69315285/d77446c0-d8a2-4c64-8993-6315ef9ef148" width="300"></img>

このゲームの中盤で、プレイヤーがスクリーンを擦る動作に合わせて、撮影した画像の熱い (=赤い) 部分をバラバラに崩す演出があります。こちらも僕が実装しました (なお、ピクセルの熱さ判定はYourein君が書いています) 。

崩れる形はボロノイ図に基づいています。
企画段階では、処理の最初に画像をボロノイ分割し、プレイヤーが擦った位置に合わせて各ボロノイセルを落としていく実装を考えていました。一方でこのアプローチは、擦った位置と崩れる図形の位置に無視できない差が生じる可能性があり、操作感に影響が出てしまいます。またこのアプローチには、優先度付きキューやボロノイ分割のようなアルゴリズムの実装が必要です。こういったアルゴリズムは、自分で書くには面倒であるのはもちろん、外部ライブラリに依存してまともに動いた試しがありません。

```typescript
    ....
    // 擦った点の周囲にランダムに点を作る
    const voronoiPoints = [[startx, starty]];
    let angle = 0.0;
    // ランダムな点の間が角度が大きすぎると、図形が閉じず破片が無限に広がるので、制限する
    const minAngle = Math.PI / 3;
    const maxAngle = Math.PI / 2.2;

    while (angle < 2 * Math.PI - minAngle) {
      const random = Math.random () * (maxAngle - minAngle) + minAngle;
      angle += random;
      const radius = Math.random () * this.scratchRadius + this.scratchRadius;
      const x = startx + radius * Math.cos (angle) ;
      const y = starty + radius * Math.sin (angle) ;
      voronoiPoints.push ([x, y]) ;
    }

    let stack = [[startx, starty]];

    while (stack.length > 0) {
      ... // 隣り合う点を取り込み、ボロノイ図を作る

```
▲ *pre-06/src/engine/component/scratchableImage.ts*

そこで、擦った時点でその位置を囲むように4-7個ほどランダムに点をうち、そこで即時にボロノイ図を作成する手法をとっています。擦った位置のピクセルを始点として、隣接するピクセルについて、最も近い点が擦った位置の点でなくなるまで連鎖的に取り込み続けます。これにより、ボロノイセルの外接円の中心が擦った位置とおおむね一致するので、熱い場所がちゃんと擦った場所に合わせて崩れるようになります。加えて、実装の面倒なアルゴリズムを必要としません。

また、崩れ落ちた部分は別のイメージとして書き出して動かすのではなく、画像の打ち込み時に各ピクセルを本来の位置より下に書き出すことで、面倒な実装せずに高速な描画を実現しています。

# 素材作成について

もう一つの役割として、ロゴをはじめ素材全般を担当しました。僕は中途半端に (いわゆる「当たり前品質」的な水準で) 絵は描けるので 、デザイン学科の人がいない場ではこういった担当に回りがちです。

![logo](https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Farticles%2Fcaa1a97c-41d2-4d9a-87d2-0601df48f4be%2Flogo.webp?alt=media&token=779e7630-ebe7-4b2f-b18e-a2d7294bb2b8) 

ロゴはillustratorで作った初めての素材ですが、なかなか気に入っています。

# 感想

プロダクトを完成させた上、デプロイまで済ませ、発表当日に多くの人にプレイしてもらえたのは本当に良かったです。

グラフィックス的な処理に関するタスクも多く、Webサービスの開発と比べて (個人的には) とても楽しい、というか、生きた心地のするプログラミングができました。演出や素材作成もいろいろ勝手にさせてもらったため、全体的に楽しかったです。

## 惜しい点

ゲーム開発という慣れない題材もあってか、技術スタックとしてはあまりガチれなかった印象です。Vanilla TS環境の上、描画にCanvasを採用したこともあり、終始「最新の知見を寄り合わせていにしえのWebを書いている」気分でした (それでも、CI/CDを導入したり、Rustを使ってボトルネックを緩和させているのはなかなか変態ではあります) 。

## チームとの議論を振り返って

[Yourein君も語っていますが](https://yourein.github.io/2023-12-17-5fac3b/) 、自分は他のメンバーに対抗して意見を述べることが多かったです。特にリリース準備の段階に関しては、衝突することが多々ありました。発表のスタイルや、ドキュメント (アピールシート) の内容について、意見を投げては「それは今やるべきことじゃない/不要だ」と指摘を受け続けました。

このことについては、どうしても「何にこだわるか (何が不要か) 」で大きな溝が合ったように感じます。
限られた時間しか与えられない以上、不要な作業は避けるべき...という意識は必要です。しかしながら、具体的に何が必要で、何が不要なのか、というところには、どうしても個人差が発生し得ます。

そしてこの溝は、自分とそれ以外のメンバーの間で特に深かったように感じます。自分は見栄え重視なところが大きく、プロダクトそのものよりも、発表やドキュメントへのウェイトが比較的大きかった気がします。そのこともあってか、ところどころ、2人の方針や意見に納得がいかないことがありました。そういった中で、お互いにもやもやしながら、開発を進めていました。

とはいえ、自分が終盤で食い気味になってしまったことは、深く反省しています。
また、Yourein君の発表スタイルしかり、最終的には自分の意見をいくつか汲み取ってくれたこともあり、最後には納得できる結果に収まりました。いろいろと、感謝と申し訳無さを感じます。チーム開発、本当に難しい！

## 他の人の開発物を見て

個人的には、えびとシュリンプ (最優秀賞受賞) 、progression、んどんどん、の3チームから強い印象を受けました。おそらくこのいずれかが上位賞を独占するのだろうと思っていたので、うちのチーム (fuNG) が優秀賞を取るのは正直意外でした (それでもやはり企業賞枠は漁られました) 。

特にprogressionには、いろいろと一本取られた気分でした。Three.jsを使ってReact環境上で3Dグラフィックスを実現しており、開発環境・素材・演出含め本当に素晴らしいものでした。

とはいえ率直ながら、Pre-PBL部門の中で、テーマ「ひんやり」に一番合うプロダクトを開発したのは、他でもなくうちのチームだと思います。あくまでも「世の中の課題解決」を求められるハッカソンという場にありながら、本質を放り投げ拡大解釈も辞さない、とち狂った勢いを貫くプロダクトは本当に輝いています。

# おわりに


5000円は何に使おう。「[イ良い日ン マ](https://www.amazon.co.jp/%E3%82%A4%E8%89%AF%E3%81%84%E6%97%A5%E3%83%B3-256GB%E3%83%9E%E3%82%A4%E3%82%AF%E3%83%ADSD-SDXC%E3%83%A1%E3%83%A2%E3%83%AA%E3%83%BC%E3%82%AB%E3%83%BC%E3%83%89%E3%83%97%E3%83%A9%E3%82%B9%E3%82%A2%E3%83%80%E3%83%97%E3%82%BF%E3%83%BC%E3%83%91%E3%83%83%E3%82%AF%EF%BC%88%E3%82%AF%E3%83%A9%E3%82%B910%EF%BC%89%E8%B6%85%E9%AB%98%E9%80%9FTF-MicroSDXC-4K%E3%83%95%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5%E6%90%BA%E5%B8%AF%E9%9B%BB%E8%A9%B1%E3%80%81%E3%82%BF%E3%83%96%E3%83%AC%E3%83%83%E3%83%88PC%E3%80%81GPS%E3%80%81%E3%83%89%E3%83%AD%E3%83%BC%E3%83%B3%E3%80%81%E3%82%AB%E3%83%A1%E3%83%A9/dp/B07BTQ58C7/ref=cm_cr_arp_d_bdcrb_top?ie=UTF8) 」でも買おうかしら？

