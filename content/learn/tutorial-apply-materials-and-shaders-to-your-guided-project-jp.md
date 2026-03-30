[Image: image]

# ガイド付きプロジェクトへのマテリアルとシェーダーの適用

Tutorial

Beginner

+10XP

35 mins

0

Unity Technologies

[Image: ガイド付きプロジェクトへのマテリアルとシェーダーの適用]Summary

それでは、シェーダーとマテリアルについて学んだことを、ガイド付きプロジェクトに適用してみましょう！

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

これまでのチュートリアルで、ガイド付きプロジェクトを選択し、好みのレンダリングパイプラインを選択し、プロジェクト環境を設定しました。

シェーダーとマテリアルは、光がオブジェクトと相互作用するときの外観を定義し、それがリアルなものであれ芸術的なものであれ、環境のスタイルを表現するのに非常に重要です。

このチュートリアルでは、マテリアルを作成してプロジェクトに追加することで、シーンにさらなる生命と色を加えます。

ステップを完了としてマーク

## 2. デザインドキュメントの要件の確認

Q&A (0)

プロジェクトの作業を再開する前に、マテリアルとシェーダーに関するプロジェクト要件を再確認します。

**1.**選択したプロジェクトのデザインドキュメントを開きます：

- [**Alien video game shop**](https://docs.google.com/document/d/13sLzTig3O3DCUiNYxCgjampHbe5j26QDJlDKoF4q4aA/export?format=pdf)
- [**Architectural rendering**](https://docs.google.com/document/d/1P852ynVuhLagU17gX0zsdg8ESO66Zh3gGLjjp-gYKrk/export?format=pdf)
- [**Beachside town**](https://docs.google.com/document/d/1fWpQCJQYJ5kIUl06LRsX2oN1FgevVwdlAOe_te5_Qyo/export?format=pdf)

**2.**デザインドキュメントの Project Specifications セクションで、**マテリアル**と**シェーダー**の要件を確認します。

ステップを完了としてマーク

## 3. 学んだことをプロジェクトに活かす

Q&A (0)

これで、デザインドキュメントに記載された要件を満たすために、新しいスキルを適用する準備が整いました。

以下のステップでは、プロジェクト特有の注意点やヒントをご紹介しています。以下のリンクから、選択したプロジェクトに関連するセクションに移動することができます：

- **Alien video game shop**（**エイリアンのビデオゲームショップ**）**→ Step 4**
- **Architectural rendering**（**建築レンダリング**）**→ Step 5**
- **Beachside town**（**海辺の街**）**→ Step 6**

ステップを完了としてマーク

## 4. 「エイリアンのビデオゲームショップ」の要件

Q&A (0)

#### マテリアルの修正

一部のオブジェクトがマゼンタ色になっていることにお気づきでしょう。これは、現在マテリアルが適用されていないことを意味します。これを修正するには、Assets フォルダーから以下のオブジェクトにマテリアルを適用してください：

- 壁
- ゲームソフトの棚が 1 つ

#### カスタムシェーダーの追加

このため、Shader Graph のマテリアルを新規に作成することで、より興味深いものにすることができます。きらめく、またはバブル（シュワシュワと泡立つような感じ）シェーダーを作成し、till に適用してみてください。手引きとして、[Shader Graph](https://learn.unity.com/tutorial/get-started-with-shader-graph) に関するチュートリアルをご覧ください。

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

#### 自分好みに仕上げる

Unity アセットストア、ウェブ、自分のプロジェクトなどを検索して、シーン用の新しいマテリアルを見つけることができます。

その他、シェーダーやマテリアルのアップデートで、このプロジェクトをカスタマイズすることはできますか？

ステップを完了としてマーク

## 5. 「海辺の街」の要件

Q&A (0)

#### マテリアルの修正

一部のオブジェクトがマゼンタ色になっていることにお気づきでしょう。これは、現在何もマテリアルが適用されていないことを意味します：

- 2 つの建物
- ビーチボール

#### カスタムシェーダーの追加

新しい Shader Graph シェーダーを作成して、旗が風で動くようにすると、少し面白くなります。ステップバイステップの手順は、ビデオ「[**Making a flag wave with Shader Graph**](https://www.youtube.com/watch?v=pzo4mitkY8k)」をご覧ください。

**重要：**動画では、新しいシェーダーを作成するよう指示されるたびに、Project ウィンドウで右クリックし、**Create > Shader > Universal Render Pipeline > Lit Shader Graph**の順に選択しています。この動画は Unity バージョン 2019.4 に基づいています。

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

**自分好みに仕上げる**

Unity アセットストア、ウェブ、自分のプロジェクトなどを検索して、シーン用の新しいマテリアルを見つけることができます。

その他、シェーダーやマテリアルのアップデートで、このプロジェクトをカスタマイズすることはできますか？

ステップを完了としてマーク

## 6. 「建築レンダリング」の要件

Q&A (0)

#### マテリアルの修正

一部のオブジェクトがマゼンタ色になっていることにお気づきでしょう。これは、そのオブジェクトにマテリアルが適用されていないことを意味します。これを修正するには、Assetsフォルダーから以下のオブジェクトにマテリアルを適用してください：

- 二つの壁
- 椅子

#### カスタムシェーダーの追加

新しい Shader Graph シェーダーを作成して、テレビ画面にスクロールする画像や静的なノイズを表示させることで、もう少し面白くすることができます。手引きについては、[Shader Graph](https://learn.unity.com/tutorial/get-started-with-shader-graph) に関するチュートリアルをご覧ください。

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

#### 自分好みに仕上げる

Unity アセットストア、ウェブ、自分のプロジェクトなどを検索して、シーン用の新しいマテリアルを見つけることができます。

その他、シェーダーやマテリアルのアップデートで、このプロジェクトをカスタマイズすることはできますか？

ステップを完了としてマーク

## 7. 次のステップ

Q&A (0)

おめでとうございます！これで「**Materials and Shaders**」のミッションを完了しました。次に、「**Lighting**」について学び、この新しい知識をガイド付きプロジェクトに適用してください。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
