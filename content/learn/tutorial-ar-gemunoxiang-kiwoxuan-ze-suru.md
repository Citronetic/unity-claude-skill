[Image: image]

# AR ゲームの向きを選択する

Tutorial

Beginner

+10XP

30 mins

0

Unity Technologies

[Image: AR ゲームの向きを選択する]Summary

デスクトップゲームとモバイルゲームの最も明らかな違いの 1 つとして、ゲームをプレイする画面があります。AR デザイナーは、どの向きが UFO ゲームの移植で最もうまく機能するのかを決定し、実装する必要があります。

このチュートリアルでは、次のようなことを行います。

- さまざまなアスペクト比と向きを探索する
- 選択した向きをゲームに適用する
- 新しい向きに合わせてゲーム UI を調整する

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. 概要

Q&A (0)

AR ゲームの移植について最初に決定する必要があるのは、適切なゲームの向きとアスペクト比の選択です。ゲームの**向き**によって、縦モードでプレイできるか横モードでプレイできるかが決まります。デザインの向きとアスペクト比に応じて、ゲームの見た目や操作感が大きく異なる場合があります。

[Image: image]

このチュートリアルでは、適切な方向とアスペクト比を決定し、この選択を反映するようにゲーム UI コンポーネントも調整します。

ステップを完了としてマーク

## 2. アスペクト比とは何ですか?

Q&A (0)

ゲームの**アスペクト比**とは、画面の幅と高さの特定の比率です。たとえば、昔ながらのテレビや最初の映画では、アスペクト比 4:3 が使用されていました。つまり、画面の幅は 4 単位、高さは 3 単位であったということです。ただし、最新の大型画面のテレビやほとんどの新しい映画では、より広い 16:9 のアスペクト比が使用されています。

最新のモバイルデバイスのアスペクト比は、標準の 16:9 ワイドスクリーンに似ている傾向がありますが、依然としてアスペクト比の範囲は幅広くなっています。このため、向きを選択した後でも、幅広いアスペクト比でアプリをテストすることが重要となります。

ステップを完了としてマーク

## 3. ゲームの向きのオプション

Q&A (0)

最も重要な決定は、デフォルトの向きを横向きにするか縦向きにするかを選択することです。

モバイルデバイスの**横**向きとは、デバイスの画面がデフォルトの向きから 90 度回転され、高さよりも幅が広くなる表示モードを指します。

**縦**向きとは、デバイスの画面が垂直に保持され、幅よりも高さが高くなる表示モードを指します。ディスプレイがユーザーの手にフィットしやすいため、この向きは通常、テキストメッセージの送信やブラウジングが必要なアプリケーションに使用されています。

ユーザーに対して選択した方向アプローチをサポートするように UI を設定する必要があります。

#### ゲームの向きを選択するのに役立つガイダンス

移植にどのアプローチを採用するか分からない場合は、次の質問に対する答えを検討してください。

- このエクスペリエンスは、横向きモードと縦向きモードのどちらで使用すると良くなりますか、または使いやすくなりますか?
- どちらのモードでもゲームを正常にプレイできますか?
- 向きの選択肢は UI ボタン​​の位置にどのような影響を及ぼす可能性がありますか?

ゲームのデスクトップバージョンは横向きモードでセットアップされているため、移植にはに横向きモードのみを使用するのがこれまでで最も簡単な選択肢になります。ゲームを縦向きモードでプレイする必要があると強く感じる場合は、それも可能ですが、より多くのデザイン作業が必要になります。

ステップを完了としてマーク

## 4. デフォルトの向きを設定する

Q&A (0)

**デフォルトの向き**を設定する必要がありますが、これは、ユーザーがアプリを開いたときにアプリが開始される向きです。

次の手順に従って、プロジェクト設定でデフォルトの向きを変更します。

**1.**  Unity Editor で、**Edit**>**Project Setting…** に移動します。

**2.**Project Settings ウィンドウで、**Player** を選択した後、**Resolution and Presentation** (解像度と表示) 設定を展開します。

**3.**  Orientation (向き) セクションで、ドロップダウンを使用して **Default Orientation** (デフォルトの向き) を希望の選択肢に設定します。次の選択肢から選択できます。

- **Portrait (縦向き):** 電話機は、電話機の上部を上に向けて直立した状態で持つ必要があります。
- **Portrait Upside Down (縦向きの逆さま):** 電話機は逆さまに持つ必要がありますが、これは非常に珍しいものです。
- **Landscape Right (右横向き): 電**話機は、その電話機の上部が右を向くように横向きに持つ必要があります。
- **Landscape Left (左横向き): 電**話機は、その電話機の上部が左を向くように横向きに持つ必要があります。
- **Auto Rotation (自動回転)**: ユーザーの持ち方に応じて、ゲームは上記のいずれかの向きに自動的に回転し、どの向きが可能かを選択できます。

[Image: image]

**4.**  **Auto Rotation** を選択した場合は、電話機が回転するときにどの向きの使用を許可するかを決定する必要があります。Allowed Orientations for Auto Rotation (自動回転に許可される向き) 設定セクションで、目的のデザインに最も適した向きを有効にします。この例では、回転を横向きのみに設定したままにします。

**重要t**: Unity の UI システムに慣れていない限り、現時点では縦向きと横向きの両方を許可することはお勧めしません。このアプローチでは、多くの追加のデザイン作業も必要になります。

[Image: image]

**5.**  デバイス上でエクスペリエンスをビルドしてテストし、選択した回転が正しく機能することを確認します。

**6.**  希望する向きごとに UI がどのように表示されるかに注目し、エクスペリエンスの開始シーンとメインシーンでそれぞれの方向をテストするようにします。横向きのみを選択した場合、必要な修正はわずかです。縦向きを許可した場合は、より多くの編集が必要になります。

