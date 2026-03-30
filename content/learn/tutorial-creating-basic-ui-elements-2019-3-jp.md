[Image: image]

# uGUI を使った基本的な UI の作り方

Tutorial

Beginner

+10XP

5 mins

8

(38)

Unity Technologies

[Image: uGUI を使った基本的な UI の作り方]Summary

UI システムの導入に伴い、GUI に特化した機能を作成するのに役立つ新しいコンポーネントが追加されました。それらの要素の一部には、テキスト、画像、ボタンなどが含まれます。本チュートリアルでは、基本的な UI の作成と使用方法を学びます。

Languages available:

日本語English日本語日本語

## 1. 基本的な UI の作成

Q&A (0)

このチュートリアルは Unity 2019.4.10f1 LTS - を使用して検証しています。[https://learn.unity.com/tutorial/creating-basic-ui-elements-2019-3](https://learn.unity.com/tutorial/creating-basic-ui-elements-2019-3)

Unity のユーザーインターフェース（UI）システムでは、テキスト、画像、ボタンなどの要素をコントロールして、ユーザーに機能を追加することができます。しかし、要素を作成する前に、それらの要素をキャンバスに追加する必要があります。

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

ステップを完了としてマーク

## 2. テキストの作成

Q&A (0)

ラベルとも呼ばれるテキストコンポーネントには、表示テキストを入力する領域があります。フォント、フォントスタイル、フォントサイズ、リッチテキスト機能の有無などを設定することができます。テキストの整列を設定するオプション、水平方向と垂直方向のオーバーフローの設定、テキストが矩形の幅や高さよりも大きい場合にどうなるかを制御するオプション、利用可能なスペースに合わせてテキストのサイズを変更するベストフィットオプションがあります。

1. Hierarchy で Canvas を選択します。
2. Canvas を右クリックして、**UI > Text** と選択します。
3. テキストボックスのテキストを変更します。
4. フォントは、Font ラジオボタンを使用して変更することができます。
5. フォントパラメーターを変更して、サイズ、配置、色を変更します **(画像 01)**

[Image: image]ステップを完了としてマーク

## 3. UI イメージのインポート

Q&A (0)

UI コンポーネントに使用される画像のことをスプライトと呼びます。最初にインポートすると、デフォルトのテクスチャタイプとしてマークされます。スプライトは UI だけでなく、2D プロジェクトでも便利な機能を提供しています。

1. Project ウィンドウで 2D アセットを選択します。
2. Inspector で、Texture Type を**Sprite** (**2D and UI**) に変更します (**Figure 02**)

[Image: image]ステップを完了としてマーク

## 4. UI イメージの作成

Q&A (0)

Image には Rect Transform コンポーネントと Image コンポーネントがあります。スプライトは Image コンポーネントに適用することができ、 その色は Color フィールドで設定することができます。また、Image コンポーネントには Material を適用することもできます。Image Type フィールドは Sprite の表示方法を指定します。オプションは以下の通りです：

- **Simple：**スプライト全体のスケールを一致させます。
- **Sliced：**3 × 3 にスプライトを分割しているので、リサイズしても角が歪まず、中央部分だけが引き伸ばされます。
- **Tiled：**Sliced に似ていますが、引き伸ばすのではなく中心部分をタイル状に敷き詰め (繰り返し) ます。まったく境界のないスプライトの場合はスプライト全体をタイル状に並べます。
- **Filled：**スプライトを表示する方法は Simple と同じですが、定義された方向、方法、大きさで原点からスプライトを埋めることができます。

UI イメージを作成するには：

1. Hierarchy で Canvas を選択します。
2. **Create**> **UI**> **Image**の順にクリックします。
3. Source Image を任意の画像に変更します(**画像 03**)。

[Image: image]

UI 要素には様々なものがあり、自分でユーザーインターフェースを作成することができます。テキストや画像を使って基本的な UI レイアウトを作成してみましょう。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
