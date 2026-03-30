[Image: image]

# トグルとスライダーの追加

Tutorial

Beginner

+10XP

30 mins

1

Unity Technologies

[Image: トグルとスライダーの追加]Summary

UI が複雑になると、必然的にトグルやスライダーを実装する必要が出てきますが、これらはそれぞれユーザーがアプリケーションとインタラクションするための独自の方法を可能にします。このチュートリアルでは、ユーザーが音楽をオン/オフできるトグルと、音量を調節できるスライダーを追加します。

このチュートリアルが終わるころには、次のことができるようになります：

- UI 設計におけるスライダーとトグルのユースケースを特定する。
- Event System を使って、簡単なトグル機能を実装する。
- Event System を使って、簡単なスライダー機能を実装する。

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

現在、Settings (設定) メニューは空っぽです。次のステップは、このメニューを設定項目で埋めることです。

このチュートリアルでは、音楽をオン/オフするためのトグルと、音量を調節するためのスライダーを追加します。必要であれば、追加の設定も追加できます。

このチュートリアルが終わる頃には、あなたのプロジェクトは下のサンプル画像のようになっているかもしれません：

[Image: image]ステップを完了としてマーク

## 2. 音楽のトグル設定の追加

Q&A (0)

前回のチュートリアルでは、ボタンに機能を追加しました。ボタンは非常に汎用性の高い UI 要素です。

もうひとつ、非常に便利な UI 要素が、ユーザーが機能をオン/オフできるトグル (toggle) です。

シーン内で音楽のオン/オフを切り替えられるトグルを追加してみましょう。

まず、設定メニューを表示させ、編集しやすいようにタイトルを非表示にしましょう。

**1.** Settings Menu オブジェクトを有効にして、他の UI 要素をすべて非表示にしてから、Scene ビューでキャンバスを編集するのに適切な 2D 表示になっていることを確認してください。

[Image: image]

**2.** Settings Menu オブジェクトを右クリックして、**UI > Toggle** と選択し、Hierarchy で「Music Toggle」に名前を変更します。これにより、メニューの中央に位置するチェックボックスが追加され、その横に Toggle という文字が表示されます。

[Image: image]

デフォルトでは Toggle ラベルは、より堅牢で最適化された TextMeshPro ではなく、Unity の古いテキストシステムが使用されています。そのシンプルなテキストを TextMeshPro に置き換えてみましょう。

**3.** **Music Toggle**ゲームオブジェクトを展開して **Label** オブジェクトを削除し、Music Toggle を右クリックして**UI > Text - TextMeshPro** と選択します。この場合、デフォルトの New Text オブジェクトが作成されますが、これはあまりにも大きく、位置もずれています。

[Image: image]

**4.**テキストラベルをアプリの他の部分に合うように編集し、チェックボックスの位置を適切に変更し、親である Music トグルオブジェクトの位置をメニュー内の好きな場所に変更します。

[Image: image]

トグルの見た目は良くなったが、選択してもまだ何も機能しません。そこで、このトグルを使えるようにしましょう。

ステップを完了としてマーク

## 3. シーンに音楽を加える

Q&A (0)

音楽のオン/オフを切り替える前に、シーンに音楽を追加する必要があります！

**1.** Hierarchy で、**右クリック**して **Audio > Audio Source**と進みます。これは基本的にシーンへスピーカーを追加するようなものです。

**2.**  Audio Source コンポーネントの **Audio Clip**プロパティで、オブジェクトピッカーを使用して、プロジェクトで使用する音楽を選択します。

[Image: image]

プロジェクトを再生することで、音楽をプレビューすることができます。今回はクラシックをご用意しましたが、他の曲をダウンロードしてインポートすることも可能です。

**3.**  Audio Source コンポーネントで、**Volume**プロパティを 0.25-0.50 の間の値に設定します。音楽の音量が大きすぎたり、人を驚かせたりしないようにするためです。

ステップを完了としてマーク

## 4. 音楽のトグルを有効にする

Q&A (0)

音楽を再生できるようになったので、そのオン/オフを切り替える機能を追加してみましょう。

Button コンポーネントと同じように、トグルがユーザーによってオンまたはオフに切り替えられるたびに呼び出される特別な Unity イベントがあります。

**1.**  Music Toggle オブジェクトを選択し、Toggle コンポーネントの下部にある **On Value Changed (Boolean)**イベントを探します。

[Image: image]

**On Value Changed (Boolean)**イベントでは、「Boolean」が**パラメーター**となります。この Boolean パラメーターは、その Boolean が true か false かで異なったことを実行することを意味します。この場合、true（トグルを選択）のときは音楽を再生し、false（トグルを非選択）のときは停止するようにします：

