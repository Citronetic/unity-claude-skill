[Image: image]

# レゴ® Mod：雰囲気を変える

Tutorial

Beginner

+10XP

15 mins

0

Unity Technologies

[Image: レゴ® Mod：雰囲気を変える]Summary

見た目と音を変えて、マイクロゲームの雰囲気をカスタマイズしましょう。

Resources

- [Moody Tunes - LEGO® Microgame Add-ons](https://assetstore.unity.com/packages/audio/music/moody-tunes-lego-microgame-add-ons-179856)

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

このクリエイティブ Mod では、以下のものを使ってマイクロゲームの雰囲気を変えていきます。

- スカイボックス
- 霧による視覚効果
- 照明
- 音楽

ここでお見せする例はちょっと不気味なものを使っていますが、皆さんが好きな雰囲気になるように、これらのゲームの要素を使うこともできます。さあ、始めましょう。

ステップを完了としてマーク

## 2. 始める前に

Q&A (0)

#### エディター内チュートリアル

この Mod を始める前にレゴ® マイクロゲームのエディター内チュートリアルを終えておくとさらに学習効果が見込めます。ご自分のペースで、時間をかけて学んでいってください。

#### マイクロゲームを開く

レゴ® マイクロゲームを開くには、次のようにします。

**1.**  Unity Hub を開きます。

**2.**  マイクロゲームを使ったことがあるかどうかに従って、次のどちらかの手順を行ってください。

- すでにマイクロゲームを使用したことがある場合は、**Projects** タブで保存した Unity プロジェクトを選択してください。プロジェクトを選ぶと Unity エディターが開きます。これには数分かかることもあります。
- マイクロゲームを初めて使う方は、**Learn** タブで「LEGO® Microgame」を選択してください。指示に従って、エディター内チュートリアルを完了してください。

#### **アドオンパッケージ**

このクリエイティブ Mod を完了するには、以下のレゴ® マイクロゲームアドオンをダウンロードしてインストールする必要があります。

- [**Moody Skies**](https://assetstore.unity.com/packages/2d/characters/moody-skies-lego-microgame-add-ons-179859)
- [**Moody Tunes**](https://assetstore.unity.com/packages/audio/music/moody-tunes-lego-microgame-add-ons-179856)

ステップを完了としてマーク

## 3. スカイボックスを変更する

Q&A (0)

まずは[スカイボックス](https://docs.unity3d.com/ja/current/Manual/skyboxes.html?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035317937)を変更するところから始めましょう。これは Unity シーンに空を表示するために使うものです。

**1.** 画面上部のメニューから、**Window**> **Rendering**> **Lighting Settings**を選択します。

Lighting ウィンドウをインスペクターの隣にドックしておくと便利でしょう。Lightning ウィンドウの上部をクリックして、インスペクターウィンドウの上部にそれをドラッグします。そうすると、ウィンドウをドックできる場所に張り付くように移動します。

[Image: image]

**2.** 折りたたまれている **Environment**メニュー（上部）を開き、Skybox Material プロパティを探してください。

[Image: image]

**3.**Project ウィンドウで、*Assets > AddOns > MgLEGO Moody Skies > Materials > Skyboxes*と移動します。

[Image: image]

**4.**Project ウィンドウから新しいスカイボックスを **Skybox Material**プロパティフィールドにドラッグして、ボタンを離して割り当てます。

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

すべてのスカイボックスを試してみて、ゲームに一番合うと思うものを見つけてください。

ステップを完了としてマーク

## 4. 新しい霧のマテリアルを作成して割り当てる

Q&A (0)

スカイボックスを切り替えると、空に浮かぶ島の下にかかっている霧が少し明るすぎるように見えてきます。次はこれを調節しましょう。

**1.**  Project ウィンドウで、*Assets > AddOns > MgLEGO Moody Skies > Materials > Environment*と移動します。ここには「Cartoon Fog」、「Dusk Fog」、「Night Fog」の 3 種類の霧のマテリアルがあります。

[Image: image]

**2.** Hierarchy ウィンドウで、「SCENERY」のセクションから「Environment」ゲームオブジェクトを探します。

[Image: image]

**3.** 「Environment」ゲームオブジェクトの名前の左側にある灰色の矢印アイコンをクリックして、これを開きます。

**4.** 「FogPlane」ゲームオブジェクトを選択します。そうすると、FogPlane が Scene ビューでハイライトされます。これは、環境全体の霧の層を構成します。

[Image: image]

**5.**インスペクターで、**Mesh Renderer コンポーネント**を探します。デフォルトで最小化されている場合は、灰色の矢印アイコンをクリックして折りたたまれたメニューを開きます。

[Image: image]

「Day Fog」がマテリアルとして、**Element 0** フィールドに割り当てられています。

**6.** Hierarchy ウィンドウで、「FogPlane」ゲームオブジェクトが選択されたままであることを確認します。選択されていたら、お好みの霧のマテリアルを Project ウィンドウから **Element 0**プロパティフィールドにドラッグして、ボタンを離してこれを割り当てます。

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

**注：**上記の方法で割り当てたマテリアルは、Scene ビューの「FogPlane」ゲームオブジェクトにマテリアルをドラッグして、ボタンを離すことでも割り当てることができます。動画では、カーソルが FogPlane の上を通ったとき、わずかな間紫色に変わるところを見ることができます。ただし、初めてこのような作業を行う時は、インスペクターを使うほうがより正確に作業を行うことができるでしょう。

ステップを完了としてマーク任意のステップ

## 5. FogPlane の色を変える

Q&A (0)

シーン内の霧のマテリアルを変更しました。このマテリアルの色も変えることができます。

**1.**  Project ウィンドウで、選択した霧のマテリアルを選択します。

**2.** インスペクターで、**Color** フィールドを探します。

[Image: image]

**3.**   次のいずれかを行います。

- カラーピッカー（スポイトのアイコン）を選択して、シーンにすでにある色からよく合うと思われるものを選びます。
- パレットから色を選びたい場合は、カラーピッカーの左側にあるボックスを選択します。

霧のマテリアルの色は、デザインについていろいろ試している間、いつでも調節することができます。

ステップを完了としてマーク

## 6. ディレクショナルライトを調節する

Q&A (0)

いまシーンには 1 つだけ光源があります。Directional Light がそれです。これは太陽（または月）の役割をするもので、環境全体を照らしてプレイヤーが動き回れるようにします。ここでは、調節した環境の外観に合うように、光源を少し調整しましょう。

**1.** Hierarchy ウィンドウで、「Directional Light」ゲームオブジェクトを選択します。

[Image: image]

**2.** インスペクターで、**Color** プロパティを探し、カラーボックスを選択します。

[Image: image]

**3.**テーマに合う色を選択します。月明かりのある夜を表現したい場合は薄い青緑色、不吉な感じにしたい場合は赤というように色を選びます。

[Image: image]

**ヒント：**プレイヤーがステージを動き回れるようにする必要があることを忘れないでください。選んだ色が暗すぎると、プレイヤーがちゃんと動き回れないという事態が起こり得ます。

**4.  Intensity**プロパティの名前が書いてある部分をクリックして、右にドラッグして値を増やす、あるいは左にドラッグして値を減らします。

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

**5.** **Ctrl / Cmd + S** で変更を保存し、ツールバーの**再生**を選択して再生モードに入り、変更した内容をテストします。

**6.** テストが終わったら**再生**を選択して再生モードを終了します。再生モードで行った変更は保存されないことに注意してください。

ステップを完了としてマーク

## 7. さらに照明を調整する

Q&A (0)

FogPlane と Directional Light に変更を加えました。Lighting Settings ウィンドウで、さらに調整を行うことができます。

**1.** Lighting ウィンドウをドッキングしていない場合は、上部のメニューから **Window > Rendering > Lighting Settings** を選択して、開き直します。

**2.**Environment Lighting セクションでは、**Sky Color**（空の色）、**Equator Color**（赤道の色）、**Ground Color**（地面の色）のプロパティを変更することができます。

[Image: image]

**3.**Other Settings セクションでは、**Fog Color**（霧の色）のプロパティを変更することができます。これは、主なプレイヤーエリアの周りにある、遠くの山がある島を覆い隠す霧の設定になります。

[Image: image]

自分のゲームに合うものが見つかるまで、時間をかけて実験してみてください。

ステップを完了としてマーク

## 8. BGM を追加する

Q&A (0)

次に、ゲームにいくつかのBGMを追加してみましょう。ステージにジュークボックスを置いてみるのは面白いかもしれません。そのやり方をご紹介します。

**1.** Project ウィンドウで、*Assets > LEGO > Prefabs > LEGO Models > Contraptions* を選択します。

[Image: image]

**2.**「Jukebox」を選択し、Scene ビューにドラッグします。

**3.** LEGO® Tools で、**ブロックの組み立て**を有効にします。

[Image: image]

**4.**  Scene ビューで、ジュークボックスの上のオーディオアイコン（ギズモ）を選択して、ジュークボックスのモデルの部品になっている、Audio Behaviour Brick を選択します。

[Image: image]

**5.**  インスペクターで、**Audio Action (Script)** コンポーネントを探します。次に、**オーディオピッカー**（丸いアイコン）を選択します。

[Image: image]

**6.** バックグラウンドで流すオーディオトラックを探して選択（ダブルクリック）します。不気味な感じにするときは、「*Ghouls' Night Out*」がぴったりです。

[Image: image]

**7.**  **Spatial**プロパティを無効にします。

[Image: image]

Spatial を有効すると、ゲーム中のプレイヤーが音を聴き取る主体になります（ゲーム内体験の一環）。今回はジュークボックス自体が音源なので、この設定をオンにすると、プレイヤーがジュークボックスの近くにいるときにしか音楽が聴こえません。このプロパティを無効にすると、オーディオはステージ全体の BGM として動作します。

**8.**  **Loop**プロパティが有効になっていることを確認します。

**9.**  **Ctrl / Cmd + S**で変更を保存し、**再生**を選択してプレイヤー体験をテストします。テストが終わったら、必ず再生モードを終了するようにします。これで、デザインに繰り返し修正を加えて、その変更を保存できるようになります。

ステップを完了としてマーク

## 9. もっと改造したい人へ

Q&A (0)

ステージにぴったりのルックアンドフィールを得るためには、何度か実験を重ねる必要があるかもしれません。それは普通のことです。

雰囲気作りの作業をさらに発展させるために、[**テーマに沿った敵**](https://learn.unity.com/tutorial/lego-r-mod-build-your-own-enemy-jp)やカスタマイズされた環境要素を作って、体験を強化するのはいかがでしょうか。

皆さんがどんなものを作るのか、今から楽しみです。

#### 次のステップ

他の[**レゴ® マイクロゲームクリエイティブ Mod**](https://learn.unity.com/project/lego-template-jp) にもトライして、皆さんのマイクロゲームをどんどんカスタマイズしてしまいましょう。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
