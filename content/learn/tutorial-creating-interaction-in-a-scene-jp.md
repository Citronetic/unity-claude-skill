[Image: image]

# シーン内にインタラクションを追加する

Tutorial

intermediate

+10XP

15 mins

0

Unity Technologies

[Image: シーン内にインタラクションを追加する]Summary

本チュートリアルでは、シーン内のライトを制御する UI を作成することで、ランタイムに機能を追加する方法をご紹介します。

Resources

- [CreatingInteraction_Resources.zip](https://unity-connect-prd.storage.googleapis.com/20200527/247c747b-b9da-4e6c-bb8f-ba527e8358b8/CreatingInteraction_Resources.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954330151)
- [CreatingInteraction_Complete.zip](https://unity-connect-prd.storage.googleapis.com/20200527/ca9fc222-66ee-42d9-9aae-15e0350cfb80/CreatingInteraction_Complete.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954330151)

Languages available:

日本語English日本語日本語

## 1. はじめに

Q&A (0)

Reflect Viewer は、ランタイムにモデルをロードしますが、ゲームが実行されていないときは、ゲームシーンでは利用できません。このため、モデルにスクリプトやインタラクションを追加することは困難です。本チュートリアルでは、シーン内のライトを制御する UI を作成することで、ランタイム時に機能を追加する方法を探ります。

このチュートリアルでは、次のものが必要です：

- Github からダウンロードした Reflect Viewer プロジェクト：[GitHub - Unity-Technologies/com.unity.reflect.viewer: Unity Reflect Viewer](https://github.com/Unity-Technologies/com.unity.reflect.viewer)
- Unity エディターの Pro ライセンス
- ライトを含む Reflect プロジェクト
- このチュートリアルの一部である「CreatingInteractionintheScene_Resources.unitypackage」ファイル

ステップを完了としてマーク

## 2. インタラクションの設定

Q&A (0)

**1.** Github からダウンロードした Reflect プロジェクトを開き、Reflect シーンを開きます。

[Image: image]

**2.**Hierarchy で UI ルートを展開します。

[Image: image]

**3.** UI Root 要素を右クリックし、**UI > Image** と選択します。

[Image: image]

**4.** Image 要素を選択し、Inspector で Source Image を「Lightbulb」に変更します。

[Image: image]

**5.**Image 要素の名前を「LightSwitchIcon」に変更し、UI 画面の左端の位置に移動させます。

[Image: image]

**6.** **Assets > Scripts** から LightControls スクリプトを UI Root オブジェクトにドラッグします。

[Image: image]

**7.** このスクリプトには 2 つのメソッドが含まれています。1 つはライトをオフにするメソッド、もう 1 つはライトをオンにするメソッドです。このスクリプトは、アタッチされたオブジェクトのすべての子オブジェクトを実行します。指定されたタイプのオブジェクト（ここではライト）を見つけると、Enabled プロパティのオン/オフを切り替えます。

スクリプトを適用した Root オブジェクトは、ランタイム時にインポートされるモデルのプレースホルダーです。ランタイムモデルがインポートされると、どのプロジェクトを開いても、この Root オブジェクトの子として作成されます。

**8.** LighSwitchIcon オブジェクトを選択して Button コンポーネントを追加し、**＋**アイコンを選択して On Click () イベントを追加します。

[Image: image]

**9.**Root オブジェクトを「None (Object)」スロットにドラッグします。

[Image: image]

**10.** 「No Function」のドロップダウンメニューを選択し、**ReflectWorkshop. LightsControls > LightSwitch ()**を選択します。

[Image: image]

**11.** プロジェクトを実行し、以前に作成したライトを含むプロジェクトを開きます。LightSwitchIcon を選択すると、アイコンをクリックするたびに、プロジェクト内のライトがオン/オフを切り替えるようになります。

ステップを完了としてマーク

## 3. 次のステップ

Q&A (0)

Reflect Viewer のランタイムモデルを扱う上で問題となるのが、ランタイム時にオブジェクトにアクセスすることです。モデルは実行時にしか読み込まれないため、特定のオブジェクトにスクリプトを事前に読み込むことができません。Root オブジェクトを使用し、さらに「GetComponentsInChildren()」メソッドを使用することで、ランタイム時にインポートしたモデルをフィルタリングし、特定のオブジェクトに機能を追加することができます。本チュートリアルでは、その問題に対するソリューションを取り上げ、独自のカスタムコントロールを作成できるようにしました。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
