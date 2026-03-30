[Image: image]

# Unity のライティングを始めよう

Tutorial

Beginner

+10XP

20 mins

0

Unity Technologies

[Image: Unity のライティングを始めよう]Summary

ライティングアーティストの役割と光の基本的な挙動を理解したところで、次は Unity でのライティングについて具体的に考えてみましょう。

このチュートリアルが終わるころには、次のことができるようになります：

- 直接光と間接光の違いを説明する
- グローバルイルミネーションという用語の定義
- Unity の URP 用グローバルイルミネーションシステムを特定する
- Unity でのリアルタイムライティングとベイクしたライティングの主な違いについて説明する

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

前回のチュートリアルでは、光の振る舞いの基本を確認し、リアルタイム 3D 体験の制作におけるライティングアーティストの役割について学びました。また、今回の学習体験用の屋外シーンの光源について静止画と Unity エディターの両方で最初のレビューを完了させました。

このチュートリアルが終わるころには、次のことができるようになります：

- 直接光と間接光の違いを説明
- グローバルイルミネーションという用語の定義
- Unity の URP 用グローバルイルミネーションシステムを確認する
- Unity におけるリアルタイムライティングとベイクしたライティングの主な違いについて説明する

さあ、はじめよう！

ステップを完了としてマーク

## 2. 屋外ライティングのサンプルシーンの検証

Q&A (0)

これから数回のチュートリアルで、屋外のシーンと屋内のシーンの 2 つのサンプルシーンで作業します。まずは屋外のシーンから手をつけていくわけですが、その前におさらいです！

屋外のシーンを見直すには：

**1.** Unity エディターで **Creative Core: Lighting**プロジェクトを開きます（まだ開いていない場合）。

**2.**  Project ウィンドウで、**Assets > CreativeCore_Lighting > Scenes** の順に進み、**FinalScene_Lighting_Outdoor** を開きます。

**3.**  上部のメニューで、**Window > Rendering > Light Explorer**の順に選択します。このウィンドウには、シーン内のすべての光源と、ウィンドウから直接調整できる主要な詳細が表示されます。この学習体験を進めるにつれ、このウィンドウをより多く使用するようになります。

[Image: image]

