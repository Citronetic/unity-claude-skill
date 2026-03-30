[Image: image]

# マーカーベースのアプリケーションに空間オーディオを追加する

Tutorial

Beginner

+10XP

45 mins

0

Unity Technologies

[Image: マーカーベースのアプリケーションに空間オーディオを追加する]Summary

オーディオはアプリケーションに命を吹き込みます。ボタンのクリック音、感情を高めるバックグラウンドミュージック、オブジェクトが動くときのサウンドエフェクトなど、どのようなものであっても、オーディオによって体験が完全なものに感じられます。

3D 環境では、空間オーディオを使用してソースに近づくときは音を大きくし遠ざかるときには弱くすることで、3D エフェクトを加えることができます。空間オーディオはユーザーがアプリケーションの没入感を得るために役立ちます。

このチュートリアルでは、ボタンがクリックされたときにモデルが空間オーディオを発するようにします。

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. 概要

Q&A (0)

オーディオはアプリケーションに命を吹き込みます。ボタンのクリック音、感情を高めるバックグラウンドミュージック、オブジェクトが動くときのサウンドエフェクトなど、どのようなものであっても、オーディオによって体験が完全なものに感じられます。

3D 環境では、**空間オーディオ**を使用してソースに近づくときは音を大きくし遠ざかるときには弱くすることで、3D エフェクトを加えることができます。空間オーディオはユーザーがアプリケーションの没入感を得るために役立ちます。

このチュートリアルでは、ボタンが押されたときにモデルが空間オーディオを発するようにします。

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

