[Image: image]

# アニメーターを使ったアニメーションの制御

Tutorial

Beginner

+10XP

50 mins

0

Unity Technologies

[Image: アニメーターを使ったアニメーションの制御]Summary

今回のチュートリアルでは、プレイヤーの接近に応じてアニメーションするドアを作成します。その際、アニメーター、アニメーターコントローラー、および基本的なステートマシンについて学びます。

このチュートリアルが終わるころには、次のことができるようになります：

- アニメーションクリップを新規に設定する
- Record モードを使用してゲームオブジェクトのアニメーションを記録する
- アニメーションクリップにキーフレームを追加する
- 指定されたパラメーターの目的を特定する
- パラメーターとトランジションの関係を説明できる

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

これまでのチュートリアルでは、シーンが再生されると同時に、連続的にループするアニメーションを作成してきました。ただし、アニメーションを一度だけ再生したい場合や、どのタイミングで再生するかを制御したい場合も多くあります。

このチュートリアルでは、プレイヤーに近づくとアニメーションするドアを作成します。その際、アニメーター (Animators)、アニメーターコントローラー (Animator Controllers)、および基本的な**ステートマシン** (**State Machines**)****について学びます。

ステップを完了としてマーク

## 2. ドアのアニメーションの作成

Q&A (0)

ドアの開閉機能を作成しますが、ドアが開くアニメーションは 1 つだけ作成すれば OK です。この 1 つのアニメーションを元に、次のステップで他のすべてのアニメーションを作成することができます。

**1.**Unity の Scenes フォルダー内にある **Animation_Door_Scene** を開きます。

**2.**  Hierarchy で Door ゲームオブジェクトを選択します。

アニメーションを始める前に、ドアの**ピボットポイント**(**pivot point**) を確認することが重要です。ピボットポイントとは、オブジェクト上で動きが発生する点のことです。これまでのアニメーションの練習では、ピボットポイントの位置は重要ではありませんでしたが、ドアは非常に特殊な方法で動くので、異なりますアニメーションが変にならないように、適切な動きを再現することが重要です。ドアの場合、ピボットポイントはドアが壁のフレームに取り付けられる場所です。シーン内のドアは適切なピボットポイントで設定されていますが、Unity がそれを適切に参照しているかどうかを確認することが重要です。

**3.**  ドアを選択します。選択されると移動ウィジェットがドアの端に表示されるはずです。中央に表示される場合は、エディター上部の Hierarchy の上にある **Toggle Tool Handle Position** ボタンを選択し、選択値を Center から Pivot に変更します。

[Image: image]

Door (ドア) のゲームオブジェクトには、複数の子オブジェクトが入れ子（ネスト）になっていることにご注意ください。子ゲームオブジェクトの 1 つではなく、Door オブジェクト自体をアニメーション化するように注意しましょう。

**4.**  Animation エディターで、Create ボタンをクリックして、新しい Animation Clip を作成します。プロンプトが表示されたら、プロジェクトのアニメーションフォルダーに Door_Open という名前でアニメーションを保存します。

**5.**  Animation エディターの**Record**ボタンをクリックします。

**6.**  Add Property ボタンをクリックし、**Transform > Rotation**と選択します。

**7.**再生ヘッドを 1:00 のマークで生成されたキーフレームに進め、ドアを Y 軸に沿って 90 度回転させます。

**8.**  Animation エディターで Play を押して、アニメーションをプレビューします。ドアは、開いた位置に回転するはずです。ドアを反対方向に開きたい場合は、最後のキーフレームを編集して、-90 度回転させます。

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

**9.**  もう一度 **Record**ボタンを押すと、編集モードが終了します。

**10.**  Project ウィンドウで、Animations フォルダーに移動し、先ほど作成した Door_Open アニメーションを選択します。

**11.**  Inspector で、**Loop Time** を無効にします。このオプションを無効にすると、シーンが再生されたときにアニメーションが無限にループするのではなく、一度だけ再生されるようになります。

[Image: image]ステップを完了としてマーク

## 3. アニメーターコントローラーに触れる

Q&A (0)

今度は Door オブジェクトを選択します。Inspector に新しい Animator コンポーネントが追加されているのがわかると思います。Animator コンポーネントは、選択したゲームオブジェクトに最初のアニメーションクリップが作成されると、自動的に作成されます。アニメーターはアニメーションの割り当てを担当しますが、実際のアニメーションクリップの制御は行いません。このタスクは、最初のアニメーションクリップと一緒に自動的に作成されるアニメーターコントローラーに委ねられます。Door の Animator コンポーネントに、Door という名前の Animator Controller アセットが自動的に割り当てられているのがわかります。このアセットを使って、ドアの開閉機能を作成することができます。

