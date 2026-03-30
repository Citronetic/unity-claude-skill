[Image: image]

# 2.2 アニメーションクリップの編集

Tutorial

Beginner

+10XP

50 mins

4

(39)

Unity Technologies

[Image: 2.2 アニメーションクリップの編集]Summary

本チュートリアルでは、Unity エディターで簡単なアニメーションクリップを作成して編集します。

Languages available:

日本語English日本語한국어日本語

## 1. 概要

Q&A (0)

「[**2.1 Animation ウィンドウ：機能と設定**](https://learn.unity.com/tutorial/2-1-animation-window-features-and-settings)」 では、Animation ウィンドウの様々な機能と機能をおさらいしました。このチュートリアルでは、Animation ウィンドウでアニメーションクリップを自分で作成して編集します。

ステップを完了としてマーク

## 2. はじめる前に

Q&A (0)

このチュートリアルでは、3D アニメーションシステム入門 Unity プロジェクトを使用します。まだダウンロードしていない場合は、先に[**ダウンロード**](https://learn.unity.com/tutorial/1-1-welcome-to-the-course#5f3e641cedbc2a002175fe66)しておきます。

プロジェクトのダウンロードが完了したら：

**1.** Unity エディターでプロジェクトを開きます。

**2.** Project ウィンドウで、**Assets > 2.2 - Editing Animation Clips > Scenes**の順に進み、**StreetLampExample** をダブルクリックしてシーンを開きます。

ステップを完了としてマーク

## 3. アニメーションクリップのデータの振り返り

Q&A (0)

アニメーションクリップに保存されているアニメーションデータは、バインディングと値の 2 つの部分で構成されています。

このチュートリアルを始める前に、このデータに関する重要な情報をざっと振り返りましょう：

- バインディングは、アニメーションの再生中にゲームオブジェクトをやコンポーネントのどのフィールドを変更するかを示します。
- 値は、任意のタイミングでフィールドを変更する必要があることを示しています。通常、これらの値は、時間の経過とともに変化するフロート（小数）で、曲線として表現されます。

Animation ウィンドウ (Animator ウィンドウとは異なります) には、アニメーションクリップに関連付けられたバインディングと値が表示されます。Animatioon ウィンドウを使って、アニメーションクリップのバインディングと値の両方を編集することができます。

ステップを完了としてマーク

## 4. LightFlicker アニメーションクリップにバインディングを追加する

Q&A (0)

バインディングを使って、アニメーションクリップにさまざまな変更を加えることができます。LightFlicker アニメーションクリップの Light の色を変更することで、このプロセスを詳しく触れていきます。

LightFlicker アニメーションクリップに新しいバインディングを追加するには、以下の手順に従います

**1.** トップメニューの **Window > Animation > Animation** の順に進み、Asset ウィンドウの横にドッキングさせます。

**2.**Hierarchy で、**StreetLamp**ゲームオブジェクトを選択します。Animation ウィンドウに **LightFlicker** アニメーションクリップが表示されます。

**3.**Animation ウィンドウで、**Add Property** の追加ボタンをクリックして新しいバインディングを追加します。

[Image: image]

これで選択範囲がポップアップ表示され、 展開できる折りたたみ式の範囲が表示されます。

[Image: image]

ゲームオブジェクト上には、各コンポーネントごとにひとつの畳み込みがあります。その下には、子のゲームオブジェクトごとのフォールドアウト (表示されている折り畳みの状態) があります。

**4.  Spot Light** 子ゲームオブジェクトのフォールドアウトを展開し、次に、**Light**のフォールドアウトを展開します。これにより、アニメーションクリップへのバインディングとして追加できる **Light**コンポーネントのプロパティが表示されます。

[Image: image]

**5.  Color**プロパティの右にある **Add (+)**ボタンを選択して、バインディングとして追加します。

[Image: image]

しかし、子ゲームオブジェクトの各フォールドアウトの中には、アタッチされたコンポーネントごとのフォールドアウト (親ゲームオブジェクトと同様) があります。子 ゲームオブジェクトのフォールドアウトには **Is Active** プロパティがありますが、これはルートゲームオブジェクトには無く、ルートゲームオブジェクトを無効にしないようにするためのものです。

ステップを完了としてマーク

## 5. アニメーションカーブの値を編集する

Q&A (0)

バインディングを追加すると、アニメーションカーブに 2 つのキーフレームが追加されます。アニメーションクリップの最初と最後の 1 つです。

前のステップで Light に色を追加したとき、4 つのアニメーションカーブが追加され、それぞれにバインディングが追加されました。アニメーションカーブとバインディングは、R、G、B、A チャンネルにそれぞれ 1 つずつあります。

[Image: image]

**ドープシートモード**では、アニメーションクリップのすべてのカーブのキーフレームが表示されます。

**カーブモード**では、各バインディングのアニメーション曲線が表示されます。 ただし、 新しく作成されたアニメーションカーブはすべて 1 の値を持っているので、 一本の線にしか見えません。

新しいバインディングのキーフレームはどちらも同じ値を持ちます。この値は、そのプロパティが現在シーンで持っている値に関係しています。

このステップでは、アニメーションカーブの値を編集するプロセスの概要を説明します。次のステップでは、前のステップで Light に追加したアニメーションカーブを編集します。

アニメーションカーブの値を手動で変更するには、以下の手順に従ってください：

**1.** 再生ヘッドの現在時刻のカーブの値を、そのバインディングの右側（バインディングを表すカーブを示す色の前）にあるカーブの値を見つけます。

**2.** この数字を希望の値に変更します。この数字を変更すると、現在のキーフレームの値が変わります。

再生ヘッドの現在の時刻にキーフレームがない場合は、新しいキーフレームが作成され、その値が与えられます。

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

また、カーブモードでは、以下のいずれかの方法でアニメーションカーブ上で直接キーフレームの値を編集することができます：

- キーフレームをクリックしてドラッグし、時間と値を変更する
- キーフレームを右クリックして **Edit Key**を選択する

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

## 6. 新しいアニメーションカーブの値を編集する

Q&A (0)

アニメーションカーブの編集方法がわかったので、次は Light の色のために作成したアニメーションカーブに変更を加えてます。値を使って遊んでみて、あなたが行った変更がアニメーションにどのように影響するかを試してみましょう。

ここでは、変更のガイドラインをいくつか紹介されています：

- 4 つのカラーアニメーションカーブをすべて編集する必要はありません。
- 少なくとも 1 つのカラーアニメーションカーブを編集する必要があります。
- 編集するアニメーションカーブには、少なくとも 3 つのキーフレームが必要です。
- 4 つのカラーアニメーションカーブのうち、**0:00**と **1:00**にはキーフレームがあるはずです。
- アニメーションクリップの他の部分 (例えば持続時間など) を変更してはいけません。

ステップを完了としてマーク

## 7. キーフレームの設定を見直す

Q&A (0)

キーフレームの設定を見直します。これは、Animation ウィンドウをカーブモードにした状態で行うのがベストです。

アニメーションカーブの値は、前のキーフレームと次のキーフレームの間の補間です。この補間の正確な値は、キーフレームの接線を使って計算されます。

各キーフレームには 2 つの接線があります：

1. インタンジェント (左側)
2. アウトタンジェント (右側)

例外は最初と最後のキーフレームです。ループ状のアニメーションを編集する目的で、最初と最後のキーフレームのインタンジェントとアウトタンジェントは互いに接続されています。接線は任意の角度で設定でき、ハンドルをドラッグして調整することができます。

[Image: image]

#### キーフレームのプリセット設定

Unityには、アニメーションカーブを簡単に作成するためのプリセットがいくつかあります。プリセットオプションを見るには、編集したいキーフレームを右クリック、以下のようなオプションが表示され、オンオフを切り替えることができます：

[Image: image]

- **Clamped Auto：**アニメーションカーブがキーフレームの値を超えず、スムーズに近づくことを意味します。
- **Auto：**レガシーな設定で、Unity 3.x で作成されたアニメーションクリップを扱う場合を除き、代わりに Clamped Auto を使用してください。
- **Free Smooth：**滑らかなカーブを得るための最良の方法です。

- **Flat：**Free Smooth のバリエーションで、接線が正確に水平になります。
- **Broken：**左右の接線が平行ではなく、独立した方向を指しています。

- **Free：**壊れた接線のための通常の選択です。
- **Linear：**Broken のバリエーションで、アニメーションカーブがキーフレームに近づくにつれて、接線が直線になろうとすることを意味します。隣り合う接線が両方とも直線の場合、アニメーションカーブはキーフレーム間の直線になります。
- **Constant：**Broken のバリエーションで、アニメーションカーブは次のキーフレームまで前のキーフレームと同じ値を持ち、その時点でそのキーフレームの値を取ります。
- **Weighted：**他の設定に加えて適用することができます。これにより、接線の長さを調整できるようになり、アニメーションカーブをよりコントロールできるようになります。これは上級レベルの設定です。

デフォルトでは、新規に作成されたキーフレームのほとんどは、Clamped Auto または Free Smooth に設定されています。新規に作成されたキーフレームは、フラットなアニメーションカーブの場合は Clamped Auto に、グラデーションの場合は Free Smooth に設定されます。

キーフレームの設定の詳細については、[Unity マニュアル](https://docs.unity3d.com/Manual/EditingCurves.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931420918)を参照してください。

ステップを完了としてマーク

## 8. レコードモードを使ったアニメーションの作成

Q&A (0)

より直感的にアニメーションを作成する方法として、レコードモードを使用する方法があります。

レコードモードがオンになっていると、アニメーションされたゲームオブジェクトの階層のどの部分に変更を加えても、再生ヘッドの現在の時刻にアニメーションウィンドウに記録されます。

これにより、ある時点でいくつかの値を変更し、再生ヘッドを少し動かしてその値を変更することで、ストップモーションアニメーターのように作業することができます。これを繰り返すことで、完全なアニメーションを作成することができます。

このチュートリアルの残りの部分では、バウンドするボールのアニメーションでより高度なアニメーション編集テクニックを練習しますが、この方法を試してみて、気に入ったものがあれば小さな変更を加えることもできます。

ステップを完了としてマーク

## 9. 複数のキーフレームを一度に操作する

Q&A (0)

キーフレームを編集する際に、複数のキーフレームを一度に移動する必要がある場合があります。これは、キーフレームに何をするかによって、さまざまな方法で行うことができます。

キーフレームの選択は、ドープシートモードでもカーブモードでも同じですが、操作方法はモードごとに異なります。

#### **ドープシートモード**

ドープシートモードでは、縦軸は値の変化を表しません。選択ボックスをクリックしてドラッグすると、キーフレームが横軸に沿って時間的に移動します。

また、選択ボックスの両側にある青いバーをドラッグして、選択ボックスを水平方向に「拡大・縮小」し、キーフレームを近づけたり遠ざけたりすることもできます。

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

ただし、このようにキーフレームを移動させると、選択後にキーフレームがどのように変化するかという問題が発生します。キーフレームはそのままにしておくべきでしょうか、それとも選択したキーフレームの変化に合わせて移動するべきでしょうか？

#### Ripple (リップル) 編集

変更に伴ってキーフレームが動くはずの場合、これはリップル (“さざ波”) 編集です。これは、あなたが行った変更がリップルエフェクトを持つためです。

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

一時的にリップル編集を有効にするには、**R**キーを押したままにします。長時間有効にするには、コンテクストメニューで **Ripple** を選択します。

[Image: image]

#### カーブモード

ドープシートモードでキーフレームを編集するためのこれらの高度な機能は、カーブモードでも利用できます。

In Curves mode, the  カーブモードでは、縦軸が値を表すため、上下移動やスケーリングにも対応しています（ドープシートモードとは異なります）。

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

選択ボックスは両軸で操作できるので、選択したキーフレームを片軸だけで移動させるのは難しいかもしれません。

これを簡単にするために、選択ボックスの上部と右側に操作バーがあり、片方の軸に沿ってドラッグできるようになっています。

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

## 10. 跳ねるボールのアニメーションの編集

Q&A (0)

さて、アニメーションクリップの編集原理の理解を応用して、跳ねるボールのアニメーションを変更してみましょう。

練習問題は、今までに習った技術を使ってボールにもう一つのバウンドを加えることです。そのためには、以下の手順に従ってください：

**1.**Project ウィンドウで、**2.2 - Editing Animation Clips** > **Scenes** の順に進み、**BallExample**をダブルクリックしてシーンを開きます。

**2.**Hierarchy で、**Ball** ゲームオブジェクトを選択します。

**3.** Animation ウィンドウで、Dopesheet または Curves モードを選択します。

**4.** 選択したいキーフレームの上に選択ボックスをクリックしてドラッグします。

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

**5.**キーフレームを追加または削除したい場合は、**Shift**キーを押しながら、追加または削除したいキーフレームをクリック。これにより、キーフレームが選択されるか（現在選択されていない場合）、選択したキーフレームから削除されます。

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

**6.  Ctrl + C**(Windows) または **Cmd + C** (macOS) を押して選択範囲をコピーします。

**7.**キーフレームを移動させたい時間に再生ヘッドを移動させます。

**8.  Ctrl + V**(Windows) または**Cmd + V**(macOS) を押して、新しい時間に貼り付けます。

以下の動画はテクニックのみを示していることに注意してください。目的の結果を得るには、コピーして貼り付けるキーフレームを決定する必要があります。

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

**9.**変更内容を保存し、再生モードでテストします。

ステップを完了としてマーク

## 11. まとめ

Q&A (0)

このチュートリアルでは、以下のことを学びました：

- アニメーションクリップスに新しいバインディングを追加しました。
- アニメーションカーブの値を編集しました。
- ドープシートとカーブモードの違いに詳しく触れました。
- 既存のアニメーションクリップの値を操作して、これらが結果のアニメーションにどのように影響するかを理解しました。

次のチュートリアルでは、モデル固有のアニメーションについて学び、アニメーションのインポート設定を確認します。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
