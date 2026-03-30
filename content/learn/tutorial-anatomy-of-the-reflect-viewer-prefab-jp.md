[Image: image]

# Reflect Viewer の構造

Tutorial

intermediate

+10XP

20 mins

0

Unity Technologies

[Image: Reflect Viewer の構造]Summary

Unity Reflect Viewer のプレハブは、Unity パッケージマネージャーの Reflect パッケージに付属しています。このプレハブには Reflect Viewer のすべての UI 要素が含まれており、スタンドアロンのビューアーと同じ機能で Unity エディターでビューアーを実行することができます。

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

Github から入手できる Unity の Reflect Viewer プロジェクトには、Reflect Viewer の UI と機能がすでにセットアップされています。このプロジェクトには Reflect Viewer の UI 要素がすべて含まれており、スタンドアロンのビューアーと同じ機能で Unity エディターでビューアーを動かすことができます。

ステップを完了としてマーク

## 2. はじめに

Q&A (0)

Reflect Viewer プロジェクトは、スタンドアロンビューアーの「生の (Raw)」バージョンであり、スタンドアロンビューアーを構築するためのプロジェクトです。この Unity プロジェクトの様々な部分を理解することで、カスタマイズして独自のバージョンを作り始めることができます。例えば、以下を構築することができます：

- 顧客のブランディングを表示するビューアー
- レイアウトや機能が異なるビューアー
- 異なるビジュアルスタイルの UI 要素

このチュートリアルで必要なものは：

- [Github](https://github.com/Unity-Technologies/com.unity.reflect.viewer) からダウンロードした Reflect Viewer プロジェクト
- Unity エディターの Pro ライセンス

ステップを完了としてマーク

## 3. Reflect プロジェクト

Q&A (0)

GitHub から Unity Reflect プロジェクトをダウンロードして開くと、プロジェクトの**Assets > Scenes** フォルダーに Reflect シーンがあります (**画像 01**)。

[Image: image]

このシーンを開くと、シーン内にはすでに Reflect ビューアーが設定されています (**画像 02**)。

[Image: image]

ここからは、Reflect Viewer の各部を見ていきましょう。

まず理解していただきたいのは、現在、Reflect Viewer を Unity のプロジェクトとして見ているということです。今すぐ構築することを決めれば、クライアントが Revit やその他の Reflect 対応アプリケーションからエクスポートした CAD や BIM モデルを見るために使用するのと全く同じビューアーアプリケーションを使用できます。

シーンを再生すると、ビューアーが動作している様子を見ることができます。なお、ビューアーが使用するアカウントは、Unity エディターにサインインしたときのアカウントと同じです。プロジェクトを見るためには、Unity エディターで使用しているアカウントと同じアカウントにプロジェクトが割り当てられていることを確認してください (**画像 03**)。

[Image: image]

プログラムを停止して、エディターに戻ります。Reflect Viewer のキャンバスがシーンに表示されます (**画像 04**)。

[Image: image]

Scene エクスプローラーで Reflect ゲームオブジェクトを見ると、Hierarchy 内に子のゲームオブジェクトがあります (**画像 05**)。

[Image: image]ステップを完了としてマーク

## 4. Reflect ゲームオブジェクトの子要素

Q&A (0)

### **MARS Session**

このゲームオブジェクトには、Unity Mars をあなたのプロジェクトに統合するためのスクリプトが含まれています。これをプロジェクトで使用するためには、MARS のサブスクリプションが必要であることに注意してください。

### **Reflect**

Reflect レンダリングパイプラインのスクリプトと設定が含まれています。

### **Post-Processing Volume**

シーンのポストプロセススクリプトと設定を含む空のゲームオブジェクト

### **Managers**

このゲームオブジェクトには、ランタイムに Reflect Viewer を管理するスクリプトが含まれています (**画像 06**)。

[Image: image]

### **Events System**

Reflect Viewer でイベントを処理するすべてのスクリプトのコンテナです。

### **Root**

Root ゲームオブジェクトは他のものとは少し違います。このオブジェクトは、Edit モードでは何も表示されません。ランタイムにプロジェクトがダウンロードされると、このオブジェクトはモデルのすべてのジオメトリ、マテリアル、メタデータを含めるために使用されます (**画像 07**)。

[Image: image]

### **BoundingBoxRoot**

BoundingBoxRoot は、SpatialFilterNode が青いバウンディングボックスを配置する場所を決定するためにアプリケーションが使用します。

### **PlacementRoot**

PlacementRoot は、AR でモデルを配置する際に必要です。これは、モデルの中心を中心に回転させるためのものです。

### **Directional Light**

このディレクショナルライト (Directional Light) は、シーンの中で太陽の役割を果たし、アプリケーションの Sun Study ツールにリンクして操作されます。

### **UI root**

UI Root ゲームオブジェクトには、アプリケーションのユーザーインターフェースを構成するキャンバスやボタンなどの要素がすべて含まれています。

ステップを完了としてマーク

## 5. 次のステップ

Q&A (0)

これで、Unity Reflect Viewer のゲームオブジェクトと、各コンポーネントがどのように組み合わされているかをしっかりと理解できたはずです。この知識をもとに、Unity の基本的な Canvas ツールと UI ワークフローを使って、ビューアーのユーザーインターフェースを自分のニーズに合わせてカスタマイズする方法を探ってみましょう。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
