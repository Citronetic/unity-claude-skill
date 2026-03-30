[Image: image]

# AR Foundation を用いた平面検出の設定

Tutorial

Beginner

+10XP

30 mins

0

Unity Technologies

[Image: AR Foundation を用いた平面検出の設定]Summary

本チュートリアルでは、AR Foundation の平面検出機能の作成と設定を行います。平面検出は、有効になっている検出モードに応じて、物理的な環境にある水平または垂直の平面を検出します。

Languages available:

日本語English日本語日本語

## 1. AR Foundation を用いた平面検出の設定

Q&A (0)

検証済み：2019.4LTS -

本チュートリアルは、あなたがすでに AR Foundation ベースのプロジェクトに取り組んでいることを前提としています。

本チュートリアルでは、AR Foundation を使って平面検出の作成と設定を行います。平面検出は、有効な検出モードに応じて、物理的な環境にある水平または垂直の平面を検出します。

新しい平面、または既知の平面に関する新しい情報が検出されるたびに、AR Plane Manager はその平面を表すゲームオブジェクトを作成または更新します。有効でなくなった場合、AR Plane Manager は平面のゲームオブジェクトを削除し、オプション（デフォルトでは有効）で破壊します。

AR Foundation には、そのままでもカスタマイズしても使えるゲームオブジェクトの AR Default Plane があります。まず、このプレハブを作成し、AR Session Origin に AR Plane Manager コンポーネントを追加して、プレハブを使用するように設定します。

ステップを完了としてマーク

## 2. AR Default Plane を使ってみよう

Q&A (0)

AR Default Plane は、AR Plane とAR Plane Mesh Visualizer の 2 つのスクリプトと、ビジュアライザーで使用されるレンダリングコンポーネントで構成されています。AR Plane コンポーネントは、平面の境界点（常に凸形状）と平面の法線を保持します。これらが更新されると、AR Plane Mesh Visualizer が視覚表現を更新します。

AR Plane コンポーネントのオプションは以下の通りです：

- **Destroy on Removal：**平面のゲームオブジェクトが削除されると、デフォルトで破壊されます。
- **Vertex Changed Threshold：**この設定は、boundaryChanged メソッドが呼び出されるまでに、頂点が移動できる最小距離をメートル単位で決定します。

平面プレハブの外観は、メッシュレンダラーのマテリアルやラインレンダラーの設定で、色やマテリアル、テクスチャモードなどをカスタマイズすることができます。

1. Hierarchy ビューで、右クリックして **XR > AR Default Plane** の順に選択します****(**画像 01**)。とりあえず、設定はデフォルトのままにしておきましょう。

[Image: image]

2. プロジェクト内に Prefabs フォルダーを作成し、Hierarchy ビューから AR Default Plane を新しいフォルダにドラッグし、Hierarchy ビューから削除してください (**画像 02**)。

[Image: image]ステップを完了としてマーク

## 3. AR Plane Manager を使ってみよう

Q&A (0)

1. AR Session Origin ゲームオブジェクトを選択します。

2. Inspector で、AR Plane Manager コンポーネントを追加します (**画像 03**)。

[Image: image]

3. AR Default Plane プレハブを Plane Prefab スロットにドラッグします

4. 平面検出モードを選択します。デフォルトでは、水平面と垂直面の両方が検出されます。一部のプラットフォームでは、垂直方向の平面検出がやや厳しい場合があります。どちらか一方だけが必要な場合は、必要のないモードを無効にしてください (**画像  04**)。

[Image: image]

5. Android を使用している場合、アプリをビルドするためには、まずいくつかのビルド設定を変更する必要があります。

6. まず、**Edit > Project Settings… > Player > Other Settings** と進み、Graphics APIs セクションに移動します。リストから Vulkan API を削除します (**画像 05**)。

[Image: image]

7. Minimum API Level を **API Level 24** 以上に設定します (**画像  06**)。

[Image: image]

8. Web ブラウザを開き、右記リンク [https://gradle.org/releases/](https://gradle.org/releases/) をクリックします。

9. **Gradle v5.6.4** をダウンロードし、お好きな場所に解凍してください。

10. **Edit > Preferences… > External Tools** の順に選択し、**Gradle Installed with Unity** のチェックを外し、Gradle location をダウンロードファイルを解凍した場所に設定します (**画像 07**)。

[Image: image]

11. あとは、Project フォルダー内の Assets\Plugins\Android にある Gradle ファイルを変更するだけです。

12. 右記のリンク先  [https://developers.google.com/ar/develop/unity/android-11-build](https://developers.google.com/ar/develop/unity/android-11-build) をクリックし、Unity 2019.3 と 2019.4 のセクションの指示に従ってください。

13. デバイス上でプロジェクトを作成し、ローンチします。AR Default Plane Prefab が AR プレイエリアのフラットなサーフェスに配置されていく様子を、移動しながら見ることができます。

ステップを完了としてマーク

## 4. まとめ

Q&A (0)

平面検出は、プロジェクトを物理的な世界にしっかりと根付かせるものであり、AR Foundation を使用すればかなり簡単です。最も時間のかかる部分は、Plane Mesh Visualizer の外観を選択することです。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
