[Image: image]

# ボタンを使用してメガネを表示する

Tutorial

Beginner

+10XP

60 mins

0

Unity Technologies

[Image: ボタンを使用してメガネを表示する]Summary

スクリプトグラフを使い、ボタンのクリックを検知する方法を学んだところですが、ここではクリックが検知された際に行われる処理を作っていきます。このチュートリアルでは、それぞれのメガネの可視性を UI ボタンで制御できるようにします。

このチュートリアルでは、以下のことを行います。

- それぞれのメガネを識別するためのタグを作成します。
- 1 つのメガネの機能を完全に構築します。
- 残りの 2 つのメガネについては、グラフを複製して変更します。

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. 概要

Q&A (0)

スクリプトグラフを使用してボタンのクリックを検出する方法を学んだところですが、ここでは、クリックの検出時に行われる処理を作成します。このチュートリアルでは、それぞれのメガネの可視性を UI ボタンで制御できるようにします。最初に 1 つのメガネの機能を完全に構築してから、残りの 2 つについてはグラフを複製して変更します。

ステップを完了としてマーク

## 2. デフォルトではメガネを非表示にする

Q&A (0)

アプリケーションの起動時には、メガネは一切表示しない状態で、ユーザーが使いたいメガネを選んでから表示するのが理想的です。現時点では正反対のことが発生します。つまり、3 つのメガネすべてが一度に表示されます。

アプリケーションが開いたときにメガネを非表示にするには、メッシュレンダラーコンポーネントを無効にします。メッシュレンダラーコンポーネントがゲームオブジェクトの可視性を管理しているのです。このコンポーネントを無効にすることで、シーンのゲームオブジェクトは非表示になりますが、ビジュアルスクリプトではオブジェクトを引き続き使用できます。

以下の指示に従って、メガネのメッシュレンダラーを無効にします。

**1.**「Hierarchy」で、折りたたみ項目のアイコンを使用して **GlassesGroup** プレハブを展開し、その子ゲームオブジェクトを表示します。

**2.** Shift キーを押しながら最初のメガネと最後のメガネのゲームオブジェクトを選択することで、3 つのメガネすべてを選択します。

**3.**「Inspector」で、メッシュレンダラーコンポーネントを見つけて無効にします。

[Image: image]

メガネはシーンビューでは見えなくなりますが、ゲームオブジェクトは「Hierarchy」に存在しておりアクティブであることに注意してください。

ステップを完了としてマーク

## 3. カスタムタグを作成して割り当てる

Q&A (0)

Unity では、スクリプトでシーン内の特定のオブジェクトを探すための方法がいくつかあります。1 つの方法は、**タグ**と呼ばれる特別な種類の参照をオブジェクトに割り当てることです。タグは、直接 Unity エディター内で手動で作成してからゲームオブジェクトに割り当てます。また、スクリプトで簡単に参照できます。

**ノート**：このステップでは、サンプルシーンに用意されているメガネに基づいてタグの名前を付けます。別のメガネを使用する場合は、使用するメガネに対応するようにタグの名前を付けてください。

以下の指示に従って、カスタムタグを作成します。

**1.**GlassesGroup 親ゲームオブジェクトで最初のメガネを選択します。

**2.**「Inspector」で、「**Tag**」ドロップダウンを見つけて選択します。

[Image: image]

**3.**「**Add Tag…**」を選択します。「Tag & Layers Inspector」ウィンドウが開きます。

**4.**「Tags」セクションで「**Add**(**+**)」を選択します。

**5.**選択したメガネの種類に応じてタグに名前（小文字の 1 単語）を付け、保存します。

[Image: image]

**6.**同じプロセスを使用して、選択した他の 2 つのメガネにタグを追加します。

[Image: image]

**7.**「Hierarchy」で、最初のメガネを選択して、「Tag & Layer Inspector」ウィンドウを閉じます。

**8.**「Inspector」で、「**Tag**」ドロップダウンを選択し、適切なタグをメガネに割り当てます。例えば、**cat** タグを **Glasses_Cat** に割り当てます。

[Image: image]

**9.** 残り 2 つのメガネでこのプロセスを繰り返します。

**10.**「Hierarchy」で **GlassesGroup** ゲームオブジェクトを選択します。ここで、行った変更を **GlassesGroup** プレハブに適用する必要があります。

