[Image: image]

# テストシーンの作成およびビルド

Tutorial

intermediate

+10XP

25 mins

0

Unity Technologies

[Image: テストシーンの作成およびビルド]Summary

このチュートリアルでは、Unity Mars を使用してテストシーンを作成し、ビルドします。

Languages available:

日本語English日本語한국어日本語

## 1. 概要

Q&A (0)

Unity Mars をインストールし、そのユーザーインターフェースを探索したところで、いよいよ制作を開始する準備が整いました。この学習体験では、現実世界のサーフェスに AR Sphere (*球体*モデル) を配置する基本的なアプリを作成する方法を説明します。この学習では、Unity Mars の主要なコンセプトについて学びます。

このチュートリアルでは、まず設定を行います。アプリ自体に取り組む前にテストシーンを作成する必要があります。

ステップを完了としてマーク

## 2. プロキシとは？

Q&A (0)

**Proxy** (**プロキシ**)****は、AR アプリが検知して使用できる現実世界のオブジェクトの代用品として機能するゲームオブジェク トです。例えば、ソーシャルメディアのビデオフィルターではユーザーの顔を、アプリではスフィアが表示されるテーブルを、プロキシで表現することができます。

AR アプリの作成は、デジタルコンテンツと現実世界のオブジェクトや場所を関連付けることに大きく依存しています。プロキシは、現実世界とアプリ内のデジタルコンテンツを結びつけるプレースホルダーのようなものだと考えることができます。

ステップを完了としてマーク

## 3. 基本的なアプリケーションの作成

Q&A (0)

Unity Mars を使えば、さまざまな魅力的な AR 体験を作ることができますが、まずは簡単なものから始めてみましょう。

以下の手順で、実世界の水平面上にスフィア (Sphere) を表示するアプリケーションを作成します：

**1.** メインメニューで**File > New Scene**と進み、**Basic (Built-in)** テンプレートを選択します。

**2.** 新しいシーンを保存し、「Sample Scene」と名付けます。

**3.** Hierarchy で **Add** (**+**) を選択し、**MARS > Presets > Horizontal Plane** の順に選択します。このゲームオブジェクトは、現実世界の水平面に対するプロキシです。

**注：**MARS Panel の Hierarchy セクションではなく、通常の Hierarchy ウィンドウを使用してください。

**4.** Hierarchy で **Horizontal Plane** ゲームオブジェクトを右クリックし、**3D Object > Sphere** と選択し、新しい子ゲームオブジェクトを作成します。

**5.  Sphere** ゲームオブジェクトを選択します。Inspector で Scale の値を (**0.1, 0.1, 0.1**) に調整し、Sphere を約 10 立方センチメートルにスケールします。

[Image: image]

**6.** Hierarchy で **Add** (**+**) を選択し、**MARS > Data Visualizers > Plane Visualizer**の順に選択します。これで、Hierarchy に **Planes Visualizer**ゲームオブジェクトと**MARS Session**ゲームオブジェクトの両方が追加されます。

このシーンから作るアプリで、スキャンされたサーフェスを見ることができるようになります。アプリが水平面を検出すると、その上にスフィアを配置します。

ステップを完了としてマーク

## 4. ビルド対象のプラットフォームの設定

Q&A (0)

プロジェクトにプラットフォーム固有の設定を行う前に、デバイスの正しいプラットフォームを選択する必要があります。

プラットフォームを選択するには：

**1.**  メインメニューで、**File > Build Settings...** と進みます。

**2.**  Platform セクションで、**Android** または **iOS**のいずれかを選択します。

**3.**  **Switch Platform**を選択します。

