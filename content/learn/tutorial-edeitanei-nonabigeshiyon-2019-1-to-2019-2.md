[Image: image]

# エディター内のナビゲーション - 2019.1/2019.2

Tutorial

Beginner

+0XP

10 mins

11

(325)

Unity Technologies

[Image: エディター内のナビゲーション - 2019.1/2019.2]Summary

Unity エディターの各コントロールは、キーボードや 2 ボタン（または 3 ボタン）マウスで快適に操作できるよう設計されています。このチュートリアルでは、Unity 内を移動するための基本操作について説明します。

Languages available:

日本語English日本語日本語

## 1. エディター内のナビゲーション

Q&A (0)

*Unity 2018.4 をお使いの方は、[こちらをクリック](https://learn.unity.com/tutorial/navigation-in-the-editor-2018-4)してください。Unity 2019.3 以降をお使いの方は、[こちらをクリック](https://learn.unity.com/tutorial/navigation-in-the-editor-2019-3)してください。*

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

## 2. 動作制御

Q&A (0)

Unity エディターの各コントロールは、キーボードや 2 ボタン（または 3 ボタン）マウスで快適に操作できるよう設計されています。左右のマウスボタンは、基本的な制御に不可欠です。中央のマウスボタン（またはクリッカブルスクロールホイール）は、追加機能を使用するのに役立ちます。多くの動作制御は、「Alt」キーを押しながら実行できます。

**パン：**「Scene」ビュー内をパンするには、Alt キーを押しながら、中央のマウスボタンをクリックしてドラッグします。2 ボタンや 1 ボタンのマウスを使用する場合は、Alt + Ctrl キーを押しながらクリックしてドラッグします。

**ズーム：**「Scene」ビューを拡大または縮小するには、Alt キーを押しながら右クリックしてドラッグします。

**回転：**「Scene」ビュー内を回転するには、Alt キーを押しながらクリックしてドラッグします。

もう 1 つの方法として、右マウスボタンを押しながらキーボードの W、A、S、D の各キーを押すと、シーン内を移動できます。

ステップを完了としてマーク

## 3. ナビゲーションツールの使用

Q&A (0)

「Hierarchy」タブの上には、シーン内のオブジェクトを動かすために使用できる、一連のツールボタンがあります。（**図 01**）

[Image: image]

**A. ハンドツール（ホットキー Q）**：「Scene」ビュー内をクリックしてドラッグできます。このツールがアクティブになっているときは、オブジェクトを選択できません。

**B.移動ツール（ホットキー W）**：選択したオブジェクトに移動ウィジェットが表示され、「Scene」ビュー内のオブジェクトをインタラクティブに移動できます。目的の軸の方向の矢印をクリックしてドラッグします。両方の軸に沿って同時に移動するには、ツールの中央にある青い正方形をクリックしてドラッグします。（**図 02**）

[Image: image]

**C. 回転ツール（ホットキー E）**：選択したオブジェクトに回転ウィジェットが表示され、「Scene」ビュー内のオブジェクトをインタラクティブに回転できます。回転軸をクリックしてドラッグします。外側の白い円を使用すると、複数の軸で同時に回転できます。（**図 03**）

[Image: image]

**D. スケールツール（ホットキーR）**：選択したオブジェクトにスケールウィジェットが表示され、オブジェクトをインタラクティブにスケーリングできます。スケーリングする軸の端にある立方体をクリックしてドラッグします。中央の白い立方体を使うと、すべての軸を同時にスケーリングできます。（**図 04**）

[Image: image]

**E. Rect Transform ツール（ホットキー T）**：2D オブジェクトで動作するように設計されていて、3D 開発には適しません。Rect Transform ツールは、移動ツール、回転ツール、スケールツールを組み合わせたツールです。オブジェクトを移動するには、オブジェクトをクリックしてドラッグします。オブジェクトを回転させるには、ツールのいずれかのコーナーにカーソルを移動させます。これにより、矢印が回転アイコンに変わります。オブジェクトをスケーリングするには、ツールのいずれかのコーナーを掴んでドラッグします。（**図 05**）

[Image: image]

**F. Transform ツール（ホットキー** **Y）：**上記のすべてのツールを組み合わせた働きをします（Rect Transform を除く）。各ツールタイプは同じギズモによって表され、同じ方法で使用できます。（**図 06**）

[Image: image]

**G. ピボットハンドルの位置**：オブジェクトに表示されるツールギズモの位置を変更します。ゲームオブジェクトにカスタムピボットポイントがある場合にのみ変更されます。

**H.ハンドルの回転**：ツールが制約される軸を変更します。クリックすると、グローバルとローカルが切り替わります。ローカルに設定した場合、ツールは選択されたゲームオブジェクトの相対的な回転軸に基づいて回転されます。グローバルに設定した場合、ツールは常にグローバルな回転軸で回転します。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
