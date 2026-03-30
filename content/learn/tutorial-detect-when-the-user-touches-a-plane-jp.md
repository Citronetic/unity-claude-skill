[Image: image]

# ユーザーが平面をタッチしたときに検出する

Tutorial

Beginner

+10XP

60 mins

0

Unity Technologies

[Image: ユーザーが平面をタッチしたときに検出する]Summary

最終的には、ユーザーが平面をタッチしたときにポータルをスポーンします。このチュートリアルでは、まず、環境内で検出された平面に、ユーザーが正しくタッチしたかどうかを特定します。

この機能を実装するために、「レイキャスティング」と呼ばれる手法を使用します。

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. 概要

Q&A (0)

アプリケーションは、環境内にある垂直または水平の平面を検出できます。また、画面上でユーザーがタッチした位置も検出できます。次は、これら 2 つの機能を使用して、ユーザーがその平面のどれかに正しくタッチしたかどうかを特定する必要があります。

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

後ほど、ユーザーが平面をタッチしたらポータルをスポーンして、自分の物理環境のサーフェスを通してバーチャル世界を見ることができるようにします。

この機能を実装するために、「レイキャスティング」と呼ばれる手法を使用します。

ステップを完了としてマーク

## 2. レイキャスティングとは

Q&A (0)

**レイキャスティング**とは、目に見えない直線（**レイ**）を原点からシーンを通るように発射し、その線が当たる物体を特定するプロセスです。これは少し魚釣りと似ています。魚釣りでは、釣り糸を投げてどのような魚が釣れるかを見ます。レイキャスティングでは、レイを発射して、そのレイがシーンの何に当たるかを見ます。

通常は、レイキャストが当たったすべてのオブジェクトを **List** 変数に格納します。その後、そのリスト内のオブジェクトにアクセスして、望みの処理を実行します。

[Image: image]

レイキャストはプログラミングにおいて非常に役立ちます。例えば、レイの発射は、ターゲットに武器が当たるかどうかや、近くにオブジェクトが存在するかどうかを判断する際に役立ちます。

このアプリケーションの場合は、レイキャストは画面上の何かがユーザーによって正しくタッチされたかどうかを判断する際に役立ちます。ユーザーが画面にタッチすると、アプリケーションはタッチした位置を原点として使用して、シーンに向かって真っすぐにレイを発射します。そのレイが平面に当たった場合、アプリケーションはそれを正しいタッチとして記録します。

ステップを完了としてマーク

## 3. AR Raycast Manager を追加する

Q&A (0)

以前に、シーンで検出される平面を管理するために AR Plane Manager コンポーネントを追加しました。同様に、シーンに発射されるレイを管理するには [AR Raycast Manager](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@4.0/manual/raycast-manager.html) コンポーネントが必要です。AR Raycast Manager にはまさに必要な機能が備わっています。画面タッチの位置からレイを発射し、そのレイがトラッカブルなオブジェクト（水平または垂直な平面など）と交差するかどうかを判断します。

以下の手順に従って、その新しいコンポーネントを追加します。

**1.**  「Hierarchy」で、**AR Session Origin** ゲームオブジェクトを選択します。

**2.** 「Inspector」で、新しい AR Raycast Manager コンポーネントを追加します。

[Image: image]ステップを完了としてマーク

## 4. AR Foundation ノードライブラリを追加する

Q&A (0)

この機能を完成させるには、**AR Raycast Manager: Raycast** ビジュアルスクリプティングノードを利用する必要があります。

[Image: image]

ただし、このノードをスクリプトグラフに追加しようとしても、ノードライブラリには見つかりません。今すぐグラフエディターでこのノードを検索してみてください。結果は見つかりません。

[Image: image]

ここまでに、AR 開発または AR Foundation パッケージに固有のノードは実際には使用してきませんでした。デフォルトでは、ビジュアルスクリプティングライブラリには AR 固有のノードが含まれていません。AR Foundation ノードライブラリを手動でインポートする必要があり、その後で AR 固有のノードを追加できるようになります。

ビデオを視聴するか、以下の指示に従って、AR Foundation ノードライブラリをインポートしましょう。

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

**1.**メインメニューから、「**Edit**」>「**Project settings**」に移動します。

**2.**  「Project Settings」ウィンドウの左側のパネルで、「**Visual Scripting**」を選択します。

