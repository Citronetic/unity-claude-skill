[Image: image]

# シェーダーグラフの紹介

Tutorial

Beginner

+10XP

15 mins

0

Unity Technologies

[Image: シェーダーグラフの紹介]Summary

本チュートリアルでは、シェーダーグラフ（Shader Graph）を使用してシンプルなノードベースのシェーダーを作成し、軽量レンダーパイプラインで実装する方法を学びます。

Languages available:

日本語English日本語日本語

## 1. シェーダーグラフの概要

Q&A (0)

このチュートリアルは Unity 2019.4.9f1 LTS と Shader Graph 7.3.1 で検証しました

以前のバージョンの Unity では、特化したマテリアルを作成するには、カスタムシェーダーをプログラムするか、外部のプラグインを使用するしかありませんでした。2018 年のリリースで、Unity に独自のネイティブシェーダーグラフが追加されました。これを使用して、ノードを使って視覚的に複雑なマテリアルを構築できるようになりました。

エディターでコードを記述、保存して、コンパイルし、テストするプロセスとは異なり、シェーダグラフは、マテリアルに何が起こっているかをリアルタイムで表示するので、その場で変更を加えたり、実験したりすることができます。

シェーダグラフは驚くほど強力で、非常に複雑になることもあります。シェーダーグラフの作成方法の基本がわかったところで、自分だけのシェーダーグラフを作成して実験してみましょう。

ステップを完了としてマーク

## 2. グラフを作り、最初のノードをつくる

Q&A (0)

1. Project ウィンドウで「Shader Graph」という名前の新しいフォルダを作成します。

2. Project ウィンドウで右クリックし、フライアウトメニューの Create から Shader に移動し、Unlit Graph を選択します。Project ウィンドウに新しいシェーダグラフが生成されます (**画像 01**)。

[Image: image]

3. 新しい Shader Graph の名前を「CheckerShader」とします。

4. CheckerShader をダブルクリックして Shader Graph ウィンドウを開きます。

5. Project ウィンドウの後ろに Shader Graph ウィンドウをドッキングします。

6. 作業領域で右クリックするかスペースバーを押して、Create Node を選択します (**画像 02**)。

[Image: image]

7. Create Node ウィンドウの上部にある 2D を検索し、Texture 2D Asset を選択します (**画像 03**)。

[Image: image]

8. Sample Texture 2D に対してこのプロセスを繰り返します (**画像 04**)。

[Image: image]

9. Texture2D アセットの下部にあるテクスチャスロットで、Radio ボタンをクリックし、目的のテクスチャを検索します。

10. Texture2D アセットの中央にある Out(T) の横にあるピンク色の丸を左クリックしてドラッグすると、コネクターラインが引き出されます。

11. コネクターを Sample Texture 2D の Texture(T) ノードの入力にドラッグします (**画像 05**)。

[Image: image]ステップを完了としてマーク

## 3. グラフ上での構築

Q&A (0)

1. 2 つのノードを挟んで作業領域で左クリックしてドラッグすると、両方が選択されます。

2. CTRL + D (Windows) または Command + D (MacOS) を押して複製します。他の 2 つのノードの下に移動させます。

3. 2 つ目の Texture2D Asset ノードでは、Gradient テクスチャのような、ブレンドするための 2 枚目のテクスチャを探して適用します (**画像 06**)。

[Image: image]

5. 新しいノードを作成し、今度は Tiling と Offset を選択します。

6. Tiling and Offset Out(2) ノードを Checker Sample 2D ノードにドラッグします。

7. Tiling and Offset Tiling(2) ノードの X と Y の入力値を 3 にします (**画像 07**)。

[Image: image]ステップを完了としてマーク

## 4. テクスチャのブレンド

Q&A (0)

1. Divide ノードを作成します。

2.  Checker (チェッカーパターン) Sample 2D ノードの A(1) 出力を A(1) Divide ノードの入力にドラッグします。

3. Divide ノードの B(1) X の入力値を 20 に設定します (**画像 08**)。

[Image: image]

4. Blend ノードを作成します。

5. Divide Out(1) の出力を最初の Blend Base(1) の入力に接続します。

6. Gradient (グラデーション) の Sample Texture2D A(1) の出力を、2 つ目の Blend Base(1) の入力に接続します (**画像 09**)。

[Image: image]ステップを完了としてマーク

## 5. 色の追加とシェーダーの接続

Q&A (0)

1. Color ノードを作成します。

2. Color ノードを明るい青緑色に設定し、モードを HDR に設定します。

3. もう一つの Blend ノードを作成します。

4. 最初の Sample Texture2D ノードの RGBA(4) の出力を新しいブレンドの最初の Base(4) ノードに接続します。

5. Color ノードの Out(4) の出力を Blends の 2 つ目の Base(4) につなぎます (**画像 10**)。

[Image: image]

6. Blend ノードのモードを Darken に設定します (**画像 11**)。

[Image: image]

7. Blue Blend ノードの Out(4) の出力を Unlit Masters Color(3) の入力にドラッグします。

8. Gradient の Blend ノードの Out(4) の出力を Unlit Masters の Alpha(1) の入力にドラッグします。

9. Unlit Master の Surface を Transparent に設定します (**画像 12**)。

[Image: image]

10. Shader Graph ウィンドウの左上にある Save Asset をクリックします (**画像 13**)。

[Image: image]

シェーダーグラフは非常に強力で、非常に複雑になることがあります。ノードは数多くあり、選択することができます。シェーダーグラフの作り方の基本がわかったところで、実際に自分で作ってみましょう。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