タブを選択し、任意のウィンドウの上にドラッグして放すことで、[エディター内の便利な場所にウィンドウをドッキングする](https://docs.unity3d.com/Manual/CustomizingYourWorkspace.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955869400)ことができます。Project ウィンドウと一緒に Light Explorer ウィンドウをドッキングさせると、うまくいくことが多いです。

**4.**  上部のメニューから、**Window > Rendering > Lighting** の順に選択します。このウィンドウは、作業中にさまざまなシーンレベルの設定を調整するために使用するので、開いておくと便利です。Lighting ウィンドウをドッキングさせることもできますが、Inspector と並べて使うと、うまくいくことが多いです。

[Image: image]

**5.**  前のチュートリアルで操作していない場合は、少し時間をかけてシーンの周りを移動してください。円形劇場は、ライティングの練習に最適な屋外スペースです。中央のスペースと異なるレベルを使用して、光源と影について非常に興味深い実験を行うことができます。

時間をかけてウィンドウをセットアップし、シーンを確認したら、次はそれをライティングするためのシステムを検討しましょう。

ステップを完了としてマーク

## 3. 直接光と間接光の違いは？

Q&A (0)

Unity でライティングを始める前に、もう一つ知っておくべき基本的な概念があります。それは、**直接光**と**間接光**の違いです。これにより、シーンを効果的にライティングすることができ、Unity のさまざまなライティングシステムの役割を理解することができます。

**直射光**とは、放出された光が一度表面に当たり、そのままセンサーに反射する光のことです。

[Image: image]

**間接光**とは、表面に何度もぶつかる光や、太陽を直接見ていないときの空からの光など、センサーに反射してしまう光のことです (太陽は強い光源なので、非常に危険です！)

[Image: image]ステップを完了としてマーク

## 4. Unity のグローバルイルミネーションシステム

Q&A (0)

**グローバルイルミネーション**は、Unity でリアルなライティング結果を提供するために使用できる技法のグループです。これらの技法は、直接光だけでなく、直接光と間接光の両方をシミュレートするため、グローバルイルミネーションと呼ばれています。

Unity には、**Baked Global Illumination** (ベイクした*グローバルイルミネーション*) システムと **Realtime Global Illumination** (*リアルタイムグローバルイルミネーション*) システムの 2 種類のグローバルイルミネーションが存在します。

#### ベイクしたグローバルイルミネーションシステム

ベイクしたグローバルイルミネーションシステムには以下が含まれます：

- **ライトマッピング**(**Lightmapping**)：シーンのサーフェスの明るさを事前に計算し、後で使用するために***ライトマップ***と呼ばれるテクスチャに結果を保存する処理です。このグローバルイルミネーションシステムでは、[プログレッシブライトマッパー](https://docs.unity3d.com/Manual/progressive-lightmapper.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955869400) (Progressive Lightmapper) と呼ばれる特定のライトマッパーシステムを使用して、このプロセスを完了します。
- **ライトプローブ**(**Light Probes**)：*シーンの何もない空間を通過するライトに関する情報を取得し測定（プローブ）することができます。*
- ***リフレクションプローブ***(**Reflection Probes**): Unity でより正確な反射を再現でき、視覚的な現実感を向上させます。

**重要：**この学習体験を通して、それぞれについて詳しく知ることができます。今、この意味がはっきりわからなくても心配しないでください。

すべてのレンダーパイプラインはベイクしたグローバルイルミネーションシステムをサポートしており、この学習体験のすべてのシーンでこのシステムを使用することになります。

#### リアルタイムグローバルイルミネーションシステム

リアルタイムグローバルイルミネーションシステムには以下が含まれます：

- **ライトマッピング**(**Lightmapping**)：このグローバルイルミネーションシステムは、Enlighten Lightmapper という非推奨のライトマッパーを使用しています。
- **ライトプローブ**(**Light Probes**)：ライトプローブは、このグローバルイルミネーションシステムにいくつかの機能を追加しています。

**Creative Core** パスウェイが採用しているユニバーサル レンダラー パイプライン（URP）は、リアルタイム グローバル イルミネーション方式に対応していません。

**ノート：**今回の学習体験の範囲外ですが、[Unity の 2021 年版以降のグローバルイルミネーションに関するアップデート](https://forum.unity.com/threads/update-on-global-illumination-2021.1067015/)で、より詳細な情報が掲載されています。

#### リアルタイム/ベイクしたライティングによる学習体験

この学習体験では、リアルタイムグローバルイルミネーションシステムではなく、ベイクしたグローバルイルミネーションシステムを使用することになります。ただし、**リアルタイムライティング**と**ベイクしたライティング**の両方を読んで学ぶことになるので、グローバルイルミネーションについて考えている人は（当然ですが！）混乱するかもしれません。では、何が違うのでしょうか？

リアルタイムライティングとベイクしたライティングは、シーン内のライティングのデータがいつ Unity によって計算されるかを決定する 2 つの異なるアプローチです。リアルタイムライティングとベイクしたライティングはどちらも同じプロジェクトに実装することができ、それらを組み合わせることでシーンを効率的にライティングすることができる場合が多いです。

リアルタイムライティングとベイクしたライティングのアプローチの違いについては、このチュートリアルの残りの部分で詳しく説明します。

ステップを完了としてマーク

## 5. Unity のリアルタイムライティング

Q&A (0)

Unity は、ゲームやその他のリアルタイム体験が実行されているとき（つまり、起動してユーザーが体験に関与しているとき）、**ランタイムで**リアルタイムライティングを計算します。リアルタイムライトは、1 フレームに 1 回計算されるため、シーン内で動くキャラクターなどに敏感に反応することができます。

それが実際にどういうことなのか、探ってみましょう：

**1.**  Hierarchy で、**Lighting** ゲームオブジェクトを展開します。

**2.**  3 つの **StreetLamp** ゲームオブジェクトのうち、1 つを選択します。どれを選んでもかまいません。

**3.**  [Move ツール](https://learn.unity.com/tutorial/explore-the-unity-editor-1#612e2843edbc2a451ad00be1)（**Ctrl+W**(Windows) または**Cmd+W**(macOS)）を使って街灯を空間内で移動させ、シーンのライティングがどうなるかを観察してみましょう。

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

この街路灯は、放射される光と投じる影がリアルタイムに反応し、期待通りの動作をします。

ステップを完了としてマーク

## 6. Unity のベイクしたライティング

Q&A (0)

シーンが複雑になると、リアルタイムライトは多くのメモリを使用するため、特にプレイヤーや低スペックのハードウェアを持つユーザーにとっては、パフォーマンスの低下につながる可能性があります。 ベイクしたライティングは、**ランタイム**（ユーザーがゲームや体験に参加する時）**の前**にライティングデータを事前に計算することで、この問題を軽減することができます。これにより、体験を実行するためにハードウェアが必要とするリソースの消費を抑えることができます。

計算を実行し、そのデータをライトマップと呼ばれるテクスチャとして保存することを、**ベイキング**または**ライトマッピング**と呼びます。**Creative: Core Shaders** を完了した方は、Unity を使用したレンダリングにおける[テクスチャとその役割について](https://learn.unity.com/tutorial/map-materials-with-textures)学びました。このチュートリアルで以前に学んだように、プロジェクトで使用されるベイクしたライティングの計算は、[プログレッシブライトマッパー](https://docs.unity3d.com/Manual/progressive-lightmapper.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955869400)と呼ばれるライトマッパーシステムによって完成されます。

ベイクしたライティングは、効率が良いだけでなく、よりリアルでユーザーにとって魅力的なライティングを実装することが可能です。ただし、この場合、ライトやシーンに特別な設定がされていないと、操作したときに必ずしも期待通りの反応が得られないということになります。

今度は、このシーンにあるもう一つの街灯で試してみましょう：

**1.**  Hierarchy または Scene ビューで、**Baked StreetLamp** ゲームオブジェクトを選択します。円形劇場で一番高い位置にあるものです。

**2.**  この街灯を [Move ツール](https://learn.unity.com/tutorial/explore-the-unity-editor-1#612e2843edbc2a451ad00be1) (**Ctrl/Cmd+W**) を使用して空間内に移動させ、何が起こるかを観察してみましょう。

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

この街灯が放つ光と、その根元に見える小さな影は、ベイキング処理によって固定されています。これらは、あなたが Scene ビューで行っているライブの変更に反応することはできません。これらを更新するには、シーンのライトマップをリベイクする必要があります。

ベイクしたライティングの詳細とシーンへの実装方法は、近日中に紹介します。今は、リアルタイムライティングの基本から始めてください。

ステップを完了としてマーク

## 7. 次のステップ

Q&A (0)

本チュートリアルでは、次のことを学びました：

- 直接光と間接光
- Unity のグローバルイルミネーションシステム
- リアルタイム/ベイクしたライティングのアプローチ

この学習体験を進めると、リアルタイムライティングとベイクしたライティングの両方を使用して、シーンを効果的に演出する方法を学ぶことができます。つまり、このユニバーサルレンダーパイプライン (URP) プロジェクトでは、リアルタイムとベイクしたライティングの両方を使用することになり、リアルタイムでないライトについては、ベイクしたグローバルイルミネーションシステムを使って、ライティングデータを事前に計算します。

順を追って説明していきますので難しい場合でもご安心ください！

次は、屋外シーンのライティングの基本である**ディレクショナルライト**（**Directional Light**) と**スカイボックス**(**Skybox**) について学びます。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
