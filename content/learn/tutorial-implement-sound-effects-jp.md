[Image: image]

# サウンドエフェクトの実装

Tutorial

Beginner

+0XP

30 mins

1

(17)

Unity Technologies

[Image: サウンドエフェクトの実装]Summary

このチュートリアルでは、以下のことを学びます：

- 静的な効果音の実装
- 接触の効果音の実装
- これらのサウンドエフェクトにクローズドキャプションを追加

Languages available:

日本語English日本語한국어简体中文日本語

## 1. 概要

Q&A (0)

基本的なインタラクト可能な VR 体験ができたので、オーディオを使ってより魅力的で没入感のあるものにすることができます。このチュートリアルでは、プロトタイプルームのオブジェクトに静的な効果音と接触音のサウンドエフェクトを追加します。また、クローズドキャプションを追加して、VR 体験をより包括的なものにします。

ステップを完了としてマーク

## 2. はじめる前に

Q&A (0)

このチュートリアルでは、VR 初心者向け Unity プロジェクトと VR ハードウェアを使用します。はじめる前に：

**1.**  VR 初心者向けの Unity プロジェクトを開きます。

**2.** ハードウェアの準備ができていることを確認してください。Oculus Link を Oculus Quest で使用している場合は、Oculus アプリから今すぐこれを有効にして接続してください。

ステップを完了としてマーク

## 3. VR での基本的なオーディオ効果音の実装

Q&A (0)

Unityでは VR ではない体験と同じように VR 体験にサウンドを追加することができます。Unityではオーディオを立体化することもできます（3D 環境の中からオーディオソースが来ているように聞こえるようにする）。Unity のオーディオ立体化機能を使用するには、以下を確認する必要があります：

- シーンの Camera GameObject には Audio Listener コンポーネントが付いています。つまり、VR ヘッドセットの位置に基づいて、Unity がヘッドフォンを通して適切にサウンドを立体化できるようになっています
- VR 体験の一部であるサウンドは、オーディオソースの空間ブレンドが 3D に設定されているため、より没入感のある体験になります

この Unity プロジェクトのカスタムメニューを使用して作成されたプロトタイプのシーンでは、すでにデフォルトで設定されています。

ステップを完了としてマーク

## 4. オブジェクトに静的なサウンドエフェクトを追加する

Q&A (0)

まず、プロトタイプルームに空間的にループするサウンド（ヒューズボックスのための低いハム音）を追加してみましょう。

Fusebox GameObject にサウンドを追加するには：

**1.** Hierarchy で、**Fusebox**GameObject を選択します。

**2.**Inspector で、**Add Component**を選択します。 「Audio Source」を検索し、このコンポーネントをゲームオブジェクトに追加します。

[Image: image]

**3.** Project ウィンドウで、**Assets** > **VR Beginner** > **Audio** の順に移動します。**SFXDoorHumLoop** オーディオファイルを検索します。

**4.**  Project ウィンドウから**SFXDoorHumLoop**を Audio Source コンポーネントの上部にある Audio Clip プロパティにドラッグします。

**5.**  Audio Source コンポーネントで、**Play On Awake** と **Loop**を有効にします。

[Image: image]

**6.**   **Spatial Blend** スライダーを 3D（数値フィールドは 1）に設定します。

[Image: image]

**7.** まだ開いていない場合、グレーの矢印を選択して 3D サウンド設定を展開します。

[Image: image]

**8.**以下のプロパティ値を設定します：

- **Volume Rolloff**から**Linear Rolloff**へ、つまり、オーディオソースから離れれば離れるほど静かになるということです
- **Min Distance** を **0.2** に設定、これは最大音量が聞こえる範囲を指定できます
- **Max Distance** を **4**に設定、これは音が聞こえる最大距離を指定しできます

[Image: image]

**9.** **Ctrl**+ **S** キーを押して変更を保存します。

**10.**これで効果音を試すことができます。ヒューズボックスの横のテレポーターに乗っていると、大きな音が聞こえてきます。さらに離れた場所にテレポーターを作るとはるかにかすかな効果音になります。頭を動かすと、現実と同じように音声が変化します。