**1.**  Animationsフォルダーで、Door Animator Controller を選択し、Door_Controller に名前を変更します。

**2.**  Door_Controller をダブルクリックして、Animator ウィンドウを表示します。

[Image: image]

**3.**  Animator ウィンドウを下にドラッグして、Animation エディターの隣にドッキングさせ、Scene  ビューと Animator ウィンドウを同時に見ることができるようにします。

**4.**  Hierarchy で Door を選択し、Play を選択してシーンを開始します。

[Image: image]

シーンが再生されると、ドアが開き、同時に Door_Open と書かれたノードの下に青いプログレスバーが表示されます。これがアニメーションクリップで、アニメーターはアニメーションコントローラーで起きていることをリアルタイムで表示します。

**5.** Play モードを終了します。

ステップを完了としてマーク

## 4. ステートマシンの探索

Q&A (0)

アニメーションコントローラーは、**ステートマシン** (**State Machine**)****と呼ばれる特殊なシステムで動作します。ステートマシンは、オブジェクトが実行可能なすべてのアクションを記録し、現在の状況（または状態）が求めるものに基づき適切なアクションを選択します。現在の状態を伝えるロジックは、通常スクリプトによって外部から制御されるが、あるアクションから別のアクションに移行するプロセスをステートマシンが直接処理し、これを**遷移**(**Transition**) と呼びます。

ステートマシンの仕組みをよりよく理解するために、まず、ドアが実行できるすべてのアクションを考えてみましょう：

- 開ける、開く (Open)
- 閉じる、閉まる (Close)

また、ドアが実行可能な状態については以下の通りです：

- 現在開けているところ (Currently opening)
- 現在閉めているところ (Currently closing)
- 現在開いている (Currently open)
- 現在閉まっている (Currently close)

最後の 2 つは意外かもしれませんが、「開いている」「閉まっている」はそれ自体アクションではありませんが、ドアがある状態なので考慮する必要があるのです。すべての状態を把握した上で、Door がどのように作用するかを図式化することができました：

[Image: image]

前述の通り、ドアはプレイヤーキャラクターとの近さによって開くように設定されます。つまり、ドアの初期状態は閉じた状態になります。プレイヤーキャラクターが十分に近づくと、ステートマシンは開く (Opening) 状態に遷移し、その後すぐに開いた (Open) 状態に遷移します。プレイヤーキャラクターが離れるまでこの状態を維持し、離れると閉まる状態に遷移し、すぐに閉じた状態に遷移するので、全てのプロセスを再開します。

その結果、何らかのロジックの入力が必要な遷移（プレイヤーの接近や去り際の検出）と、自動的に遷移する状態（開く→ 開いた、閉じる → 閉じた）が 2 つあることが判明しました。

ステップを完了としてマーク

## 5. デフォルトステートの作成

Q&A (0)

前のステップで学んだことを使って、今度はドアのステートマシンを作成します。現在、Door_Open アニメーションは、シーンが実行されると同時に、自動的に再生されます。これは、現在ドアに関連する唯一のアニメーションであり、コントローラーのデフォルトステートとして自動的に追加されたためです。ただし、ドアの遷移開始時の状態は実際には Closed ステートであるべきで、これには関連するアニメーションはありません。これを考慮し、コントローラーに Closed ノードを追加し、デフォルトステートとして設定します。

**1.**  グリッドのついた Animator 作業領域で右クリックし、**Create State > Empty** と選択します。

**2.** 新しいステートノードを選択し、Inspector で、名前を New State 0 から Closed に変更します。

**3.**  Closed ステート を右クリックし、Set as Layer Default State を選択します。

[Image: image]

このとき、Closed ステートはオレンジ色に変わり、Entry ノードとオレンジ色の線で結ばれ、遷移を表すようになります。Entry ノードは、ステートマシン内での遷移*開始時に*使用し、シーンが再生されるとすぐに自動的に実行されます。また、このチュートリアルの後半で取り上げる **Exit ノード**は使用されるたびに実行されます。

**4.**シーンの再生テストを行います。

ドア (Door) は開かなくなり、ステータスバーが繰り返し Closed ステートで動作します。これでステートマシンの最初の部分が動作しました！

ステップを完了としてマーク

## 6. ドアを開ける

Q&A (0)

次のステートでは、プレイヤーキャラクターの接近によって決定されるものです。プレイヤーキャラクターを検出するロジックは、スクリプトとトリガーのコライダーを使用しますが、これは後で設定することにします。とりあえず、ステートマシンを完成させ、スクリプトが使用するリファレンスを追加しておきます。