- Toggle on → OnValueChanged(true) → 音楽を再生
- Toggle off → OnValueChanged(false) → 音楽を停止

**2.** On Value Changed イベント内の **+** ボタンを選択して、新しいアクションをリストに追加し、**Audio Source**ゲームオブジェクトを割り当てます。これにより、**Audio Source** ゲームオブジェクトから関数を呼び出すことができるようになります。

[Image: image]

**3.** 現在 **No Function** に設定されているアクションのドロップダウンを使用して、リストの上段から **AudioSource > enabled** と選択します。

[Image: image]

トグルが true または false に設定されると、Audio Source の**enabled**プロパティも同様に設定されます。これで、ユーザーがトグルを有効/無効にすると、Audio Source コンポーネントも有効/無効になり、音楽のオン/オフができるようになりました。

アプリをテストしてみてください。トグルを使用すると、音楽が停止し、再生されるようになります。

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

また、音楽のボリュームを調整したい人もいるでしょう。次は、その機能を追加してみましょう！

ステップを完了としてマーク

## 5. 音量調節用のスライダーを追加

Q&A (0)

音量を調節するために、新しい UI 要素である**スライダー (Slider)**を使用します。スライダーはとても便利で、音量、明るさ、テキストサイズ、価格範囲などの設定をより細かくコントロールすることができます。

**1.** Settings Menu オブジェクトを右クリックして、**UI > Slider** と選択し、Hierarchy で「Volume Slider」に名前を変更します。

[Image: image]

**2.** Scene ビューの Rect Transform コンポーネントまたは**Rect**ツールを使って、スライダーのサイズを変更し、メニュー上の位置を適切に変更します。

[Image: image]

**3.**  **Volume Slider**ゲームオブジェクトを右クリックして、子オブジェクトとして **Text - TextMeshPro** ゲームオブジェクトを作成します。そして、テキストのスタイルと位置を編集して、スライダーの横に Volume と表示されるようにします。

[Image: image]ステップを完了としてマーク

## 6. 音量調節用スライダーを有効にする

Q&A (0)

スライダーの見た目が良くなったので、あとは実際に使ってみるだけです。スライダーがユーザーによって調整されるとき、Audio Source の音量はそれと共に動的に変化する必要があります。

**1.**  Volume Slider オブジェクトを選択し、Slider コンポーネント内の**On Value Changed (Single)**イベントを見つけます。

[Image: image]

**2.**リストに新しいアクションを追加し、**Audio Source**オブジェクトを割り当てます。

[Image: image]

**3.** アクションのドロップダウンから、リストの上段にある**AudioSource > volume**と選択します。

[Image: image]

この場合、プロパティは toggle で使用した Boolean ではなく、**float**になります。float は 10 進数で表される数値です。スライダーは、スライダーハンドルの位置によって、0 から 1 の間の 10 進数値に音量を設定します。

今、アプリをテストすると、何か変なことに気がつくでしょう。音楽は通常の音量で再生されますが、スライダーはデフォルトの位置であるため、ずっと左側に設定されたままです。シーンの開始時には、スライダーの位置は現在のボリュームと一致するはずです。

**4.**Slider コンポーネントで、デフォルトの **Value**プロパティを Audio Source の開始ボリュームと一致するように設定します。これで、シーン内のスライダーハンドルも動きます。

[Image: image]

これで、スライダーは期待通りに機能するはずです！

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

## 7. 新しい UI 要素の追加

Q&A (0)

新しい UI 要素を作成し、それを簡単な機能と連携させる方法を理解していただけたと思います。

メニューに新しい設定をいくつか追加して、ユーザー体験をより快適に、より自由に操作できるようにしてみてください。

特定のオブジェクトを表示したり隠したりするトグル、ライトの明るさを調節するスライダー、夜と昼を切り替えるボタンなど、思いつく限りの楽しい機能を追加することができます。

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

UnityEvent にオブジェクトを割り当てて、関数をブラウズして試してみてください。そうすることで、何が可能なのか、いくつかのアイデアを得ることができるはずです。

ステップを完了としてマーク

## 8. 次のステップ

Q&A (0)

設定メニューの作成が完了しました！タイトル画面の要素を再有効化し、設定メニューをデフォルトで非表示にすることを忘れないでくださいね。

次のチュートリアルでは、UI をシーン内の現実世界の一部として見せることができる、全く異なる Canvas モードについて学びます。3D ワールドでの UI デザインの面白さが広がるはずです。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
