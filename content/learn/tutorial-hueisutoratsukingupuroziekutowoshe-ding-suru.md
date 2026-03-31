[Image: image]

# フェイストラッキングプロジェクトを設定する

Tutorial

Beginner

+10XP

30 mins

1

Unity Technologies

[Image: フェイストラッキングプロジェクトを設定する]Summary

AR フェイスフィルターアプリケーションを開発するための最初のステップは、フェイストラッキング用にプロジェクトを設定することです。

このチュートリアルでは、以下のことを行います。

- 提供されているアセットをダウンロードしてインポートする。
- 顔検出とフェイストラッキング用にプロジェクトを設定する。
- アプリケーションのフェイストラッキング機能をビルドしてテストする。

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. 概要

Q&A (0)

この学習体験では、独自の AR フェイスフィルターアプリケーションを作成する方法を学びます。最初に作成するアプリケーションは、ユーザーの顔にマテリアルと 3D モデルを適用するシンプルなフィルターです。

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

このチュートリアルでは、AR フェイスフィルターアプリケーション開発のはじめの第一歩を踏み出すことになります。ユーザーの顔のパーツを検出してトラッキングし、緑色のマテリアルのオーバーレイを使って、トラッキング機能を視覚化するという形でプロジェクトを立ち上げるようにします。

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

## 2. 数名の著名なクリエイターの話を聞いてみる

Q&A (0)

AR 開発の手始めの準備として、他のクリエイターが日々の業務で経験していることを聞いておくことは参考になるかもしれません。以下のビデオでは、幾人かの経験豊富な AR クリエイターがそれぞれの開発プロセスと、XR 分野でプロとして働くことの意義について話をしてくれています。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 日本語

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

ステップを完了としてマーク

## 3. 始める前に

Q&A (0)

