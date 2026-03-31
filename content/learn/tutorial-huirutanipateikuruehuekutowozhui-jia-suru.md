[Image: image]

# フィルターにパーティクルエフェクトを追加する

Tutorial

Beginner

+10XP

30 mins

0

Unity Technologies

[Image: フィルターにパーティクルエフェクトを追加する]Summary

パーティクルエフェクトは AR アプリケーションに動きを与えるもので、よりダイナミックに、人目を引くものへと仕上げてくれます。フェイスフィルターもパーティクルエフェクトによってもっと楽しくできる可能性が広がります。

このチュートリアルでは、以下のことを行います。

- パーティクルシステムをフェイスフィルターにアタッチする。
- パーティクルシステムをカスタマイズして目的のエフェクトを生成する。
- 更新したアプリケーションをビルドしてテストする。

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. 概要

Q&A (0)

Unity で使用できる特殊エフェクトの種類の 1 つがパーティクルエフェクトです。**パーティクル**とはシミュレーションが行われたモーションエフェクトのことで、ちょっとした水しぶきから燃えさかる大爆発まで多岐にわたります。パーティクルシステムにはそのようなエフェクトをカスタマイズするための数多くの設定があります。

このチュートリアルでは、以下のことを行います。

- パーティクルシステムをフェイスフィルターにアタッチする。
- パーティクルシステムをカスタマイズして目的のエフェクトを生成する。
- 更新したアプリケーションをビルドしてテストする。

