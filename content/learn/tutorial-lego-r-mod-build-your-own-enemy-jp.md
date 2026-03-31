[Image: image]

# レゴ® Mod：自分だけの敵キャラを作る

Tutorial

Beginner

+0XP

20 mins

2

(25)

Unity Technologies

[Image: レゴ® Mod：自分だけの敵キャラを作る]Summary

プレイヤーの行く手を阻む敵キャラを自分で作ってみましょう！

Languages available:

日本語English日本語简体中文日本語

## 1. 概要

Q&A (0)

この Mod では、マイクロゲームの Unity プロジェクトに収録されている、バラバラのレゴ® ブロックを使って、自分だけの敵キャラを作ります。このチュートリアルでは、

- 基本的なブロックから敵キャラを作る
- Behavior Brick を使って、敵キャラの設定を行う
- 作った敵キャラをプレハブ化し、ゲームの中で再利用できるようにする

ステップを完了としてマーク

## 2. 始める前に

Q&A (0)

この Mod を始める前にレゴ® マイクロゲームのエディター内チュートリアルを終えておくとさらに学習効果が見込めます。

このチュートリアルを始める前に、マイクロゲームを開きましょう。

**1.** Unity Hub を開きます。

**2. Projects** タブに移動して、保存したマイクロゲームのプロジェクトを選択します。Unity Editor が開きます。開くまで少し時間がかかることもあります。

ステップを完了としてマーク

## 3. 敵キャラを作るためのブロックを追加する

Q&A (0)

まず、敵キャラを作るためのブロックを追加しましょう。

**1.** Project ウィンドウで、 *Assets* > *LEGO* > *Prefabs* > *LEGO Model*s > *Brick Collections と移動します。*

[Image: image]

**2.**シーンビューで、敵キャラを組み立てるのにいい場所を探します。スタート地点の左側にある、岩の上などはいい場所です。Galo Bird がそこにいる場合は、Galo Bird を動かすか、別の場所を選んで敵キャラを組み立ててください。

[Image: image]

**3.**「Starter Bricks」プレハブを Project ウィンドウから、シーンビューの岩の上にドラッグします。

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

なお、「Cool Bricks」という別のブロックのセットを収録したプレハブもあります。これを Starter Bricks の代わりに使ったり、あるいは組み合わせて使ったりしてもいいでしょう。

ステップを完了としてマーク

## 4. ブロックセットのプレハブを開封する

Q&A (0)

このマイクロゲーム Unity プロジェクトにおいて、ブロックセットはプレハブの形で提供されます。これはテンプレートとして、さまざまな形状を作り出すために使えます。今回は、ゲームに追加する独自の敵キャラや小道具、環境要素を作りやすいブロックのセットをあらかじめ準備しています。

あるバージョンのプレハブをシーンに追加することを「プレハブのインスタンス化」と呼んでいます。インスタンス化した Starter Bricks を使って何か作り始める前に、プレハブを開封する必要があります。この操作によって、ブロックが普通のゲームオブジェクトに変換され、好きなように使ったり、削除したりできるようになります。Starter Bricks プレハブを再度 Brick Collection フォルダーから持ってきて使うこともできます。

Starter Bricks を開封する手順は次の通りです。

**1.**Hierarchy ウィンドウで、「Starter Bricks」ゲームオブジェクトを探します。青いキューブのアイコンは、そのゲームオブジェクトがプレハブをインスタンス化してできたものであることを示します。

[Image: image]

**2.** 「Starter Bricks」を右クリックして、「Unpack Prefab Completely」をコンテキストメニューから選択します。キューブアイコンの青色の塗りつぶしが消えます。

[Image: image]

**3.**「Starter Bricks」ゲームオブジェクトの左側にある灰色の矢印を選択して、展開します。

[Image: image]

複数のゲームオブジェクトを親子関係を持つ階層構造にまとめることができます。この機能を使って、ゲームオブジェクトをグループ化したり、整理したりすることができます。ここでは、Starter Bricks に「Alive」と「Default - Dynamic」という 2 つの子があることがわかります。

**4. 「**Default - Dynamic」ゲームオブジェクトを展開します。このゲームオブジェクトは何かを組み立てるために使える、標準的なブロックのセットを含んでいます。

[Image: image]

**5.**「Alive」ゲームオブジェクトは Behavior Brick で、これを接続した敵キャラはもぞもぞ動いて音を出すようになります。

[Image: image]

**6.**Hierarchy ウィンドウで「Starter Bricks」ゲームオブジェクトを右クリックして、「**Rename**」を選択します。いまは、これを「NewEnemy」と名前を付けましょう（これ以外の名前でも構いません。その場合は、以降の説明の NewEnemy をその名前に読み替えてください）。こうすると、自分の組み立てている敵キャラや、ブロックを整理しやすくなります。

