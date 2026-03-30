[Image: image]

# 基本的なボタン機能の追加

Tutorial

Beginner

+10XP

30 mins

0

Unity Technologies

[Image: 基本的なボタン機能の追加]Summary

ボタンは、最もシンプルで最も一般的なインタラクティブな UI 要素です。ボタンがなければ、とても先へ進めないでしょう。このチュートリアルでは、Unity のイベントシステムを使って、ボタンを機能させることができます。

このチュートリアルでは、次のことを行います：

- インタラクティブな UI を開発するための EventSystem ゲームオブジェクトの役割について理解する。
- 様々な UI におけるボタンの使用例を確認する。
- Event System (イベントシステム) を使って、簡単なボタンの機能を実装する。

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

以前のチュートリアルで学んだように、ユーザーインターフェースは、ユーザーがコンピューターやコンピューターアプリケーションと相互作用（インターフェース）することを可能にするものです。多くの場合、ボタンをクリックしたり、チェックボックスを切り替えたり、スライダーをドラッグしたりすることで操作することができます。

あなたはいつもこのようなタイプの UI に触れていますよね。携帯電話のキーボードは、すべてボタンでできています。航空券やレストランの検索フィルターには、チェックボックスやトグルが使われています。パソコンの音量や画面の明るさの設定は、通常スライダーで行います。

このチュートリアルでは、プロジェクトに最初のインタラクティブ機能を追加し、ユーザーが設定メニューにアクセスし、タイトル画面に戻ることができるようにします。

ステップを完了としてマーク

## 2. 身近な UI の分析

Q&A (0)

よく設計された UI は、ユーザーと明確にコミュニケーションをとることができます。ユーザーは、画面上で何ができて、何ができないかを知ることができます。もし、ユーザーが何かを操作しようとしたとき、それが成功したかどうかを知ることができるはずです。つまり、UI はユーザーに対して多くのフィードバックを提供する必要があるのです。

Unity や、お使いのコンピューターの他のアプリケーションで、ご自身でお確かめください：

- ボタンの上にマウスを乗せてみてください。どうなりますか？
- ボタンを選択します。どうなりますか？
- オブジェクトが選択されたら、どうやって分かるのですか？

#### 動作の確認

インタラクティブなオブジェクトにカーソルを合わせると、そのオブジェクトは別の色で強調される傾向があります（多くの場合、グレーの濃淡）。また、背景の代わりにテキストの色が変わることもあります。この効果はかなり微妙なことが多いです。もしボタンがすでに明るい色であれば、通常はより暗くなります。

[Image: image]

ボタンがすでに濃い色であれば、通常は薄くなります。

[Image: image]

実際にボタンをクリックしたり選択したりすると、また色が変わる傾向があり、通常はより目立つ形で変化します。これは、単なるグレーの濃淡ではなく色彩を伴うことが多いのです。

[Image: image][Image: image]

コンピューターやモバイルデバイスの他のアプリケーションを操作し、さまざまなボタンにカーソルを合わせたり選択したりして、UI がどのように色でコミュニケーションをとっているかに注目してください。

ステップを完了としてマーク

## 3. ボタンの Transition の色を編集する

Q&A (0)

Unity では、ボタンが提供する色のフィードバックを制御して、ユーザーとのコミュニケーションを深めることができます。

**1.  Settings Button**ゲームオブジェクトを選択した状態で、Button コンポーネントの**Transition** プロパティを探します。このプロパティは、デフォルトで **Color Tint**に設定されているはずです。

[Image: image]

ここでは、ユーザーがボタンを操作したときに、ボタンの色を変えることができる **Color Tint**を使用します。ただし、**Sprite Swap**の設定でインタラクション時の画像を入れ替えたり、**Animation**の設定でカスタムボタンのアニメーションを再生することは可能です。

以下は、デフォルトのティントカラー (淡彩) です：

[Image: image]