**ノート**：このチュートリアルではパーティクルシステムの基本の一部を紹介していますが、すべてを網羅しているわけではありません。Unity のパーティクルシステムについて理解を深めるには、[**Creative Core：VFX**](https://learn.unity.com/project/creative-core-vfx) をご覧ください。

ステップを完了としてマーク

## 2. パーティクルシステムに触れてみる

Q&A (0)

アプリケーションに変更を加えることを開始する前に少し時間を取って、以下のステップに従ってパーティクルシステムに触れてみてください。

**1.**  Project ウィンドウで、「**Assets**」>「**_BasicFaceFilter**」>「**Particle Effects**」に移動し、いずれかのパーティクルシステムをダブルクリックしてシーンビューで開きます。

**2.**  「Hierarchy」で、**[名前]_ParticleSystem** ゲームオブジェクトを選択します。選択したパーティクルシステムの再生がシーンビューで始まります。

**3.**  「Inspector」で、まだ開かれていない場合は Particle System コンポーネントを展開しましょう。

パーティクルシステムのプロパティは[モジュールと呼ばれるより小さなサブセクション](https://docs.unity3d.com/ja/current/Manual/ParticleSystemModules.html)にまとまっており、パーティクルシステムの動作と外観を制御します。

**4.**いくつかのモジュールを選択し、展開して詳細を確認したり、モジュール名の横にあるチェックボックスを使用して有効と無効を切り替えたりしてみましょう。パーティクルシステムのモジュールをいろいろと試し、不要な変更は取り消してください。

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

## 3. フェイストラッカーにパーティクルをアタッチする

Q&A (0)

3D アクセサリーを追加したときと同じように、ここではパーティクルシステムを **AR Default Face** プレハブに追加します。

プレハブで作業している間のガイドとして Face Reference Mesh を有効にし、パーティクルシステムの「Transform」（「Position」、「Rotation」、「Scale」）を設定したら無効にします。

以下の手順を実行して、新しいパーティクルシステムを作成します。

**1.**  Project ウィンドウで、「**Assets**」>「**_BasicFaceFilter**」>「**Prefabs**」に移動し、**AR Default Face** プレハブを開きます。

**2.**  「Hierarchy」で、前のチュートリアルで追加した **Face_Reference_Mesh** ゲームオブジェクトを選択します。「Hierarchy」に表示されていない場合は、Project ウィンドウから「Hierarchy」にドラッグします。

**3.**  「Inspector」で、**Face_Reference_Mesh** がアクティブとマークされていることを確認します。必要な場合は、前のチュートリアルで追加した 3D アクセサリーを無効にします。

[Image: image]

**4.**  「Hierarchy」で、「**Create Empty**」を右クリックして選択し、新しいゲームオブジェクトをパーティクルシステムのアンカーとして作成します。

このゲームオブジェクトの「Transform」の「Position」が、そのパーティクルのスポーンポイント（パーティクルが最初に出現する位置）として機能します。

**5.**  新しいゲームオブジェクトを右クリックし、「**Rename**」を選択します。ゲームオブジェクトの名前を「Particle Effects」にします。

[Image: image]

**6.**  Transform ツールを使用して、**Particle Effects** ゲームオブジェクトを目的の位置に移動します。一度立ち返ってみたくなったときは、[Transform ツールとそのショートカットなどを見返してみてください](https://learn.unity.com/tutorial/explore-the-unity-editor-1#6273f00fedbc2a7f158cc1f2)。

**7.**  Project ウィンドウで、**Particle Effects** フォルダーに移動します。パーティクルエフェクトの 1 つを新しいゲームオブジェクトの上にドラッグし、そのエフェクトの子ゲームオブジェクトを作成します。

**8.**個々のパーティクルエフェクトをプレビューするには、そのエフェクトを「Hierarchy」で選択します。Ctrl（macOS：Cmd）キーを押したまま選択することで、複数のエフェクトを同時に選択できます。必要に応じて、エフェクトの位置や回転を調整します。

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

## 4. パーティクルシステムをカスタマイズする

Q&A (0)

パーティクルシステムの優れた特徴の 1 つは、カスタマイズの余地が大きいことです。すべてのパーティクルシステムは他にはない作品になる可能性を秘めています。

以下の手順に従い、創造性をいかんなく発揮してプロジェクトで提供されているパーティクルシステムの 1 つに変更を加えてみましょう。

**1.**  **AR Default Face** プレハブが開かれていることを確認します。開かれていない場合は、Project ウィンドウの **Prefabs** フォルダーに移動して再度開きます。

**2.**  「Hierarchy」で、**[名前]_VFX** ゲームオブジェクトを展開し、パーティクルシステムのゲームオブジェクトを選択します。（例えば、**Rain_VFX** ゲームオブジェクトには **Rain_ParticleSystem** と **Clouds_ParticleSystem** という 2 つの子オブジェクトがあります）。

**3.**  「Inspector」で、Particle System コンポーネントを見つけて展開します。

**4.**  「**Start Color**」プロパティフィールドを選択し、色の選択ダイアログウィンドウを開きます。

[Image: image]

**5.**  色を変更し、パーティクルシステムのティントがどのように変わるかを確認します。

**6.**  「**Simulation Space**」が「**World**」に設定されていることを確認します。

[Image: image]

パーティクルは、それが作成されたシミュレーション空間の種類によって、さまざまな形で動く可能性があります。「World」シミュレーション空間を指定すると、フェイストラッカーの動きに合わせてパーティクルの位置が変わるようになります。

**7.**  その他の設定を試し、パーティクルシステムの動作がどのように変わるかを確認してください。例えば、「Emission」モジュールの「**Rate over Time**」プロパティに調整を加えて、スポーンするパーティクルの数を変えることもできます。ただし、パーティクルの数が多すぎると、パフォーマンスが大幅に低下するおそれがあるため、注意するようにしてください。

[Image: image]

**8.**  パーティクルシステムのカスタマイズが完了したら、Face Reference Mesh が無効になっていることを確認します。デバイスでアプリケーションをテストする際にはおそらく表示されている必要がありません。次に、「Hierarchy」で **AR Default Face** プレハブの名前の横にある左矢印を選択し、プレハブ編集モードを終了します。

[Image: image]ステップを完了としてマーク

## 5. ビルドしてテストする

Q&A (0)

ここでテストのためにアプリケーションをビルドすると、顔が検出されたときに追加したパーティクルシステムが表示されるはずです。

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

**4.** デバイスでアプリケーションが自動的に開きます。顔が検出されると、アプリケーションにここまでで追加したすべてが表示され、パーティクルエフェクトが再生されるはずです。

**ノート**：お使いのデバイスへのビルド方法についての再確認として、[Android](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4b8aedbc2a4b38f955ba) または [iOS](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4108edbc2a49c08f0641) 向けのプロセスを見直しておくのも良いでしょう。

ステップを完了としてマーク

## 6. 他にもトライしてほしいこと

Q&A (0)

さらなるスキルの向上や、新しいコンセプトの模索、現プロジェクトについての改善などを考えているのであれば、以下の任意のアクティビティもぜひ見るようにしてみてください。それぞれ「初級」、「中級」、「上級」のタグが付いているので、難易度を選択できます。

これらのアクティビティは完全に任意であるため、興味がなければこのステップをスキップしてもかまいません。ただ、今回の学習体験を最大限に生かすためにも、このアクティビティの内の 1 つは試してみることをお勧めいたします。それでは頑張ってください！

#### 初級：既存のパーティクルシステムを調整する

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

Unity のビルトインのパーティクルシステムには、カスタマイズするための設定が数多く存在します。これらの設定を組み合わせることで、パーティクルシステムをシンプルにすることも、非常に高度なエフェクトを作成することもできます。

所定のプロジェクトファイル内にあるパーティクルエフェクトの 1 つを開き、「Inspector」で Particle System コンポーネントの以下のモジュールのプロパティに変更を加えてみてください。

- **「Emission」：**このモジュールのプロパティは、Particle System の放出の速度とタイミングに影響します。
- **「Shape」：**このモジュールは、パーティクルの放出元のボリュームまたはサーフェスを定義します
- **「Color over Lifetime」：**このモジュールは、パーティクルの色と透明度がその生存期間中に時間と共にどのように変化するかを指定します。

パーティクルシステムの詳細については、[**Creative Core：VFX**](https://learn.unity.com/project/creative-core-vfx) で確認できます。

#### 中級：パーティクルシステムをインポートして編集する

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

Unity Asset Store では多種多様なビジュアルエフェクトとパーティクルシステムを取り揃えています。Asset Store から無料の VFX アセットを探し、プロジェクトにインポートします。お勧めの選択肢の 1 つは **Unity Particle Pack** ですが、正しく表示されるには同パック内の一部のマテリアルを編集する必要がある場合があります。このパックには多種多様なパーティクルシステムがあり、より高度なパーティクルシステムがどのように作成されているかを確認することができます。

そのパーティクルシステムの一部のプロパティに変更を加えて新しいエフェクトを作成し、それらをフェイスフィルターに追加してみましょう！

#### 上級：新しいパーティクルシステムを作成する

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

自分だけのパーティクルシステムを作るとなると、それは大変楽しくなるものです。シーンに新しいパーティクルシステムを追加し、さまざまなモジュールとプロパティをカスタマイズして、新しいエフェクトを作成します。

試してみるのにふさわしいパーティクルシステムのアイデアを、以下にいくつか紹介いたします。

- 顔の周りを星で囲う
- スーパーヒーローのように目からレーザーを出す
- ハートを周りに浮かべる

パーティクルシステムをカスタマイズするために使用できるすべてのオプションの詳細については、[Unity のマニュアル](https://docs.unity3d.com/ja/current/Manual/class-ParticleSystem.html)をご覧ください。

ステップを完了としてマーク

## 7. 次のステップ

Q&A (0)

このチュートリアルでは、フェイスフィルターアプリケーションにパーティクルシステムを追加し、そのフィルターを自分でカスタマイズしました。次は、前に追加したアクセサリーにアニメーションを追加します。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
