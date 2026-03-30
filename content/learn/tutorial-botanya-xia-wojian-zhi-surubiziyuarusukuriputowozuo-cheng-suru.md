[Image: image]

# ボタン押下を検知するビジュアルスクリプトを作成する

Tutorial

Beginner

+10XP

60 mins

0

Unity Technologies

[Image: ボタン押下を検知するビジュアルスクリプトを作成する]Summary

アプリケーションのボタンを作成したところで、今度は Unity のビジュアルスクリプティングエディターを使用して、そのボタンの機能のプログラミングを始めましょう。ビジュアルスクリプティングを使用することで、実際にコードを記述せずとも、Unity プロジェクトのロジックを作成することが可能になります。

このチュートリアルでは、以下のことを行います。

- 手始めとなるビジュアルスクリプトグラフを作成します。
- ビジュアルスクリプティングエディターというものに慣れていきます。
- ビジュアルスクリプトを使用してボタン押下を検知させます。

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. 概要

Q&A (0)

ここまでの過程においては、AR Foundation の一部であるビルトイン機能を使用して、アプリケーションを作ってきました。AR Foundation は AR 開発の技術的な側面を扱う場合に大変有用なものですが、とはいえ構築してみようと思われるほとんどのアプリケーションについては、何らかのインタラクティビティが含まれています。それはビルトインコンポーネントの範疇を超えるものなのです。

幸い、Unity の最大の強みの 1 つは、インタラクティビティを簡単に作成できることです。このチュートリアルでは、Unity のビジュアルスクリプティンググラフエディターで作業を開始し、はじめてのボタン押下検知スクリプトを作成します。

Unity のビジュアルスクリプティングエディターは、SparkAR など他の AR 作成ツールに含まれるビジュアルスクリプティングエディターとよく似ています。

ステップを完了としてマーク

## 2. ビジュアルスクリプティングとは、どのようなものですか？

Q&A (0)

Unity のビジュアルスクリプティング機能を使用すると、実際のコードを記述することなく、Unity プロジェクトのロジックを作成することができます。Unity の従来のスクリプティングが C# プログラミング言語で行われるのに対して、ビジュアルスクリプティングはロジックの視覚描写であり、命令を図形として表す形で使用することができます。例えば、これら 2 つのスクリプトは同じことを行います。左側がビジュアルスクリプティング、右側が C# です。

[Image: image]

#### なぜスクリプティングを視覚化するのか？

ビジュアルスクリプティングというものは、プログラマーではない人たちや、未来のプログラマーが Unity スクリプティングという強い力を持ってもらうためにあるものです。ビジュアル指向のユーザーであれば、このアプローチでスクリプティングの概念の学習や理解をより進めやすくなります。スクリプトを実行した状態を、リアルタイムで観察することも可能です。ビジュアルスクリプティングによって、プログラマーではない人でも C# スクリプトの拡張や変更を行うことができるようになり、それによりプログラマーも、アーティストやデザイナーとのコラボレーションを飛躍的に良い形で進められるようになります。プログラマーであれば、ビジュアルスクリプティングを活用することで、他の Unity ユーザーのために拡張機能、テンプレート、ツールなど作成することもできるので、そうすれば C# を知っているかどうかに関係なく、誰もが Unity プロジェクトをカスタマイズできるようにもなります。

#### Unity スクリプティング API とは？

