[Image: image]

# 移動用のテレポーターを追加

Tutorial

Beginner

+0XP

20 mins

2

(30)

Unity Technologies

[Image: 移動用のテレポーターを追加]Summary

このチュートリアルでは、以下のことを行います：

- 自作のプロトタイプルームシーンを作成する
- 新しいテレポーターの作成
- テレポーターの設定
- VR での変更点をテストする

Languages available:

日本語English日本語한국어简体中文日本語

## 1. 概要

Q&A (0)

さて、プロトタイプ ルームのサンプルを探索したので、独自の VR 体験に取り組む準備ができました。このチュートリアルでは、以下を行います：

- 自作のプロトタイプルームシーンを作成
- 新しいテレポーターの作成
- テレポーターの設定
- VR での変更点をテスト

ステップを完了としてマーク

## 2. はじめる前に

Q&A (0)

このチュートリアルでは、VR 初心者向け Unity プロジェクトと VR ハードウェアを使用します。はじめる前に：

**1.**  VR 初心者向けの Unity プロジェクトを開きます。

**2.** ハードウェアの準備ができていることを確認してください。Oculus Link を Oculus Quest で使用している場合は、Oculus アプリから今すぐこれを有効にして接続してください。

ステップを完了としてマーク

## 3. プロトタイプルームシーンの新規作成

Q&A (0)

この Unity プロジェクトには、シンプルな Prototype Room Scene のテンプレートが含まれているので、全く何もないシーンから始める必要はありません。

このテンプレートを使用して新規のシーンを作成するには：

**1.**  トップメニューで **VR Kit > Create new Prototype Scene**の順に選択します。

[Image: image]

**2.**  新しいシーンの名前を選択し、**Save** を選択します。デフォルトでは、シーンは **Assets > MyScenes**に保存されます。

**3.**  新しいシーンは、保存すると自動的にロードされ、Scene ビューで開きます。

[Image: image]ステップを完了としてマーク

## 4. 新しいテレポーターの作成

Q&A (0)

これで、自分だけのプロトタイプルームが手に入ったので、カスタム VR 体験の作成を始めることができます。まず、テレポーターを作成することで、プレイヤーは 2 つのシンプルなボックステーブルのいずれかに近づくことができます。これにより、シーン内のインタラクト可能なオブジェクトを掴みやすくなります。

シーン用の新しい TeleporterBase を作成するには：

**1.**  Project ウィンドウで、**Assets** >**VR Beginner**>**Prefabs**>**Tutorial** の順に移動します。

**2.**  **TeleporterBase**プレハブを選択します。

[Image: image]

**3.**  Project ウィンドウの**TeleporterBase**プレハブを Scene ビューにドラッグします。

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:10Loaded: 47.75%0:00Remaining Time -0:101xPlayback Rate

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

**4.**  ツールバーで、**移動ツール**を選択し、**TeleporterBase**を 2 つのシンプルなボックステーブルのいずれかの隣に配置します。

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:13Loaded: 26.48%0:00Remaining Time -0:131xPlayback Rate

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

**5.  Ctrl**+ **S** キーを押して変更を保存します。

ステップを完了としてマーク

## 5. 新しいテレポーターの設定

Q&A (0)

新しいテレポーターを設定するには：

**1.**  Hierarchy で、**TeleporterBase** GameObject の左にある矢印を選択して、その子 GameObject のビューを展開します。**TeleporterBase** が選択されていることを確認してください。

[Image: image]

**2.**  Inspector で、**Add Component**ボタンを選択します。

**3.** 「Teleportation Anchor」を検索し、リストからコンポーネントを選択します。

[Image: image]

**4.**  コンポーネントの Interactable Events セクションの上部にある **On First Hover Enter**リストを見つけます。**Add**ボタン (**+**) を選択します。

[Image: image]

**5.** TeleporterBase の **TeleporterBeam** の子 GameObject を Hierarchy から**On First Hover Enter** リストエントリーの **None (Object)** フィールドにドラッグします。

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

**6.**  Function フィールドで、ドロップダウンメニューの矢印を選択します。**TeleporterAnim > StartHighlight** の順に移動します。これはフェードインとフェードアウトの効果を提供するカスタムスクリプトです。

[Image: image]

**7.**  **Teleportation Anchor**コンポーネントの Interactable Events セクションで、**On Last Hover Exit** リストを見つけます。**+** ボタンを選択します（リストに追加）。

**8.**  先ほどと同じように、Hierarchy で **TeleporterBeam** GameObject を選択し、新しいリストエントリーの **None (Object)** フィールドへドラッグします。

**9.**   Function フィールドで、ドロップダウンメニューの矢印を選択します。**TeleporterAnim > StopHighlight** の順に進みます。これにより、テレポーター使用後の特殊効果が停止します。これにより、テレポーター使用後の特殊効果が停止します。

[Image: image]

**10. Ctrl**+ **S**キーを押して変更を保存します。

ステップを完了としてマーク

## 6. 新しいテレポーターのテスト

Q&A (0)

テレポーターが正常に動作することを確認するには：

**1.** Oculus Link のない Oculus Quest をお持ちの方は、Android ビルドを作成[（Explore the prototype room 参照）](https://learn.unity.com/tutorial/explore-the-prototype-room?projectId=5e4abf44edbc2a09bf60dceb#5e4e8d67edbc2a1abc3bbbf9)して変更点をテストしてみてください。他のすべてのデバイスでは、ツールバーの**Play**を押して再生モードに入ります。ヘッドセットを装着してください。

**2.** コントローラーの方向入力を前方に移動させて、Teleporter Beam をアクティブにします。

**3.** コントローラーを使って、Teleporter Beam で Teleporter Base にタッチします。

**4.** 方向入力を離すと新しい場所へ移動します。

**5.** Unity エディターからテストしている場合は、テストが終わったら、ツールバーの **Play**をもう一度押して再生モードを終了してください。Unity エディターの再生モード中に行った変更は保存できません。

ステップを完了としてマーク

## 7. まとめ

Q&A (0)

このチュートリアルでは、VR 体験のためのテレポーターを作成、設定、そしてテストを行いました。次は、選択したオブジェクトの追加と設定を行います。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
