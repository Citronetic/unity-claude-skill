[Image: image]

# バーストパーティクルの作成

Tutorial

Beginner

+10XP

30 mins

0

Unity Technologies

[Image: バーストパーティクルの作成]Summary

VFX の中には、ユーザーのアクションをトリガーにして、アプリケーションのレスポンスや躍動感を高めるものもあります。このチュートリアルでは、新規にスモークバーストエフェクトを作成し、ユーザーが発火や消火をしたいときにそのエフェクトを生成することができるようにします。

このチュートリアルが終わるころには、次のことができるようになります：

- Emission モジュールの Bursts セクションを使用すると、時間をかけて連続的に放出するのではなく、1 回のバーストでパーティクルを作成することができる
- Random Between Two Constants 機能を使用して、Particle System にランダム性を追加する
- Gradient エディターと Color Over Lifetime モジュールを使って、パーティクルの色をその生存期間にわたって変更することができる
- Size Over Lifetime モジュールの Curve エディターを使用して、パーティクルの生存期間に渡って大きさを変えられる

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

ビジュアルエフェクト (VFX) は、シーンを生き生きとさせるだけでなく、よりインタラクティブで魅力的なものにすることができます。ユーザーが何かを成功させたら紙吹雪を飛ばして喜ばせることもできます。キャラクターが地面に落ちたら、足元に粉塵が舞って視覚的な面白さが増すかもしれません。

以下に紹介する画像は、武器発射時の銃口の火花、ゴール到達時のキラキラとした輝き、キャラクターが杖を振った時の斬撃エフェクトのサンプル例です。

[Image: image][Image: image][Image: image]

このようなイベントベースのパーティクルのバーストは、前回のチュートリアルで作成した環境エフェクトとは異なり、特定のイベントによって引き起こされる一回のパーティクルのバーストであるためです。

このチュートリアルでは、ユーザーが火を消したり再点火したりできるように スモーク (*煙) のバースト* を作成し、より満足度の高いインタラクションを実現します。

ステップを完了としてマーク

## 2. 作業領域を確保する

Q&A (0)

スモークパーティクルのバーストの作成に取り掛かる前に、邪魔なものを取り除き、シーン内に既にあるパーティクルを一時的に無効にしておきましょう。

**1.**CreativeCore_VFX_ProjectFiles プロジェクトを Unity エディターで開きます（まだ開いていない場合）。

**2.**Project ウィンドウで、**Assets > CreativeCore_VFX > Scenes** の順に選択し、TutorialScene_VFX_Outdoor シーンを開いてください。

**3.**Hierarchy で VFX_Fire オブジェクトを選択し、Inspector で非アクティブにします。また、ファイヤーピットにアタッチされている Point Light オブジェクトを非アクティブにします。

**4.**天候エフェクトを無効にします。

[Image: image]

これで、スモークパーティクルのバーストの生成を開始するための、きれいなシーンができました。

ステップを完了としてマーク

## 3. 新しいバーストパーティクルの追加

Q&A (0)

バーストパーティクルは、環境パーティクルと似ていますが、持続時間が短く、通常、より狭い範囲から発生します。では、天候エフェクトで始めたように、新しいパーティクルシステムをシーンに追加することから始めましょう。

**1.**Hierarchy で右クリックして、**Effects > Particle System** と選択、新規にパーティクルシステムを作成します。名前を「FX_SmokeBurst」に変更して、シーン内の位置 (position) を X=0, Y=0.5, Z=0 に設定し、丸太の真上に来るようにします。

[Image: image]

ファイヤーピットからデフォルトの白いドットが円錐状に放出されるのが再び確認できます。

**2.**FX_SmokeBurst の Particle System コンポーネントで、メインモジュールを展開し、**Looping**プロパティを非選択状態にします。

[Image: image]

パーティクルの再生はすぐに停止します。Scene ビューの Particle Effect ウィンドウからもう一度再生してみると、5 秒間パーティクルを生成して停止していることがわかります。これは、**Duration** プロパティが 5 に設定されているためです。 すでにバーストパーティクルらしくなっていますね！

