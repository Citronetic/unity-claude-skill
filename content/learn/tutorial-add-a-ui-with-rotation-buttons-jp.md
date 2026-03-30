[Image: image]

# 回転ボタン付きの UI を追加する

Tutorial

Beginner

+10XP

60 mins

0

Unity Technologies

[Image: 回転ボタン付きの UI を追加する]Summary

ユーザーの環境にオブジェクトを出現させるとわくわくします。しかし、何らかの方法でユーザーがそのオブジェクトに対して相互作用できることは、はるかに魅力的な体験です。

このチュートリアルでは、モデルを回転させるボタンが付いたユーザーインターフェースをシーンに追加します。後半のチュートリアルでは、このユーザーインターフェースにさらに機能を追加します。

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. 概要

Q&A (0)

ユーザーの環境にオブジェクトを出現させるとわくわくします。しかし、何らかの方法でユーザーがそのオブジェクトに対して相互作用できることは、はるかに魅力的な体験です。このために、**スクリーンスペースオーバーレイ**と呼ばれるユーザーインターフェースを作成します（これは常にカメラの前に配置され、画面に表示されることから、このように呼ばれます）。スクリーンスペースオーバーレイが役立つのは、ユーザーがデバイスで何を見ているかにかかわらず、そのユーザーインターフェースを見せたい場合です。

このチュートリアルでは、モデルを回転させるボタンが付いたユーザーインターフェースをシーンに追加します。後半のチュートリアルでは、このユーザーインターフェースにさらに機能を追加します。

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

## 2. ボタンを設定する

Q&A (0)

Unity は、**キャンバス**と呼ばれる特殊なタイプのゲームオブジェクト使用して、ユーザーインターフェース用の 2D 画像を表示します。このプロジェクト内のキャンバスに、ユーザーが押すことができるボタンを表示します。

以下の手順に従って、キャンバスをシーンへ追加してみましょう。

**1.** Project ウィンドウで、「**Assets**」>「**_ARMarker**」>「**Prefabs**」>「**UI**」に移動し、「**Button_Canvas**」をクリックして「Hierarchy」にドラッグします。シーンビューではキャンバスが非常に大きくなりますが心配しないでください。このようになるのは Unity がスクリーンスペースオーバーレイを処理する際のみです。

