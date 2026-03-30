[Image: image]

# BIM 表示のカスタマイズ

Tutorial

intermediate

+10XP

20 mins

0

Unity Technologies

[Image: BIM 表示のカスタマイズ]Summary

本チュートリアルでは、Reflect Viewer のフィルタリングシステムをカスタマイズする方法について説明します。具体的には、システムの起動時に適用されるマテリアルを、フィルタリングシステムがどのように管理するかを見ていきます。フィルタリングシステムでは、シーン内で要素が選択されたときに適用されるハイライトマテリアルと、シーン内で選択されていないオブジェクトに適用される透明マテリアルの 2つのマテリアルを使用しています。

Resources

- [Customizing_BIM_Display_Complete.zip](https://unity-connect-prd.storage.googleapis.com/20200512/768c1e43-ec9a-4ed9-ad1f-af163069c677/Customizing_BIM_Display_Complete.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954441527)

Languages available:

日本語English日本語日本語

## 1. Highlighting System を試す

Q&A (0)

通常、Reflect Viewer の Highlighting System が起動し、要素が選択されると、選択されたオブジェクトがハイライトされ、プロジェクトの他の要素は透明になります (**画像 01**)。これを実現するために、Reflect Viewer では、選択されていないすべてのオブジェクトに透明マテリアル (**1**) を割り当て、選択されたオブジェクト (**2**) にハイライトマテリアルを割り当てます。

[Image: image]

Highlighting System で使用されるマテリアルをカスタマイズすることができます。

**1.**フィルターハイライトに使用されているマテリアルは、アセットの Materials フォルダーに格納されています。使用される具体的なマテリアルとしては、ハイライトされたオブジェクトの「Outline」 (**01**) と、ハイライトされていない残りの要素の「Transparent」 (**02**) です。

[Image: image]

**2.** 「Outline」マテリアルを選択し、Inspector パネルで、色を任意の色相に変更します (**画像 03**)。

[Image: image]

**3.** Viewer を起動し、Filter リストの任意の項目を選択します。新しい色が適用されていることが確認できます (**画像 04**)。

[Image: image]ステップを完了としてマーク

## 2. 次のステップ

Q&A (0)

本チュートリアルでは、Reflect Viewer のフィルタリングオプションを使用する際に、マテリアルを変更する方法を紹介しました。このプロセスを理解することで、プロジェクトをさらにカスタマイズしたり、Reflect Viewer のさまざまな部分がどのように連携しているかを知ることができます。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
