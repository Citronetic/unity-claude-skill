[Image: image]

# [iOS] Unity を使って ARKit 対応アプリを開発するための手法

Tutorial

Beginner

+10XP

30 mins

0

Unity Technologies

[Image: [iOS] Unity を使って ARKit 対応アプリを開発するための手法]Summary

*本チュートリアルでは、ARKit 開発のために Unity プロジェクトをセットアップする方法（正しいバージョンの Unity のダウンロードから、AR 専用パッケージの有効化まで）を学びます。*

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

本チュートリアルでは、AR 開発のために Unity プロジェクトを設定し、シーンに Core AR コンポーネントを追加する方法を学びます。最新の LTS バージョンの Unity と適切なビルドターゲットのインストール、必要な AR パッケージの追加、AR 開発のためのシーンの階層の設定、ハンドヘルド AR アプリに最適なPlayer settings の設定方法などが含まれています。

注意：このチュートリアルは、iOS 開発専用です。Androidのチュートリアルについては、AR Hello World プロジェクトのチュートリアルに戻ってください。

ステップを完了としてマーク

## 2. モバイル要件を満たした Unity のダウンロード

Q&A (0)

Unity Hub を使用して、適切なモバイルビルドツールで正しいバージョンの Unity をインストールします。最小 iOS バージョン 11.0 の iOS デバイスを必ず macOS コンピューターで使用するようにしてください。対応デバイスは[こちら](https://developer.apple.com/documentation/arkit/verifying_device_support_and_user_permission)でご確認ください。

1. Unity Hub をダウンロードします。詳細については、ドキュメントは[こちら](https://docs.unity3d.com/Manual/GettingStartedInstallingHub.html?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035114878)、ビデオは[こちら](https://www.youtube.com/watch?v=hRKcbwUzjuQ)をクリックしてください。

2. **Unity Version 2019.4.4f1 (LTS)**をインストールします****(**画像 1**)

[Image: image]

3. 正しいモバイル開発パッケージのインストール (**画像 2**)

[Image: image]ステップを完了としてマーク

## 3. 新しい 3D プロジェクトの作成

Q&A (0)

Unity Hub を使って新しいプロジェクトを作成します。

1. Unity Hub で、**Projects > New** とクリックします。複数の Unity バージョンがインストールされている場合は、必ずドロップダウン矢印をクリックし、**2019.4.4f1** をクリックします (**画像 3**)

[Image: image]

2. **3D** テンプレートを選択します。

3. Unity Project の名前を入力します。

a. 今回は「Hello AR World」と入力します。

4. Unity Project を保存する場所を選択します。

5. **Create**をクリックすると、新しいプロジェクトが起動します。

ステップを完了としてマーク

## 4. Build Settings の変更

Q&A (0)

モバイル端末向けにプロジェクトをビルドするための、プロジェクトのビルド設定を行います。

1. 新たに作成したプロジェクトの中で、iOS プラットフォームをターゲットにしたビルド設定を変更してみましょう。

2. **File** > **Build Settings**とクリックします****(**画像 4**)

[Image: image]

3. **Add Open Scenes** ボタンをクリックします

4. **iOS** プラットフォームのオプションをクリックします

5. **Switch Platform** ボタンをクリックします (**画像 5**)

[Image: image]

6. Build Settings ウィンドウを閉じて、Hello AR World アプリケーション用の各 Unity パッケージのインストールを開始することができます。

ステップを完了としてマーク

## 5. プロジェクトで AR を有効にし、必要なパッケージをインストール

Q&A (0)

XR Plugin Management でプロジェクトの AR を有効にし、Project Settings を用いて AR 開発に必要なパッケージをインストールします。

1. **Edit** >**Project Settings** とクリックします (**画像 6**)

[Image: image]

2. Project Settings ウィンドウで、**XR Plugin Management**タブを選択します。

3. **Install XR Plugin Management**ボタンをクリックします (**画像 7**)

[Image: image]

4. XR Plug-in Management をインストールした後、様々な OS やプロバイダーで AR を実現するためのパッケージをダウンロードすることができます (**画像 8**)

[Image: image]

5. iOS のタブをクリックし、ARKit のチェックボックスを有効にします (**画像 9**)

[Image: image]

6. これで、正しいパッケージがインストールされるはずです。

7. Package Manager ウィンドウ内で、**AR Foundation** を見つけて選択します。

8. **2019.4 検証済み**パッケージのインストール (**画像 10**)

[Image: image]ステップを完了としてマーク

## 6. Project Settings の設定

Q&A (0)

AR の性能を最大限に引き出すためにプロジェクト設定を変更をします。

1. **Edit** > **Project Settings**とクリックします。

2. Project Settings 画面で、**Player**オプションをクリックします。プレイヤー設定のほとんどは変更されません (**画像 11**)

[Image: image]

3. **Company Name** を別の名前に変更する、またはそのままにします。

4. **Product Name** は、すでに Hello AR World という名前になっているはずですが、そうでない場合は、別の名前に変更することができます。

5. iOS の設定タブ（上の画像の赤丸で囲んだ iOS のアイコン）が表示されていることを確認します。

6. **Other Settings** セクションをクリックします。

7. **Auto Graphics API** チェックボックスがチェックされていることを確認します。

8. **Multithreaded Rendering**チェックボックスをオフにします。

9. 一意な**Bundle Identifier** を入力します。**DefaultCompany**の名前を変更することは良いスタートです (**画像 12**)

- **注意：**iOS へのビルド時に、一意な Bundle Identifier がないというエラーが発生することがあります。必ず一意の Bundle Identifier を入力してください。

[Image: image]

10. **Camera Usage Description** テキストボックスに、「Enable to use AR Foundation」などと入力します。

11. **Target minimum iOS Version** を**11**に変更します。

12. **Architecture** を**ARM64**に変更します****(**画像 13**)

[Image: image]

13. その他の設定はそのままで OK です。

14. Project Settings ウィンドウの左側で、**XR** をクリックします。

15. **Create** ボタンをクリックします (**画像 14**)

[Image: image]

16. **Create** ボタンをクリックすると、すぐに ARKit Settings の保存を促されますので、**Save** ボタンをクリックします。

17. 最後に、要件オプションを required から**Optional**に変更します****(**画像 15**)

[Image: image]ステップを完了としてマーク

## 7. AR オブジェクトの作成

Q&A (0)

AR パッケージを使用して、プロジェクトのシーンでAR 機能のための AR オブジェクトを作成します。

- **注意：**これらのオブジェクトは、App シーンでは表示されません。

1. Hierarchy で、Main Camera を右クリックで削除 (**Main Camera > Delete**) します (**画像 16**)

[Image: image]

2. 次に、AR Session Origin オブジェクトを作成します (**画像 17**)

- **Hierarchy** > **XR** > **AR Session Origin**の順に進み、右クリックする

3. **AR Session**オブジェクトを作成します (**画像 17**)

- **Hierarchy** > **XR** > **AR Session**の順に進み、右クリックする

[Image: image]

4. Hierarchy で、**AR Session Origin** オブジェクトの横にあるドロップダウン矢印をクリックします。

5. **AR Camera** をクリックします****(**画像 18**)

6.  Inspector の下部に Tag セクションがあります。ドロップダウンメニューをクリックし、**Main Camera** を選択します。

[Image: image]ステップを完了としてマーク

## 8. まとめ

Q&A (0)

本チュートリアルでは、AR 開発用に設定された特定のパッケージと設定を持つ新しい Unity プロジェクトをセットアップすることを学びました。次に、デバイスにデプロイするために、Xcode などの IDE を設定する必要があります。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
