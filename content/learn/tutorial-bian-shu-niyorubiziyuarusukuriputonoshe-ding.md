[Image: image]

# 変数によるビジュアルスクリプトの設定

Tutorial

Beginner

+10XP

20 mins

2

(66)

Unity Technologies

[Image: 変数によるビジュアルスクリプトの設定]Summary

変数は、プログラミングに欠かせないツールです。変数を使うと、スクリプトのユニットに入力された値を保存したり、計算したり、操作したりすることができます。

本チュートリアルでは、Visual Scripting を使用して、スコープや用途の異なる複数の種類の変数を作成および管理する方法を学びます。このチュートリアルを終える頃には、以下のことができるようになっています：

- Graph、Object、Scene の変数を作成し、その用途を説明する
- Blackboard を使った Graph への Get Variable ユニットの追加
- Inspector ウィンドウで変数を変更できるようにする
- Scene ビューおよび Game ビューで変数の値を調整するトラブルシューティング
- ビジュアルスクリプトのプロジェクトの Hierarchy に表示される Scene Variables オブジェクトについて説明する

Languages available:

日本語English日本語한국어日本語

## 1. 概要

Q&A (0)

**変数**(**Variables**)****は、変化する可能性のある値です。前のチュートリアルで行ったように、インラインの値を直接スクリプトにコーディングするのではなく、名前で表し、スクリプト内でその値を操作することができます。

**C# スクリプト経験者へのアドバイス：**ビジュアルスクリプティングでは、変数を管理するための新しいさまざまな方法が用意されています。このチュートリアルに従って、その方法を学んでください。

ステップを完了としてマーク

## 2. Blackboard で変数を作成

Q&A (0)

Blackboard は、数種類の変数を整理する場所です。本チュートリアルでは、この Graph、キューブのゲームオブジェクト、そしてこのシーンに関連する変数のみを使用します。ただし、変数はプロジェクト全体に適用することもできます。

まず、**Graph 変数**について説明します。Graph 変数は、定義されているグラフにのみ関係します。

**C# スクリプト経験者へのアドバイス：**Graph 変数は、C# スクリプトのプライベート変数と同じです。ただし、Visual Scripting では、C# コードにはない柔軟性を持って Graph 変数の値を試すことができます。

Graph 変数を作成してみましょう：

**1.**Transform:Rotate ユニットの 3 つの値をすべて 0 に戻します。

**2.**Blackboard では、**Graph**タブを選択します。

**3.**プロンプト**（New Variable Name）**が表示されたら、XRotate と入力し、**+** ボタンを選択します。**Type**と**Value**の新しいフィールドが表示されます。

**4. Type** には、**Float**（浮動小数点数、10 進数とも呼ばれる）を選択します。

**5. Value**について、**1** と入力します。

**6.**XRotate の定義の左端にある 2 本の横棒を見つけます。その横棒をグラフにドラッグします。「Graph」という種類の変数が選択された Get Variable ユニットが作成されます。

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

**7.**新しいユニットの出力を Transform:Rotate ユニットの **X Angle** 入力に接続します。Transform:Rotate ユニットのインラインの値が消えます。これは、その値が Get Variable ユニットから来ているからです。

[Image: image]

**ヒント：**また、Get Variable ユニットを追加する方法として、**X Angle**の入力から他のユニットがない状態（空きスペース）で接続する方法があります。マウスボタンを離すと、Fuzzy Finder が表示され、与えられたコンテキストに適したユニットのサブセットが表示されます。

ステップを完了としてマーク

## 3. オブジェクト型

Q&A (0)

この機会に、**オブジェクト型**について説明します。変数を作成すると、このドロップダウンリストから **Type** を指定するように促されます。

[Image: image]

頻繁に使用する可能性のあるオブジェクト型は以下の通りです：

- Float：23.456 や -0.9 などのような 10進数
- Integer：23 や -1 などの整数
- Boolean：True (真) や False (偽)
- String：「hello, world!」のような英数字の連続した文字
- Vector3：3D 空間で作業する際に便利な X, Y, Z の 3 つの浮動小数点数のセット
- Vector2：2D 空間を扱うための 2 つの浮動小数点数、X と Y のセット
- GameObject：シーン内のオブジェクト

Transform:Rotate のように入力が必要なユニットは、上のメニューに表示されているインジケーターで期待されるオブジェクト型を指定します。

一般的には、正しいオブジェクト型を提供することが重要です。例えば、あるユニットが True か False のどちらかを求めているのにもかかわらず、数値を提供した場合、エラーや予期せぬ結果が出る可能性があります。

ただし、ビジュアルスプリプティングは、他のスクリプト言語ほどオブジェクト型について厳密ではありません。Floats と Integers は両方とも青いドットを使用していることに注意してください。ビジュアルスクリプティングでは、これらの型は互換性があります。他のほとんどのプログラミング言語では、これらを互換的に使用しようとするとエラーが発生します。

