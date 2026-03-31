[Image: image]

# レゴ® Mod：プレイヤーのミニフィグを取り換える

Tutorial

Beginner

+0XP

10 mins

3

(28)

Unity Technologies

[Image: レゴ® Mod：プレイヤーのミニフィグを取り換える]Summary

自分のマイクロゲームに新しい主人公を登場させましょう！

Languages available:

日本語English日本語简体中文日本語

## 1. 概要

Q&A (0)

この Mod では、デフォルトのレゴ® ミニフィグを Unity プロジェクトの中の他の 3 つのミニフィグのうち 1 つと取り替えます。これを行うために、以下の手順を行います。

- 新しいミニフィグを選んでデフォルトのミニフィグと取り換える
- カメラを新しいプレイヤーのミニフィグのほうを向くようにする
- 変えたところをテストする

それでは始めましょう！

ステップを完了としてマーク

## 2. 始める前に

Q&A (0)

この Mod を始める前にレゴ® マイクロゲームのエディター内チュートリアルを終えておくとさらに学習効果が見込めます。

このチュートリアルを始める前に、マイクロゲームを開きましょう。

**1.** Unity Hub を開きます。

**2. Projects** タブに移動して、保存したマイクロゲームのプロジェクトを選択します。Unity Editor が開きます。開くまで少し時間がかかることもあります。

ステップを完了としてマーク

## 3. 新しいミニフィグを選ぶ

Q&A (0)

マイクロゲームに最初から置かれているミニフィグは「Astronaut（宇宙飛行士）」です。

[Image: image]

プロジェクトの中には、他に 3 種類のミニフィグが入っています。「Adventurer（冒険家）」、「Pirate（海賊）」、「Pizzaboy（ピザ配達のお兄さん）」です。

[Image: image]

今回は、この 3 種類の中からマイクロゲームに置くものを選びましょう。

**1.** Project ウィンドウで *Assets*>*LEGO*>*Prefabs*>*LEGO Minifigs の順に移動します。*

[Image: image]

**2.** 使いたいミニフィグを選び、Project ウィンドウからシーンビューにドラッグします。

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

- シーンビューの視点の角度を変えたいときは、シーンビューの中で **Alt**/ **Opt** + **左クリック**しながら、マウスポインターを動かします。
- ズームイン、ズームアウトするには、シーンビューの中で **Alt**/ **Opt** + **右クリック**しながら、マウスを前に動かすとズームイン、後ろに動かすとズームアウトします。トラックパッドやスクロールホイールを使ってズーム操作を行うこともできます。

**3.** ミニフィグを追加して、これをまた削除したいときは、Hierarchy ビューでミニフィグのゲームオブジェクトを見つけて、名前のところで右クリックして、メニューから **Delete** を選択します。ショートカットとして、**Del** キー（Windows）または **Cmd + Del** キー（macOS）を使うこともできます。

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

この Unity プロジェクトのミニフィグはプレハブです。これはいろいろなものを作るテンプレートのようなものと考えることができます。今回は、ミニフィグのプレハブが必要なものすべてと一緒に準備されており、皆さんはその中から好きなものを選んで、自分のレゴ® マイクロゲームを元に作ったプロジェクトに取り入れることができます。次はそれを試しましょう。

ステップを完了としてマーク

## 4. 新しいミニフィグを試す

Q&A (0)

前のステップで選んだミニフィグの動きをテストしましょう。

**1.**ツールバーの**再生ボタン**を選択し、再生モードに入ります。

**2.**以下のキーでミニフィグを動かすことができます。

- **WASD または矢印キー**でミニフィグを前後左右に動かせます。
- **スペースキー**でミニフィグがジャンプします。
- **ミニフィグをジャンプさせた後、ミニフィグが空中にある間にもう一度スペースキーを押す**と、二段ジャンプします。
- **マウスを Game ビューの中で動かす**と、ミニフィグを中心に視点が移動します。
- **Tab キー**を押すと一時停止し、オプション画面が開きます。

ここでちょっと問題が起きます。ここまでの手順をそのまま進めていくと、画面の中には 2 つのミニフィグがあるはずで、先ほどのキー操作でミニフィグが 2 つとも動くようになっていると思います。が、カメラが最初から置いてあった Astronaut のミニフィグを追いかけるようになっているのです。新しく置いたミニフィグの方を追いかけてほしいところです。

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

**3. 再生ボタン**を再度クリックして、再生モードを終了します。再生モードで加えた変更は消えてしまいます。

この問題を直すには、元々置いてあった Astronaut のミニフィグを消して、カメラが新しく置いたミニフィグを追いかけるように設定を行う必要があります。

ステップを完了としてマーク

