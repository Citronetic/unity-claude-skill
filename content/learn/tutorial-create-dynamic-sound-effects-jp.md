[Image: image]

# 動的なサウンドエフェクトの作成

Tutorial

Beginner

+10XP

35 mins

0

Unity Technologies

[Image: 動的なサウンドエフェクトの作成]Summary

このチュートリアルでは、プレイヤーキャラクターに足音のサウンドエフェクトを追加して、複雑なサウンドスケープを作成するプロセスを開始します。

このチュートリアルが終わるころには、次のことができるようになります：

- オーディオクリップを再生するために、トリガーやイベントなど、タイムベースやアクションベースのメソッドを選ぶことができる
- 雰囲気作りのためのオーディオの役割について説明できる

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

先に述べたように、デジタル体験に信憑性を持たせるためには、オーディオが非常に重要です。**Unity Essentials** のオーディオミッションの作業をしたことがない場合、または知識を新たにしたい場合は、先に進む前にこの手順を実行するとよいでしょう。Essentials の Audio ミッションは[こちら](https://learn.unity.com/project/foundations-of-real-time-audio)でご覧いただけます。

オーディオは、開発の中でもエキサイティングな領域です。リアルタイム 3D 体験のためのオーディオ作成について、クリエイターの考えを聞いてみましょう：

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

オーディオは、その重要性にもかかわらず、見落とされがちです。スクリプトのエラーやアクセシブルな UI 設計など、取り組むべき課題は他にもたくさんあるため、クリエイターとしてはオーディオのことを忘れがちになるのです。ただし、オーディオが全くないインタラクティブ体験や、デザイン性の低いオーディオほど、不協和音を感じさせがちなものはありません。このチュートリアルでは、プレイヤーキャラクターに足音のサウンドエフェクトを追加して、複雑なサウンドスケープを作成する手順を説明します。

ステップを完了としてマーク

## 2. シーンにおけるニーズの把握

Q&A (0)

オーディオエフェクトを重ね合わせることで、完全なサウンドスケープを作り上げることができます。ですから、まずはユーザーがゲームを操作する際に最も一貫して聞こえる音、つまりプレイヤーの足音から作りましょう。

足音というのは、静かにしようと思ったり、誰かの声を聞いたりしない限り、現実世界では気にしないことが多いものです。ただし、足音はその環境について多くのことを教えてくれます。できれば、いくつかの異なる種類の地面で、時間をとって、身近なところを歩いてみてください。カーペットの上では、足音はどう聞こえるのでしょう？むき出しの床、レンガ、木の上ではどうでしょう？靴を履いているときと裸足のときでは、足音はどうでしょうか？変数が変わると、それぞれ違う音が出ます。

シーンをよく見ると、プレイヤーが移動できる地表面は、実は「広い草原」「浅い池」「石の洞窟」の 3 つであることがわかります。3 つの表面すべてで、異なるタイプの足音が出るはずです！

[Image: image]ステップを完了としてマーク

## 3. アニメーションイベントの追加

Q&A (0)

足音については、キャラクターの足が地面に着く瞬間に再生される音を作りたいところです。Unity では、**Animation Event**(**アニメーションイベント**) を使って、キャラクターの動きの特定の部分にサウンドエフェク トを関連付けることができます。**アニメーションイベント**はキーフレームと非常によく似ていますが、キャラクターに特定の動きを指示するのではなく、スクリプトで何かを実現するために使用できるメッセージを送信します。これを利用して、あらかじめ用意されたスクリプトを呼び出し、足音音を再生します。

**1.**  以下の順に選択して、Animator Controller の Animations フォルダーへ移動します：

**Assets** > **CreativeCore_Audio** > **StarterAssets** > **ThirdPersonController** > **Character** > **TutorialAnimations**

**2.**  **Locomotion--Walk_N** アニメーションを選択して、Inspector で選択します。

**3.**  Inspector で Animation タブを選択し、Events セクションを展開します。

[Image: image]

Event セクションには、小さなタイムラインと送信可能な各種データのリストが表示されますが、最初のイベントを追加するまでは、これらはグレーアウトされたまま使用できません。

**4.**アニメーション名の横にある二重線を左クリックしてドラッグし、Inspector の下部にある Animation Preview ウィンドウのサイズを大きくします。

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

キャラクターの足が地面に着く正確な位置にアニメーションイベントを配置する必要があります。そのためには、まずアニメーションのその位置を特定する必要があります。これは、Preview ウィンドウでキーフレームを手動でスクロールすることで実現できます。このプロセスは、**スクラブ**（**scrubbing**）と呼ばれています。アニメーションをスクラブするには、Animation Preview ウィンドウの**Play** ボタンの右側にあるグレーのバーを左クリックし、ドラッグします。アニメーションをスクラブすると、Event タイムラインはプレビューしているアニメーションの位置を反映するように調整されます。

**5.**キャラクターの左足が地面に着く瞬間（約 9 フレーム目）を見つけるまで、アニメーションをスクラブします。

**6.**Inspector の Event セクションに戻ります。**Add Event** ボタンをクリックします。

[Image: image]

アニメーションの指定した位置の Event タイムライン上に小さなフラグアイコンが表示されます。これにより、タイムラインの直下にあるデータ型が有効になります。

**7.**  関数パラメーターに「PlayStep」と入力します。これはチュートリアルの後半にあるスクリプトで参照されるので、ここに示すようにスペルと大文字小文字を正確に入力することが重要です。

[Image: image]

**8.**アニメーションをスクラブしてイベントを作成し、キャラクターの右足の動きに合わせて関数を PlayStep に設定するという作業を繰り返します。

**9.**  Inspector の下部で、**Apply**ボタンをクリックして、アニメーションのイベントを保存します。

**10.**  Animations フォルダーにある Run と Jump Landing アニメーションを探し出し、キャラクターの足が地面に着く瞬間にイベントを追加する作業を繰り返します。各アニメーションが終了したら、イベントを適用することを忘れないでください。

ステップを完了としてマーク

## 4. オーディオスクリプトの適用

Q&A (0)

プレイヤーキャラクターの足が地面に着くと、アニメーションがイベントリクエストを送信するように設定されました。このイベントの呼び出しは、アニメーションが接続されているオブジェクトに対して行われますので、足音を管理するスクリプトは、プレイヤーキャラクターに適用する必要があります。 実際にアニメーションの音を再生するためには、プレイヤーキャラクターにも Audio Source を追加する必要があります。

**1.**  プロジェクトの Scripts フォルダーにある FootstepManager スクリプトを探します。Hierarchy の ThirdPersonController の次にある PlayerArmiture オブジェクトに、スクリプトを追加します。

**2.**  プレイヤーを選択したまま、Inspector の **Add Component** ボタンをクリックし、Audio Source を検索して選択します。

ステップを完了としてマーク

## 5. オーディオスクリプトの探索

Q&A (0)

FootstepManager のスクリプトを少し見てみましょう。Inspector のドロップダウンには、Grass Steps (草原のステップ)、Water Steps (水のステップ)、Cave Steps (洞窟のステップ) の 3 つがあり、3 種類のステップ音が必要です。これらのドロップダウンは、複数の足音用リストを示します。なぜそれが重要なのかは、後ほど説明します。

[Image: image]

スクリプトに含まれるプログラミングをよりよく理解したい場合は、Footstep Manager スクリプトをダブルクリックして Visual Studio を開き、以下の注記を参照してください：

- OnControllerColliderHit メソッドは、関連するタグをチェックすることで、プレイヤーが歩いている地表面の種類を検出します (次のステップでは、シーン内の地表面にタグを適用しますが、今は、このメソッドが常に実行されていてプレイヤーが立っている場所を確認していることだけを知っておいてください。)

シーンでイベントが再生されると、PlayStep メソッドが呼び出され、Inspector で見たオーディオリストからランダムにオーディオクリップが選択され、それが再生されます。

ステップを完了としてマーク

## 6. シーン内表面にタグをつける

Q&A (0)

再生するオーディオクリップを知るために、FootstepManager はまず、プレイヤーがどのような地表面に立っているのかを知る必要があります。これは、タグを使用することで実現します。

**1.**Scene ビューで草原の地表面を選択します。Inspector の上部で Tag と書かれたドロップダウンを選択し、リストの下部で、Add Tag を選択します。

[Image: image]

**2.**  Tags と Layers で、新しいタグを追加するために**+**ボタンを選択します。新しいタグに「Grass」という名前を付けます。スクリプトで呼び出せるように、単語のスペルと大文字小文字を正しく入力してください。

**3.**さらに、Water と Cave という 2 つのタグを作成します。

**4.**  もう一度、Scene ビューで草原の表面を選択します。タグを Grass に設定します。

[Image: image]

**5.**  Scene ビューで水面を選択し「Water」というタグを付けます。

**6.**  Scene ビューで洞窟を選択し「Cave」というタグを付けます。

ステップを完了としてマーク

## 7. 足音クリップの追加

Q&A (0)

足音スクリプトが、プレイヤーキャラクターが立っている場所やその上にあるものに基づいて適切な音声を再生するように、シーンが適切に設定されました。あとは、足音のオーディオクリップを追加するだけです。なぜ、1 つのオーディオクリップの変数ではなく、複数の足音のためのリストがあるのでしょうか？1 つのオーディオクリップで試してみて、結果を確認してみましょう。

**1.**  Audio フォルダー内で、Grass Steps を 1 つ選択し、Grass Steps 変数の上にドラッグします。これで自動的にリストに追加されます。

**2.**  前のステップを水と洞窟のステップで繰り返し、FootstepManager  の 3 つのステップ変数に、それぞれ 1 つずつオーディオクリップを割り当てます。

**3.**  シーンの再生テストを行います。数分間、エリア内を走り回り、さまざまな地表面を横切って、足音が動的に変化するのを聞いてみてください。

最初はわからないかもしれませんが、時間をかけて走り回れば、やがて足音がすべて同じに聞こえることに気がつくはずです。ある足音は他の足音より目立つかもしれませんが、やがて、どれも同じ音が何度も繰り返されていることに気がつくでしょう。

プレイヤーキャラクターは、ユーザーが体験するすべてのシーンで一貫して登場するものですから、このようなオーディオエフェクトが繰り返されると、やがて気が付き、かなり煩わしくなることは間違いありません。また、これは実世界の人の動きを反映したものではありません。人は一歩一歩、足の置き方が変わるので、結果的に音も大きく変わってきます。何百種類もの足音のオーディオクリップを用意することは合理的ではありませんが、ほんの一握りでもあれば、繰り返しのエフェクトに気づかれないようにすることができます。

必要なバリエーションを追加する時です。

**4.**  オーディオフォルダー内のすべての Grass Steps を選択し、Grass Steps の変数の上にドラッグしてリストに割り当てます。

**5.**  水と洞窟のオーディオクリップについて前のステップを繰り返します。

**6.**  このシーンをもう一度再生してみましょう。動き回ると、足音がより動的になり、繰り返しがかなり少なくなっていることに気づくはずです。

ステップを完了としてマーク

## 8. 足音をカスタマイズする

Q&A (0)

前回のチュートリアルで検証したように、音はシーンの雰囲気を変えるのに大きな役割を果たすことがあります。Unity では、オーディオクリップの切り替えが非常に簡単で、さまざまなオーディオシナリオを迅速にイテレーションすることができます。

表面ごとにオーディオクリップを切り替えてみて、どのようにシーンが変わるか試してみてください。草を踏む音が、葉っぱや枯れ草を踏みしめる音のように聞こえたらどうだろう。水しぶきの代わりに、水面を踏むと氷が割れるような音がしたら？

**Unity Essentials** の **Audio** ミッションで、オーディオファイルにアクセスする場所と方法について少し学びましたね。もし復習が必要なら、[こちら](https://learn.unity.com/tutorial/get-audio-assets?uv=2019.4&missionId=5f777d9bedbc2a001f6f5ec7&pathwayId=5f7bcab4edbc2a0023e9c38f&contentId=5f777f61edbc2a2315d49058&projectId=5faab859edbc2a00209536ce#5facb7a4edbc2a2003a58874)でチュートリアルを再確認してください。Unity はさまざまなオーディオファイル形式に対応していますので、検索する際には、次の .aif, .wav, .mp3, .ogg を念頭に置いてください。

Unity アセットストアやチュートリアルで参照した他のリソースに加え、[**Open Game Art**](https://opengameart.org/) や [**FreeSound.org**](https://freesound.org/) でも膨大な種類のサウンドエフェクトを見つけることができます。オーディオ設計全般に興味がある方は、スマホで音声を録音してオリジナルの効果音を作ってみるのもいいかもしれませんね。

オーディオをどのように入手するかにかかわらず、そのオーディオがどのようなライセンスを持っているか、また、自分のプロジェクトで使用できるかどうかを確認する必要があります。信頼できるリポジトリは、Open Game Art で見られるように、オーディオファイルのライセンスタイプを明確にマークしています：

[Image: image]

クレジット表記があれば自由に使えるオーディオファイルの場合、必ず原作者のクレジットを表記してください。

オーディオ設計は、練習すればするほど上達します。この機会に、小さな規模でオーディオの実験をして、どんなシーンができるか試してみましょう！

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