- **Normal Color：** コントロールの通常色。 真っ白です。これは通常の状態ではボタンに色味がないことを意味します。
- **Highlighted Color：**ハイライトされている時のコントロールの色。 白より少し暗い、非常に微妙なグレーの色合いです。これはユーザーがボタンの上にカーソルを置いたときに表示されます。
- **Pressed** **Color：** 押下されている時のコントロールの色。プレスドカラーは、より目立つグレーカラーです。
- **Selected** **Color：**選択時の色。クリックするとボタン全体が消えるので、この使用例では Selected Color は関係ありません。
- **Disabled** **Color：**無効時のコントロールの色。ボタンは常に有効であるため、Disabled Color も関係ありません。
- **Color Multiplier：**それぞれの Transition の色にこの値を乗算します。色合いがボタンに与える効果を増加させます。暗いボタンや半透明のボタンを使用している場合、これは役に立つかもしれません。

**2.**アプリケーションを実行し、ボタンの色合いの効果を確認してください。再生モードでは、さまざまな色を試してみて、どのように見えるかを確認することができます。

**3.**アプリケーションの設定と終了ボタンの Highlight Color、Pressed Color、Color Multiplier のプロパティを編集してください。ハイライトの色合いよりも、押下されている時の色合いの方が目立つはずです。

ステップを完了としてマーク

## 4. On Click イベントへのアクションの追加

Q&A (0)

ボタンが思い通りになったところで、機能的にしてみましょう。メインタイトル画面と Settings (設定) メニューの間を、ユーザーが移動できるようにする必要があります。

ユーザーが Settings ボタンをクリックすると、設定メニューが表示されるはずです。

[Image: image]

設定メニューの終了 [X] ボタンをクリックすると、タイトル画面に戻るようになっています。

[Image: image]

まずは、Settings ボタンで設定メニューを表示させることから始めましょう。

**1.** Hierarchy で、**Title Text** と **Settings Button** ゲームオブジェクトをアクティブにし、**Settings Menu**ゲームオブジェクトを非アクティブにします。これは、Inspector のゲームオブジェクトの名前の横にあるチェックボックスで行うことができます。

[Image: image]

これで設定メニューは非表示になります。

[Image: image]

**2.**  **Settings Button** を選択し、**Button** コンポーネントの中にある **On Click ()**セクションを探します。

[Image: image]

**On Click** ボックスの中に、List is Empty と書かれていることに気がつくでしょう。これは、ボタンが選択されても（クリックされても）何も起こらないことを意味します。

**On Click** は**UnityEvent**と呼ばれるものです。UnityEvent は、その特定のイベントが発生した場合、任意の数のアクションをトリガーすることができます。この場合「イベント」は誰かがボタンをクリックすることです。

**3.** (**+**) ボタンを選択すると、**On Click**イベント内のリストに新しいアクションが追加されます。

[Image: image]

デフォルトでは、追加したアクションは空です。まだ何もしません。次に何かをさせるようにしましょう。

ステップを完了としてマーク

## 5. ボタンクリック時に設定メニューを表示させる

Q&A (0)

UnityEvent の関数の選択は、2 段階のプロセスで行います：

1. 関数を実行したいオブジェクトを選択します。
2. そのオブジェクトのコンポーネントから、実行したい関数を選択します。

デフォルトでは、**Object**フィールド（None (Object)と表示されている部分）には何も割り当てられていません。Settings Menu を表示させたいので、このフィールドに割り当てたいオブジェクトを指定します。

**1.**Hierarchy から **Settings Menu** ゲームオブジェクトをクリックし、空の Object フィールドにドラッグして割り当てます。

[Image: image]

**No Function**ドロップダウンが利用可能になったことに気が付くでしょう。No Function とは、このオブジェクトから実行する機能（またはアクション）がまだ選択されていないことを意味します。次に、このイベントが発生したときに、Settings Menu オブジェクトに実行させたい関数を選択する必要があります。

