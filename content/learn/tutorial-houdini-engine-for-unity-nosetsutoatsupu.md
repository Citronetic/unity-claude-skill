[Image: image]

# Houdini Engine for Unity のセットアップ

Tutorial

Beginner

+10XP

15 mins

0

Unity Technologies

[Image: Houdini Engine for Unity のセットアップ]Summary

Houdini Engine for Unity プラグインは、アーティストやスタジオが Houdini で作成したプロシージャルアセットをリアルタイム 3D プラットフォームである Unity に広く展開し、ゲームや XR 開発、バーチャルプロダクション、デザインビジュアライゼーションに使用することを可能にします。

このチュートリアルを終える頃には、以下のことができるようになっています：

- Houdini Engine のインストール
- Unity での Houdini Digital Assets (HDA) の使用
- Houdini と Unity での Session Sync の設定と使用

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

Houdini Engine for Unity プラグインは、アーティストやスタジオが Houdini で作成したプロシージャルアセットをリアルタイム 3D プラットフォームである Unity に広くデプロイし、ゲームや XR 開発、バーチャルプロダクション、デザインビジュアライゼーションに使用することを可能にします。

このチュートリアルを終える頃には、以下のことができるようになっています：

- Houdini Engine のインストール
- Unity で Houdini Digital  (HDAs) アセットを使う
- Houdini と Unity での Session Sync の設定と使用

ステップを完了としてマーク

## 2. Houdini Engine for Unity 入門

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 日本語

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Houdini では、ノードのネットワークを簡単に Houdini Digital Assets (HDA) にまとめ、他のアーティストと共有することができます。Houdini Engine では、これらのアセットをUnity のゲームエディターにロードして、アーティストがプロシージャルなコントロールを行うことができます。

その結果は、Unity でさらに操作することができます。アセット上でパラメーターが変更されるたびに、Houdini Engine が呼び出され、ノードのネットワークを「調理」し、その結果を Unity に公開します。これにより、Houdini Digital アセットを Unity ゲーム開発パイプラインに深く統合することができます。ゲームコンテンツは、ゲームがパブリッシュされた時点でベイクされます。

本チュートリアルでは、Houdini Engine for Unity バージョン 2 のプラグインをインストールします。

ステップを完了としてマーク

## 3. Houdini Engine プラグインのインストール

Q&A (0)

次のビデオでは、Houdini Engine for Unity のセットアップをご紹介します。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 日本語

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

お好みで、このステップと次のステップの書面による指示に従うこともできます。

まず、プラグインをダウンロードして設定する必要があります。

**1.**  Unity プラグイン用の [Houdini Engine インストーラーをダウンロード](https://www.sidefx.com/download/)します。

プラグインは Unity を Houdini Engine に接続しますが、結果を水面下で調理するには Houdini のフルインストールが必要です。Houdini Core、Houdini FX、または Houdini Engine のいずれかのライセンスを使用してエンジンを実行できます。Houdini Indie および無償の Houdini Engine Indie は、限られた商用アセットファイルで動作します。

**2.**  インストーラーを実行し、Houdini Engine のインストール画面で「Houdini Engine for Unity」を選択します。

**3.** Houdini のインストールフォルダーにプラグインパッケージがあるかどうかを確認します（以下にアクセスしてください： <Houdini Installation> /engine/unity/HoudiniEngineUnity.unitypackage）。

ステップを完了としてマーク

## 4. プラグインをプロジェクトへインポート

Q&A (0)

プラグインを Unity プロジェクトにインポートするには：

**1.**  Unity プロジェクトが入っているフォルダーに移動し、Assets/Plugins に進みます。HoudiniEngineUnity フォルダーが存在する場合は、その内容をすべて削除してください。

**2.**  Unity エディターの to メニューで、**Assets > Import Package > Custom Package**を選択します。

**3.** ファイルブラウザーで、<Houdini Installation> /engine/unity/ に移動し、HoudiniEngineUnity.unitypackage を選択します。

**4.** プレビューウィンドウですべてのファイルが選択されている（デフォルトでは選択されているはず）ことを確認し、**Import**を選択します。Unity はプラグインファイルをAssets/Plugins/HoudiniEngineUnity にインストールします。

**5.**  プラグインが正常にインストールされると、Unity のメニューにマウスを移動させると、Houdini Engine Unity のメニューが上部に表示されるようになります。

ステップを完了としてマーク

## 5. Houdini Engine のセッション同期

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 日本語

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

ステップを完了としてマーク

## 6. まとめ

Q&A (0)

このチュートリアルでは、以下のことを行いました：

- Houdini Engine for Unity のインストール
- Session Sync を使って Houdini と Unity を接続

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
