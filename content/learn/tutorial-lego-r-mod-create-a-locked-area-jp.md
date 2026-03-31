[Image: image]

# レゴ® Mod：鍵のかかったエリアを追加する

Tutorial

Beginner

+0XP

15 mins

2

(28)

Unity Technologies

[Image: レゴ® Mod：鍵のかかったエリアを追加する]Summary

戦利品や、面白いサプライズ要素を追加してみましょう。

Languages available:

日本語English日本語简体中文日本語

## 1. 概要

Q&A (0)

この Mod では、小道具のケージを使ってレゴ® マイクロゲームの中に鍵のかかったエリアを作ります。このエリアの中に、プレイヤーへのご褒美やサプライズを仕込むこともできます。

このチュートリアルでは、

- 新しく岩を作る
- 小道具のケージを追加する
- ケージのドアの動きをレゴ® Behavior Brick を使って設定する
- 変更した内容をテストしてみる

それでは始めましょう！

ステップを完了としてマーク

## 2. 始める前に

Q&A (0)

この Mod を始める前にレゴ® マイクロゲームのエディター内チュートリアルを終えておくとさらに学習効果が見込めます。

このチュートリアルを始める前に、マイクロゲームを開きましょう。

**1.** Unity Hub を開きます。

**2. Projects** タブに移動して、保存したマイクロゲームのプロジェクトを選択します。Unity エディターが開きます。開くまで少し時間がかかることもあります。

ステップを完了としてマーク

## 3. 新しく岩を作る

Q&A (0)

レゴ® マイクロゲームのチュートリアルシーンには最初からいろいろなものが置いてありますが、ここに新しく岩を 1 つ置くところから始めましょう。この岩に鍵のかかったエリアを追加することになります。

**1.** Hierarchy ビューで、「Environment」ゲームオブジェクトを探します。

**2.** 「Environment」ゲームオブジェクトの名前の左側にある灰色の矢印を選択して、展開します。

[Image: image]

複数のゲームオブジェクトを親子関係を持つ階層構造にまとめることができます。この機能を使って、ゲームオブジェクトをグループ化したり、整理したりすることができます。ここでは「FogPlane」、「Rocks」、「Clouds」、「Mountains」が「Environment」の子になっています。

**3.** 「Rocks」ゲームオブジェクトを展開して、リストの最後にある「Rock 1」ゲームオブジェクトを選択します。

[Image: image]

**4.**シーンビューにマウスポインターを乗せた状態で、**F キー**（Frame Selected）を押して選択したゲームオブジェクトがシーンビューに表示される状態にします。すると、この「Rock 1」は再生を開始したときのプレイヤーの初期位置の左側にある岩の一部であることがわかります。

**注意**: マウスポインタ―がシーンビューに入っていないと、ここで説明している F キーの機能は使えません。

もう少し視点を調整したい場合は次のようにします。

- ツールバーの**ハンドツール**を使って、左クリックのドラッグで視点を移動します。
- シーンビューの視点の角度を変えたいときは、シーンビューの中で **Alt**/ **Opt** + **左クリック**しながら、マウスポインターを動かします。
- ズームイン、ズームアウトするには、シーンビューの中で **Alt**/ **Opt** + **右クリック**しながら、マウスを前に動かすとズームイン、後ろに動かすとズームアウトします。トラックパッドやスクロールホイールを使ってズーム操作を行うこともできます。

[Image: image]

**5.** 「Rock 1」ゲームオブジェクトを Hierarchy で選択したまま、Ctrl / Cmd + D キーを押して岩のゲームオブジェクトを複製します。新しい岩のゲームオブジェクトが Hierarchy のリストの一番下に表示されます。名前は「Rock 1 (1)」になっているはずです。

**6.** ツールバーの**移動ツール**（**W**）を使って新しく作った岩を動かし、プレイヤーの後ろ側に鍵のかかったエリアを作るためのスペースを作ります。

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

**7.**Hierarchy で、「Rocks」と「Environment」ゲームオブジェクトの左側にある灰色の矢印をクリックして、展開していたゲームオブジェクトのリストを非表示にします。

これで鍵のかかったエリアを置くための場所ができました。

ステップを完了としてマーク

## 4. 小道具のケージを追加する

Q&A (0)

次はマイクロゲームに鍵をかけられる小道具を追加しましょう。

**1.**Project ウィンドウで、*Assets > LEGO > Prefabs > LEGO Models > Contraptions と移動します。*

[Image: image]

**2.**フォルダーから「Cage」を選択し、シーンビューにドラッグします。

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

このケージは実によくできています。ちゃんとケージのドアとかごの部分が分かれているので、ドアの部分に Behavior Brick をアタッチして、ドアだけを動かすことができます。

**3.**LEGO® Tools（シーンビューの左上に出ているウィンドウ）を画像の通りになるよう、ウィンドウの中のアイコンをクリックして設定します。