**11.**「Inspector」で、「**Overrides**」ドロップダウンを選択し、「**Apply All**」を選択します。

[Image: image]

これでプレハブも更新されました。

ステップを完了としてマーク

## 4. ビジュアルスクリプトグラフを更新する

Q&A (0)

それぞれのメガネに識別子が付けられたため、スクリプトグラフで使用しやすくなりました。シーンを検索してタグを見つけるために、新しいノード **Find With Tag** を使用します。

このビデオを視聴するか以下の指示に従って、グラフを更新します。

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

**1.**「Script Graph」ウィンドウで、**Debug Log** ノードとそれに関連付けられた文字列を削除します。今後、これらは必要なくなるためです。

**2.**ファジーファインダーを開いて（グラフエディターを右クリック）、「Find With Tag」を検索し、ノードのリストから「**Game Object: Find With Tag (Tag)**」を選択します。

**3.**Find With Tag ノードを選択し、「Graph Inspector」ウィンドウで説明を読みます。

[Image: image]

**Find With Tag** ノードでは、1 つのアクティブなゲームオブジェクトをシーンに返すことが指定されています。**GlassesGroup** プレハブのメガネはメッシュレンダラーが無効になっているだけで、それ以外はシーン内でアクティブです。したがって、この方法はニーズに合っており問題なく機能します。

**Find With Tag** ノードは 1 つのデータ入力（検索対象のタグの名前）を受け取ります。

**4.**Find With Tag ノードで、最初のメガネに関連付けたタグの名前を「**Tag**」フィールドに入力します。

**重要**：タグの作成時と同様に小文字を使用することに注意してください。

**5.**On Button Click ノードのフロー出力を **Find with Tag**ノードのフロー入力に結び付けます。

[Image: image]ステップを完了としてマーク

## 5. On Button Click でメッシュレンダラーを有効にする

Q&A (0)

メガネのゲームオブジェクトをスクリプトで使用できるようになりました。これで、ユーザーがボタンを選択したときにメッシュレンダラーを有効にしてメガネを表示することができます。この機能を実装するために、**Mesh Renderer: Set Enabled** ノードを使用します。

#### プロセスを確認する

グラフの更新を完了する前に、プロセスを確認する時間を取ります。

**Mesh Renderer: Set Enabled** ノードは名前に反して、メッシュレンダラーの有効化と無効化の両方に使用されます。このノードを使用するには 2 つのデータが必要です。

- ノードが影響を及ぼす特定のメッシュレンダラー
- そのメッシュレンダラーを有効にするか無効にするか

ノードのアクションは、ノードの左側にある Boolean チェックボックスで制御されます。**Boolean** とは true または false を返すデータ型です。**Mesh Renderer: Set Enabled** ノードの Boolean が true（有効）に設定されている場合、指定したメッシュレンダラーは有効になります。Boolean が false（無効）に設定されている場合、メッシュレンダラーは無効になります。

[Image: image]

ノード上で Boolean 値を手動で調整できます。これには、影響を及ぼす特定のメッシュレンダラーへの参照が必要です。幸い、**Find With Tag** ノードがメッシュレンダラーを使用する準備はすでにできています。

[Image: image]

**Find With Tag** ノードには 2 つの出力があります。入力と同様に、ノードはフロー出力（矢印アイコン）とデータ出力（キューブアイコン）の両方を保持できます。**Find with Tag** ノードを選択すると、データ出力はこのノードが見つけるゲームオブジェクトであることがわかります。**Set Enabled**ノードは、この出力に基づいて、このゲームオブジェクトのメッシュレンダラーを使用できます。

#### スクリプトグラフの更新を完了する

このビデオを視聴するか以下の指示に従って、**Mesh Renderer: Set Enabled** ノードを設定します。

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

**1.**ファジーファインダーを開き、新しい **Mesh Renderer: Set Enabled** ノードを追加します。

**2.**Find with Tag ノードのフロー出力を **Set Enabled** ノードのフロー入力に結び付けます。

**3.**Find With Tag の結果出力を **Set Enabled** ノードのターゲット入力に結び付けます。

**4.**Set Enabled ノードの Boolean 入力を有効にします。

[Image: image]

**5.**再生ボタンを選択して変更をテストします。

**6.**最初のメガネのボタンを選択します。そのメガネがゲームビューウィンドウに表示されます。

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