「[**AR 入門**](https://learn.unity.com/project/get-started-with-ar)」のチュートリアルをすでに完了している必要があります。それらのチュートリアルでは、以下の設定タスクを実行します。

- Unity バージョン 2021.3.1f1 をインストールする。
- モバイルデバイスとコンピューターが AR 開発向けに設定されていることを確認する。
- AR 向けに設定された新しい Unity プロジェクトをダウンロードして開く。
- 自分の物理環境内に回転するキューブを表示する、シンプルな AR アプリケーションをモバイルデバイスにデプロイする。

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

## 4. プロジェクトのアセットをインポートする

Q&A (0)

では、プロジェクトの設定から始めましょう。

**1.**AR スタータープロジェクトをまだ開いていない場合は、今すぐ開きます。

**2.**  「**File**」>「**New Scene**」を選択して、AR テンプレートから[新しいシーンを作成](https://learn.unity.com/tutorial/configure-your-ar-development-environment?uv=2021.3&courseId=6346b7e5edbc2a7caec0f8fc&projectId=633b041bedbc2a6de5496294#633c1a5fedbc2a1cb018accb)します。

**3.**  「**File**」>「**Save As**」を選択し、このシーンを「**Scenes**」フォルダー内に「Basic_Face_Filter」として保存します。

**4.**  [基本的なフェイスフィルターのアセット](https://connect-prd-cdn.unity.com/20221012/64f70c02-99a3-4261-9ce6-d3324250bed5/Basic_Face_Filter_Assets.zip)をダウンロードし、解凍します。

**5.**  Unity で、メインメニューに移動し、「**Assets**」>「**Import Package**」>「**Custom package**」を選択します。

**6.** 解凍したフォルダーの場所に移動し、**BasicFaceFilterAssets.unitypackage** ファイルを選択し、「**Open**」を選択します。

**7.**  「Import Unity Package」ウィンドウで、すべてのアセットが選択されていることを確認し、「**Import**」を選択します。

**8.**  Unity で、Project ウィンドウに移動し、「**Assets**」>「**_BasicFaceFilter**」に移動します。先に進む前に、少し時間を取って先ほどインポートしたアセットの内容を見てみましょう。

[Image: image]ステップを完了としてマーク

## 5. AR Default Face プレハブを作成する

Q&A (0)

顔の上にデジタルコンテンツをオーバーレイする AR 体験には、フェイストラッキング機能が必要です。**フェイストラッキング**は、カメラが顔を認識したときに、顔がある場所をモバイルデバイスに伝えます。朗報です。実は、これを機能させるためのパッケージ化されたコンピューターコードは、すでに用意されているのです。このコードの一部はすでにインポート済みですが、そのコードを機能させ、トラッキングされた顔をアプリケーションで視覚化するために、シーンを設定する必要があります。

トラッキングされた顔を視覚化するには、**AR Default Face** ゲームオブジェクトを使用します。テストする際に **AR Default Face** が表示されるようにするために、カメラが顔を認識したときにアクティベートされるプレハブを作成します。また、マテリアルが表示されるように、その **AR Default Face** ゲームオブジェクトにマテリアルを適用する必要もあります。特別なマテリアルがプロジェクトの一部として提供されています。

**AR Default Face** プレハブを設定するには、以下の手順に従います。

**1.**  「Hierarchy」内で右クリックし、「**XR**」>「**AR Default Face**」を選択して新しい **AR Default Face** ゲームオブジェクトをシーンに追加します。**AR Default Face** は、カスタマイズして独自のクリエイティブなフェイスフィルターを作成できるゲームオブジェクトです。

[Image: image]

**2.**  次に、スマートフォンのカメラが顔を検出したときに **AR Default Face** が表示されるようにする必要があります。Project ウィンドウで、「**Assets**」>「**_BasicFaceFilter**」>「**Materials**」に移動し、Face Debug MAT マテリアルを見つけます。

**3.**  **Face Debug MAT** マテリアルを Project ウィンドウから「Hierarchy」内の **AR Default Face** ゲームオブジェクトにドラッグして、このマテリアルを設定します。このマテリアルが設定されていることを確認するには、**AR Default Face** ゲームオブジェクトの「Inspector」ウィンドウに移動し、マテリアルの Inspector まで下にスクロールします。ここに「Face Debug MAT (Material)」が表示されているはずです。

[Image: image]

**4.**  Project ウィンドウで、「**Assets**」>「**_BasicFaceFilter**」>「**Prefabs**」に移動します。

**5.**  **AR Default Face** ゲームオブジェクトを「Hierarchy」から Project ウィンドウの「**Prefabs**」フォルダーにドラッグします。このゲームオブジェクトのアイコンと名前が「Hierarchy」内に水色で表示されるはずです。

これで、**AR Default Face** ゲームオブジェクトをプレハブにすることができました。プレハブはテンプレートとして機能して、特殊な方法で設定されたゲームオブジェクトを再利用できるようにします。

ステップを完了としてマーク

## 6. AR Face Manager を設定する

Q&A (0)

次に、顔が検出されたときにどのゲームオブジェクトを顔の上に表示したいかを **AR Session Origin** に伝える必要があります。これを行うには、AR Face Manager という新しいコンポーネントを使用します。

**AR Face Manager** を設定するには、以下の手順に従います。

**1.**  「Hierarchy」で、**Cube** ゲームオブジェクトを削除します（これはテスト目的でのみ含まれています）。

**2.  AR Session** **Origin** ゲームオブジェクトを選択します。

**3.**  「Inspector」で、「**Add Component**」を選択し、AR Face Manager コンポーネントを検索して追加します。このコンポーネントが、[顔を表すゲームオブジェクトの追加、更新、削除を管理](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@1.0/manual/face-tracking.html)します。

[Image: image]

**4.**「Inspector」で、AR Face Manager コンポーネントに移動し、「**Face Prefab**」プロパティを見つけます。

**5.**  作成した **AR Default Face** プレハブを、Project ウィンドウ（「**Assets**」>「**_BasicFaceFilter**」>「**Prefabs**」）から「**Face Prefab**」プロパティにドラッグします。

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

**6.**  「Hierarchy」で、**AR Default Face** ゲームオブジェクトを削除します。アプリケーションが顔を検出すると、AR Foundation は先ほど作成したプレハブから **AR Default Face** ゲームオブジェクトを生成します。

ステップを完了としてマーク

## 7. カメラの向いている方向を更新する

Q&A (0)

回転するキューブを使用して構築したアプリケーションでは、ハンドヘルドデバイスの背面にあるカメラを使用していました。しかし、この新しいアプリケーションではフェイストラッキングを行うので、デバイスの前面にあるカメラを使用するほうが理にかなっています。

前面のカメラを使用するようにアプリケーションを設定するには、以下の手順に従います。

**1.**「Hierarchy」で、**AR Session Origin** ゲームオブジェクトの折りたたみ項目のアイコンを選択して、その子ゲームオブジェクトを展開します。親ゲームオブジェクトと子ゲームオブジェクトは、シーン内のさまざまなゲームオブジェクトを整理する方法の 1 つです。

**2.  AR Camera** ゲームオブジェクトを選択します。

**3.**  「Inspector」で、「AR Camera Manager (Script)」コンポーネントを見つけます。

**4.**「**Facing Direction**」プロパティを「**User**」に設定します。

[Image: image]ステップを完了としてマーク

## 8. ビルドしてテストする

Q&A (0)

では、プロジェクトをテストしてみましょう！下のビデオは、このアプリケーションがデバイス上でどのように機能するべきかを示しています。

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

プロジェクトを現在の状態でテストするには、以下の手順に従ってデバイスにビルドします。

**1.**  シーンを保存します。

**2.**  「Build Settings」ウィンドウを開きます（「**File**」>「**Build Settings**」）。

**3.**「**Add Open Scenes**」を選択して、現在のシーンをビルドに追加します。以前のシーンがあればすべて消去して、新しいビルドに含まれないようにします。

[Image: image]

**4.**  デバイスが接続されていることを確認してから、「**Build and Run**」を選択してデバイスでアプリケーションをビルドします。

**ノート**：お使いのデバイスへのビルド方法についての再確認として、[Android](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4b8aedbc2a4b38f955ba) または[iOS](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4108edbc2a49c08f0641) 向けのプロセスを見直しておくのも良いでしょう。

**5.** デバイスでアプリケーションが自動的に開きます。顔が検出されると、アプリケーションで、顔がシンプルな緑色のフェイスフィルターで覆われるはずです。

**ノート**：iOS 向けに開発していて、アプリケーションが前面ではなく背面のカメラを引き続き使用している場合は、プロジェクト設定でフェイストラッキングが有効になっていない可能性があります。メインメニューから、「**Edit**」>「**Project Settings**」を選択します。左パネルから「**ARKit**」を選択し、「**Face Tracking**」を有効にしてください。

ステップを完了としてマーク

## 9. 他にもトライしてほしいこと

Q&A (0)

さらなるスキルの向上や、新しいコンセプトの模索、現プロジェクトについての改善などを考えているのであれば、以下の任意のアクティビティもぜひ見るようにしてみてください。それぞれ「初級」、「中級」のタグが付いているので、難易度を選択できます。

これらのアクティビティは完全に任意であるため、興味がなければこのステップをスキップしてもかまいません。ただ、今回の学習体験を最大限に生かすためにも、このアクティビティの内の 1 つは試してみることをお勧めいたします。それでは頑張ってください！

#### 初級：顔のデバッグマテリアルの色を変更する

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

デバッグマテリアルはきれいな緑色でシェーディングされていますが、このマテリアルを別の色にしてみましょう。色を変更する方法の 1 つは、デバッグマテリアルを開き、カラーピッカーを使用して色を選択することです。顔のデバッグマテリアルの色を変更するもう 1 つの方法は、新しいマテリアルを作成してそれを顔に適用することです。

マテリアルの操作方法の詳細については、**Creative Core パスウェイ**の「[**プロジェクトのマテリアルを管理する**](https://learn.unity.com/tutorial/manage-materials-in-a-project?pathwayId=61a65568edbc2a00206076dd&missionId=619f9b6cedbc2a39aabd7b1e#619bbbfbedbc2a057ec96377)」セクションの内容を参照してください。

#### 中級：アプリケーションの画面録画を作成して共有する

自分の行ったことを他の人と共有することは、成果と学びを披露するための素晴らしい方法です。AR の旅での進歩を共有する最も簡単な方法の 1 つは、アプリケーションの実行中に画面を録画することです。

録画のプロセスは、[iOS](https://support.apple.com/ja-jp/guide/iphone/iphc872c0115/ios) と [Android](https://support.google.com/android/answer/9075928?hl=ja) とで異なります。録画を作成したら、友人、家族、世界に共有しましょう！

ステップを完了としてマーク

## 10. 次のステップ

Q&A (0)

このチュートリアルでは、顔の上にデフォルトの AR フェイスモデルをオーバーレイする、基本的なフェイストラッキングアプリケーションを作成しました。よく頑張りましたね！次のチュートリアルでは、このフェイスモデルにカスタムマテリアルを追加して、もう少し楽しいものにします。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
