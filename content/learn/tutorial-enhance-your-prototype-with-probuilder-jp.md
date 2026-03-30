[Image: image]

# ProBuilder によるプロトタイプのレベルアップ

Tutorial

Beginner

+10XP

45 mins

0

Unity Technologies

[Image: ProBuilder によるプロトタイプのレベルアップ]Summary

ProBuilder は、Unity でカスタムジオメトリ（3D形状）をビルド、編集、そしてテクスチャを設定するために使用することができるパッケージです。ProBuilder を使えば、プリミティブの組み合わせにとどまらず、環境に応じたさまざまなオブジェクトを作成することができます。

このチュートリアルが終わるころには、次のことができるようになります：

- ProBuilder がどのようにプロトタイプ開発をサポートするかを説明する。
- Probuilder でメッシュを作成する。
- ジオメトリを構成して、プロトタイプの基本的なランドスケープを作成する。
- メッシュに Collider (コライダー) を設定する。
- メッシュをトリガーとして設定する。

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

ゼロからモデルを作ることなく、プロトタイプ環境を充実させるためのツール、***ProBuilder*** が Unity に搭載されています。

ProBuilder は、Unity でカスタムジオメトリ（3D形状）をビルド、編集、テクスチャを設定するために使用するパッケージです。ProBuilder を使えば、プリミティブの組み合わせにとどまらず、環境に応じたさまざまなオブジェクトを作成することができます。

森を歩くシミュレーターのために神秘的なモニュメントの数々を作ったり、迷子になるような街を作りたいですか？ProBuilder では、プレースホルダーまたはオブジェクト自体を作成することができます（採用するポリッシュや様式的なアプローチに依存します）。

**注：**このチュートリアルは、ProBuilder の包括的な概要ではなく、プロトタイピングのニーズをサポートするための出発点となるものです。

ステップを完了としてマーク

## 2. ProBuilder の設定

Q&A (0)

ProBuilder の設定手順：

