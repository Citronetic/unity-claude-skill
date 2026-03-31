[Image: image]

# フィルターにアクセサリを追加する

Tutorial

Beginner

+10XP

30 mins

0

Unity Technologies

[Image: フィルターにアクセサリを追加する]Summary

ユーザーの顔をトラッキングしているときは、ユーザーの頭の位置と回転運動についても効率的にトラッキングしているものです。これにより、ユーザーの頭の上や周囲にハローや面白いメガネなどの 3D モデルを追加することができるのです。

このチュートリアルでは、以下のことを行います。

- フェイストラッカーに 3D アクセサリを追加する。
- Face Reference Mesh を参照として使用して、3D アクセサリを配置する。
- メッシュ最適化とカスタムアセットの操作の基本について学ぶ。
- 更新したアプリケーションをビルドしてテストする。

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. 概要

Q&A (0)

ここまでは、アプリケーションに 2D テクスチャを追加してきました。しかし、AR フィルターでできることはそれだけではありません。このチュートリアルでは、以下のことを行います。

- フェイストラッカーに 3D アクセサリを追加する。
- Face Reference Mesh を参照として使用して、3D アクセサリを配置する。
- メッシュ最適化と FBX カスタムアセットの操作の基本について学ぶ。

このチュートリアルを終えると、独自の 3D フェイスフィルターの作成を開始する準備が整います。

ステップを完了としてマーク

## 2. 3D アクセサリの内容を見る

Q&A (0)

このプロジェクト用にダウンロードしたパッケージには、シーンに追加できる既製のアクセサリが含まれています。Project ウィンドウで「**Assets**」>「**_BasicFaceFilter**」>「**Prefabs**」に移動し、少し時間を取って、提供されているモデルの内容を確認します。

[Image: image]ステップを完了としてマーク

## 3. フェイストラッカーにアクセサリをアタッチする

Q&A (0)

これらの 3D アクセサリの 1 つをフェイストラッカーにアタッチする前に、アクセサリを正しく配置するのに役立つ、目に見えるフェイスリファレンスを **AR Default Face** に追加する必要があります。

フェイスリファレンスを追加するには、以下の手順に従います。

**1.**  Project ウィンドウで、「**Prefabs**」フォルダーに移動します。

**2.**  フォルダー内の **AR Default Face** プレハブをダブルクリックして、このプレハブをシーンビューで開きます。

**3.**  **Face_Reference_Mesh** プレハブを、参照として機能させるために Project ウィンドウから「Hierarchy」にドラッグします。**Face_Reference_Mesh** を拡大するには、「Hierarchy」内でダブルクリックします。

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

**4.**  提供されているアクセサリの 1 つを、「Hierarchy」内の **AR Default Face** ゲームオブジェクトにドラッグします。これにより、アクセサリがこのゲームオブジェクトの子としてプレハブに追加されます。

[Image: image]

**5.**  Transform ツールを使用して、選択したアクセサリを正しい位置に配置します。必要に応じて回転とスケールを調整することもできます。

[Image: image]

