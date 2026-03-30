[Image: image]

# Android へのパブリッシュ方法

Tutorial

Beginner

+10XP

10 mins

0

Unity Technologies

[Image: Android へのパブリッシュ方法]Summary

Android 向けのパブリッシングは、Windows、Mac OS、Linux 向けのビルドを公開するのとよく似ています。場合によっては、まったく変更が必要ないこともあります。例えば、指のジェスチャーでゲーム要素を操作するモバイルゲームの場合、デスクトップ版のゲームと同じコードで実現できます。モバイルのタッチ入力はこのワークフローの範囲外なので、ゲームが完成していて配布できる状態であることを前提としています。

Languages available:

日本語English日本語日本語

## 1. Android へのパブリッシュ方法

Q&A (0)

*このチュートリアルは、Unity 2019 LTS を使用して検証されています。*

Android 向けのパブリッシングは、Windows、Mac OS、Linux 向けのビルドを公開するのとよく似ています。場合によっては、まったく変更が必要ないこともあります。例えば、指のジェスチャーを使ってゲーム要素を操作するモバイルゲームの場合、デスクトップ版のゲームと同じコードで実現できます。

ステップを完了としてマーク

## 2. Unity の準備

Q&A (0)

Unity が Android 用にビルドする前に、Unity Hub から Android Build Support モジュールをインストールする必要があります。

1. Unity Hub では、現在のバージョン（または新規インストール）のいずれかを選択し、**Add**ボタンを選択して、追加モジュールをインストールします (**画像 01**)。

[Image: image]

2. Android Build Support を選択し、Android SDK & NDK Tools と OpenJDK の両方を含める場合はチェックマークを入れます (**画像 02**)。インストール後、再起動が必要になる場合があります。

[Image: image]ステップを完了としてマーク

## 3. プロジェクトの準備

Q&A (0)

今回は、Google Play ストアへの公開に向けてプロジェクトを準備するための基本的な手順をご紹介します。Android のバイナリは、最終的なビルドである .exe ファイル（Windows）や .appファイル（macOS）にエクスポートするのではなく、Android App Bundle と呼ばれるファイルタイプを使用し、拡張子は .aab ファイルとなります。Unity が Android 向けのアプリケーションをビルドする際、出力パッケージは .aab ファイルへエクスポートされ、Google Play ストア環境へのアップロードやホスティングが容易になります。

技術的なステップ：

1. Unity エディターの File ドロップダウンから **Build Settings**を選択します。Platforms ウィンドウで、**Android** を選択し、Android がまだ選択されていない場合は、**Switch Platform** ボタンを選択します (**画像 03**)。

[Image: image]

2. Build Settings ウィンドウの左下にある **Player Settings**ボタンを選択します。

3. Inspector の上部には、会社名と製品名を記入します。最終的な配信のために、デフォルトの Unity ランチャーのアイコンを置き換えるために、ゲーム用のアイコンを作成することをお勧めします。ゲームの性質によっては、デフォルトのマウスカーソルを上書きしたい場合もあります。デフォルトでは、カーソルのホットスポットは、カーソル画像の左上隅の位置 (0,0) にあります (**画像 04**)。

[Image: image]

4. Project Settings ウィンドウの下半分で、**Resolution and Presentation**を選択します (**画像 05**)。

[Image: image]

5. ゲームのデフォルトと許可したい画面の方向を設定します (**画像 06**)。ほとんどの場合、「Default Orientation」は Auto Rotation に設定するのが最適です。ほとんどのアプリやゲームは、横向きか縦向きのどちらかで動作するように設計されており、両方で動作することはありません。

[Image: image]

6. このセクションの上部にある **Resolution and Presentation** を選択して閉じ、**Other Settings**を選択します (**画像 07**)。

[Image: image]

7. Other Settings で、ここではモバイルプロジェクトの Package Name のみを設定することにします。Package Name は、Application ID またはバンドル識別子とも呼ばれます。バンドル識別子は一意でなければならず、ゲームやアプリが公開された後に別のプロジェクトに再割り当てすることはできません。プロジェクトに名前をつけてください (**番号 08**)。

[Image: image]

8. **Other Settings**セクションを選択して、このセクションを閉じます。

9. 次に、Android アプリをアプリストアで配布する前に、一意キーで署名する必要があります。**Publishing Settings** を選択して、そのセクションを開きます (**画像 09**)。

[Image: image]

10. Keystore Manager とは、まさにその名の通りのものです。1 つまたは複数のアプリケーションのキーを作成し、整理します。事前にキーストアを作成しており、カスタムキーストアを使用してアプリケーションを公開する場合は、**Project Keystore** オプションの**Custom Keystore**チェックボックスを有効にします。その後、既存の Key location フォルダーを参照するよう促されます。 それ以外の場合は、**Keystore Manager**ボタンを選択して、新しい Keystore を作成します (**画像 09**)。

11. Keystore Manager ウィンドウで、**Keystore**ドロップダウンを選択し、**Create New > Anywhere** (または **In Dedicated Location**) を選択し (**画像 10**)、新しいフォルダの場所に移動します。Keystore は、プロジェクトとは別に、安全で見つけやすい場所に置いておくのがよいでしょう。既存の Keystore の場所を使いたい場合は、ドロップダウンから選択 (Keystore > Select Existing) します。新しい Keystore を作成する場合は、名前を付けてから **Save** を選択します。それ以外の場合は、既存の Keystore を選択してから**Open**を選択します。セキュリティ上の理由から、パスワードは Keystore に保存されません。パスワードを紛失した場合は、新しいバンドル識別子で新しいアプリケーションをパブリッシュする必要があります。

[Image: image]

12. 次に、Android アプリケーション用の Keystore にキーを作成します。Keystore Manager ウィンドウで、必要な情報フィールドに入力し、パスワードを確認して、**Add Key**ボタンを選択します (**画像 11**)。Keystore とパスワードは、必ず安全な場所に保管してください。

[Image: image]

13. **Yes**ボタンを押して確認すると、プロジェクトの Keystore Manager の設定に新しいキーが割り当てられます (**画像 12**)。

[Image: image]

14. Project Settings ウィンドウの Publishing Settings セクションが更新され、プロジェクトの新しい Keystore への変更が反映されます (**画像 13**)。

[Image: image]

15. これで、配信用の .apk ファイルを作成する準備が整いました。Project Settings ウィンドウを閉じても構いません。 Unity エディターの FIle ドロップダウンから**Build Settings**を選択します。Platforms で **Android** が選択されていなければ、**Build**ボタンをクリックします (**画像 14**)。

[Image: image]

16. .aab ファイルの名前と保存場所を決めて、**Save** を選択します。

ステップを完了としてマーク

## 4. 次のステップ

Q&A (0)

これで、Android アプリケーションを配布する準備が整いました。.aab ファイルを Google Play Store アプリマーケットプレイスにアップロードしたり、ストアページを設定することは、このワークフローの範囲外です。これらのプロセスについては、各サイトのヘルプリソースを参照してください。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