ステップを完了としてマーク

## 5. VR でのクローズドキャプションの使用

Q&A (0)

クローズドキャプションは、VR 体験の包括性を向上させることができる機能です。この学習プロジェクトには、VR 体験にどのように実装できるかの目安として、クローズドキャプションシステムのプロトタイプの例が含まれています。

プロトタイプのクローズドキャプションシステムは、下記の 3 つのスクリプトで構成されています：

- **CCDatabase：**特定のオーディオクリップを 1 つまたは複数の行のテキストと関連付け、各行のタイミングを表示する
- **CCSource：**Audio Source コンポーネント（Fusebox のような）を持つオブジェクトに追加することができ、オブジェクトのクローズド・キャプションを有効にすることができる
- **CCManager：**シーン内でクローズドキャプションが有効になっているオーディオソースをチェックし、ユーザーがオブジェクトの前にいるときにテキストを表示する

これらのスクリプトはすべて **Assets > VR Beginner > Scripts > System** の順に移動するとあります。

ステップを完了としてマーク

## 6. サウンドエフェクトにクローズドキャプションを追加する

Q&A (0)

Fusebox の効果音（サウンドエフェクト）にクローズドキャプションを追加してみましょう：

**1.**Project ウィンドウで、Assets フォルダーに移動します。右クリックして、**Create > ClosedCaption > CCDatabase**を選択し、新しいデータベースの Asset を作成します。

[Image: image]

**2.** **F2** を押して、アセットの名前を *TutorialCCDatabase* に変更します。

**3.** Asset アイコンをダブルクリックしてデータベースエディターを開きます。

[Image: image]

**4.**Project ウィンドウで、**Assets > VR Beginner > Audio** の順に進みます。Project ウィンドウから **SFXDoorLoopHum** を TutorialCCDatabase ウィンドウにドラッグします。これは、Fusebox に追加した効果音です。

**5.** 効果音の名前で表示される新しいボタンを選択します。

[Image: image]

**6.** **New Line** を選択して、データベースに新しい行のテキストを作成します。新しい **Line** フィールドに「[ Humming ]」を追加します。

[Image: image]

**7.** 効果音の長さが 3 秒以上あるので、閉じたキャプションのためにもう 1 行のテキストを作成して、Unity Project でどのように見えるか見てみましょう。もう一度 **New Line** を選択して設定します：

**Time** を **1.5**に設定

- **Line** に「[ More humming ]」を追加

[Image: image]

つまり、サウンドが 1.5 秒再生されると、2 行目のテキストが表示されます。これでデータベースエディターのウィンドウを閉じることができます。

**8.**  Hierarchy で、**CCSystem** GameObject を選択します。

**9.** Inspector で、Closed Captions System が読み込むデータベースとして新しい TutorialCCDatabase を選択するには、**Database** フィールドの右側にある選択ボタンを使用します。

[Image: image]

**10.** **Ctrl + S** キーを押して変更を保存します。

ステップを完了としてマーク

## 7. Fusebox をクローズドキャプションのソースとして設定

Q&A (0)

効果音にクローズドキャプションを追加したので、シーン内のクローズドキャプションのソースとして、Fusebox GameObject を設定する必要があります：

**1.**  Hierarchy で、Fusebox GameObject を選択します。

[Image: image]

**2.**  Inspector で、**Add Component**を選択します。**CC Source** コンポーネントを検索して追加します。

[Image: image]

**3.**  Project ウィンドウで、**Assets** > **VR Beginner** > **Prefabs** >**System**の順に進みます。

[Image: image]

**4.**  Project  ウィンドウの **CCCanvas**Prefab を Inspector の CC Source コンポーネントの**Canvas Prefab**フィールドにドラッグします。

このキャンバスは、クローズドキャプションがどのように表示されるかを定義します。Unity での UI 開発の経験が豊富な方は、VR 体験に合わせてカスタマイズすることができます。

**5.**  CC Source コンポーネントの以下のフィールドを使用して、キャプション表示の基本的な調整を行うことができます：