**1.**  Closed ノードを右クリックし、Make Transition を選択します。マウスカーソルの上に白い遷移の矢印が表示されます。

**2.**  Door_Open ノードを選択します。遷移の矢印がノードに付きます。

**3.**  シーンの再生テストを行います。

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

アニメーションコントローラーは、Closed ノードを一度実行します。終了すると、すぐに Door_Open のアニメーションに移行し、アニメーションが終了するとアイドル状態になります。あるノードがすぐに別のノードに遷移するのを防ぐには、遷移先に何らかのロジックゲートを配置する必要があります。これは、最終的に使用するスクリプトでチェックするものです。これは、**パラメーター** (**Parameters**) を使用することで実現できます。パラメーターは、 アニメーター内で直接作成される変数で、Animator エディターの左側にある Parameters タブにあります。

**4.**  Parameters タブを選択すると、現在空の Parameter リストにアクセスできます。

**5.**  Parameters リストの上部にある「+」をクリックし、Trigger を選択します。

Trigger パラメーターは、スクリプトで呼び出されるとすぐに遷移します。

[Image: image]

**6.**  トリガーに PlayerProximity という名前を付け、スペルや大文字小文字を正確に記述します。このトリガーは、後でスクリプトの中で参照されます。

**7.** 白い矢印をクリックして、Closed と Door_Open の間の Transition を選択します。Inspector で、Conditions セクションを見つけます。

**8.**  Conditions のリストの一番下にある **+**を選択します。パラメーターはこれだけなので、PlayerProximity がリストに自動入力されます。

**9.**  シーンを再生します。

**10.**  パラメーターリストの PlayerProximity の隣にある**ラジオ** (**radio**) ボタンを選択すると、トリガーされます。

これで、PlayerProximity が選択されるまで Character Controller は Closed ステートであり続け、Door_Open ステートに遷移し、ドアがアニメーションするようになりました。

ステップを完了としてマーク

## 7. ドアを閉める

Q&A (0)[Image: image]

上図のように、ドアが開くと同時に、すぐに開いた状態に遷移する必要があります。ドアのアニメーションの方法は、すでにこのことを考慮しています。アニメーションはドアが開いた状態で終了し、アニメーションのループをオフにすると、最後のキーフレームではアイドルのままです。つまり、ステートマシンの次のステップは、ドアを閉じる状態を作成することです。新しいアニメーションを作成するのではなく、Door_Open のアニメーションを再利用して、単純に逆にすることができます。

**1.**  Animator で Door_Open ノードを選択し、キーボードの **Ctrl/Cmd+D**を押して複製を作成します。

**2.**  Inspector で、新しいノードの名前を Door_Close に変更します。

**3.** Inspector で、Speed パラメータを探し、-1 に設定します。これでアニメーションが反転します。

**4.**  Door_Open ノードを右クリックし、Make Transition を選択します。

**5.**  Door_Close ノードを選択し、2 つのノード間の Transition を接続します。

**6.**  新しい Transition を選択し、Inspector の Conditions リストで**+** ボタンをクリックします。PlayerProximity が自動的に入力されます。

**7.**  シーンを再生テストします。PlayerProximity ラジオボタンを押すとドアが開き、もう一度押すとドアが閉まります。

Animator の Trigger パラメーターは、あるステートから次のステートへの移行が完了すると、直ちに無効になります。つまり、ドアの開閉のような状況でも、同じパラメーターを安全に再利用できます。つまり、後でプレイヤーキャラクターがドアの近くにいるかどうかを検出するために適用されるスクリプトは、1 つのパラメーターを参照するだけでよいということです。

ステップを完了としてマーク

## 8. ステートマシンのリセット

Q&A (0)

これで、様々なドアの状態での進行が完了しましたが、今のままでは、ドアは 1 回しか操作できません。ドアを無限に再利用するためには、ドアを閉じるアニメーションが完了したら、ステートマシンをリセットして元の状態に戻す必要があります。**Exit ノード**を利用することで、これを実現できます。Exit ノードに遷移すると、Entry ノードに自動的に遷移し、デフォルトのステートに戻ります。これによって、ドアのステートマシンを無限に再起動することができます。

**1.**  Door_Close ノードを右クリックし、Make Transition を選択します。

**2.**  Exit ノードをクリックすると、2 つのノード間の遷移が接続されます。

**3.**  シーンの再生テストを行います。

