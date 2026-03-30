[Image: image]

# 初めての 3D アニメーションの作成

Tutorial

Beginner

+10XP

40 mins

0

Unity Technologies

[Image: 初めての 3D アニメーションの作成]Summary

このチュートリアルでは、ボールをアニメーションさせることで、アニメーションの基本原理と Unity で利用可能なツールを学びます。これは、デジタルと昔ながらの両方の新しいアニメーターのための典型的な練習です。

このチュートリアルが終わるころには、次のことができるようになります：

- アニメーションクリップ (Animation Clip) を新規に設定
- Record モードを使用して、ゲームオブジェクトのアニメーションを記録
- アニメーションクリップにキーフレームを追加
- 複数のキーフレームを一度に調整する

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

前回のチュートリアルで学んだように、Unity で扱うアニメーションには、インポートされたものと、エディター内で生成されたものの 2 種類があります。アニメーションの旅は、エディター内のアニメーションから始めることになります。Unity では、ゲームオブジェクトとその個々のコンポーネントから、実質的にあらゆるものをアニメーションさせることができます。オブジェクトのマテリアルをアニメーションさせて時間経過とともに色を変化させたり、ライトをトグルして点灯させたり、スクリプトでトリガーするなどが可能です。

本チュートリアルでは、ボールをアニメーションさせることで、アニメーションの基本原理と Unity で利用可能なツールを学びます。これは、デジタルと昔ながらの両方の新しいアニメーターのための典型的な練習です。

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

ステップを完了としてマーク

## 2. アニメーションクリップの作成

Q&A (0)

Unity では、個々のアニメーションは**アニメーションクリップ (Animation Clip)**と呼ばれるアセットに格納されます。クリップの作成時に選択されたオブジェクトと関連付けられ、特定のアニメーションを作成するためのすべてのデータが格納されます。アニメーションクリップは任意の長さにすることができ、1 つのゲームオブジェクトに複数のアニメーションクリップを関連付けることができます。

**1.**Hierarchy で、Ball ゲームオブジェクトを選択します。

Animation エディターのメインワークエリアに、**Create**ボタンが表示されていることに注意してください。このボタンは、まだアニメーションが関連付けられていないオブジェクトを選択すると、常に表示されます。すでにアニメーション化されているオブジェクトを選択した場合、最初に作成されたアニメーションが Animation エディターに表示されます。

[Image: image]

**2.**  **Create**ボタンをクリックすると、Unity がアニメーションの保存場所を選択するように促します。

**3.**アニメーションに Ball_Pulse という名前を付け、Animations フォルダーに保存します。

新しい Animation Clip を保存すると、Animation ウィンドウの外観が変化します。ウィンドウの左側には、アニメーションを行いたいプロパティを追加して表示することができる**Add Property** ボタンが表示されるようになりました。このボタンの真上には、現在のアニメーションクリップの名前がドロップダウンメニューで表示されます。同じゲームオブジェクトに複数のアニメーションを設定した場合、このメニューから表示したいアニメーションを選択することができます。

[Image: image]

Animation ウィンドウの本体に、アニメーションを作成するためのタイムラインが表示されるようになりました。

ステップを完了としてマーク

## 3. アニメーションのキーフレームの設定

Q&A (0)

アニメーションがアニメーションクリップに含まれるように、アニメーション内の特定のポーズは**キーフレーム (keyframes)**で定義されます。従来の手描きアニメーションでは、キーフレームはリードアニメーターが描くポーズであり、アニメーションのシーケンスを定義する重要な（あるいはキーとなる）描画です。リードアニメーターがこれらのキーポーズを完成させると、他のアニメーターがその間のフレームを描き、アニメーションを完成させます。これらのフレームは中割りフレームと呼ばれ、**tweens** (**トゥイーン**) とも呼ばれています。

デジタルアニメーションの場合、中割りは通常、アニメーターが使用するツールで処理されます。つまり、アニメーターはキーフレームを設定することだけを気にすればいいのです。デジタルキーフレームには、アニメーションするゲームオブジェクトに関連するすべてのデータが、定義されたタイムスタンプで記録されます。ボールを使った簡単なパルスアニメーションを作成し、その動きを見てみましょう。

