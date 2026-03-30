[Image: image]

# Terrain によるプロトタイプのレベルアップ

Tutorial

Beginner

+10XP

20 mins

0

Unity Technologies

[Image: Terrain によるプロトタイプのレベルアップ]Summary

Terrain は、インタラクティブな体験のランドスケープです。Unity 2020.3 LTS には、プロトタイプに適したカスタムランドスケープを作成するために使用できる、一連の Terrain 機能が含まれています。

このチュートリアルが終わるころには、次のことができるようになります：

- Terrain がどのようにプロトタイプ開発をサポートするかを説明する。
- 新しい Terrain を作成する。
- プロトタイプに合わせた Terrain (地形) のカスタマイズ。

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

**Terrain** (**地形**) は、インタラクティブな体験のランドスケープのことです。Unity 2020.3 LTS には、プロトタイプに適したカスタムのランドスケープを作成するために使用できる一連の Terrain 機能と、クリエイターの旅を進める中で探求していくためのより高度な機能が含まれています。

このチュートリアルでは、次のことを行います：

- Terrain (地形) を使ってランドスケープを作成します。
- 丘の部分を彫刻 (スカルプト) して滑らかにします。
- Terrain (テレイン) をカスタマイズするために使える追加機能について学習します。

そして、学んだことを、自分に関係があれば、個人のプロトタイプに適用することができます。

ステップを完了としてマーク

## 2. Terrain タイルの作成

Q&A (0)

ランドスケープは、***Terrain タイル***と呼ばれる大きくて平らな平面ゲームオブジェクトで作られています。

まず、Terrain ゲームオブジェクトを 1 つ作成します：

**1.**  Project ウィンドウで、**Assets > CreativeCore_Prototyping > Scenes** の順に選択します。新しいシーンを作成し、開きます。

**2.**  Hierarchy で、**Add** (**+**)**> 3D Object > Terrain** の順に選択します。 新しい Terrain ゲームオブジェクトが Scene ビューに表示されます。この大きくて平らな平面が、どのようにグリッドにスナップしているかに注目してください。

[Image: image]

**3.**  Project ウィンドウで、***Assets***フォルダーに移動します。Terrain タイルを作成すると、対応する **Terrain アセット**がこのフォルダーに追加されます。

[Image: image]ステップを完了としてマーク

## 3. ランドスケープを拡げる

Q&A (0)

Terrain (地形) のデフォルトのサイズは、縦横ともに 1000 m の Square (四角形) のメッシュ解像度になっています。ただし、それだけでは必ずしも全体のランドスケープが作れるとは限りません。タイル状のグリッドシステムを使って、すでに作ったタイルに隣接するタイルを作ることで、Terrain (地形) を拡げることができます。

ランドスケープに別の Terrain タイルを追加するには：

**1.**  Hierarchy または Scene ビューで、Terrain ゲームオブジェクトを選択します。

**2.**  Inspector で、Terrain 編集ツールを見つけます。

[Image: image]

**3.**  ***Create Neighbor Terrains***を選択します。

[Image: image]

**4.**Scene ビューにマウスカーソルを置いてください。新しいグリッドが表示され、隣接する 4 つのタイルが各タイルエッジに接続されているのがわかると思います。

[Image: image]

**3**.   これらの新しいタイルを 1 つ選択して、新しい ***Neighbor Terrain***を作成します。これを行うたびに、グリッドが反応します。

**4.**   ***Neighbor Terrain*** を作成すると、Hierarchy にゲームオブジェクトが追加され、名前にその位置が含まれるようになります。

[Image: image]

**5.**   このチュートリアルでは、引き続き、より大きなランドスケープを作成して作業します。具体的な広さは自由ですが、3 タイル × 3 タイル（3000 メートル × 3000 メートル）のグリッドが含まれていることを確認し、作業や実験に十分なスペースを確保してください。

[Image: image]

**Create Neighbor Terrain**ツールを使えば、プロジェクトのニーズにぴったり合ったランドスケープエリアを作成することができます。

ステップを完了としてマーク

## 4. 丘をつくる

Q&A (0)

これで、作業するためのランドスケープができましたが、ただの平面に過ぎません。次に、そのランドスケープの一部を上下させて、いくつかの丘を作ります：

**1.**  Hierarchy ビューまたは Scene ビューで、ランドスケープにある Terrain タイルを 1 つ選択します。

**2.**Inspector で Terrain ツールに移動します。

**3.**  ***Paint Terrain*** を選択します。デフォルトでは ***Raise or Lower Terrain***に設定されていますが、違う場合は、利用可能なツールのメニューからドロップダウンを使用して *Raise or Lower Terrain*を選択します。

[Image: image]