緑色のドットが表示されている場合、ビジュアルスクリプティングは複数のデータ型を受け入れ、可能であれば変換を行います。

[オブジェクト型の詳細なリストと説明](https://www.google.com/url?q=https://docs.unity3d.com/Packages/com.unity.visualscripting@1.5/manual/vs-object-types.html&sa=D&source=editors&ust=1615469139963000&usg=AOvVaw2w2AlBehJNrrh3csT65U9a)は、Unity マニュアルに記載されています。ビジュアルスクリプティングで遭遇する可能性のある他のオブジェクト型を識別するには、Graph Inspector を使用します。

ステップを完了としてマーク

## 4. Graph 変数の操作

Q&A (0)

次に、新しい変数がどのように機能するか、そしてその値を変更するとどうなるかを見てみましょう。

**1. Play**ボタンを選択すると、キューブが X 次元に回転する様子を見ることができます。

**2.**Graph ウィンドウの上部にあるメニューで、**Values** ボタンを有効にします。コネクターにオブジェクト型のインジケーターと変数の値が表示されるのがわかると思います。

[Image: image]

**3.**Blackboard で、**XRotate** の値を**3** に変更し、その変化に注目してください。コネクターに 3 が表示され、キューブが速く回転します。

**4.**Play モードを終了します。**XRotate**の値は **1**に戻ります。これは、Play モードを開始する前に入力した最後のデフォルト値が 1 であったためです。変数値は Play モードで変更するとデフォルトに戻ります。Play モードで変更されたインラインの値のみが保存されます。

Graph 変数は、あるグラフの中で値を操作する必要がある場合に便利です。他の種類の変数のように、他のグラフからアクセスすることはできません。このプロジェクトの後半では、このグラフをさらに複雑にして、Graph 変数の有用性を確認することになります。

ステップを完了としてマーク

## 5. Object 変数の作成

Q&A (0)

このスクリプトは、あなたのチームのアーティストのために作成したと仮定してください。アーティストがこのスクリプトを編集することなく、キューブの回転を制御できるようにしたいとします。Object 変数を使うと、アーティストは Inspector から値を変更することができます。**Object 変数**はゲームオブジェクトに接続されており、ゲームオブジェクトが選択されると Inspector で変更することができます。

**C# スクリプト経験者へのアドバイス：**Object 変数は、C# コンポーネントスクリプトのパブリック変数と同じです。

Object 変数を作ってみましょう。

**1.**Blackboard で、**Object** タブを選択します。

**2.**プロンプト**（New Variable Name）**が表示されたら、YRotate と入力し、**+** ボタンを選択します。**Type** と**Value**の新しいフィールドが表示されます。

**3. Type** は、Float（浮動小数点数、10 進数としても知られている）を選択します。

**4. Value** には、1 を入力します。

**5.**YRotate の定義の左側にある 2 本の横棒を見つけます。それをグラフにドラッグしてください。 「Object」という種類の変数を選択して、Get Variable ユニットを作成します。Transform:Rotate ユニットと同様に、このユニットも「Self」、つまりこのスクリプトが接続しているあらゆるゲームオブジェクトに対して作用します。

**6.**新しいユニットの出力を、Transform:Rotate ユニットの**Y Angle**入力に接続します。

[Image: image]ステップを完了としてマーク

## 6. Object 変数の操作

Q&A (0)

Graph 変数の時と同じように、Object 変数の値を変更して、何が起こるか見てみましょう。

**1.**Scene ビューで、キューブを選択し、Inspector ウィンドウを見ます。**Variables**というタイトルのセクションを探します。

**2.**Scene ビューの状態で、Inspector で **YRotate**の値を **3** に変更します。Blackboard (Object タブ) でも値が変更されていることにご注意ください。Blackboard と Inspector のこの値の表示は常に同じです。

**3.**Play ボタンを選択し、キューブが回転する様子をご覧ください。

**4.**Play モードで、Inspector で、**YRotate**の値を 1 に戻し、Scene ビューと Blackboard の変化に注目してください。

**5.**Play モードを終了します。**YRotate** の値は、Play モードを開始する前に入力した最後のデフォルト値である **3** に戻ります。

**6.**保存 (Ctrl / Cmd S) します。

Object 変数の値は、Scene ビューでも Game ビューでも変更可能ですが、Scene ビューで行った値は残り、Game ビューで行った変更は失われます。

Object 変数はゲームオブジェクトに「属する」ものであり、Graph に属するものではないことを覚えておくとよいでしょう。

ステップを完了としてマーク

## 7. 1 つのグラフ、2 つのゲームオブジェクト

Q&A (0)

では、これらをまとめて、複数のゲームオブジェクトでスクリプトを使用した場合の変数の振る舞いを詳しく見ていきましょう。

**1.**Graph で、以下のように値を設定します：

- Blackboard の **Graph**タブで、XRotate を 0 に設定します。
- Blackboard の**Object**タブで、YRotate を 0 に設定します。
- Graph の Transform:Rotate ユニットで、**Z Angle**を**3**にしてください。

**2.**キューブを複製します。新しいキューブを Main Camera の前に置き、Play モードで両方が見えるようにします。

**3.** 2つのキューブを見分けるには、サンプルシーンに付属しているマテリアルを使って、異なる色をつけてください。ここでは、元のキューブに Plastic_Yellow_Mat を、新しいキューブに Plastic_WhiteMat (**Assets > ExampleAssets > Materials** フォルダ内) を使用しました。それぞれCube1、Cube2という名前に変更しました。

[Image: image]

**4.**両方のキューブのゲームオブジェクトが、同じ Rotate というタイトルのグラフを使用していることにご注意ください。また、両方のゲームオブジェクトは YRotate 変数を持っています。

**5.**どちらかのキューブ (両方は不可) で**YRotate**の値を変更します。

**6.**Play モードに入ります。1 つのキューブを選択し、次にもう 1 つのキューブを選択すると、グラフが表示されます。同じグラフですが、ゲームオブジェクトがそれぞれ独自の YRotate 変数を持っているため、Y Angle へのコネクターに異なる値が入っていることがわかります (コネクターに記号や数字が表示されない場合は、**Values**ボタンを有効にしてください)。Blackboard の Inspector または **Object** タブで、**YRotate** を試してみてください。

**7.**Play モードで、Blackboard の**Graph**タブにある **XRotate**の値を実験してください。なぜ、各キューブの XRotate 値が異なるのでしょうか？ゲームオブジェクトごとに Graph の**インスタンス**が動いているからです。

**8.**Play モードを終了すると、グラフにハードコードされている Z Angle を変更した場合を除き、すべての値がデフォルトに戻ります。

この演習の目的は、変数の値をどのように実験できるかを示し、ある結果が得られる理由を説明することです。

- Graph 変数はグラフに属します。Blackboard では、デフォルト値を設定します。Play モードでは、プロジェクトを再生する際に別々のインスタンスが実行されるので、その Graph 変数のデフォルト値をゲームオブジェクトごとに個別に一時的に変更することができます。
- Object 変数は、ゲームオブジェクトに属します。Scene ビューでゲームオブジェクトごとに異なるデフォルト値を設定し、Play モードで一時的にこの値を変更することができます。

ステップを完了としてマーク

## 8. 変数を使って試してみよう

Q&A (0)

ビジュアルスクリプティングの変数に関する知識を試すために、これらの演習を自分でやってみましょう。

#### 1 つのキューブの YRotate 変数を削除する

Inspector (ブラックボードではない) で、1 つのキューブの YRotate 変数を削除します。プロジェクトを再生して、グラフを見てください。何が起きているのでしょうか？

Get Variable ユニットのヘッダーに、エラーを示す赤が表示されるはずです。詳細は Graph Inspector を参照してください。変数を再定義して、エラーを修正することができます。

#### Z Angle の値の Scene 変数を作成する

**Scene 変数**の作成方法は、他の変数と同様に Blackboard の Scene タブを使用します。Scene 変数を作成し、Graph の Z Angle プロパティを制御します。お察しの通り、Scene 変数は Scene に属します。

Scene 変数の値を変更するには、Hierarchy の**Scene Variables**というオブジェクトを選択し、Inspector で値を変更します。

- この値を Scene ビューや Play モードで変更するとどうなるのでしょうか？
- この変数を新しいゲームオブジェクトの新しいグラフで使うとどうなるのでしょうか？

ステップを完了としてマーク

## 9. 次は何をするの？

Q&A (0)

**プログラミングが初めての方**や、基本を復習したい方は、このプロジェクトの次のチュートリアルに進んでください。分岐を用いてスクリプトのフローを制御するユニットを追加していきます。また、数学的な計算や時間の測定も行います。コンピューターのキーボードからユーザーの入力を検出します。その過程で、あなたの Unity プロジェクトで Visual Scripting をどのように使うかについて、新しいアイデアを得ることができます。その後、チャレンジタスクをクリアして、「Clive the Cat's Visual Crypting」へと進み、動作するゲームでスクリプトを作成する準備が整います。

**プログラミングの経験がある方**なら、ビジュアルスクリプティングのユーザーインターフェースと変数のスコープについて、十分な入門知識をお持ちだと思います。あとは、通常のプログラミング構成（分岐、ループなど）と Unity Scripting API を表す多くのユニットを自由に使えるように、練習を重ねて慣れればよいのです。このプロジェクトの最後にある[チャレンジ](https://learn.unity.com/tutorial/challenge-control-your-character-with-visual-scripting)に、気軽に飛び込んでみてください（必要なユニットを見つけるためのヒントを提供します）。その後、「Clive the Cat's Visual Crypting」で Super ユニット、Events、States など、より高度な概念を学びます。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
