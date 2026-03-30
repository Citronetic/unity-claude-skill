[Image: image]

# ボーナス機能 2 - 作品をシェアしよう

Exercise

Beginner

+60XP

60 mins

18

Unity Technologies

[Image: ボーナス機能 2 - 作品をシェアしよう]Summary

このチュートリアルでは、このユニットで学んだこと以上のことをして、作ったものを仲間のクリエイターと共有することができます。

このチュートリアルでは、「Easy」「Medium」「Hard」「Expert」の 4 つのボーナス機能が用意されています。これらのボーナス機能にいくつでもチャレンジして、自分なりにアレンジして、その作品をシェアしてみてください。

このチュートリアルをやるかどうかは皆さんにお任せしますが、自分のスキルをさらに向上させたい方は挑戦してみることをお勧めします。

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

このチュートリアルでは「Feed the Animals」プロトタイプの 4 つのボーナス機能をレベル別に説明します。

- **Easy**：プレイヤーの縦方向への移動
- **Medium**：攻撃してくる動物
- **Hard**：ゲームのユーザーインターフェイス
- **Expert**：動物の満腹度のバー表示

4 つの機能をすべて実装すると、プロトタイプは下の画像のようになります。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

「Easy」と「Medium」の機能は、このコースで習ったスキルですべてクリアできると思いますが、「Hard」と「Expert」の機能を実装するには、さらに研究する必要があるでしょう。

この課題は任意なので、どれもやらなくてもいいし、全部やってもいいし、いくつかだけやるということでもかまいません。

また、自分でオリジナルのボーナス機能を思いつくこともあるでしょう。

そしてこのチュートリアルの最後には、皆さんの作品をシェアする機会があります。

これらの問題に挑戦するにあたっては、ひたすら Google 検索し、トラブルシューティングを行うことを強くお勧めしますが、もし完全に行き詰まってしまった場合は、チュートリアルの最後にヒントや実装方法の手順ごとの解説が用意されているので、そちらをご覧ください。

幸運を祈ります。

ステップを完了としてマーク

## 2. Easy：プレイヤーの縦方向への移動

Q&A (0)

プレイヤーが一定の範囲内で前進・後退できるようにしてみましょう。

これでゲームが少しダイナミックになり、他の機能を追加する足掛かりができます。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

ステップを完了としてマーク

## 3. Medium：攻撃してくる動物

Q&A (0)

画面の左と右からも動物が出てくるようにして、ぶつかったら「Game Over」とコンソールに表示されるようにしましょう。

これにより、ゲームははるかにエキサイティングなものになり、プレイヤーは常に気を張っていなければならなくなります。特に、縦方向の動きが実装されていればなおさらです。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

ステップを完了としてマーク

## 4. Hard：ゲームのユーザーインターフェイス

Q&A (0)

ゲーム開始時、コンソールに「Lives=3」「Score=0」と表示するようにします。プレイヤーが動物にエサをあげたら Score を増やして表示を更新します。動物にエサをあげる前に画面の外に行ってしまったり、動物にぶつかったりした場合、Lives を減らして表示を更新します。Lives が 0 になったら、コンソールに「Game Over」と表示するようにしましょう。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

ステップを完了としてマーク

## 5. Expert：動物の満腹度のバー表示

Q&A (0)

それぞれの動物の上に満腹度をバー表示してみましょう。エサをあげるたびに、満腹度バーが少しずつ満たされていきます。動物はそれぞれ満腹になるまでに必要な食べ物の量が異なるようにし、満腹度がいっぱいになってから画面から消えるようにしてください。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

ステップを完了としてマーク

## 6. ヒントと実装方法の解説

Q&A (0)

**ヒント：**

- Easy：プレイヤーの縦方向への移動

- 横方向に動かす方法を参考にしてみましょう。
- Medium：攻撃してくる動物

- 今どうやって動物を出現させたり衝突を発生させたりしているかを参考にしてみましょう。
- Hard：ゲームのユーザーインターフェイス

- DetectCollisions スクリプトでスコアとライフを更新する必要があります。また、ライフは DestroyOutOfBoundsスクリプトでも更新する必要があります。
- Expert：動物の満腹度のバー表示

- UI Slider オブジェクトを World Space レンダーモードで追加したものをプレハブにし、これを動物たちにそれぞれ追加する必要があります。追加したら、スクリプトを使ってスライダーの値が動物にエサをあげるたびに更新されるようにします。

**実装方法の解説**

完全に行き詰ってしまったら、[実装方法を手順ごとに示した解説](https://connect-prd-cdn.unity.com/20210505/70ffeabd-706f-4556-b9a9-ea6bd8ba631a/Unit%202%20-%20Bonus%20Features%20Solutions.pdf?_ga=2.238771392.1593215530.1626056424-885026687.1620281339&_gl=1*3ri9lg*_ga*ODg1MDI2Njg3LjE2MjAyODEzMzk.*_ga_1S78EFL1W5*MTYyNjA4MTExOS4xNTQuMS4xNjI2MDgxNjMxLjQ1)をダウンロードしてください。

ここで示したボーナス機能を実装する方法は何通りもあり、この解説はそのうちの 1 つを解説したものです。

ステップを完了としてマーク

## 7. 作品をシェアしよう

Q&A (0)

ボーナス機能の実装はできましたか？何か新しいユニークな機能を追加しましたか？これらの新機能を別のプロジェクトに応用しましたか？

皆さんの作品を見せてください！

皆さんが作ったプロジェクトのスクリーンショットや説明動画を撮ってここに投稿し、作ったものをシェアしましょう。

また他のクリエイターの投稿に、そのプロジェクトのどこが気に入ったのか、こんな機能があったらもっと良くなるなど、コメントを付けてみることもおすすめします。

#### 提出するにはログインしてください

ログイン

## Complete this Tutorial

すべてのステップを完了としてマーク

Submission Gallery

[[Image: Prototype2]

Prototype2

prototype2 project added bonus features

Uunity_05070BD1CAC6F399D643150](https://learn.unity.com/submission/63fcff92edbc2a7139986052)[[Image: unit2]

unit2

rrrrr

Kkatsudon_love100](https://learn.unity.com/submission/634d1245edbc2a0b39f5febd)[[Image: SandwichSyuriken]

SandwichSyuriken

Little difficult for me.
did it with online document.

KKoji150](https://learn.unity.com/submission/633fd21fedbc2a5aefef9fd2)[[Image: Simple banana simulater]

Simple banana simulater

Just shoot bananas

Mmizuki255370](https://learn.unity.com/submission/62fba667edbc2a1680d93df2)[[Image: 弾幕を放つクッキー🍪]

弾幕を放つクッキー🍪

追加機能
・弾幕を放つクッキーをランダムに配置
・LivesとScoreを画面上に表示
・ゲームオーバーの実装
ゲームプレイはこちらをクリック

マMマルク Mark610](https://learn.unity.com/submission/62e69517edbc2a4002f6a1e5)[[Image: Animals]

Animals

楽しかった！

YTYasuhara Taisei220](https://learn.unity.com/submission/62e3b099edbc2a59bb384470)Load More
