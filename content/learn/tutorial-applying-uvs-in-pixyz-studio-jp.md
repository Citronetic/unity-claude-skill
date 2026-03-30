[Image: image]

# PiXYZ Studio での UV の適用

Tutorial

Beginner

+10XP

45 mins

0

Unity Technologies

[Image: PiXYZ Studio での UV の適用]Summary

PiXYZ Studio では、投影法とアンラッピングの 2つの方法で UV を作成し適用することができます。PiXYZ Studio では、UV の生成を簡単に行うことができ、UV を操作するためのツールも用意されているので、モデルの UV を管理するための別のステップやプログラムは必要ありません。これにより、CAD モデルをリアルタイムのアプリケーションで使用するための準備をすべて整えることができます。このチュートリアルでは、PiXYZ Studio でモデルに UV を適用する方法を学習します。

Languages available:

日本語English日本語日本語

## 1. PiXYZ Studio での UV の適用

Q&A (0)

PiXYZ Studio では、CAD モデルをリアルタイムにアプリケーションで使用できるようにするために必要なすべての機能を備えています。投影法とアンラッピングの 2つの方法で UVを作成および適用することができ、簡単に UV を生成することができます。また、UV を操作するプロセスを簡略化し、別のプログラムの必要性を排除するいくつかのツールを提供します。

ステップを完了としてマーク

## 2. UV ツール

Q&A (0)

PiXYZ Studio には、モデルの UV を生成するためのツールがいくつか用意されています **(画像 01)**。

[Image: image]

- **Generate UV By Projection：**Bounding Box から投影することで、モデルの選択したパーツに UV を生成します。次のようなさまざまな方法で投影を処理します：Bounding Box, Cubic Bounding Box, Custom Bounding Box, Box, Sphere, Cylinder, Plane, View
- **Generate UV By Unwrapping：**Meshをアンラッピングして UV を生成します。必要なカットやステッチを自動的に行い、UV をパックします。
- **Repack UV：**UV チャンネル、解像度、パディングなど、定義された入力に応じて、UV を再パックします。
- **Normalize UV：**UV のテクスチャ座標が [0, 1] の範囲に正規化されます。
- **Swap UV Channel：**選択された UV が新しい UV チャンネルに移動します。
- **Remove UV：**選択した UV を削除します。
- **Copy UV：**選択した UV をコピーします。
- **UV Viewer：**選択した UV をプレビューするウィンドウを開きます。

ステップを完了としてマーク

## 3. UV 生成の種類

Q&A (0)

UV を操作したり調整したりする前に、まず UV を作成しなければなりません。これには 2つの方法（UV Projection と UV Unwrapping）があります。UV Projection では、Bounding Box から選択したパーツにテクスチャを投影し、テクスチャ座標を作成します。UV Unwrapping は、選択されたパーツのメッシュを取得し、テクスチャに継ぎ目を作って UV を展開します。

投影法では、UV をその法線によって分離します。これにより、UV シェル (UV 法線の方向によって結合されたバラバラのピース) が作成されます。プロジェクションは通常、6 つの UV シェルグループを作成し、テクスチャの伸張を防ぐためにそれらを平らにしようとはしません **(画像 02)**。

[Image: image]

メッシュをフラットな平面に展開することで UV が生成されるため、アンラッピングすることでより統一感のある UV シェルを作成することができます**(画像 03)**。

[Image: image]ステップを完了としてマーク

## 4. UV 投影

Q&A (0)

PiXYZ では、投影で UV を生成する方法が複数ありますが、ここでは主に 3 つの方法 (Bounding Box, Cubic Bounding Box, Custom Bounding Box) を紹介します。この 3 つのオプションでは、ユーザーが Bounding Box のサイズを定義し、それによって UV のサイズが決まります。最後に、UV を生成するチャンネルを定義します。デフォルトは 0 です。