- 「Brick Building」を有効にする（左側のアイコン）
- ブロック選択モードは「Connected Brick」にする（右側のアイコン）

[Image: image]

**4.**ケージとドアが画面の中央に来るように視点を調整して、ケージのかごとドアの間の隙間が見えるようにしてください。

- ツールバーの**ハンドツール**を使って、左クリックのドラッグで視点を移動します。
- シーンビューの視点の角度を変えたいときは、シーンビューの中で **Alt**/ **Opt** + **左クリック**しながら、マウスポインターを動かします。
- ズームイン、ズームアウトするには、シーンビューの中で **Alt**/ **Opt** + **右クリック**しながら、マウスを前に動かすとズームイン、後ろに動かすとズームアウトします。トラックパッドやスクロールホイールを使ってズーム操作を行うこともできます。

**5.**ツールバーで、移動ツールを選択（あるいはショートカットキーの **W キー**を押下）して、ケージのかごの部分を選びます。岩の平らな面の、ケージのかごを置きたい場所にスナップ（ピタッと貼りつく）させて、場所が決まったらクリックして、かごをその場所に固定します。

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

**6.**今度はケージのドアを選択し、かごに合わせた場所にスナップさせてクリックし、位置を固定します。

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

## 5. Behavior Brick を追加する

Q&A (0)

次は Move の Behavior Brick をドアに追加して、ドアが動くようにします。

**1.**LEGO® Tools  を画像の通りになるよう、ウィンドウの中のアイコンをクリックして設定します。

- 「Brick Building」を有効にする（左側のアイコン）
- ブロック選択モードは「Single Brick」にする（右側のアイコン）

[Image: image]

**2.**Project ウィンドウで、*Assets*>*LEGO*>*Prefabs*>*LEGO Behavior Bricks と移動します。*

**3.**視点を調整して、ドアの前面がシーンビューのカメラの視界に入るようにします。

**4.** 「Move」ブロックを選択してシーンビューにドラッグします。

**5.**ブロックを接続する前（ブロックの位置を動かせる状態のうち）に、**Alt / Opt + D キー**を何度か押してブロックを回転させ、ブロックに描いてある矢印がドアを動かしたい方向に向くように調整します。

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

**注意:**ブロックの位置を固定した状態だと、**Alt/ Opt + D キー**を押してもブロックは回転せず、少し平行移動するだけです。もし間違えてブロックを固定していた場合は、Move ブロックを選択して、ケージのドアからドラッグすると位置の固定が外れるので、もう一度正しい位置にブロックを固定し直してください。シーンビューでマウスポインターを動かしたとき、ブロックが付いてくるなら位置は固定されておらず、Alt / Opt + D キーで回転させることができます。

**6.**「Move」ブロックをケージのドアの緑色の出っ張り部分にスナップさせ、左クリックして位置を固定し、接続します。

[Image: image]

ステップを完了としてマーク

## 6. Move ブロックを設定する

Q&A (0)

次に、Move Behavior Brick の設定を行いましょう。

**1.**シーンビューか Hierarchy ウィンドウで、「Move」Behavior Brick を選択します。

**2.**インスペクターで、「Move Action (Script)」コンポーネントの「**Distance**」プロパティを探してください。

[Image: image]

この Distance に設定された値の単位はレゴ® 単位です。レゴ® 単位とは、レゴ® ブロックの上にある突起がいくつ入るかという基準で長さを取る単位です。

**3. Distance** プロパティを**8**に設定します。これは小道具のケージの幅に等しく、すなわちドアが開くときにスライドするべき距離ということになります。

**4. Repeat**プロパティを無効に（チェックボックスをオフに）します。これで、ドアは一度だけ動くようになります。

[Image: image]

