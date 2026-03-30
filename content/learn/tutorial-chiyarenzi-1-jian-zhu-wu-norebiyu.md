[Image: image]

# チャレンジ 1 - 建築物のレビュー

Tutorial

Beginner

+10XP

60 mins

0

(6)

Unity Technologies

[Image: チャレンジ 1 - 建築物のレビュー]Summary

チャレンジでは、Architecture レビューアプリで VR Room を作る際に学んだスキルを応用します。このプロトタイプでは、ユーザーは実世界のスケールで建物を検討し、その建物のミニチュア 3D モデルと平面図を調べ、さらに定規を使って周囲を見ながら寸法を測ることができます。

このチャレンジテストでは、下記のレッスンで学んだスキルを評価します：

- [VR locomotion](https://learn.unity.com/tutorial/vr-locomotion)
- [Grabbable objects](https://learn.unity.com/tutorial/grabbable-objects)
- [Sockets](https://learn.unity.com/tutorial/sockets-g)

チャレンジは、「[Create with VR](https://learn.unity.com/course/create-with-vr)」コースの一部です。

Languages available:

日本語English日本語日本語

## 1. チャレンジ・ウォークスルー

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

**1.  壊れた建築物レビューのプロトタイプシーンを開く**

- **Project**ウィンドウで、**Assets > Challenges > 01_Architecture > Scenes** の順に展開します。
- **Architecture_Prototype_Broken** をダブルクリックして開きます。

**2.  チャレンジテストの開始**

- 以下のステップに沿って作業を進めてください。
- 自分のスキルを高めたい方は、任意のボーナスチャレンジ問題にも挑戦してみてください。
- 困ったときは、ページの下に各タスクのヒントがあります。

ステップを完了としてマーク

## 3. チャレンジテスト

Q&A (0)

**1.** **Measuring Stick** **とクリップボードが左手首に正しく装着されていない**

- クリップボードを反転させ、Measuring Stick をクリップボードのすぐ左側の場所にスナップ（移動）してください。

**2.  家のモデルは、かなり遠くから台座にスナップしている**

- 家のモデルを台座の上に置くと、台座にスナップするようになっています。

**3.  現在、定規やクリップボードを台座に、家のモデルを左手首にスナップできる**

- 家のモデルは台座にしか置けないようにして、クリップボードと Measuring Stick は手首にしかスナップできないようにします。

**4. ダイニングテーブルの高さが高すぎる**

- テーブルの高さは、ちょうど 0.74 メートル（または 29 インチ）でなければなりません。

**5.  台座の横にあるテレポートアンカーは、プレイヤーを逆さまにして台座の反対側を向くようにする**

- ここでテレポートすると、プレイヤーは直立して台座の方に向かうはずです。

ステップを完了としてマーク

## 4. ボーナスタスク

Q&A (0)

**6.  右手のレイはデフォルトの設定をすべて使用している**

- テレポートがしやすいようにレイの形状を滑らかなベジエ曲線に変更し、有効な色と無効な色を透明から不透明にフェードするように編集します。

**7.  シーンには環境音が必要**

- バックグラウンドに周囲の風の音を加えたり、家の周りのさまざまな場所から聞こえてくるようなランダムな鳥の声を加えます。

ステップを完了としてマーク

## 5. ヒント

Q&A (0)

**主なタスクのヒント：**

**1.**左手のソケットの Attach Transforms の位置と回転を見てみましょう。

**2.**台座のソケットに設置された Sphere Collider のサイズを確認します。

**3.**ソケットと掴めるオブジェクトの Interaction Layer Masks を確認します。

**4.**ぴったりの高さの Measuring Stick を作って、テーブルの横に置いてみてください。

**5.**アンカーのローカル方向と、Teleportation Anchor コンポーネントの「Match Orientation」設定を確認します。

**ボーナスタスクのヒント：**

**6.**線の形状を編集するには XR Ray Interactor コンポーネントを、色を編集するには XR Interactor Line Visual コンポーネントを確認します。

**7.**オーディオソースが 3D の「Spatial Blend」に設定されていることを確認し、必要に応じて OnTimedInterval と PlaySoundsFromList コンポーネントを使って鳥の鳴き声をランダムにします。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
