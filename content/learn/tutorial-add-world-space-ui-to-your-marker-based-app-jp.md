[Image: image]

# マーカーベースのアプリケーションにワールド空間 UI を追加する

Tutorial

Beginner

+10XP

45 mins

0

Unity Technologies

[Image: マーカーベースのアプリケーションにワールド空間 UI を追加する]Summary

ワールド空間レイアウトを使用すると、ユーザーインターフェースと画像要素を画面にアタッチする代わりに、それらを現実世界の AR 空間に配置できます。スクリーンスペースキャンバスとは異なり、ワールド空間キャンバスはシーンのどこにでも配置できます。

このチュートリアルでは、モデルがマーカー上に出現するときに近くにホバー表示されるラベルを作成します。また、ユーザーがラベルのオンとオフを切り替えられるボタンも作成します。

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. 概要

Q&A (0)

ワールド空間レイアウトを使用すると、ユーザーインターフェースと画像要素を画面にアタッチする代わりに、それらを現実世界の AR 空間に配置できます。スクリーンスペースキャンバスとは異なり、ワールド空間キャンバスはシーンのどこにでも配置できます。

このチュートリアルでは、モデルがマーカー上に出現するときに近くにホバー表示されるラベルを作成します。また、ユーザーがラベルのオンとオフを切り替えられるボタンも作成します。

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

## 2. ワールド空間キャンバスを追加する

Q&A (0)

最初のステップでは、ワールド空間キャンバスをシーンに追加します。このキャンバス用のプレハブが提供されています。

以下の手順に従って、ワールド空間 UI 用に提供されたアセットをシーンに追加してください。

**1.**  Project ウィンドウで、modelObject のプレハブをプレハブモードで開きます。

**2.**  Project ウィンドウで、「**Assets**」>「**_ARMarker**」>「**Prefabs**」>「**UI**」に移動します。「**CanvasPopup**」プレハブをクリックし、「**[使用するモデル]Mesh**」ゲームオブジェクトの子ゲームオブジェクトとして「Hierarchy」にドラッグします。

**3.**  シーンビューで、キャンバスの場所、回転、スケールをモデルに対して相対的に変更します。

[Image: image]

**4**.次のステップまでプレハブモードのままにしておきます。

**重要**：キャンバスは、「**[使用するモデル]Mesh**」ゲームオブジェクトの子ゲームオブジェクトである必要があります。そうしないと、回転ボタンの影響を受けません。

ステップを完了としてマーク

## 3. ワールド空間 UI をカスタマイズする

Q&A (0)

キャンバスを希望どおりにワールド内に配置したところで、次は、外観を少しスタイリッシュにします。

以下の手順に従って、ワールド空間 UI をカスタマイズします。

**1.** 「Hierarchy」で、「**CanvasPopup**」の下の「**Panel**」子ゲームオブジェクトを選択します。

**2.**  「Inspector」の「Image」コンポーネントで、ピッカー（円形アイコン）を使用して「**Source Image**」を別のスプライトに変更します。独自の UI 画像を作成したりダウンロードしたりすることもできます。

**3.**  「Hierarchy」で「**Panel**」ゲームオブジェクトの「**Text (TMP)**」子ゲームオブジェクトを選択し、「Inspector」で「**Text Input**」テキストをゲームオブジェクトについて知らせたい内容に変更します。

**4.**テキストのフォント、サイズ、スタイルを「TextMeshPro」コンポーネントでカスタマイズします。

**5.**「**Panel**」または「**Text**」ゲームオブジェクトのサイズを調整する必要がある場合は、「Rect」ツールを使用します。

**6.**レイアウトとスタイルが希望どおりになったらプレハブモードを終了します。

[Image: image]ステップを完了としてマーク

## 4. UI ボタンを更新する

Q&A (0)

次は、ボタンの 1 つでワールド空間キャンバスのオンとオフを切り替えられるようにします。これで、ユーザーがモデルの横にテキストを表示したり消したりすることができます。このステップではボタンの外観もカスタマイズします。

以下の手順に従って、ワールド空間 UI の UI ボタンをカスタマイズします。

**1.**「Hierarchy」で、「**ButtonCanvas**」>「**Button3**」を選択し、名前を「ButtonPopup」に変更します。

**2.**  必要であれば、ボタンのスプライトをカスタマイズします。

**3.**「**Text (TMP)**」子ゲームオブジェクトで、テキストを「Info」に変更します。または、ボタンによって何ができるかをユーザーに知らせる別の言葉に変更します。

**4.**  テキストのスタイル、フォント、他のプロパティを自由にカスタマイズします。

[Image: image]ステップを完了としてマーク

## 5. スクリプトグラフに変数を作成する