**5.** 変更を保存します。トップメニューから **File** > **Save** を選ぶか、**Ctrl**/**Cmd**+**S キー**のショートカットを使いましょう。

ステップを完了としてマーク

## 7. 再生モードでテストする

Q&A (0)

変更した内容をテストしましょう。

**1.**ツールバーで**再生ボタン**をクリックし、再生モードに入って変更した内容をテストします。ドアが Behavior Brick で設定した方向に、8 単位分スライドして開くようになっていれば OK です。

[Image: image]

**2.**確認が済んだらもう一度**再生ボタン**を押し、再生モードを終了します。再生モードで加えた変更は保存されません。

ゲームが始まるとケージが開くようになりました。しかし、これでは鍵のかかったエリアとは言えません。ここからもう少し変更を加えて、プレイヤーがゲームの中でコンピューター端末を起動して、ケージのドアを開けるようにしましょう。

ステップを完了としてマーク

## 8. コンピューター端末を追加する

Q&A (0)

まずはコンピューター端末を追加しましょう。

**1.**Project ウィンドウで、*Assets* > *LEGO* > *Prefabs* > *LEGO Models* > *Contraptions と移動します。*

[Image: image]

**2.**「Console」を選択して、シーンビューにドラッグします。LEGO® Tools で、Brick Building を無効にします（左のアイコンをチェック）。次に、**移動ツール**（**W キー**）を使って、ゲームのスタート地点の近くにコンピューター端末を置き、**回転ツール**（**E キー**）を使って、向きを調整します（機能するようになったら、ゲーム中の好きな位置に端末を置くことができます）。

[Image: image]ステップを完了としてマーク

## 9. Touch Trigger を追加する

Q&A (0)

端末を起動できるようにするため、Touch Trigger Behavior Brick を追加しましょう。

**1.**LEGO® Tools  をすぐ下の画像の通りになるよう、ウィンドウの中のアイコンをクリックして設定します。

- 「Brick Building」を有効にする（左側のアイコン）
- ブロック選択モードは「Single Brick」にする（右側のアイコン）

**2.**Project ウィンドウで、*Assets* > *LEGO* > *Prefabs* > *LEGO Behavior Bricks と移動します。*

**3.**「Touch Trigger」ブロックを選択し、シーンビューにドラッグします。

**4.** Touch Trigger ブロックを端末の上に置きます。

[Image: image]ステップを完了としてマーク

## 10. Touch Trigger を設定する

Q&A (0)

これで、次に、トリガーを設定しましょう。

**1.** シーンビューまたは Hierarchy ウィンドウで、「Touch Trigger」Behavior Brick を選択します。

**2.**インスペクターで、「Touch Trigger (Script)」コンポーネントを探します。

[Image: image]

ここでは、**Target** プロパティは **Connected Actions** に設定されています。これは、トリガーが端末（に限らず、接続できるあらゆるオブジェクト）に接続しているあらゆるアクションブロックを活性化するという意味です。いまは端末に接続しているアクションブロックはありません。この Touch Trigger をゲージのドアを活性化させるように設定する必要があります。

**3.**ドロップダウンメニューを使って、**Target** プロパティを **Specific Actions** に設定します。灰色の矢印を選択して、**Specific Actions** を展開して表示させます。

**4. Size** プロパティを **1** に設定します。これはトリガーされるアクションブロックの数を表しています。値を設定すると、新しく「**Element 0**」というプロパティが表示されます。

[Image: image]

**5.**「Move」ブロックを Hierarchy ウィンドウから **Element 0**プロパティの欄にドラッグします。これで Move がこのトリガーを有効化する特定のアクションブロックとして割り当てられます。

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

注意: ドラッグするつもりで間違って「Move」ゲームオブジェクトをクリックして選択してしまった場合、「Touch Trigger (Script)」コンポーネントがインスペクターに表示されなくなります。この場合は、「Touch Trigger」ゲームオブジェクトを Hierarchy でもう一度選択します。

**6. Repeat** プロパティを無効に（チェックボックスをオフに）します。ドアは一度だけ開けばいいからです。

[Image: image]

**7.** 変更内容を保存します。

これで、トリガーはプレイヤーが近づいたことを感知し、ケージのドアを開けるように動作します。

ステップを完了としてマーク

## 11. 再生モードでテストする

Q&A (0)

変更内容をテストしましょう。

**1.**ツールバーの**再生ボタン**をクリックして再生モードに入り、変更内容をテストします。

**2.** ケージのドアが自動的には開かず、端末に近づいたら開くことを確認してください。

確認のため、移動方法は次の通りです。

- **WASDまたは矢印キー**でミニフィグを前後左右に動かせます。
- **マウスを Game ビューの中で動かす**と、ミニフィグを中心に視点が移動します。

**3.**テストが終わったら、もう一度**再生ボタン**を押して再生モードを終了します。

ステップを完了としてマーク

## 12. もっと改造したい人へ

Q&A (0)

これで、プレイヤーが鍵を開けることのできるエリアが追加されました。今回は小道具のケージだけを使いましたが、他にもいろいろな小道具を組み合わせて、さまざまな動きを作り出すことができます。たとえば...

- ケージにアイテムを入れて置き、プレイヤーがケージを開けたら入手できるようにしておく
- ケージと端末をゲームとして面白い場所に動かす
- 岩や他の環境用の小道具をケージのドアの代わりに使う
- このチュートリアルで使った Move と Touch Trigger による鍵システムを使って、独自の鍵のかかったエリアを作る

想像した分だけできることは広がっていきます。ぜひ、他のレゴ® マイクロゲームの Mod ― 「[プレイヤーのミニフィグを取り換える](https://learn.unity.com/tutorial/lego-r-mod-change-the-player-minifig-jp)」と「[自分だけの敵キャラを作る](https://learn.unity.com/tutorial/lego-r-mod-build-your-own-enemy-jp)」にも取り組んでみてください。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