**ノート**：「TMP Importer」ウィンドウが表示された場合は、「**Import TMP Essentials**」ボタンを選択してからウィンドウを閉じます。[TextMeshPro](https://docs.unity3d.com/Packages/com.unity.textmeshpro@3.0/manual/index.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950528209)（TMP）によって、テキストフォーマットとレイアウトを管理できます。この時点では、「Import TMP Examples & Extras」を選択する必要はありません。

[Image: image]

**2.**ゲームビューに移動し、4 個のデフォルトボタンがアプリケーションにどのように表示されるかをプレビューします。

[Image: image]

**3.**  「Hierarchy」で、「**ButtonCanvas**」ゲームオブジェクトを展開し、子ゲームオブジェクト「**Button1**」と「**Button2**」の名前をそれぞれ「ButtonRotateLeft」と「ButtonRotateRight」に変更します。

**4.**  「Hierarchy」で、「**ButtonRotateLeft**」ゲームオブジェクトの「**Text (TMP)**」子ゲームオブジェクトを選択します。「Inspector」で、TextMeshPro の「**Text Input**」を「**ButtonRotate Right**」ゲームオブジェクトについても繰り返し、「**Text Input**」を「>」に変更します。

[Image: image]

**5.**  最適と思われる「**Font Asset**」、「**Font Size**」、「**Font Style**」プロパティを選択して、テキストをカスタマイズします。

**ノート**：他のフォントやスタイルが必要な場合は、「**Window**」>「**TextMeshPro**」>「**Import TMP Examples and Extras**」に移動します。

**6.**  ボタンのサイズを調整する必要がある場合は、「**Rect**」ツールを使用します。

[Image: image]ステップを完了としてマーク

## 3. 新しいビジュアルスクリプトを作成する

Q&A (0)

ボタンが画面に配置されたところで、次は、ボタンが機能するようにします。ビジュアルスクリプトを使用して、ユーザーがボタンを押した際のアプリケーションの動作を制御します。見つけやすくするためにすべてのビジュアルスクリプトに対して 1 つのゲームオブジェクトを作成します。

以下の指示に従って、新しいビジュアルスクリプトを作成します。

**1.**  「Hierarchy」で、「VisualScripts」という名前の新しい空のゲームオブジェクトを作成します。

**2.**  「Inspector」で、「Script Machine」コンポーネントを「**VisualScripts**」に追加します。

**3.**  「**New**」を選択して、新しいグラフを作成します。

**4.**  ファイルエクスプローラーが表示されたら、「**_ARMarker**」フォルダーを開き、そこに新しい「VisualScripts」フォルダーを作成し、グラフに「RotateObject」という名前を付けて保存します。

[Image: image]

**5.**  「Inspector」で、タイトル「Rotate Object」とサマリー「Rotates the AR object using rotate UI buttons」を入力します。

**6.**  「**Edit Graph**」を選択して、ビジュアルスクリプトグラフを開きます。

[Image: image]

**ノート**：最初にグラフを開くとき、フローティングウィンドウ内に表示されます。必要であれば Unity エディターにドックできます。

ステップを完了としてマーク

## 4. 必要な変数を作成する

Q&A (0)

スクリプトは、ボタンを参照する変数と、ボタンが作用するゲームオブジェクトを使用します。

以下の手順に従って、ビジュアルスクリプトの変数を作成します。

**1.**  「RotateObject」スクリプトグラフで、「**On Start**」ノードと「**On Update**」ノードを削除します。

**2.**  「Blackboard」で「**Object Variables**」タブを選択します。

**3.**  「buttonRotateLeft」という名前の新しい変数を作成し、その「**Type**」を「**Button**」に設定します。

**4.**  「**Value**」については、オブジェクトピッカー（円形アイコン）を使用して、「**ButtonRotateLeft**」ゲームオブジェクトを選択します。

**5.**  「buttonRotateRight」という名前の変数と「**ButtonRotateRight**」ゲームオブジェクトについて同じプロセスを繰り返します。

**7.**  「modelObject」という名前の新しい変数を作成し、その「**Type**」を「**GameObject**」に設定します。

**8.**  「Hierarchy」のエディター内モデルを modelObject 変数に割り当てます。

[Image: image]ステップを完了としてマーク

## 5. 左右に回転させる

Q&A (0)

使用できる変数が用意できたところで、次は、ユーザーがボタンを押したときにモデルの回転を制御するグラフのロジックを作成します。

ビデオを視聴するか、以下の手順に従って、ボタンが押されたときにビジュアルスクリプトでモデルを回転させます。

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

**1.**  「**On Button Click**」ノードをグラフエディターに追加します。

**2.**buttonRotateLeft 変数を、グラフの「**On Button Click**」ノードの左側にドラッグし、2 つを結び付けます。

**3.**  グラフエディターで「**Transform Rotate**」ノード（「X Angle」、「Y Angle」、「Z Angle」）を追加してから、以下の値を割り当てます：**X Angle** =**0**、**Y Angle** =**15**、**Z Angle** =**0**.

**重要**：モニター上でマーカーをテストしており、回転モデルを使用している場合は、y 軸ではなく z 軸中心に回転させる必要があります。

**4.**  「**On Button Click**」ノードを「**Transform Rotate**」ノードのフロー入力に結び付けます。

**5.** modelObject 変数をグラフエディターにドラッグしてから、「**Transform Rotate**」ノードのトランスフォーム入力に結び付けます。

[Image: image]

**6.** 「Hierarchy」でエディター内モデルを選択します。「Inspector」で、これを有効にして、シーンビューで表示されるようにします。

**7.**  エディターの「**Play**」ボタンを選択して、スクリプトをテストします。シーンビューで「ButtonRotateLeft」ボタンを選択すると、モデルが左に回転するのが表示されるはずです。これで、再生モードを終了します。

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

**8.** 「Script Graph」ウィンドウで、既存のグラフをクリックし、全体的にドラッグしてすべてのノードを選択します。

**9**.Ctrl+D（macOS：Cmd+D）を押してグラフを複製します。新しいグラフを下方向にドラッグし、古いグラフに重ならないようにすぐ下に配置します。

**10.**  新しいグラフで、「**Get Variable**」ノードの変数を buttonRotateRight に変更し、「**Y Angle**」（または縦型モニターでマーカーをテストしている場合は「X Angle」）の値を **-15** に変更します。

[Image: image]

**11.**  Unity エディターの再生モードでアプリケーションをテストして、両方のボタンが作動することを確認します。

**ノート**：ご自身のデバイスでアプリケーションをテストする場合、アプリケーションはエディター内モデルに対して作動します（マーカーによって生成されたモデルではありません）。心配しないでください。この問題は以降のステップで対応します。

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:17Loaded: 0.00%0:00Remaining Time -0:171xPlayback Rate

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

## 6. モデルを識別するためのタグを追加する

Q&A (0)

回転ボタンは作動しますが、シーンのエディター内モデルに対してしか作動しません。

アプリケーションが実行されるまで存在しないゲームオブジェクトを回転させるスクリプトをどのように記述すればよいのでしょうか。プレハブにタグを適用することで、スポーンされるプレハブインスタンス上にもタグが存在するようになります。スクリプトでは、カメラがマーカーを認識してプレハブからモデルをスポーンすると、アプリケーションがこのタグを使用してゲームオブジェクトを検索します。**タグ**は、スクリプトを記述するためにゲームオブジェクトを識別するのに役立ちます。

以下の手順に従って、モデルがアプリケーション内でスポーンされたときにモデルを見つけるためのタグを追加します。

**1.**  「Hierarchy」で、エディター内モデルを選択し、それを「Inspector」で無効にします。

**2.**  Project ウィンドウで、モデルのプレハブを探し、それをダブルクリックしてプレハブモードで開きます。

**3.**「Inspector」で、「**Tag**」ドロップダウンを開き、「**Add Tag**」を選択します。

[Image: image]

**4.**  「**Add**」（**+**）ボタンを選択し、「modelObject」と入力し、「**Save**」を選択します。

[Image: image]

**5.**「Hierarchy」で、選択したプレハブに対して「**Mesh**」子ゲームオブジェクトを選択し、「**Tags**」ドロップダウンを使用して、それにタグ「**modelObject**」を割り当てます。

[Image: image]

**重要**：プレハブの最上位の親ゲームオブジェクトを回転させることはできません。「**Mesh**」子ゲームオブジェクトにタグが付けられたことを確認してください。親ゲームオブジェクトにはタグを付けないでください。独自の 3D モデルを使用している場合は、ゲームオブジェクトのメッシュを含む子ゲームオブジェクトにタグを付ける必要があります。

**6.**  プレハブモードを終了します。

**7.**変更内容がプレハブに正常に適用されたことを確認します。「modelObject」タグが、エディター内モデルおよび Project ウィンドウのプレハブに表示されていることを確認します。

プレハブを編集したため、そのプレハブに基づいているエディター内モデルでも、このタグが「**Mesh**」子ゲームオブジェクトに付いています。したがって、このエディター内モデルを使用して、次のステップで記述するスクリプトをテストできます。

ステップを完了としてマーク

## 7. 新しい設定スクリプトグラフを作成する

Q&A (0)

次に、modelObject タグが付いたゲームオブジェクトを常に探す新しいスクリプトを作成します。タグが付いたゲームオブジェクトが見つかると、それに変数が割り当てられて、RotateObject スクリプトに対して準備が整います。新しい変数が正しく割り当てられることで、シーンにスポーンされるモデルを制御できるようになります。

以下の指示に従って、新しい設定スクリプトを設定します。

**1.** 「Hierarchy」で、「**VisualScripts**」ゲームオブジェクトを選択します。

**2.** 「Inspector」で、「**Add Component**」を選択し、「Setup」という名前の新しい「Script Machine」を作成し、タイトルを「Setup」、説明を「Initializes variables」とします。次に、「**Edit Graph**」を選択します。

[Image: image]

**3.**  グラフエディターの「Blackboard」領域で、「**Object**」タブを選択します。次に、modelObject 変数の「**Value**」を確認し、ピッカー（円形アイコン）を使用して「**None**」を選択します。スクリプトによってこの変数の値が割り当てられます。

[Image: image]ステップを完了としてマーク

## 8. マーカーによって生成されたモデルを回転させる

Q&A (0)

設定スクリプトと変数が用意できたところで、グラフを作成できます。このビデオを視聴するか以下の指示に従って、タグ付きゲームオブジェクトを検索し、オブジェクトが見つかったら modelObject 変数に割り当てます。

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:37Loaded: 4.58%0:00Remaining Time -0:371xPlayback Rate

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

**1.**  「**On Start**」イベントノードを削除します。

**2.**  グラフエディターで、ファジーファインダーを使用して、「**Find Game Object With Tag**」ノードを追加します。

**ノート**：複数形の「**Find Game Objects**」ノードではなく、単数形の「**Find Game Object**」ノードを選択してください。

**3**.「**Tag**」フィールドに「modelObject」と入力します。

**4.**「**On Update**」の出力を「**Find Object with Tag**」ノードの入力に結び付けます。

**5.**  グラフエディターで、ファジーファインダーを使用して、「**Set Object Variable**」ノードをグラフに追加します。

**6.**「**Find Game Object With Tag**」のフロー出力を「**Set Variable**」ノードのフロー入力に結び付けます。次に、このオブジェクトの出力を「**Set Variable**」オブジェクトの下部の入力（ラベルなし）に結び付けます。

[Image: image]

この「**New Value**」フィールドによって、変数の新しい値が設定されます。これは任意のデータ型にすることができます。

スクリプトが実行されると、modelObject 変数が、モデルの指定されたタグ付きの子ゲームオブジェクトに設定されます。これは、エディターでテストしたときはエディター内モデルを見つけますが、アプリケーション内で実行したときはマーカー上にスポーンされたモデルを見つけます。

**7.** 「Hierarchy」で、エディター内モデルを選択してから、それをテストのために「Inspector」で有効にします。

**8.**  「**Play**」を選択し、ビジュアルスクリプトを見てください。「**Find Game Object With Tag**」ノードがゲームオブジェクトを見つると、modelObject 変数値を割り当てることがわかります。

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

**9.**「Hierarchy」で、エディター内モデルを選択し、それを「Inspector」で無効にします。

**10.** デバイスへのビルドを行い、アプリケーションでボタンをテストします。

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

## 9. null チェックを最適化する

Q&A (0)

アプリケーション開発の重要な部分は確実な最適化です。最適化が特に重要なのはモバイルデバイスの作成時です。通常、最適化は設計の最初から行うことで容易になります。

前のステップのビデオでわかるように、現時点のスクリプトで、「**Find Game Object With Tag**」ノードは常にモデルを探しています。このスクリプトは常にシーンのすべてのゲームオブジェクトを探しており、タグ付きのゲームオブジェクトが見つかっても止めません。ゲームオブジェクトの数がごく少数であれば、それほどの悪影響はありませんが、シーン内のゲームオブジェクト数が増えると、この検索によって実際にパフォーマンスが低下する可能性があります。このスクリプトを最適化するには、タグが検出されるとすぐに検索を停止する **null チェック**を追加します。

null チェックは「**Null Check**」ノードを使用して実装します。このノードによるテストで、modelObject 変数に値があるかどうかを確認します（値があるということは、ゲームオブジェクトがシーンにスポーンされ、タグが検出されたことを意味します）。ゲームオブジェクトがまだスポーンされていない場合（null チェックが true）、スクリプトは続行します。いったんゲームオブジェクトがスポーンされると（null チェックが false）、スクリプトが再び実行することはありません。

このビデオを視聴するか以下の指示に従って、ビジュアルスクリプトに null チェックを追加します。

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

**1.**「**Setup**」スクリプトマシンを開きます（まだ開いていない場合）。

**2.** グラフエディターで、「**Null Check**」ノードをグラフの最初の方に追加します。

**3.**  「**Null Check**」ノードを、グラフのフローの「**On Update**」ノードと「**Find Game Object With Tag**」ノードの間に挿入します。「Null」出力を「**Find Game Object With Tag**」ノードに結び付けます。

**4.**  「Blackboard」の modelObject 変数をグラフエディターにドラッグします。こうすると、「**Get Variable**」ノードが作成されます。

**5.**  「**Get Variable**」ノードの出力を「**Null Check**」ノードの入力に結び付けます。

[Image: image]

**6.**  エディター内モデルを有効にし、エディターでスクリプトをテストして null チェックが作動していることを確認します。

これは見えないくらい速く行われますが、最初のフレームで「**Null Check**」ノードが modelObject が null であることを検出し、残りのスクリプトの実行を許可します。その後、modelObject の値が **Mesh** ゲームオブジェクトであることがわかり、「**Null Check**」ノードが残りのスクリプトの再実行を停止します。

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

**7.**エディター内モデルを無効にしてから、ビルドし、デバイス上でテストします。パフォーマンスの大きな変化はわからないかもしれませんが、スクリプトを確実に最適化することを常にお勧めします。

ステップを完了としてマーク

## 10. 他にもトライしてほしいこと

Q&A (0)

さらなるスキルの向上や、新しいコンセプトの模索、現プロジェクトについての改善などを考えているのであれば、以下の任意のアクティビティもぜひ見るようにしてみてください。各アクティビティは「簡単」、「中程度」、「困難」のいずれかとして識別されるため、どの程度の難易度が予想されるかがわかります。

これらのアクティビティは完全に任意であるため、興味がなければこのステップをスキップしてもかまいません。

ただ、今回の学習体験を最大限に生かすためにも、このアクティビティのうち少なくとも 1 つは試してみることをお勧めします。頑張ってください！

#### 簡単：ボタンのスタイルをカスタマイズする

[Image: image]

ボタンにスタイルを設定する場合は、提供されているボタンスプライトのどれかにスプライトを変更するか、独自のスプライトを作成します。カスタマイズした UI は、アプリケーションの外観の完成度を高めてプロフェッショナルな仕上がりにするための特徴です。以下に例を示しますが、創造性を発揮して独自の UI を作ってください。ボタンスプライトを編集するには、ボタンの画像コンポーネントを見つけて、「**Source Image**」プロパティのオブジェクトピッカー（円形アイコン）を選択します。

#### 中程度：ボタンを押してモデルの位置を調整する

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

modelObject を回転させるのは、モデルを操作する方法の 1 つにすぎません。モデルを操作するもう 1 つの方法として、ボタンを押してモデルが上下に動くようにします。

新しい UI ボタンと、オブジェクトを少しずつ上下または左右に動かすビジュアルスクリプトを作成します。

#### 困難：ターンテーブルに置かれたようにモデルを回転させる

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

現在、モデルを回転させるにはボタンを繰り返し押す必要があります。ユーザーインターフェースを改善して、ボタンを 1 回押すと回転が始まり、もう 1 回押すと回転が止まるようにします。「Rotate Object」ビジュアルスクリプトを編集して、ボタンを押したときにモデルが自動的に回転するようにします。

以下のガイダンスを使用するとこの課題の完了に役立ちます。

- 動作のオンとオフを切り替えるにはブーリアン値が便利です。
- 「**Negate**」と呼ばれる特別なノードがあります。
- 変形およびブーリアンの確認は、継続的に行う必要があります。

**ヒント**：この課題に取り組む 1 つの方法としては、ユーザーがボタンを押したときに変化するいくつかのブーリアン変数を作成します。ユーザーがある方向へのモデルの回転を開始し、次に逆方向への回転を開始する場合、スクリプトの動作はどうなるでしょうか。

ステップを完了としてマーク

## 11. 次のステップ

Q&A (0)

これで、ユーザーは UI キャンバス上のボタンを使用してモデルを左右に回転させることができるようになりました。次のチュートリアルでは、ボタンを押すことでモデルに関する追加情報が表示されたり消えたりするようにします。アプリケーションがマーカーを検出したときに、情報、モデル、視覚エフェクト、その他のコンテンツのうちどれを表示するかをユーザーに制御させることで、AR 体験の機能を拡張できます。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