パーティクルが突然バーストしたように見せるには、技術的には、**Duration**プロパティを非常に低い値（0.05 秒など）に下げ、**Rate over Time** プロパティを非常に高い値（1 秒あたり 1000 パーティクルなど）に設定すれば、0.05 秒の間に 50 パーティクル（1000 * 0.05 = 50）発生させることができます。

[Image: image]

ただし、これでは瞬時に大量のパーティクルを生成させることができないので、理想的ではありません。幸いなことに、まさに私たちが望むことを実現するために、**Bursts**というオプションが用意されています。

**3.**Emission モジュールで **Rate Over Time**プロパティを 0 に設定すると、Particle System が時間経過とともにパーティクルを生成しなくなります。

**4.**Emission モジュールの Bursts セクションで、プラス (**+**) ボタンを選択し、新しいバーストパーティクルを追加します。

[Image: image]

新しいバーストのデフォルト設定を調べると、実はこの目的に対してはかなりうまく機能するはずです。0 秒（**Time**）では、バーストは 100% の確率（**Probability**）で 30 個のパーティクル（**Count**）を1 回（**Cycles**）発生させます。バーストサイクルは 1 回だけなので、**Interval** の値は関係ありません。

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

スモークエフェクトのバーストは、すでにかなりいい感じです！

ステップを完了としてマーク

## 4. 煙のようにパーティクルを動かす

Q&A (0)

スモークパーティクルの移動速度が速すぎます。ファイヤーピットの中にとどまるように、速度を落としてあげましょう。

**1.**メインモジュールで、**Start Speed** プロパティを 0.3 秒程度に減少させます。これでパーティクルは非常にゆっくりと上方に移動するはずです。

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

次に、パーティクルの生存時間が長すぎて、一吹き分の量としては不自然な感じです。生存期間を短くしましょう。

**2.**メインモジュールで、バーストを持続させたい時間に応じて、**Start Lifetime** を 1.0 秒前後の値に下げます。

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

また、パーティクルが放出される範囲にも非常に明確な問題があり、ファイヤーピットの底面の外側から発生しているように見えます。エミッターの形状を変えてみましょう。

**3.** **Shape** モジュールで、**Shape** プロパティを Cone から**Sphere**に変更し、**Radius** をバーストで消費させたい領域の大きさに応じて、0.5 程度の値に変更します。

[Image: image]

パーティクルは、すべてファイヤーピットの中心から放出されているように見えるはずです。

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

各パーティクルの動きはだいたい合っているように見えますが、すべてのパーティクルが全く同じ速度で動き、全く同じタイミングで消えるのは不自然に見えます。このシステムにランダム性を導入して、より面白く、リアルにする必要があります。

ステップを完了としてマーク

## 5. パーティクルへのランダム性の付与

Q&A (0)

モジュール内の多くのプロパティには、選択可能な小さなドロップダウン矢印があることにお気づきでしょうか。これらのドロップダウンには、値を設定するための追加オプションがあり、ランダム化する機能などがあります。

[Image: image]

パーティクルがすべて同時に消えるのを防ぐために、パーティクルの Start Lifetime をランダムにすることができます。

**1.** **Start Lifetime**プロパティのドロップダウン矢印から、**Random Between Two Constants**を選択します。

[Image: image]

このプロパティには、1 つの定数値ではなく、最小値と最大値を入力するための 2 つのフィールドがあることにお気づきでしょう。

**2.**元の定数を囲むように、**Start Lifetime**の最小値と最大値を入力します。例えば、Start Lifetime の値が 1 の場合、0.5 と 1.5、あるいは 0.25 と 3.0 のようにさらに広い範囲を入力し、パーティクルにどの程度のバリエーションが必要かに応じて設定します。

システム内の各パーティクルは、この 2 つの数値の間のランダムな値を割り当てられ、微妙に異なるタイミングで消滅します：

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

より自然なランダム性をシミュレーションするために、このプロセスを **Start Speed**など他の値に対して繰り返すことができます。

**3.** **Start Speed** のドロップダウンリストから、**Random Between Two Constants**を選択し、適切な最小値と最大値を入力します。

パーティクルの速度がわずかに変化しているはずです。

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

ランダム性は、パーティクルシステムに多くの視覚的な面白さを加えます。次は、個々のパーティクルを時間の経過とともに変化させることで、さらに視覚的な面白さを加えます。