これらのオプションには違いがあります。Bounding Box は各軸に同じスケールの UV を生成しませんが、Cubic Bounding Box は各軸に同じスケールの UV を生成します。Custom Bounding Box を使用すると、各軸における投影のスケールを定義することができます。

Bounding Box と Cubic Bounding Box ウィンドウでは、利用可能なオプションが似ています。Property ウィンドウの上部には、PiXYZ のサイトにある、その Properties ウィンドウのドキュメントを開くためのリンクがあります **(画像 04)**。

[Image: image]

投影マッピングで変更できるプロパティは以下の通りです：

- **New Preset Button：**これをクリックすると、現在の値のプリセットが保存されます。一度保存されたプリセットは、後で選択することができます。
- **Scene Paths：**シーンで選択されているパーツの数が表示されます。
- **Select Button：**シーンの中でより多くのパーツを選択できるようになります。
- **Use Local AABB：**このオプションは Bounding Box でのみ使用可能で、UV のスケールにローカル軸を使用します。
- **UV 3D Size：**Bounding Box のサイズを決定します。
- **Channel：**どのチャンネルで UV を生成するかを選択することができます。
- **Override Existing Uvs：**これを切り替えると、特定の UV チャンネルに生成された既存の UV が上書きされます。

UV 投影の 3 つ目のオプションは、Custom Bounding Box です **(画像 05)**。

[Image: image]

Custom Bounding Box ウィンドウは、ローカル軸を除いて Bounding Box 投影と同じ設定とプロパティを持ち、代わりに軸のスケールを定義することができます。

UV を生成するためには： **(画像 06)**

1. UV を生成して適用したいパーツを選択します。
2. **UV > Generate UV By Projection > Projection On Bounding Box**の順に選択します。
3. 新しいウィンドウが開きます。UV 3D サイズで、Bounding Box のサイズを定義します。これにより、UV のスケールが決まります。値が大きいほど、投影が大きくなります。ボックスの大きさは、UV を生成するパーツを包み込むのに十分な大きさで、シェルが UV の [0, 1] の範囲に収まるようにします。
4. どの UV チャンネルを使用するかを選択します。デフォルトでは 0 です。
5. Execute をクリックします。

[Image: image]

これで PiXYZ が UV を生成します。右下のウィンドウには、プログレスバーが表示されています。UV の生成に要する時間は、選択したパーツの複雑さや数によって異なります。

ステップを完了としてマーク

## 5. UV アンラッピング

Q&A (0)

UV アンラッピング (Unwrapping) によって UV を生成するための自動 UV Mapping ウィンドウには、最適な UV シェルを作成するために知っておくべき設定がいくつかあります **(画像 07)**。

[Image: image]

UV Unwrapping ウィンドウのプロパティを以下に示します：

- **New Preset Button：**これをクリックすると、現在の値のプリセットが保存されます。一度保存されたプリセットは、後で選択することができます。
- **Scene Paths：**シーンで選択されているパーツの現在の数が表示されます。
- **Select Button：**シーン内でより多くのパーツを選択できるようになります。
- **Channel：**UV を生成するための UV チャンネルを選択できます。
- **Max Angle Distortion：**UV を展開する際に発生する角度の歪みの上限を設定するものです。
- **Max Area Distortion：**UV が 1 にスケールされる前のエリアの歪みの上限を設定します。
- **Sharp to Seam：**有効にすると、Mesh の鋭角部分を継ぎ目として扱います。
- **Forbid Overlapping：**有効にすると、UV シェルが重なるのを防ぎます。
- **Scale to One：**この機能を有効にすると、生成された UV を [0, 1] の UV 範囲にスケーリングします。

ステップを完了としてマーク

## 6. まとめ

Q&A (0)

PiXYZ Studio は、CAD モデルをリアルタイムアプリケーション用に準備するためのワンストップアプリケーションです。UV を生成するためにサードパーティのプログラムを使用する必要がなくなり、自動化によってプロセスが迅速化されます。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
