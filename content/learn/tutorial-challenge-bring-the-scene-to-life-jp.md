[Image: image]

# チャレンジ：シーンに生命を吹き込む

Exercise

Beginner

+60XP

90 mins

1

Unity Technologies

[Image: チャレンジ：シーンに生命を吹き込む]Summary

このチャレンジでは、少なくとも 5 つの新しいエディター内アニメーションを作成し、少なくとも 1 つのキャラクターが、自分で作成した 3 つの新しくインポートしたアニメーションを使用するように設定することが求められます。

このチュートリアルが終わるころには、アニメーションの新しいスキルを発揮できるようになるでしょう。

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

これまでのチュートリアルでは、Unity エディターで直接一から基本的なアニメーションを作成する方法と、インポートしたアニメーションを設定および使用する方法を学びました。この 2 つのアニメーションスキルは、Unity でアニメーションを扱うための基礎をカバーするもので、これを使えば、インタラクティブな体験のための生き生きとしたシーンを作成することができます。この理解を活かして、今度はアニメーションで新規シーンに命を吹き込むという新しいチャレンジに取り組みます。

このチャレンジでは、少なくとも 5 つの新しいエディター内アニメーションを作成することが課せられます。また、少なくとも 1 つのキャラクターに、自分で作成した新しくインポートしたアニメーションを 3 つ使用できるように設定する必要があります。

今回は初めて自分でアニメーションをデザインすることになるので、プランニングを始める前に、クリエイターが考えるアニメーション制作時の最大の難関について語る動画を視聴してみてくださいね：

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

## 2. スキルの再確認

Q&A (0)

アニメーションについて、ずいぶん勉強しました！ここでは、今までの復習をしましょう。これまで学んだことを復習し、それがどのようにシーンで使われるかを考えてみましょう：

**キーフレームを用いたアニメーション：**シーン内の任意のオブジェクトに対してアニメーションクリップを作成し、それらのアニメーションはオブジェクト上の任意のコンポーネントを制御することができます。オブジェクトの位置やスケールをアニメーション化することはよくありますが、回転、マテリアル、色、あるいは可視性についてはどうでしょうか。

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

**レコードボタン**を押し、Inspector で変更を加えるだけで、プロパティを追加する必要をなくすことができます。**レコードボタン**がアクティブである限り、Animation エディターは、自動的にパラメーターを追加します。このメソッドは、オブジェクトに変更を加えたときにのみキーフレームを追加し、ループのための終了キーフレームは追加しないことに留意してください！

**アニメーターコントローラーの作成：**オブジェクトは複数のアニメーションクリップを持つことができ、アニメーターコントローラーでステートマシンを作成すると、それらのアニメーションは互いに遷移することができます。また、Trigger コライダーとスクリプトを使用して起動できるパラメーターの作成方法を学習しました。

**アニメーションのトリガー：**アニメーションは、シーンが始まるとすぐに再生されるわけではありません。アニメーターコントローラーの操作方法を学ぶ中で、Trigger コライダーとスクリプトを使用してコントローラー内のステートを変更できることを発見しました。必要に応じて、このシーンではドアのアニメーションのチュートリアルのスクリプトを再利用することができます。

**ヒューマノイドのアニメーションの設定：**Unity の Humanoid アニメーションシステムを使用するように設定されたキャラクターは、アニメーションを共有することができます。これにより、オンラインや [Unity アセットストア](https://assetstore.unity.com/3d/animations?category=3d%2Fanimations&free=true&orderBy=1&rows=264)にある数百ものアニメーションにアクセスすることができます。アニメーションを設定し、デフォルトアニメーションまたはステートマシンの一部として、アニメーターコントローラーに追加する方法を学習しましたね。前のチュートリアルのダンスパーティーのスクリプトを再利用することもできますし、後述する新しいスクリプトを使用することもできます。

[Image: image]

どんなアニメーションを作ればいいのか？それは完全にあなたにお任せします！シーンを探索するときに、なぜそのような設定になっているのかストーリーを考えてみましょう（シーンで起こっていることを変えてもかまいません）。アニメーションだけでそのシーンのストーリーを語れるのでしょうか？

ステップを完了としてマーク

## 3. キーコードを使用したトリガーのスクリプト

Q&A (0)

Scripts フォルダーには、AnimatorControllerTriggers と呼ばれるスクリプトがあります。このスクリプトは、キーボード入力に基づいて、キャラクターやオブジェクトにアニメーションを発生させることができるように編集するために設計されています。

スクリプトを編集するには：

**1.**  スクリプトフォルダーにある AnimatorControllerTriggers をダブルクリックし、Visual Studio で開きます。

**2.**  Update メソッドまでスクロールし、コードブロックを複製するように指示するセクションを見つけます。

**3.**  コードブロックを選択し、閉じ中括弧 ( } ) をハイライトして、**Ctrl/Cmd+C**でコピーします。

**4.**  新しいブロックを、既存のコードブロックの数行下に、Update メソッドの内部（スクリプトの最後から 2 番目の中括弧の内部に収まる）に貼り付けます。

