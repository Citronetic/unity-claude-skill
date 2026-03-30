[Image: image]

# UI レイアウトのカスタマイズ

Tutorial

intermediate

+10XP

20 mins

0

Unity Technologies

[Image: UI レイアウトのカスタマイズ]Summary

本チュートリアルでは、Reflect プレハブの構造をさらに詳しく説明し、自分のニーズに合わせてカスタマイズする方法を理解していきます。

Languages available:

日本語English日本語日本語

## 1. はじめに

Q&A (0)

本チュートリアルでは、Reflect Viewer のインターフェイスを変更して、架空の会社である UniArch のブランドに近づけます。この会社では、主に赤をブランドカラーとして使用しており、Reflect Viewer でこれを確認したいと考えています。このチュートリアルで使用するアセットは、ダウンロード可能な演習ファイルに含まれています。

ステップを完了としてマーク

## 2. ブランドカラーを反映した Viewer キャンバスのカスタマイズ

Q&A (0)

#### アセットの準備

**1.** まず、ダウンロードして、シーンで使いたい画像をすべてインポートします。このチュートリアルで使用するカラーのアイコンは、演習ファイルの中にあります。

**2.**Scene Assets フォルダー内に Images という新しいフォルダを作成します。画像をシーンにドラッグして、このフォルダーに配置します。

ここからは Reflect Viewer のインターフェースを UnityArch の赤のブランドカラーに合わせてカスタマイズしていきます。

**3.**上の画像を選択し、Shift を押しながら下の画像を選択すると、すべてが選択されます (**画像 01**)。

[Image: image]

**4.** プロパティーの Inspector で、 Texture タイプを **Sprite** **(2D と UI)**に変更します。****

**5.**取り込んだ画像をスプライトにすることで、Reflect Viewer プレハブのアイコンを置き換えることができます。

ステップを完了としてマーク

## 3. カスタマイズ

Q&A (0)

このチュートリアルでは、Scene のすべての要素をカスタマイズする必要はありません。次のステップでは、キャンバス上のすべての要素のパスが表示されるので、必要に応じて変更することができますが、これは可能性を示すためのものです。

ステップを完了としてマーク

## 4. プロジェクトのキャンバス

Q&A (0)

Projects キャンバスは、Reflect Viewer を開いて最初に表示されるキャンバスです。このパネルでは、開きたいプロジェクトを選択することができ、カスタマイズ可能な要素が多数あります。下記は、すべての要素のリストで、その下には対応する番号があり、Scene エクスプローラーで編集が必要なプレハブを見つけるためのパスが示されています (**画像 02**)。

[Image: image]

Projects キャンバスでは、以下の要素をカスタマイズすることができます：

**1. UI**> **Window**> **Title**> **Text：**Text が選択されているときは、Property Inspector で色を設定できます (**画像 03**)。

[Image: image]

**2.** **UI** > **Window**> **ListControl**> **Viewport**> **Content**> **ItemTemplate**> **Title：**Inspector で色のプロパティを変更することができます (**画像 04**)。

[Image: image]

**3.** **UI** > **Window**> **ListControl**> **Viewport**> **Content**> **ItemTemplate**> **Description：**色のプロパティは、Inpector で変更することができます。

**4.** **UI** > **Window**> **ListControl**> **Viewport**> **Content**> **ItemTemplate：**色のプロパティは、Inspector で変更することができます。

**5. Button：**Source Image は Inspector で変更できます。

**6. UI** > **Window**> **Title**> **Refresh**> **Icon：**Source Image は Inspector で変更できます。

**7. UI**> **Window**> **ListControl**> **Viewport**> **Content**> **ItemTemplate**> **ConnexionStatus**> **Connected/Not** **Connected：**Source Image は Inspector で変更できます。

**8. UI**> **Window**> **ListControl**> **Viewport**> **Content**> **ItemTemplate**> **DeleteButton：**Source Image は Inspector で変更できます。

