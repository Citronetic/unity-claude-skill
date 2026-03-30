[Image: image]

# ユーザーのタッチを検出する

Tutorial

Beginner

+10XP

60 mins

0

Unity Technologies

[Image: ユーザーのタッチを検出する]Summary

画面を 1 回タップするという動作は、最もシンプルで直感的なモバイルデバイスとのインタラクションの 1 つです。ほとんどのユーザーは、画面上で対話できると思った要素を本能的にタップしてみるでしょう。

このチュートリアルでは、以下のことを実行します。

- 新しいビジュアルスクリプトを作成します。
- ユーザーが画面にタッチしたかどうかを検出します。
- 画面上でのタッチの位置を検出します。
- ユーザーのタッチに関する情報を表示するユーザーインターフェースを追加します。

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. 概要

Q&A (0)

画面を 1 回タップするという動作は、最もシンプルで直感的なモバイルデバイスとのインタラクションの 1 つです。ほとんどのユーザーは、画面上で対話できると思った要素を本能的にタップしてみるでしょう。

現在のアプリケーションは、環境内の平面を検出して表示することができます。このプロジェクトが完了すると、それらの平面のどれかをタップすればバーチャル世界へのポータルがスポーンされるようになります。そのための第一歩は、ユーザーが画面をタッチしたタイミングとその位置を検出することです。

このチュートリアルでは、以下のことを実行します。

- 新しいビジュアルスクリプトを作成します。
- ユーザーが画面にタッチしたかどうかを検出します。
- 画面上でのタッチの位置を検出します。
- ユーザーのタッチに関する情報を表示するユーザーインターフェースを追加します。

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

## 2. 新しいスクリプトグラフを作成する

Q&A (0)

まず、以下の手順に従って新しいスクリプトグラフを作成します。

**1.**「Hierarchy」内を右クリックし、「**Create Empty**」を選択します。

**2.**  新しい空のゲームオブジェクトに「Visual Scripts」という名前を付けます。

**3.**「Inspector」で、「**Add Component**」を選択してから、Script Machine コンポーネントを追加します。

[Image: image]

**4.**Script Machine コンポーネントの **Graph** プロパティを見つけて、「**New**」を選択します。

**5.**「Save Graph」ダイアログウィンドウが表示されたら、_**ARPortal** フォルダー内に新しいフォルダーを作成して、「Visual Scripts」という名前を付けます。

**6.**新しいグラフに「TapToPlace」という名前を付けて、「**Save**」を選択します。

[Image: image]

**7.**Script Machine コンポーネントで、グラフのテキストフィールドを以下のように更新します。

- 「**Title**」：タップして配置
- 「**Summary**」：AR 平面上のタッチを検出してポータルオブジェクトを配置する

[Image: image]

**8.**「**Edit Graph**」を選択して **TapToPlace** スクリプトグラフを開きます。

ステップを完了としてマーク

## 3. アプリケーションにデバッグ UI を追加する

Q&A (0)

ビジュアルスクリプトの作業を開始する前に、デバイスでアプリケーションをデバッグする準備をする必要があります。

スマートフォン用のアプリケーションを開発する場合は、デバッグに関して固有の課題が発生します。アプリケーションをデバイス上で実行していると、発生したエラーをコンソールで簡単に確認する方法がありません。

このような状況では、アプリケーションの実行中にデバイス上に直接表示されるシンプルなデバッグ用ユーザーインターフェース（UI）を実装すると役立つことがあります。これは、メッセージを出力して、アプリケーションが予想どおりに動作していることを確認できるシンプルなテキストボックスで構いません。

[Image: image]

すぐに使用できるシンプルな UI を用意しましたが、その外観は自由にカスタマイズすることができます。

#### デバッグ UI を実装する

以下の手順に従って、アプリケーションにデバッグ UI を追加し、メッセージを記録します。

**1.**Project ウィンドウで、**_ARPortal** > **Prefabs** > **Testing** に移動します。

**2.**  Project ウィンドウから **Debug UI** プレハブをクリックして、「Hierarchy」にドラッグします。

**3.**「Hierarchy」で、Debug UI と **Panel** 子ゲームオブジェクトを展開してから、**Text** ゲームオブジェクトを選択します。

