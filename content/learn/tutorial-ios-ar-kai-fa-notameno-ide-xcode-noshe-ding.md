[Image: image]

# [iOS] AR 開発のための IDE（Xcode）の設定

Tutorial

Beginner

+10XP

30 mins

0

Unity Technologies

[Image: [iOS] AR 開発のための IDE（Xcode）の設定]Summary

*本チュートリアルでは、モバイル AR 開発のために XCode を設定し、Unity プロジェクトをデプロイする方法を学びます。*

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

本チュートリアルでは、Unity で iOS モバイルアプリケーションを開発するための IDE 環境（XCode）をセットアップし、ビルドをエクスポートします。環境をダウンロードして、IDE で Unity のプロジェクトファイルを開く方法を学びます。最後に、プロジェクトをデバイスにエクスポートして、Camera ビューを確認します。

注意：このチュートリアルを実行するには、Mac が必要です。

ステップを完了としてマーク

## 2. XCode のインストール

Q&A (0)

本セクションでは、XCode をインストールします。注：XCode を使用すると、iOS デバイスへのビルドが可能になります。このガイドでは、macOS Catalina の XCode バージョン 11.6 を使用しています。iOS に公開するには Mac を使用する必要があります。

1. [https://developer.apple.com/xcode/](https://developer.apple.com/xcode/) にアクセスするか、App Store から XCode を開きます。

a. インストール手順に従ってください。

b. 詳しくは、[こちら](https://help.apple.com/xcode/mac/current/)の Apple XCode 公式ガイドをご覧ください。

c. 詳しくはこちらの[動画](https://www.youtube.com/watch?v=N1eY6q0SXcA)をご覧ください。

ステップを完了としてマーク

## 3. iOS デバイスとパソコンの接続

Q&A (0)

デバイスをコンピュータに接続して、プロジェクトを展開します。

- **注意：**以下の手順は、お使いの iOS デバイスの種類によって異なります。

1. iOS デバイスをコンピューターの USB または USB-C ポートに接続します。

a. パソコンで iOS デバイスが自動検出されない場合は、以下のサイトをご覧ください：

i. [If your computer doesn't recognize your iPhone, iPad, or iPod](https://support.apple.com/en-us/HT204095)

ii. [Unable to Sync iPhone or iPad with macOS Catalina? Check these tips](https://appletoolbox.com/unable-to-sync-iphone-or-ipad-with-macos-catalina-check-these-tips/)

ステップを完了としてマーク

## 4. Unity Project Build の保存

Q&A (0)

XCode にインポートするために Unity プロジェクトを保存します。

1. Unity エディターに戻る

2. **File** > **Build Settings** > **Build**の順にクリックする

3. Build の名前を入力。ここでは「HelloARWorld」と入力している。

4. Build をデフォルトの場所へ保存する

5. **Save**をクリックする****(**画像 1**)

[Image: image]ステップを完了としてマーク

## 5. Unity-iPhone.xcodeproj ファイルの実行

Q&A (0)

XCode で Unity で作成したプロジェクトを開きます。

### Unity-iPhone.xcodeproj ファイルの実行

**Unity-iPhone.xcodeproj** ファイルを探してダブルクリックします (**画像 2**)

[Image: image]

- **注意：**ファイルは XCode で開きます

ステップを完了としてマーク

## 6. XCode Developer Settings の設定

Q&A (0)

XCode の設定と開発者アカウントの登録について

1. **Unity-iPhone** をクリック (**画像 3**)

[Image: image]

2. まだお持ちでない方は、XCode で新しいアカウントを追加する必要があるかもしれません。

3. メニューバーで **Xcode > Preferences**と選び Preferences ウィンドウを開き、**Accounts** タブを選択して、左下のプラス (**+**) ボタンをクリックする (**画像 4**)

- **注意：**アカウント設定の詳細については、[こちら](https://learn.unity.com/tutorial/publishing-for-ios#5ecfa875edbc2a00231dbfa4)の Unity チュートリアルをご覧ください。

[Image: image]

4. **Apple ID** を選択し、**Continue** をクリックする

5. クレデンシャル / ログイン情報を入力する

6. **Unity-iPhone** ファイルへ戻る

7. **Signing and Capabilities** をクリックする

8. **automatically manage signing** のチェックボックスにチェックを入れる (**画像 5**)

[Image: image]

9. 次に表示されるウィンドウで、**Enable Automatic**ボタンをクリックする (**画像 6**)

[Image: image]

10. Team の隣にあるドロップダウンメニューをクリックする

11. Team を選択する (**画像 7**)

- **注意：**これは通常、先に追加した Apple ID アカウントの名前です。

[Image: image]ステップを完了としてマーク

## 7. プロジェクトをデバイスへデプロイ

Q&A (0)

ビルドをデバイスにエクスポートし、Camera ビューを確認します。

1. 最後に、**Play** ボタンをクリックして、アプリをあなたのデバイスにビルドする (**画像 8**)

[Image: image]

2. 順調にいけば、以下のようなウィンドウが表示される：(**画像 9**)

[Image: image]

3. **重要：**このウィンドウが表示された場合は、iOS デバイスのロックを解除する (**画像 10**)

[Image: image]

4. **注意：**エラーが表示されなければ、Hello AR World アプリケーションがお使いのデバイスで実行されます。アプリケーションがカメラにアクセスすることを許可するかどうかを、デバイスが尋ねてくる場合があります。**OK**をタップしてください。

5. これで、あなたの環境のビューが表示されます。「Hello AR World!」 (**画像 11**)

[Image: image]ステップを完了としてマーク

## 8. まとめ

Q&A (0)

IDE のダウンロード、開発を可能にするための設定、そしてプロジェクトをデプロイしてカメラビューを確認する方法を学びました。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
