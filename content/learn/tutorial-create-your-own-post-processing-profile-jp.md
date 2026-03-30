[Image: image]

# 独自のポストプロセスプロファイルの作成

Tutorial

Beginner

+10XP

25 mins

0

Unity Technologies

[Image: 独自のポストプロセスプロファイルの作成]Summary

ポストプロセスプロファイルは、シーンのビジュアルを根本的に変えることができます。このチュートリアルでは、プロジェクトで特定のビジュアルスタイルを実現するために、独自のポストプロセスプロファイルを作成します。

このチュートリアルが終わるころには、次のことができるようになります：

- Bloom (ブルーム) ; Depth of Field (被写界深度) ; Tonemapping (トーンマッピング); Color Adjustments (カラー調節) など、一般的なポストプロセス エフェクトを使用することができる
- 特定のスタイルを実現するために、ポストプロセスプロファイルを変更する
- ビジュアルの向上と、ポストプロセスエフェクトに伴うパフォーマンスへの負荷とのトレードオフを認識する
- ポストプロセスプロファイルの目的について説明する

Resources

- [Post Processing Bloom Tutorial](https://learn.unity.com/tutorial/post-processing-effects-bloom-2019-3)

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

ポストプロセスとは何か、なぜ使うのかがわかったところで、自分なりの**ポストプロセスプロファイル**(**post-processing profile**) を作る準備ができました。

ポストプロセスプロファイルは、特定のルックアンドフィールを実現するために設定されたポストプロセスエフェクトの集まりです。

これは、プロジェクトに大きな影響を与える可能性があります。

Unity のデモプロジェクト「Neon」の下のサンプル画像を見てください。ポストプロセスによって、シーンのスタイルが完全に変化しています。

[Image: image]

今回のチュートリアルでは、シーンのターゲットとなる美観を選択し、ポストプロセスによってその美観を達成することを試みます。

まずはスタイリングの方向性を決めるところから始めましょう。

ステップを完了としてマーク

## 2. ビジュアルスタイルの選択

Q&A (0)

シーンにエフェクトを加える前に、実現したいビジュアルスタイルを決めておく必要があります。

以下に、ビジュアルスタイルのサンプル画像と、その代表的な映画を紹介します。

#### 昔の西部劇

映画『The Good, the Bad, and the Ugly』(1966年) に似た、昔の西部劇スタイル：

[Image: image]

#### 明るくカラフルな色合い

映画『Finding Nemo』 (2003年) のような、明るくカラフルなスタイル：

[Image: image]

#### ディストピアグリーン

映画『The Matrix』(1999年) のような陰鬱な雰囲気のグリーンカラーのスタイル：

[Image: image]

#### ダークで重厚な雰囲気

映画『 Man of Steel』 (2013年) のような、ダークで重厚な雰囲気のスタイル：

[Image: image]

#### サンプル画像の検証

上記のサンプルを見て、それぞれの画像のどこが全体の美観に寄与しているかを判断してみてください。

例えば、最初の「昔の西部劇」の例では：

- シーン全体が茶色がかっている。
- 画像にざらつき感がある。
- 陰影が非常に濃く、陰影のある部分のディテールが見えにくい。

他の 3 つのサンプル画像についても、この演習を完了できるよう挑戦してみてください。

#### プロジェクトに合った美学を選ぶ

どのような美的感覚をターゲットにしたプロジェクトにしたいのかを明確にする：

- 昔の西部劇
- 明るくカラフルな色合い
- ディストピアグリーン
- ダークで重厚な雰囲気

もし、上記のどれにも魅力を感じず、他のことを試してみたいという場合は、カラーパレットの指標となるようなインスピレーション画像を 1 つか 2 つ見つけてみてください。

目標を決めたら、さっそく始めてみましょう！

ステップを完了としてマーク

## 3. ポストプロセスプロファイルの新規作成

Q&A (0)

前述したように、**ポストプロセスプロファイル** (post-processing profile)****は、シーンの Volume またはエリア）に適用するエフェクトの組み合わせと構成を定義するものです。

新しいものを作ってみましょう：

**1.**Hierarchy で**Postprocessing Global Volume**オブジェクトを選択し、Volume コンポーネントで**New**を選択して、新しいプロファイルを作成します。

[Image: image]

これにより、自動的に新しいブランクのプロファイルが作成されて、割り当てられ、シーンの外観がデフォルトの状態にリセットされます。

[Image: image]

整理整頓のために、新しいプロファイルの場所を確認し、名前を変更する必要があります。

**2.**  Volume コンポーネントで、プロファイルの名前をクリックします。これにより、Project ウィンドウで自動的にそのプロファイルが検索され、ハイライト表示されます。

[Image: image]

**3.** 「PostProcessing - bright and colorful」のような名前に変更（目的に応じて）し、Settings フォルダーのような意味のあるフォルダーに再配置してください。

これでブランクのプロファイルができ、エフェクトを追加する準備ができました。

ステップを完了としてマーク

## 4. ブルームの追加

Q&A (0)

#### ブルームとは？

Bloom (ブルーム) は、最も人気のあるポストプロセス エフェクトの 1 つで、目指すスタイルに関係なく、あなたのプロファイルに恩恵をもたらすことがあります。

現実のカメラで本当に明るい光を撮影すると、カメラに負担がかかり、光源の周囲が光ってしまうのです。

[Image: image][Image: image]

Unity の Bloom (*ブルーム*) エフェクトは、このカメラの挙動をシミュレートして、光源が非常に明るいことを伝えるものです。

#### シーンにブルームを加える

Unity で Bloom (*ブルーム*) がどのように機能するかを理解する最も簡単な方法は、実際に試してみることです：

**1.** Hierarchy で **Global Volume**オブジェクトを選択します。

**2.** Volume コンポーネントの下部で、**Add Override** を選択し、**Post-processing > Bloom** と選択します。
これは、現在レンダリングされているシーンの方法を上書きする（または変更する）ことを選択するため、「オーバーライド」と呼ばれています。これにより、デフォルトですべてのプロパティが無効化された、 **Bloom**  *ボリュームオーバーライド*コンポーネントが新規に追加されます。

[Image: image]

**3.** **Threshold** と**Intensity** のプロパティを有効にし、**Intensity** の値を 1.0 にします。これで、特に赤いボックス、水色のボックス、そして濃い青色のボックスの後ろの明るい部分の周りに、グロー効果が表示されるようになりました。

[Image: image]

Bloom コンポーネントの横にあるチェックボックスで効果の ON/OFF を切り替えて、その効果を実感してみてください。

**4.**もし必要であれば、他の Bloom プロパティを有効にして実験し、その効果を確認してみてください。[Blom のドキュメント](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/post-processing-bloom.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954354358)やこの[チュートリアル](https://learn.unity.com/tutorial/post-processing-effects-bloom-2019-3)で、それらについてより詳しく知ることができます。

**注：**カメラのレンダリング設定で HDR（ハイダイナミックレンジ）を有効にし、ライトやエミッシブマテリアルが十分に明るい場合にのみ、ブルームを使用することができます。ご興味のある方は、[HDR に関するドキュメント](https://docs.unity3d.com/Manual/HDR.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954354358)や[エミッシブマテリアルのドキュメント](https://docs.unity3d.com/Manual/StandardShaderMaterialParameterEmission.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954354358)で詳細をご覧ください。また、次のステップでは、HDR について詳しく学びます。

ステップを完了としてマーク

## 5. トーンマッピングの適用

Q&A (0)

トーンマッピング (Tonemapping) は、シーンを最高の見栄えに仕上げるための重要な機能です。ただし、トーンマッピングとは何かを理解するためには、まず **HDR**とは何かを理解する必要があります。

#### HDR とは？

**HDR** (ハイダイナミックレンジ) を有効にすると、シーンの明るさの値（または輝度）の幅が広くなります。

例えば、 **LDR** (標準的な*ダイナミックレンジ、*Low Dynamic range) では、最大輝度値 1.0 の光を表示することができるかもしれません。でも、HDR なら輝度値 1.5（必要ならそれ以上！）を表示することができます。

[Image: image]

HDR がなければ、LDR の最大輝度以上の値は同じに見えてしまい、非常に残念なことになります：

[Image: image]

実は、ブルームエフェクトを可能にするのは HDR で、通常の範囲では「明るすぎる」光を処理することができるからなのです。

[Image: image]

#### HDR の表示に関する問題点

ただし、問題があります。シーン内のオブジェクトの明るさを太陽のように明るくすることができても、通常の画面ではその明るさを表示することができないのです。

考えてみてください。太陽を見るときのように、目を細めてテレビ画面を見たのはいつ以来でしょうか。

そのため、限られた画面のハードウェアで明るいオブジェクトを表現しようとすると、物理的に可能な限界に達して、その領域全体を白くしてしまい、その周辺のあらゆるディテールを消してしまうのです。

[Image: image]

これでは見栄えも悪いし、現実にはどうにもなりません。そこで、トーンマッピングの出番です！

#### トーンマッピングとは？

Tonemapping (トーンマッピング) は、このような極端な輝度値を低い値にマッピングし直すことで、白飛びしてしまった部分のディテールを復元するものです。

[Image: image]

Tonemapping を有効にすると、壁のディテールがより鮮明に見えるようになります。

少し分かりにくかったかもしれませんが、大丈夫です。HDR を使用する場合、特に Bloom を使用する場合に重要なことは、Tonemapping を適用して、非常に明るいスポットがまだきれいに見えることを確認することです。

#### シーンへのトーンマッピングの追加

幸いなことに、トーンマッピングの適用は、実際に理解するよりもずっと簡単です：

**1.**Hierarchy で**Global Volume** オブジェクトを選択します。

**2.**Volume コンポーネントの下部で、**Add Override**を選択し、**Post-processing > Tonemapping**と選択します。なお、Add Override を選択した後、検索バーで「Tonemapping」を検索することも可能です。

**3.** 新しい**Tonemapping**コンポーネントで、tonemapping **Mode**プロパティを有効にし、ドロップダウンから **Neutral**または**ACES**のどちらか、より良く見える方を選択します。

[Image: image]

Neutral と ACES (Academy Color Encoding System) は、トーンマッピングの操作方法が異なるだけで、結果は微妙に異なります。シーン内の赤と水色のボックスを見ていただければわかるように、ACES はシーン内の色に対してより大きな効果を発揮しています。

簡単な例として、以下の画像をご覧ください。

[Image: image]

ブルームとトーンマッピングでライティングをできるだけきれいに見せたら、次はプロファイルの色に注目しましょう。

ステップを完了としてマーク

## 6. カラーグレーディングを行う

Q&A (0)

#### カラーグレーディングとは？

Color Grading (カラーグレーディング) は、スタイル効果を得るためにシーンのカラーレベルを調整するプロセスであり、プロジェクトの認知度のジャンルに大きな影響を与える可能性があります。

映画でおなじみのカラーパレットをご紹介しましたが、ゲームでもさまざまなカラーパレットが使われています。以下のサンプルはすべて Unity を使って作られています。

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

環境の明るさや色の範囲によって、ホラー、SF、アート系、子供向けなどの雰囲気を伝えることができます。

メディアプロダクションの中には、カラーリストと呼ばれる、色彩理論を実践するカラーグレーディングを主な仕事とする人たちがいます。

非常に複雑な芸術と科学であるものの表面を掻くだけですが、ぜひ一度試してみるといいでしょう。

#### シーンにカラーグレーディングを加える

カラーグレーディングを行うために、プロファイルに**Color Adjustments**のオーバーライドモジュールを追加しましょう：

**1.**Volume コンポーネントにおいて、**Color Adjustments** の Volume Override コンポーネントを追加します。

各プロパティがどのような働きをするかは、[Color Adjustments](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/Post-Processing-Color-Adjustments.html#:~:text=To%20add%20Color%20Adjustments%20to,any%20Camera%20this%20Volume%20affects.?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954354358) に関するドキュメントで詳しく説明されていますが、実際に操作して確認する方が簡単です。

**2.**Color Adjustment プロパティを使用して、希望のプロファイルにできるだけ近づけるようにします。

前回までのチュートリアルでは、それぞれのスタイルの色の違いを確認するのに時間がかかりました。今度は、それをあなたのシーンに適用する番です。

以下、各スタイルのサンプル画像を参考に、いくつかのポイントをご紹介します。

#### 明るくカラフルな色合い

[Image: image]

- コントラストと彩度を上げる
- Neutral のトーンマッピング

[Image: image]

- 露出を増やす
- コントラストと彩度を下げる
- 黄色のカラーフィルターを追加する
- Neutral のトーンマッピング

#### ディストピアグリーン

[Image: image]

- 彩度を下げる
- 緑色のカラーフィルターを追加する
- ACES のトーンマッピング
- Bloom (ブルーム)  の強度、かかり度合いの値*を*上げる

#### ダークで重厚な雰囲気

[Image: image]

- コントラストを上げる
- ブルーのカラーフィルターを追加する
- ACES のトーンマッピング

Color Adjustments のコンポーネントのオーバーライドでも十分ですが、さらに精密にシーンの色を制御することができます。

**3.**Volume コンポーネントで、**Lift**、**Gamma**、**Gain** のオーバーライドを追加し、カラートラックボールの下のチェックボックスを使ってそれぞれを有効にします。

[Image: image]

これは、シーンに含まれる 3 種類のカラーを独立して調整できるため、いわゆる 3 種類のカラーコレクターと呼ばれるものです：

- シーン内の暗いトーン (Lift、リフト)
- 中間トーン (Gamma、ガンマ)
- 明るいハイライト (Gain、ゲイン)

**4.**各トラックボールとその下にあるスライダーを操作して、シーンのカラーグレーディングを微調整してください。

[Image: image]

上記のサンプル画像、左は影をより濃くドラマチックにするために暗いトーン（Lift）まで下げ、右は暗くなり過ぎないように中間トーンを上げています。なお、[Shadows (シャドウ)、Midtones (ミッドトーン)、Highlights (ハイライト) のオーバーライド](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/Post-Processing-Shadows-Midtones-Highlights.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954354358)でも、ほぼ同じ調整が可能です。

ほとんどの場合、基本的な Color Adjustments (カラー調節) のオーバーライドで十分ですが、非常に特殊な見栄えを念頭に置いている場合は、 3 種類のカラーコレクションが役に立つでしょう。

カラー関連の他のポストプロセスエフェクトを試したい場合は、[White Balance](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/Post-Processing-White-Balance.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954354358) (ホワイトバランス) 、[Split Toning](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/Post-Processing-Split-Toning.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954354358) (スプリットトーニング)、[Color Curves](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/Post-Processing-Color-Curves.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954354358) (カラーカーブ) のオーバーライドを試してみてください。

カラーグレーディングが終わったら、次は他の楽しいポストプロセスエフェクトに目を向けてみましょう！

ステップを完了としてマーク

## 7. 他のポストプロセスエフェクトも試してみよう

Q&A (0)

よく使われるエフェクトはすでに実行されているので、他のエフェクトをいくつか試してみましょう。

もう一度言いますが、ここですべてのエフェクトのプロパティを説明するのではなく、とにかく実際に使ってみて、その効果を確かめてみてください。具体的な内容は、いつでも[ドキュメント](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/EffectList.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954354358)で確認することができます。

ただし、ポストプロセスはタダではありません。エフェクトを追加するたびに、シーンのスピードが遅くなります。本当にビジュアルの効果が向上する場合のみ、エフェクトを使用してください。

以下、特に便利なエフェクトをご紹介します。

#### Depth of Field

[Depth of Field](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/post-processing-depth-of-field.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954354358) (被写界深度) は、特定の距離のオブジェクトにピ ントを合わせ、近くまたは遠くにあるオブジェクトをぼかします。これにより、プロジェクトはよりシネマティックな 見栄えになります。このエフェクトはパフォーマンスに大きな影響を与えるので、控えめに使用する必要があります。

[Image: image]

#### Film Grain

[Film Grain](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/Post-Processing-Film-Grain.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954354358) (フィルムグレイン) は、古い映画で見られるような粒状感をシミュレートしたものです。このエフェクトは、画像を非常に古いものに見せたり、あるいはアーカイブから持ってきたものに見せたりするのに使うことができます。

[Image: image]

#### Vignette

[Vignette](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/post-processing-vignette.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954354358) (ビネット) エフェクトは、物理的なカメラレンズで起こりうる効果を模倣して、画面の外側の端を暗くするものです。また、古く見えるようにしたり、視聴者の視線を画面の中心に集中させたりする場合にも使われることがあります。

[Image: image]

これらは試してみたいエフェクトのほんの一部ですが、[Lens Distortion](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/Post-Processing-Lens-Distortion.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954354358) (レンズディストーション)、[Motion Blur](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/Post-Processing-Motion-Blur.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954354358) (モーションブラー)、[Chromatic Aberration](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/post-processing-chromatic-aberration.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954354358) (色収差) のオーバーライドも試してみてはいかがでしょうか。これらのエフェクトは、パフォーマンスにも大きく影響することに留意してください。

ステップを完了としてマーク

## 8. 他のビジュアルスタイルのプロファイル作成

Q&A (0)

あなたは、自分の好きなスタイルで 1 つのプロファイルを作成しました。今度は、自身のスキルを使って、他のスタイルのプロファイルを作成してみてください。作成したプロファイルを複製し、別のビジュアルスタイルにリネームして、その美学を実現できるかどうかを確認するだけです。

このチュートリアルの他の例（例：昔の西部劇、ダークで重厚な雰囲気など）を試すこともできますが、全く別のものを試すこともできます。

ステップを完了としてマーク

## 9. 次のステップ

Q&A (0)

おめでとうございます！あなたは、シーン全体を通して特定の美観を達成するために、独自のポストプロセスプロファイルを作成しました。次のチュートリアルでは、「ローカル」な ポストプロセスプロファイルの作成に挑戦し、1 つのシーンに複数のスタイルを含めることができるようにします。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
