[Image: image]

# フィルターにアニメーションを追加する

Tutorial

Beginner

+10XP

30 mins

0

Unity Technologies

[Image: フィルターにアニメーションを追加する]Summary

フェイスフィルターに 3D モデルを追加しました。ここでは、アニメーションでこのモデルへ命を吹き込むことが可能になります。

このチュートリアルでは、以下のことを行います。

- Unity エディター上のアニメーションを識別し、色々探してみる。
- 選択したアクセサリにアニメーションを追加する。
- 更新したアプリケーションをビルドしてテストする。

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. 概要

Q&A (0)

アニメーションは、ゲームやソフトウェアでのエクスペリエンスに命を与えてくれます。このプロジェクトでは、使用可能なすべてのアクセサリオプション用のアニメーションを作成しました。

このチュートリアルでは、以下のことを行います。

- Unity エディター上のアニメーションを識別し、色々探してみる。
- 選択したアクセサリにアニメーションを追加する。
- アニメーション化されたアクセサリをアプリケーションでビルドし、テストする。

**重要**：このチュートリアルでは、既存のアニメーションを追加します。オブジェクトをアニメーション化する方法については説明されません。Unity でのアニメーション化の詳細については、「[**Creative Core: Animation**](https://learn.unity.com/project/creative-core-animation)」を試してください。

ステップを完了としてマーク

## 2. アニメーションを探ってみる

Q&A (0)

Unity のアニメーションについて知っておく必要がある重要なことが 2 つあります。それはアニメーションクリップと Animation Controller です。

**アニメーションクリップ**は、[アニメーション化されたキャラクターまたは単純なアニメーションに使用できるアニメーションデータ](https://docs.unity3d.com/ja/current/Manual/Glossary.html#AnimationClip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774956437908)です。これらは、キャラクターの歩く、走る、または静止している（何もしていない）アニメーションの特定のインスタンスなど、モーションの基本単位です。

**アニメーターコントローラー**[アニメーションクリップが再生される方法を制御](https://docs.unity3d.com/ja/current/Manual/class-AnimatorController.html%E3%81%AF%E3%80%81?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774956437908)します。アニメーターコントローラーを使用して、キャラクターまたはオブジェクトのアニメーションクリップや、関連するアニメーション遷移をセットで変化をつけたり、望ましい状態で保存しておけます。Animation Controller は、単純にすることも、非常に複雑にすることもできます。Unity マニュアルで、[アニメーターコントローラー](https://docs.unity3d.com/ja/current/Manual/class-AnimatorController.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774956437908)の詳細を参照できます。

Project ウィンドウで、「**Assets**」>「**_BasicFaceFilter**」>「**Animations**」に移動し、フォルダーの内容を調べます。

[Image: image]

三角形のアイコンが表示されているアセットはアニメーションクリップです。2 つのつながれたボックスのアイコンがあるアセットは、関連するアニメーターコントローラーです。

ステップを完了としてマーク

## 3. AR Default Face にアニメーションをアタッチする

Q&A (0)

アプリケーションに対して選択したアクセサリ（1 つまたは複数）に関連するアニメーションを **AR Default Face** プレハブにアタッチするには：

**1.**  Project ウィンドウで、「**Assets**」>「**_BasicFaceFilter**」>「**Prefabs**」に移動し、**AR Default Face** プレハブを開きます。

**2.**  「Hierarchy」で、アニメーション化するアクセサリを特定し、ゲームオブジェクト名の右にある矢印を選択してプレハブを開きます。

[Image: image]

**3.**  「Inspector」で、アクセサリの Animator コンポーネントを探します。「**Controller**」プロパティにはアニメーターコントローラーがまだ割り当てられていません。

**4.**  「Controller」プロパティのオブジェクトピッカーを使用して、適切なアニメーターコントローラーを選択します。例えば、Props_HiHat ゲームオブジェクトには対応する Props_HiHat アニメーターコントローラーがあります。

[Image: image]

**5.**  「Hierarchy」でプレハブ名の横にある左矢印を選択し、アクセサリのプレハブ編集モードを終了します。繰り返して **AR Default Face** のプレハブ編集モードを終了します。

ステップを完了としてマーク

## 4. ビルドしてテストする

Q&A (0)

アプリケーションをビルドしてテストする場合、顔が検出されると、追加したアクセサリ小道具がそのアニメーションを再生するはずです。

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

以下の手順を実行して、アプリケーションをビルドしてテストします。

**1.**  シーンを保存します。

**2.**  「Build Settings」ウィンドウを開きます（「**File**」>「**Build Settings**」）。

**3.**  デバイスが接続されていることを確認してから、「**Build and Run**」を選択してデバイスでアプリケーションをビルドします。

**4.** デバイスでアプリケーションが自動的に開きます。顔が検出されると、アプリケーションにここまでで追加したすべてが表示され、アクセサリのアニメーションが再生されるはずです。

**ノート**：お使いのデバイスへのビルド方法についての再確認として、[Android](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4b8aedbc2a4b38f955ba) または [iOS](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4108edbc2a49c08f0641)向けのプロセスを見直しておくのも良いでしょう。

ステップを完了としてマーク

## 5. 他にもトライしてほしいこと

Q&A (0)

さらなるスキルの向上や、新しいコンセプトの模索、現プロジェクトについての改善などを考えているのであれば、以下の任意のアクティビティもぜひ見るようにしてみてください。それぞれ「初級」、「中級」、「上級」のタグが付いているので、難易度を選択できます。

これらのアクティビティは完全に任意であるため、興味がなければこのステップをスキップしてもかまいません。ただ、今回の学習体験を最大限に生かすためにも、このアクティビティの内の 1 つは試してみることをお勧めいたします。それでは頑張ってください！

#### 初級：既存のアニメーションのキーフレームを編集する

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

プロジェクトでアニメーションを開き、キーフレームを調整するか、独自に追加します。Unity マニュアルには、[キーフレームに関する情報](https://docs.unity3d.com/ja/current/Manual/animeditor-AnimatingAGameObject.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774956437908)があり、チェックすべき優れたリソースとなっています。

#### 中級：アニメーションに追加のプロパティを追加する

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

オブジェクトの位置のアニメーション化に加えて、追加のプロパティをアニメーション化することもできます。この演習へ挑戦してみましょう。

- 「Animation」ウィンドウが開いていることを確認します。
- 含まれている小道具の 1 つを開き、「Animation」ウィンドウで「**Add Property**」を選択します。
- Mesh Renderer.Material.Base Color プロパティを探し、キーフレームアニメーションを使用して、アニメーションを囲むオブジェクトの色を変更します。
- 「**Record**」を選択して、変更をアニメーションに追加します。

#### 上級：新しくアニメーションを作成する

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

Asset Store からインポートしてきた小道具や、モデル中で使われている部分をアニメーションにして、「こういう風に動かしてみたい」というアイデアは、意外に色々持っていたりするものです。ここで、そういったアイデアを実際のアニメーションに変えてみましょう。1 つ以上の小道具を選択し、フィルターでそれらの小道具に命を吹き込む独自のアニメーションを作成します。

含まれている小道具をアニメーション化して開始する方法はいくつかあります（アイデアが必要な場合）。

- Props_CrazyEyes を寄り目にする。
- Props_CatNose をぴくぴく動かす。
- 何かを聞いているように Props_GoblinEars を回転させる。

Unity での独自のアニメーションを作成する方法については、「[**Creative Core: Animation**](https://learn.unity.com/project/creative-core-animation)」を参照してください。

ステップを完了としてマーク

## 6. 次のステップ

Q&A (0)

お疲れ様でした。アクセサリがアニメーション化されたフェイスフィルターができました。次のチュートリアルでは、アプリケーションにポストプロセスエフェクトを追加して、ビジュアルに磨きをかけます。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
