[Image: image]

# チャレンジ 2 - 3D ペイント

Tutorial

Beginner

+10XP

60 mins

0

Unity Technologies

[Image: チャレンジ 2 - 3D ペイント]Summary

このチャレンジでは、VR Room を作るときに学んだスキルを、3D ペイントアプリで応用します。このアプリでは、ペイントたい形を選び、手持ちのパレットで筆の色や大きさを選択して、最高傑作を作ることができます。

チャレンジでは、以下のレッスンで学んだスキルを確認します：

- [Audio & Haptics](https://learn.unity.com/tutorial/2-1-audio-and-haptics)
- [Activation Events](https://learn.unity.com/tutorial/2-2-activation-events)
- [Direct & Ray Interactors](https://learn.unity.com/tutorial/2-3-direct-and-ray-interactors)
- [User Interface](https://learn.unity.com/tutorial/2-4-user-interface)

チャレンジは、「[Create with VR](https://learn.unity.com/course/create-with-vr)」コースの一部です。

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

**1.  壊れた 3D ペイントのプロトタイプとなるシーンを開く：**

- **Project**ウィンドウで、**Assets** > **Challenges** > **02_3DPainting** > **Scenes**の順に展開します。
- **3DPainting_Prototype_Broken** シーンをダブルクリックして開きます。

**2.  チャレンジのタスクに着手する：**

- 下記のステップに沿って作業を進めてください。
- スキルを高めたい方は、オプションのボーナスチャレンジのタスクにも挑戦してみてください。
- 困ったときは、ページの下にある各タスクのヒントをご覧ください。

ステップを完了としてマーク

## 3. チャレンジタスク

Q&A (0)

**1.  台座の上で形を変えることができる Canvas は、カメラに追従します。**

- このキャンバスは台座の横に固定してください。

**2.  切り替えられるレイとパレットキャンバスは、逆の手をトラッキングしています。**

- 左手でパレットを動かし、右コントローラーのサムスティックまたはプライマリボタンを押すと、右手から切り替えられたレイを放つようにします。

**3.  ペイントブラシの起動は、トリガーを離したときに起動し、押したときに停止するという逆の仕組みになっています。**

- トリガーを握っている間、ペイントブラシはトレイル (軌跡) を描き、トリガーを離すと止まります。

**4.  中くらいのブラシサイズのボタンは、押すと見えなくなり、トレイル (軌跡) が巨大化します。**

- このボタンは、押すと他のボタンと同じグレーの色になり、小ブラシと大ブラシの中間のサイズにトレイル (軌跡) を変更します。

**5.  ペイントブラシの効果音は、どれだけ離れていても変わりません。**

- ペイントブラシの音は、顔の近くではフルボリューム、腕を伸ばした状態では 50％ 程度のボリュームにします。

ステップを完了としてマーク

## 4. ボーナスタスク

Q&A (0)

**6.  UI からの音声によるフィードバックはありません。**

- UI のすべてのボタンにサウンドエフェクトを追加し、ペイントブラシが使用されている間は連続したサウンドエフェクトを再生します。

**7.  台座を完全に隠す方法はありません。**

- 台座の横にあるメニューに、オン/オフを切り替えると台座オブジェクトの表示/非表示を切り替えるトグル UI を追加しました。

**8.  作品を保存する方法はありません。**

- 隣のテーブルに 3D 作品のミニチュアバージョンを作成する「Print」ボタンを追加します。

**9.  オブジェクトの背面や側面にペイントする方法はありません。**

- 台座全体を回転させるスライダーを UI に追加し、背面も塗装できるようにしました。

ステップを完了としてマーク

## 5. ヒント

Q&A (0)

**主なタスクのヒント：**

**1.**キャンバスのレンダーモードは、「Screen Space」ではなく 「World Space」である必要があります。

**2.**XR Controller コンポーネントの LeftHand と RightRay の入力マッピングを見てみましょう。

**3.**ペイントブラシの XR Grab Interactable コンポーネントの On Activated と On Deactivated イベントの関数を見てみましょう。

**4.**ボタンの色合いのアルファ（透明度）の値を確認してください。理想的なトレイル (軌跡) の幅については、小ブラシと大ブラシの関数を参照してください。

**5.**3D オーディオが有効になっていること、3D オーディオのロールオフのカーブ、そして音源から約 1 メートルのところで 50％ まで下がっていることを確認します。

**ボーナスタスクのヒント：**

**6.**PlayQuickSound または PlaySoundsFromList スクリプトのいずれかを使用してみてください。

**7.**ToggleVisibility スクリプトで Toggle() 関数を使用します。

**8.**ヒントはありません。Googleを使ってみよう！

**9.**ヒントはありません。Googleを使ってみよう！

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
