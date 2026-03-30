[Image: image]

# 1.3 コアコンセプト：アニメーションブレンディング

Tutorial

Beginner

+10XP

40 mins

3

(44)

Unity Technologies

[Image: 1.3 コアコンセプト：アニメーションブレンディング]Summary

本チュートリアルでは、以下のことを行います：

- Unity の 3D アニメーションシステムの主要なコンセプトを詳しく見ます。
- Unity エディターで簡単なアニメーションを探して設定します。

これを終了すれば、初心者向け 3D アニメーションコースの残りの部分を修了する準備が整います。

Languages available:

日本語English日本語한국어日本語

## 1. 概要

Q&A (0)

このチュートリアルでは、Unity でアニメーションを作成するための 2 つのコアコンセプトのうち、2 つ目のコンセプトである「アニメーションのブレンディング」について説明します。この 2 つのコアコンセプトを理解すると、その知識を Unity のさまざまなアニメーション機能のすべてに応用できるようになります。

ステップを完了としてマーク

## 2. はじめる前に

Q&A (0)

このチュートリアルでは、アニメーションシステム 3D 入門の Unity プロジェクトを使用します。まだダウンロードしていない場合は、先に[**ダウンロード**](https://learn.unity.com/tutorial/1-1-welcome-to-the-course#5f3e641cedbc2a002175fe66)しておいてください。

プロジェクトのダウンロードが完了したら：

**1.** Unity エディターでプロジェクトを開きます。

**2.** Project ウィンドウで、**Assets** > **1.3 - Core Concepts Animation Blending**の順に進みます。

このチュートリアルに必要なアセットはすべてこのフォルダーにあります。

ステップを完了としてマーク

## 3. アニメーションブレンディングの紹介

Q&A (0)

**「[1.2 アニメーションシステムのコアコンセプト：アニメーションデータ](https://learn.unity.com/tutorial/lesson-1-2-animation-systems-core-concepts-animation-data?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5eba9fffedbc2a0020b332d7)」**では、アニメーションデータの 2 つの部分（バインディングと値）が 1 つのアニメーションクリップに格納されていることを学びました。複数のアニメーションクリップを同時に再生すると、Unity はそれらをブレンドします。次に、ブレンドの結果がバインディングに適用されます。

アニメーションクリップをブレンドするには、各アニメーションには相対的な重みがあります。これらの重みは、個々のアニメーションクリップが最終的なアニメーションにどの程度の影響を与えるかを計算するために使用されます。この計算には様々なアルゴリズムを使用することができますが、最も一般的なのは**加重平均**です。このアルゴリズムでは、それぞれの値に重みをかけ、それらをすべて足し合わせます。

ステップを完了としてマーク

## 4. サンプルアニメーションの重みの調整

Q&A (0)

アニメーションのブレンディングに重み付けがどのように適用されるかを理解するために、サンプルアニメーションの重みを調整してみましょう。

#### CoreConcepts シーンを開く

まず、CoreConcepts Scene を開く必要があります。これを行うには：

**1.**Project ウィンドウで、**Assets**>**1.3 - Core Concepts Animation Blending**>**Scenes**の順に進みます。

**2.  CoreConcepts**シーンをダブルクリックしてロードします。

このシーンでは、Cube ゲームオブジェクトに 2 つのアニメーションクリップが同時に動くサンプルアニメーションがあります。また、これら 2 つのアニメーションクリップの重みを調整するスクリプトもあります。

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

#### アニメーションクリップの重みの調整

2 つのアニメーションクリップの重みを調整するには：

**1.  Cube** ゲームオブジェクトをクリックして選択します。

[Image: image]

**2.**Inspector で、**Blending Example**のコンポーネントを見つけます。現在、**Circle**（円形）アニメーションの重みは**1**に設定されています。**Square**（四角形）アニメーションの重みは**0**に設定されています。

[Image: image]

つまり、シーンを再生すると、Game ビューではキューブが円を描くように移動するということです。

**3.  再生**ボタンを押すと再生モードになり、Game ビューでアニメーションを再生することができます。

**4.**Inspector で、**Circle Weight** を **0**に調整します。

**Circle**アニメーションクリップの重みを **0**に変更すると、**Square**アニメーションクリップの重みが**1** に変更されます。 また、Circle アニメーションから Square アニメーションに重みが変更されると、Game ビューでは円ではなく四角形のパターンでキューブゲームオブジェクトが動き始めます。

**5.  再生**ボタンをもう一度押すと再生モードが終了します。

アニメーションクリップをゲームオブジェクトで再生する方法を確認したところで、アニメーターコントローラーを使ってアニメーションのブレンドを制御する方法を探ってみましょう。

ステップを完了としてマーク

## 5. アニメーターコントローラーの役割

Q&A (0)

アニメーターコントローラーは、アニメーションクリップの再生を開始するタイミングや、他のアニメーションクリップとのブレンド方法を制御するためのものです。これは、特定の ゲームオブジェクト階層で再生されるすべてのアニメーションクリップを組み合わせたアセットで、アニメーションの再生を制御するためのロジックを割り当てます。

アニメーションクリップを再生するには、アニメーターコントローラが参照している必要があります。それを参照するアニメーターコントローラーもまた、シーン内のアニメーターコンポーネントによって参照されなければなりません。

ステップを完了としてマーク

## 6. アニメーターコントローラーに触れてみよう

Q&A (0)

サンプルシーンでは、Cube ゲームオブジェクトに Animator コンポーネントがあります。この Animator コンポーネントは、CubeController アニメーターコントローラーを参照しています。

サンプルのアニメーターコントローラーを開くには：

**1.**Project ウィンドウで、**1.3 - Core Concepts Animation Blending > AnimatorControllers** と進み、**CubeController**をダブルクリックします。

[Image: image]

**2.**CubeController 内のオレンジ色の **Blend Tree** ノードをダブルクリックします。

ブレンドツリーが開き、Circle (円形) と Square (四角形)のアニメーションクリップの両方を参照していることを確認してください。ブレンドツリーとは、複数のアニメーションクリップを組み合わせた状態のことです。これらについては、「[**3.4: Creating and Configuring Blend Trees**](https://learn.unity.com/tutorial/3-4-creating-and-configuring-blend-trees?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5ebaa062edbc2a001f65dc6f)」で詳しく説明します。

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

ブレンドツリーは、Hierarchy で入力した重み (Weight) がアニメーションクリップにどのように割り当てられ、どのようにブレンドされるかを制御します。

#### アニメーターコントローラー：重要な情報

アニメーターコントローラーについて知っておくべき重要なことは、以下の通りです：

- 1 つまたは複数のアニメーションクリップを含む論理的状態の集合体
- アニメーターコントローラーは、アニメーションクリップのステート間を遷移し、現在再生されているステートのアニメーションクリップを評価します。
- ステートは遷移によって繋がっており、繋がっているステートのアニメーションクリップをブレンドします。

ステップを完了としてマーク

## 7. アニメーターコントローラーの作成

Q&A (0)

Unity でアニメーターコントローラーがどのように見えるか見てきましたが、次は自分のコントローラーを作ってみましょう。

新しいアニメーターコントローラーを作成するには：

**1.**  Project ウィンドウで、**Assets** >**1.3 - Core Concepts Animation Blending**>**AnimatorControllers** の順に進みます。

**2.  Create** >**Animator Controller**の順に選択します。

[Image: image]

**3.**新しい Animator Controller **ExampleController**という名前を付けます。これで自動的に Animator ウィンドウが開きます。

新しいアニメーターコントローラーにはデフォルトのノードがありますが、ステートはまだありません。これは、**ExampleController**が再生できるアニメーションクリップがないため、現在は再生できないことを意味します。

ステップを完了としてマーク

## 8. アニメーションクリップの ExampleController への追加

Q&A (0)

新しいアニメーションコントローラーでアニメーションを再生するには、まずアニメーションクリップを追加する必要があります。これを行うには：

**1.**  Project ウィンドウで、**1.3 - Core Concepts Animation Blending**>**AnimationClips**の順に進みます。

[Image: image]

**2.**  Project ウィンドウの **Circle** アニメーションクリップを Animator ウィンドウのグリッド背景にドラッグアンドドロップします。

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

**3.**  Project ウィンドウの **Square**アニメーションクリップを Animator ウィンドウのグリッド背景にドラッグアンドドロップします。

これで **ExampleController**に 2 つのノードが作成されました。これらのノードはアニメーションのステートで、アニメーターコントローラーに追加したアニメーションクリップが含まれています。

[Image: image]

**Circle** ノードはオレンジで、**Square**はグレーです。オレンジのノードはデフォルトの状態を表し、Entry というラベルのノードに繋がれています。これは、シーンの開始時に最初に再生されます。

ステップを完了としてマーク

## 9. 新しい遷移の作成

Q&A (0)

これでアニメーターコントローラを作成し、2 つのアニメーションクリップを追加したので、あるステートから別のステートへの遷移を作成する必要があります。

#### 遷移の概要

デフォルトのノードなので、シーンがスタートするとすぐに、このアニメーターコントローラーを使用しているゲームオブジェクト上でサークルアニメーションが再生されます。しかし、現在の設定では、アニメーターコントローラーで Square アニメーションを再生する方法がありません。これは、アニメーションクリップを含む 2 つのステート間の遷移がないためです。

多くのアニメーションツールやシステムと同様に、遷移は 2 つのアニメーションをブレンドするために使用されます。最初のアニメーションを最後のアニメーションにブレンドします。

#### 遷移の作成

新しい遷移を作成するには：

**1.  Circle** ステートを右クリックしてコンテキストメニューを表示します。

**2.  Make Transition**を選択します。

**3.  Square**ステートを選択すると、そのアニメーションに遷移を割り当てることができます。

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

これで、Circle ステートから Square ステートへの矢印が表示されるようになりました。これは、アニメーションの実行が Circle アニメーションクリップの再生から Square アニメーションクリップへと移動できることを意味しています。

ステップを完了としてマーク

## 10. 遷移の設定を行う

Q&A (0)

Circle と Square のアニメーションを遷移で繋げたので、アニメーションの中でいつ遷移が起きるかを設定する必要があります。

そのためには、いくつかの設定を変更する必要があります。

#### 終了時間

終了時間（Exit Time）を設定するには：

**1.**Animator ウィンドウで、作成した遷移を選択します。その設定が Inspector に表示されます。

[Image: image]

**2.  Settings**の折りたたみ構造を展開します。

[Image: image]

現在、**Exit Time** が **0.75**に設定されているのがわかると思います。これは、Circle ステートが Circle アニメーションクリップの 75% を再生したときに遷移が開始されることを意味しています。

遷移が始まる前に最低でも 1 周は見ておいた方が満足度が高いと思います。そのためには、1 以上の任意の値に変更する必要があります。

**3.  Exit Time** を **1.5**に変更します。

これで Circle アニメーションクリップが 1 回半再生されてからトランジションが始まります。

#### 遷移のタイミング

ブレンドするアニメーションをスムーズにするためには、Circle と Square のアニメーションクリップの重みを手動で調整したときのように、アニメーションが段階的になっていることが重要です。

遷移が開始されると、遷移先のステートでアニメーションクリップの再生が開始されます。この場合、Circle のアニメーションクリップは、遷移が開始された時点で途中まで再生されています。アニメーションクリップが同じ段階になるように、Square アニメーションクリップもその中間地点から再生を開始してください。

遷移のタイミングを設定するには：

**1.**  **Transition Offset** を **0.5**に変更します。これにより、Square のアニメーションクリップがその中間点から開始されます。

[Image: image]

**2.** **Transition Duration** を **2**に変更します。 これにより、遷移のブレンドがより緩やかになります。

これで、遷移が完了するまでに 2 秒かかります。最終的な遷移の設定は以下のようになります：

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

ステップを完了としてマーク

## 11. 調整したアニメーションの確認

Q&A (0)

最終結果を表示する前に、**Cube** ゲームオブジェクトが先ほど作成したアニメーターコントローラーを再生していることを確認する必要があります。

これを行うために：

**1.**Hierarchy で、**Cube** ゲームオブジェクトを選択します。

**2.**Project ウィンドウで、**1.3 - Core Concepts Animation Blending**>**AnimatorControllers**であることを確認してください。

**3.**Inspector の Animator コンポーネントの **Controller**プロパティに **ExampleController**をドラッグアンドドロップします。

**4.  Blending Example** のコンポーネントを見つけます。コンテキストメニューをクリックし、**Remove Component** を選択します。****

**5.  再生**ボタンを押すと、新しいアニメーターコントローラーが Game ビューで動作しているのを見ることができます。

ステップを完了としてマーク

## 12. まとめ

Q&A (0)

この入門チュートリアルでは、Unity のアニメーションシステムの基本的で主要なコンセプトのいくつかについて学びました。アニメーションデータがどのように構造化され、ゲームオブジェクトを通して再生され、ブレンドされるかを詳しく見てきました。

Unity のアニメーションシステムを完全に理解するために必要なトピックの多くは、相互にリンクしています。覚えておくべき重要なことは、ほとんどすべてのツールやシステムが、アニメーションデータを取得および設定、操作したり、アニメーションをどのようにブレンドするかを制御したりするための方法であるということです。

次の学習プロジェクトでは、Animation ウィンドウをより詳しく調べ、アニメーションクリップを確認して編集したりするためにどのように使用できるかを学びます。

このコースでは、アニメーターコントローラー、ブレンドツリー、Animator コンポーネントについて学びます。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
