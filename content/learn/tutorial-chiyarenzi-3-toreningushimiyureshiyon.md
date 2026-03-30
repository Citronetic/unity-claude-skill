[Image: image]

# チャレンジ 3 - トレーニングシミュレーション

Tutorial

Beginner

+10XP

60 mins

0

Unity Technologies

[Image: チャレンジ 3 - トレーニングシミュレーション]Summary

このチャレンジでは、VR Room を作る際に学んだスキルを、産業訓練用シミュレーションで応用します。このアプリでは、ボタン、ノブ、レバー、ジョイスティックなどを使って、工場に落とされたクレートを集め、近くのプラットフォームに積み上げていくことになります。

このチャレンジは、「[Create with VR](https://learn.unity.com/course/create-with-vr)」コースの一部です。

このチャレンジでは、以下のレッスンで学んだスキルを評価します：

- [Comfort & Accessibility](https://learn.unity.com/tutorial/3-1-comfort-and-accessibility?uv=2020.2&courseId=60183276edbc2a2e6c4c7dae&projectId=6018353dedbc2a0f634b7918)
- [Optimization](https://learn.unity.com/tutorial/3-2-optimization?uv=2020.2&courseId=60183276edbc2a2e6c4c7dae&projectId=6018353dedbc2a0f634b7918)
- [Lighting](https://learn.unity.com/tutorial/3-3-lighting?uv=2020.2&courseId=60183276edbc2a2e6c4c7dae&projectId=6018353dedbc2a0f634b7918)

Languages available:

日本語English日本語日本語

## 1. チャレンジ・ウォークスルー

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 日本語

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

ステップを完了としてマーク

## 2. 始めよう

Q&A (0)

**1.  壊れた Training のプロトタイプシーンを開く：**

- **Project**ウィンドウから、**Assets** > **Challenges** > **03_Training** > **Scenes**の順に展開します。
- **Training_Prototype_Broken** シーンをダブルクリックして開きます。

**2.  チャレンジのタスクを開始する：**

- 以下のステップに沿って作業を進めてください。
- スキルを高めたい方は、オプションのボーナスチャレンジのタスクにも挑戦してみてください。
- 困ったときは、ページの下にある各タスクのヒントをご覧ください。

ステップを完了としてマーク

## 3. チャレンジタスク

Q&A (0)

**1.  工場の真ん中に黒いフェードイン画面が表示されます。**

- 黒のフェードイン画面は、ユーザーの視界全体を覆うものでなければなりません。

**2.  「Console Labels」のトグルは、コンソール全体を非表示にします。**

- トグルを無効にすると、コンソール上のラベルだけが消えます。

**3.  床のライティングがとても悪く見えます。**

- 床のライティングも、他の面と同じように細部までこだわって作ってください。

**4.  左奥のボックスの山は、ライティングや影がリアルにベイクされていません。**

- 積み上げられたボックスの影がすべて同じになるようにします。

**5.  コンソール機の上のベイクしたライトに反応せず、とても暗く見えます。**

- 最適化のためにコンソールの上のライトをベイクしたままにしておくと、コンソールがその上のライトで照らされているように見えます。

ステップを完了としてマーク

## 4. ボーナスタスク

Q&A (0)

**6.  また、磁石がアクティブなときと非アクティブのときの視覚的なインジケータはありません。**

- 磁石がアクティブなときと非アクティブなときでは、色が変わるはずです。

**7.  ユーザーは、アプリ全体を通して、自分のレイやダイレクトインタラクターにアクセスできます。**

- ユーザーは指示を読みながらコンソール機を使用することはできず、指示をクリックするとレイが消えるようになっています。

**8.  磁石の速度をユーザーが制御することはできません。 [Expert］**

- 磁石の速度を制御する設定があるはずです。

**9.  このトレーニングでは、ユーザーが進捗状況を確認したり、保存したりすることはできません。 [Expert]**

- 何個のボックスが持ち上げられたか、どのくらいの時間が経過したかを表示するユーザーインターフェースがあるとよいです。

ステップを完了としてマーク

## 5. ヒント

Q&A (0)

**メインタスクのヒント：**

**1.** フェードするキャンバスを見やすくするために、Canvas Group Alpha の Alpha 値を一時的に 1 にして、カメラから離れすぎないようにします。

**2.**正しいオブジェクトがトグルで有効/無効にされていることを確認してください。

**3.**Scene ビューの上部で、Drew モードを Shaded から Baked Lightmap に変更します。床のライトマップの解像度が他のオブジェクトに比べて非常に低いことがわかります。

**4.**オブジェクトをライトマップにベイクするためには、「static」と表示されている必要があります。

**5.** ライトプローブは、ベイクしたライティング条件に応じて動的オブジェクトを反応させることができます。

**ボーナスタスクのヒント：**

**6.**リモートのインジケータランプを変更したのと同じ機能を使うことができます。

**7.**Welcome Text オブジェクトの ShowMessageFromList コンポーネントには、On Complete () イベントがあります。このイベントでは、レイをオフにして、コンソールの機能を切り替えるする必要がありますが、デフォルトでは無効になっているはずです。

**8.**ヒントなし。Google を使ってみよう！

**9.**ヒントなし。Google を使ってみよう！

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
