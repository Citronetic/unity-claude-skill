[Image: image]

# インタラクト可能なオブジェクトの追加と設定

Tutorial

Beginner

+0XP

20 mins

0

(25)

Unity Technologies

[Image: インタラクト可能なオブジェクトの追加と設定]Summary

このチュートリアルでは、以下のことを行います：

- 選択したオブジェクトをプロトタイプルームに追加する
- VR でオブジェクトを設定して双方向性を追加する
- VR でオブジェクトをテストする

Languages available:

日本語English日本語한국어简体中文日本語

## 1. 概要

Q&A (0)

このチュートリアルでは、以下のことを行います：

- 選択したオブジェクトをプロトタイプルームに追加する
- VR でオブジェクトを設定して双方向性を追加する
- VR でオブジェクトをテストする

ステップを完了としてマーク

## 2. はじめる前に

Q&A (0)

このチュートリアルでは、VR 初心者向け Unity プロジェクトと VR ハードウェアを使用します。はじめる前に：

**1.**  VR 初心者向けの Unity プロジェクトを開きます。

**2.** ハードウェアの準備ができていることを確認してください。Oculus Link を Oculus Quest で使用している場合は、Oculus アプリから今すぐこれを有効にして接続してください。

ステップを完了としてマーク

## 3. シーンに新しいオブジェクトを追加する

Q&A (0)

テーブルボックスの一つにテレポートできるようになったので、体験にインタラクト可能なオブジェクトを追加してみましょう。 いくつかの異なるオブジェクトのプレハブを作成しました。このチュートリアルでは、それらのうちのどれかを追加することができます。

シーンに新しいインタラクト可能なオブジェクトを追加するには：

**1.**Project ウィンドウで、**Assets** > **VR Beginner** > **Prefabs** > **Tutorial** > **Objects**の順に移動します。

**2.**利用可能なオブジェクトを 1 つ選択します。

[Image: image]

**3.**  選択したオブジェクトのプレハブを Scene ビューにドラッグします。

**4.**   ツールバーで、**移動ツール**を選択し、テレポーターの近くのボックステーブルの上にオブジェクトを配置します。

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

**5.**  **Ctrl**+ **S** キーを押して変更を保存します。

ステップを完了としてマーク

## 4. オブジェクトの設定

Q&A (0)

インタラクト可能なオブジェクトを作成するプロセスを簡素化するために、この Unity プロジェクトのオブジェクトには、オブジェクトがアクティブになったときに何が起こるかを制御するカスタムスクリプトが添付されています。これは、XR Grab Interactable コンポーネントを使用して制御されます。

新しいインタラクト可能なオブジェクトを設定するには：

**1.**  Hierarchy で、インタラクト可能なオブジェクトの GameObject の左にある矢印を選択して、その子 GameObject のビューを展開します。親 GameObject が選択されていることを確認してください。

[Image: image]

**2.**  Inspector で、**Add Component**ボタンを選択します。

**3.**  「XR Grab Interactable」を検索し、リストからコンポーネントを選択します。

[Image: image]

**4.**  コンポーネントの下部で、**Interactable Events** セクションのヘッダーの左にある矢印を選択して展開します。

[Image: image]

**5.**  コンポーネントの下部にある **On Activate**リストを見つけます。**Add**ボタン (**+**) を選択します。

**6.** Hierarchy で、インタラクト可能なオブジェクトの**ObjectActivator** の子 GameObject を新しいリストエントリーの **None（オブジェクト）**フィールドへドラッグします。

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

**7.**  Function フィールドで、ドロップダウンメニューの矢印を選択します。**ObjectActivator > Activated()**の順に移動します。

これは、オブジェクトの起動時に特定のイベント（例えば、バブルガンがバブルを放出するなど）をトリガーすることで、インタラクト可能なオブジェクトを動作させます。

**8. Ctrl**+ **S** キーを押して変更を保存します。

ステップを完了としてマーク

## 5. インタラクト可能なオブジェクトのテスト

Q&A (0)

インタラクト可能なオブジェクトが正常に動作することを確認するには：

**1.** Unity エディターのツールバーで、**Play** を押して再生モードに入るか、Oculus Quest のビルドを行います。

**2.**  コントローラーの forward を押すと、Teleporter Ray が表示されます。

**3.** コントローラーを使って Ray で Teleporter Base にタッチします。

**4.**  親指を離すと、インタラクト可能なオブジェクトを配置したボックスに移動します。

**5.** インタラクト可能なオブジェクトに手を伸ばし、グリップボタンを長押しして掴みます。

**6.**トリガーボタンを押して、インタラクト可能なオブジェクトをアクティブにします。

**7.** Unity エディターからテストする場合は、終了後にもう一度ツールバーで**Play** を選択して再生モードを終了することを忘れないでください。

ステップを完了としてマーク

## 6. まとめ

Q&A (0)

このチュートリアルでは、XR Interaction Toolkit の機能を使用して、VR 体験にインタラクト可能なオブジェクトを追加、設定、そしてテストを行いました。

次は、効果音やクローズドキャプションを実装することで、体験を向上させます。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