**2.** 現在 No Function に設定されているドロップダウンから、**GameObject > SetActive (bool)**と選択します。このメニューでは、このオブジェクトに割り当てられたスクリプトと、そのスクリプトで使用可能な関数を参照することができます。

[Image: image]

**GameObject > SetActive (bool)**とすることで、[**GameObject**](https://docs.unity3d.com/ScriptReference/GameObject.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950638400) スクリプトから [**SetActive**](https://docs.unity3d.com/ScriptReference/GameObject.SetActive.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950638400) 関数を実行することを選択していることになります。

関数が割り当てられると、関数のドロップダウンの下に目立たないチェックボックスが表示されることに気づきます。

[Image: image]

チェックボックスが表示されるのは、**SetActive (bool)** 関数が Boolean (または true/false) パラメーターを必要とするためです。

ゲームオブジェクトをアクティブにする SetActive(true) と、非アクティブにする SetActive(false) のどちらを呼びたいかを選ぶ必要があります。

Settings Menu を OnClick で表示させたいので、true を使用します。

**3.**  チェックボックスで SetActive(true) を呼び出し、Settings Menu を有効にします。

[Image: image]

アプリをテストしてみてください。Settings ボタンを選択すると、画面上ではタイトルのすぐ上に Settings (設定) メニューが表示されます。心配しないでください - 次で修正しましょう。

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

## 6. タイトル画面の要素を非表示にする

Q&A (0)

Settings ボタンを選択すると、Settings (設定) メニューが表示されるはずです。ただし、タイトルと Settings ボタンも消えているはずです。

オブジェクトを表示させる方法は、すでにご存知のとおりです。オブジェクトを表示させない方法も同じですが、SetActive Boolean を true ではなく false に設定しなければなりません。

**1.** **Settings Button**ゲームオブジェクトを選択したまま、**+** ボタンを使って、On Click イベントに 2 つの新しいアクションを追加します。

**2.** Title Text オブジェクトを一方のアクションに、**Settings Button** オブジェクトを他方のアクションに、それぞれ Hierarchy からドラッグして割り当てます。

**3.** 関数ドロップダウンを使って、**GameObject > SetActive**と選択し、チェックボックスが無効になっていることを確認します。これで SetActive(false) が呼び出され、それらのオブジェクトが非表示になります。

[Image: image]

これで Setting ボタンを選択すると、メニューが表示され、他の要素が見えなくなるはずです。

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

## 7. タイトル画面への戻り方

Q&A (0)

これで Settings (設定) メニューへの移動は完了です。次に、Settings (設定) メニューからタイトル画面へ戻るためのナビゲーションが必要です。

設定メニューの終了ボタンを選択すると、設定メニューが表示されず、タイトル画面の要素が再び表示されるはずです：

**1.  Exit Button**ゲームオブジェクトを選択し、On Click イベントに 3 つの新しい空のアクションを追加します。

**2.** **Settings Menu、Title Text、Settings Button** のゲームオブジェクトを、Hierarchy からドラッグして、空の**Object**フィールドに割り当てます。

**3.** **Settings Menu**ゲームオブジェクトを非アクティブにし、**Title Text** と **Settings Button** ゲームオブジェクトをアクティブにするには、関数ドロップダウンと Boolean チェックボックスを使用します。

[Image: image]

設定メニューへのナビゲーションは完全に機能するようになり、期待通りの表示/非表示ができるようになりました。

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

## 8. 次のステップ

Q&A (0)

このチュートリアルでは、ゲームオブジェクトを表示したり非表示にしたりするために、基本的なボタン機能を実装しました。また、この機能を利用して、空の設定メニューにナビゲートすることもできます。あとは、実際に設定メニューに設定を追加するだけですね。

次のチュートリアルでは、トグルやスライダーなど、より複雑な UI 要素を使用して、設定メニューにいくつかの設定を追加します。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
