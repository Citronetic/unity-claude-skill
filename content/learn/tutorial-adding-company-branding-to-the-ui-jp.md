[Image: image]

# UI に企業ブランディングを加える

Tutorial

intermediate

+10XP

15 mins

0

Unity Technologies

[Image: UI に企業ブランディングを加える]Summary

本チュートリアルでは、Reflect Viewer のユーザーインターフェースに企業のブランディングを追加する様々な方法を紹介します。

Resources

- [AddingCompanyBranding_Completed.zip](https://unity-connect-prd.storage.googleapis.com/20200505/2d231339-75c6-4c1a-80b5-317c69bae13e/AddingCompanyBranding_Completed.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950737115)
- [AddingCompanyBranding_Assets.zip](https://unity-connect-prd.storage.googleapis.com/20200505/cfe47b29-e203-45bc-ba13-e519eafdc401/AddingCompanyBranding_Assets.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950737115)

Languages available:

日本語English日本語日本語

## 1. はじめに

Q&A (0)

本チュートリアルでは、Reflect Viewer のユーザーインターフェースに企業のブランディングを追加する様々な方法を紹介します。

このチュートリアルで必要なものは：

- Github からダウンロードした Reflect Viewer プロジェクト [GitHub - Unity-Technologies/com.unity.reflect.viewer: Unity Reflect Viewer](https://github.com/Unity-Technologies/com.unity.reflect.viewer)
- Unity エディターの Pro ライセンス
- アセットの zip ファイル "AddingCompanyBranding_Assets"

ステップを完了としてマーク

## 2. シーンの設定

Q&A (0)

本チュートリアルでは、ユーザーインターフェースに会社のブランディングを加えます。これにより、クライアント向けに Viewer をカスタマイズして、より個性的なものにすることができます。通常、ブランディングを追加する場所は、スプラッシュ画面と一般的なユーザーインターフェースの 2 つです。このチュートリアルでは、一般的なユーザーインターフェースに会社のロゴを追加します。

**1.**まず始めに、新しいアセットを保存する場所が必要です。Reflect プロジェクトを開き、Reflect シーンを選択します。

**2.**  Assets フォルダー内に新規フォルダーを作成し、名前を「Images」とします (**画像 01**)。

[Image: image]

**3.** このチュートリアルのページの一番上近くの「Materials」の下にある「AddingCompanyBranding_Assets.zip」ファイルをダウンロードして解凍します。シーンに追加したいロゴ画像を Images フォルダーにドラッグします。自作の画像でも、チュートリアルの演習ファイルで提供されている画像でも構いません (**画像 02**)。

[Image: image]

**4.** この時点で、画像をキャンバス上で使えるオブジェクトに変更する必要があるので、スプライトに変更します。画像を選択して、Properties Inspector で Texture タイプを **Sprite (2D と IU)** に変更します****(**画像 03**)。

[Image: image]

**5.** 次のステップでは、Reflect Viewer プレハブで UI 要素を作成します。Viewer を起動したときにロゴが表示されるタイミングが決まるので、どこに配置するかは重要です。

ロゴを Canvas ゲームオブジェクトの子として追加すると、プロジェクトの実行時にすぐに表示されるようになります。つまり、スプラッシュページにもロゴが表示されます。ただし、このチュートリアルでは、ロゴはスプラッシュページの後、ユーザーがログイン画面に到達したときにのみ表示されるようにします。

**6.**最も簡単な方法は、プロジェクトで既に作成されている UI Main オブジェクトの子 UI 要素としてロゴを追加することです (**画像 04**)。

[Image: image]

**7.** UI Main ゲームオブジェクトを選択し、右クリックし **UI > Image**と選択します (**画像 05**)。

[Image: image]

**8.** 新しく作成した Image オブジェクトを選択し、Inspector ウィンドウで名前を「Logo」に変更します。ソースには、先ほど作成したスプライトを選択します (**画像 06**)。

[Image: image]

**9.** 引き続き、Properties Inspector で **Preserve Aspect**ボックスを選択します (**画像 07**)。

[Image: image]

**10.** シーンでは、新しい Logo UI 要素を右上に移動し、必要に応じてスケールとアンカーを設定します (**画像 08**)。

[Image: image]ステップを完了としてマーク

## 3. 次のステップ

Q&A (0)

このチュートリアルでは、Reflect Viewer をパーソナライズしてカスタマイズする最も簡単な方法を説明しました。このプロセスを使えば、クライアントのブランドに合ったビューアーをすぐに作ることができます。次に、Reflect Viewer のプレハブの他の UI 要素を見ていきましょう。基本的な構造を理解すれば、ビューアーをさらにカスタマイズすることができるでしょう。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
