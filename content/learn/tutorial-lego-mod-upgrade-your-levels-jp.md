[Image: image]

# レゴ® Mod：ステージをアップグレードする

Tutorial

Beginner

+10XP

20 mins

3

(12)

Unity Technologies

[Image: レゴ® Mod：ステージをアップグレードする]Summary

レゴ® マイクロゲームに新しいステージを追加しながら、レベルデザインの基礎を学びましょう。

Resources

- [LEGO® Behaviour Brick Manual.pdf](https://unity-connect-prd.storage.googleapis.com/20201025/c4f0b8f1-9340-4785-9cd4-19315c0ee44f/LEGO%C2%AE%20Behaviour%20Brick%20Manual.pdf?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035317893)

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

このクリエイティブ Mod では、レゴ® マイクロゲームに 2 つ目のステージを追加しながら、レベルデザインの基礎を学びます。では始めましょう。

ステップを完了としてマーク

## 2. 始める前に

Q&A (0)

#### **エディター内チュートリアル**

この Mod を始める前にレゴ® マイクロゲームのエディター内チュートリアルを終えておくとさらに学習効果が見込めます。ご自分のペースで、時間をかけて学んでいってください。

#### **マイクロゲームを開く**

レゴ® マイクロゲームを開くには、次のようにします。

**1.**  Unity Hub を開きます。

**2.**  マイクロゲームを使ったことがあるかどうかに従って、次のどちらかの手順を行ってください。

- すでにマイクロゲームを使用したことがある場合は、**Projects** タブで保存した Unity プロジェクトを選択してください。プロジェクトを選ぶと Unity エディターが開きます。これには数分かかることもあります。
- マイクロゲームを初めて使う方は、**Learn** タブで「LEGO® Microgame」を選択してください。指示に従って、エディター内チュートリアルを完了してください。

#### **アドオンパッケージ**

このクリエイティブ Mod を進めるためにアドオンパッケージをインストールする必要はありません。

#### **補助資料**

このクリエイティブ Mod と併せて使うと役立つ資料をご紹介します。

- [**LEGO® Tools を使った制作**](https://learn.unity.com/tutorial/creating-with-lego-tools-jp)ガイドを見直し、Unity エディターでマイクロゲームのブロック組み立てシステムを自信をもって使えるようにしておきましょう。
- [**Behaviour Brick マニュアル**](https://connect-prd-cdn.unity.com/20201025/af8d06d9-0638-457f-aff8-d7b1e0917dcb/LEGO%C2%AE%20Behaviour%20Brick%20Manual.pdf?_ga=2.246854022.365614953.1606693961-1880619545.1535881689)をダウンロードし、レゴ® マイクロゲームで使えるブロックの種類を把握して、どのようにブロックを使うかアイデアを練ってみましょう。

ステップを完了としてマーク

## 3. 最初のステージをテスト用に調整する

Q&A (0)

触れるとそのステージで勝利できる地点をスタート付近に作成することで、少し簡単にテストできるようにしてみましょう。**注：**「[**メニューをカスタマイズする**](https://learn.unity.com/tutorial/lego-mod-customize-menus-jp)」チュートリアルを完了している場合は、すでにこれを行っている可能性があります。その場合は、[この手順を飛ばして次のステップに進む](https://learn.unity.com/tutorial/lego-mod-upgrade-your-levels#5f80765eedbc2a231ea07d76)こともできます。

触れるとステージで勝利できる地点を変更するには、次のようにします。

**1.**Project ウィンドウで、*Assets > LEGO > Prefabs > LEGO Behaviour Bricks*と移動します。****

**2.**Scene ビューで、ステージの終了地点に移動します。オリジナルの Win ブロックとその Touch Trigger を削除（**Ctrl / Cmd + Del**）します。

**3.**  プレイヤーのスタート地点に戻ります。手っ取り早い方法は、Hierarchy ウィンドウで「Player Minifig」を選択し、シーンビューにカーソルを合わせてショートカットキーの **F**（**フレーム選択**）を使い、そのゲームオブジェクトに視点を合わせることです。

**4.** LEGO® Tools で、**ブロックの組み立て**を有効にし、ブロックの接続方法を **Single Brick** に設定します。

**5.** 「Win」ブロックを Project ウィンドウから Scene ビューにドラッグします。 クリックして、プレイヤーのスタート地点の近くに配置します。

Win ブロックの上に警告アイコンが表示されることがあります。これは、トリガーがなく、ゲームの勝利条件を満たすのが簡単すぎる状態になっていることを知らせるものです。

[Image: image]

**6.**  Project ウィンドウで「Touch Trigger」を探して、Scene ビューにドラッグします。

**7.**  カーソルで Touch Trigger ブロックを Win ブロックの上に移動させます。接続できる場所に張り付きながら動きます。クリックしてブロックを接続します。

[Image: image]

**8.**  **Ctrl** / **Cmd** + **S**を押して変更を保存します。

ステップを完了としてマーク

## 4. ゲームマネージャーとシーンを見直す

Q&A (0)

新しいステージの追加を始める前に、それをサポートするためのシステムを見直してみましょう。

**1.** Hierarchy ビューで、「Game Manager」ゲームオブジェクトを探して選択します。

[Image: image]

**2.**  インスペクターで、**Game Flow Manager コンポーネント**を探します。

[Image: image]

シーンは、皆さんが制作している体験のすべての要素を格納するコンテナーです。Game Flow Manager はマイクロゲームのシーンの流れ、すなわち特定の条件に従ってシーン間でどのような遷移が行われるかを制御します。

**3.**  Project ウィンドウで、*Assets > LEGO > Scenes* と移動します。

[Image: image]

このフォルダーには Unity プロジェクトのさまざまなシーンがすべて含まれています。このマイクロゲームには 9 つの別々のシーンがあります。

- エディター内チュートリアルとゲームのメイン部分を収めたシーン 1 つ
- メニューのシーン 3 つ（Intro、Win、Lose）
- マイクロゲームのサンプルシーン 4 つ
- 実験場として使えるシーン 1 つ

プロジェクトをビルドして再生した時に、最初に読み込まれるシーンは、「Menu Intro」シーンです。次に、カスタマイズした再生可能なシーンが読み込まれます。ここでは「LEGO Tutorial」が読み込まれます。シーンに設定された勝利または敗北条件が満たされると、対応するメニューシーンが読み込まれます。

このクリエイティブ Mod では、新しくシーンを追加して、最初のシーンで勝利条件を満たした場合に「Menu Win」シーンではなく、その新しく追加シーンに移行するようにします。

ステップを完了としてマーク

## 5. 新しいステージを作る

Q&A (0)

まずは、すでにカスタマイズしたシーンを複製して新しいステージを作成してみましょう。

**1.** Project ウィンドウで、「*LEGO Tutorial」シーン*を選択します。

[Image: image]

**2.**ショートカットキーのコンビネーション **Ctrl / Cmd + D**でシーンを複製します。あるいは、画面上のメニューから **Edit > Duplicate**を選択しても複製を行うことができます。

**3.** 複製されたシーンを右クリックし、コンテキストメニューから **Rename**を選択します。新しいシーンに「Level 2」と名前を付けます。ここではまだ新しいシーンを開かないでください。先にいくつかの調整が必要です。

**4.**  Hierarchy ウィンドウで、「Game Manager」を選択します。

**5.**  インスペクターで、Game Flow Manager コンポーネントを探します。

**6.  Win Scene** プロパティのテキスト入力欄を「Level 2」に変更します。

[Image: image]ステップを完了としてマーク

## 6. ステージをビルドに追加する

Q&A (0)

次に、新しいレベルをビルドに追加して、新しくプレイ可能なバージョンのマイクロゲームを作成するときに新しいレベルが含まれるようにします。

**1.**Project ウィンドウで、「Level 2」をダブルクリックしてシーンを開き、プロンプトが表示されたら変更を保存します。今のところ、Scene ビューに表示されているものは、*LEGO Tutorial シーン*とまったく同じです。

**2.** 画面上部のメニューで、**File**> **Build Setting...**と選択します。****

**3.  Add Open Scenes**を選択します。

[Image: image]

選択するとリストに「Level 2」が表示されます。

[Image: image]

**5.** 最後に、テスト前に簡単な変更を加えます。これで、シーンが正しく遷移しているかを簡単に判定できます。プレイヤーのスタート地点のすぐ近くにある岩を選択して削除（**Ctrl / Cmd + Del**）します。これで、Level 2 が最初のスタート地点とまったく違う見た目になります。

[Image: image]

**注：**2 つのステージを素早く区別できるようにするために岩を削除するより、特定のレゴ® モデルを追加したり、他のものを変更したりするほうがいい場合は、そうしてもかまいません。岩の削除は、視覚的な違いを手軽に作り出すことができる便利な選択肢です。

**6.** 「Level 2」シーンにもコピーされた Win ブロックと Touch Trigger ブロックを削除（**Ctrl / Cmd + Del**）します。

ステップを完了としてマーク

## 7. シーン遷移をテストする

Q&A (0)

ここで変更をテストしましょう。

**1.**  Project ウィンドウで、*Assets > LEGO > Scenes* と選択します。ここで「LEGO Tutorial」シーンをダブルクリックして開きます。プロンプトが表示されたら変更を保存します。

**2.**  ツールバーで、**再生**ボタンを選択して再生モードに入ります。

**3.**  Win ブロックに触れると、ゲームが Level 2 シーンに遷移します。

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

**4.**  テストが終わって、再生モードを終了するには、もう一度**再生ボタン**を選択してください。再生モードで行った変更は保存されません。

#### シーンフローについてもっと知りたい方へ

このクリエイティブ Mod の残りの部分では、魅力的なステージを作成するのに役立つシンプルなデザインの原則を見ていきます。ステージ分岐の選択肢の作成を含むシーン遷移についてもっと知りたい方は、「[**FPS Mod：ゲームの流れに新しいレベルを追加しよう**](https://learn.unity.com/tutorial/fps-mod-add-a-new-level-to-your-game-flow-jp)」のチュートリアルで、必要なことを学ぶことができるでしょう。

ステップを完了としてマーク

## 8. Level 2 の Game Manager の設定を行う

Q&A (0)

テストを簡単にするには、2 つ目のステージの Game Manager を調整して、ゲーム終了時にゲーム全体を巻き戻すのではなく、ステージのスタート地点に戻るようにするとよいでしょう。これを行うには、以下のようにします。

**1.**  Project ウィンドウで、*Assets > LEGO > Scenes* と移動します。「Level 2」シーンをダブルクリックして開き、プロンプトが表示されたら変更を保存します。

**2.**  Hierarchy ウィンドウで、「Game Manager」を選択します。

**3.** インスペクターで、**Game Flow Manager (Script)** コンポーネントを探します。

**4.** **Win Scene** と **Lose Scene** のプロパティを「Level 2」に変更します。

[Image: image]ステップを完了としてマーク

## 9. 新しいステージをデザインする

Q&A (0)

Level 2 の作業を始める前に、レベルデザインの基本的な原則について見てみましょう。具体的な文脈を追加するために、プレイヤーが**障害物のあるコースを進むステージ**を作成するという単純な例を考えてみましょう。

#### レイアウトと目標

ステージの空間を、プレイヤーの目標から情報を引き出しつつ作っていくという考えは良いアイデアです。チュートリアルシーンでは、小さく直線的に進むステージでレゴ® マイクロゲームの機能に触れ、その後、別の島に移動してカスタマイズオプションの詳細を学ぶことを目標としていました。

障害物コースの場合は、次のことを考慮しておくべきでしょう。

- 目標と関係のないことは削り、明確かつ簡潔なデザインとすること
- 目標を見えるようにする。最低限、スタート地点で目標が見えるようにしておき、理想的には常に目標が見えている状態が望ましい。

#### ペース配分

徐々に難しくしていくことが、ゲームやレベルデザインの重要なポイントです。初めてこうしたデザインを行う場合は、まず重点を置くスキルやテクニックを選択して、ステージをプレイする間にだんだんと難しくしていくようにすると良いでしょう。

例えば、ジャンプに重点を置くことを選んだ場合は、次のように難易度を上げていく流れを作ることができるでしょう。

- 隙間を飛び越える
- タイミングで出現する、あるいは移動する障害物を飛び越える
- 隙間と障害物が組み合わさった場所を飛び越える
- 簡単な障害物の組み合わせを二段ジャンプで飛び越える。つぎに、より複雑な障害物の組み合わせを二段ジャンプで飛び越える。

ステージの難易度をグラフとして考えてみてください。障害物のあるコースの場合、難易度曲線は緩やかに（急勾配ではなく）上昇していき、最後まで踊り場がないようにすると良いでしょう。実際の難易度曲線は、ゲームの内容やターゲットとなるプレイヤーによって異なり、これ 1 つというベストな方法はありません。

[Image: image]

上に示した、緩やかな上昇を示す例、急激な上昇を示す例、上昇と踊り場が交互に現れる例は、こうした概念に初めて触れる方のために、難易度曲線を簡略化したものです。プレイヤーへの課題についてもっと知りたいと思った方は、このような話題についてまとめた資料がたくさんあるはずですので、探してみてください。

#### リスクと報酬、行為主体性（Agency）

可能なら、プレイヤーに主体性を持って選択する機会を与えられるようにしてください。ある課題を解くプレイヤーのスキルを試すために目標や課題の設定をしているのですが、複数の方法でこれを達成、解決できるようにしてもよいのです。

障害物のあるコースの場合、次の 2 つの典型的なアプローチが考えられます。

- 2 つの道筋があり、そのうちの 1 つは難しいが、追加の報酬がある（例えば、コレクションアイテムや実績解除などが得られる）。
- 2 つの道筋があり、難しい方の道筋は短くなっている。タイム計測のある障害物コースをプレイしている場合、この道筋を進むことで、より良いタイムを達成することができる。

**注：**複数の道筋がある場合、違いを明確に示すことが重要です。これは、プレイヤーに明確に目標を示すようなレイアウトの作成にもつながります。プレイヤーは道筋を見て、その道筋を選ぶ前に、その道筋がどのくらい難しいかを感覚的に把握することができるようになっているでしょうか。もしそうなっていなければ、道筋の選択が十分な情報に基づいた選択とならなくなり、プレイヤーをいら立たせることになってしまいます。

また、主体的にちょっとした選択を行うタイミングを与えるのもよいでしょう。例えば、次のような仕掛けが考えられます。

- 溝を一段ジャンプと二段ジャンプのどちらでも越えることができる
- プレイヤーは障害物を左右どちらに移動しても回避することができ、それは選んだ道筋を変更しない

#### 敵の配置とデザイン

敵キャラの配置は、レベルデザイン全体に組み込まれている必要があります。敵キャラの目標を定めることで、その役割に合わせてうまく設定できるようになります。

例えば、次のような仕掛けが考えられます。

- タイムを計測しない障害物コースを作っている場合、プレイヤーがステージの中を進んでいくようにするために、常に追いかけてくる敵キャラを配置するとよいでしょう。
- 敵キャラを、大きな報酬を得るためのリスクを増すといった使い方をして、プレイヤーが複数の道筋や体験から 1 つを選ぶときのガイドとすることができます。

敵キャラは多くの場合、面白い方法で課題を増やすことのできる非常に便利なツールとなります。しかし、敵キャラが障害物コース全体のテーマや作成したいプレイヤー体験に合わない場合は、レベルデザインに無理に入れる必要はありません。

#### 雰囲気

障害物コースの雰囲気を好みのものに変えたり、雰囲気のある表現をすでに作り上げたテーマのサポートや補強のために使ったりしてもよいでしょう。

障害物コースのライティング、音楽、アセットの選択は、醸し出される雰囲気に大きな影響を与えます。ゲームデザインとメカニクスは、特にプレイヤーの感情的・身体的な反応を促し、雰囲気をうまく使うことで、その反応を高めたり、あるいはリラックスさせたりすることもできます。

障害物のあるコースというテーマは、しばしば集中とプレッシャー感を生み出し、また、プレイヤーに短時間で反応することを要求します。

例えば、次のような仕掛けが考えられます。

- パステルカラーを基調として、飾らない感じの音楽を選ぶことで、プレイヤーの感じるプレッシャーを軽減できる場合があります。
- 逆に、不穏な音楽や照明を使った不気味なテーマを使うと、圧迫感や緊張感を高めることができます。

ステップを完了としてマーク

## 10. サンプル：ミニ障害物コース

Q&A (0)

まずは、1 つのサンプルについて考えてみましょう。

#### 1. 計画

まず、デザイナーは何を作りたいのかを少しの間考えました。

その結果、以下のものを作ってみようということになりました。

- 短く直線的に進む、障害物のあるコース
- **ジャンプのスキル**に焦点を当てる
- 4 つの障害物があり、だんだん超えるのが難しくなっていく

目標が見えやすく（直線的なコース）、ペースがだんだんと上がっていく（1つのスキルに集中、だんだんと難易度が上がっていく）ようにします。

デザイナーは、Unity での作業時のガイドとするために、簡単な計画図を描くことにしました。

[Image: image]

ステージについて考えたり試作したりする上で必須ではありませんが、役立つこともあるかと思われます。

#### 2. 最初のプロトタイプ

デザイナーは計画をプロトタイプのステージを構築するための柔軟性のあるツールとして使いました。

まず、デザイナーは次のことに焦点を当てました。

- スタート地点で目標が見える
- 難易度を増していきながら、直線的なシーケンスの中に障害物を置いていく

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

いいスタートを切れました！

#### 3. 評価と反復修正

次に、デザイナーはプロトタイプのステージを評価しました。また、他の人にも遊んでもらって、皆さんの作っている体験についての意見をもらういい機会にもなるでしょう。

デザイナーは自分たちの実現したいこととして、次のことを挙げました。

- 報酬のスターを課題の間に置く
- ステージの目標に至る別の道筋として、弾を撃ってくる敵キャラがいる道を作る
- 外観を調整して、シンプルながら楽しくなる色使いとする

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

評価と反復修正はサイクルであり、制作した体験に満足するまで、好きなだけ続けることができます。最初の計画から遠ざかっていても、結果に満足していて、自分が作りたいと思っているプレイヤー体験が得られれば、問題ありません。

ステップを完了としてマーク

## 11. もっと改造したい人へ

Q&A (0)

ここまでで、自分だけの構成を持ったステージを作ることができるようになりました。

このクリエイティブ Mod をさらに拡張するために、次のようなこともやってみるといいでしょう。

- Level 2 の Lose Menu シーンを別個に作成して、プレイヤーがゲーム全体の最初にループするのではなく、そのレベルから再開できるようにしてください
- 「[**FPS Mod：ゲームの流れに新しいレベルを追加しよう**](https://learn.unity.com/tutorial/fps-mod-add-a-new-level-to-your-game-flow-jp)」チュートリアルを参考に、分岐するゲームフローを作ってみましょう。

#### **次のステップ**

- 他の[**レゴ® マイクロゲームクリエイティブ Mod**](https://learn.unity.com/project/lego-template-jp)にもトライして、皆さんのマイクロゲームをどんどんカスタマイズしてしまいましょう。
- [**Unity Essentials**](https://learn.unity.com/pathway/unity-essentials) ラーニングパスウェイを使って Unity についてさらに詳しく学び、クリエイターになるための学びを今後も続けていきましょう。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
