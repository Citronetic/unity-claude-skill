[Image: image]

# スカイボックスの変更

Tutorial

intermediate

+10XP

15 mins

0

Unity Technologies

[Image: スカイボックスの変更]Summary

このチュートリアルでは、ボタンがクリックされたときに、ランタイムでシーンの空を変更する方法を学習します。

Resources

- [ChangingSkyboxes.zip](https://unity-connect-prd.storage.googleapis.com/20200518/b29f3ec2-a990-4a77-8564-7b47d1d05fba/ChangingSkyboxes.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952713697)
- [ChangingSkyboxesComplete.zip](https://unity-connect-prd.storage.googleapis.com/20200518/2b7ec040-339f-443b-abf3-b0215ae9bb77/ChangingSkyboxesComplete.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952713697)

Languages available:

日本語English日本語日本語

## 1. はじめに

Q&A (0)

Reflect Viewer では、ゲームのシーンで定義されているスタンダードの Skybox (スカイボックス) を使用します。このSkybox マテリアルは、RenderSettings.skylbox クラスを介してランタイムにアクセスできます。

このチュートリアルには、次のものが必要です：

- Github からダウンロードした Reflect Viewer プロジェクト [GitHub - Unity-Technologies/com.unity.reflect.viewer: Unity Reflect Viewer](https://github.com/Unity-Technologies/com.unity.reflect.viewer)
- Unity エディターの Pro ライセンス
- Unity のカスタムパッケージ：“ChangingSkyboxes.unitypackage”

ステップを完了としてマーク

## 2. ボタンの作成

Q&A (0)

まず、クリックすると空が変わるボタンを作成します。このボタンは、既存の Settings Canvas の下に作成され、スプラッシュ画面のシーケンスの後に表示されます。

**1.**Github からダウンロードした Reflect Viewer のプロジェクトを、Unity で開きます。

**2.**Reflect シーンを開きます (**画像 01**)。

[Image: image]

**3.**チュートリアルのリソースから ChangingSkyboxes のパッケージをインポートします。

**4.** **UI Root** 要素を右クリックして、新しい要素を作成 (**UI > Image**)します。これが空を変更するためのボタンになります。

**5.**新しい画像要素を選択し、名前を「SkyChangeButton」に変更します (**画像** **02**)。

[Image: image]

**6.** SkyChangeButton 要素が選択されたままの状態で、Source Image を**Sun**に変更します (**画像 03**)。

[Image: image]

**7.** **Add Component**をクリックして、Button コンポーネントを追加します。これにより、画像がクリック可能になり、ボタンにインタラクションを追加することができます (**画像** **04**)。

[Image: image]

**8.** Move ツールと Scale ツールを使って、太陽のアイコンが左上に収まるように位置とサイズを変更します (**画像** **05**)。

[Image: image]

**9.** **Assets > Scripts**フォルダーにある changeSky スクリプトを、新しい SkyChangeButton 要素にドラッグします (**画像** **06**)。

[Image: image]

**10.** 次に、スクリプトをボタンの On Click () イベントにリンクさせる必要があります。Inspector で、先ほど追加した Button コンポーネントの下にある **+**を選択します (**画像 07**)。

[Image: image]

**11.** SkyChangeButton 要素を Inspector の新しい On Click() イベントにドラッグします (**画像 08**)。

[Image: image]

**12.** changeSky を選択します。スクリプト内の On Click () 関数を変更します (**画像 9**)。

[Image: image]

**13.** Inspector で、追加されたスクリプトコンポーネントで Skybox One スロットに CloudSkybox マテリアルを追加し、その横にあるラジオボタンを選択して、該当する空を選択します (**画像 10**)。

[Image: image]

このアニメーションスカイボックスは、このチュートリアルのインポートしたリソースの一部です。これは、[https://github.com/keijiro/CloudSkybox](https://github.com/keijiro/CloudSkybox) からダウンロードできます (提供者：Keijirro 氏) 。

**14.**Skybox Two スロットにもステップ 11 を繰り返し、Default-Skybox マテリアルを追加します (**画像 11**)。

[Image: image]

**15.** プロジェクトを実行します。SkyChangeButton をクリックすると、Material スロットに追加された 2 つのスカイボックスが切り替わります (**画像 12**)。これらのスロットのマテリアルを、お好きなスカイボックスに変更することができます。

[Image: image]ステップを完了としてマーク

## 3. スクリプトの理解

Q&A (0)

このプロジェクトで使用されているスクリプトは、On Click () イベントを受け取り、2 つのマテリアルを切り替えるという非常にシンプルなものです (**画像 13**)。

[Image: image]

2 つの Material 変数が宣言され (**01**)、Inspector の Material 用の 2 つのスロットが作成されます。

ChangeOnClick (**2**) 関数は、ボタンがクリックされたときに Material One が適用されているかどうかをチェックします。これが true であれば、空を Material Two に変更します。そうでない場合は、Material One に切り替えます。

ステップを完了としてマーク

## 4. 次のステップ

Q&A (0)

本チュートリアルでは、ボタンがクリックされたときにスカイボックスのマテリアルを変更する方法を説明しました。これで、実行時にスカイボックスのマテリアルにアクセスする方法と、スクリプトで使用するマテリアルを指定する方法について理解できたと思います。これらのテクニックを使って、独自のスカイボックスオプションを作成したり、特定のサイトの 360 画像を使ってプロジェクトのコンテキストを示すこともできます。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