ステップを完了としてマーク

## 6. Gradient Editor で生存期間中の色を編集する

Q&A (0)

パーティクルの外観を生存期間中に変更するために、いくつかの新しいモジュールを有効にする必要があります。

まず、パーティクルが突然現れたり消えたりするのは、ちょっと変ですよね。その代わり、フェードイン、フェードアウトさせるようにしましょう。

**1.** **Color over Lifetime** モジュールを有効にするチェックボックスを選択し、モジュールを選択すると展開されます。

[Image: image]

**2.**  Color over Lifetime モジュール内で、白い長方形のカラーボックスを選択し、**Gradient Editor**ウィンドウを表示させます。

[Image: image]

この水平バーは、パーティクルがその生存期間中にどのような色と透明度を持つかを、バーの左側から始まって右側で終わるように表現しています。そのため、デフォルトでは、パーティクルはその生存期間中、白色で不透明になります。この Gradient Editor を使用すると、以下のサンプル例のように、青とオレンジにフェードイン/アウトするパーティクルの色と不透明度の状態を無制限に遷移させることができます。

[Image: image]

水平バーの上の一連のマーカーが時間経過による透明度を、カラーバーの下の一連のマーカーが色を指示し、透明度と色を独立して制御することができます。

とりあえず、パーティクルの開始時にフェードインし、終了時にフェードアウトするようにしたいだけです。

**3.** パーティクルをフェードインさせるには、左上のマーカーを選択し、**Alpha** 値（不透明度）を 0 まで一気にドラッグします。

[Image: image]

マーカーが黒くなり、色が完全に透明になったことを示します。**Alpha** 値のスライダーは、透明度マーカーを 1 つ選択した後にのみ表示されることに注意してください。

プレビューすると、パーティクルが透明から不透明になるまでの時間がゆっくりと変化するのがわかります。私たちが望むのは、最初に素早くフェードインし、最後にゆっくりとフェードアウトすることです。そのためには、黒から白へ、そして白から黒へとマーカーを移動させる必要があります。

[Image: image]

**4.** Gradient Editor を使って、パーティクルをフェードイン/アウトさせることができます。新しい透明度のマーカーを作成するには、Color バーの上の領域で何もない場所を選択し、**Alpha** 値を調整するだけです。マーカーを削除するには、マーカーを上下に動かします。

うまくいくと、パーティクルが素早くフェードインし、徐々にフェードアウトしていくはずです。

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

パーティクルシステムは、ほぼ完璧です。あとは、デフォルトのパーティクルテクスチャを置き換えるだけです。

ステップを完了としてマーク

## 7. Renderer と Texture Sheet Animation の編集

Q&A (0)

デフォルトのパーティクルテクスチャを別の単一のテクスチャに置き換えるのではなく、**テクスチャシート** (**Texture Sheet**)****と呼ばれるものを使用することにします。

#### テクスチャシートとは？

[Image: image]

テクスチャシートには、複数のサブ画像が含まれており、個々の画像とは異なり、循環させてよりダイナミックなアニメーションを作成することができます。

このように、テクスチャシートを使って、個々のパーティクルを生存期間にわたってアニメーションさせることができます：

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

ただし、テクスチャシートを使えば、パーティクルごとに使用するテクスチャをランダム化できるので、パーティクルシステムに多様性を持たせることができます。

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

この 2 つ目のユースケースを、スモークバーストを使用して実装します。

#### テクスチャシートからテクスチャをランダム化する

まず、デフォルトのパーティクルマテリアルを、これらのテクスチャシートのいずれかを含むものに変更する必要があります。Renderer モジュールは、個々のパーティクルの外観を制御します。

**1.** **Renderer** コンポーネントを展開し、**Material**プロパティで、オブジェクトピッカーを使用して、テクスチャシートのマテリアル（SmokePuffMaterial という名前）を選択します。

[Image: image]

Select Material ウィンドウの下部にある小さなプレビューパネルで、マテリアルが 4 つの小さな画像の連続であることが分かります。

Scene ビューで再生しているエフェクトを拡大すると、パーティクル 1 つ 1 つに対して、この 4 つのサブ画像がすべて表示されているのがわかりますね。

[Image: image]