**4.**  利用可能なブラシ (**builtin_brass_1**) の中から最初の **circular brush** (円形ブラシ) を選択します。

**5.**次のように設定します：

- **Brush Size** を **300** 前後に設定
- **Opacity**を **40****前後に設定

[Image: image]

**Brush Size**とは、ブラシのサイズを表し、一度に変更できる領域を決定します。**Opacity**はランドスケープに適用される効果の強さです。

**6.**Scene ビューで Terrain タイルの上にカーソルを置いてください。ランドスケープの上にブラシが表示されるのがわかると思います。

[Image: image]

**7.**あなたのランドスケープに丘陵地帯を作り始めましょう。手順は以下の通り：

- 左クリックで Terrain (地形) を上げます。
- Shift + 左クリックで Terrain (地形) を下げます。
- 押したままドラッグすると、ランドスケープ全体に効果が適用されます。

丘を作成したい領域でブラシを動かし、Terrain (地形) を上げ下げして、概ね満足のいく形状になるまで調整します。さまざまなブラシを自由に試してみましょう。

[Image: image]

**ヒント：**キーボードの四角い開閉ブラケットキー ( **[ ]** ) を使って、スカルプト中に***Brush Size*** を増やしたり減らしたりできます。

丘が荒れていたり、磨きをかける必要があっても気にしないでください。それは次に修正します。

ステップを完了としてマーク

## 5. 丘を滑らかにする

Q&A (0)

基本的な形ができたので、次は作った丘に磨きをかけます：

**1.** Inspector で、Terrain ツールに移動します。ドロップダウンを使って ***Smooth Height***ツールを選択します。

[Image: image]

**2.**前のステップでブラシを変更した場合は、**円形ブラシ**(**builtin_brass_1**) を選択します。

**3.** 次のように設定します：

- **Brush Size** を **200** 前後に設定
- **Opacity**を **30** 前後に設定

**Opacity**の値を大きくすると、ブラシを適用するたびに地形がより滑らかになります。

**4.**  時間をかけて丘を滑らかにします。手順は以下の通り：

- 左クリックでブラシを適用します。
- 押しながらドラッグすると、ランドスケープ全体に効果を適用することができます。

[Image: image]ステップを完了としてマーク

## 6. ランドスケープを洗練させて、より美しく

Q&A (0)

レベルアップしたプロトタイプをさらに洗練させていくと、風景をさらに美しく彩り、カスタマイズしたくなるかもしれません。

Terrain ツールは、さまざまな方法でランドスケープを豊かにするのに役立ちます。

#### 地形の特徴を洗練させる

以下を使って実行できます：

- [Set Height ツール](https://docs.unity3d.com/2020.3/Documentation/Manual/terrain-SetHeight.html)を用いて、台地や道路など平らで水平な領域を作成します。
- [Terrain (地形) にブラシの形を型押し](https://docs.unity3d.com/2020.3/Documentation/Manual/terrain-StampTerrain.html)して、特定の地質特性を作成することができます。
- [Terrain 上に穴をペイント](https://docs.unity3d.com/2020.3/Documentation/Manual/terrain-PaintHoles.html)して、Terrain (地形) の一部を隠したり、洞窟や崖のための開口部を作成できます。

#### 洗練された美しさを加える

以下を使って実行できます：

- [Terrain Layers (Terrain レイヤー)](https://docs.unity3d.com/2020.3/Documentation/Manual/class-TerrainLayer.html) を作成し、Terrain (地形) の表面にテクスチャやその他のプロパティを追加します。
- [Terrain (地形) にテクスチャを追加](https://docs.unity3d.com/2020.3/Documentation/Manual/terrain-PaintTexture.html)して、レンダリング方法をカスタマイズすることができます。
- [ランドスケープに Tree (樹木) をペイント](https://docs.unity3d.com/2020.3/Documentation/Manual/terrain-Trees.html)します（これには樹木のアセットが必要です）。

#### より自然な景観をつくる

以下を使って実行できます：

- [草などの細かいディテールを追加](https://docs.unity3d.com/2020.3/Documentation/Manual/terrain-Grass.html)して、よりリアルな地形を作りましょう。
- [Wind Zones を使用](https://docs.unity3d.com/2020.3/Documentation/Manual/class-WindZone.html)して、Terrain (地形) や Particle System (パーティクルシステム) に風の効果を作り出すことができます。

ステップを完了としてマーク

## 7. 次のステップ

Q&A (0)

サンプルプロジェクトで Terrain (地形) の基本を練習したので、プロトタイプをより良くするために Terrain を使用する準備は完了しました。Unity の Terrain 機能をより詳しく調べたい場合は、[ドキュメントから始めると良いことをお忘れなく](https://docs.unity3d.com/2020.3/Documentation/Manual/script-Terrain.html)！

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