これで、 PlayerProximity を押してドアを閉めると、Door_Close のアニメーションが再生されて自動的に Exit に遷移し、Closed ステートにループバックするようになりました！PlayerProximity を押してからドアが開くまで、少し時間がかかることがあることにお気づきでしょうか。これは、デフォルトでは、ステートノードがアクティブな再生時間（プログレスバーで表される）を完了してから遷移するためです。これを無効にして、Door_Open ステートへの遷移を即座に行うことができます。

**4.**  Close ノードと Door_Open ノードの間の遷移を選択します。

**5.**  Inspector で、Has Exit Time を無効にします。

[Image: image]

**6.**  シーンを再生し、ステートマシンをテストします。PlayerProximity が押されると、すぐにドアが開くはずです。

ステップを完了としてマーク

## 9. 近接度のトリガーの作成

Q&A (0)

PlayerProximity トリガー (Trigger) を手動で押すことは、ステートマシンのテストには有効ですが、実際の体験ではうまくいきません。代わりに、プレイヤーコントローラーが範囲内にあるときにパラメーターを呼び出すスクリプトを使ってトリガーとなるコライダー (Collider) が使用されます。トリガーのコライダーは、割り当てられたオブジェクトを他のオブジェクトが通過するのを防ぐ通常のコライダーとは異なり、トリガーがアタッチされているオブジェクトと他のオブジェクトが相互作用したことを検出し、この情報をスクリプトを使用して特定のことを発生させることができます。

**1.**  Hierarchy で右クリックし、Create Empty を選択します。

**2.**  Empty ゲームオブジェクトの名前を Door Trigger に変更します。

**3.**  ドアのトリガーを選択した状態で、Inspector の**Add Component**ボタンをクリックし、Box Collider を検索して追加します。

**4.**  Box Collider コンポーネントで、**Is Trigger** を有効にします。これで Box Collider が Trigger に変更されます。

**5.**  Box Collider のサイズを Z 軸で 3 に増やします。

**6.**ドアのメッシュに重なるようにドアのトリガーを配置し、トリガーの半分をドアの左右に配置します。これにより、プレイヤーコントローラーが入ることで、ドアが開くトリガーとなるちょうど良い大きさのゾーンができます。

[Image: image]

**7.**Project スクリプトのフォルダーにある DoorTrigger スクリプトを探し、Door Trigger ゲームオブジェクトに追加します。

**8.**  Door ゲームオブジェクトを DoorTrigger スクリプトの Anim パラメーターにドラッグしてください。これにより、ドアのアニメーターが自動的にパラメーターに割り当てられます。

[Image: image]

**9.**  シーンを再生テストしてドアまで歩かせます。

プレイヤーコントローラがトリガーに入ると、スクリプトはドアのアニメーターコントローラーにアクセスし、PlayerProximity をトリガーします。プレイヤーコントローラーがトリガーから離れると、同じことが起こります。これで、シーン内でドアが完全に機能するようになりました！

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

## 10. その他のトリガーによるアニメーション

Q&A (0)

プレイヤーコントローラーが近づくとドアが開くというのは便利ですが、特に盛り上がりはありません。アニメーションでトリガーを使うことの素晴らしい点の 1 つは、ユーザーはいつトリガーに入ったか分からないので、特定のエリアに入ることで何かが起こったことにすぐには気づけないかもしれないことです。

学んだことを実践するために、ユーザーがプレイヤーコントローラで特定のエリアに入ると空に太陽が沈み、離れると太陽が昇るトリガーを作成します。

これを行うには：

- シーンのディレクショナルライトをアニメートする
- 太陽が昇る、登っていく、沈む、沈んでいくところなど、を管理するステートを持つアニメーターコントローラーを作成する
- ステートマシンは無限にループする必要がある
- ステートマシンを呼び出して実行するトリガーを作成する

トリガーの大きさを変えることで、太陽が昇ったり沈んだりする領域の大きさを制御できることを覚えておいてくださいね。

ステップを完了としてマーク

## 11. 次のステップ

Q&A (0)

Unity で少なくとも 1 つのアニメーションを持つすべてのオブジェクトには、Animator コンポーネントと Animator コントローラーがあります。このチュートリアルでは、ステートマシンの要件を分析し、それを Unity で再作成しました。今回作成したものはシンプルなものですが、より大規模で複雑なステートマシンを作成するために必要な主要コンポーネントをすべて使用しています。アニメーターコントローラーでアニメーションを制御および変更する方法と、アニメーションの完了とパラメーターに基づいて両者を移行する方法について学びました。次のチュートリアルでは、Unity: Imported animation の 2 番目のタイプについて説明します。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