**4.**「Inspector」で、Text コンポーネントを見つけます。**Text** プロパティを編集して、ゲームビューに表示されるテキストを変更してみてください。

[Image: image]

**ノート**：お使いのゲームビュープレビューウィンドウのアスペクト比と解像度によっては、表示されるフォントのサイズが上のスクリーンショットとは異なる場合があります。そのようなサイズの違いは、正常な動作です。

**4.**  シーンを保存します。

**5.**  アプリケーションをビルドして実行し、デバイスでデバッグ UI をプレビューします。

ステップを完了としてマーク

## 4. デバッグメッセージ用の新しい変数を作成する

Q&A (0)

デバッグ UI で任意のメッセージを表示する準備が整いました。次は、アプリケーションの実行中に、ビジュアルスクリプトからメッセージの内容を実際に変更できるようにする必要があります。これは変数を使用して実現できます。

以下の手順に従って、デバッグ UI のテキストを変数として設定してください。

**1.**「Script Graph」ウィンドウで、「Blackboard」に移動し、「**Object**」タブを選択します。

[Image: image]

**2.**「**(New Variable Name)**」フィールドに「debugText」と入力し、「**Add** (**+**)」を選択します。

**3.**Type プロパティを「**Text**」に設定します。

**4.**Value プロパティのオブジェクトピッカー（丸）を選択し、「**Text**」を選択します。

[Image: image]ステップを完了としてマーク

## 5.  デバッグ UI にメッセージを記録する

Q&A (0)

変数を設定できたので、ビジュアルスクリプトの開始時に表示されるデバッグメッセージを変更することができます。

ビデオを視聴するか、以下の手順に従って、その方法を確認しましょう。

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

以下の手順に従って、ビジュアルスクリプトの開始時に **debugText** 変数を変更します。

**1.**グラフエディターで、ファジーファインダーを使用して、**Text: Set Text** ノードを追加します。**On Start** ノードのフロー出力を新しいノードに結び付けます。

**2.**debugText 変数のハンドルを左クリックして、変数をグラフエディターにドラッグし、**Set Text** ノードの **Text** 入力に結び付けます。

**3.**Set Text の **String** 入力に、カスタムメッセージを入力します。例えば、「application started」などに変更できます。

[Image: image]

**4.**  アプリケーションをビルドして実行し、開始時の新しいデバッグメッセージをプレビューします。

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

## 6. タッチを検出する

Q&A (0)

次に、ユーザーがデバイス画面をタッチしたら検出し、デバッグ UI にメッセージを送信してタッチ検出が正しく動作していることを確認する機能を追加します。例えば、「touch detected」のようなメッセージです。

アプリケーションでタッチを検出するには、**On Update** イベントを使用する必要があります。**On Update** イベントは常に（アプリケーションが更新されるたびに）実行されるので、ユーザーがいつでも画面にタッチする可能性がある今回の状況に最適です。

ビデオを視聴するか、以下の指示に従って、タッチを検出し、デバッグ UI にそのイベントを記録しましょう。

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

**1.**グラフエディターで、ファジーファインダーを使用して、**Input Get Touch (Index)** ノードを追加します。**On Update** イベントノードのフロー出力を新しいノードに結び付けます。

**Index** は、同時に発生した画面タッチの数を表します。タッチが検出されないとき、Index の値は 0 に設定されます。1 つのタッチが検出されると、Index の値は 1 に設定されます。2 つ目のタッチが同時に発生すると、Index の値は 2 に増え、それ以上の場合も同様です。

**2.**前に作成した **On Start** イベントノードシーケンスから、**Set Text** ノードと **Get Variable** ノードを選択して複製します。**Get Touch** ノードのフロー出力を、複製した **Set Text** ノードのフロー入力に結び付けます。

**3.**複製した **Set Text** ノードで、**String** 値のメッセージを「touch detected」などに変更します。

[Image: image]

**4.**  アプリケーションをビルドして実行し、新しい機能をプレビューします。画面をタッチすると、デバッグ UI に「**touch detected**」と表示されるはずです。

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

## 7. タッチした位置を取得する

Q&A (0)

