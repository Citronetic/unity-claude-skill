[Image: image]

# URP マテリアルの作成 - 2019.3

Tutorial

Beginner

+10XP

10 mins

13

Unity Technologies

[Image: URP マテリアルの作成 - 2019.3]Summary

*ユニバーサルレンダーパイプライン* (URP)  は、モバイル機器やローエンドのコンソール、PC など、従来はパフォーマンスに制約のあったプラットフォームでのリアルタイムパフォーマンスを最適化することを目的としています。URP は、パイプラインのライティングとシェーディングのセクションでいくつかのトレードオフを行うことで実現しています。

広範囲のモバイルデバイスやバーチャルリアリティをターゲットにしたい場合や、リアルタイムライティングの必要性が低いプロジェクトの場合は、URP の使用が非常に有益です。

本チュートリアルでは、既存のプロジェクトやマテリアルを作成し、URP にアップグレードする方法を学びます。

Languages available:

日本語English日本語日本語

## 1. URP マテリアルの作成

Q&A (0)

***ユニバーサルレンダーパイプライン* (*URP***、***Universal Render Pipeline)***の詳細は[***こちら***](https://blogs.unity3d.com/2020/02/10/achieve-beautiful-scalable-and-performant-graphics-with-the-universal-render-pipeline/?_ga=2.212076628.1183163958.1581347250-1700782607.1572513113&ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954391772)からご覧いただけます。

*Unity 2018.3 以前のバージョンをお使いの方は[こちら](https://learn.unity.com/tutorial/creating-lwrp-materials-2018)をご覧ください。Unity 2018.4 をお使いの方は[こちら](https://learn.unity.com/tutorial/creating-lwrp-materials-2018-4)をご覧ください。Unity 2019.1 をお使いの方は[こちら](https://learn.unity.com/tutorial/creating-lwrp-materials-2019-1)をご覧ください。Unity 2019.2 をお使いの方は[こちら](https://learn.unity.com/tutorial/creating-lwrp-materials-2019-2)をご覧ください。*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Unity 2018.1 で導入された*ユニバーサルレンダーパイプライン* (URP) は、モバイルデバイスやローエンドのコンソールやPCなど、従来はパフォーマンスに制約があったプラットフォームでのリアルタイムパフォーマンスを最適化することを目的としています。これは、パイプラインのライティングとシェーディングのセクションでいくつかのトレードオフを行うことで実現しています。

広範囲のモバイルデバイスやバーチャルリアリティをターゲットにしたい場合や、リアルタイムライティングの必要性が低いプロジェクトの場合は、URP の使用が非常に有益です。

ステップを完了としてマーク

## 2. URP を使った新規プロジェクトの作成

Q&A (0)

URP を使って新しいプロジェクトを開始するには：

- Unity Hub を開き、New Project ボタンをクリックします。
- Template セクションで、Universal RP テンプレートを選択します**(**画像 01**)。

[Image: image]

- Create Project ボタンをクリックします。

この作業が完了すると、URP を使った新規 Unity プロジェクトの準備が整います。

ステップを完了としてマーク

## 3. URP 使用に既存のプロジェクトをアップグレード

Q&A (0)

既存のプロジェクトをアップグレードするには、まず Unity のパッケージマネージャを使って URP をダウンロードします。

- **Window**> **Package Manager** と進んで Package Manager を開きます (**画像 02**)。

[Image: image]

- 左側の **All**ボタンをクリックします。
- Universal RP を探して選択します。
- **Install**をクリックします。

パッケージマネージャーからパッケージがインストールされたら、Scriptable Render Pipeline Graphics の設定フィールドに URP Asset を追加する必要があります。

- Project ビューで右クリックし、**Create > Rendering > Universal Render Pipeline > Pipeline Asset (Forward Renderer)** の順に選択します (**画像 03**)。

[Image: image]

- **Edit > Project Settings**と選択して、Project 設定ウィンドウを開きます。
- 新規ウィンドウの左側にある Player 設定を選択します。
- Player 設定で Color Space を**Linear**に設定します (**画像 04**)。

[Image: image]

- Project Settings ウィンドウの左側にある**Graphics** を選択します。
- Graphics の Inspector で、**UniversalRenderPipelineAsset**を Scriptable Render Pipeline フィールドにドラッグアンドドロップします (**画像 05**)。

[Image: image]

これで、既存のプロジェクトで URP が使用できるようになりました。

ステップを完了としてマーク

## 4. URP マテリアルの作成

Q&A (0)

URP は独自のレンダリングプロセスを持っており、それを考慮して書かれたシェーダーが必要となります。Unity では、新しいカテゴリーに配置するスタンダードシェーダーのセットを開発しました。

- プロジェクト内で右クリックし、**Create > Material** と選択します。
- プロジェクトの新規マテリアルのデフォルトのシェーダーは、Universal Render Pipeline/Lit です。
- Inspector ウィンドウの New Material の下にある Shader ドロップダウンをクリックします。
- Universal Render Pipeline に移動して、利用可能なシェーダーのサブメニューを展開します (**画像 06**)。

[Image: image]

いくつかのシェーダーが用意されていることに気づくでしょう。

- **2D：**2D プロジェクトの開発には、このシェーダーを使用します。
- **Autodesk Interactive：**シェーダーが最適化され、オートデスクのアプリケーションで調整を行ったときにシェーダーがライブで更新されるようになり、その逆も同様です。
- **Nature：**Speed Trees に特化したシェーダーが含まれています。
- **Particles：**パーティクル用の軽量シェーダーが 4つ入っています。
- **Terrain：**Unity の Stock Terrain シェーダーと同じです。
- **Baked Lit：**スタイリッシュなゲームや、ライトマップやライトプローブを用いてベイクしたライティングのみを必要とするアプリには、このシェーダを使用します。このシェーダーは Physically Based Shading を使用しておらず、リアルタイムライティングも行わないため、リアルタイムに関連するシェーダーのキーワードやバリアントはすべてシェーダーコードから取り除かれており、計算が速くなっています。
- **Lit：**Lit シェーダーは、石、樹木、ガラス、プラスチック、金属などの実在する表面をフォトリアリスティックなクオリティでレンダリングすることができます。光のレベルや反射の様子がリアルに表現され、明るい日差しや暗い洞窟など、さまざまなライティング条件で適切に反応します。このシェーダーは、URP の中でも最も計算量の多いシェーディングモデルを使用しています。
- **Simple Lit：**フォトリアリズムよりもパフォーマンスが重要な場合に、このシェーダを使用します。このシェーダーは、ライティングに簡単な近似値を使用しています。
- **Unlit：**グローバルイルミネーションをサンプリングするオプションを備えた Unlit シェーダーです。Unity の Stock Unlit シェーダーに代わるものです。

Unity のすべての Stock Unlit シェーダーはユニバーサルパイプラインで動作します。つまり、従来のパーティクル、UI、スカイボックス、Splite シェーダーをパイプラインで使用することができ、追加の設定は必要ありません。また、URP がアクティブなレンダリングに設定されている場合、すべてのゲームオブジェクトは正しいシェーダーで作成されます。パイプラインはデフォルトのマテリアルを上書きします。

ステップを完了としてマーク

## 5. マテリアルのアップグレード

Q&A (0)

Stock Lit シェーダーを Universal シェーダーにアップグレードします：

- ドロップダウンの Edit で、**Rendering Pipeline > Universal Render Pipeline > Upgrade Project Materials to UniversalRP Materials** か、**Upgrade Selected Materials to UniversalRP Materials**を選択します。
- アップグレードによってプロジェクト内のマテリアルが上書きされることを警告するウィンドウが表示されます。アップグレードを行う前にバックアップを取っていることを確認し、**Proceed**をクリックします (**画像 07**)。

[Image: image]

このプロセスでは、プロジェクト内のすべてのマテリアルをアップグレードすることも、選択したマテリアルのみをアップグレードすることもできます。

ステップを完了としてマーク

## 6. まとめ

Q&A (0)

これで、既存のプロジェクトやマテリアルを作成したり、URP にアップグレードする方法について、理解が深まったと思います。このパイプラインは、パフォーマンスと使いやすさに重点を置いており、開発者はパフォーマンスに制約のあるプラットフォーム向けにプロジェクトを作成することができます。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
