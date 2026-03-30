[Image: image]

# マーカーベース AR の新しいプロジェクトを作成する

Tutorial

Beginner

+10XP

30 mins

0

(7)

Unity Technologies

[Image: マーカーベース AR の新しいプロジェクトを作成する]Summary

このチュートリアルでは、マーカーベース AR プロジェクトを Unity に設定し、お好みの 3D モデルを使用してアプリケーションをテストします。

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. 概要

Q&A (0)

このチュートリアルでは、Unity プロジェクトを作成し、そのプロジェクト内でマーカーベースのインタラクティブ AR アプリケーションを開発します。

**マーカーベース AR** によって、アプリケーションが現実世界で画像を検出し、何らかのアクションをトリガーできるようになります。例えば、画像を検出したときに AR コンテンツを表示します。

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

**AR マーカー**とは、アプリケーションが現実世界で探す画像です。アプリケーションは、マーカーを検出すると、AR でマーカー上に 3D モデルを投影します。マーカーの動作は QR コードに似ている点がありますが、ウェブサイトにアクセスできるようにする代わりに、完全な AR 体験をトリガーできます。

このチュートリアルでは、プロジェクトを設定し、マーカーが検出されたときに表示される 3D モデルを選択します。これは、提供されているモデルでも、独自のモデルの 1 つでもかまいません。また、AR マーカーも選択できるように複数提供されていますが、特に独自のカスタムモデルを使用する場合には独自のマーカーを作成してもよいでしょう。

このプロジェクトの後半では、一連の UI ボタンを追加して、オブジェクトの回転、テキストの表示、オーディオの再生、または選択したモデル固有のその他のアクションをユーザーが行えるようにします。

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

このプロジェクトを完了するまでに、ご自身のアプリケーションでマーカーベース AR をどのように使用できるかについて、新しいアイデアをたくさん得ることができるはずです。

ステップを完了としてマーク

## 2. AR マーカーのユースケース

Q&A (0)

マーカーベース AR アプリケーションは、一例を挙げるだけでもマーケティングやゲーム、製造、芸術、建築など、幅広い業界で使用されています。企業がマーカーベース AR を使用する理由はさまざまですが、多くの場合、現実世界の事物に対して追加のコンテンツを提供するために使用されます。ピザの箱がインタラクティブになる面白いゲーム、人物が話し始める名刺、キャンバスから飛び出す芸術作品、タトゥーを入れる前に位置やデザインを決められるタトゥー用アプリケーションなど、マーカーベース AR には豊富な潜在能力があります。

どのようなものかを把握するために、以下に示す例のリンクを参照してください。