タッチが発生したかどうかを確認するだけでなく、そのタッチが画面上のどこで発生したかも特定する必要があります。タッチの X 座標と Y 座標を使用して、ユーザーが水平または垂直の平面に正しくタッチしたかどうかを特定できます。

#### タッチした位置を特定するプロセス

**Touch: Get Position** ノードを使用してタッチした位置を取得します。このノードは **Vector2** を出力します。これには検出されたタッチの X 座標と Y 座標が含まれています。

[Image: image]

これらの座標をデバッグ UI のテキストに出力してみましょう。ただし、**Set Text** ノードのテキストに Vector2 を指定することはできません。入力には文字列値が必要になります。

[Image: image]

**Set Text** ノードの String 入力を使用して **Get Position** ノードの Vector2 の座標を表示するには、最初にこれらの Vector2 の座標を互換性のある String 形式に変換する必要があります。それは、データをテキストとして使用できる String 形式に変換する **To String** ノードを使用して実行できます。

#### タッチした位置座標を表示する

ビデオを視聴するか、以下の指示に従って、タッチした位置を取得し、その座標をデバッグ UI に表示しましょう。

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

**1.** グラフエディターで、**Vector 2: To String** ノードを追加し、On Update シーケンスの **Get Touch** ノードと **Set Text** ノードの間に挿入します。

**2.**Touch: Get Position ノードを追加して、**Get Touch** ノードと **To String** ノードの間に結び付けます。

**3.** **To String** ノードの **String** 出力を **Set Text** ノードの **String** 入力に結び付けます。

[Image: image]

**4.**  アプリケーションをビルドして実行し、新しい機能をプレビューします。画面をタッチすると、タッチした位置の X 座標と Y 座標がデバッグ UI に表示されるはずです。

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

## 8. 他にもトライしてほしいこと

Q&A (0)

さらなるスキルの向上や、新しいコンセプトの模索、現プロジェクトについての改善などを考えているのであれば、以下の任意のアクティビティもぜひ見るようにしてみてください。各アクティビティは「簡単」、「中程度」、「困難」のいずれかとして識別されるため、どの程度の難易度かがわかります。

これらのアクティビティは完全に任意であるため、興味がなければこのステップをスキップしてもかまいません。

ただ、今回の学習体験を最大限に生かすためにも、このアクティビティのうち少なくとも 1 つは試してみることをお勧めします。頑張ってください！

#### 簡単：役立つ開始メッセージを表示する

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

このチュートリアルでは、「application started」というテキストをデバッグ UI に表示して、UI が正しく動作していることを確認しました。AR 体験の開始時にテキストを表示するのは、非常に有益なことがよくあります。その機会にアプリケーションと対話する方法をユーザーに伝えることができるためです。このアプリケーションの場合、「move the camera around slowly to detect a vertical/horizontal surface（カメラをゆっくり動かして垂直/水平な面を検出します）」などとユーザーに伝えることができます。このようなより役立つメッセージをアプリケーションの開始時に実装してみてください。

#### 困難：タッチビジュアライザーを作成する

このチュートリアルに含まれているビデオデモでは、小さな白い円がタッチした位置についていくことに気づかれたのではないでしょうか。

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

この小さい円は、デバッグに役立つことがあります。これによって指が画面と接触した正確なタイミングと位置を確認できるためです。

以下のガイダンスを使用するとこの課題の完了に役立ちます。

- 円の形をしたスクリーンスペースの UI 画像をビジュアライザー用に使用します。
- 「TouchVisualizer」という名前の新しい Script Machine を作成して、その機能を制御します。このような追加の機能は、メインスクリプトとは別に管理すると便利です。
- **GameObject: Set Active** ノードと **Transform: Set Position** ノードを使用して、UI の円を有効にし、位置を設定します。

ステップを完了としてマーク

## 9. 次のステップ

Q&A (0)

このチュートリアルでは、タッチイベントを検出して、その座標をカスタムのデバッグ UI に記録しました。その後、その座標を使用して、ビジュアルスクリプトが期待どおりに動作していることを確認しました。次のチュートリアルでは、ユーザーが有効な水平または垂直の平面にタッチしたかどうかを検出します。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
