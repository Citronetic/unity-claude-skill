[Image: image]

# BIM オブジェクトへのオーディオエフェクトの追加

Tutorial

intermediate

+10XP

20 mins

0

Unity Technologies

[Image: BIM オブジェクトへのオーディオエフェクトの追加]Summary

本チュートリアルでは、インポートされたオブジェクトに関連する BIM データを使用して、Audio Source コンポーネントを追加できる要素を特定します。

Resources

- [AddingAudioEffectstoBIMObjects_Resources.zip](https://unity-connect-prd.storage.googleapis.com/20200527/1babbafe-b558-4365-8a74-19008395cabf/AddingAudioEffectstoBIMObjects_Resources.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950763663)
- [AddingAudioEffectstoBIMObjects_Complete.zip](https://unity-connect-prd.storage.googleapis.com/20200527/0c48a400-f057-4621-9f59-124072fc673b/AddingAudioEffectstoBIMObjects_Complete.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950763663)

Languages available:

日本語English日本語日本語

## 1. はじめに

Q&A (0)

Spatial Audio (3D オーディオ) は、没入感のある体験を作る上で重要な要素です。Reflect にはバーチャルリアリティのコンポーネントが含まれているので、ランタイム時に特定のオブジェクトにオーディオソースを追加する方法を知っていれば、よりリアルで没入感のあるシーンを作ることができます。本チュートリアルでは、インポートされたオブジェクトに関連する BIM データを使用して、Audio Source コンポーネントを追加できる要素を特定します。

このチュートリアルでは、次のものが必要です：

- Package Manager でインストールした Reflect パッケージ
- Unity エディターの Pro ライセンス
- Unity のカスタムパッケージ："AddingAudioEffectstoBIMObjects.unitypackage"
- Revit の Reflect プラグインを使って Reflect にエクスポートした Revit サンプルプロジェクト

ステップを完了としてマーク

## 2. AudioSource コンポーネントの追加

Q&A (0)

通常、Audio Source コンポーネントを追加する場合は、シーン内のゲームオブジェクトに追加し、必要に応じて設定を行います。ただし、このチュートリアルでは、スクリプトを使ってコンポーネントを追加し、プロジェクトが実行されるまでそれらのゲームオブジェクトを利用できないため、Reflect Viewer のストリーミングされたモデルにも同じプロセスを使うことができます。

このスクリプトでは、コンポーネントを追加し、指定された Audio Source を探して、オーディオを指定通りに設定します。まず、Audio Source コンポーネントと必要な設定を見てみましょう (**画像** **01**)。

[Image: image]

Audio Source コンポーネントでは、シーン内のサウンドソースの動作をコントロールする様々な設定にアクセスできます：

- **AudioClip** (**1**) を設定することになります。これは再生したいサウンドファイルです。
- 次に、**Play On Awake** (**2**) にチェックを入れてサウンドをオンにしてから **Loop** (**3**) に設定します。
- **Spatial Blend** (**4**)****が 1 に設定されていることを確認してください。Spatial Blend を 1 に設定することで、Unity に 3D サウンドエフェクトを与えることができます。
- **Doppler Level** (**5**) は、音が通り過ぎたとき、またはその逆のときの音の動き方を制御します。これは、車が[クラクションを鳴らしながら](https://youtu.be/SqGtp6RQy_8?t=93)あなたを通り過ぎるときに経験する音程の変化です。このシーンでは、Doppler Effect を必要とするほど動きが激しくないので、0 に設定しています。
- **Volume Rolloff** (**6**) は、遠ざかっていくときの音の消え方をコントロールします。LinearRolloff では、遠ざかっても音が均等に消えていきます。一方、**Logarithmic Rolloff**は、現実世界での音の動きを表しており、離れ始めると音が急速に減衰し、遠くに行くと非常に緩やかになります。これはデフォルトの設定で、スクリプトで設定する必要はありません。
- **Min Distance** (**7**) は、音量が最大になる音源を中心とした半径を設定します。**Max Distance** は、音が減衰しなくなる最大の距離を設定します。これは、シーン全体でサウンドが聞こえることを意味しますが、このポイントを過ぎると、それ以上フェードしなくなります。Max Distance でサウンドを完全に停止させたい場合は、Volume Rolloff を **Linear** または **Custom** に設定します。

ステップを完了としてマーク

## 3. シーンの設定

Q&A (0)

本チュートリアルでは、ストリームされたモデルではなく、Reflect によってインポートされたモデルを使用します。その理由は、モデルがインポートされてからスクリプトを実行する必要があるからです。現在、Reflect には「Completed Importing」イベントがないため、スクリプトを実行する前にテストすることができません。回避策はありますが、このスクリプトの範囲を超えています。

このスクリプトは Reflect Viewer のストリーミングモデルでも動作しますが、インポートされたモデルを使用することで、テストや実験をより簡単かつ迅速に行うことができます。

**1.**Package Manager から Reflect パッケージをインストールします。なお、Reflect パッケージはプレビューパッケージです。Package Manager でプレビューパッケージを有効にするには、**Advanced**> **Show preview packages** の順にクリックします。

**2. Window > Reflect**と選択し、Reflect Importer を起動します (**画像** **02**)。

[Image: image]

**3.** このチュートリアルでは、標準の Revit サンプルプロジェクトを開いて Reflect にエクスポートし、Reflect Importer を使用してそのプロジェクトをインポートする必要があります (**画像** **03**)。独自のプロジェクトを使用したい場合は、特定の値を使用するようにスクリプトを調整する必要があります。

[Image: image]

**4.** インポートしたモデルのプレハブ「rac_basic_sample_project_phases_{3D}」をシーンにドラッグします (**画像** **04**)。これは次のフォルダーパスにあります：**Assets**> **Reflect** > **Revit Sample Project**

[Image: image]

**5.** カスタムパッケージ  "AddingAudioEffectstoBIMObjects.unitypackage " のインポート

**6.**新しい空のゲームオブジェクトを作成し、名前を*AudioSource*に変更します (**画像** **05**)。

[Image: image]

**7.** **AddAudio** スクリプトを、新しくできた空のゲームオブジェクトにドラッグします。このスクリプトは、以下のように展開されます (**画像** **06**)。

[Image: image]

**8.** プロジェクトを実行します。Wind Turbine の一つを選択すると、Audio Source コンポーネントが追加されているのがわかります。設定に注意してください (**Figure** **07**):

[Image: image]ステップを完了としてマーク

## 4. スクリプトの理解

Q&A (0)

スクリプトは、各ステップが何をするかを説明するために十分なドキュメントが用意されているので、このチュートリアルのためにスクリプトを開いてご確認ください (**画像** **08**)。

このスクリプトでは、まず Reflect で取り込んだメタデータを使って風車 (wind turbine) を探します。「Family」というキーを使って、WindTurbine (**1**) というファミリーを探します。独自のモデルを使用する場合は、検索するキーと値を変更することで、スクリプトを変更することができます。

[Image: image]

シーンの中でファミリーを見つけると、Audio Source コンポーネント (**2**) を追加します。次に、Audio Source を **Assets > Resources** (**3**) ファイルの中のサウンドファイルに設定し、必要に応じてオーディオを設定 (**4**) します。最後に、オーディオを「loop」に設定し、再生を開始 (**5**) します。

ステップを完了としてマーク

## 5. 次のステップ

Q&A (0)

本チュートリアルでは、関連する BIM データを使用してモデル内の特定の要素を検索し、実行時にスクリプトを用いてコンポーネントを追加する方法を学びました。これは非常に強力なツールであり、シーンにブースト機能を作り出すことができます。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
