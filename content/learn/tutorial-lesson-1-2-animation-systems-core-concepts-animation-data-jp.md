[Image: image]

# 1.2 コアコンセプト：アニメーションデータ

Tutorial

Beginner

+10XP

15 mins

6

(45)

Unity Technologies

[Image: 1.2 コアコンセプト：アニメーションデータ]Summary

このチュートリアルでは、以下のことを行います：

- Unity で 3D アニメーションシステムの主要なコンセプトを確認する
- Unity エディターで簡単なアニメーションを探して設定する

これが終われば、初心者向け 3D アニメーションコースの残りの部分を修了する準備が整います。

Languages available:

日本語English日本語한국어日本語

## 1. 概要

Q&A (0)

ここで紹介する学習プロジェクトでは、Unity でアニメーションを作成するための 2 つのコアコンセプト、アニメーションデータとアニメーションのブレンディングについて説明します。このチュートリアルでは、まずアニメーションデータから始めます。

両方のコアコンセプトを理解すると、あなたの知識を Unity のすべての異なるアニメーション機能に適用することができ、[**アニメーションシステム ３D 入門**](https://learn.unity.com/course/introduction-to-3d-animation-systems)コースの残りの部分でそれらをより詳細に探求することができるようになります。

ステップを完了としてマーク

## 2. はじめる前に

Q&A (0)

このチュートリアルでは、アニメーションシステム 3D 入門のUnity プロジェクトを使用します。まだダウンロードしていない場合は、先に[**ダウンロード**](https://learn.unity.com/tutorial/1-1-welcome-to-the-course#5f3e641cedbc2a002175fe66)しておいてください。

プロジェクトのダウンロードが完了したら：

**1.** Unity エディターでプロジェクトを開きます。

**2.** Project ウィンドウで、**Assets > 1.2 - Core Concepts Animation Data** の順に選択します。

このチュートリアルに必要なアセットはすべてこのフォルダーにあります。

ステップを完了としてマーク

## 3. アニメーションデータとアニメーションクリップの紹介

Q&A (0)

アニメーションデータはアニメーションクリップと呼ばれるアセットとして保存されます。アニメーションクリップには、ゲームオブジェクトのアニメーションを保存することができます。これは、キャラクターのジャンプや点滅するライトのような比較的単純なものから、ゲーム内のカットシーンアニメーションのようなより複雑なアニメーションまであります。

アニメーションクリップは、Unity のアニメーションシステムの基本的な構成要素です。非常に基本的なアニメーションよりも複雑なものを作るために使用します。

ステップを完了としてマーク

## 4. アニメーションクリップ上のアニメーションデータの 2 つの部分

Q&A (0)

アニメーションクリップに保存されるデータは、値とバインディングの 2 つの部分で構成されています。

#### 値

アニメーションクリップの値は通常、アニメーションカーブで表現されますが、必ずしもそうとは限りません。アニメーションカーブには、アニメーションしているゲームオブジェクトの変化の仕方に関する情報が含まれています。アニメーションカーブは通常、時間の経過とともに変化する float 値 (整数または 10 進数のいずれかの値) です。

#### バインディング

アニメーションクリップのバインディングは、ゲームオブジェクトやコンポーネントの特定のフィールドに値を接続する方法です。バインディングは 2 つの要素で構成されています：

**1.**  Hierarchy からゲームオブジェクトの Transform コンポーネントへのパス

**2.**その Transform コンポーネントから特定のフィールドへのパス

値とバインディングは一対一の関係にあります。つまり、各バインディングには値があり、各値にはバインディングがあります。1 つのアニメーションクリップには、多くのバインディングと値のペアを持つことができます（通常はそうします）。

ステップを完了としてマーク

## 5. アニメーションのサンプルクリップを開く

Q&A (0)

アニメーションクリップの理論を理解したところで、次は Unity でアニメーションクリップがどのように見えるかを見てみましょう。[Animation ウィンドウ](https://docs.unity3d.com/Manual/AnimationEditorGuide.html)でアニメーションクリップを表示したり編集したりすることができます。

アニメーションクリップを開くには：

**1.** トップメニューの **Window > Animation > Animation** の順に進みます。これを選択する際には注意が必要です；Animation ウィンドウは [Animator ウィンドウ](https://docs.unity3d.com/Manual/AnimatorWindow.html)と同じではありません。

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

**2.**  **Animation ウィンドウ**のヘッダーをクリックしてホールドし、Scene ビューウィンドウヘッダの **Asset Store** タブの横にある Animation ウィンドウをドラッグアンドドロップしてドッキングさせます。

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

**3.**  Project ウィンドウで、**Assets > 1.2 - Core Concepts Animation Data** の順に移動し、サークルアニメーションクリップを選択して Animation ウィンドウで開きます。

[Image: image]ステップを完了としてマーク

## 6. アニメーションデータとアニメーションカーブを詳しく見る

Q&A (0)

次のチュートリアルでは、アニメーションデータにいくつかの変更を加え、その変更がアニメーションにどのような影響を与えるかを確認します。その前に、アニメーションクリップに存在するデータを理解する必要があります。このコースでは、すべての例のアニメーションはアニメーションカーブにデータを保持しています。

サークルアニメーションのカーブを見直すために

**1.** **Animation ウィンドウ**の下部にある **Curves**タブを選択して、**Curves モード**に入ります。

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

**2.**  **Ctrl + A** (Windows) または **Cmd + A** (macOS) を押して、すべてのアニメーションのキーフレームを選択します。

アニメーションカーブは、キーフレームの集合体で構成されています。キーフレームは、とりわけ、値と時間のペアです。キーフレームは同じ値を持つことはできますが、同じ時間を持つことはできません。キーフレームの値の時間的な変化がアニメーションカーブを定義します。

**3.  F** キーを押して、Animation ウィンドウの **Curves**セクションでキーフレームを中央に配置します。

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

**4.**  **Position**プロパティの左側の折り返しを選択すると、その **Position.x** と **Position.y**のデータが表示されます。これらがバインディングです。

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

**5.**  バインディングを選択すると、アニメーションウィンドウの右側にある関連するアニメーションカーブが強調表示されます。

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

**Curves モード**については、Animation ウィンドウのチュートリアルで詳しく説明しています。

ステップを完了としてマーク

## 7. アニメーションデータの変化を見てみよう

Q&A (0)

アニメーションが再生されると、そのアニメーションクリップの現在時刻が変わります。任意の時点で、すべてのバインディングの値がチェックされ、それらのバインディングに対応するフィールドに値が設定されています。

例えば、**Circle**アニメーションクリップを考えてみましょう。

時間が **0:40**（1 秒に 40 フレーム）のとき、**Position.y** の値は **3** になります。

[Image: image]

つまり、アニメーションクリップが 0.5 秒再生されている場合、再生されるゲームオブジェクトの **Position.y** の値が **3**になります。

ステップを完了としてマーク

## 8. まとめ

Q&A (0)

このチュートリアルでは、アニメーションデータの基礎を詳しく見てきました。以下について、学習しました：

- アニメーションデータの特性とアニメーションクリップへの保存方法を考える
- アニメーションクリップに保存されているデータを確認する
- アニメーションクリップのデータがアニメーションの結果とどのように関係しているかを特定する

次のチュートリアルでは、Unity のアニメーションシステムを使用するための 2 つ目のコアコンセプトであるアニメーションブレンディングについて学びながら作成していきます。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
