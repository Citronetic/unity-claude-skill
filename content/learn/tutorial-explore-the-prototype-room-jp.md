[Image: image]

# プロトタイプルームの探索

Tutorial

Beginner

+0XP

15 mins

1

(40)

Unity Technologies

[Image: プロトタイプルームの探索]Summary

このチュートリアルでは、VR 初心者のコントロールについての理解を以下に適用しながら、あなたの理解を深めていきます：

- テレポーテーションを使用して、プロトタイプルームの例を移動する
- プロトタイプルーム内のオブジェクトとのインタラクション

これが終わったら、独自のテレポーテーションベースとインタラクト可能なオブジェクトを構成する準備が整います。

Languages available:

日本語English日本語한국어简体中文日本語

## 1. 概要

Q&A (0)

このチュートリアルでは、プロトタイプ ルームの VR 環境の例に触れながら、この学習プロジェクトの VR コントロールについての理解を適用する機会を設けています。これは非常にシンプルな環境であり、あらかじめ設定された 2 つのインタラクト可能なオブジェクトがあります。

ステップを完了としてマーク

## 2. はじめる前に

Q&A (0)

このチュートリアルでは、VR 初心者向け Unity プロジェクトと VR ハードウェアを使用します。はじめる前に：

**1.**  VR 初心者向けの Unity プロジェクトを開きます。

**2.** ハードウェアの準備ができていることを確認してください。Oculus Link を Oculus Quest で使用している場合は、Oculus アプリを使って今すぐこれを有効にし、接続してください。

ステップを完了としてマーク

## 3. プロトタイプルームのシーンを開く

Q&A (0)

プロトタイプルームのシーンを開くには：

**1.**Project ウィンドウで、**Assets > VR Beginner > Scenes > Final** の順に進みます。

**2.**  **PrototypeScene** をダブルクリックします。

[Image: image]ステップを完了としてマーク

## 4. プロトタイプルームシーンのテスト準備

Q&A (0)

Oculus Link のない Oculus Quest 以外のサポートされているすべてのハードウェアで、Unity エディターから直接開発中の VR 体験をテストすることができます。プロトタイプルームを探索するプロセスをおさらいする前に、VR 体験を開始する準備ができているかどうかを確認しておきましょう。

プロトタイプルームの VR 体験を開始するには：

**1.**  Unity エディターのツールバーで、**Play** を押して再生モードに入ります。

**2.**  指定されたプレイスペースの中央に立ちます。

**3.**  自分で体験を開始する場合は、VR ハードウェアを装着してください。

**注：**再生モードがお使いの VR ハードウェアで動作することを確認したら、Unity エディターのツールバーにある**Play**をもう一度選択して終了してください。Unity エディターの再生モード中に行った変更は保存できません。

ステップを完了としてマーク任意のステップ

## 5. Oculus Quest 向けの Android ビルドを作成する

Q&A (0)

Oculus Link を使わずに Oculus Quest を使った VR 体験をテストするには、シーンから Android ビルドを作成する必要があります：

**1.** トップメニューで、**File** > **Build Settings...**の順に進みます。****

**2.** Build Settings ダイアログウィンドウの **Scenes in Build** セクションで、**EscapeRoom** シーンを無効にします。

[Image: image]

**3.**  **Add Open Scenes**を選択して、Prototype Room をビルドに追加します。

[Image: image]

**4.** **Run Device** フィールドで、Oculus Quest が選択されていることを確認します。選択されていない場合は、正しくセットアップされているか確認してください。

[Image: image]

**5.** **Build and Run** を選択します

**注：Build and Run**を選択してビルドすると、VR 体験が自動的に開かれ、ビルドが完了すると Quest 上で実行されます。体験が終了してしまい、もう一度体験したい場合は、Oculus Quest ヘッドセット内の **Library > Unknown Sources**の順に移動することでできます。

Quest のビルドに問題が発生した場合、またはアプリが期待通りに機能しない場合、以下の手順に従ってください：

- Unknown Sources Storage Settings に移動し、以前のビルドを削除します
- Quest が現在 Oculus Link の接続を実行しておらず、コンピューターがデータを変更するためのアクセスを許可していないことを確認してください
- ビルドの色が予想よりも濃く見える場合は、Texture Compression を **ETC（デフォルト）**に切り替えてください

ステップを完了としてマーク

## 6. プロトタイプルームを探索する

Q&A (0)

プロトタイプルームは、このキットを使ってインタラクティブな体験を作成するためのシンプルなスペースです。このステップでは、以下のことを行います：

- テレポート機能を使って部屋の中を移動する
- 事前に設定されたオブジェクトとのインタラクション

**注：**VR ヘッドセットではなくモニターで再生モードを表示したい場合は、Oculus ヘッドセットの内側の中央上部にあるヘッドセットセンサーを覆う必要があります（手などを使って）。VIVE ユーザーの場合は、正確さのためにスペースの中心にいることを確認し、そうでない場合は SteamVR の設定でビューを再設定してみてください。

プロトタイプルームを探索するには：

**1.**  指定されたプレイスペースの真ん中に立ち、VR ヘッドセットを装着します。

**2.** 左に曲がり、ヒューズボックスとボックステーブルの横にある Teleporter Base を見つけます。

**3.**  方向入力を前方に移動して長押しすると、Teleporter Beam が表示されます。

**4.** Teleporter Beam が Teleporter Base に触れるまでコントローラーを動かします。

**5.**  方向入力を解除してテーブルボックスに移動します。

**6.** テーブルの上のヒューズに手を動かし、グリップボタンを押して掴みます。

**7.**ヒューズキャビネットに手を伸ばします。範囲内にあるときは、ヒューズスロットがハイライト表示されます。グリップボタンを押してヒューズを配置します。

**8.** レバーに手を伸ばし、グリップボタンを押して握ります。コントローラーを下に引いて、現実世界と同じようにレベルを移動させます。ヒューズキャビネットから火花が出ているのがわかります。

その一部始終を動画でご紹介します：

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

ステップを完了としてマーク

## 7. まとめ

Q&A (0)

このチュートリアルでは、プロトタイプルーム環境でテレポートしてオブジェクトとインタラクトしました。

次のチュートリアルでは、テレポーテーションの基礎とインタラクト可能なオブジェクトをあなた独自のバージョンのプロトタイプルームで作成します。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