ビジュアルスクリプティングでは、プログラマーでない方でも [Unity スクリプティング API](https://docs.unity3d.com/ScriptReference/index.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774951943531) （アプリケーションプログラミングインターフェース）のすべてを難なく扱えるようになります。この API には、Unity スクリプトで色々工夫できる、クラス、イベント、メソッド（動作）、プロパティ（設定）の定義が丸ごとセットとして入っています。API は奥深いものですが、ちょっとした基本の知識だけでもスクリプトで多くのことを実行できます。

Unity のビジュアルスクリプティングエディターでは一連のメニューを駆使して、API のクラス、イベント、メソッド、プロパティを調べることができ、求めるものを見つけだすのも簡単です。API をさらに学ぶ最適な方法は、自分のスクリプトを作成しながら、（[Unity スクリプティング API](https://docs.unity3d.com/ScriptReference/index.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774951943531) リファレンスや Unity ビジュアルスクリプティングエディター内で）調べて経験することです。

ステップを完了としてマーク

## 3. はじめとなるグラフを作成する

Q&A (0)

ビジュアルスクリプトは**「グラフ」**と呼ばれるアセットへ格納されます。ビジュアルスクリプティンググラフはシーンにおいて、どのゲームオブジェクトにも適用できるものではあるものの、物事をシンプルに保つために、自分の全スクリプトグラフでの専用のゲームオブジェクトを「Hierarchy」中に作成するようにします。

**重要**：このプロセスの間に、警告ダイアログウィンドウで Unity の設定の変更を求められた場合には、「**Change now**」を選択してください。

以下の指示に従って、新しいスクリプトグラフを作成します。

**1.**「Hierarchy」内で右クリックし、「**Create Empty**」を選択します。

**2.**  新しい空のゲームオブジェクトに「Visual Scripts」という名前を付けます。

**3.**「Inspector」で、ゲームオブジェクトの 3 つの「**Position**」プロパティ値が **0** に設定されていることを確認します。

**4.**「**Add Component**」を選択し、Script Machine コンポーネントを追加します。

[Image: image]

Script Machine コンポーネントは、構築するビジュアルスクリプトを実行するものです。Unity では、ビジュアルスクリプトそのものがグラフとして参照されます。ここで追加した Script Machine コンポーネントにはグラフのスペースがありますが、現在は割り当てられていないことに注意してください。

**5.**「**New**」（「**Graph**」プロパティ）を選択します。

**6.**「Save Graph」ダイアログウィンドウが表示されたら、新しいフォルダーを作成して、「Visual Scripts」という名前を付けます。

**7.**新しいグラフに「MeshChanger」という名前を付けて、「**Save**」を選択します。

**MeshChanger** グラフが、Script Machine コンポーネントの Graph パラメーターに表示されます。現在、スクリプトマシンの上部には 2 つの新しいパラメーター（タイトルのパラメーターとサマリーのパラメーター）があることに注意してください。さらに多くのスクリプトマシンを作成するため、それぞれにタイトルと説明を付けると整理しやすくなります。

**8.**グラフのテキストフィールドを以下のように更新します。

- **タイトル**：Mesh Changer
- **サマリー**：Changes the visibility of the meshes on the GlassesGroup prefab.

[Image: image]ステップを完了としてマーク

## 4. スクリプトグラフを開いて操作する

Q&A (0)

これで、グラフを開いて機能の作成をはじめる準備ができました。

**1.**Script Machine コンポーネントで、「**Edit Graph**」を選択して、ビジュアルスクリプティング作業領域を開きます。

初めてビジュアルスクリプトを開くと警告が表示されます。「**Change now**」を選択して、Unity の設定がビジュアルスクリプティングプラグインとの互換性を持つように更新します。

[Image: image]

**ノート**：スクリプトマシンを初めて設定するとき、VisualScripting SceneVariables という名前の新しいゲームオブジェクトが自動的に「Hierarchy」に作成されます。

最初に「Script Graph」ウィンドウが開くときは、個別のウィンドウとして表示されます。このウィンドウは最大化して全画面表示することも、「Project」タブの後ろに固定（推奨）することもできます。

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

ウィンドウの右側にある主な作業領域は**グラフエディター**です。ここでグラフロジックを構築します。ウィンドウの左側には「**Graph Inspector**」があり、選択するオブジェクトの詳しい情報が表示されます。「Graph Inspector」ウィンドウの下には「**Blackboard**」があり、ここで変数を作成します。

新しいグラフを作成すると常に **On Start** ノードと **On Update** ノードがロードされます。**ノード**は、グラフにロジックを構築するために使用されるコンポーネントです。ノードにはいくつかの種類がありますが、これについては後で詳しく説明します。**On Start** ノードと **On Update** ノードは、アプリケーションロジックを構築するときによく使用されますが、このケースでは必要ありません。

**2.**インターフェースに慣れ親しむための時間を取ります。以下を行ってください。

- 中ボタンでクリックアンドドラッグを行い、グラフエディター内を移動します。
- タッチパッドを使用している場合は、2 本の指でスクロールしてグラフエディター内を移動できます。
- Ctrl（macOS：Cmd）を押したままホイールボタンを回すかタッチパッド上で上下に動かしてズームします。

**3.**On Start ノードを選択します。

**On Start** ノードを選択すると、「Graph Inspector」が更新され、選択したノードについて得られるすべての情報が表示されることに注意してください。このケースで、「Graph Inspector」に表示されるのは、このノードに **Trigger: Flow** という 1 つの出力があることだけです。**フロー出力**（および**入力**）によって、グラフのロジックフローすなわちノードが呼び出される順序が決まります。フローについては、このチュートリアルの後半で詳しく説明します。

**5.**On Start ノードをクリックして、グラフエディターまでドラッグします。

**6.**On Start ノードを右クリックし、「**Delete**」を選択してこのノードをグラフエディターから削除します。

**7.**On Update ノードを選択し、Delete キー（macOS：Cmd+Delete）を押して、このノードをグラフエディターから削除します。

これでグラフが空になります。

ステップを完了としてマーク

## 5. 最初のノードを作成する

Q&A (0)

このチュートリアルのゴールは、ユーザーがアプリケーションのボタンを押したときに検知することです。AR Foundation がユーザーの顔の検出に必要なほとんどの作業を処理するのと同様に、Unity スクリプティング API が、アプリケーションのために構築する主要なインタラクションほぼすべての機能を提供します。

API のどの部分を呼び出すかという知識には豊富な実践と経験が来るものです。なので、どのノードを使うのかを思いつかなくとも、心配しないようにしてください。これから学んでいけます。ビジュアルスクリプティングで（この意味では従来のスクリプティングでも）多くの機能を構築するにつれ、うまく予測できるようになります。ただし、経験豊富なプログラマーでさえ定期的にガイダンスを検索します。

Unity では、**ボタンインタラクション**は、マウスによるクリックとデバイス画面のタップのどちらで行われても、ボタンのクリックと見なされます。これがグラフに追加する最初のノードです。

このビデオを視聴するか以下の指示に従って、**MeshChanger** グラフにノードを追加します。

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

**1.**グラフエディターを右クリックします。コンテキストメニューが表示されます。これはファジーファインダーとも呼ばれます。

[Image: image]

**ファジーファインダー**は、すべての種類のノードを含む複数レベルメニューであり、Unity スクリプティング API 全体が含まれています。ファジーファインダーでは、名前でノードを検索したり、カテゴリを使用してノードを見つけたりすることができます。

**2.**「On Button Click」を検索し、それを選択してノードに追加します。（または、ファジーファインダーを使用して、「**Events**」>「**GUI**」>「**On Button Click**」に移動します。）

[Image: image]

**3.**On Button Click ノードを選択し、「Graph Inspector」ウィンドウでデータを確認します。

ステップを完了としてマーク

## 6. On Button Click ノードの概要

Q&A (0)

グラフの設定を続行する前に、On Button Click ノードのさまざまな部分を確認しましょう。

#### 「Inputs」セクション

前に確認した **On Start** や **On Update** とは異なり、**On Button Click** には「Inputs」セクションがあります。**入力**には、コントロール入力とデータ入力の 2 種類があります。**コントロール入力**は、グラフのロジックフローを制御します。**データ入力**は、他のノードから特定の種類の値（受け取り側ノードがタスクを実行するために必要）を受け取ります。**On Button Click** は、ボタンが押されたときに自動的に処理を行うだけです。ただし、どのボタンを監視するのかを認識する必要があります。

このケースでは、「Graph Inspector」ウィンドウに、**On Button Click** ノードの入力がゲームオブジェクトターゲットを予期していることが表示されます。このゲームオブジェクトは、**On Button Click** ノードが入力を監視する対象のボタンです。

[Image: image]

#### ターゲット入力パラメーター

デフォルトでは、**On Button Click** ノードには「**This**」というラベルが付いたパラメータースロットがあります。

[Image: image]

このパラメーターに、**ターゲット**入力が結び付けられます。ただし、入力が結び付けられなくても、ノードにはフェールセーフがあります。つまり、割り当てられているゲームオブジェクト上でターゲット入力を探します。このフェールセーフ動作こそ、パラメーターの現在のラベルが「**This**」となっている理由です。つまり、「『この』ゲームオブジェクトで入力を探す（I’ll look for my input on "This" game object.）」という意味です。

このケースでは、このパラメーターを空にしておくと、**On Button Click** ノードは、作成されたスクリプトマシンがアタッチされている、ビジュアルスクリプトゲームオブジェクト上のボタンコンポーネントを探します。スクリプトグラフが AR_Canvas ボタンのいずれかにアタッチされている場合は問題ありません。ただし、グラフが別のゲームオブジェクト上にある場合はどうすればよいのでしょうか。

ここで役に立つのが変数です。**変数**とは、さまざまな種類のデータのコンテナーです。このデータには、数値、ゲームオブジェクト、サウンドなど、ほとんどすべてが該当します。変数は、グラフそのものの中で生成することも、アプリケーション内の他のオブジェクトの参照として使用することもできます。このケースでは、UI 上のボタンの 1 つを参照する変数を作成します。

ステップを完了としてマーク

## 7. 最初の変数を作成する

Q&A (0)

前に学習したように、変数は「Script Graph」ウィンドウの「Blackboard」セクションで作成されます。「Blackboard」の上部には以下のタブがあります。

- Graph
- Object
- Scene
- App
- Saved

これらのタブは、作成できるさまざまな変数のカテゴリです。シーンのゲームオブジェクトを参照する変数を作成する必要があるため、Object 変数を作成します。

ビデオを視聴するか以下の指示に従って、**Object** 変数を作成します。

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

**1.**「Blackboard」で、「**Object**」タブを選択して **Object** 変数作成オプションを利用します。

**2.**「(New Variable Name)」スロットに「glasses1Button」を入力してから、「**Add** (**+**)」を選択するか Enter キーを押します。

変数にキャメルケースを使用するのは一般的な命名規則です。キャメルケースでは、最初の単語を小文字にして、その後のすべての単語を大文字で始めます。これが**キャメルケース**と呼ばれるのは、大文字がこぶのように見えて単語の輪郭がラクダ（キャメル）に似ているためです。

これによって **glasses1Button** 変数が作成されます。「**Type**」プロパティに「(Null)」が設定されていることに注意してください。これは、この変数が保持するオブジェクトの種類をまだ定義していないためです。

**3.**「**Type**」プロパティドロップダウンを選択し、「**Button**」を探して選択します。これで glasses1Button がボタン変数として定義され、**Value** パラメーターが表示されます。これを使用して、特定の UI ボタンへの参照を作成できます。

**4.  「Value**」パラメーターの右側の「**Object Picker**」（円形アイコン）を選択します。

**5.**使用可能なアセットのリストから「**Glasses 1 Button**」を選択します。

[Image: image]

**6.**  「Blackboard」で **glasses1Button** 変数を選択し、グラフエディターにドラッグします。

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

変数をシーンに追加することで、**Get Variable** ノードが生成されたことに注意してください。Variable ノードは、ファジーファインダーを使用してグラフエディターに追加することもできます。ただし、その場合は、**Get Variable** ノードがどの変数を参照するかを定義する必要があります。「Blackboard」から変数をドラッグした場合は、すべての情報がすでに入力されています。

「This」パラメーターは **glasses1Button Get Variable** ノードにもあることに注意してください。**On Button Click** のケースと同じく、これは **Get Variable** の詳細情報が入力されないケースに備えるフォールバックオプションです。ただし、このノードは **glasses1Button** として定義されるため、フォールバックは必要ありません。

ステップを完了としてマーク

## 8. ボタンの機能をテストする

Q&A (0)

これで、変数を **On Button Click** ノードで使用できます。これを結び付けると、**On Button Click** ノードが **Glasses 1 Button** の押下を監視します。

ビデオを視聴するか以下の指示に従って、ボタンの機能をテストします。

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

**1.**glasses1Button Get Variable ノードの右側にある、塗りつぶされていない白の円形アイコンを選択します。これはノード出力です。出力を選択すると、緑色の線が表示され、カーソルで動かすことができます。

**2.**On Button Click ノードの左側にある、塗りつぶされていない白の円形アイコンを選択して、2 つのノードを結び付けます。

いったん結び付けられると、**On Button Click** ノードの「This」値は表示されなくなります。これは、ノードが **glasses1Button** を割り当てられた変数として認識したためです。

2 つのノードの結び付きを解除するには、結び付けられた入力または出力のいずれかを右クリックします。

**3.**再生ボタンを選択して、Unity エディターでアプリケーションをテストします。

**4.**ゲームビューで最初のメガネアイコンを選択し、その操作の際に「Script Graph」ウィンドウを確認します。

2 つのノード間の接続線に沿って、glasses1Button に関連付けられたゲームオブジェクトの名前が表示されます。これは、**On Button Click** ノードが監視するボタンを示しています。このボタンがクリックされるたびに **On Button Click** ノードが点滅します。

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

うまく機能しています！ただし、これは少し確認しづらいかもしれません。現時点では、シーンをテストしながらスクリプトエディターを観察する必要があります。

**ノート**：コンソールに黄色の警告が表示されても心配しないでください。このためにプロジェクトでエラーが発生することはありません。

[Image: image]ステップを完了としてマーク

## 9. コンソールにメッセージを送信する

Q&A (0)

シーンで何が起きているかを簡単に把握できるようにするために、別のノードを使用してコンソールにメッセージを出力することができます。

ビデオを視聴するか以下の指示に従って、メッセージをコンソールに送信します。

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

**1.**もう一度**再生**ボタンを選択して、再生モードを終了します。

**2.**グラフエディターを右クリックしてファジーファインダーを使用します。

**3.**Debug Log (Message) ノードを探して選択します。

[Image: image]

**4.**新しい **Debug Log** ノードを選択し、「Graph Inspector」を確認します。

[Image: image]

「Graph Inspector」にはこのノードの目的が「Logs a message to the Unity Console（メッセージを Unity コンソールに記録）」と表示されており、これがまさに求めているものです。「Graph Inspector」では、このノードにコントロール（Flow）とデータ（Object）両方の入力があることも表示されます。データ入力には、「String or object to be converted to string representation for display（表示のための文字列または文字列表現に変換されるオブジェクト）」と表示されています。**文字列**は単語や文章を意味します。そのためにノードを作成します。

**5.**On Button Click ノードの右側のフロー出力（矢印アイコン）を、**Debug Log**ノードの左側のフロー入力（矢印アイコン）に結び付けます。

**6.**Debug Log ノードで、ノードの左側にある「**Message**」入力（円形アイコン）を選択し、接続線を作成します。

**7.**グラフエディターでファジーファインダーを開き、**String Literal** ノードを追加します。

**8.**String Literal ノードの空のフィールドに、「Button 1 pressed」と入力します。

[Image: image]

**9.**再生ボタンを選択してアプリケーションをテストします。

**10.**UI 上の最初のメガネボタンを選択し、Unity エディターの左下隅を確認すると、「Button 1 pressed」メッセージが表示されます。

[Image: image]ステップを完了としてマーク

## 10. 他にもトライしてほしいこと

Q&A (0)

さらなるスキルの向上や、新しいコンセプトの模索、現プロジェクトについての改善などを考えているのであれば、以下の任意のアクティビティもぜひ見るようにしてみてください。それぞれ「初級」、「中級」、「上級」のタグが付いているので、難易度を選択できます。

これらのアクティビティは完全に任意のものであるため、興味がなければこのステップはスキップしても大丈夫です。

ただ、今回の学習体験を最大限に生かすためにも、このアクティビティの内の 1 つは試してみることをお勧めいたします。頑張ってください！

#### 初級：ビジュアルスクリプティングをさらに学ぶ

このチュートリアルによってビジュアルスクリプティングに興味が持てたのであれば、「[ビジュアルスクリプティング入門チュートリアル](https://learn.unity.com/project/introduction-to-visual-scripting)」コースでさらに詳しく学んでみましょう。

#### 中級：Debug Log の警告とエラーを試す

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

Debug Log イベントを使用すると、メッセージをコンソールに送信することができ、コードのテストに役立ちます。Debug Log Warning イベントがメッセージをコンソールに送信しますが、これには、イベントに注意を向けさせるために感嘆符が付いた黄色の三角形アイコンも含まれています。コメントに注意を引き付けることで、プログラマーやプログラミングチームが警告をより真剣に受け止めるようになります。この課題では、ボタンがすでに押下されているときに別のボタンを押す危険性をユーザーに警告するビジュアルスクリプティンググラフを作成します。これを行うには、以下のビジュアルスクリプティングノードを使用する必要があります。

- Debug Log Warning

#### 上級：2 つの文字列をつなげて複雑なメッセージにする

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

プログラマーが何回も行うことになるタスクの 1 つは、文字列と文字列をつなげることです。このプロセスは**「連結」**と呼ばれます。Unity のすべてのゲームオブジェクトには名前があり、それは文字列値として格納されています。**glasses1** 変数の名前を別の文字列（例えば「was clicked」）につなげられるかどうか試してください。これを行うには、以下のビジュアルスクリプティングノードを使用する必要があります。

- **Get Variable Object**
- **Game Object Get Name**
- **String Literal**
- **String Concat（および 2 つの引数）**
- **Debug Log**

ステップを完了としてマーク

## 11. 次のステップ

Q&A (0)

このチュートリアルでは、最初のスクリプトグラフを作成し、ロジックの最初のブロックを構築しました。その過程で、グラフエディターの操作、ファジーファインダーの使用、ノードの処理、変数の作成を行う方法を学びました。また、データをコンソールに送信する方法も学びました。これはアプリケーションロジックの作成を続ける際に定期的に使用できる役立つツールです。

次のチュートリアルでは、メガネボタンでアプリケーションにメガネを表示できるように、ボタンの機能を拡張します。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
