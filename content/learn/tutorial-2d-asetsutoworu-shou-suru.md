[Image: image]

# 2D アセットを入手する

Tutorial

foundational

+10XP

60 mins

0

Unity Technologies

[Image: 2D アセットを入手する]Summary

このチュートリアルでは、2D デジタルコンテンツ制作（DCC）ツールについて説明し、Unity Asset Store を一通り見て、この後に続くチュートリアルに必要な 2D アセットを入手します。

このチュートリアルを終了すると、次のことができるようになります。

- リアルタイム 2D 制作をサポートするコンテンツ制作ツールについて説明する
- ウェブブラウザーで Asset Store にアクセスする
- Asset Store で検索して検索結果をフィルター処理する
- Unity アカウントを介して Asset Store からアセットを自動的にインポートする

Resources

- [Get-2D-assets-transcripts.zip](https://unity-connect-prd.storage.googleapis.com/20201106/73ac5823-671d-419c-961f-10b650ffa5bf/Get-2D-assets-transcripts.zip?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931666598)

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. 概要

Q&A (0)

このチュートリアルでは、2D デジタルコンテンツ制作ツール（2D DCC）を使用して 2D アセットを制作する方法と、それらのツールを使用して制作されたアセットを Unity Asset Store から入手する方法について説明します。それらのアセットには、時間と労力の節約につながるスプライトやスプライトのコレクション、マテリアル用の画像、ユーザーインターフェースのコンポーネント、その他 2D アセットが含まれます。この学習プロジェクトの課題で役立ついくつかのアセットをインポートする方法を紹介します。

ステップを完了としてマーク

## 2. 2D DCC

Q&A (0)

#### 2D DCC とは

2D デジタルコンテンツ制作ツール（DCC）（Adobe [Photoshop](https://www.adobe.com/products/photoshop.html)、[Illustrator](https://www.adobe.com/products/illustrator.html)、[Substance Painter](https://www.substance3d.com/products/substance-painter/)、[Gimp](https://www.gimp.org/) など）を使用すると、アーティストがテクスチャ、背景、ユーザーインターフェース（UI）の要素を 2 次元で制作できます。

アーティストはこれらのプログラムを使用して、紙面に描くように画像を**描画**または**ペイント**する、画質を落とすことなく拡大縮小できる**ベクターアート**を制作する、レイヤー、フィルター、エフェクトを適用することで既存のイメージを**編集**および**強化**する、メニュー、ボタン、テキストなどの**インターフェース**やレイアウトを**デザイン**することができます。

以下に示すのは、Photoshop で編集されているテクスチャの例です。

[Image: image]

2D アセットは、3D アセットと同様にエンジンにインポートされ、プロジェクトに組み込まれます。

[Image: image]

以下のビデオを視聴し、プロのアーティストが Unity で DCC をどのように活用してアイデアに命を吹き込んでいるかをご覧ください。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

**注：**動画のトランスクリプトを表示するには、各動画の再生中に「**トランスクリプトを表示**」を選択します。また、各チュートリアルページの上部にある「**教材**」セクションのリンクを使用すると PDF ファイルのセットをダウンロードできます。

### Unity で 2D アセットを使用するためのその他のリソース

Unity には 2D アセットを使用するために特別に設計されたビルトインのツールが備わっています。たとえば、[2D タイルマップエディター](https://docs.unity3d.com/Manual/class-Tilemap.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931666598)は 2D のレベルを迅速にデザインするのに役立ち、[スプライトエディター](https://docs.unity3d.com/Manual/SpriteEditor.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931666598)は 2D アニメーションに組み込まれる各種画像（「スプライト」）を管理します。ほかにも [2D 物理演算](https://docs.unity3d.com/Manual/class-Physics2DManager.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931666598)や [2D Lights](https://docs.unity3d.com/Packages/com.unity.render-pipelines.lightweight@6.7/manual/2DLightProperties.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931666598) など、さまざまな用途に特化したシステムが数多く揃っています。

[Image: image][Image: image][Image: image]

繰り返しになりますが、[Unity Asset Store](https://assetstore.unity.com/) は、Unity を考慮して特別にデザインされた 2D アートが集まる、貴重なリソースです。

ステップを完了としてマーク

## 3. 演習

Q&A (0)

[Made with Unity のプロジェクト](https://unity.com/madewith)の例を 1 つ以上見て、2D DCC で作成されて Unity にインポートされた要素を特定します。 観察結果をコメントで共有してください。

ステップを完了としてマーク

## 4. Asset Store を検索する

Q&A (0)

**1.**[Unity Asset Store](https://assetstore.unity.com/) に移動し（このリンクをクリックするとデフォルトのブラウザーで開きます）、お使いの Unity ID を使用してログインします。

**ヒント：**Asset Store から入手したアセットはお使いの Unity アカウントにリンクされ、その同じ Unity ID でサインインしているエディターで使用できるようになります。

**2.** Asset Store の検索タブで、「sprite」と入力して入手可能なスプライトアセットを検索します。

**3.** フィルターパネルの「価格」セクションで、「**無料アセット**」を選択します。

**4.** マテリアルが含まれる無料のアセットパッケージを選択します。お勧めは **Brackeys 制作の「Free 2D Mega Pack」**です。

**5.** アセットをダウンロードしてプロジェクトにインポートする最新の全手順については、[「**Import assets from the Asset Store（Asset Store からアセットをインポートする）**](https://learn.unity.com/tutorial/project-setup-processes#60ed7a86edbc2a002520b6f4)**」を参照**してください。

**6.** インポート処理が完了したら、新しいスプライトの 1 つを選択し、シーン内にドラッグします。

[Image: image]ステップを完了としてマーク

## 5. 次のステップ

Q&A (0)

このチュートリアルでは、Unity Asset Store の操作についてもう一度確認し、無料のアセットをダウンロードしてインポートしました。次は、それらのアセット（または Asset Store で見つかった別のアセット）を使用して、各自でチャレンジ課題を終わらせます。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
