[Image: image]

# Construction Sequence Viewer の作成

Tutorial

intermediate

+10XP

20 mins

2

Unity Technologies

[Image: Construction Sequence Viewer の作成]Summary

BIM モデルのメタデータは、カスタム機能を作成するために使用できる強力な識別データとなります。本チュートリアルでは、Revit モデルのデータを使って、完了予定日に基づいてオブジェクトを表示/非表示するスライダーを作成します。

Resources

- [ConstructionSequence_Resources.zip](https://unity-connect-prd.storage.googleapis.com/20200527/acebc2a4-59c2-4054-955d-342d160339ef/ConstructionSequence_Resources.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954249778)
- [ConstructionSequence_Complete.zip](https://unity-connect-prd.storage.googleapis.com/20200527/9327b2bd-a53e-410c-9fec-e3d252a69458/ConstructionSequence_Complete.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954249778)

Languages available:

日本語English日本語日本語

## 1. はじめに

Q&A (0)

BIM モデルのメタデータは、カスタム機能を作成するために使用できる強力な識別データを提供します。本チュートリアルでは、Revit モデルのデータを使って、完了予定日に基づいてオブジェクトを表示/非表示するスライダーを作成します。

このチュートリアルでは、以下のものが必要になります：

- Package Manager からインストールした Reflect パッケージ
- Unity エディターの Pro ライセンス
- Unity のカスタムパッケージ 「CreatingConstructionSequenceViewer_Resources.unitypackage」
- Reflect プラグインを使用した Revit のインストール

ステップを完了としてマーク

## 2. Revit プロジェクトの設定

Q&A (0)

この Sequence ビューアーを動作させるには、シーンに特定のメタデータを追加して Revit プロジェクトを準備する必要があります。メタデータがすでに設定された Revit モデルのサンプルは、このチュートリアルのリソースファイルで提供されています。

**1.**使用したい Revit プロジェクトを開きます。ここでは、Revit とともにインストールされているサンプルプロジェクトを使用しました (**画像 01**)。

[Image: image]

**2.** Manage タブを開き、Settings セクションで Project Parameters を選択します (**画像 02**)。

[Image: image]

**3.** 「Completion Target」という新しいプロジェクトパラメーターを作成し、残りのオプションを図のように選択します。カテゴリーの下にあるすべてのオプションを展開し、すべてにチェックが入っていることを確認してください (**画像 03**)。

[Image: image]

**4.** さて、面倒な部分です。じっくりと時間をかけて、シーンの中でフェーズの一部となるべき要素をすべて選択します。すべての要素を選択したら、Properties パネルで完了日を月 / 日 / 年の形式で追加します。Unity は、スクリプトを実行する際に、このテキストを日付に変換します (**画像 04**)。

[Image: image]

**5.** シーン内のすべての要素にターゲット完了日が設定されるまで、このプロセスを繰り返します。ヒント：完了日を設定する際には、要素を隠しておきましょう。そうすることで、何がまだ完了日を設定する必要があるのかを簡単に把握することができます。

**6.** すべての要素に日付が割り当てられたら、すべての要素の非表示を解除し、Unity タブの **Export View** オプションを使用してモデルを再度 Reflect にエクスポートします (**画像 05**)。

[Image: image]ステップを完了としてマーク

## 3. Unity で Custom Viewer を実行する

Q&A (0)

今回のプロジェクトでは、Unity のソリューションエンジニアの Brian Bare が作成したカスタムビューアーを使用します。このビューアーには、スライダーとスクリプトが含まれており、指定されたメタデータを検索し、インポートした日付に基づいて日付のリストを作成し、要素に割り当てられた日付に基づいて要素を非表示にしたり表示したりすることができます。

**1.**Package Manager から Unity Reflect パッケージをインストールします。

**2.**Tutorial Materials タブから「CreatingConstructionSequenceViewer_Resources」パッケージをダウンロードしてインポートします。

**3.**Reflect Custom Viewer Sequencing プレハブを **Assets > Custom Reflect Viewer > Prefabs** から Scene Hierarchy へドラッグしてカスタムビューアーをシーンに追加します (**画像 06**)。

[Image: image]

**7.** このカスタムビューアーのプレハブを展開し、**Canvas > Completion Canvas** と選択します (**画像 07**)。

[Image: image]

**8.** Inspector で、日付を取得するために使用するメタデータフィールドを **Parameter**スロットに追加します。これは、Revit で設定されたパラメーターです。このチュートリアルでは、Completion Target を使用しました (**Figure 08**).

[Image: image]

**9.** プロジェクトを実行し、エクスポートした Revit モデルをインポートします。Construction Sequence ボタンを選択します (**画像 09**)。

[Image: image]

**10.** スライダーが表示されます。スライダーを前後に動かすと、メタデータで指定された日付が反復され、ステータスに応じて要素が表示／非表示されます (**画像** **10**)。

[Image: image]ステップを完了としてマーク

## 4. 次のステップ

Q&A (0)

スクリプトを開いて、メタデータがどのように渡され、それがどのようにスライダーの入力に使われるかを理解してください。スクリプトは、**Assets > Custom Reflect Viewer > Scripts** の順に進むとあります。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
