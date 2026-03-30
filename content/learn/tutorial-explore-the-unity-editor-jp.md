[Image: image]

# Unity エディターに触れる

Tutorial

foundational

+10XP

45 mins

16

(117)

Unity Technologies

[Image: Unity エディターに触れる]Summary

このチュートリアルでは、以下のことを行います：

- Unity エディターでウィンドウを確認します。
- プロジェクトを整理する上でのシーンの役割を理解します。
- シーン内をナビゲートして表示を変更します。
- パッケージマネージャを使用して、パッケージを使って Unity の機能を強化します。

Resources

- [Explore the Unity Editor-transcript.zip](https://unity-connect-prd.storage.googleapis.com/20201027/9e6c02b5-d538-4b0a-8f0f-ed01c2ba9e0e/Explore%20the%20Unity%20Editor-transcript.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955074576)

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

Microgame では、Unity の機能を学び始めたばかりです。このチュートリアルは、その経験をもとに、Unity エディターの基本的な機能と特徴を説明します。

ステップを完了としてマーク

## 2. はじめる前に

Q&A (0)

Microgame を閉じてしまった場合は、Unity Hub で開き直してください：

**1.**  Unity Hub を開き、**Projects** タブを選択します。

[Image: image]

**2.**  利用可能なリストからプロジェクト名を選択して開きます。

[Image: image]ステップを完了としてマーク

## 3. Unity エディター：第一印象

Q&A (0)

Unity エディターに初めて Microgame が読み込まれたとき、あなたはどのように感じましたか？この動画では、定評のあるクリエイターたちが、初めてエディタを開いたときの感想を語っています。

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

[スクリプトのダウンロード](https://connect-prd-cdn.unity.com/20201027/9e6c02b5-d538-4b0a-8f0f-ed01c2ba9e0e/Explore%20the%20Unity%20Editor-transcript.zip?_ga=2.266717318.962705305.1603727885-733260295.1595906103)

最初は戸惑うかもしれませんが、Unity エディターを使いこなすことが自信をつけ、Unity で目標を達成するための第一歩となります！

ステップを完了としてマーク

## 4. Unity エディター入門

Q&A (0)

Microgame のチュートリアルでご覧頂いたように、Unity エディターインターフェイスの異なるエリアは、異なるタスクを完了するために使用されます。エディターインターフェイスのメインウィンドウはすでに使ったと思いますが、ここではその概要とレイアウトの違いを確認してみましょう。

### Unity エディターのインターフェース

[Image: image]

There are five key areas of the basic Editor interface.

### Scene ビューと Game ビュー

デフォルトの Unity エディターレイアウトの中央にあるのが **Scene ビュー**です。これは、あなたが作成している世界へのインタラクティブなウィンドウです。Scene ビューを使ってオブジェクトを操作し、様々な角度から見ることができます。

デフォルトのレイアウトでは、**Game ビュー**もこのエリアに表示されます。Game ビューを使ってゲームをプレイしてみましょう。

### Hierarchy ウィンドウ

**Hierarchy**とは、ゲームワールド内のすべてのもの（およびワールド自体）を整理する場所です。これらのものは**ゲームオブジェクト**と呼ばれています。

Scene ビューでゲームオブジェクトをプロジェクトに追加すると、Hierarchy に表示されます。Scene から GameObject を削除すると、リストに表示されなくなります。

### Project ウィンドウ

**Project ウィンドウ**では、プロジェクトで使用するかどうかに関わらず、プロジェクトで使用できるすべてのファイル（アセット）を見つけることができます。

Project ウィンドウは、フォルダーに整理されたファイルエクスプローラーのように動作します。Project ウィンドウから直接シーンビューにアセットをドラッグして、シーンに追加することができます。

Project ウィンドウと Hierarchy ウィンドウの違いに注意してください。Hierarchy には、現在のシーンのすべてのゲームオブジェクトが含まれており、Project ウィンドウには、プロジェクト全体で利用可能なすべてのアセットが含まれています。

### Inspector ウィンドウ

**Inspector** は、ゲームオブジェクトの詳細情報を探して設定する場所です。

Scene ビューや Hierarchy でゲームオブジェクトを選択すると、Inspector にその**コンポーネント**が表示されます。コンポーネントは、ゲームオブジェクトのプロパティと振る舞いを記述します。

### ツールバー

ツールバーは、常に Unity エディターインターフェースの最上部にあります。ツールバーのボタンを使って、ゲームオブジェクトの選択と調整、シーンの視点の変更、再生モードの開始と停止ができます。

### エディターのレイアウト

エディターのウィンドウの配置を変更するには、ツールバーの**Layout**（レイアウト）メニューを使用します。いくつかのレイアウトが用意されており、自分のレイアウトを保存することもできます。

エディターに最適なレイアウトは、あなたが何をしているか、あなた自身の好みによって異なります。例えば：

- コンポーネントの設定に多くの時間を費やしている場合は、Inspector を Hierarchy の隣にドッキングさせた方がいいかもしれません。
- 環境デザインをたくさんやるなら、Scene ビューをできるだけ大きくした方がいいかもしれません。
- ユーザーインターフェースを編集している場合は、Game ビューが表示されていることを確認してください。

このコースを修了する際には、デフォルトのレイアウトを使用することをお勧めします。

ステップを完了としてマーク

## 5. プロジェクトでシーンを使う

Q&A (0)

Unity エディターのプロジェクトは、**シーン**に整理されています。シーンは、作成した体験のすべてのもののためのコンテナです。

シーンについて考える一つの方法は、個別の体験として考えることです。例えば、ゲームの各レベルは個別の Scene であり、ゲームのメインメニューは別のシーンであるかもしれません。

Unity プロジェクトは、その範囲と複雑さに応じて、1 つのシーン を持つこともあれば、100 以上のシーンを持つこともあります。Unity プロジェクトをどのようにシーンに整理するかについては、厳密なルールはありませんが、Unity のプロジェクトには少なくとも 1 つのシーンが必要です。

### Microgame のシーンを見直す

Microgame プロジェクトのシーンをレビューしてみましょう：

**1.**Project ウィンドウで、**Assets** > [**name of your Microgame**] > **Scenes**の順に移動します。このフォルダーにはプロジェクトのすべてのシーンが含まれています。

**2.** フォルダー内のシーンの名前を確認します。

LEGO® Microgame には 8 つのシーンの例があります：

- エディター内でのチュートリアル体験：1 シーン
- メニューシーン：3 シーン
- Microgame シーン：4 シーン

[Image: image]

Microgame では、シーンはすでにあなたのために作成されています。後日、**3D 入門**と **2D 入門**を修了したときに、あなたは自分のシーンを一から作成することになります。

ステップを完了としてマーク

## 6. シーンのナビゲーション

Q&A (0)

シーンで作業するときは、Scene ビューを簡単にナビゲートしたいと思うでしょう。シーンをナビゲートするのは、ドローンカメラを操作するようなものです。これを使えば、ゲームオブジェクトを任意の角度や距離から確認することができます。

Microgame では、Scene ビューの位置、角度、ズームを変えてシーンをナビゲートしていました。 練習すれば、簡単にナビゲートできるようになります。また、Scene ビューを設定するために使用できる一般的な設定もあります。

さっそく基本のおさらいをしましょう：

- **Pan（パン）：**ツールバーの **Hand**（移動）ツールを選択し、Scene ビューでクリックアンドドラッグしてビューを移動します。
- **Zoom（ズーム）：Alt**（Windows）または**Option**（macOS）を押したまま、Scene ビューで右クリックしてドラッグしてズームします。
- **Orbit（オービット）：Alt** (Windows) または **Option** (macOS) を押したまま、左クリックしてドラッグし、現在のピボットポイントを中心に周回します。注：このオプションは 2D モードでは使用できません。
- **Focus (Frame Select)：**ゲームオブジェクトを選択しているときに、Scene ビューでカーソルを合わせて**F** を選択すると、そのゲームオブジェクトにビューがフォーカスされます。注：カーソルが Scene ビューにない場合、Frame Select は機能しません。

また、多くのゲームでよくある一人称で飛び回って Scene ビューをナビゲートするフライスルー（Flythrough）モードを使用することもできます。手順は以下のとおりです：

- マウスの右ボタンをクリックして長押しします。
- WASD を使用して、ビューを左右/前後に移動します。
- Q と E を使ってビューを上下に移動させます。
- **Shift** を選択したままにしておくと、より速く移動できます。

注：2D モードでは、フライスルーモードは利用できません。その代わり、マウスの右ボタンを押しながらカーソルを移動させると、Scene ビューの周りをパンすることができます。

詳細については、[Unity マニュアルで確認](https://docs.unity3d.com/Manual/SceneViewNavigation.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955074576)することができます。

ステップを完了としてマーク

## 7. パッケージの概要について

Q&A (0)

パッケージには、あなたが望む体験を作成するのに役立つ、さまざまな Unity エディターの拡張機能が含まれています。デフォルトでインストールされているビルトインパッケージがいくつかありますが、パッケージを追加して、ニーズに合わせてカスタムエディターのセットアップを作成することもできます。機能は、Unity エディターとは別に「パッケージ化」されており、Unity バージョンのインストールに必要な初期のダウンロードサイズと時間を短縮することができます。

このコースの後に役立つかもしれないパッケージが 1 つありますので、それをインストールする方法をご紹介します。

### パッケージマネージャのレビュー

**Package Manager**ウィンドウを使用して、Unity エディターに機能を追加するパッケージのインストール、削除、アップデートを行います。

Package Manager を開くには：

**1.**  トップメニューで、**Window > Package Manager** の順に選択します。

[Image: image]

**2.**  デフォルトでは、ウィンドウには **Unity Registry**が表示され、Unity エディターを強化するために使用できるすべてのパッケージが一覧表示されます。パッケージはかなりたくさんありますよ！

[Image: image]

特定のパッケージに関する具体的な情報が必要な場合は、[Unity マニュアルに各パッケージのドキュメント](https://docs.unity3d.com/Manual/pack-keys.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955074576)が掲載されています。

コアとなるエディターとパッケージが提供する機能以外にも、経験を積むにつれて、目的を達成するためのカスタムツールが必要になるかもしれません。これは、サードパーティのプラグインとの統合や、独自のエディター内ツールを作成することで可能になります。経験を積めば積むほど、可能性は無限に広がることを覚えておいてください！

### プロジェクトに含まれるパッケージ

Microgame プロジェクトの特定のパッケージを確認してみましょう。

**3.** ウィンドウの左隅で、パッケージのスコープのドロップダウンメニューを選択し、**In Project** を選択します。

[Image: image]

これらは、Microgame を作成したチームが、あなたがカスタマイズしたプレイヤー体験を作るために使用した追加パッケージです。

**4.** このコースの後半で、自分の作品を他の人と共有するのに役立つパッケージを持っているかどうかをダブルチェックしてみましょう。プロジェクト内パッケージのリストをスクロールして、**WebGL Publisher**パッケージがあるかどうかを確認します。持っている場合は、次のステップをスキップしてください。

**5.**  チェックマークが表示されている **WebGL Publisher** パッケージがない場合は、Unity Registry に戻り、そのパッケージを選択してください。その後、**Install**ボタンを選択して Unity エディターに追加します。

[Image: image]

**6.**  インストールが完了したら、Package Manager ウィンドウを閉じます。

### パッケージマネージャのアセット

パッケージマネージャのもう一つの便利な機能は、他のソースからインポートしたアセットをカタログ化する **My Assets** セクションです。このセクションには、後ほど訪れることになる Unity Asset Store が含まれます。

ウィンドウの左隅で、パッケージのスコープのドロップダウンメニューを選択し、**My Assets** を選択します。

[Image: image]

あなたの Microgame で使用されているアセットのリストと、すでにインポートされているアセットが表示されます。後日、このウィンドウを使って新しいアセットを Unity に取り込み、自分のプロジェクトで使用することになります。

ステップを完了としてマーク

## 8. Unity エディターのヒントとコツ

Q&A (0)

このビデオでは、Unity のクリエイターたちが、エディターで自信をつけるためのヒントとコツをいくつか紹介しています。

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

[トランスクリプトのダウンロード](https://connect-prd-cdn.unity.com/20201027/9e6c02b5-d538-4b0a-8f0f-ed01c2ba9e0e/Explore%20the%20Unity%20Editor-transcript.zip?_ga=2.266717318.962705305.1603727885-733260295.1595906103)

ステップを完了としてマーク

## 9. まとめ

Q&A (0)

このチュートリアルでは、Unity エディターの理解を深め、機能を拡張する方法を学びました。実世界で Unity がどのように使われているかを学ぶことで、あなた自身の学習の道のりを考えることができるようになりました。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