**ノート**：復習したくなった時は、[Transform ツールとそのショートカットを見るようにしてみて](https://learn.unity.com/tutorial/explore-the-unity-editor-1#6273f00fedbc2a7f158cc1f2)ください。

**6.**  「Inspector」で、**Face_Reference_Mesh** ゲームオブジェクトを無効にします。

[Image: image]

**7.**  「Hierarchy」で、ウィンドウの左上の戻る矢印を選択して、プレハブ編集モードを終了します。

[Image: image]ステップを完了としてマーク

## 4. ビルドしてテストする

Q&A (0)

これで、アプリケーションをビルドすると追加したアクセサリが顔の上の正しい位置に表示されるはずです。ただ、位置合わせについては試行錯誤を繰り返すことになるかもしれません。アクセサリの位置に満足できない場合は、もう一度プレハブを開いてさらに調整してください。

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

アプリケーションをビルドしてテストするには、以下の手順に従います。

**1.**  シーンを保存します。

**2.**  「Build Settings」ウィンドウを開きます（「**File**」>「**Build Settings**」）。

**3.**デバイスが接続されていることを確認してから、「**Build and Run**」を選択してデバイスでアプリケーションをビルドします。

**4.** デバイスでアプリケーションが自動的に開きます。顔が検出されると、追加したアクセサリがアプリケーションで表示されるはずです（ただし完璧な位置ではない場合があります）。

**ノート**：お使いのデバイスへのビルド方法についての再確認として、[Android](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4b8aedbc2a4b38f955ba) または [iOS](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4108edbc2a49c08f0641) 向けのプロセスを見直しておくのも良いでしょう。

ステップを完了としてマーク

## 5. 独自のアセットの使用に関するヒント

Q&A (0)

通常、AR はモバイルハードウェアで実行されるため、アプリケーション向けに最適化されたアセットを作成して使用することが重要です。最適化は複雑なトピックであり、体験の最適化については多様なアプローチが存在しています。

通常、AR はモバイルハードウェアで実行されるため、アプリケーション向けに最適化されたアセットを作成して使用することが重要です。最適化は複雑なトピックであり、体験の最適化については多様なアプローチが存在しています。

**メッシュ最適化**は、ゲームやアプリケーションでのパフォーマンスを確実に向上させることができる最も重要な方法の 1 つです。（先ほど AR アプリケーションに追加したアクセサリのような）ゲームやアプリケーション内のすべてのモデルのメッシュは、ポリゴンで構成されています。ゲームアセット内のポリゴンの数は、ゲームのパフォーマンスに影響します。ポリゴン数が多くなると、たくさんのリアルタイム計算と管理を要することになり、フレームレートの低下につながります。

モバイルハードウェアではメッシュあたりのポリゴン数を 300 ～ 1500 の間に保つと良い結果が得られますが、デスクトッププラットフォームではポリゴン数 1500 ～ 4000 が理想的な範囲です。これらはあくまで一般的な推奨値であることに注意してください。シーン内のポリゴンの総数も重要です。つまり、多くのキャラクターが含まれるシーンでは、ポリゴン数がもっと少ないモデルを使用することが必要になります。

メッシュ最適化の詳細については、以下のリソースを参照してください。

- [Arm & Unity Presents: 3D Art Optimization for Mobile Applications（英語）](https://learn.unity.com/course/3d-art-optimization-for-mobile-gaming-5474)」：モバイル開発のための中級者向けコースです。
- [法線マップに関する Unity のドキュメント](https://docs.unity3d.com/ja/current/Manual/StandardShaderMaterialParameterNormalMap.html)：低ポリゴン数のモデルで高ポリゴン数の詳細を表現できます。

ステップを完了としてマーク任意のステップ

## 6. FBX ファイルをインポートする

Q&A (0)

独自のアセットを作成して Unity に FBX 形式でエクスポートすると、通常は、[Blender](https://www.blender.org/) や [Maya](https://www.autodesk.co.jp/products/maya/overview) などのモデリングアプリケーションによるエクスポートプロセス中にマテリアルとテクスチャがモデルに埋め込まれます。 これらのモデルを Unity にインポートすると、マテリアルとテクスチャが表示されず、モデルがグレーのみで表示されることがよくあります。

これを修正するには、モデルをインポートした後で、埋め込まれたマテリアルとテクスチャを抽出する必要があります。

**1.**  Project ウィンドウで、「**Assets**」フォルダーに移動し、インポートされた FBX モデルを選択します。

**2.**  「Inspector」で、「**Materials**」タブを選択します。

[Image: image]

**3.**  「**Extract Textures**」を選択し、テクスチャの保存先のフォルダーを選択します。

**4.**  「**Extract Materials**」を選択し、マテリアルの保存先のフォルダーを選択します。

ステップを完了としてマーク

## 7. 他にもトライしてほしいこと

Q&A (0)

さらなるスキルの向上や、新しいコンセプトの模索、現プロジェクトについての改善などを考えているのであれば、以下の任意のアクティビティもぜひ見るようにしてみてください。それぞれ「初級」、「上級」のタグが付いているので、難易度を選択できます。

これらのアクティビティは完全に任意であるため、興味がなければこのステップをスキップしてもかまいません。ただ、今回の学習体験を最大限に生かすためにも、このアクティビティの内の 1 つは試してみることをお勧めいたします。それでは頑張ってください！

#### 初級：Asset Store からアクセサリをインポートする

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

Unity Asset Store には、アプリケーションに使用できるさまざまな種類のアセットが揃っています。モバイルデバイスでの良好なパフォーマンスを確保するために、ポリゴン数が少ないモデルをアプリケーションに使用することを忘れないでください。Unity の「[Hats pack - 3D Microgames Add-Ons（訳：帽子パック - 3D Microgame アドオン](https://assetstore.unity.com/packages/3d/hats-pack-3d-microgames-add-ons-163011?locale=ja-JP)）」は、手始めとして最適なアセットパッケージです！

プロジェクトを拡張するには、以下の手順に従います。

- Unity Asset Store で、ポリゴン数が少ないアセットを見つけます。
- それらをプロジェクトにインポートします。
- このチュートリアルで前述したプロセスを使用して、アクセサリのモデルまたはプレハブをアプリケーションに追加します。

#### 上級：新しいアクセサリを作成する

Unity 内でも、[Blender](https://www.blender.org/)、[3dsMax](https://www.autodesk.co.jp/products/3ds-max/free-trial)、[Maya](https://www.autodesk.co.jp/products/maya/free-trial) などのサードパーティ製のアプリケーションを使用しても、さまざまな方法で独自の 3D アクセサリを作成できます。Unity では、何も入っていない親であるもの（キューブ、スフィア、カプセルなど）を共有する、プリミティブな形状を組み合わせて使用して、新しい外観とオブジェクトを作ることができます。また、[ProBuilder](https://learn.unity.com/tutorial/working-with-shapes-in-probuilder#) などの Unity ツールを使用して、もっと複雑な形状をエディター内で作成することもできます。

独自の 3D の傑作を創り上げる準備ができたら、Face Reference Mesh を独自の 3D アクセサリの配置、回転、スケールの参照として使用することを忘れないでくださいね。

ステップを完了としてマーク

## 8. 次のステップ

Q&A (0)

このチュートリアルでは、フェイスフィルターに 3D アクセサリを追加する方法を学習しました。次のチュートリアルでは、特殊エフェクトを使用して、さらにわくわくするものにしてみましょう！

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
