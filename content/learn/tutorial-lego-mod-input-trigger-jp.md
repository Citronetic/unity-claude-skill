[Image: image]

# レゴ® Mod：新しい操作の入力方法を作成する

Tutorial

Beginner

+10XP

20 mins

3

(13)

Unity Technologies

[Image: レゴ® Mod：新しい操作の入力方法を作成する]Summary

**Input Trigger Behaviour Brick**を使って、マイクロゲームで一連の動作をトリガーする方法を学びましょう。

Resources

- [LEGO® Behaviour Brick Manual.pdf](https://unity-connect-prd.storage.googleapis.com/20201025/d4fdf5a0-d665-475d-b7ce-ecd7b016c530/LEGO%C2%AE%20Behaviour%20Brick%20Manual.pdf?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035317409)

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

この Mod では、マイクロゲームで一連のアクションをトリガーする **Input Trigger Behaviour Brick**の使い方を学びます。マイクロゲームの体験に加えるカスタマイズを一段階上のものにしましょう。では始めます。

ステップを完了としてマーク

## 2. 始める前に

Q&A (0)

#### **エディター内チュートリアル**

この Mod を始める前にレゴ® マイクロゲームのエディター内チュートリアルを終えておくとさらに学習効果が見込めます。ご自分のペースで、時間をかけて学んでいってください。

#### **マイクロゲームを開く**

レゴ® マイクロゲームを開くには、次のようにします。

**1.**  Unity Hub を開きます。

**2.**  マイクロゲームを使ったことがあるかどうかに従って、次のどちらかの手順を行ってください。

- すでにマイクロゲームを使用したことがある場合は、**Projects** タブで保存した Unity プロジェクトを選択してください。プロジェクトを選ぶと Unity エディターが開きます。これには数分かかることもあります。
- マイクロゲームを初めて使う方は、**Learn** タブで「LEGO® Microgame」を選択してください。指示に従って、エディター内チュートリアルを完了してください。

#### **アドオンパッケージ**

このクリエイティブ Mod を進めるためにアドオンパッケージをインストールする必要はありません。

#### 補助資料

このクリエイティブ Mod と併せて使うと役立つ資料をご紹介します。

- [**LEGO® Tools を使った制作**](https://learn.unity.com/tutorial/creating-with-lego-tools-jp)ガイドを見直し、Unity エディターでマイクロゲームのブロック組み立てシステムを自信をもって使えるようにしておきましょう。
- [**Behaviour Brick マニュアル**](https://connect-prd-cdn.unity.com/20201025/af8d06d9-0638-457f-aff8-d7b1e0917dcb/LEGO%C2%AE%20Behaviour%20Brick%20Manual.pdf?_ga=2.246854022.365614953.1606693961-1880619545.1535881689)をダウンロードし、レゴ® マイクロゲームで使えるブロックの種類を把握して、どのようにブロックを使うかアイデアを練ってみましょう。

ステップを完了としてマーク

## 3. Input Trigger Behaviour Brick を詳しく見る

Q&A (0)

Input Trigger Behaviour Brick は、固有のアクションをトリガーするキーボードからの入力を登録します。これをいろいろなことに使うことができます。例えば、次のようなことができます。

- ドアを開ける
- 敵キャラを起こす
- 特定のレゴ® モデルの動きを制御する

Input Trigger Behaviour Brick は、*Assets > LEGO > Prefabs*> *LEGO Behaviour Bricks フォルダーに格納されています。*

ブロックを使って制作を始める前に、少しパラメーターを確認してみましょう。

[Image: image]

- **Target：**プロジェクトの他のトリガーと同じように、このトリガーは接続されたアクションブロック、または特定のアクションブロックを対象とすることができます。
- **Input：**このトリガーが認識するキー入力です。
- **Other Key：**定義済みのオプションを選ばなかった場合は、ここで入力するキーを選びます。
- **Enable：**トリガーを有効にするために満たす必要のある要件です。
- **Distance：**トリガーがプレイヤーまたは他のブロックを検知するようになる距離を指定します。この距離はレゴ® 単位で、レゴ® ブロックの上に見える出っ張りの数でその距離を数えます。
- **Show Prompt：**このプロパティが有効になっていると、プレイヤーがブロックに近づいた時に、入力するキーを表示する吹き出しを出すようになります。
- **Repeat：**このプロパティは、トリガーが 1 回だけ動作するか、繰り返し動作するかを決定します（有効にすると繰り返し動作します）。

ステップを完了としてマーク

## 4. Input Trigger ブロックをテストする

Q&A (0)

カスタムの制作に使う前に、ブロックを少しテストしてみましょう。

**1.** Project ウィンドウで、*Assets > LEGO > Prefabs > LEGO Models > Stone Structures* と移動し、「Platform」モデルを Scene ビューにドラッグします。

[Image: image]

**2.**Scene ビューの左上にある LEGO® Tools に移動します。**ブロックの組み立て**を有効にし、ブロックの接続方法を **Single Brick** に設定します。

[Image: image]

**3.**Project ウィンドウで、*Assets > LEGO > Prefabs > LEGO Behaviour Bricks*と移動し、「Move」ブロックを探します。それを Scene ビューにドラッグして、クリックして足場に接続します。

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

**ヒント：**ブロックを接続する時、ツールバーで**移動ツール**が選択されていることを確認してください。**手のひらツール**が選択されていると、ブロックを接続することができません。

**4.** Project ウィンドウで、黄色の「Input Trigger」ブロックを探します。Input Trigger ブロックをシーンビューにドラッグし、クリックして足場に接続するか、Move ブロックに直接接続します。

[Image: image]

**5.**今は Input Trigger のデフォルト設定を維持して、簡単なテストをしてみましょう。ツールバーで**再生ボタン**を選択して再生モードに入り、**E**キーを入力してブロックをテストします。

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

足場を発動させて動かすと、動いた先から戻すことはできません。設定によっては、サンプルのように行き止まりに当たって動けなくなることもあります（位置と、コライダーがあるため）。

ここで、Rotate Behaviour Brick を使って、単に移動するだけの足場を制御可能な乗り物に変える方法を探ってみましょう。

ステップを完了としてマーク

## 5. 乗り物を作る：ブロックを設定する

Q&A (0)

次は、Input Trigger ブロックを使って、足場をおおむね乗り物と言えるものにしてみましょう。

まず、Move ブロックとそれについている Input Trigger の設定を調整します。

**1.**Scene ビューで、「Move」ブロックを選択します。

**2.** インスペクターで、**Move Action (Script) コンポーネント**を探し、**Repeat** と **Collide** プロパティを無効にします。

[Image: image]

**3.**「Audio」フィールドを選択して **Del** キーを押し、**Audio**アセットを削除します。

[Image: image]

**4.**Scene ビューで、「Input Trigger」ブロックを選択します。積みあがったブロックの上にあるブロックアイコンを選択してもかまいません。

**5.** インスペクターで、**Input Trigger (Script)** コンポーネントを探し、**Other Key**プロパティを「R」に変更します。

[Image: image]ステップを完了としてマーク

## 6. 乗り物を作る：回転機能を追加する

Q&A (0)

次に、足場に左右に回転する機能を持たせてみましょう。

**1.**Project ウィンドウで、*Assets > LEGO > Prefabs > Behaviour Bricks* と移動し、「Rotate」アクションブロックを見つけます。足場に 2 つの Rotate ブリックを追加します。

[Image: image]

**ヒント：**足場の中央を軸として回転させたい場合は、Rotate ブロックを足場の中央に配置する必要があります。この例ではわかりやすくするために Rotate ブロック以外の他のブロックの位置を変えていますが、すべて重ねて配置してもかまいません。

**2.**Rotate ブロックを 1 つ選択します。インスペクターで、このブロックの名前を「RotateRight」に変更します。

[Image: image]

**3.**  **Rotate Action (Script)** コンポーネントの以下のプロパティを調整します。

- **Audio**のアセットの設定を削除する
- **Angle** を **90**にする
- **Time**を **1**にする
- **Collide**を無効にする
- **Repeat**を無効にする

[Image: image]

**4.**  もう一方の Rotate ブロックを選択します。インスペクターで、このレンガの名前を「RotateLeft」に変更します。

**5.**  **Rotate Action (Script)** コンポーネントの以下のプロパティを調整します。

- **Audio**のアセットの設定を削除する
- **Angle** を **-90**にする
- **Time**を **1**にする
- **Collide**を無効にする
- **Repeat**を無効にする

[Image: image]ステップを完了としてマーク

## 7. 乗り物を作る：さらに Input Trigger を追加する

Q&A (0)

最後に、プレイヤーが足場を制御できるように、さらに Input Trigger を追加してみましょう。

**1.**Project ウィンドウで、*Assets > LEGO > Prefabs > Behaviour Bricks* と移動して、Input Trigger を Scene ビューにドラッグします。それを足場に接続します。

**2.**  ドロップダウンメニューで、**Target**プロパティを **Specific Actions**に設定します。灰色の矢印アイコンを選択して、折りたたまれた **Specific Actions**を展開して内容を表示します。

**3.** 表示された内容の中から、**Size** プロパティを探してこれを **1** に設定します。これは、トリガーされるアクションブロックの数です。

**4.**  **Select Action** ボタンをクリックします。Action Picker ウィンドウが表示されます。シーンで利用可能な各アクションにカーソルを合わせると、その名前がインスペクターの **Specific Action**プロパティに表示されます。

**重要：**

- アクションは、モデル名（例：「Crystal」）、アクション（例：「Pickup」）の順にソートされてウィンドウに表示されます。先ほど設定した「RotateLeft」ブロックは、他の何か（他のRotate ブロックなど）を選択していない限り、追加した足場のモデルに接続されます。
- Scene ビューでは、Action Picker ウィンドウでマウスオーバーしたアクション（に対応するゲームオブジェクト）に視点が移動します。Rotate Behaviour Brick は互いに密接しているので、インスペクターで Rotate ブロックの名前をチェックしてください。

**5.**  Rotateアクションを見つけ、その上にカーソルを置いて「RotateLeft」を見つけ、それを選択します。Action Picker ウィンドウウィンドウに表示されるアクションは、この例とは少し異なる場合があるのでご注意ください。

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

**6.**  **Other Key** を **Q**に設定します。

[Image: image]

**7.** Input Trigger ブロックを複製（**Ctrl / Cmd + D**）して、クリックして足場に接続します。

[Image: image]

**8.**  複製した Input Trigger の設定を調整します。次の項目を変更します。

- **Specific Action** を **RotateRight**に設定する
- **Other Key** プロパティを **E**に設定する

[Image: image]

**9.** 変更を保存（**Ctrl** / **Cmd**+ **S**）し、**再生ボタン**をクリックしてテストします。

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

プレイヤーがいる位置で使えるキーが複数ある場合、入力キーを示す吹き出しに、そのキーが順番に表示されます。テストが終わったら、もう一度**再生ボタン**をクリックして再生モードから抜けてください。再生モードで行った変更は保存されません。

ステップを完了としてマーク

## 8. もっと改造したい人へ

Q&A (0)

Input Trigger Behaviour Brick を使って基本的なことを試してみました。このブロックを使って、ゲーム内のステージの一部を移動するためにプレイヤーが複数の Input Trigger と対話する必要があるパズルを作成してみてください。

**ヒント：**魅力的なステージをデザインする方法については、「[**レゴ® Mod：ステージをアップグレードする**](https://learn.unity.com/tutorial/lego-mod-upgrade-your-levels-jp)」チュートリアルをご覧ください。

皆さんがどんなものを作るのか、今から楽しみです。

#### 次のステップ

- 他の[**レゴ® マイクロゲームクリエイティブ Mod**](https://learn.unity.com/project/lego-template) を参照して、マイクロゲームを隅々までカスタマイズしてみましょう。
- [**Unity Essentials**](https://learn.unity.com/pathway/unity-essentials) ラーニングパスウェイを使って Unity についてさらに詳しく学び、クリエイターになるための学びを今後も続けていきましょう。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
