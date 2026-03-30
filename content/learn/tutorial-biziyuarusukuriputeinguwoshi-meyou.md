[Image: image]

# ビジュアルスクリプティングを始めよう

Tutorial

Beginner

+10XP

15 mins

2

(101)

Unity Technologies

[Image: ビジュアルスクリプティングを始めよう]Summary

このチュートリアルでは、最初のスクリプトのために ビジュアルスクリプティングの設定を開始します。このチュートリアルを終える頃には、以下のことができるようになっています：

- Graph および Script Machine の定義
- ゲームオブジェクトに Script Machine コンポーネントを追加する
- Visual Scripting Graph をプロジェクトアセットとして保存する
- Unity エディターで Visual Scripting ウィンドウを開く
- Script Graph ウィンドウのパネルの説明と配置について
- Script Graph ウィンドウでのパン、ズーム、中心への戻し方

Languages available:

日本語English日本語한국어日本語

## 1. 概要

Q&A (0)

本チュートリアルは、経験豊富な Unity ユーザーはもちろん、初めて Unity を使う方にも、ビジュアルスクリプティングのユーザーインターフェイスに慣れていただくためのものです。まず、新しい Unity プロジェクトを作成して、最初のビジュアルスクリプトのアセットを作成します。

ステップを完了としてマーク

## 2. はじめる前に

Q&A (0)

本チュートリアルでは、Unity のバージョン 2021.1 以上を使用し、インストールされている Visual Scripting パッケージを使用することをお勧めします。

[Unity Asset Store のパッケージである Bolt](https://assetstore.unity.com/packages/tools/visual-scripting/bolt-163802) は Unityのバージョン2019 LTS と 2020 LTS でも使用できます。その場合、ユーザーインターフェースやアイテムの名前がここで紹介されているものとは若干異なりますが、フォローアップすることができます。

ステップを完了としてマーク

## 3. シーンの準備

Q&A (0)

新しい空のシーンから始めましょう：

**1.** Unity のバージョン 2021.1 以上で Universal Render Pipeline (URP) テンプレート（または、バージョン 2018～2020 をお使いの場合は、[Asset Store から Bolt をインストール](https://assetstore.unity.com/packages/tools/visual-scripting/bolt-163802)）を使用して新しいプロジェクトを作成します。

**2.** 新しい空のシーンで、キューブのプリミティブを作成します。

**3.** Play モードでキューブがよく見えるように、キューブと Main Camera の位置を調整します。キューブが回転する様子を確認できるようにする必要があります。

[Image: image]ステップを完了としてマーク

## 4. Script Machine の作成

Q&A (0)

**Machine**はビジュアルスクリプトを実行するコンポーネントです。コンポーネントである Machine は、コンポーネントのゲームオブジェクトに対してビジュアルスクリプトの指示を実行します。**Script Machines**（今回のようなもの）と **State Machines**（次回のプロジェクトで取り上げる）の 2 種類があります。

キューブに新しい Script Machine を追加します。このマシンには、**Graph**とも呼ばれるビジュアルスクリプトが格納されます。

キューブを選択した状態で、Inspector に移動し、**Add Component > Visual Scripting > Script Machine**を選択します。Inspector ウィンドウにコンポーネントが追加され、Scene ビュー（ゲームオブジェクトが選択されていない状態）でゲームオブジェクトにスクリプトシンボル (<>) が表示されます。

[Image: image]

Machine と Graph は同じものではないことに注意してください。Machine はゲームオブジェクトにアタッチされたコンポーネントであり、Graph はプロジェクトの別ファイルに保存された、複数の Machine で使用できるアセットです。この違いは後で重要になります。

ステップを完了としてマーク

## 5. グラフの作成

Q&A (0)

この時点では、Machine は作成されていますが、まだグラフ (Graph) が割り当てられていません。早速、グラフを作成してみましょう。

**1.** Script Machine コンポーネントで、**New** ボタンを選択し、新しい**Graph** を作成します。Save ウィンドウが表示され、Unity プロジェクトの Assets フォルダーが表示されます。

**2.** プロジェクトを整理するために、VisualScripting のアセットを保存する **VisualScripts** というフォルダーを作成します。この名前は、Visual Scripting アセットを、Unity の他のスクリプト（C# スクリプトなど）やグラフ（Shader Graph や VFX Graph のものなど）と区別するのに役立ちます。

**3.**作成したグラフを「Rotation」という名前で保存し、Rotation.asset という新しいファイルを作成します。

**ヒント：**Script Machine コンポーネントに新しいグラフを追加するもうひとつの方法は、Project ウィンドウでグラフを作成して名前を付け、Project ウィンドウから Inspector の Script Machine の **Graph**フィールドにドラッグすることです。このテクニックは後で使います。

**4.** Inspector の Script Machine コンポーネントが更新され、**Title**と**Summary**のフィールドが追加されます。これらはあなた自身が使用するためのものです。デモのために、このグラフのタイトルを「Rotate the Cube」、要約を「Make the cube rotate」としてみましょう。

[Image: image]

**5.** コンポーネントに表示されている**Edit Graph**ボタンを選択します。Script Graph ウィンドウが表示されます。

ステップを完了としてマーク

## 6. Script Graph ウィンドウの設定

Q&A (0)

シーン内に初めてグラフを作成すると、**Script Graph**ウィンドウが表示されます。現在のウィンドウ設定によっては、ドッキングされていない場合もあります。その場合は、Script Graph タブを Project ウィンドウタブや Console ウィンドウタブの隣の [Dock Zone にタブをドラッグ](https://docs.unity3d.com/Manual/CustomizingYourWorkspace.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774951809991)して、このウィンドウと Scene ビューを同時に見られるようにします。

[Image: image]

Script Graph ウィンドウには、3 つのパネルがあります：

- **Graph ウィンドウ：**グラフを作成するためのグリッド領域
- **Graph Inspector：**グラフの編集時に、グラフ内のユニットに関する追加情報を提供するパネル
- **Blackboard：**変数を作成および管理するためのパネル

#### パネルの配置と制御

Graph Inspector と Blackboard は、初めて開いたときには縦に重ねられています。右と左の矢印ボタンを使って、Graph のどちらかの側に移動させることができます。このチュートリアルでは、Graph Inspector を右に、Blackboard を左に移動して、それぞれを簡単に見つけられるようにすることをお勧めします。

[Image: image]

[For additional controls and keyboard shortcuts, consult the Unity Manual for details.](https://www.google.com/url?q=https://docs.unity3d.com/Packages/com.unity.visualscripting@1.5/manual/vs-windows-shortcuts.html&sa=D&source=editors&ust=1615469139962000&usg=AOvVaw2sYk6tFvqarjwcDQVSVPbh)

ステップを完了としてマーク

## 7. 次は何？

Q&A (0)

ビジュアルスクリプティングのインターフェースを見ていただいた後は、次のチュートリアルで実際にビジュアルスクリプトを作成する準備ができています。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