**1.**  Hierarchy でボールが選択されたままであることを確認します。

**2.**  Animation ウィンドウの左側にある **Add Property** ボタンをクリックし、Transform の隣にあるドロップダウンを選択すると、Scale Property が表示されます。(**+**) ボタンを選択すると、アニメーションに追加されます。

[Image: image]

タイムラインの最初と最後に 4 つの菱形のアイコンが 2 つずつ表示されます。これらのアイコンはキーフレームを表しています。

[Image: image]

新しいプロパティがアニメーションに追加されると、Animation エディターは選択されたオブジェクトに関する関連データ（この場合、ボールの現在のスケール）を記録し、そのための初期キーフレームを生成します。キーフレームは、タイムラインの開始と終了の両方に生成されるので、生成したアニメーションを**ループ** (**loop**) させたり、同じ位置で開始と終了を繰り返して、アニメーションをシームレスに見せることができます。アニメーションをループさせたくない場合は、タイムラインの最後にあるキーフレームをいつでも削除することができます。しかしこの場合、アニメーションをループさせる必要があります。

最初のキーフレームを設定しましたが、両方とも同じなので、まだ何もアニメーションしていません。そのためには、シーン内のボールメッシュを変更し、その変更を記録するために別のキーフレームを設定する必要があります。これを実現する方法はいくつかありますが、最も簡単なのは Animation エディターの **Record** ボタンを使うことです。このボタンは、モデルに変更を加えたときに自動的に検出し、キーフレームを生成してその変更を記録します。

**3.** Animation ウィンドウの左上にある丸い**Record** ボタンを選択すると、録画モードが有効になります。

[Image: image]

**Record**ボタンが押されると、ボタンとタイムラインの両方が赤くハイライトされます。**Record** ボタンがアクティブである限り、Unity は Inspector で変更されたプロパティに対して、自動的にキーフレームを追加します。

**4.** タイムラインの番号付き領域内で、25 のマークを選択します。

それまで 0 のマークにあった白い線が、クリックした場所にジャンプします。これが**再生ヘッド**(**Playhead**) で、アニメーションのどの部分がアクティブになっているか、またはキーフレームが現在どこに配置されるように設定されているかを示します。

**5.**  キーボードの R キーを押してスケール (Scale) のツールに切り替え、Ball のサイズを大きくしてください。再生ヘッドを設定したタイムラインには、自動的にキーフレームが追加されます。

**6.**  Animation ウィンドウ内の Record ボタンの近くにある **Play**ボタンを押すと、アニメーションがプレビューされます。

キーフレームを 3 つしか設定していないにもかかわらず、Ball は開始時のスケールから変更したサイズまでスムーズにパルスし、その後元に戻ります。キーフレーム間の tween は、Unity が自動的に行っています。

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

キーフレームを作成した後でも、簡単に編集することができます。編集したいフレームに再生ヘッドを戻し、キーフレームを選択します。変更した内容は、Record モードが有効である限り、以前の設定に重ねて記録されます。キーフレームを削除するには、キーフレームを選択してキーボードの Delete キーを押します。

最初にキーフレームを作成したときに、タイムラインに 2 つのダイヤモンドアイコンが追加されたことを再確認してみましょう。1 つはタイムラインマーカーの真下にある濃いグレーの領域に、もう 1 つは薄いグレーの作業領域に表示されています。最上部のキーフレームは、その特定のタイムマーカーにある全てのキーフレームを選択し、タイムラインに沿って移動させるために使用されます。これは、タイムライン上の同じポイントで多くのプロパティをアニメーション化する場合に特に便利で、最上部のキーフレームを使用すると、それらをすべて一度に動かすことができるためです。

**7.** 25 のマークで最上部のキーフレームを選択します。選択して 30 までドラッグして、キーフレームのタイミングを調整します。

**8.**  **Record** ボタンを選択すると、録画モードが解除されます。

ステップを完了としてマーク

## 4. 2 番目のクリップの作成

Q&A (0)