**3.**折りたたみ項目（三角形）を使用して「**Node Library**」セクションを展開し、ノードアセンブリのリストの一番下までスクロールします。

**4.**リストの一番下にある「**Add** (**+**)」を選択して、新しい項目をリストに追加します。

**5.**新しい項目のアセンブリのドロップダウンを選択し、「AR Foundation」と検索して、**Unity.XR.ARFoundation** を選択します。

**6.**リストの下にある「**Regenerate Nodes**」を選択して、「Script Graph」ウィンドウでこの新しいノードにアクセスできるようにします。

[Image: image]

**7.**グラフエディターで、ファジーファインダーを使用して「AR Raycast Manager」と検索し、AR 固有のノードが利用できるようになっていることを確認します。

ステップを完了としてマーク

## 5. レイキャスティング用の変数を追加する

Q&A (0)

この機能を完成させるには、ビジュアルスクリプトに 2 つの新しい **Object** 変数を追加する必要があります。1 つは先ほど追加した AR Raycast Manager コンポーネント用、もう 1 つはレイキャストが当たったオブジェクトを格納する **List** 用です。

当たるオブジェクトを調べるためにレイキャストがシーンに向かって発射されると、当たったオブジェクトのリストが生成されることを思い出しましょう。そのリストを新しい変数に格納する準備をしておく必要があります。この場合は、「**Aot List**」と呼ばれる特定の型のリストを使用します。「Aot」は Ahead Of Time（事前に）の略語です。なぜなら、このリストは事前に、つまりアプリケーションを実行する前に定義されるためです。

以下の手順に従って、AR Raycast Manager と Aot List 用の新しい変数を作成しましょう。

**1.**「Script Graph」ウィンドウで **TapToPlace** スクリプトが開かれていることを確認します。

**2.**  「Blackboard」で「**Object Variables**」タブを選択します。

**3.**「arRaycastManager」という名前の新しい変数を作成し、その「**Type**」を「**AR Raycast Manager**」に設定します。

**4.**「**Value**」のオブジェクトピッカー（丸）を選択し、「**AR Session Origin**」を選択します（これには AR Raycast Manager コンポーネントが含まれています）。

**5.**「hits」という名前の別の新しい変数を作成し、その「**Type**」を「**Aot List**」に設定します。ただし、「**Value**」は空のままにしておきます。アプリケーションの実行中に、レイキャストはこのリストにオブジェクトを追加します。

[Image: image]

これで、レイキャストを実装するために必要なすべての変数が揃いました。

ステップを完了としてマーク

## 6. ノードシーケンスに Raycast ノードを追加する

Q&A (0)

アプリケーションがレイキャストを実行するのは、ユーザーがタッチした位置を特定した直後、デバッグ UI にメッセージを送信する前です。

ビデオを視聴するか、以下の手順に従って、グラフに **Raycast** ノードを追加します。

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

**1.**グラフエディターで、**Get Touch** ノードと **Get Position** ノードの後に新しい **Raycast** ノード用のスペースを作ります。

**2.**ファジーファインダーを使用して **AR Raycast Manager: Raycast (Screen Point, Hit Results, Trackable Types)** ノードを追加します。

**重要**：必ず上記の特定の入力を持つ **Raycast** ノードを選択してください。よく似た入力を持つ別のノードが存在しますが、同じ機能は提供されません。

**3.**Get Touch ノードの後、**To String** ノードの前にレイキャストが実行されるように、各ノードを切り離して結び付け直します。

[Image: image]

これで、**Raycast** ノードをシーケンス内の正しい位置に配置できました。

ステップを完了としてマーク

## 7. Raycast ノードの入力を設定する

Q&A (0)

特定の入力を使用してレイキャストを設定する準備が整いました。このノードに必要なすべての入力は、**Raycast** ノードを選択した状態の「Graph Inspector」で確認できます。

[Image: image]

ビデオを視聴するか、以下の手順に従って、**Raycast** ノードの入力を設定しましょう。

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

**1.**「Blackboard」の「**Object**」タブに移動します。**arRaycastManager** 変数と **hits** 変数をクリックして、グラフエディターにドラッグします。

**2.**Target の入力を **arRaycastManager** 変数ノードに結び付けます。

**3.**Screen Point の入力を **Get Position** ノードに結び付けます。

