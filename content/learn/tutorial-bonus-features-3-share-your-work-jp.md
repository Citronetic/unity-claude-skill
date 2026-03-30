[Image: image]

# ボーナス機能 3 - 作品をシェアしよう

Exercise

Beginner

+60XP

60 mins

0

Unity Technologies

[Image: ボーナス機能 3 - 作品をシェアしよう]Summary

このチュートリアルでは、このユニットで学んだこと以上のことをして、作ったものを仲間のクリエイターと共有することができます。

このチュートリアルでは、「Easy」「Medium」「Hard」「Expert」の 4 つのボーナス機能が用意されています。これらのボーナス機能にいくつでもチャレンジして、自分なりにアレンジして、その作品をシェアしてみてください。

このチュートリアルをやるかどうかは皆さんにお任せしますが、自分のスキルをさらに向上させたい方は挑戦してみることをお勧めします。

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

このチュートリアルでは「Run and Jump」プロトタイプの 4 つのボーナス機能をレベル別に説明します。

- **Easy**：障害物をランダムに配置
- **Medium**：2 段ジャンプ
- **Hard**：ダッシュ能力とスコア
- **Expert**：ゲーム開始時のアニメーション

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

## 2. Easy：障害物をランダムに配置

Q&A (0)

障害物を何種類かからランダムに選んで配置するようにしてみましょう。

障害物を 1 つだけでなく、いくつも積み上げてもいいでしょう。そうするとプレイヤーはより注意深くゲームを遊ばなければならなくなります。

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

## 3. Medium：2 段ジャンプ

Q&A (0)

2 段ジャンプをプログラムして、プレイヤーが空中にいる間にもう 1 回ジャンプできるようにしてみましょう。同時に、2 段ジャンプしないと飛び越えられない背の高い（あるいは障害物を 2 つ積み重ねた）障害物を置くようにしてもいいでしょう。

こうするとゲームに新たな仕組みが追加されます。また、2 段ジャンプはどんなプレイヤーにも面白いと感じてもらえるでしょう。

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

## 4. Hard：ダッシュ能力とスコア

Q&A (0)

プレイヤーが特定のキーを押したままにすると、より速く走るアニメーションと共にゲーム中の空間をより速く動くようになる「ダッシュ（超スピード）」能力を追加してみましょう。Debug.Log を使って、プレイヤーのスコアが 0 から増えていく様子を追跡し、「ダッシュ」モードの間は入るスコアが 2 倍になるようにしましょう。最後に、ゲームオーバーになったらスコアを増やすのを止めるようにしましょう。

この要素はゲームにまったく新しい戦略的要素を追加し、プレイヤーはできるだけ高いスコアを取れるように、これまでと異なる戦術を採用するようになるでしょう。

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

## 5. Expert：ゲーム開始時のアニメーション

Q&A (0)

スタート時点で背景が動いていてプレイヤーが走っていますが、これをプレイヤーが左からフレームに歩いて入ってきて、所定の位置に着いたら走り出し、背景が動き出すという形にしてみましょう。

こうすると、プレイヤーはいきなりゲームプレイに放り込まれるのではなく、一旦落ち着いてプレイを始められるようになります。

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

- Easy：障害物をランダムに配置

- SpawnManager のプレハブを設定している箇所を配列に変えてみましょう。
- Medium：2 段ジャンプ

- ブーリアンを使って、2 段ジャンプを 1 回だけできるようにしてみましょう。
- Hard：ダッシュ能力とスコア

- ブーリアンを使って、プレイヤーが速く走っているかを判定してみましょう。
- Expert：ゲーム開始時のアニメーション

- プレイヤーの位置を線形補間してみましょう。

**実装方法の解説**

完全に行き詰ってしまったら、[実装方法を手順ごとに示した解説](https://connect-prd-cdn.unity.com/20210505/00ca7bdf-a2e1-4095-a29d-d084e759c206/Unit%203%20-%20Bonus%20Features%20Solutions.pdf?_gl=1*gawtz9*_ga*ODg1MDI2Njg3LjE2MjAyODEzMzk.*_ga_1S78EFL1W5*MTYyNjE2MTkzMC4xNTguMS4xNjI2MTY0Njc2LjYw&_ga=2.201939153.1593215530.1626056424-885026687.1620281339)をダウンロードしてください。

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