- **Always Tracked** を有効にします。これにより、再生中のクローズドキャプション付きのオブジェクトを指す矢印がユーザーのビューの中央に表示されます。これは、ユーザーにとって重要なオーディオソース、例えば、ゲームプレイ情報を与えるオーディオソースを示すことができます。
- **Max Distance** を **2**に設定します。これは、キャプションが表示される最大距離です。 Fusebox のキャプションは隣にいるときは表示されますが、テーブルの隣にいるときは表示されません。
- **スケール**を **1**以上に設定するとデフォルトのキャプションサイズが大きくなり、1 以下に設定すると小さくなります。

**6.** **Ctrl**+ **S** キーを押して変更を保存します。

**7.**これで、効果音のクローズドキャプションをテストすることができます。Fusebox の横に立つと、効果音のループに合わせてキャプションのテキストが表示されます。ボックステーブルに戻ると、クローズドキャプションのテキストは表示されません。**Always Tracked** を有効にした場合、効果音の方向を示す矢印が表示されるはずです。

ステップを完了としてマーク

## 8. オブジェクトに接触音の効果を追加する

Q&A (0)

VR 初心者には**SFXPlayer** と呼ばれるカスタムシステムが搭載されており、スクリプトで SFX（特殊効果）サウンドを再生できるようになっています。カスタムメニューを使って作成したプロトタイプのシーンには、デフォルトでこのシステムが含まれています。この Unity プロジェクトの特徴の一つは、インタラクション可能なオブジェクトが他のオブジェクトと接触したときにサウンドを設定するカスタムスクリプトです。例えば、このスクリプトでは、掴みやすい懐中電灯をテーブルの上に落とすと音が鳴るようになっています。

シーン内の把持可能なオブジェクトに接触音の効果を追加するには：

**1.**  Hierarchy で、インタラクト可能なアイテムの GameObject を選択します。

[Image: image]

**2.**  Inspector で、**Add Component**ボタンを選択します。

**3.**  **Contact Sound Player**コンポーネントを検索して選択します。これは、この Unity プロジェクトのために作成されたカスタムコンポーネントです。

[Image: image]

**4.** Project ウィンドウで、**Assets** > **VR Beginner** > **Audio** の順に移動して、効果音のファイルを選択します。フォルダ内の 4 つの**SFXImpactHeavy** オーディオクリップのうちの 1 つを試してみてください。

**5.**  Project ウィンドウから、Contact Sound Player コンポーネントの **Clips**プロパティにファイルをドラッグします。

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

複数の効果音でこれを行うと、オブジェクトが他のオブジェクトと接触したときにスクリプトがランダムに 1 つの使用を選択します。4 つのバリアント **SFXImpactHeavy** オーディオクリップをすべて追加してみてください。

**6.** **Ctrl**+ **S** を選択して変更を保存します。

**7.**  VR で効果音をテストできるようになりました。選択したインタラクション可能なオブジェクトを掴んで、ブロックテーブルのいずれかにドロップします。Contact Sound Player コンポーネントに追加したサウンドエフェクトのいずれかが聞こえるはずです。

ステップを完了としてマーク

## 9. 練習問題：接触音効果のためのクローズドキャプションを追加する

Q&A (0)

オブジェクトに接触の効果音を追加したので、効果音にクローズドキャプションを追加してみましょう。

以下のことを覚えておいてください：

- 効果音をデータベースに追加し、そのキャプションテキストとタイミングを設定する
- Contact Sound Player コンポーネントで、**Closed Captioned** チェックボックスを有効にする
- クローズドキャプションが正常に実装されていることを確認するためのテストを行う

この練習問題を完了するために、もっとガイダンスが必要な場合は、このチュートリアルのステップ 6 と 7 をご確認ください。

ステップを完了としてマーク

## 10. まとめ

Q&A (0)

このチュートリアルでは、オーディオとクローズドキャプションを実装して VR 体験を向上させました。次に、UI 開発のための Unity プロジェクトの設定方法を学びます。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