**7.**  もう一度**再生**ボタンを選択して、再生モードを終了します。

ステップを完了としてマーク

## 6. グラフを複製する

Q&A (0)

他のメガネを有効にするプロセスは、すでに構築したグラフのプロセスとまったく同じです。既存のグラフと同じものを最初から作成しなおすのではなく、グラフを複製してから他のメガネに合うように細かい点を変更することができます。

このビデオを視聴するか以下の指示に従って、グラフを複製します。

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

**1.**「Script Graph」ウィンドウで、既存のグラフをクリックし、ドラッグしてすべてのノードを選択します。

**2.** Ctrl（macOS：Cmd+D）を押してグラフを複製します。

**3.**新しいグラフを下方向にドラッグし、古いグラフに重ならないようにすぐ下に配置します。

**4.**グラフが 3 組になるように、複製プロセスをもう 1 回繰り返します。

[Image: image]ステップを完了としてマーク

## 7. 新しいボタン変数を作成する

Q&A (0)

グラフに対して行う必要がある変更は 2 箇所のみ（ボタン変数およびタグ）です。

まず指示に従うか以下のビデオを視聴して、2 つの新しいボタン変数を作成します。

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

**1.**スクリプトグラフの「Blackboard」で「**Object Variable**」タブを選択します。

[Image: image]

**2.**「**(New Variable Name)**」フィールドに「glasses2Button」と入力し、「**Add** (**+**)」を選択します。

**3.**「**Type**」フィールドで、ドロップダウンを使用して「**Button**」を選択します。

**4.**「**Value** **Object Picker**」（円形アイコン）を選択し、「**Glasses 2 Button**」を選択します。

**5.**最後の変数 glasses3Button について、このプロセスを再び繰り返します。

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

**6.**グラフエディターで、最初に複製した **Get Variable** ノード（2 行目）を探します。「**Variable**」ドロップダウンを選択し、「**glasses2Button**」を選択します。

**ヒント**：グラフエディターでズームアウトしてノードを複製した場合は、ドロップダウンを使用するためにズームインする必要があります。

**7.**複製した 2 つ目の **Get Variable** ノード（3 行目）の変数を **glasses3Button** に設定します。

これで、3 つのグラフそれぞれが異なるボタンを参照します。

[Image: image]ステップを完了としてマーク

## 8. 2 つ目と 3 つ目のタグを設定する

Q&A (0)

最後に、指示に従うか以下のビデオを視聴して、複製した 2 つのグラフのタグを更新します。

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

**1.**2 つ目の **Find With Tag** ノード上のタグが 2 つ目のボタンに対応するメガネのタグを表すように置き換えます。

**2.**3 つ目の **Find With Tag** ノードで、3 つ目のボタンの最後のメガネに対応するように、このプロセスを繰り返します。

[Image: image]

**3.**再生ボタンを選択して、再生モードにします。

**4.**新しいボタンの 1 つを選択し、新しいメガネが表示されるのを確認します。

**5.**残りのメガネのボタンを順に選択して、他のメガネが表示されるのを確認します。

**重要**：メガネは選択した順に重なって配置されることに注意してください。メッシュレンダラーを無効にする機能をまだ実装していないためです。

**6.**もう一度**再生**ボタンを選択して、再生モードを終了します。

**7.**シーンを保存します。

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

ステップを完了としてマーク任意のステップ

## 9. 任意：デバイスでテストする

Q&A (0)

以下の指示に従って、デバイスでアプリケーションをテストします。

**1.**「Hierarchy」で **GlassesGroup** ゲームオブジェクトを選択してから、「Inspector」でそれを非アクティブとマークします。

**2.**  シーンを保存します。

**3.**  「Build Settings」ウィンドウを開きます（「**File**」>「**Build Settings**」）。

**4.**  デバイスが接続されていることを確認してから、「**Build and Run**」を選択してデバイスでアプリケーションをビルドします。

**5.** エディターで完了したテストを繰り返します。

ステップを完了としてマーク

## 10. 次のステップ

Q&A (0)

現在 3 つのメガネすべてがシーンに表示されていますが、問題があることがおわかりでしょう。次のメガネのボタンを選択しても、元のメガネがシーンに残っています。次のチュートリアルではこの問題を修正します。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
