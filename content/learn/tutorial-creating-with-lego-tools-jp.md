[Image: image]

# LEGO® Tools を使った制作

Tutorial

Beginner

+10XP

15 mins

5

(40)

Unity Technologies

[Image: LEGO® Tools を使った制作]Summary

このガイドはこれから LEGO® Tools を使って自分好みのカスタムマイクロゲームを作ろうとしている皆さんの手助けをするものです。

Resources

- [LEGO® Behaviour Brick Manual.pdf](https://unity-connect-prd.storage.googleapis.com/20201025/c3bf28e3-0748-4db2-9727-374c24612412/LEGO%C2%AE%20Behaviour%20Brick%20Manual.pdf?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954401665)

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

LEGO® Tools は、このマイクロゲームのためのカスタムシステムです。これを使うと、本物のブロックを使っているときと同じように、レゴ® のブロックを使って Unity で制作ができます。しかし、これらのシステムのため、このマイクロゲームでは、他の Unity プロジェクトとは少し違った方法で作業することになります。

LEGO® Tools と Unity エディターの機能を組み合わせて、自分だけのマイクロゲームを作成する方法をおさらいしましょう。

ステップを完了としてマーク

## 2. 始める前に

Q&A (0)

#### エディター内チュートリアル

このガイドは、エディター内チュートリアルを終えて、引き続きレゴ® マイクロゲームを使った制作を行いたい方に向けたものです。もしエディター内チュートリアルをまだ終えられていない場合は、制作を始められる前に一通りチュートリアルをご覧になることをおすすめします。

#### マイクロゲームを開く

レゴ® マイクロゲームを開くには、次のようにします。

**1.** Unity Hub を開く。

**2.** 以下の手順に従い、レゴ® マイクロゲームを開く。

- これまでにマイクロゲームを使ったことがある場合は、**Projects** タブに移動して、保存してある Unity プロジェクトを選択してください。選択すると、Unity エディターが開きます。これには数分かかる場合もあります。
- マイクロゲームを始めてお使いになる場合は、**Learn** タブに移動し、「LEGO® Microgame」を選択してください。そのあと、説明を読みながらエディター内チュートリアルを完了してください。

#### Behaviour Brick マニュアル

[**Behaviour Brick マニュアル**](https://connect-prd-cdn.unity.com/20201025/c3bf28e3-0748-4db2-9727-374c24612412/LEGO%C2%AE%20Behaviour%20Brick%20Manual.pdf?_ga=2.119822528.977537503.1603653463-1889877257.1602875132)をダウンロードして、レゴ® マイクロゲームで使えるブロックの種類を確認し、Behaviour Brick を活用するアイデアを探してみてください。

ステップを完了としてマーク

## 3. シーンビューの中を移動する

Q&A (0)

エディター内チュートリアルでは、シーンビューで位置、角度、ズームを変えてシーン（レベル）の中を移動しました。この手順を振り返ってやり方をまとめておくとともに、これからレゴ® マイクロゲームを使って制作を進める中でシーンビュー内を移動する方法の選択肢をいくつか見ておきましょう。

#### Unity のナビゲーションツール

- **パン：手のひらツール**をツールバーで選択（キーボードショートカット **Q**）して、シーンビューでクリックしてドラッグすると視点が動きます。
- **ズーム： Alt**（Windows）または **Option**（macOS）を押しながら、シーンビューで右クリックしてドラッグするとズームします。
- **回転：Alt**（Windows）または **Option**（macOS）を押しながら、左クリックしてドラッグすると、現在のピボット点の周りを回転します。
- **フォーカス（フレーム選択）：**ゲームオブジェクトが選択されているときに、シーンビューにカーソルを載せて **F** キーを押すと、選択しているゲームオブジェクトにフォーカスしたビューになります。**重要：**シーンビューにカーソルが乗っていないと、フレーム選択は機能しません。

#### フライスルーモード

フライスルーモードを使って、多くのゲームで見られるような 1 人称視点でシーンビューの中を飛び回って移動することもできます。これは次の手順で行います。

- マウスの右ボタンをクリックしたままにします。
- **WASD キー**を使って、視点をそれぞれ左、右、前、後ろに動かすことができます。
- **Q** キーと **E** キーを使って、視点をそれぞれ上と下に動かすことができます。
- **Shift** キーを押したままにすると、移動が速くなります。

ステップを完了としてマーク

## 4. LEGO® Tools の機能を確認する

Q&A (0)

LEGO® Tools はシーンビューの左上に表示されています。ここでは 2 つのものを制御します。ブロックの組み立て方法（**Brick Building**）とブロックの選択方法（**Brick Selection**）です。

[Image: image]

#### **ブロックの組み立て方法**

左のボタンで**ブロックの組み立て方法**を制御します。このボタンで、マウスまたはトラックパッドでクリックして、実際のレゴ® ブロックと同じようにブロックをつなげる操作の有効・無効を切り替えられます。

**Ctrl**+ **Alt** + **N**（Windows）または **Cmd**+ **Opt** + **N**（macOS）のショートカットを使うこともできます。

#### **ブロックの選択方法**

右のボタンで**ブロックの選択方法**を制御します。このボタンで、単一のブロックだけを動かしてつなぐことができるモード（**Single Brick Selection**）と、ブロックをグループで動かすことができるモード（**Connected Brick Selection**）を切り替えることができます。

**Ctrl**+ **Alt** + **K**（Windows）または **Cmd**+ **Opt** + **K**（macOS）のショートカットを使うこともできます。

ステップを完了としてマーク

## 5. ブロックとレゴ® モデルの追加と削除

Q&A (0)

#### ブロックとモデルの追加

Behaviour Brick とレゴ® モデルをレベル（シーン）に追加するには、次のようにします。

**1.** Project ウィンドウのブロックまたはモデルの格納されているフォルダーに移動します。

**2.** ブロックまたはモデルを Scene ビューにドラッグして、マウスのボタンを離します。

**3.** ブロックまたはモデルは、シーンに置くまでカーソルについて動きます。

**注：**

- ブロック組み立てモードを有効にしなくても、レベル（シーン）にブロックまたはレゴ® モデルを追加することができます。
- Assets > LEGO > Prefabs > LEGO Models フォルダーに、いろいろなブロックやレゴ® モデルが格納されています。

#### ブロックとモデルの削除

個別の Behaviour Brick を削除するには、次のようにします。

**1.** LEGO® Tools で、**ブロックの組み立て**を有効化して、**ブロックの選択方法**を **Single Brick**に設定します。

**2.**シーンビューで削除する個別のブロックを選びます。

**3.  Ctrl**または**Cmd キー**を押しながら **Del キー**を押して、ブロックを削除します。

レゴ® モデルを削除するには、次のようにします。

**1.** LEGO® Tools で、**ブロックの組み立て**を有効にし、**ブロックの選択方法**を **Connected Brick**に設定します。

**2.**シーンビューで削除するレゴ® モデルを選びます。

**3.  Ctrl**または**Cmd キー**を押しながら **Del キー**を押して、モデルを削除します。

ステップを完了としてマーク

## 6. ブロックの接続および取り外し

Q&A (0)

このマイクロゲームでは、LEGO® Tools を使って、本物のブロックと同じようにブロックを接続したり取り外したりすることができます。しかし、始める前に知っておくべきことがいくつかあります。

#### ブロックの接続方法

すべてのブロックとレゴ® モデルは、デフォルトでレベルのグリッドにスナップ（くっつく）します。また、すでにグリッド上に配置されている他のブロックやレゴ® モデルにスナップすることもできます。シーンビューではグリッドを見ることができます。

[Image: image]

マイクロゲーム内にあるすべての島、また、新たに島を追加した場合も、その地面にブロックやレゴ® モデルをスナップすることができます。グリッドは自動的に島の表面に沿って配置されるので、そこにブロックやレゴ® モデルを接続することができます。ただし、島がグリッドのベースレベルに配置されていないとグリッドが表示されません。

ブロックやレゴ® モデルを空中に配置したり、配置を微調整したりするには、Unity の Transform ツールを使用する必要があります。その方法については、[このガイドの後の部分](https://learn.unity.com/tutorial/creating-with-lego-tools#5f91a833edbc2a00207d599b)で説明します。

#### ブロックの接続

レゴ® ブロックをつなぐには次のようにします。

**1.** レベル（シーン）に、ブロックまたはレゴ® モデルを追加します。

**2.** LEGO® Tools で、**ブロックの組み立て**を有効にし、**ブロックの選択方法**を操作する対象に応じて次のようにします。

- 個別のブロックを接続する場合（個別のブロックをモデルに接続する場合を含む）は、**Single Brick**にします。
- レゴ® モデルを接続する場合は、**Connected Brick** にします。

**3.**ブロックまたはレゴ® モデルはマウスカーソルを追従します。また、グリッドにスナップしながら、接続できる位置を示しつつ動きます。

**4.**良い配置が見つかったら、もう一度マウスをクリックして、ブロックまたはレゴ® モデルを配置します。

#### ブロックの取り外し

ブロックをレゴ® モデルから取り外すには、次のようにします。

**1.**LEGO® Tools で、**ブロックの組み立て**を有効にし、**ブロックの選択方法**を **Single Brick**にします。

**2.**シーンビューで、取り外すブロックをクリックします。

**3.**ブロックまたはレゴ® モデルがマウスカーソルに追従してそれまであった場所から離れ、グリッドや他のブロックにスナップして、次に接続できる場所を示しながら動きます。

**4.**良い配置が見つかったら、もう一度マウスをクリックして、ブロックを配置します。

ステップを完了としてマーク

## 7. ブロックとレゴ® モデルを回転させる

Q&A (0)

ブロック組み立てを有効にすると、ブロックおよびレゴ® モデルを 90° ずつ回転させることのできる特別なギズモが使えます。

これを使うには、次のようにします。

**1.**  LEGO® Tools で、**ブロック組み立てを有効**にして、操作する対象に合わせて**ブロックの選択方法**を次のように選択します。

- 個別のブロックを回転させる場合は、**Single Brick**を選択します。
- レゴ® モデルを回転させる場合は、**Connected Brick** を選択します。

**2.**  シーンビューでブロックまたはレゴ® モデルを選択します。

**3.** 回転ギズモを使ってブロックまたはレゴ® モデルを 90° ずつ回転させます。

[Image: image]ステップを完了としてマーク

## 8. ブロックとレゴ® モデルを配置する

Q&A (0)

[Unity のトランスフォームツール](https://docs.unity3d.com/Manual/PositioningGameObjects.html?_ga=2.15061428.365614953.1606693961-1880619545.1535881689&ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954401665)にある**移動**ツールや**回転**ツールを使えば、ブロックやレゴ® モデルをグリッドとは関係なく配置することができます。

移動ツールを使ってブロックやレゴ® モデルを空中に置いたり、微妙に位置を変更したりできます。これはチュートリアルレベルにクリスタルのような収集できる報酬を配置する時に特に便利です。

回転ツールは基本的な配置のときよりも、ブロックやレゴ® モデルの配置に最後の微調整を加えるときに使うとよいでしょう。

**重要：**Unity のトランスフォームツールを使ってブロックやレゴ® モデルの配置を調整した後に、LEGO® Tools を使ってブロック等を移動させると、ブロック等は再びグリッドにスナップして移動して、変更は失われます。これを防ぐために、変更を加えたら常に保存する（**Ctrl**または **Cmd + S**）ことを忘れないようにしましょう。

#### ブロックまたはレゴ® モデルを移動させる

移動ツールを使って単一のブロックまたはレゴ® モデルを移動させるには、次のようにします。

**1.** LEGO® Tools で**ブロックの組み立て**を有効にして、**ブロックの選択方法**を、個別のブロックを操作する場合は **Single Brick**に、レゴ® モデルを操作する場合は **Connected Brick**にします。****

**2.**シーンビューで、ブロックまたはモデルを選択します。

**3.** LEGO® Tools で、**ブロックの組み立て**を無効にします。

**4.** ツールバーの**移動ツール**を選択します（キーボードショートカット **W**）。ブロックまたはモデルの位置を、シーンビューに表示されているギズモを使って調整することができるようになります。

**5.** 変更を保存します（**Ctrl**または **Cmd** + **S**）。

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

#### ブロックまたはレゴ® モデルを回転させる

回転ツールを使って単一のブロックまたはレゴ® モデルを回転させるには、次のようにします。

**1.** LEGO® Tools で**ブロックの組み立て**を有効にして、**ブロックの選択方法**を、個別のブロックを操作する場合は **Single Brick**に、レゴ® モデルを操作する場合は **Connected Brick**にします。****

**2.**シーンビューで、ブロックまたはモデルを選択します。

**3.** LEGO® Tools で、**ブロックの組み立て**を無効にします。

**4.** ツールバーの**回転ツール**を選択します（キーボードショートカット **E**）。ブロックまたはモデルの位置を、シーンビューに表示されているギズモを使って調整することができるようになります。

**5.** 変更を保存します（**Ctrl**または **Cmd** + **S**）。

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

## Complete this Tutorial

すべてのステップを完了としてマーク
