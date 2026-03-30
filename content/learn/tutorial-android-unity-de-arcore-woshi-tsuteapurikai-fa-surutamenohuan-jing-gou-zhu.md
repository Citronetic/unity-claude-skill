[Image: image]

# [Android]  Unity で ARcore を使ってアプリ開発するための環境構築

Tutorial

Beginner

+10XP

30 mins

0

(8)

Unity Technologies

[Image: [Android]  Unity で ARcore を使ってアプリ開発するための環境構築]Summary

本チュートリアルでは、Android デバイス上で ARCore 開発を行うための Unity プロジェクトの設定方法を学びます。正しいバージョンの Unity のダウンロードから、AR 専用パッケージの有効化までを行います。

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

本チュートリアルでは、AR 開発のために Unity プロジェクトを設定し、シーンにコア AR コンポーネントを追加する方法を学びます。最新の LTS バージョンの Unity と適切なビルドターゲットのインストール、必要な AR パッケージの追加、AR 開発のための Scene 階層の設定、携帯型 AR アプリに最適なプレイヤー設定の方法などが含まれます。

注：このチュートリアルは、Android の開発のみを対象としています。iOS のチュートリアルは、AR Hello World プロジェクトの[こちらのチュートリアル](https://learn.unity.com/tutorial/setting-up-unity-for-arkit-development-unity-download-and-ar-packages?uv=2019.4&projectId=5fb406a7edbc2a08dbc009e9&architecture=true)へスキップして進んでください。

ステップを完了としてマーク

## 2. モバイル要件での Unity のダウンロード

Q&A (0)

Unity Hub を使用して、適切なモバイルビルドツールで正しいバージョンの Unity をインストールします。Android デバイスを Windows 10 コンピューターで使用していることを確認します。最小の Android バージョンは 7.0 です。[対応デバイス](https://developers.google.com/ar/discover/supported-devices)を確認してください。

1. Unity Hub をダウンロードします。詳細については、ドキュメントは[こちら](https://docs.unity3d.com/Manual/GettingStartedInstallingHub.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950892274) 、ビデオは[こちら](https://www.youtube.com/watch?v=hRKcbwUzjuQ)をご覧ください。

2. **Unity Version 2019.4.4f1 (LTS)** をインストール (**画像 1**)。

[Image: image]

3. 正しいモバイル開発パッケージのインストール (**画像 2**)

[Image: image]ステップを完了としてマーク

## 3. 新規の 3D プロジェクトの作成

Q&A (0)

Unity Hub を使って新しいプロジェクトを作成します。

1. Unity Hub 内で、**Projects > New** とクリックします。複数の Unity バージョンがインストールされている場合は、必ずドロップダウン矢印をクリックし、**2019.4.4f1** をクリックします****(**画像 3**)。

[Image: image]

2. **3D** テンプレートを選択します。

3. Unity Project の名前を入力します。

a. 今回は、「Hello AR World」と入力します。

4. Unity Project を保存する場所を選択します。

5. **Create**をクリックすると、新しいプロジェクトが起動します。

ステップを完了としてマーク

## 4. ビルド設定の変更

Q&A (0)

モバイル端末向けにプロジェクトをビルドするための、プロジェクトのビルド設定を行います。

1. 新しく作成したプロジェクトの中で、ARCore プラットフォームをターゲットにしたビルド設定を変更してみましょう。

2. **File** > **Build Settings**とクリックします****(**画像 4**)

[Image: image]

3. **Add Open Scenes**ボタンをクリックします

4. **Android プラットフォーム**のオプションをクリックします

5. **Switch Platform** ボタンをクリックします (**画像 5**)

[Image: image]

6. Build Settings ウィンドウを閉じて、Hello AR World アプリケーション用の各 Unity パッケージのインストールを開始することができます。

ステップを完了としてマーク

## 5. XR Plugin Management と ARFoundation パッケージのインストール

Q&A (0)

XR Plugin Management をインストールして、お使いのプラットフォームでの AR 開発を可能にする適切なパッケージをダウンロードします。

1. **Edit** >**Project Settings** とクリックします (**画像 6**)

[Image: image]

2. Project Settings ウィンドウ内から **XR Plugin Management**タブを選択します。

3. **Install XR Plugin Management**ボタンをクリックします (**画像 7**)

[Image: image]

4. XR Plug-in Management をインストールした後、様々な OS やプロバイダーで AR を実現するためのパッケージをダウンロードすることができます (**画像 8**)

[Image: image]

5.  Android のタブをクリックし、ARCore にチェックを入れます (**画像 9**)

[Image: image]

6. **Window**> **Package Manager**とクリックします。

7. Unity Registry で、**AR Foundation** パッケージを見つけ、**Install**をクリックします****(**画像 10**)

[Image: image]

8. これで、正しいパッケージがインストールされるはずです。

ステップを完了としてマーク

## 6. Project Settings の設定

Q&A (0)

AR のパフォーマンスを最大限に引き出すために、Project Settings を変更します。

1. **Edit** > **Project Settings**とクリックします。

2. Project Settings ウィンドウで、Player オプションをクリックします。プレイヤー設定のほとんどは変更されません。 (**Figure 10**)

[Image: image]

3. Company Name を別の名称に変更するか、そのままにします。

4. Product Name は、すでに「Hello AR World」という名前になっているはずですが、そうでない場合は、別の名前に変更することができます。

5. Android 設定（上の画像の赤丸で囲んだ Android のアイコン）になっていることを確認します。

6. **Other Settings**セクションをクリックします。

7. **Auto Graphics API**チェックボックスがチェックされていることを確認します。

8. **Multithreaded Rendering**のチェックボックスをオフにします。

9.  Minimum API Level を Android 7.0 ‘Nougat’ に設定します (API Level 24) (**画像 11**)

[Image: image]

10. その他の設定はそのままでOKです。

11. Project Settings ウィンドウの左側で、XR をクリックします。

12. Create ボタンをクリックします (**画像 12**)

[Image: image]

13. Create ボタンをクリックすると、すぐに ARCore 設定の保存を促されますので、Save ボタンをクリックしてください。

14. 最後に、Requirement オプションを Required から Optional に変更します (**画像 13**)

[Image: image]ステップを完了としてマーク

## 7. AR オブジェクトの作成

Q&A (0)

AR パッケージを使用して、プロジェクトのシーンで AR 機能のための AR オブジェクトを作成します。

- **注意：**これらのオブジェクトは、App シーンでは表示されません。

1. Hierarchy で、Main Camera を右クリック（**Main Camera > Delete** と選択）して Main Camera を削除します (**画像 14**)

[Image: image]

2. 次に、AR Session Origin オブジェクトを作成します (**画像 15**)

- **Hierarchy > XR > AR Session Origin** の順に進み、右クリックする

3. **AR Session**オブジェクトを作成します (**画像 15**)

- **Hierarchy** > **XR** > **AR Session**の順に進み、右クリックする

[Image: image]

4. Hierarchy で、**AR Session Origin**オブジェクトの横にあるドロップダウン矢印をクリックします。

5. **AR Camera** をクリックします (**画像 16**)

[Image: image]

6. Inspector の下に Tag セクションがあります。ドロップダウンメニューをクリックし、Main Camera を選択します。

ステップを完了としてマーク

## 8. まとめ

Q&A (0)

このチュートリアルでは、AR 開発用に設定された特定のパッケージと設定を持つ新しい Unity プロジェクトをセットアップする方法を学びました。次に、Android Studio などの IDE を使って、あなたのデバイスへデプロイするための設定を行います。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