現時点では実際にモバイルでゲームをプレイすることはできないため、**WinScene** または **LoseScene** をテストすることはできません。

**7.**この時点で **WinScene** または **LoseScene** をテストするには、[Scenes in Build] パネルでテストするシーンのみを選択し、再度ビルドします。

ステップを完了としてマーク

## 5. その他の考慮事項

Q&A (0)

作成した一般的な方向とアスペクト比の構成は、プレイヤーが使用するデバイスの種類に関係なく考慮する必要があります。ただし、ユーザーが使用する可能性のあるデバイスの特定のデザインも考慮する必要があります。

たとえば、デバイスの **ノッチ** について考えた場合、これは、通常、前面画面のカメラまたはスピーカーを囲む電話機上の領域であり、クリックすることはできません。**StartScene** は、テキストとボタンがノッチによって切り取られている場合に、右横向きの方向と比べ左横向きの方がどれだけ使いやすく読みやすいかを見てみましょう。

カメラ、ボタンやその他の画面上の対話可能な要素の位置は、慎重に考慮しないと、ユーザーエクスペリエンスに重大な悪影響を及ぼす可能性があります。

携帯電話のカメラとノッチのレイアウトをすばやく検索して、目的のプラットフォームでそれらの要素がどこにあるのかを把握すれば、ユーザー向けの UI 要素を配置するのに役立ちます。

次の質問を活用して、調査を進めるのに役立てます。

- 開発しているプラ​​ットフォーム (iOS、Android) には、注意が必要な特定のカメラ穴やノッチがありますか?
- 私が選択した方向への手の配置により、ユーザーは自然に重要な UI 要素の上に親指を置くようになりますか?
- 向きごとに異なる自然な手の配置に合わせて UI を調整する必要がありますか?

ステップを完了としてマーク

## 6. ゲームのUIコンポーネントを調整する

Q&A (0)

許可される向きを選択し、各シーンで UI をテストしたので、ゲーム UI に必要な変更を加えることが不可欠になります。可能な方向を横向きまたは縦向きに制限すると、追加の UI 開発の必要性を最小限に抑えることができることに留意してください。

次の手順に従って、ゲーム UI コンポーネントを構成します。

**1.**  Game ビューで、Aspect Ratio ドロップダウンを選択し、ゲーム用に選択した方向の 1 つと一致するようにアスペクト比を設定します。16:9 の比率は、さまざまなモバイルデバイスのアスペクト比に非常に近いため、**16:9 縦向き** または **16:9 横向き** のいずれかで始めます。

[Image: image]

**2.**各 UI コンポーネントを確認し、必要に応じて、選択したアスペクト比と向きを調整します。

**3.**一般的な 16:9 比率に合わせて UI を調整したら、プラットフォームの他のさまざまなアスペクト比でシーンがどのように見えるかをテストします (iOS の場合は iPhone 12 Pro、Android の場合は Samsung Galaxy など)。

**4.**  問題が発生した場合は、[Creative Core: UI](https://learn.unity.com/project/creative-core-ui) コースを参照して、アプリケーションのレスポンシブ UI のデザインと開発について詳しく学習してください。

ステップを完了としてマーク

## 7. さらに試してみたいこと

Q&A (0)

スキルをさらに向上させたい場合、または新しいコンセプトを探求したい場合、またはプロジェクトを改善したい場合は、以下のオプションのアクティビティをいくつか調べてください。各アクティビティは「簡単」、「中程度」、「困難」のいずれかとして識別されるため、どの程度の難易度が予想されるかが分かります。

これらのアクティビティは完全に任意なので、興味がなくても問題ありません。このステップはただスキップするだけで構いません。

ただし、この学習体験を最大限に活用するために、少なくとも 1 つを試してみることをお勧めします。幸運をお祈りします!

#### 中程度: MainScene に設定メニューを追加する

プレイヤーがゲームの設定を制御できるようにするのは、よく作られたアプリケーションの標準的な部分です。ゲームの機能をオンまたはオフにできることは、モバイルエクスペリエンスにおいて非常に重要です。たとえば、デバイス上のその他のオーディオに影響を及ぼすことなくゲームオーディオを無効または有効にできることで、ユーザーは電話をかけたり受信したりしながら、異なる環境でもゲームを静かにプレイできます。モバイルゲームにとって同様に重要な追加設定が多数あります。

この課題を完了するには、設定メニューを **MainScene** に追加し、設定を制御するための新しいスクリプトグラフを作成します。

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

#### 困難: 縦向きと横向きを許可する

実際にどちらの向きでもユーザー体験を楽しめるようにできると仮定すると、ユーザーがゲームを縦向きモードでプレイするか横向きモードでプレイするかを選択できるようにするのが理想的です。この設定を有効にするには、プレーヤー設定で **Auto Rotation** を有効にし、許可される向きで縦と横の両方を有効にする必要があります。

この結果を達成できるようにするには、[Creative Core: UI](https://learn.unity.com/project/creative-core-ui) コースを参照して、アプリケーションのレスポンシブ UI の設計と開発について詳しく学習してください。You can also explore [Designing for Multiple Resolutions](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/HOWTO-UIMultiResolution.html#scaling-with-screen-size?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950984343) (複数の解像度向けのデザイン) では、Canvas Scaler (キャンバススケーラー) コンポーネントがどのように機能するかを学習します。

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

## 8. 次のステップ

Q&A (0)

よくできました!これで、選択したどの向きでもユーザーが操作できるように準備され整った UI が完成しました。次回のチュートリアルでは、ユーザーが物理環境にプレイエリアを生成できるようにします。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
