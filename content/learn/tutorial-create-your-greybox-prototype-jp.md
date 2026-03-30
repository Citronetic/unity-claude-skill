[Image: image]

# グレーボックスプロトタイプの作成

Tutorial

Beginner

+10XP

30 mins

0

Unity Technologies

[Image: グレーボックスプロトタイプの作成]Summary

プランニングが完了したら、Unity での作業を開始しましょう。まずはプロトタイプのグレーボックスで作業します。プリミティブな 3D シェイプ（グレーが多い）を使ってシーンをブロック化し、基本的な機能を実装することができるようにします。

このチュートリアルが終わるころには、次のことができるようになります：

- 基本的な機能のプロトタイプをグレーボックスで作成
- サードパーティ製キャラクターコントローラーのインポート

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

プランニングが完了したら、いよいよ Unity での作業を開始します！ここでは、基本的な機能を実装できるように、プリミティブな 3D 形状（多くの場合グレー）を使用してシーンをブロックアウトして、プロトタイプのグレーボックスで作業することから始めます。

このチュートリアルでは、次のことを行います：

- サンプルプロジェクトのグレーボックスのステージを確認
- プロトタイプの新しい Unity プロジェクトを設定
- プロトタイピングのグレーボックスを作成

#### プロトタイプのサンプルについて

今回作成したサンプルは、コーディング経験のない方が作るような、ウォーキングシミュレーターです。この参考用サンプルは、あなたの学習の旅をサポートするために使用することができますが、あなた自身のプロトタイプのための正確な青写真ではないことを忘れないでください。あなたの目標は、私たちが提供したものとまったく同じ体験を再現することではなく、プロトタイプの作成プロセスに対する理解を深めることなのですから。

ステップを完了としてマーク

## 2. グレーボックスプランの確認

Q&A (0)

グレーボックスのプロトタイプそのものを探求する前に、それを作るために使われたプランを数分かけて確認しましょう。

#### 中核的インタラクションと体験のデザイン

ウォーキングシミュレーターのサンプル例では機能は非常にシンプルです。プレイヤーは以下のことができます：

- 空間を動き回る
- イベントを発生させる
- ボタンで操作する

私たちはサンプルの体験を非常にシンプルなパズルのようなものにしたいと考えました：

1. プレイヤーは跳ね橋によって閉ざされた場所に閉じ込められています。操作するためのボタンがあるが、機能しません。
2. プレイヤーは、床に置かれた圧力板を見つけて操作し、ボタンを作動させる（イベントを発生させる）必要があります。
3. ボタンが作動すると、プレイヤーはそのボタンを操作して跳ね橋を降ろし、閉ざされたエリアから出ることができるのです。

#### 空間の基本的なレイアウト

サンプルのプロトタイプを作っているクリエイターは、作りたい空間を簡単に図に描きました。下の画像は、そのシーンの空間を表しています。これは、プリミティブを使って Unity エディターで基本的なグレーボックス環境を構築する際に役立つリソースとなりました。

[Image: image]

これはとてもシンプルなデザインですね。確かに、このパズルには謎めいた要素はありません。ただし、これはデザイナーがコアとなるインタラクションのコードをテストするために必要なものです。

この空間のレイアウトだけで、プロジェクトを以下のような構成になるようにしました：

- プレッシャープレートを踏むと、ボタンが有効になる
- ボタンを選択すると、跳ね橋が下がる

ステップを完了としてマーク

## 3. Unity のグレーボックスプロトタイプのサンプル検証

Q&A (0)

自分のプロトタイプに取り組む前に、数分かけてUnity のグレーボックスプロトタイプのサンプルシーンを確認してください：

**1.**  Unity エディターで**Creative Core: Prototyping** プロジェクトを開きます。

**2.**  Project ウィンドウで、**Assets > CreativeCore_Prototyping > Scenes** の順に進みます。**1-Greybox**シーンを開きます。

[Image: image]

**3.**  実際に体験そのものをテストする前に、シーンがどのように設定されているかを確認します。