**4.**Hit Results の入力を **hits** 変数ノードに結び付けます。

**5.**Raycast ノードの **Trackable Types** プロパティを「**None**」に設定して、選択可能なすべてのオプションを選択解除してから、「**Plane Within Polygon**」を選択します。

[Image: image]ステップを完了としてマーク

## 8. レイキャストの結果をデバッグ UI に表示する

Q&A (0)

もう一度、デバッグ UI を使用してアプリケーションが期待どおりに動作していることを確認しましょう。ここでは、ユーザーが有効な平面をタッチした場合は「**true**」、有効な平面以外のものをタッチした場合は「**false**」と表示するようにデバッグ UI を設定します。これによって、アプリケーションでポータルを配置できる平面をユーザーが選択しているかどうかを、アプリケーションが正しく記録していることを確認できます。

以前は、**Vector 2: To String** ノードを使用して、タッチした位置を UI に表示できるテキストに変換しました。しかしここでは、**Raycast** ノードを使用して異なるアプローチを取ることができます。

**Raycast** ノードを選択して「Graph Inspector」を確認すると、出力が Boolean であることがわかります。つまり、レイキャストが平面に当たったかどうかを示す true または false の値です。

[Image: image]

ここでは、タッチした位置をデバッグ UI に表示する代わりに、その Boolean を表示します。つまり、**Vector 2: To String** ノードではなく **Boolean: To String** ノードを使用する必要があります。

ビデオを視聴するか、以下の手順に従って、デバッグ UI のメッセージを **Raycast** ノードの Boolean 出力に置き換えましょう。

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

**1.**グラフエディターで、**Vector 2: To String** ノードを右クリックし、「**Replace**」を選択します。**Boolean: To String ()** ノードを検索して、代わりに選択します。

**2.**Raycast の出力を **To String** の入力に結び付けます。**To String** ノードの出力は、引き続き **Set Text** ノードに結び付ける必要があります。

[Image: image]

**3.**  アプリケーションをビルドして実行し、新しい機能をプレビューします。有効な平面にタッチすると、UI に「**True**」と表示されるはずです。有効な平面以外をタッチすると、UI に「**False**」と表示されるはずです。

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

おめでとうございます！レイキャスティングを使用して、ユーザーが画面上でタッチしたものを検出することができました。

ステップを完了としてマーク

## 9. 他にもトライしてほしいこと

Q&A (0)

スキルをさらに向上させたい場合、または新しいコンセプトを探求したい場合、またはプロジェクトを改善したい場合は、以下のオプションのアクティビティを調べてください。

このアクティビティは完全に任意なので、興味がなくても問題ありません。このステップはただスキップするだけで構いません。

ただ、今回の学習体験を最大限に生かすためにも、この種の課題を試してみることをお勧めいたします。頑張ってください！

#### 中程度：より具体的なデバッグメッセージを連結する

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

このチュートリアルでは、デバッグ UI に「true」または「false」というブーリアン値を表示しました。これはあまりわかりやすいデバッグメッセージとは言えません。「plane touched: true（平面にタッチ：true）」や「plane touched: false（平面にタッチ：false）」といった、より具体的な内容を表示すべきです。

このようなメッセージを表示するには、連結を使用する必要があります。プログラミングの用語では、「**連結**」とは通常、複数の文字列を 1 つにつなげるプロセスを指します。普通のテキスト文字列（「plane touched:」など）をより動的なデータ（Boolean 値など）と連結して、そのデータを読みやすくする場合がよくあります。アプリケーションで、より有用な連結したデバッグメッセージを実装できるかどうか試してみてください。

以下のガイダンスを使用するとこの課題の完了に役立ちます。

- **String: Concat (arg 0, arg 1)** ノードを使用します。
- 「plane touched: 」というシンプルな文字列を 1 つ目の入力に、Raycast の Boolean を 2 つ目の入力に結び付けます。
- Concat ノードの出力を **Set Text** ノードに結び付けます。

ステップを完了としてマーク

## 10. 次のステップ

Q&A (0)

このチュートリアルでは、レイキャストを使用して、ユーザーが画面上の有効な平面ターゲットにタッチしたかどうかを特定しました。次のチュートリアルでは、シーンに**ポータル**のゲームオブジェクトを実際にスポーンして、ユーザーが選択した平面の上に配置します。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