**1.**  プロジェクトに応じた [**ProBuilder** パッケージをインストール](https://learn.unity.com/tutorial/project-setup-processes#60ed7a6aedbc2a002520b6ec)します。

**2.** メインメニューで、**Tools > ProBuilder > ProBuilder Window** の順に選択します。ProBuilder ウィンドウを Inspector の横にドッキングすると使いやすいかもしれません。

**3.**  このウィンドウのオプションは、デフォルトでテキストとして表示されます。ウィンドウが Icon Mode (アイコンモード) の場合、***More** (⋮)*を選択して Text Mode (テキストモード) に切り替え、***Use Text Mode*** を使用してください。

[Image: image]ステップを完了としてマーク

## 3. キューブの作成

Q&A (0)

ProBuilder を使って、Unity エディターで直接ジオメトリをモデリングします。まず、キューブを作成します：

**1.**  Project ウィンドウで、**Assets > CreativeCore_Prototyping > Scenes** の順に進み、新しいシーンを作成します。

**2.**  新しいシーンを開きます。

**3.**  先ほど開いた ProBuilder ウィンドウで、***New Shape***の隣にある***Add****(**+**)*を選択して、新しいプレビュー用ゲームオブジェクトを作成します。この作業をすると、Shape Toolウィンドウが開きます。

**注：**代わりに ***New Shape*** を選択すると、パネルを開いたりプレビュー機能を使わずに、新しいゲームオブジェクトを作成することができます。

**4.**  Shape Tool ウィンドウで、***Shape Selector***ドロップダウンを使って *Cube* 形状を選択します。

[Image: image]

**5.**  ***Build*** を選択して、キューブメッシュを作成することを確認します。Scene ビューに、同じ形状の新しいプレビュー ゲームオブジェクトが表示されるのが分かると思います。

[Image: image]

これで Shape Tool ウィンドウを閉じれば、このプレビューは消えます。

ステップを完了としてマーク

## 4. 代替方法を用いたキューブの作成

Q&A (0)

次に、2 つ目のキューブを作成する必要があります。このキューブは異なる目的で使用しますので、最初のキューブはシーンに残しておいてください。

次の代替方法を用いてキューブを作成します：

**1.**  Hierarchy で右クリックし、**3D Object > ProBuilder Cube** と選択します。

**2.**先ほど作成した新しいキューブゲームオブジェクトを選択します。必要であれば、これに個別の名前を付けることができます。

**3.**  Scene ビューで、2 つ目のキューブを、最初に作成したキューブと間隔が空くように移動します。こうすることで、個別に作業することが容易になります。

**4.**  キューブを 1 つ選択します。Inspector ウィンドウで、***Open ProBuilder***を選択します。

[Image: image]

これから ProBuilder のゲームオブジェクトを編集することになりますが、そのためには ProBuilder のウィンドウを開いておく必要があります。開いている間は、Scene ビューで ProBuilder の編集モードを使用することができ、ジオメトリをより詳細に制御することができます。ProBuilder ウィンドウを閉じると、Unity エディターは通常の Scene ビューコントロールに戻ります。

**注：**ProBuilder ウィンドウを誤って閉じてしまった場合は、ProBuilder オブジェクトの Inspector で ***Open ProBuilder***ボタンを選択（またはトップメニューから**Tools > ProBuilder > ProBuilder Window**）することで、いつでも再開することができます。

ステップを完了としてマーク

## 5. ProBuilder の編集モードを見直す

Q&A (0)

ProBuilder が Scene ビューでアクティブになっている間、上部に 4 つの新しいボタンが付いたツールバーが表示されます：

[Image: image]

各ボタンを使うと Scene ビューで選択しているものを変更できます。

まずは、さまざまな選択モードで試してみましょう：

**1.**Scene ビューで、***Object Selection***（最初のアイコン）を選択し、オブジェクト編集モードを有効にします。オブジェクト編集モードは、Unity の標準的な編集モードです。Object (オブジェクト) モードで選択を行うと、メッシュ全体を選択することになります。

[Image: image]

**2.** キューブを左クリックし、移動、回転、再スケールします。終了したら、Ctrl+Z (Windows) または **Cmd+Z** (macOS) を使って変更を元に戻します。

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

**3.**  ***Vertex Selection***（2 つ目のアイコン）を選択します。Vertex (頂点) 編集モードは、頂点（2 つ以上の角が交わる点）を操作するために使用します。キューブの角の一つを左クリックします。

[Image: image]

**4.** 選択した頂点を動かして、キューブをさまざまに変化させることができるか見てみましょう。終了したら、**Ctrl/Cmd + Z**で変更を元に戻せます。

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

**5.**  ***Edge Selection*** (3 つ目のアイコン) を選択します。Edge (エッジ/辺) 編集モードを使用すると、2 つの頂点で構成されるエッジを操作することができます。キューブのエッジの一つを左クリックします。

[Image: image]

**6.**選択したエッジを移動、回転、または拡大/縮小して、立方体をさまざまに変化させる方法を確認できます。終了したら、**Ctrl/Cmd + Z** で変更を元に戻せます。

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

**7.**  ***Face Selection***（4 つ目のアイコン）を選択します。Face (面) 編集モードを使用すると、メッシュの面全体を操作することができます。キューブの面の一つを左クリックします。

[Image: image]

**8.**選択した面を移動、回転、または拡大縮小します。終了したら、**Ctrl/Cmd + Z**で変更内容を元に戻します。

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

## 6. キューブを用いた壁の作成

Q&A (0)

ProBuilder の編集モードについて理解できたので、壁の作成に取りかかる準備ができました。まず、キューブの形を変えることから始めましょう：

**1.**  Scene ビューで、***Face Selection***を選択します。

**2.** キューブの最上部の面を選択し、選択した面を動かしてメッシュの高さを増やします。

[Image: image]

**3.**  キューブの側面を選択し、選択した面を動かしてメッシュの幅を広げます。

[Image: image]

**4.**  キューブの前面を選択し、選択した面を動かしてメッシュの深さを浅くします。

[Image: image]

**5.**この作業を繰り返して、2 つ目のキューブで 2 つ目の壁を作成します。

完成したら、シーン内に 2 つの別々の壁があるはずです。この 2 つの壁を別々にし、次のステップで作業する壁を選択します。2 つ目の壁の編集は、後ほど行います。

ステップを完了としてマーク

## 7. エッジと面を押し出しドアを作る

Q&A (0)

ProBuilder にはメッシュをモデリングするためのツールが複数用意されています。これらは、オブジェクトのパーツを選択すると、ProBuilder ウィンドウに表示されます。現在有効になっている選択範囲の種類（オブジェクト、頂点、エッジ、面）に応じて、自由に使えるツールが動的に変化します。まずは、最も重要なツールの一つである面の押し出し (**extrusion**) から始めましょう。

壁にドアの大きさの面を作るには：

**1.**  Scene ビューで、***Face Selection*** を有効にして、壁の一番上の面を選択します。

[Image: image]

**2.**  選択した面を移動する際に**Shift**を押しながら移動すると、その面が押し出されます。この押し出されたセグメントは、ドアの上の壁の高さを示しています。

[Image: image]

**3.**  **Shift**キーを押しながら、壁の左側にある 2 つの面をそれぞれ 1 回ずつ左クリックし、複数選択します。

[Image: image]

**4.**  選択した面を移動させながら**Shift** キーを押し続け、ドアに適用したい幅に押し出します。これらの押し出されたセグメントは、ドアとその上の壁の部分となります。

[Image: image]

**5.**  同じ 2 つの面を選択したまま、**Shift**キーを押しながら面を再度押し出し、ドアを配置した後に壁を続けます。

[Image: image]

これで壁の押し出しが完了しました。下の画像でハイライトされている面が、ドアの穴になる面です：

[Image: image]

この面は、今、あなたが望む形とはちょっと違うかもしれませんが心配しないでくださいね。

ステップを完了としてマーク

## 8. ドアの形状の調整

Q&A (0)

ドアを作るのに必要な面の数が揃ったので、ドアの出入り口になる面の大きさを調整する必要があります。

エッジを選択し、移動する手順：

**1.**  Scene ビューで、***Edge Selection***を有効にします。

**2.**  ドアのある面の右端を選択します。

[Image: image]

**3.**  ProBuilder ウィンドウで、***Select Edge Loop***を選択します。これにより、モデルの周囲を「ループ」する隣接するエッジがすべて選択されます。

[Image: image]

**ヒント：*Select Edge Ring*** ツールは、モデルの周囲にリング状にエッジを選択します。これらのツールを覚えておくと、必要なエッジを素早く選択することができますよ！

**4.** Scene ビューで、エッジの垂直ループを選択した状態で、壁に沿ってエッジを希望する幅に移動します。

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

**5.**  次に、ドアを設置する場所の上辺を選択します。

[Image: image]

**6.**  ProBuilder ウィンドウで、***Select Edge Loop*** を選択し、エッジを希望の高さまで壁の上または下に移動させます。

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

これで、思い通りの形と大きさのドアができたはずです！

ステップを完了としてマーク

## 9. ドア用の穴を開ける

Q&A (0)

これで面の形と大きさが揃ったので、あとはその面をクリアしてドアを作成するだけです：

**1.**  Scene ビューで、***Face Selection*** を有効にします。

**2.** ドアの面を選択します。

[Image: image]

**3.**  この面を消すには、***Backspace***（Windows）または***Delete***（macOS）を使用します。

**注：**すでに穴が開いているように見えますが、これは面が片側からしか見えないからです。

[Image: image]

**4.**Scene ビューで、Camera を移動して壁の反対側を見ます。反対側の面がまだ残っていることがわかります。前の手順を繰り返して、この面とドア下部の面を削除します。

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

## 10. フレーム強化のために隙間を埋める

Q&A (0)

あと少しでドアができるところですが、面を取り除いた部分のメッシュには穴が開いており、その隙間から壁のメッシュの内側が露出している状態になっています。幸いなことに、ProBuilder には、エッジ (辺) の間の隙間を埋めるための機能があります。

Bridge (ブリッジ) 機能で隙間を埋める：

**1.** Scene ビューで、***Edge Selection***を有効にします。

**2.** **Shift** + 左クリックで、ドアの側にある平行な 2 つのエッジ (辺) を複数選択します。

[Image: image]

**3.**  ProBuilder ウィンドウで、***Bridge Edges*** を選択します。

[Image: image]

**重要：**ご注意ください！***Fill Hole*** というツールがありますが、これは別の操作のためのものです。必ず ***Bridge Edges*** を選択してください。

**4.**  Scene ビューで、ドア上のさらに 2 つの平行なエッジ (辺) を複数選択します。

[Image: image]

**5.**  ProBuilder ウィンドウで、***Bridge Edges*** を選択します。

**6.**  ドアの最後の面も同様に、前の手順を繰り返して隙間を塞ぎます。

[Image: image]

これで、壁の中に隙間なく、サイズも形もぴったりなドアができたはずです！

ステップを完了としてマーク

## 11. 既存の壁面にドアを作成する

Q&A (0)

押し出しは、ドアを作るのに適した方法ですが、適切な場所に押し出すには前もって計画を立てる必要があります。後でドアを作りたい場合、いくつかのテストの後で既存の壁に新しいドアや新しい窓があると便利だとわかったらどうしますか？その場合は、既存の面に新しいエッジ (辺) を挿入する必要があります。

先ほどのチュートリアルの残骸の壁に戻ります。この方法では、押し出しツールを使わずに、前の例で持っていたエッジの構成を再現する必要があります。これは、エッジループ (Edge Loop) を追加することで可能になります。

既設の壁にドアを作る手順：

**1.**  Scene ビューで、***Edge Selection***を有効にします。

**2.**  壁の側面にある平行な 2 つのエッジ (辺) を複数選択します。

[Image: image]

**3.**  ProBuilder ウィンドウで、***Insert Edge Loop*** を選択します。これにより、モデルの周囲に新しいエッジループが水平に挿入され、選択したエッジが 2 つに分割され、完全なループが形成されるまで継続されます。

[Image: image]

**4.**  Scene ビューで、新しいエッジループが選択されていることを確認し、それを上下に動かしてドアの高さを決めます。

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

**5.**  新しく作成したエッジループから正面を向いたエッジ (辺) と、壁の底面から平行なエッジ (辺) を複数選択します。

[Image: image]

**6.**  ProBuilder ウィンドウで、***Insert Edge Loop***を選択します。

**7.**  Scene ビューで、新しいエッジループが選択されていることを確認し、ドアの右側にしたい場所に移動します。

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

**8.**  先ほど作成した水平ループの左端と、壁の下から平行に伸びるエッジ (辺) を複数選択します。

[Image: image]

**9.**  ProBuilder ウィンドウで、***Insert Edge Loop*** を選択します。

**10.**  Scene ビューで、新しいエッジループが選択されていることを確認し、それをドアの左側の置きたい場所に移動させます。

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

これで、前に作成したものと同じようなドアの形をした面ができるはずです。

**11.** あとは以前と同じように、2 つの面を削除し、空の面を埋める作業を行うだけです。もし、この手順を忘れてしまった場合は、前のステップを参照してください。

#### 学ぶ範囲を深める

このドアも、もう 1 つエッジループを追加するだけで、簡単に窓になることにお気づきでしょうか？試しに垂直方向の 2 つのエッジ (辺) を選択し、***Insert Edge Loop*** 機能を使用してみてください。

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

## 12. Set Collider と Set Trigger について

Q&A (0)

ProBuilder のメッシュを Collider (コライダー) や Trigger (トリガー) にすることができます。これは、体験のプロトタイプを作成する際に非常に便利です。

デフォルトでは、ProBuilder のメッシュには Collider がアタッチされています。これは、キャラクターコントローラーが、作成した壁と衝突することを意味します。ただし、非表示のコライダーや非表示のトリガーが必要な場合は、ProBuilder の ***Set Collider***または ***Set Trigger***ツールを使用することができます。例えば、ユーザーが体験やゲームのエリア外に出ないようにしたり、ユーザーが体験の新しいゾーンに移動したときにそれを感知したりといった使い方が考えられます。

**注：**これをテストするために、キャラクターコントローラーやプレイヤーの動きを設定しておいてください。**Creative Core: Prototyping**で自主制作プロジェクトに設定した Unity プロジェクトで作業している場合は、すでにこのような状態になっているはずです。

コライダーやトリガーを壁に追加してテストしてみましょう：

**1.**  最初に取り組むべき壁を 1 つ選びます。

**2.**Scene ビューで、***Object Selection***を有効にして、壁を選択します。

**3.**ProBuilder ウィンドウで、***Set Collider*** を選択します。壁の色と不透明度がどのように変化したかに注目してください。

[Image: image]

これでコライダーは、キャラクターコントローラーを使ったテストができるようになりました。

**4.**  Scene ビューで、もう一方の壁を選択します。

**5.**ProBuilder メニューから、***Set Trigger***を選択します。壁の色と不透明度がどのように変化したかに注目してください。

[Image: image]

**6.**  キャラクタコントローラーがこの壁に衝突したことをスクリプトで検出することができるようになりました。**Creative Core: Prototyping** で作成したカスタムスクリプトを使用している場合は、[OnTriggerEvent カスタムスクリプトを使用](https://learn.unity.com/tutorial/create-your-greybox-prototype#619e7b5cedbc2a54eb8bccbf)して、これらの衝突を検出する方法を確認します。

ステップを完了としてマーク

## 13. ProBuilder ツールを使ったマテリアルの適用

Q&A (0)

ProBuilder には、マテリアルを簡単に適用できるツールがあり、ProBuilder で作成したプロトタイプの環境をカスタマイズすることができます。

以下を実行できます：

- ボタンやショートカットで適用できる[クイックマテリアルを設定](https://docs.unity3d.com/Packages/com.unity.probuilder@5.0/manual/material-tools.html#quick)します。
- [マテリアルパレット (Material Palette) を作成](https://docs.unity3d.com/Packages/com.unity.probuilder@5.0/manual/material-tools.html#material-palette)して、複数のマテリアルを整理し、より効率的にプロトタイプを作成することができます。
- オブジェクトまたは単一の面だけに[マテリアルを適用](https://docs.unity3d.com/Packages/com.unity.probuilder@5.0/manual/material-tools.html#apply)します。

ステップを完了としてマーク

## 14. 次のステップ

Q&A (0)

サンプルプロジェクトで ProBuilder の基本を練習したので、新しいスキルを使ってプロトタイプを強化する準備ができています。ProBuilder の他の使い方や機能を知りたい場合は、まず[そのドキュメントから始める](https://docs.unity3d.com/Packages/com.unity.probuilder@4.0/manual/index.html)とよいでしょう。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