単一のオブジェクトは、無限のアニメーションクリップを持つことができます。引き続き、ボールを使って、2 つ目のアニメーション、今回はループするバウンドを作成しましょう。ボールの跳ね返り（バウンド）アニメーションは、従来のアニメーターとデジタルアニメーターの両方にとって古典的な練習方法です。シンプルですが、新しいアニメーターがいくつかのアニメーションの原理を試すことができます。次に作成するものを見てみましょう：

[Image: image]

キーフレームを作成するポイントは、ボールの落下/ボールの地面への衝突/ボールの跳ね返りの 3 つです。では、さっそくやってみましょう！

**1.** Hierarchy でボールを選択した状態で、再生コントロールの左上のメニューで、現在のアニメーションとして Ball_Pulse をリストアップし、Create New Clip を選択します。

[Image: image]

**2.**  プロンプトが表示されたら、新しいアニメーションクリップを Animation フォルダーに Ball_Bounce という名前で保存します。

Animation ウィンドウからキーフレームが消えますが、パルスアニメーションのデータはクリップに安全に保存されていますので、ご安心ください。

このアニメーションは、前のクリップよりもタイミングに依存しているため、タイムラインはフレームではなく秒を表示するようにすると便利でしょう。

**3.**タイムラインと同じレベルの Animation ウィンドウの右上にある 3 つの縦長の楕円を選択し、Seconds を選択します。

[Image: image]

デフォルトでは、Unity のアニメーションはフレームレート (FPS) が 60 になっています。これは、1 秒間のアニメーションに対して、60 フレームが画面にレンダリングされることを意味します。これにより、非常に滑らかなアニメーションを実現します。ただし、アニメーションのフレームレートとして一般的なのは 24 FPS です。これは、ほとんどの映画のフレームレートでもあります。アニメーションのフレームレートは、最終的には個人の好みによりますが、プロジェクト内のすべてのアニメーションで一貫して同じレートを使用するようにしてください。特に、DCC や Unity アセットストアからインポートしたアニメーションを使用する場合、24 FPS であることが多いので、注意が必要です。

**4.** 前の手順と同じ縦 3 つの楕円形のボタンをクリックし、**Set Sample Rate > 24** と移動します。

**注：**サンプルレートが 60 フレーム/秒以下のアニメーションの場合、タイムラインでの数値の表示方法を理解しておくことが重要です。コロンの前の数字はアニメーションの秒数で、コロンの後の数字は現在のフレームです。例えば、1:22 は、最初の 1 秒間で 22 番目のフレームを意味します。

ステップを完了としてマーク

## 5. バウンスアニメーションの作成

Q&A (0)

**1.**シーン内で Ball を選択し、地上面から 3 ユニット程度、またはお好みの高さにドラッグします。

**2.**  Animation エディターの Record ボタンをクリックすると、すぐにキーフレームの編集を開始することができます。

**3.**  Animation エディターで**Add Property** ボタンを選択し、Transform オプションの左側にある下矢印をクリックすると、さまざまな **Transform プロパティ**が表示されます。Positionの右側にある **+**ボタンを選択します。

先ほどと同じように、アニメーションのタイムラインの最初と最後にキーフレームが表示されます。ただし、今は 1 秒しかないので、作成するアニメーションとしては速すぎます。もっと長くなるように調整しましょう。

**4.**  タイムラインにマウスを置き、マウスホイールで下にスクロールするか、1:10 が見えるまで下部のスクロールバーをドラッグします。

**5.**  右上のキーフレームを選択し、1:10 のマークまでドラッグします。これでアニメーションが完成するまでに少し時間がかかるようになりました！

**6.** タイムラインの番号付き領域内において、開始フレームと終了フレームの間の中間点をクリックします。Scene ビューで、ボールが接地面に乗るように、Y 軸の位置だけを変更するように注意して移動します。

**7.**  Animation エディターで Play を押して、アニメーションをプレビューします。

ステップを完了としてマーク

## 6. 次のステップ

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

基本的な跳ね返り (バウンス) は完成しました。でも、よく見ると、ボールは滑らかにアニメーションしていますが、ボールが跳ねているように見えるわけではありません。落ちたり跳ねたりするのではなく、ふわりと上下に浮いているように見えます。次のチュートリアルでは、このアニメーションをよりリアルに見えるように改良します。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