この問題を解決するには、**Texture Sheet Animation**モジュールを有効にする必要があります。このモジュールにより、テクスチャシートの個々の画像間をスライスしてアニメーションさせることができます。

**2.**Texture Sheet Animation モジュールを有効にし、それを選択して展開します。

**Tiles**プロパティが正しく設定されていないため、まだ何も起こりません。このプロパティは、テクスチャシートの行と列の数を定義します。

**3.** Texture Sheet Animation モジュールで、**Tiles** プロパティに X=2 と Y=2 を設定します。これは、テクスチャシートが 2 行 2 列であるためです。

各パーティクルは、その生存期間中、4 つのサブ画像すべてを循環しているように見えるはずです。

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

デフォルトでは、**Start Frame** が 0、**Cycles** が 1 に設定されていることがわかります。つまり、各パーティクルは、テクスチャシートの 4 フレームすべて（フレーム 0 から始まる）を、その生存期間中に、ちょうど 1 回ずつ循環することになります。

これはある種のユースケースには理想的ですが、スモークバーストには少し奇妙に見えます。代わりに、開始フレームをランダムにして、パーティクルの生存期間にわたって、その 1 つのフレームを使用するようにしましょう。

**4.**  Start Frame を**Random Between Two Constants**に変更し、 Start Frame と End Frame をそれぞれ 0 と 3 に設定します。これにより、0、1、2、3 の番号の開始フレームがランダムに選択されます。

**5.  Cycles**を 0 に設定すると、自動的に 0.0001 に変更されますが、結果は同じです。

[Image: image]

これでランダム化されたフレームは、アニメーションの間、一定に保たれるようになりました。

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

## 8. カーブを用いて生存期間中のサイズを変化させる

Q&A (0)

このスモークエフェクトの煙のパフを実現する最後の仕上げが、**Size Over Lifetime** の変更です。パーティクルが現れるとサイズが大きくなり、消えると小さくなります。こうすることで、より爆発的でダイナミックな印象を与えることができます。

**1.**Size Over Lifetime モジュールを有効にしてから、それを選択して展開します。**Size**プロパティのドロップダウンで、**Curve**が選択されていることがわかります。

[Image: image]

**2.** **Size**プロパティでカーブのプレビューボックスを選択します。選択すると、その中の線が赤くなり、選択されていることがわかります。

[Image: image]

プレビューが小さいので、まだカーブであることがよくわからないし、編集もできないでしょう。

**3.** **Particle System Curve** ウィンドウがまだ表示されていない場合は、Inspector ウィンドウの下から上に移動してください。

[Image: image]

これでグラフがはっきりと見えるはずです。デフォルトでは、斜めの赤い線がグラフを貫通しています。

[Image: image]

このグラフでは、Time (0-1) が下の X 軸に、Size (0-1) が左の Y 軸に沿うように描かれています。

[Image: image]

このデフォルトのカーブは、時間経過とともにパーティクルが直線的に増加することを示しています。つまり、Time 0（生まれた時）にサイズ 0 から始まり、Time 1（死んだ時）にサイズ 1 で終わります。

パーティクルのプレビュー時に確認することができます。

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

## 9. カーブのカスタマイズ

Q&A (0)

Particle System Curves エディターのレイアウトを理解したところで、カーブを手動で編集して、パーティクルが生存期間中に成長し、その後収縮するようにしましょう。

**1.**Particle System Curves エディターの下部にあるプリセットカーブをいくつか選択して試してみましょう。それぞれのカーブがパーティクルに与える影響に注目してください。

[Image: image]

U 字型のカーブを逆さにしたような、典型的なベルカーブのようなカーブで、最初は小さく、大きくなって、また小さくなるようなカーブです。そのためのプリセットがないので、カスタムカーブを作る必要があります。

**2.**左から 6 番目の、円の左上隅に少し似ているカーブを選択して、始点として使用します。

[Image: image]

**3.**右上の小さな赤い円（**キーフレーム, Keyframe**）を選択して下方向へドラッグし、最後に曲線が戻ってくるようにします。

[Image: image][Image: image]

ここで効果を試してみると、パーティクルが小さすぎることに気がつくと思います。これは、この新しいカーブでサイズが到達する最高値が、0.3 秒程度しかないためです（左の Y 軸に沿って見ることができる）。カーブはもっと高くする必要があります。