これでほぼ敵キャラ構築の準備が整いました。

ステップを完了としてマーク

## 5. LEGO® Tools の設定を確認する

Q&A (0)

このマイクロゲームでブロックを組み立てる方法をおさらいしておきましょう。LEGO® Tools がシーンビューの左上にあり、ここで 2 つのモードが管理されています。Brick Building（ブロック構築）と Brick Selection（ブロック選択）です。

[Image: image]

#### ブロック構築

左側のアイコンは**ブロック構築**を制御しています。このアイコンはボタンになっており、クリックすることで本物のレゴ® ブロックのように、マウスまたはトラックパッドのクリックでブロックをつなげる機能の有効/無効を切り替えることができます。

**Ctrl + Alt + N**（Windows）または **Cmd + Opt + N**（macOS）のショートカットを使うこともできます。

#### ブロック選択

右側のアイコンは**ブロック選択**を制御するボタンになっており、ブロックを移動したり接続したりするとき、1 つのブロックだけを選択するか（Single Brick Selection）ブロックのグループ単位で選択するか（Connected Brick Selection）を切り替えることができます。

Ctrl + Alt + K（Windows）または Cmd + Opt + K（macOS）のショートカットを使うこともできます。

ステップを完了としてマーク

## 6. 基本的な敵キャラを作る

Q&A (0)

では、それっぽい敵キャラを作ってみましょう。目標とする形があって、それを作っているうちに、Behavior Brick をどうくっつければいいか不安になるかもしれませんが、心配いりません。一度どこかに接続したとして、あとから取り外して位置を調整することができます。

（特に作りたい敵キャラの形がないというときは、この画像のキャラを作ってみましょう）

[Image: image]

#### シーンビューの視点の変え方

シーンビューの視点の角度を変えたいときは、シーンビューの中で **Alt**/ **Opt** + **左クリック**しながら、マウスポインターを動かします。

ズームイン、ズームアウトするには、シーンビューの中で **Alt**/ **Opt** + **右クリック**しながら、マウスを前に動かすとズームイン、後ろに動かすとズームアウトします。トラックパッドやスクロールホイールを使ってズーム操作を行うこともできます。

#### ブロックの向きの変え方

LEGO® Tools で、ブロック構築を有効にした状態で、**Alt / Opt + D キー**を押すとブロックが回転します。

**注意:** ブロックの位置を固定した状態だと、**Alt/ Opt + D キー**を押してもブロックは回転せず、少し平行移動するだけです。もし間違えてブロックを固定していた場合は、Move ブロックを選択して、固定した場所からドラッグすると位置の固定が外れるので、もう一度ブロックの位置や向きを設定し直してください。シーンビューでマウスポインターを動かしたとき、ブロックが付いてくるなら位置は固定されておらず、Alt / Opt + D キーで回転させることができます。

#### ブロックの削除

削除するブロックを選んで、ショートカットの **Del** キー（Windows）または **Cmd + Del** キー（macOS）を押して削除します。トップメニューの **Edit** > **Delete** を使うこともできます。

ステップを完了としてマーク

## 7. Behavior Brick を見直す

Q&A (0)

さて、基本的な敵キャラの造形が出来上がったかと思います。ここで Alive Behavior Brick を接続された方もいらっしゃるでしょうが、それではいまいちではないでしょうか。

ここまでに紹介したブロックをいろいろと組み合わせて、自分だけの敵キャラを作る（たとえば背の低い木だと思っていたら突然爆発するようなキャラ）を自在に作ることも可能です。ただし、凝ったことをやろうとすれば、それだけ複雑にブロックを組み合わせることになります。

Behavior Brick の中には、そこまで複雑な組み合わせをしなくても、敵キャラらしい振る舞いをさせられるブロックが存在します。

Behavior Brick は、Project ウィンドウで *Assets > LEGO > Prefabs > LEGO Behaviour Bricks* と移動すると、その一覧を見ることができます。

[Image: image]

作業を進める前に、敵キャラに使えそうなブロックをいくつかここで見ておきましょう。

#### 振る舞い

- **Alive** 敵キャラが音を出すようになる
- **Look At** 敵キャラが割り当てられた目標の方を向く
- **Shoot** 敵キャラが割り当てられた目標に向かって弾を撃ってくる
- **Hover** 敵キャラが設定された高さで、上下に揺れながら空中に浮かぶ
- **Move** 敵キャラはアイコンに示された方向に動く

#### トリガー

- **Nearby Trigger** 敵キャラがプレイヤーが近づいたときに何らかの行動をとる
- **Touch Trigger**プレイヤーが敵キャラに触れた時に何らかの行動をとる
- **Random Trigger** ランダムな時間間隔で、何らかの行動をとる