## 5. 元々置いてあったミニフィグを削除する

Q&A (0)

まず、Astronaut のミニフィグを消しましょう。

**1.** Hierarchy ビューで、「Player Minifig」ゲームオブジェクトを選びます。これが最初から置いてある Astronaut のミニフィグに対応しています。

**2.** このゲームオブジェクトを右クリックして、「**Delete**」を選択します。Del キー（Windows）または Cmd + Del（macOS）のショートカットを使ってもいいです。

**3.** 必要なら、Hierarchy ビューで新しく置いたミニフィグのゲームオブジェクトを右クリックして、「**Rename**」を選択して名前を変えておきます。元々置いてあったミニフィグに合わせて、ここでは「Player Minifig」としておきましょう（もちろん、別の名前でも構いません。別の名前にした場合は、後の説明の「Player Minifig」をその名前に読み替えてください）。

ステップを完了としてマーク

## 6. 新しいミニフィグをプレイヤーとして割り当てる

Q&A (0)

Hierarchy ビューには、このマイクロゲームのカメラを制御しているゲームオブジェクトが 2 つあります。

- 「Third Person Free Look Camera」：これは Player Minifig を追いかけるように設定されているカメラです。
- 「Camera Brain」：これはこの Unity プロジェクトのさまざまなカメラ設定を制御するゲームオブジェクトです。

この Mod では、Third Person Free Look Camera の設定だけを行います。

カメラが新しく置いたミニフィグを追いかけるようにするには、そのミニフィグをプレイヤーとして割り当てる必要があります。先ほどのステップでミニフィグの名前を変えましたが、目標の状態にするには、あと 2、3 の設定を行う必要があります。

**1.**Hierarchy ビューで、「Third Person Free Look Camera」ゲームオブジェクトを選択します。

[Image: image]

**2.**インスペクターで、「CinemachineFreeLook」コンポーネントを探します。リストの上から 2 番目にあるはずです。

**3. Follow** と **Look At** プロパティに注目します。

[Image: image]

このフィールドに新しいプレイヤーのミニフィグを割り当てれば、カメラは新しいミニフィグに視点を合わせるようになり、また、ミニフィグをマイクロゲームの中で動かすと、それを追いかけるようになります。

**4.**まず、「Player Minifig」ゲームオブジェクトを Hierarchy ビューから、インスペクターの **Follow** フィールドにドラッグします。

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

**注意**: ドラッグをしようとしたときに間違って「Player Minifig」をクリックして選択すると、インスペクターから CinemachineVirtualCamera コンポーネントの表示が消えてしまいます。こうなった場合は、もう一度「Third Person Free Look Camera」ゲームオブジェクトを Hierarchy ビューから選べば大丈夫です。

**5.** 「Player Minifig」ゲームオブジェクトを Hierarchy から選び、インスペクターの **Look At** フィールドにドラッグします。

**6.** トップメニューの **File** > **Save** を選択して、ここまでの作業を保存します。**Ctrl / Cmd + S** のショートカットでも同じことができます。

ステップを完了としてマーク

## 7. 変更内容をテストする

Q&A (0)

では変更した内容をテストしてみましょう。

**1.** Hierarchy で「Player Minifig」ゲームオブジェクトを選択します。「Third Person Free Look Camera」が選択されたままだと、グリッドツール（Cinemachine Virtual Camera Framer）が再生モードで表示され、ビューが遮られた状態になっています。

**2.** ツールバーの**再生ボタン**をクリックして、再生モードに入ります。

**3.** カメラが期待通りにプレイヤーのミニフィグを追いかけるかテストします。操作方法は先ほど示したものと同じです。

- **WASD または矢印キー**でミニフィグを前後左右に動かせます。
- **スペースキー**でミニフィグがジャンプします。
- **ミニフィグをジャンプさせた後、ミニフィグが空中にある間にもう一度スペースキーを押す**と、二段ジャンプします。
- **マウスを Game ビューの中で動かす**と、ミニフィグを中心に視点が移動します。
- **Tab キー**を押すと一時停止し、オプション画面が開きます。

**4.** テストが終わったら、もう一度**再生ボタン**を押して終了しましょう。

これでおしまいです！

ステップを完了としてマーク

## 8. 次のステップ

Q&A (0)

このチュートリアルではミニフィグの変更を行いました。他のレゴ® マイクロゲームの Mod にも挑戦してみましょう。「[自分だけの敵キャラを作る](https://learn.unity.com/tutorial/lego-r-mod-build-your-own-enemy-jp)」と「[鍵のかかったエリアを追加する](https://learn.unity.com/tutorial/lego-r-mod-create-a-locked-area-jp)」のチュートリアルがあります！

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