**5.**  Keycode.A の A をお好きなキーに置き換えてください。使用可能なキーの一覧は[こちら](https://docs.unity3d.com/ScriptReference/KeyCode.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952213913)でご覧いただけます。

**6.**  anim.SetTrigger の行で YOUR_TRIGGER_NAME_HERE_INSIDE_THE_QUOTES を、キーボードキーを押したときに呼び出したいパラメーターの名前に置き換えます。

**7.**  スクリプトを保存します。

**8.**  アニメーターコントローラーがアタッチされているオブジェクトに、スクリプトを追加します。

スクリプトの編集に抵抗がある方は、いつでもこのチャレンジ用のダンスパーティーのスクリプトを使うことができます。注意点としては、Q、W、E、R、T、Y キーだけを使うようにマッピングされていることです。このスクリプトの設定方法と、このスクリプトで動作するようにアニメーターコントローラーを設定する方法を確認するには、[前回のチュートリアル](https://learn.unity.com/tutorial/import-animation)に戻ってください。

ステップを完了としてマーク

## 4. アニメーションの作成

Q&A (0)

**1.**  Scene フォルダーの中から ChallengeScene_Animation を探し、開きます。

**2.**  シーンを見直し、さまざまなアニメーションを通して伝えることができるようなストーリーを考えてみましょう。

**3.**  アニメーション可能なアイテムをいくつか挙げてください。最低 5 つのキーフレームを使ったアニメーションを作成する必要がありますが、誰かがそれらをすべて見ることができるようなアニメーターコ ントローラーを作成するなら、同じオブジェクトに複数のアニメーションを適用することが可能です。

**4.**  シーン内でアニメーションさせたいキャラクターを特定します。オンラインまたは [Unity アセットストア](https://assetstore.unity.com/)で、最低 3 つのアニメーションを入手します。

**5.**  AnimatorControllerTriggers スクリプトまたは DanceParty スクリプトを使用して、キーストロークでアニメーターを制御します。

**6.**  キーフレームアニメーションを作成し、必要に応じてアニメータコントローラーを設定します。

**7.**  インポートしたアニメーションを Humanoid アニメーションシステム用に設定し、選択したキャラクターのアニメーターコントローラー（これらはすべて、前回のチュートリアルで使用した SharedController アニメーターコントローラーを使用している）に追加します。

**8.**  アニメーションが完成したら、それを紹介するビデオに録画しましょう！

**9.**  あなたの頑張りを Learn のコミュニティで共有したい方は、ぜひ動画を投稿してください。

このチャレンジには、少なくとも 1 時間 15 分かかるとお考えください。

ステップを完了としてマーク

## 5. 評価基準

Q&A (0)

以下の条件をクリアしていれば、成功したと言えるでしょう：

- キーフレームアニメーションを最低 5 つ作成し（繰り返しますが、これらはすべて異なるオブジェクトである必要はない）、外部で作成したアニメーションを最低 3 つインポートしている。
- すべてのアニメーションが正しく動作するように、必要に応じてアニメーターコントローラーを作成またはカスタマイズしている。
- 自分が作ったアニメーションで、何らかの物語またはストーリーを伝えることができる。

インポートしたアニメーションをオンラインで見つけた場合、必要であれば、出典のクレジットを表示するようにしてください。テキストファイルには、制作者、入手したウェブサイト、その他必要な情報を記載しておくとよいでしょう。

ステップを完了としてマーク

## 6. 次のステップ

Q&A (0)

おめでとうございます！Core Animation に必要な学習を完了しました。

あなたは、Unity エンジンにおける主要なクリエイティブ領域の一つに関するコアスキルと知識を有しています。

これで、この技術を他のプロジェクトに応用する準備が整いましたね。次は何を作成してくれるのかを楽しみにしています。

ステップを完了としてマーク任意のステップ

## 7. プロジェクトの投稿

Q&A (0)

このチャレンジを完了したら、プロジェクトを投稿して共有してください。これはこのミッションを完了するための必須条件ではありませんが、あなたの進捗状況を共有し、他の人の作品から学べる良い機会になるでしょう。

プロジェクトを投稿するには：

**1.**  このチャレンジのための具体的な指針（上記）を確認し、チャレンジの基準を満たしているかどうかプロジェクトをチェックしてください。投稿の締め切りはありませんので、必要な時間をかけてもかまいません。

**2.**  プロジェクトの WebGL ビルドを作成および公開（参照：[Create and publish a WebGL build](https://learn.unity.com/tutorial/create-and-publish-webgl-builds)）します。Unity Play やその他のサードパーティのホスティングプラットフォームで公開することができます。

**3.**  このステップの一番下にある投稿フォームに、ホストされた WebGL ビルドへのリンクを追加します。

**4.**  投稿タイトルと説明を追加します。行ったプロセスや作成したプロジェクトについて共有したい追加情報がある場合は、説明で共有することができます。

**5.**  投稿した作品を閲覧できる人を設定：

- **Public：**このチュートリアルを閲覧できる人なら誰でもアクセス可
- **Private：**投稿者本人のみ

**6.** **Save and Preview submission** を選択します。

**7.**  投稿プレビューを確認し、CAPTCHA テストを行い、**Submit and continue**を選択してください。

#### 提出するにはログインしてください

ログイン

## Complete this Tutorial

すべてのステップを完了としてマーク
