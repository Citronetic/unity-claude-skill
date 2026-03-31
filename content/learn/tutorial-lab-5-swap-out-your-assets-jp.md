[Image: image]

# ラボ 5 - アセットの交換

Tutorial

Beginner

+0XP

90 mins

1

(62)

Unity Technologies

[Image: ラボ 5 - アセットの交換]Summary

**概要：**

このラボでは、見た目の特徴に欠けるプリミティブオブジェクトを美しくダイナミックなオブジェクトに置き換えていきます。提供されているコースライブラリのアセットを使用するか、アセットストアを参照してまったく新しいアセットを探して、ゲームで望みの見た目を表現してみてください。次に、プレースホルダーとなっているプリミティブを新しいアセットに交換する作業を行います。このラボが終わる頃には、プロジェクトの見栄えが格段に良くなっていることでしょう。

**プロジェクトの成果物：**

基本的なゲームプレイ機能を維持しつつ、すべてのプリミティブオブジェクトが実際の 3D モデルに置き換えられた状態になります。

Resources

- [Course Library - Asset Store](http://u3d.as/1wXg)
- [Course Library - Direct Download.zip](https://unity-connect-prd.storage.googleapis.com/20191004/c58a411d-1c2f-45f1-a194-0c0fac0cef82/Course%20Library%20-%20Direct%20Download.zip?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035271027)

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. 導入

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

## 2. アセットライブラリをインポートして閲覧する

Q&A (0)

> プリミティブのシェイプを新しくかっこいいアセットと入れ替えるには、まずそれらのアセットをインポートする必要があります。

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

1. 動画で紹介されている**リンク**をクリックして**コースライブラリ**のアセットファイルをダウンロードし、プロジェクトに**インポート**してください。
2. **アセットストア**のウィンドウを**閉じて**ください。
3. ライブラリを閲覧して、プレイヤーオブジェクトと非プレイヤーオブジェクトを置き換えるのに適したアセットを探します。

ステップを完了としてマーク

## 3. プレイヤーを新しいアセットで置き換える

Q&A (0)

> これでアセットの準備ができたので、まず最初に行うことは、Player オブジェクトを置き換えることです。

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

1. 「Prefabs」フォルダーに Player オブジェクトを**ドラッグ**してプレハブにし、プレハブを**ダブルクリック**してプレハブエディターを開きます。
2. アセットを Hierarchy に**ドラッグ**して、Player のネスト状のプレハブにし、同じサイズと位置になるように**拡大縮小**と**位置の調整**を行います。
3. 親の **Player** オブジェクト自身で、コライダーを**編集**して新しいアセットのサイズに合わせるか、別のタイプのコライダー（例：Box）に**置き換えて**ください。
4. **テスト**して動作することを確認してから、プリミティブの **Mesh Renderer**コンポーネントの**チェックを外します**。

ステップを完了としてマーク

## 4. アセットストアを閲覧する

Q&A (0)

> すでに素晴らしいアセットライブラリはあるのですが、まだ足りないアセットがあるかもしれません。その場合は、Unity アセットストアでアセットを探してみるのもいいでしょう。

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

1. 画面上部のメニューから、Window > ***Asset Store***をクリックして Unity でアセットストアウィンドウを開きます。タブを右クリックして**最大化**すると閲覧しやすくなります。
2. **Publisher**のフィルターで「Synty Studios」を検索し、アセットパックのいくつかを参照してください。
3. **Pricing**フィルターの右ハンドルをドラッグして「Free」のアセットのみを表示し、「Synty Studios」のフィルターを**外して**「Low Poly」を検索します。
4. プロジェクトに入れたいものがあれば、**ダウンロード**してプロジェクトに**インポート**してください。
5. インポートしたアセットを「Asset Store」という新しいフォルダーに**ドラッグ**して、インポートしたアセットを参照します。

ステップを完了としてマーク

## 5. 非プレイヤーのプリミティブをすべて置き換える

Q&A (0)

> プロジェクトの基本的な考え方がわかったところで、どのように進めていけばいいのかを考えてみましょう。

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

1. プレイヤーのプレハブを置き換えるときに行った作業を、非プレイヤーのオブジェクトについても繰り返し行います。
2. テストして、すべてが期待通りに動作していることを確認してください。

ステップを完了としてマーク

## 6. 背景のテクスチャを置き換える

Q&A (0)

> ダイナミックなオブジェクトの外観が一新されたところで、地面や背景も新しくしてみましょう。

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

1. Course Library > **Textures**（または Unity アセットストアのパッケージ）から、新しいマテリアルを Ground と Background オブジェクトにドラッグします。
2. マテリアルの**解像度**を調整するには、マテリアルのプロパティ（横に球体表示されている）で、Main Map **Tiling**の X と Y の値を変更します。
3. マテリアルの光沢を弱くするには、マテリアルのプロパティで、「Specular highlights」と「Reflections」の設定の**チェックを外します**。

ステップを完了としてマーク

## 7. まとめ

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

新しい機能：

- プリミティブオブジェクトを新しいアセットで置き換えて、同じように機能させる状態にした

新しい概念とスキル：

- アートワークフロー
- ハイポリとローポリ
- アセットストア
- ネスト状のプレハブ
- マテリアルのプロパティ

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
