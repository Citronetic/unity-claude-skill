[Image: image]

# レゴ® Mod：Behaviour スクリプトを使う

Tutorial

Beginner

+10XP

20 mins

1

(18)

Unity Technologies

[Image: レゴ® Mod：Behaviour スクリプトを使う]Summary

Behaviour を使って、Behaviour Brick を使わずにカスタムの敵キャラを作ってみましょう。

Resources

- [LEGO® Behaviour Brick Manual.pdf](https://unity-connect-prd.storage.googleapis.com/20201025/af8d06d9-0638-457f-aff8-d7b1e0917dcb/LEGO%C2%AE%20Behaviour%20Brick%20Manual.pdf?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035315618)

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

このクリエイティブ Mod では、それぞれの振る舞いに対応する Behaviour Brick を使わずに、個別の Behaviour を持たせたカスタムの敵キャラを作成します。これにより、機能を犠牲にすることなく、敵がどのように見えるかについてより多くの選択肢を与えることができます。

さあ、始めましょう。

ステップを完了としてマーク

## 2. 始める前に

Q&A (0)

#### エディター内チュートリアル

最初にレゴ® マイクロゲームのエディター内チュートリアルを完了しておくと、この Mod からもっと多くのことを学べます。ご自分のペースで、時間をかけて学んでいってください。

#### マイクロゲームを開く

レゴ® マイクロゲームを開くには、次のようにします。

**1.**  Unity Hub を開きます。

**2.**  マイクロゲームを使ったことがあるかどうかに従って、次のどちらかの手順を行ってください。

- すでにマイクロゲームを使用したことがある場合は、**Projects** タブで保存した Unity プロジェクトを選択してください。プロジェクトを選ぶと Unity エディターが開きます。これには数分かかることもあります。
- マイクロゲームを初めて使う方は、**Learn** タブで「LEGO® Microgame」を選択してください。指示に従って、エディター内チュートリアルを完了してください。

#### **アドオンパッケージ**

このクリエイティブ Mod を進めるためにアドオンパッケージをインストールする必要はありません。

#### 補助資料

このクリエイティブ Mod と併せて使うと役立つ資料をご紹介します。

- [**LEGO® Tools を使った制作**](https://learn.unity.com/tutorial/creating-with-lego-tools-jp)ガイドを見直し、Unity エディターでマイクロゲームのブロック組み立てシステムを自信をもって使えるようにしておきましょう。
- [**Behaviour Brick マニュアル**](https://connect-prd-cdn.unity.com/20201025/af8d06d9-0638-457f-aff8-d7b1e0917dcb/LEGO%C2%AE%20Behaviour%20Brick%20Manual.pdf?_ga=2.246854022.365614953.1606693961-1880619545.1535881689)をダウンロードし、レゴ® マイクロゲームで使えるブロックの種類を把握して、どのようにブロックを使うかアイデアを練ってみましょう。

ステップを完了としてマーク

## 3. Behaviour Brick マニュアルの紹介

Q&A (0)

レゴ® マイクロゲームには、自分の作りたいゲームを作るために役立つ、さまざまな Behaviour Brick が用意されています。

[**Behaviour Brick マニュアル**](https://connect-prd-cdn.unity.com/20201025/af8d06d9-0638-457f-aff8-d7b1e0917dcb/LEGO%C2%AE%20Behaviour%20Brick%20Manual.pdf?_ga=2.222097946.365614953.1606693961-1880619545.1535881689)は、Behaviour Brick がそれぞれどのような機能を持ち、設定可能なさまざまなプロパティについて理解するための非常に優れた資料です。また、次に何をしようか迷ったときに、ブロックの組み合わせ方やブロックをゲームに組み込む方法についての優れたヒント集にもなっています。

ステップを完了としてマーク

## 4. 複雑な敵キャラを考える

Q&A (0)

敵の振る舞いを例に、その Behaviour Brick がマイクロゲームの中で敵の見え方にどのような影響を与えるかを考えてみましょう。Behaviour Brick は、Project ウィンドウの *Assets > LEGO > Prefabs > LEGO Behaviour Bricks* に格納されています。

次のような敵キャラについて考えてみましょう。

- 直接プレイヤーの方を向く（LookAt ブロック）
- プレイヤーの方に移動してくる（Move ブロック）
- プレイヤーが触れるとミス（Hazard ブロック）
- プレイヤーが指定した距離より近づくと動き出す（Nearby Trigger ブロック）

[Image: image]

これらの Behaviour Brick は、皆さんが作成した敵の見え方に大きな影響を与えます。例えば、触れるとミスになる小さな物体を作りたい場合、そのデザインはこれらのブロックによって大きな制約を受けることになります。

このクリエイティブ Mod ではブロックを排した制作を行います。各 Behaviour Brick には特定のビヘイビアスクリプトがアタッチされており、実は Behaviour Brick を使用しなくても、このスクリプトを敵キャラに適用することができます。

ステップを完了としてマーク

## 5. 小さな敵キャラを作る

Q&A (0)

まずは、Starter Bricks コレクションを使って、Move と LookAt の Behaviour Brick だけを組み立てたものに含める形で、小さな敵を作ってみましょう。組み立てのプロセスを復習する必要がある場合は、「[自分だけの敵キャラを作る](https://learn.unity.com/tutorial/lego-r-mod-build-your-own-enemy-jp)」ガイドと「[LEGO® Tools を使った制作](https://learn.unity.com/tutorial/creating-with-lego-tools-jp)」を確認して、完了したらまたこの手順から再開してください。

**ヒント：**敵キャラに見分けやすい名前を付けるようにしましょう。

Move と Look At の Behaviour Brick を使用して敵を作成し、いくつか追加でブロックを追加して、敵をセキュリティロボットのように見えるようにしました。

[Image: image]

このクリエイティブ Mod の残りの部分ではこの敵キャラを例として使いますが、好きな形の敵キャラを作ってもいいですし、これまでに作った敵キャラを改造しても構いません。

ステップを完了としてマーク任意のステップ

## 6. ブロックの色のカスタマイズ

Q&A (0)

Behaviour Brick の色を変えることはできませんが、普通のブロックの色をカスタマイズすることはできます。次のようにします。

**1.** 色を変えたいブロックをシーンビューで選択します。

**2.** インスペクターで、**Brick (Script)** コンポーネントの折り畳みリストを展開します。

[Image: image]

**3.** **Moulding Colour 0** プロパティフィールドを選択します。

[Image: image]

**4.**  Moulding Colour Picker ウィンドウから、好きな色を選択します。

[Image: image]ステップを完了としてマーク

## 7. ブロック無しでビヘイビアスクリプトを追加する

Q&A (0)

自分だけの小さな敵キャラを作ったら、ブロックを使わずにビヘイビアスクリプトを追加することができます。

**1.** Project ウィンドウで、*Assets > LEGO > Scripts > LEGO Behaviours* に移動します。

[Image: image]

**2.** Project ウィンドウから選択したビヘイビアスクリプトをシーンビューの Move Behaviour Brick にドラッグします。この例では、「Hazard」スクリプトを追加しています。

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

**3.**シーンビューで Move ブロックを選択し、インスペクターで新しいビヘイビアスクリプトコンポーネントが利用可能になっていることを確認します。

[Image: image]

これでインスペクターに表示されているプロパティを使って振る舞いを調整することができるようになりました。

**4.**同じブロックに他のビヘイビアスクリプトを追加するには、同じプロセスに従ってください。この例では、Nearby Trigger スクリプトを追加し、ロボットがプレイヤーに近づいたときに Hazard がトリガーされるようにしました。

[Image: image]ステップを完了としてマーク

## 8. 敵キャラをさらに作り込む

Q&A (0)

基本的な設定が終わったら、少し時間をかけて敵キャラを作り込んでいきましょう。これは作成した敵キャラがどのようなものであったかによって少し手順が変わってくるので、ここでは例として使っている敵キャラの調整方法を解説します。

#### Move Action

次の項目の設定を決めてください。

- **Collide：**敵キャラが他のオブジェクトにぶつかったときに止まるようにする場合は、このプロパティを有効に設定してください。
- **Repeat：**このアクションを繰り返し実行させるときはこのプロパティを有効に、1回だけ実行させるときは無効に設定してください。

#### LookAt Action

次の項目の設定を決めてください。

- **Pause：**このプロパティは敵キャラが動いているときに、敵キャラがプレイヤーの方を向く前にどのくらいの時間停止するかを指定します。
- **Rotate：**敵キャラがプレイヤーの方を向くときに、水平方向、垂直方向、または自由な方向のいずれに回転するかを指定します。

#### Audio

あまり多くのオーディオが重なって再生されないようにするために、いくつかのアクションに付随するオーディオを削除します。例の敵キャラの場合、Hazard Action のオーディオは残して、Move ブロックと Look At ブロックのデフォルトのオーディオを削除しました。

#### 敵キャラの配置

例の敵キャラが良い感じのセキュリティロボットになりました。これを空中に置いて、上からプレイヤーを見下ろす形にしました。

[Image: image]ステップを完了としてマーク

## 9. テストと反復修正

Q&A (0)

カスタムの敵キャラが出来上がりました。保存してテストしてみて、ゲームに必要なものが出来上がったかを確認してください。

**1.** 画面上部のメニューで、**File > Save**を選択するか、ショートカットの **Ctrl**または **Cmd + S**で保存を行います。

**2.**  ツールバーで、**再生ボタン**を選択して再生モードに入ります。

**3.** ゲームビューで変更内容をテストします。次の操作が可能です。

- **WASD** または **矢印**キーで移動
- **スペースキー**でジャンプ
- キャラクターが空中にいる間にジャンプ操作をすると二段ジャンプ
- マウス操作でキャラクター周りの視点移動
- **Tab**キーでポーズしてメニューを表示

**4.**再生モードを終了するには、もう一度**再生ボタン**選択してください。再生モードで行った変更は保存されないことに注意してください。

ステップを完了としてマーク

## 10. もっと改造したい人へ

Q&A (0)

Starter Bricks だけでなく、Cool Bricks コレクションも使用して、さまざまなBehaviour Brick やビヘイビアスクリプトを使って、自分の好みの見た目の敵キャラをいろいろ作ってみてください。

アイデアが出てこないなら、たとえば次のような敵キャラを作ってみるのもよいでしょう。

- ある地点の周りを回転し、その視界にプレイヤーが入るとプレイヤーを検知する防犯カメラ。プレイヤーを検知すると、Look At Action と Shoot Action を使って、武器を使ってくるという敵キャラです。
- プレイヤーがジャンプするたびに振る舞いを変化させる障害物。Input Trigger を使って実現できます。

皆さんが作ったものにお目にかかることを楽しみにしています。

#### **次のステップ**

他の**[レゴ® マイクロゲームクリエイティブ Mod](https://learn.unity.com/project/lego-template-jp)**にもトライして、皆さんのマイクロゲームをどんどんカスタマイズしてしまいましょう。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