**4.**  **Play**を選択すると、Play (再生) モードになり、プロトタイプを探索することができます。キャラクターコントローラーは一人称視点の FPS 型コントローラーです。できることは：

- マウスやコントローラーで向きを変える。
- **矢印キー**または **WASD**キーで移動する。
- **E** を選択するか、選択可能なアイテムをクリックすると、カーソルが小さな手に変わる。

**注：**画面の真ん中に小さな白い点があります。これは、ナビゲーションと乗り物酔いを防ぐためのものです。

**5.**  再生が終わったら、もう一度**Play**を選択して、Play モードを終了します。

これで、独立したプロジェクトのためのグレーボックスプロトタイプを作成するための準備が整いました。

ステップを完了としてマーク

## 4. プロジェクトの設定

Q&A (0)

独立したプロジェクトに使用するプロトタイプのグレーボックスの作成を始める前に、そのための新しい Unity プロジェクトを設定する必要があります。

プロジェクトの設定方法：

**1.** [**Unity 2020.3 LTS**](https://learn.unity.com/tutorial/project-setup-processes#60ed7a3fedbc2a001f71f1aa) をインストールしていない場合はインストールします。

**2.** **URP Template** を使用して、新規で [Unity プロジェクト](https://learn.unity.com/tutorial/project-setup-processes#60f6aedeedbc2a7e96802196)を作成します。

**3.** Unity プロジェクトに[バージョン管理を設定](https://learn.unity.com/tutorial/set-up-version-control)します。

**重要：**このバージョン管理の設定に関するガイダンスは、Junior Programmer パスウェイの一部であり、特定のプロジェクトの設定に言及しています。ただし、このガイダンスは、どのようなプロジェクトにも適用できます。

ステップを完了としてマーク

## 5. サンプルプロジェクトからアセットをインポート

Q&A (0)

コーディングの経験が少なく、サンプルに忠実なウォーキングシミュレーターを作成する場合は、その体験のために設定した同じアセットと限定的なカスタム機能を使用するとよいでしょう。

そのためには、アセットをカスタムパッケージとしてエクスポートし、それを自分のプロジェクトにインポートする方法があります：

**1.**  Unity エディターで **Creative Core: Prototyping** のサンプルプロジェクトを開きます。

**2.**  トップメニューの **Assets > Export Package** と選択し、Exporting パッケージのダイアログウィンドウを開きます。

**3.** パッケージに含めたいアセットを選択します。

**4.**  **Include dependencies** が選択されていることを確認し、選択したアセットに必要なアセットが含まれていることも確認してください。

**5.**  **Export...** を選択し、パッケージファイルの保存場所を指定して、保存します。

**6.**  Unity エディターで新規プロジェクトを開きます。

**7.**  上部メニューの**Assets > Import Package > Custom Package...** の順に進みます。

**8.**サンプルプロジェクトからエクスポートした .unitypackage ファイルを探し、**Open**を選択します。

**9.**今インポートしたコードは、デフォルトでは持っていないかもしれない 2 つのパッケージ（**Input System**と**Cinemachine**）を使用しています。どちらかを選んでください：

- [Package Manager でパッケージをインストール](https://learn.unity.com/tutorial/project-setup-processes#60ed7a6aedbc2a002520b6ec)します。
- すでにプロジェクトに追加されている場合は、[パッケージのインストールを更新](https://learn.unity.com/tutorial/project-setup-processes#60ed7a7aedbc2a27bef4847e)してください。

**注：**Input System パッケージをプロジェクトにインストールすると、ダイアログウィンドウでプロジェクトを新しい Input System に切り替えるかどうか確認するように求められるます。**Yes** を選択して確認します。これにより、Unity エディターが再起動します。

**10.**  プロジェクトを保存します。

ステップを完了としてマーク

## 6. キャラクターコントローラーの追加と設定

Q&A (0)

あらかじめ作成されたキャラクターコントローラーは、最初のプロトタイピングをスピードアップさせるのに最適な方法です。[Unity で作成された **Starter Assets**](https://assetstore.unity.com/packages/essentials/starter-assets-third-person-character-controller-196526?version=2020&publisher=Unity%20Technologies&q=starter%20assets%20character%20controller&orderBy=1) がお勧めです。これは、一人称および三人称のキャラクターコントローラーで、すぐに使い始めることができます。

**重要：**Starter Assets は、今回の学習で提供される Unity プロジェクト用教材と同様に、**Unity 2020.3 LTS** に対応しています。旧バージョンの Unity の使用は推奨しませんが、旧バージョンを使用する場合は、代替のキャラクターコントローラーを用意する必要があります。

前のステップで、サンプルプロジェクトのアセットをインポートした場合、すでにプロジェクトに Starter Assets First Person Character Controller が入っているはずです。そうでない場合は、プロジェクトにキャラクターコントローラーをインポートする必要があります：

**1.**  Asset Store で選択したキャラクターコントローラーを開きます：

- [First Person Character Controller](https://assetstore.unity.com/packages/essentials/starter-assets-first-person-character-controller-196525)（一人称視点）
- [Third Person Character Controller](https://assetstore.unity.com/packages/essentials/starter-assets-third-person-character-controller-196526)（三人称視点）

サンプルのプロトタイプに近いウォーキングシミュレーターを作る場合は、一人称視点のコントローラーを選択するとよいでしょう。

**2.** [アセットをダウンロードし、Unity プロジェクトにインポート](https://learn.unity.com/tutorial/project-setup-processes#60ed7a86edbc2a002520b6f4)します。

**重要：**Input System と Cinemachine のパッケージでは、スターターアセットをインポートしてインストールするとプロジェクトに自動的にインストールされます。プロジェクトを新しい Input System に切り替えるかどうかを確認するダイアログウィンドウが表示されるので、**Yes**を選択して確認します。これにより、Unityエディターが再起動します。

**3.**  Project ウィンドウから**Assets > CreativeCore_Prototyping > StarterAssets** の順に進み、パッケージのドキュメントとライセンス条項をすべて確認します：

- Readme.asset
- StarterAssets_Documentation.pdf
- license.txt

**4.**  **Assets** > **CreativeCore_Prototyping** > **StarterAssets** > **FirstPersonController**(または、**ThirdPersonController**) > **Scenes** と進み、**Playground** シーンを開いてサンプルシーンを探索します。

**5.**  コントローラーを選択する際には、まずドキュメントをご覧ください。

ステップを完了としてマーク

## 7. カスタムのスクリプトコンポーネントの見直し

Q&A (0)

もし、あなたの体験に以下のスクリプトコンポーネントを使用する予定があるなら、今、時間をとって頂き、この学習体験のために用意されたカスタムのスクリプトコンポーネントの機能を確認してください。

#### OnInteract

このスクリプトコンポーネントは、ユーザーがシーン内のゲームオブジェクトとインタラクトしたときに発生する 1 つまたは複数のイベントを指定します。このスクリプトは、Collider コンポーネントを持つゲームオブジェクトにのみ追加することができます。

[Image: image]

以下を設定できます：

- **Is One Shot：**ゲームオブジェクトをユーザーが操作したときに、Event が一度だけ発生するか、いつでも発生するかを設定。
- **Cooldown：**イベントが繰り返される場合に、そのイベントが再び発生するまでの秒数。
- **On Interact Event ()：**このコンポーネントが追加されたゲームオブジェクトをユーザーが操作した時に発生するイベント (Event) のこと。Event を追加するには、**Add** (**+**) を使用する。

#### OnTriggerEvent

このスクリプトコンポーネントは、トリガーとして設定されたコライダーによって定義されたエリアにユーザーが入ったり出たりするときに起こる 1 つまたは複数のイベントを指定します。このスクリプトは、Collider コンポーネントを持つゲームオブジェクトに追加することができます。これは、その Collider コンポーネントの**Is Trigger**プロパティが有効になっている場合にのみ動作します。

[Image: image]

以下を設定できます：

- **[Trigger Enter](https://docs.unity3d.com/ScriptReference/Collider.OnTriggerEnter.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954231640) Events：**これらのイベントは、このスクリプトが適用されているゲームオブジェクトの Collider bounds にゲームオブジェクトが入ったときに発生する。
- **[Trigger Exit](https://docs.unity3d.com/ScriptReference/Collider.OnTriggerExit.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954231640) Events：**これらのイベントは、ゲームオブジェクトがこのスクリプトが適用されているゲームオブジェクトの Collider bounds から外れたときに発生する。
- **Is One Shot：**各セクションのイベントが 1 回だけ発生するか、ユーザーがゲームオブジェクトの Collider bounds に入ったり出たりするたびに発生するかを設定する。
- **Cooldown：**各セクションのイベントが繰り返される場合、再び発生するまでの秒数。

#### Interact Handler

このスクリプトコンポーネントは、あなたの体験でインタラクションがどのように処理されるかを制御します。 [経験の浅い方にお勧め](https://learn.unity.com/tutorial/create-your-greybox-prototype?publish=true#619e7b57edbc2a5554f094a4)するように、サンプルプロジェクトからアセットをインポートした場合、すでに設定されています。必要であれば、このコンポーネントは **PlayerCapsule**ゲームオブジェクト (**PlayerSetup** の子) で見つけることができます。

[Image: image]

設定可能な 3 つのプロパティ：

- **UI Prefab：**体験の UI プレハブを割り当てる。これは、サンプルプロジェクトからアセットをインポートした場合、すでに設定されている。
- **Interactable Pointer：**ユーザーがインタラクティブなオブジェクトにマウスを置いたときに、カーソルやポインターのアイコンとして表示されるスプライトを指定する。
- **Normal Pointer：**通常のカーソル/ポインターのアイコンとして表示されるスプライトを割り当てる。

ステップを完了としてマーク

## 8. 独自のプロトタイプグレーボックスの作成

Q&A (0)

サンプルを確認し、Unity プロジェクトを設定した後、時間をかけて独自のグレーボックスを作成してください。

**ヒント：**

- より複雑な形状を作ったり、アセットをインポートするのではなく、とりあえずプリミティブをプレースホルダーとして使うなどシンプルにすることが大切です。地面には Plane (平面)  プリミティブを使うことができます。
- プリミティブなプレースホルダーで、欲しい環境を正確に再現することに悩む必要はありません。このバージョンはシンプルであればあるほど良いのです！
- 作業中はこまめに保存することを忘れずに。
- 基本的な機能の実装に苦労している場合は、[Unity Learn](https://learn.unity.com/) や [Unity Forums](https://forum.unity.com/) の他のコンテンツなど、さまざまなリソースが利用できることを覚えておいてください。

#### 反復処理を行う

グレーボックスプロトタイプがしっくりくるまで、何度か調整したり、イテレーションを行う必要があるかもしれません。また、最初のアイデアに戻って、別のアプローチを試す必要があるかもしれません。

次の動画では、専門のクリエイターがプロトタイピングの段階でプロジェクトが変化していった実体験を紹介しています：

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

このグレーボックスの段階でも、それ以降でも、アプローチやプロトタイプ全体を変更する必要があれば、ピボットすることは問題ありません。

ステップを完了としてマーク

## 9. テストしながら進める

Q&A (0)

この学習では、もう少し後でテストについて詳しく調べますが、プロトタイプを作成する上で、テストをしながら進めることは重要なことなのです。プロトタイプに必要な基本機能を実現するまでは、グレーボックスの段階から進めても意味がありません。この段階でも、探索の一環として調整することがあります。

ターゲットとするユーザー/プレイヤーのニーズを考える時間を持ちましょう。プロトタイプを反復処理する際の意思決定に、これらを織り込んでいますか？プロトタイプ開発のどの段階でも、この問いに立ち返り、評価することが重要です。

ステップを完了としてマーク

## 10. 次のステップ

Q&A (0)

グレーボックスが完成したら、次のチュートリアルに進み、基本的なプロトタイプの改良について学びましょう。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