Q&A (0)

ボタンの外観が見違えるようになったところで、次は、ボタンが機能するようにします。メッシュ自体について行ったのと同様に、ポップアップキャンバスがシーン内にスポーンされたときに探して、ポップアップキャンバスへの参照を取得する必要があります。この機能を実現するために、UI ボタン用の変数とキャンバス用の未割り当て変数が必要になります。

以下の手順に従って、必要な 2 つの新しい変数をスクリプトグラフに作成します。

**1.**  「Hierarchy」で、「**Script Manager**」ゲームオブジェクトを選択し、「Setup」グラフを開きます。

**2.** 「Blackboard」で、「buttonPopup」という名前の新しいゲームオブジェクト変数を追加し、「**Type**」ドロップダウンから「**Button**」を選択し、ピッカー（円形アイコン）を使用して「**Value ButtonPopup (Button)**」を割り当てます。

**3.** 「Blackboard」で、「canvasPopup」という名前の新しいゲームオブジェクト変数を追加し、「**Type**」ドロップダウンから「**GameObject**」を選択します。「**Value**」は設定しないでください。

[Image: image]ステップを完了としてマーク

## 6. キャンバスへの参照を取得する

Q&A (0)

変数が用意され、タグ付きプレハブ内で**ポップアップキャンバス**子ゲームオブジェクトを探す準備が整いました。「Setup」スクリプトには、タグ modelObject 付きのゲームオブジェクトへの参照はすでにあります。したがって、もう 1 つのタグを探す必要はありません。代わりに、「**Get Component in Children**」ノードを使用して、タグ付き「**Mesh**」ゲームオブジェクトのすべての子ゲームオブジェクトで「Canvas」コンポーネントを探します。ポップアップキャンバスは「Canvas」コンポーネントを含む唯一のゲームオブジェクトであるため、「**Get Component in Children**」ノードが**ポップアップキャンバス**ゲームオブジェクトを見つけることができます。

ビデオを視聴するか以下の手順に従って、ポップアップキャンバスへの参照を取得し、それを変数に割り当てます。

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:42Loaded: 10.24%0:00Remaining Time -0:421xPlayback Rate

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

**1.**  グラフエディターで、「Setup」グラフの最後に「**Get Component in Children**」ノード（「Type」、「Include Inactive」）を追加します。「**Type**」を「**Canvas**」に変更し、「**Include Inactive**」を有効にします。

**重要**：複数形の「**Get Components in Children**」ノードではなく、単数形の「**Get Component in Children**」ノードを選択してください。

**2**.「**Set Variable**」（modelObject）ノードの出力を「**Get Components in Children**」ノードのゲームオブジェクト入力に結び付けます。スクリプトが、モデルの「**Mesh**」ゲームオブジェクトの子ゲームオブジェクトの中でキャンバスを探します。

**3.**  「**Set Object Variable**」ノードを「**Get Component in Children**」の後に追加し、「**canvasPopup**」を選択します。

**4.**  「**Get Component in Children**」出力ノードを、「**Set Variable**」（canvasPopup）ノードに下部のラベルなしの入力を使用して結び付けます。このノードによって、キャンバスが canvasPopup 変数に設定されます。

[Image: image]

**5.**  スクリプトをエディター内でテストする場合には、再生モードにしてからエディター内モデルを有効にします。

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

## 7. クリックしてポップアップを表示する

Q&A (0)

次は、ボタンを機能させます。ユーザーがボタンを押したときに、「**CanvasPopup**」ゲームオブジェクトがシーン内でアクティブになるように設定します。

ビデオを視聴するか以下の手順に従って、ワールド空間キャンバスをオンにするビジュアルスクリプトを作成します。

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

**1.**  「Hierarchy」で「**VisualScripts**」ゲームオブジェクトを選択し、「Inspector」で「**Add Component**」>「**Script Machine**」を選択します。

**2.**  新しいコンポーネントで「**New**」を選択します。プロンプトが表示されたら、新しいスクリプトマシンに「DisplayPopup」という名前を付けて「**Visual Scripts**」フォルダーに保存します。

**3.**  「Inspector」で、「**Title**」（「Display Popup」）と「**Summary**」（「Makes an object appear and disappear」）を追加します。次に、「**Edit Graph**」を選択します。

[Image: image]

**4.**  「**OnStart**」ノードと「**OnUpdate**」ノードを削除します。

**5.**  グラフエディターで、「**On Button Click**」ノードを追加します。

**6.**  **buttonPopup** 変数をクリックしてグラフエディターにドラッグしてから、「**On Button Click**」ノードの入力に結び付けます。