- マーケティングおよびゲーム（[ピザハットのパックマン](https://www.8thwall.com/toolofnorthamerica/pizza-hut-pacman)）
- 追加情報の提供（[名刺](https://www.youtube.com/watch?v=xBYDmauqdaw)、[医療向けデモ](https://www.youtube.com/watch?v=1nZpX9BQEfo)）
- 芸術（ArtVive [デモ](https://youtu.be/3yc3tjyAdv0) | [iOS](https://apps.apple.com/us/app/artivive/id1188737494) | [Android](https://play.google.com/store/apps/details?id=com.artivive&hl=en_US&gl=US)）
- ユーティリティ（Inkhunter [デモ](https://www.youtube.com/watch?v=p_Q7eA-C6X0&t=19s) | [iOS](https://apps.apple.com/us/app/inkhunter-try-tattoo-designs/id991558368) | [Android](https://play.google.com/store/apps/details?id=tattoo.inkhunter)）

ステップを完了としてマーク

## 3. 始める前に

Q&A (0)

[**AR 入門**](https://learn.unity.com/project/get-started-with-ar)チュートリアルをすでに完了している必要があります。それらのチュートリアルでは、以下の設定タスクを実行しています。

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

## 4. 新しいプロジェクトを作成する

Q&A (0)

以下の手順に従って、新しいプロジェクトを作成します。

**1.**[AR_Starter_Project](https://connect-prd-cdn.unity.com/20221012/0101d577-2bc9-4b30-9b05-c7872e76e902/AR_Template_Zip.zip)の zip ファイルをダウンロードして、解凍または抽出します。これは、AR フェイスフィルターに使用したのと同じスタータープロジェクトであり、これを再度使用して、新しいプロジェクトを作成します。

**2.**zip フォルダー内で **AR_Starter_Project** フォルダーを見つけて、コンピューター上の適切な場所に移動させます。

**3.**プロジェクトフォルダーの名前を、「**[ご自身のお名前] [AR マーカー]**」など、より適切な名前に変更します。

**4.** [Unity プロジェクトを Unity Hub](https://learn.unity.com/tutorial/project-setup-processes#60ed7a5aedbc2a002520b6ea) に追加して開きます。

プロジェクトのエディターバージョンの横に警告アイコンが表示される場合は、正しいバージョンの Unity がインストールされていないことを意味します。Unity の特定の必須バージョンをインストールする必要があります。警告アイコンを選択して詳細を表示します。

[Image: image]

これで、AR プロジェクトが Unity で開かれるはずです。

ステップを完了としてマーク

## 5. プロジェクトのアセットをインポートする

Q&A (0)

以下の手順に従って、プロジェクトのアセットをインポートします。

**1.**  [AR マーカーのアセット](https://connect-prd-cdn.unity.com/20221201/79b40329-11fe-4e96-a79a-a7f67b3872f6/AR_Marker_Assets.zip)[をダウンロードします。](https://connect-prd-cdn.unity.com/20221130/6d64b9fd-e172-4e64-a4f7-4f2fede04614/AR_Marker_Assets.zip)

**2.**  ダウンロードしたフォルダーを解凍し、**AR_Marker_Assets.unitypackage** を見つけます。

**ノート**：ダブルクリックして中身を見るのではなく、フォルダーを完全に解凍することが重要です。解凍されていないファイルをインポートしようとするとエラーになります。

**3.**  **AR_Marker_Assets.unitypackage** を Unity エディターの Project ウィンドウの「Assets」フォルダーにドラッグします。

**4.**  「Import Unity Package」ダイアログウィンドウのプロンプトに従い、「**Import**」を選択します。

ステップを完了としてマーク

## 6. 新しいシーンを作成してビルドをテストする

Q&A (0)

**重要**：モバイルデバイスと AR 開発環境を設定するには、続ける前に、[**AR 入門**](https://learn.unity.com/project/get-started-with-ar)プロジェクトをすでに完了している必要があります。

制作を開始する前に、Unity とモバイルデバイスが AR 開発用に適切に設定されていることを念のため再確認します。

以下の手順に従って、新しいシーンをセットアップし、テストアプリケーションをビルドします。

**1.** 「**File**」>「**New Scene**」に移動し、「**AR**」シーンテンプレートをリストから選択して、「**Create**」を選択します。

**2.** 新しいシーンに「ARMarker」という名前を付けて「Scenes」フォルダーに保存します。

**3.** ビルド設定を開きます（「**File**」>「**Build Settings**」）。

**4.** 「**Scenes in Build**」セクションの下で、「**Add Open Scenes**」を選択して、新しい「ARMarker」シーンを「Scenes in Build」リストに追加します。

**5.** 同じリストで「**SampleScene**」を無効にします。

[Image: image]

**6.**  テスト用のデバイスに応じて、ビルドプラットフォームを iOS または Android に切り替えます。

**7.**「Player Settings」で、「**Company Name**」または「**Product Name**」を新しい一意の名前に変更します。iOS デバイス用に正常にビルドするには、一意の識別子が必要です。

**重要**：識別子にスペースや特殊文字を含めることはできません。大文字と小文字のみを使用できます。特殊文字を含めると、アプリケーションはビルドされません。

**8.**  アプリケーションをビルドしてテストします。

アプリケーションが読み込まれると、回転立方体がデバイスに表示されます。アプリケーションが正常にビルドされなかった場合は、[**AR 入門**](https://learn.unity.com/project/get-started-with-ar)プロジェクトを参照してデバッグしてください。

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

## 7. アプリケーションのモデルを選択する

Q&A (0)

マーカーを使用して、アプリケーションに 3D モデルを生成します。前のステップでインポートしたアセットパックには複数のマーカーと 3D モデルが含まれており、その中から選択できます。

必要に応じて、独自のマーカーとモデルを使用することもできます。提供されているアセットを例として見てみましょう。

以下の手順に従って 3D モデルを選択します。

**1.**  Project ウィンドウで、「**_ARMarker**」>「**Prefabs**」フォルダーに移動します。

[Image: image]

**2.**  プレハブそれぞれを確認するために、「Hierarchy」にドラッグするか、選択して「Inspector」のプレビューに表示します。

**ノート**：これらのチュートリアルでは、「**Fusebox**」プレハブを例として使用します。

**3.**  選択したプレハブを Project ウィンドウから Hierarchy ウィンドウにドラッグします。

**4.** プレハブが「Hierarchy」で選択された状態で、「**Transform**」の「Position」を以下のように設定します：**X**=**0、Y**=**0、Z**=**1**.これで、モデルが AR カメラの 1 メートル前に配置されます。これは、通常ユーザーがデバイスのカメラでマーカーをスキャンする際のマーカーとの距離にほぼ相当します。

**5.**「Hierarchy」から立方体を削除します。

[Image: image]

**6.**  シーンを保存し、もう一度アプリケーションをビルドします。環境でのモデルのサイズに注目してください。次のステップでは、必要に応じてサイズを調整できます。

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

## 8. モデルのスケールを調整する

Q&A (0)

作成している体験によって、アプリケーション内に AR オブジェクトを表示するスケールは異なります。トレーニングシミュレーションやショッピングアプリなど特定のアプリケーションでは、オブジェクトの実寸を使用します。「**Beachside Town**」プレハブなど他のケースでは、机の上にちょうど収まるくらいに縮小する必要があります。

以下の手順に従って、モデルのスケールを調整します。

**1.**  選択したゲームオブジェクトを「Hierarchy」で展開すると、その子ゲームオブジェクトを表示できます。**[使用するモデル]Mesh** という名前の子ゲームオブジェクトを選択します。

**2.**  メッシュの「**Scale**」を編集し、現実世界に対してアプリケーションでモデルが適切に表示されるようにします。

[Image: image]

**3.**特定の現実世界のスケールを実現するには、立方体を一時的にシーンに追加して、その「**Transform**」の「Scale」の **X**、 **Y** または **Z** の値を調整して、一種の原始的な物差しを作成します。Unity ユニット 1 は現実世界の 1 メートルと等しいことを覚えておいてください。つまり、選択したゲームオブジェクトの高さを 0.5 メートルにするには、0.5 に縮小した立方体と同じ高さにする必要があります。

**4.**シーンを保存して、スケールに満足できるまで必要に応じて再ビルドします。

ステップを完了としてマーク

## 9. 次のステップ

Q&A (0)

このチュートリアルでは、AR テンプレートとインポートしたプロジェクトアセットを使用して、新しい Unity プロジェクトを作成しました。その後、マーカーが検出されたときにアプリケーションに表示されるモデルを選択しました。次のチュートリアルでは、特定の AR マーカーが検出されたときだけモデルが表示されるようにアプリケーションを設定します。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
