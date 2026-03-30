[Image: image]

# アプリのデバッグ

Exercise

Beginner

+60XP

30 mins

2

Unity Technologies

[Image: アプリのデバッグ]Summary

この演習では、提供されたプロジェクトを意図したとおりに実行できるようにデバッグ実行することに取り組んでいただきます。

Resources

- [ErrorProject.zip](https://unity-connect-prd.storage.googleapis.com/20201007/1ee6233e-fcf6-4bc2-b1e3-806507e2e38b/ErrorProject.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954492799)

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. 概要

Q&A (0)

プログラマーとして、コードのデバッグに多くの時間を費やすことになります。定期的にスクリプトのデバッグを行うことで、コードの理解度を高め、開発中の問題を予測することができるようになります。このチャレンジでは、既存のプロジェクトをデバッグし、意図したとおりに動作させることが課題です。

ステップを完了としてマーク

## 2. 提供されたアセットをダウンロードし、Unity の新規プロジェクトへインポート

Q&A (0)

この課題を始めるには、まず課題のアセットをダウンロードし、Unity の新規プロジェクトにインポートする必要があります：

**1.**  [**ErrorProject.zip**](https://connect-prd-cdn.unity.com/20201007/1ee6233e-fcf6-4bc2-b1e3-806507e2e38b/ErrorProject.zip?_ga=2.240946753.37272804.1639415162-1635354840.1616306530) をダウンロードします。

**2.** フォルダーの中身を解凍するには、フォルダーを右クリックして、**Extract All**（macOS の場合は、zip 形式のフォルダーをダブルクリックする）を選択します。中に ErrorProject.unitypackage が入っています。

**注：**圧縮したままフォルダーの中身を見ることは可能ですが、データは圧縮されたままです。**Error Project**フォルダーの中身を zip で圧縮したままインポートしようとすると、Unity でエラーメッセージが表示されます。次のステップに進む前に、フォルダーが解凍されていることを確認してください。

**3.**「[Create a new Unity project](https://learn.unity.com/tutorial/project-setup-processes#60f6aedeedbc2a7e96802196)」ページを参照し 3D テンプレートを使用してプロジェクトを作成 - サポートされているバージョンの Unity (2018.4 LTS, 2019.4 LTS, または 2020.3 LTS) のいずれかを使用することを忘れないようにしましょう。

**4.** **ErrorProject.unitypackage** を新しい 3D テンプレートプロジェクトに[インポート](https://learn.unity.com/tutorial/project-setup-processes#60ed7a91edbc2a002096b762)します。

ステップを完了としてマーク

## 3. プロジェクトの見直し

Q&A (0)

プロジェクトのデバッグを始める前に、数分かけて、このプロジェクトについてできる限りのことを学びましょう。.unitypackage をインポートするとすぐに、2 つのエラーメッセージが Console ウィンドウに表示されるます。これらのエラーによりシーンのテストができなくなりますので、含まれるシーンの Hierarchy の内容や TextDisplay オブジェクトにアタッチされたスクリプトから、プロジェクトの動作を判断するようにしてください。

ステップを完了としてマーク

## 4. アプリのデバッグ

Q&A (0)

アプリが何をしようとしているのか理解できたと確信したら、必要に応じてシーンとスクリプトに変更を加え、コードがコンパイルされ、シーンをテストできるようにします。Game ビューに表示される内容から、アプリケーションが完全に固定されているかどうかがわかるはずです。

ステップを完了としてマーク

## 5. デバッグ実行済みアプリの WebGL ビルドの作成

Q&A (0)

アプリが完全に機能するようになったら、プロジェクトの WebGL ビルドを作成し、Unity Play にアップロードしたら、下記に提出したものをリンクして、この課題を完了します。そのためには：

**1.**  シーンを保存します。

**2.**お使いの Unity バージョンに WebGL がインストールされていることを確認します。インストールされているかどうかわからない、または追加する方法がわからない場合は「[Create and publish WebGL Builds](https://learn.unity.com/tutorial/creating-and-publishing-webgl-builds#601abb0cedbc2a0027bad0e3)」チュートリアルのステップ 2 を参照してください。

**3.**  WebGL Publisher パッケージをインストールします。このパッケージを使用すると、プロジェクトを簡単に Unity Play で公開することができます。パッケージがあるかどうかわからない場合や、追加方法がわからない場合は、上記のステップにリンクされているチュートリアルを参照してください。

**4.**  プロジェクトの WebGL ビルドを作成します。お使いのコンピュータによっては、数分かかる場合があります。ビルドの作成にヘルプが必要な場合は「[Create and publish WebGL builds](https://learn.unity.com/tutorial/creating-and-publishing-webgl-builds#601abbf4edbc2a00203665e6)」のステップ 4 を参照してください。

**5.**  WebGL ビルドを Unity Play でパブリッシュします。Unity Play でのパブリッシュに問題がある場合は「[Create and publish WebGL builds](https://learn.unity.com/tutorial/creating-and-publishing-webgl-builds#601abce4edbc2a00214a1278)」のステップ 6 を参照してください。

**6.**  Unity Play のリンクをコピーして、下記に貼り付けてください。

ステップを完了としてマーク

## 6. 成功基準

Q&A (0)

以下の条件をクリアしていれば、成功したと言えるでしょう：

- エディターコンソールにエラーや警告がない
- エディターで Play を押すと、アクティブなシーンを確認できる
- プロジェクトの WebGL ビルドの作成
- WebGL ビルドの Unity Play へのアップロード
- Unity Play のリンクをコピーして投稿

ステップを完了としてマーク

## 7. 次のステップ

Q&A (0)

Junior Programmer の学習パスウェイの 2nd ミッションを完了、おめでとうございます。最後の小テストを終了すると、Unity Certified User: Programmer 認定試験の受験に必要なスキルがすべて身に付きます。試験の詳細は、[認定資格](https://unity.com/products/unity-certifications/user-programmer?_ga=2.132367820.37272804.1639415162-1635354840.1616306530)のページでご確認いただけます。

ステップを完了としてマーク

## 8. 提出について

Q&A (0)

Unity Play のリンクを下記に貼り付けてください。

#### 提出するにはログインしてください

ログイン

## Complete this Tutorial

すべてのステップを完了としてマーク

Submission Gallery

[[Image: Error fixed]

Error fixed

I fixed errors

AActionStudioUnity4110](https://learn.unity.com/submission/676f5057edbc2a278966028d)[[Image: Debug the app]

Debug the app

unityLearn

YYuniNoKoutyaUnitea3100](https://learn.unity.com/submission/67360c82edbc2a09562bedc2)[[Image: Debug the App - WebGL Builds]

Debug the App - WebGL Builds

My latest microgame.

YYuuWoods9160](https://learn.unity.com/submission/662f8ca7edbc2a48c2de9716)[[Image: WebGL Builds - Erros]

WebGL Builds - Erros

Bug

FPFABIO PEREIRA DE SOUZA16330](https://learn.unity.com/submission/638b9791edbc2a06ccff16c4)Load More