**4.**  iOS デバイス向けにビルドする場合は、[お使いのプラットフォーム向けの説明にスキップ](https://learn.unity.com/tutorial/6389eb20edbc2a3fd87aef5a?preview=true#6389ec4eedbc2a3fd87aef8c)してください。Android デバイス用の手順については、次のステップに進んでください。

ステップを完了としてマーク

## 5. Android：プロジェクトの設定を行う

Q&A (0)

ARCore は、拡張現実体験を構築するための Google のフレームワークです。以下の手順に従って、ARCore 向けのプロジェクト設定を行います：

**1.**  メインメニューで、**Edit > Project Settings...** と進みます。

**2.**  ナビゲーションパネル（ウィンドウの左側）で、**Player** を選択します。**Android**タブが選択されていない場合は、それを選択します。

**3.**  **Other Settings** セクションを探し、デフォルトで折りたたみが閉じている場合は、折りたたみを展開します。

**4.** Rendering セクションで、**Auto Graphics API**プロパティを探し、無効にします。

**注：**2022.2 LTS よりも古いバージョンの Unity を使用している場合、Graphics API のリストがすでに表示されている場合があります。

**5.** 表示された Graphics APIs リストで、**Vulkan** を選択し、**Remove** (**-**) を選択します。これにより、プロジェクトの再インポートが引き起こされる場合があります。

**6.**  Identification セクションで、**Minimum API Level**を **Android 7.1 'Nougat' (API level 24)**に設定します。

**7.**  Configuration セクションで、**Scripting Backend**を**IL2CPP**に設定します。

**8.**  Configuration セクションのさらに下に、**Target Architectures** プロパティを見つけます。**ARM64**を有効化します。

これでアプリを作る準備ができました。[次のステップをスキップして、関連する手順に進みます](https://learn.unity.com/tutorial/6389eb20edbc2a3fd87aef5a?preview=true#6389ed31edbc2a3dbacac4ac)。

ステップを完了としてマーク

## 6. iOS：プロジェクトの設定を行う

Q&A (0)

ARKit は、AR（拡張現実）体験を実現するための Apple のフレームワークです。以下の手順に従って、ARKit 向けにプロジェクト設定を行ってください：

プロジェクトの設定を行うには：

**1.**  メインメニューで、**Edit > Project Settings...** と進みます。

**2.**  ナビゲーションパネル（ウィンドウの左側）で、**Player** を選択します。

**3.**  **Other Settings**セクションを探し、デフォルトで折りたたみが閉じている場合は、折りたたみを展開します。

**4.**  Configuration セクションで、**Camera Usage Description**プロパティを見つけます。このフィールドに自動的に入力されていない場合は、以下の説明「Camera access required for AR functionality」(AR 機能にはカメラへのアクセスが必要です) を入力します。

**5.**  さらに Configuration セクションの配下にある **Target minimum iOS version**設定を探し、「11.0」と入力します。

ステップを完了としてマーク

## 7. アプリをビルドして実行する

Q&A (0)

これでプロジェクトの設定が完了したので、Unity Mars アプリをビルドして実行する準備ができました。

**重要：**[選択したモバイルプラットフォーム用の正しいパッケージをインストール](https://learn.unity.com/tutorial/6389b038edbc2a35b0e377c1?preview=true#6389b2afedbc2a3a28b36ac9)していない場合、アプリを構築することはできません。アプリを構築する際に、その他の問題が発生した場合は、[次のステップのトラブルシューティングのガイダンス](https://learn.unity.com/tutorial/6389eb20edbc2a3fd87aef5a?preview=true#6389ed65edbc2a3dbacac4b3)を参照してください。

以下の手順に従って、アプリをビルドして実行します：

**1.** メインメニューで、**File > Build Settings...**と進みます。

**2.  Add Open Scenes**を選択し、Sample Scene をビルドに含めます。

**3.** お使いのデバイスのプラットフォーム（**Android**または**iOS**）が正しく選択されていることを確認します。

**4.**  モバイルデバイスをコンピューターに接続していない場合は、接続してください。

**5.**  **Build And Run**を選択します。

**6.**  プラットフォームの要件に応じて、ビルドに名前を付けて保存します：

- Android の場合、.APK ファイルに名前を付けます。
- iOS の場合は、XCode プロジェクトのフォルダーに名前を付けます。

**7.**  お使いのプラットフォームに合わせて、必要な手順を踏んでください：

- [Build for Android](https://docs.unity3d.com/Manual/android-BuildProcess.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954146768)
- [Getting started with iOS (iOS 用ゲームの開発について)](https://docs.unity3d.com/Manual/iphone-GettingStarted.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954146768)

#### テストシーンを試してみよう

アプリを起動すると、Unity のスプラッシュ画面が表示され、次にカメラのビデオストリームが表示されるはずです。

デバイスを動かして、あなたの周りの部屋のサーフェスをスキャンし始めます。スキャンしたサーフェスには、青い点線のパターンが表示されます。これは、追加した Plane Visualizer のデフォルト効果です。水平面が検出されると、画像のように Horizontal Plane Proxy の子として作成したスフィアが表示されます。

ステップを完了としてマーク

## 8. テストシーンのトラブルシューティング

Q&A (0)

アプリをビルドして実行する際に問題が発生した場合は、この手引きを参考にするとよいでしょう。

#### ツール：Mars の Project Validation

Unity Mars には Project Validation ツールが組み込まれており、シーンやプロジェクトでよくある設定上の問題を回避するために使用することができます。このツールは、プロジェクト設定（**Edit > Project Settings > MARS > Project Validation**）よりアクセスできます。

Project Validation ツールは、Project Settings ウィンドウで Project Validation ツールを開いている場合、ビルド時に実行されるルール、または現在のシーンで実行されるルールをチェックします。

**注：**一部の問題では、**Fix**ボタンが表示され、これを使用して自動的にエラーを修正することができます。その他の問題は、手動で対処する必要があります。これらの問題には、**Edit** ボタンが表示され、 UI の問題を修正する領域へ移動することができます。

[Image: image]

#### 問題：ビルド後のブランクページ（画面が真っ黒）

プロジェクトをビルドした後に黒い画面が表示される場合は、これらのパッケージがインストールされているかどうかを確認してください：

- com.unity.mars-ar-foundation-providers
- com.unity.xr.arfoundation

また、以下のいずれかまたは両方を満たすこと：

- com.unity.xr.arkit
- com.unity.xr.arcore

それでも黒い画面が表示される場合は、[Unity Mars マニュアルの FAQ](https://docs.unity3d.com/Packages/com.unity.mars@1.5/manual/FAQ.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954146768) によくある原因について記載されていますので、そちらをご参照ください。

#### 問題：コンパイルエラー

複数のコンパイルエラーが発生した場合は、ARFoundation、ARCore および/または ARKit のパッケージのメジャーバージョンとマイナーバージョンが同じであること、および AR Foundation のそのバージョンをサポートする Unity のバージョンを使用していることを確認します。なお、古い Unity 2019.4 のバージョンで ARFoundation を使用すると、いくつかの問題が発生することがあります。

ビルド生成時にエラーが発生する場合は、ARCore / ARKit に指定したバージョンが SDK バージョンにサポートされているかどうかを確認してください。バージョンがサポートされていない場合、デバイスにビルドすることができません。

#### 追加のリソースとガイダンス

モバイルプラットフォーム向けにビルドするための Unity の設定については、Unity マニュアルの該当セクションを参照してください：

- [Building and delivering for Android](https://docs.unity3d.com/Manual/android-building-and-delivering.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954146768)
- [Building and delivering for iOS](https://docs.unity3d.com/Manual/ios-building-and-delivering.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954146768)

アプリのビルドと実行に問題が発生した場合は、[プロジェクトを iOS または Android にデプロイする](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android?uv=2021.3&courseId=6346b7e5edbc2a7caec0f8fc&projectId=633b041bedbc2a6de5496294)ことも有用な参考になる場合があります。このチュートリアルは、「[Create with AR: Face Filters](https://learn.unity.com/course/create-with-ar-face-filters?uv=2021.3)」コースからの入門編です。

ステップを完了としてマーク

## 9. 次のステップ

Q&A (0)

このチュートリアルでは、Horizontal Plane Proxy に基づいた基本的なアプリケーションのテストシーンを作成しました。次は、この作業を基にプロキシを実世界とどのようにマッチさせたいかをより具体的に説明します。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