**4.**左下のキーフレームを選択します。小さなアームがそこから突き出ているのがわかると思いますが、このアームは動かすことができます。

[Image: image]

**5.**この先端にあるハンドルを選択し、上方向に動かしてカーブの高さを上げます。

[Image: image]

今度は 0 から始まり、1.0 付近まで急速に上昇し、再び 0 に向かってゆっくりと緩和していくカーブです。

[Image: image]

スモークエフェクトのパフをテストをして、その様子をご覧ください。

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

この調整を行った後、**Start Lifetime, Start Speed, Color over Lifetime** など、バーストエフェクトを正しく表示するために他の値を微調整することができます。他のモジュールについて知りたい場合は、[Particle Systems のドキュメント](https://docs.unity3d.com/Manual/ParticleSystemModules.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954146083)にすべてのモジュールの情報があります。

**6.**パーティクルシステムが完成したら、Hierarchy から Project ウィンドウの Prefabs フォルダーにドラッグします。これで、Hierarchy と Project ウィンドウに新しい青いプレハブのアイコンが表示されます。

次に、ユーザーがキーボードのボタンを押すことでトリガーできるようにしましょう。

ステップを完了としてマーク

## 10. アニメーションのトリガー

Q&A (0)

このシーンのエフェクトを実現するために、このスモークバーストをキー操作で切り替えられるようにし、さらに着火と消火もできるようにします。

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

まず、シーンの開始時の状態を正しく設定し、ファイヤーエフェクトを再生し、スモークバーストを再生しない状態にします。

**1.**VFX_ Fire と Point Light ゲームオブジェクトを再びアクティブにします。

ファイアーエフェクトのメインモジュールで、**Play on Awake** プロパティを有効にしてください。これは、シーンに追加されたときに、自動的に再生されることを意味します。

**2.**スモークバーストのメインモジュールで、**Play On Awake** プロパティを無効化します。これにより、パーティクルはシーン内にひっそりと置かれ、目に見えなくなり、トリガーされるのを待つことができるようになります。

これで、シーンを再生すると、スモークのバーストなしで炎が出るはずです。

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

次に、キー操作で炎の ON/OFF を切り替えられるようにする必要があります。これを実現するための簡単なスクリプトを用意しましたので、興味のある方はぜひご覧になってください。

**3.**Project ウィンドウの**CreativeCore_VFX > Scripts**と選択して、**ToggleFireParticle**スクリプトを Hierarchy 内の VFX_Fire オブジェクトにドラッグしてコンポーネントとして割り当てます。ポイントライトと消火パーティクルに参照を割り当てる必要があります。ポイントライトと作成した FX_SmokeBurst をそれぞれ使用します。

デフォルトでは、スペースバーを押すと、炎のパーティクルの再生と停止が交互に行われるようになりました。

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

**4.** TorgleFireParticle コンポーネントでは、ユーザー入力に使用する別のキーを選択することができます。あるパーティクルを着火に、別のパーティクルを消火に割り当てることができます。また、炎にアタッチされたポイントライトを割り当てると、同様に炎と一緒に点灯したり消灯したりすることができます。

[Image: image]

スモークバーストのパーティクルは、着火 (ignite) パーティクル、消火 (extinguish) パーティクル、またはその両方に割り当てることができます。

あとは、スペースバーを押すと、煙が出たり、火がついたり消えたりするようにトリガーをかけるとよいでしょう。

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

また、天候エフェクトも有効にすることで、シーンを存分に楽しむことができますよ！

ステップを完了としてマーク

## 11. 着火と消火

Q&A (0)

着火または消火に使用するスモークバーストを 1 つ作成しました。2 つのアクションを区別するために、パーティクルの新しいバリエーションを作成してみてください。

着火するエフェクトでは、もっと熱い赤い火の玉のように、消火するエフェクトでは、もっと水しぶきが煙になるように、などなど。それはあなた次第です！

ステップを完了としてマーク

## 12. 次のステップ

Q&A (0)

これで、パーティクルシステムを使って一からエフェクトを作ることに、かなり慣れたのではないでしょうか。次は、全く別のパーティクル、VFX Graph の作成方法について見ていきましょう。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