**7.**  グラフエディターで、「**Game Object Set Active**」ノードを追加し、フロー入力を「**On Button Click**」ノードのフロー出力に結び付けます。「**Value**」を「**True**」（オン）に設定し、ゲームオブジェクトがアクティブになるように指定します。

**8.**canvasPopup 変数をグラフエディターにドラッグしてから、「**Game Object Set Active**」ノードのゲームオブジェクト入力に結び付けます。

[Image: image]

**9.**プレハブモードでモデルオブジェクトを開きます。「**CanvasPopup**」子ゲームオブジェクトを選択し、それを「Inspector」で無効にします。これ以降、このゲームオブジェクトはデフォルトではアクティブになりません。ユーザーがボタンを押したときにスクリプトによってキャンバスがアクティベートされます。

[Image: image]

**10.**エディター内でテストする場合には、「Inspector」でエディター内モデルを有効にし、「**Play**」を選択してから、「**ButtonPopup**」ボタンを選択します。

**11.** 「Hierarchy」でエディター内モデルを無効にしてから、デバイスにビルドしてボタンをテストします。ボタンを選択したときにテキストパネルが表示されることを確認します。

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

## 8. ボタンで情報のオンとオフを切り替える

Q&A (0)

これでポップアップをオンにできるようになりました。ユーザーが再度ボタンを押したときにポップアップをまたオフにすることができます。「**Negate**」ノードを使用して、キャンバスを非アクティブからアクティブに切り替えたり、また元に戻したりします。つまり、ボタンがトグルのように機能します。

ビデオを視聴するか以下の手順に従って、ワールド空間キャンバスのオンとオフを切り替えるようにビジュアルスクリプトを調整します。

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

**1.**  「DisplayPopup」スクリプトで、canvasPopup 値を含む「**Get Object Variable**」ノードを左に移動して、追加のノードのためのスペースを確保します。

**重要**：「**Get Object Variable**」ノードと「**Set Active**」ノードは結び付いたままにしておきます。

**2.**  グラフエディターで、「**GameObject: Get Active Self**」ノードを追加します。このノードは canvasPopup がアクティブかどうかを検出し、Boolean 値を出力します。「**Get Object Variable**」（canvasPopup ）ノードの出力を新しいノードの入力に結び付けます。

**3.**  グラフエディターで、「**Negate**」ノードを追加し、「**Get Active Self**」ノードの出力に結び付けます。このノードによって、Boolean 値が「**Get Active Self**」ノードの出力とは逆に設定されます。

**4.**  「**Negate**」ノードのフロー出力を「**Set Active**」ノードの「Value」入力に結び付けます。

これで、キャンバスが現在アクティブな場合には、非アクティブに設定されます。現在キャンバスが非アクティブな場合には、アクティブに設定されます。

[Image: image]

**5.**これをエディター内でテストする場合には、エディター内モデルを有効にし、「**Play**」を選択してから、「**ButtonPopup**」ボタンを数回選択します。

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

**6.**  「Hierarchy」でエディター内モデルを無効にします。

**7.**  デバイスにビルドしてボタンをテストし、ボタンを押すと canvasPopup のオンとオフが切り替わることを確認します。

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

## 9. 他にもトライしてほしいこと

Q&A (0)

スキルをさらに向上させたい場合、または新しいコンセプトを探求したい場合、またはプロジェクトを改善したい場合は、以下のオプションのアクティビティを調べてください。各アクティビティは「簡単」、「中程度」、「困難」のいずれかとして識別されるため、どの程度の難易度が予想されるかがわかります。

このアクティビティは完全に任意なので、興味がなくても問題ありません。このステップはただスキップするだけで構いません。

ただ、今回の学習体験を最大限に生かすためにも、この種の課題を試してみることをお勧めいたします。頑張ってください！

#### 中程度：キャンバスがカメラに向くようにする

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

ワールド空間キャンバスは画面にアタッチされていないため、キャンバスがカメラの方を向くようにすると便利です。これには、定義したカメラの方を向くようにオブジェクトを独自に回転させる必要があります。場合によっては、これを行う際に、テキストが正しい向きであることを確認するために何をしたかをテストする必要があります。正しくない場合には、プレハブ内で回転させる必要があるかもしれません。

この特定の課題に取り組むために、いくつかの新しいノードが必要になります。

- 「Transform Look At World Up」。
- 「Get Main Camera」。

ステップを完了としてマーク

## 10. 次のステップ

Q&A (0)

このチュートリアルでは、4 個のボタンのうち 3 個目を機能させて、ワールド空間キャンバスのオンとオフを切り替えるようにしました。次のチュートリアルでは、UI の最後のボタンに機能を追加して、空間サウンドが AR モデルから発せられるようにします。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