ステップを完了としてマーク

## 8. 自分の敵キャラに Behavior Brick をつける

Q&A (0)

Behavior Brick をつけて、自分だけの敵キャラを完成させましょう。

**1.**Project ウィンドウで *Assets > LEGO > Prefabs > LEGO Behaviour Bricks と移動します。このフォルダーにはこのレゴ*® マイクロゲームのために作られたカスタムの Behavior Brick がすべて格納されています。

**2.**Behavior Brick を選び、シーンと敵キャラに追加します。この追加は他のブロックと同じように行えます。トリガーを追加したら、トリガーしたいアクションブロックを追加しているか確認してください。

この画像は、前のステップの画像の敵キャラに、**Shoot**ブロックをつけた状態を示しています。

[Image: image]

**3.**Hierarchy ウィンドウまたはシーンビューで Behavior Brick を選択します。下の画像は、Shoot Behavior Brick をつけた場合のインスペクターの表示になります。ここで Behavior Brick ごとに設定されているカスタム機能の設定を行います。この画像の例では、**Audio Volume**、**Velocity**、**Accuracy** の値を変更しています。やや狙いがバラけた感じに弾を撃ってくる敵キャラができあがります。

[Image: image]

**4.**変更内容を失わないように、セーブはこまめに行いましょう。トップメニューから **File > Save** を選ぶか、ショートカット **Ctrl / Cmd + S**で保存ができます。

ステップを完了としてマーク

## 9. 敵キャラの動きをテストし、改良する

Q&A (0)

ここまでの変更内容が意図通りのものかテストしましょう。テストして、繰り返し修正を重ねることで、自分の思った通りの敵キャラに近づけていくことができます。

**1.**ツールバーの**再生ボタン**をクリックして、再生モードに入ります。

**2.** Game ビューで、加えた変更が意図通りのものか確かめます。プレイヤーの操作方法は次の通りです。

- **WASD または矢印キー**でミニフィグを前後左右に動かせます。
- **スペースキー**でジャンプします。
- **ジャンプした後、プレイヤーが空中にいる間にもう一度スペースキーを押す**と、二段ジャンプします。
- **マウスを Game ビューの中で動かす**と、プレイヤーを中心に視点が移動します。
- **Tab キー**を押すと一時停止し、オプション画面が開きます。

**3.** テストが終わったら、もう一度**再生ボタン**を押して終了しましょう。再生モードで加えた変更は保存されません。

ステップを完了としてマーク

## 10. 作った敵キャラをプレハブ化する

Q&A (0)

いい感じの敵キャラができたら、それをゲームの違う場所でも使いたいと思うものです。これは作った敵キャラをプレハブにすることで簡単に行えるようになります。

**1.**まず、敵キャラに使った Behavior Brick をすべて「NewEnemy」ゲームオブジェクトの子にする必要があります。Hierarchy ウィンドウで Behavior Brick のゲームオブジェクトをすべて選び、「NewEnemy」ゲームオブジェクトの上にドラッグします。

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

**2.** Project ウィンドウで、*Assets > LEGO > Prefabs と移動します。*****

**3. フ**ォルダー内で右クリックして、コンテキストメニューから **Create** > **Folder** を選択します。新しいフォルダーの名前は「MyPrefabs」とします。

**4.** *MyPrefabs* フォルダーを開きます。

**5.**Hierarchy ウィンドウから「NewEnemy」を Project ウィンドウの MyPrefabs フォルダーにドラッグします。

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

**6.**変更内容を保存します。

これで完了です。作った敵キャラのプレハブを Project ウィンドウから、シーンビューに表示されたマイクロゲームの好きな位置にドラッグすることで、インスタンス化することができます。もし敵キャラのインスタンスのいずれかのプロパティを変更したとしても、その変更は他のインスタンスには影響しません。ですので、同じプレハブを使って、同じ敵キャラの少しずつ違ったバリエーションをゲームに追加することができます。

ステップを完了としてマーク

## 11. もっと改造したい人へ

Q&A (0)

ここまでのステップで、独自の敵キャラを作成し、それをプレハブ化する手順を学びました。

他にも、次のような題材があります。意欲のある方は挑戦してみてください。

- ここで作った敵キャラのプレハブから作った複数のインスタンスを、少しずつ違った形で調整して、どれも同じ敵ではないようにする
- ステージのエリアに合わせて、異なる敵キャラを作る

また、他のレゴ® マイクロゲームの Mod ―  「[プレイヤーのミニフィグを取り換える](https://learn.unity.com/tutorial/lego-r-mod-change-the-player-minifig-jp)」と「[鍵のかかったエリアを追加する](https://learn.unity.com/tutorial/lego-r-mod-create-a-locked-area-jp)」にも取り組んでみてください。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