**ノート**：Unity のオーディオの詳細については、[**Creative Core：オーディオ**のチュートリアル](https://learn.unity.com/project/creative-core-audio)を参照してください。

ステップを完了としてマーク

## 2. オーディオソースを追加する

Q&A (0)

AR アプリケーションでサウンドを再生するには、オーディオソースとオーディオクリップを使用します。**オーディオクリップ**は特別なオーディオファイルです。**オーディオソース**は、選択したクリップの再生方法を Unity に指示します。オーディオソースには、音量、優先順位、空間サウンド設定など、制御できる多数のさまざまな設定が含まれています。Unity マニュアルで、[オーディオソース](https://docs.unity3d.com/Manual/class-AudioSource.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950630095)の詳細を参照できます。

以下の手順に従って、オーディオソースをモデルのプレハブに追加します。

**1.**  Project ウィンドウで、選択したモデルのプレハブを見つけて、それをプレハブモードで開きます。

**2.**  「Hierarchy」で、空のゲームオブジェクトを「**Mesh**」の子ゲームオブジェクトとして作成し、「Audio」という名前を付けます。「Hierarchy」では「**Audio**」を「**CanvasPopup**」の次に配置します。

[Image: image]

**3.**  「Inspector」で、「Audio Source」コンポーネントを「**Audio**」ゲームオブジェクトに追加します。

**4.**  「Audio Source」コンポーネントの「**AudioClip**」プロパティを見つけ、ピッカー（円形アイコン）を使用して、アプリケーションで再生するサウンドファイルを選択します。プロジェクトのファイルにいくつかのクリップが含まれています。

**5.**  テストのために「**Loop**」を有効にします。

**6.**  「**Spatial Blend**」値を **1** に設定します（これは空間 3D オーディオを意味します）。3D 空間ブレンディングでは、オーディオはカメラがオーディオソースに近づくと大きくなり、カメラが遠ざかると小さくなります。

**7.**「**Volume Rolloff**」を「**Linear Rolloff**」に設定します。「**Min Distance**」を「**0.1**」、「**Max Distance**」値を「**2.0**」に設定します。これらの値では、モデルから 0.1 メートル以内では最大ボリュームで再生されますが、離れるにしたがって少しずつ小さくなり、2 メートルを超えるとまったく聞こえなくなります。

[Image: image]

**8.**  アプリケーションをビルドしてテストし、オーディオ設定が体験にどのように影響するかを確認します。Unity 内でオーディオをテストすることもできます。「**Play**」を選択してから、モデルをカメラに少しずつ近づけたり遠ざけたりします。

**9.**空間オーディオがどのように機能するかがわかるにつれて、「Audio Source」コンポーネントの「**Min Distance**」プロパティと「**Max Distance**」プロパティを微調整する必要があるかもしれません。場合によっては希望どおりにサウンドを再生できるようにするためにビルドとテストを数回行う必要があります。

**10.**  空間オーディオに満足できたらプレハブモードを終了します。

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

## 3. UI ボタンを更新する

Q&A (0)

以下の手順に従って、オーディオを再生するボタンを調整します。

**1.**  「Hierarchy」で、「**Button4**」を選択し、名前を「ButtonAudio」に変更します。

**2.**  「Inspector」で、ボタンの「**Image**」コンポーネントを見つけて、ピッカー（円形アイコン）を使用してスプライトを変更します。

**3.**  「Hierarchy」で、「**ButtonAudio**」ゲームオブジェクトの「**Text (TMP)**」子ゲームオブジェクトを選択し、テキストを「Audio」または「Play Audio」のように変更します。

**4.**  テキストのスタイル、フォント、他のプロパティを自由にカスタマイズします。

[Image: image]ステップを完了としてマーク

## 4. 新しい変数を設定して割り当てる

Q&A (0)

ボタンの準備ができましたが、まだボタンは何もすることができません。ボタンを機能させるには、ビジュアルスクリプティングで 2 つのステップを使用します。最初のステップではボタンとオーディオへの参照を作成し、2 つ目のステップではボタンが押されたときに実際にオーディオを再生するようにします。これは、ポップアップキャンバス機能の実装に使用したのとほとんど同じプロセスです。

ビデオを視聴するか以下の手順に従って、ビジュアルスクリプトでオーディオを制御します。

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

**1.**  「Hierarchy」で、「**Script Manager**」ゲームオブジェクトを選択し、「Setup」グラフを開きます。

**2.**  「Blackboard」で、「buttonAudio」という名前の新しい **Object** 変数を作成し、「**Type**」を「**Button**、「**Value**」を「**ButtonAudio**」ボタンに設定します。

**3.**  「Blackboard」で、「audioSource」という名前の新しい **Object** 変数を作成し、「**Type**」を「**Audio Source**」に設定しますが、「**Value**」は割り当てなしのままにしておきます。

[Image: image]

**4.**「**Get Component in Children**」ノード（「Type」、「Include Inactive」）をグラフの最後に追加します。「**Type**」を「**Audio Source**」に設定し、「**Include Inactive**」を有効にします。

**5.**「Blackboard」で **modelObject** 変数をクリックしてグラフエディターにドラッグしてから、出力を「**Get Component in Children**」ノードのオブジェクト入力に結び付けます。

**6.**  「**Set Object Variable**」ノードをグラフの最後に追加します。「**audioSource**」をゲームオブジェクトとして選択します。出力タイプノードを「**Set Variable**」の下部の入力ノード（ラベルなし）に結び付けます。

[Image: image]

**7.**  エディターを再生モードにして、モデルのゲームオブジェクトが検出されたときに、スクリプトグラフでオーディオソースが変数に入力されるかどうかを確認します。

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

## 5. ボタンでオーディオを再生させる

Q&A (0)

最後のステップでは、ボタンが押されたときに新しいスクリプトによってオーディオをオンにします。

ビデオを視聴するか以下の手順に従って、ボタンが押されたときにオーディオを再生するようにします。

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

**1.**「Hierarchy」で、「**VisualScripts**」ゲームオブジェクトを見つけて、「PlayAudio」という名前の新しい「Script Machine」コンポーネントを作成します。

**2.**名前を「Play Audio」、説明を「Controls the audio on button press」に編集します。次に、「**Edit Graph**」を選択します。

[Image: image]

**3.**  「**On Start**」ノードと「**On Update**」ノードを削除します。

**4.**  「Blackboard」で **buttonAudio** 変数をクリックして、グラフエディターにドラッグします。

**5.**グラフエディターで、「**On Button Click**」ノードを追加し、「**Get Variable:**」（buttonAudio）ノードのフロー出力を「**On Button Click**」ノードの入力に結び付けます。

**6.** **audioSource** 変数を「Blackboard」からグラフエディターにドラッグします。

**7.**  グラフエディターで、「**Audio Source Play**」ノードを追加し、「**On Button Click**」ノードのフロー出力をフローノード入力に結び付けます。

**8.**  「**Get Variable**」（audioSource）出力を「**Audio Source Play**」ノードのサウンド入力に結び付けます。

[Image: image]

**9.**  オーディオをループさせない場合は、Project ウィンドウで、選択したオブジェクトのプレハブを見つけ、それをプレハブモードで開き、「**Audio**」子ゲームオブジェクトを選択し、「Audio Source」コンポーネントの「**Loop**」プロパティを無効にします。

**10.**必要な場合には、「**Play On Awake**」プロパティを無効にします。これを有効にすると、ゲームオブジェクトがシーンにスポーンされたときにオーディオが再生します。サウンドによってはクールな効果が得られる可能性があります。

**11.**  ビルドしてデバイスでテストします。ボタンを押すとオーディオが再生されるはずです！

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

## 6. 他にもトライしてほしいこと

Q&A (0)

さらなるスキルの向上や、新しいコンセプトの模索、現プロジェクトについての改善などを考えているのであれば、以下の任意のアクティビティもぜひ見るようにしてみてください。各アクティビティは「簡単」、「中程度」、「困難」のいずれかとして識別されるため、どの程度の難易度が予想されるかがわかります。

これらのアクティビティは完全に任意であるため、興味がなければこのステップをスキップしてもかまいません。ただ、今回の学習体験を最大限に生かすためにも、このアクティビティのうち少なくとも 1 つは試してみることをお勧めします。頑張ってください！

#### 簡単：Unity Asset Store から無料の音楽ファイルをダウンロードして 1 つをプロジェクトに組み込む

Unity Asset Store には無料の素晴らしいサウンドが多数あります。下の例では、The Indie Devs Nation の [Free Game Music Collection](https://assetstore.unity.com/packages/audio/music/orchestral/free-game-music-collection-177094) のサウンドが使用されています。時間をかけて Unity Asset Store を探して好みのパッケージを見つけ、体験にバックグラウンドミュージックを追加してください。

次に、ボタンを押して音楽をオンにするために、ユーザーインターフェースにボタンを追加します。

#### 中程度：オンラインリポジトリからオーディオをダウンロードして体験に実装する

オーディオファイルのライセンスにはさまざまな種類がありますが、制作用に優れたオーディオを最も入手しやすい方法の 1 つは、Creative Commons（CC）ライセンスの音楽やサウンドエフェクトを探すことです。毎年多くのオーディオファイルがリリースされており、Creative Commons ライセンスの種類もさまざまです。CC ライセンスの詳細については、[Creative Commons のウェブサイト](https://creativecommons.org/)を参照してください。CC の音楽やサウンドエフェクトは、[Free Music Archive](https://freemusicarchive.org/home)、[Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)、[Internet Archive](http://www.archive.org/) など、多様なサイトで見つけることができます。

また、ファイルを無料で使用できる他のライセンスの対象となっている優れたオーディオは他にもあります。驚くべきリソースの 1 つが、Sonniss の [Royalty Free Sound Effects Archive: GameAudioGDC](https://sonniss.com/gameaudiogdc) です。このリソースには、数ギガバイトの高品質のオーディオとサウンドエフェクトが含まれています。唯一の問題は、探しているものを見つけるために十分な時間を確保することかもしれません！各パックにはトラックリストが含まれ、ぴったりのエフェクトを見つけやすくなっています。

世の中には素晴らしいファイルがあり、作品を提供しようとする優秀なアーティストが存在しています。オーディオファイルに関してどのリソースを利用するとしても、必ずライセンスガイドラインに従ってください。そうすることで、共有し続けることができトラブルを回避できます。

この課題で、オーディオファイルを探して、ダウンロードと実装を行い、体験のサウンドを素晴らしいものにしてみてください。

#### 困難：ボタンでオーディオのオンとオフを切り替える

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

オーディオの再生は素晴らしいのですが、多くのオーディオファイルでは、オーディオをオフにすることも必要になります（特にオーディオがループする場合）。幸いなことに、ボタンによるオーディオの切り替えはすでに半分まで進んでいます。オーディオをオフにするには、以下のノードを追加して「PlayAudio」グラフを変更する必要があります。

- オーディオが再生されているかどうかを確認するノード。
- 「**If**」ノード。
- オーディオソースが再生されている場合に停止するノード。

ステップを完了としてマーク

## 7. 次のステップ

Q&A (0)

おめでとうございます！マーカーを検出し、そのマーカー上にモデルをスポーンし、ユーザーがそのモデルを操作できる、AR アプリケーションを作成しました。これを達成するため、以下のことを行いました。

- 3D モデルをスポーンするための画像マーカートラッキングを AR に実装しました。
- スクリーンスペース UI とワールド空間 UI を AR アプリケーションに実装しました。
- 空間オーディオを AR に実装しました。

ここからは、これまでのスキルと知識を活かして、新たなチャレンジに取り組んでいきましょう。これから、プロジェクト概要を受けて、独自の AR アプリケーションを作成していきます。自分の納得がいく新しい AR 体験が作成できたら、それを提出して他の人たちと共有しましょう。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