**9. UI** > **Window**> **ListControl**> **Viewport**> **Content**> **ItemTemplate**> **Date：**色は Inspector パネルで変更できます。

**10. UI**> **Window**> **ListControl**> **Viewport**> **Content**> **ItemTemplate**> **DownloadButton：**Source Image は Inspector で変更できます。

**11. UI** > **Window**> **ListControl**> **Viewport**> **Content**> **ItemTemplate**> **OpenButton：**Button Script の色は、Inspector パネルで変更することができます。

ステップを完了としてマーク

## 5. メインウィンドウ

Q&A (0)

メインウィンドウは、プロジェクトを開いた後に表示される画面です。この画面には、カスタマイズできる 5つの要素があります (**画像 05**)。

[Image: image]

以下のパスは、カスタマイズしたい場合に、プレハブ内のハイライトされた要素がどこにあるかを示しています。

**1.** **Reflect**> **Canvas**> **Project Canvas**> **Button：**Source Image は、Inspector パネルで変更することができます。

**2. Reflect**> **Canvas**> **ARMode Canvas**> **Button：**Source Image は、Inspector パネルで変更することができます。

**3. Reflect**> **Canvas**> **Sync Canvas**> **Button：**Source Image は、Inspector パネルで変更することができます。

**4. Reflect**> **Canvas**> **Metadata Canvas**> **Button：**Source Image は、Inspector パネルで変更することができます。

**5. Reflect**> **Canvas**> **Settings Canvas**> **Button：**Source Image は、Inspector パネルで変更することができます。

ステップを完了としてマーク

## 6. 設定のポップアップメニュー

Q&A (0)

設定 (Settings) ポップアップメニュー (**画像 06**) もカスタマイズできますが、その方法は異なります。 このメニューはスクリプトにより制御されており、パッケージ内のオリジナル画像を差し替えるか、スクリプトを変更しないと操作できません。スクリプティングはこのチュートリアルの範囲外であるため、ここでは説明しません。

[Image: image]

この 2つ (**1** と **2**) のアイコンの画像設定は、Reflect プレハブの　**Canvas > Settings Canvas > UI > ButtonListControl > ListControlItem > Image**の順に進むと確認できます。

ステップを完了としてマーク

## 7. メタデータのメニュー

Q&A (0)

フィルターメニューを選択すると、メタデータ (metadata)メニュー (**画像 07**) が開きます。このメニューでは、シーン内の要素を強調表示したり、Category、Manufacturer、Type、System、Family に基づいて要素を分離することができます。

[Image: image]

(**画像 07**) 以下のパスは、カスタマイズしたい場合に、プレハブ内の強調表示された要素がどこにあるかを示しています。

**1. Reflect** > **Canvas** > **Metadata Canvas** > **MenuTemplate** > **Title** > **Text：**Inspector Panel で色を変更することができます。

**2. Reflect** > **Canvas** > **Metadata Canvas** > **MenuTemplate** > **MenuItemTemplate** > **Button** > **VisibleButton：**Source Image は、Inspector パネルで変更することができます。

**3. Reflect** > **Canvas** > **Metadata Canvas** > **MenuTemplate** > **MenuItemTemplate** > **Button** > **InvisibleButton：**Source Image は、Inspector パネルで変更することができます。

**4. Reflect** > **Canvas** > **Metadata Canvas** > **MenuTemplate** > **MenuItemTemplate** > **Button** > **Text：**色は Inspector パネルで変更できます。

**5. Reflect** > **Canvas** > **Metadata** **Canvas** > **MenuTemplate：**Inspector パネルでは、Source Image の色を変更できます。

ステップを完了としてマーク

## 8. 次のステップ

Q&A (0)

このチュートリアルを終える頃には、Reflect Viewer プレハブのキャンバスの構造とそのカスタマイズ方法をしっかりと理解しているはずです。どこまでカスタマイズするかは、あなた次第です。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
