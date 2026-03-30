[Image: image]

# ディレクショナルライトとスカイボックスの設定

Tutorial

Beginner

+10XP

25 mins

0

Unity Technologies

[Image: ディレクショナルライトとスカイボックスの設定]Summary

Unity エディターで新しいシーンを作成すると、Scene ビューに真っ青な空がロードされます。ディレクショナルライトは、作成された 2 つのゲームオブジェクトのうちの 1 つです。この 2 つは、Unity におけるライティングの基本中の基本で、クリエイターが使い始めやすいようにデフォルトで用意されています。

このチュートリアルが終わるころには、次のことができるようになります：

- 屋外のシーンをリアルにライティングするための重要な考慮事項を特定する
- シーンにおけるディレクショナルライトの役割について説明する
- シーン内のディレクショナルライトを設定し、一般的な効果を得る
- シーンでのスカイボックスの役割を説明する
- プロシージャルスカイボックスを作成する

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

Unity エディターで新しいシーンを作成すると、Scene ビューに真っ青な空がロードされます。ディレクショナルライトは、作成された 2 つのゲームオブジェクトのうちの 1 つです。この 2 つは、Unity におけるライティングの基本中の基本で、クリエイターが使い始めやすいようにデフォルトで用意されています。

このチュートリアルが終わるころには、次のことができるようになります：

- 屋外のシーンをリアルにライティングするための重要な考慮事項を特定する
- シーンにおけるディレクショナルライトの役割について説明する
- シーン内のディレクショナルライトを設定し、一般的な効果を得る
- シーンでのスカイボックスの役割を説明する
- プロシージャルスカイボックスを作成する

これを行うと、屋外のシーンが夕方から深夜にかけてのライティングに変わっていくプロセスが始まります。

ステップを完了としてマーク

## 2. シーンのライティングをよりリアルに見せるには？

Q&A (0)

「[**ライティング入門**](https://learn.unity.com/tutorial/get-started-with-lighting#619be59eedbc2a14f503d4aa)」で学んだように、Unity の光の仕組みは、[物理ベースのレンダリング](https://learn.unity.com/tutorial/explore-shaders#619ba8ddedbc2a0020d62f26)を使用して、現実世界での光の仕組みをシミュレートしています。

ライティングアーティストにとって、機能的に効果的であり、かつ印象的なライティングを行うことは、重要な課題の一つであることを、Unity エキスパートクリエイターが語っています：

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off
- 日本語, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

しかし実際にはどうなのでしょうか？

ステップを完了としてマーク

## 3. 光源の種類の特定

Q&A (0)

リアルタイム体験で作りたい空間は、屋内や屋外、リアル（ある程度）なものから完全にファンタジーなものまで、さまざまな種類があります。ファンタジーや SF のプロジェクトであっても、ライティングによってリアルタイムの体験に根拠を与え、体験者の没入感をより高めることができるのです。

シーンに必要な光源を特定することは、ライティングの設計と実装の重要な初期ステップです。これには以下が含まれます：

- **Natural ライティング**（自然光）：太陽や月などの自然光であることが多い
- **Motivated**(モチベーテッド) **ライティング**：街灯や車のヘッドライトなど、シーン内のリアルな光源を模倣したライティング
- **Key**(キー) **ライティング**：光源を特定できない光で、シーン内でピントを合わせたい対象を照らすライト
- **Ambient** (**アンビエント**)**ライティング**（Unity では**拡散環境光**とも呼ばれる）：これは特定のソースオブジェクトからではなく、シーンに寄与する他のライトから放出される

**注記：**ライティングの種類はこれ以外にもありますが、これらの 4 つは学習体験のよい入門となるでしょう。

すぐに実現したいライティングの設定がわからないかもしれませんが、こうしたライティングを検討し、自分が作り出そうとしているムードや美的感覚を考えることで、最初のプランが見えてくるのではないでしょうか。

#### 屋外シーンで目指すもの

屋外シーンを深夜ライティングに変えることをじっくり考えて、アイデアをメモしておくといいでしょう：

- 重要な光源は何になるのか？
- 追加したい光源は何か？
- そのライトの設定によって、どんな雰囲気になるのか？

これから数回のチュートリアルで、シーンをカスタマイズする機会があれば、この最初の考えをガイドとして使ってください。

ステップを完了としてマーク

## 4. ディレクショナルライトの設定

Q&A (0)

屋外では、日中は太陽、夜間は月が一般的な自然光源となります。Unity では、シーンを作成すると、すでにヒエラルキーに**ディレクショナルライト**(**Directional Light**) が追加されており、この光が太陽や月として機能します。

ディレクショナルライトは、ギズモ（特定のゲームオブジェクトに関連付けられ、Scene ビューに表示されるグラフィックオーバーレイ）が示す方向に、ライトが直線の平行光線をキャストします：

[Image: image]

光の波は自然に広がりたいのですが、ディレクショナルライトの場合、シーンから非常に遠くにあるため（太陽が地球から非常に遠くにあるように）その効果は得られません。その代わり、平行な光線をシーンにまっすぐキャストします。

ディレクショナルライトは、シーンのどこにでも配置でき、キャストされる光に影響を与えることはありません。シーン内で光の方向を変更するには、明示的に変更する必要があります。

試してみよう：

**1.** Unity エディターで **Creative Core: Lighting** プロジェクトを開きます（まだ開いていない場合）。

**2.**  Project ウィンドウで、**Assets > CreativeCore_Lighting > Scenes** の順に選択し、**TutorialScene_Lighting_Outdoor** を開きます。前のシーンは、洗練された例でした。これは、最初の数回のチュートリアルのために作業するシーンです。現時点では、空の背景を持つ空の円形競技場が見えるだけでよいでしょう。

Scene ビューでグレー色しか表示されない場合は、Scene ビューのコントロールバーの **Effects** ドロップダウンでスカイボックスを有効にしてください。

[Image: image]

**3.**  Hierarchy で、**Lighting**ゲームオブジェクトを展開します。

**4.**  **Directional Light** ゲームオブジェクトを選択します。円形劇場の中央のスペースの上にあるのがわかると思います。アイコンが十分に大きく設定されていれば、太陽のアイコンと光が放射する方向のギズモが表示されるはずです。

[Image: image]

**ヒント：**もし、アイコンが表示されず、表示させたい場合は、Scene ビューのコントロールバーの **Gizmos**ドロップダウンを選択し、スライダーで **3D Icon** のサイズを大きくしてください。

**5.**ディレクショナルライトをシーンの中で近づけたり遠ざけたり、いろいろな位置に動かしてみてください。実際の太陽とは異なり、ディレクショナルライトの位置によって光の方向が変わることはなく、これらの変更によるライティングの違いがないことに気づくはずです。

**6.** [Rotate ツール (**R**)](https://learn.unity.com/tutorial/explore-the-unity-editor-1#612e2843edbc2a451ad00be1) を使ってディレクショナルライトの向きを変えます。すでにシーンにある空が、その位置の変更に反応することに気づくはずです。

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

**7.**  **Directional Light** ゲームオブジェクトを選択したまま、Inspector に移動し、Light コンポーネントの **Color** プロパティを探します。

**8.**  カラーのボックスを選択すると、Color ピッカーウィンドウが表示され、新しい色合いを選択することができます。円形劇場の構造に注目してください。ここは、色の変化による影響が最もわかりやすい場所です。これは、シーンの雰囲気作りに役立ちます。

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

この効果は比較的微妙なもので、必ずしも現在のシーンの設定に適しているわけではありません。神秘的な紫や不吉な赤は、これが日中ではなく深夜に設定されたシーンであれば、より大きなインパクトを与えることができます。このチュートリアルの最後に、ディレクショナルライトをさらに調整する機会がありますので、今は自由にいろいろな色を試してみてください。

ステップを完了としてマーク

## 5. ディレクショナルライトの高度な使い方

Q&A (0)

この入門編の学習体験では紹介しきれない、より高度なディレクショナルライトの使い方があります。 特に、**Creative Core: Lighting** 以外のライティングスキルを身につけたい方は、こうした状況やその複雑さを知っておくと役に立つかもしれません。

#### 複数の機能的な太陽や月を作成する

複数のディレクショナルライトをシーンに追加することはできますが、太陽や月として正しく機能するのは、それを考慮した特別な設定をプロジェクトで行わない限り、1 つのディレクショナルライトに限られます。

#### 時間帯の遷移

時間帯が変わらないのではなく、プレイしているうちに時間帯が変わるゲームをプレイしたことがあるかと思います。これは Unity でも可能ですが、今回の学習範囲外です。

ステップを完了としてマーク

## 6. スカイボックスの使用

Q&A (0)

ディレクショナルライトの基本がわかったところで、いよいよ空にフォーカスしてみましょう。

Unity の空の背景は、**スカイボックス**(**skybox**) と呼ばれる特別な種類のマテリアルを使用して作成されます。スカイボックスは、各面に異なるテクスチャを持つキューブです。 スカイボックスを使用して空をレンダリングする場合、Unity は基本的にシーンをスカイボックスキューブ内に配置します。Unity は最初にスカイボックスをレンダリングするため、空は常に後方にレンダリングされます。

シーンのデフォルトのスカイボックスは、晴れた日の昼間の空ですが、この背景には遠くの環境的な特徴を含めることができます。これらは、空間性と奥行きの感覚に役立つもので、以下のようなものがあります：

- ランドスケープの特徴：遠くのアルプスの山を背景にした映画のようなセットを考える
- 建物：例えば、地平線上に見える広大なファンタジー都市

例えば、エイリアンのビデオゲームショップのガイド付きプロジェクトでは、その雰囲気と宇宙空間というテーマに合わせて、楽しいスカイボックスが用意されています。

[Image: image]

スカイボックスキューブに適用されるマテリアルには、スカイボックスシェーダーを使用する必要があります。スカイボックスシェーダーには 2 つのカテゴリーがあります：

- **Textured：**1 つまたは複数のテクスチャからスカイボックスを生成します。
- **Procedural：**テクスチャを使用せず、マテリアルのプロパティを使用してスカイボックスを生成します。

今回の学習体験では、プロシージャルな スカイボックスシェーダーを中心に学習します。

ステップを完了としてマーク

## 7. プロシージャルスカイボックスの新規作成

Q&A (0)

次に、デフォルトのスカイボックスを、カスタムプロシージャル (procedural) スカイボックスに切り替えます：

**1.** Project ウィンドウで、**Assets** > **CreativeCore_Lighting** > **Materials**の順に選択します。

**2.**  ウィンドウ内で右クリックし、**Create > Material** と選択します。新しいマテリアルには、後で見つけやすいように分かりやすい名前を付けます。

**3.**  Inspector で、**Shader** プロパティで、**Skybox > Procedural** ドロップダウンで選択します。

[Image: image]

[**Creative Core：シェーダーとマテリアル**](https://learn.unity.com/tutorial/get-started-with-shaders-and-materials)を完成させた人なら見たことがある他のシェーダーと同様に、このシェーダーもマテリアルを使って設定できる一定のプロパティを有しています。

**4.**  スカイボックスを設定する前に、シーン内でレンダリングして、変更の影響を確認するのが便利です。[Lighting ウィンドウをドッキングした](https://learn.unity.com/tutorial/get-started-with-lighting-in-unity#619cc856edbc2a3367e22353)場所に移動して、**Environment**タブを選択します。

**5.** 新しいマテリアルを **Skybox Material** プロパティにドラッグして割り当てます。

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

**6.**  ここで、Inspector のカスタムマテリアルの設定に戻ります。設定できるプロパティをじっくりと確認しましょう：

- **Sun：**これは、Unity がスカイボックスに太陽を生成するために使用する方法です。オプションを **Simple** に設定します。
- **Sun Size：**太陽のサイズを調整します。値を大きくするほど空に大きく表示されます。
- **Atmosphere Thickness：**大気の密度。大気の密度が高いほど、より多くの光を吸収します。
- **Sky Tint：**空を彩る色。
- **Ground：**地面の色 (地平線下のエリア)
- **Exposure：**スカイボックスの露出を調整します。値を大きくすると、より露出した、明るく見えるスカイボックスが作成されます

次に、これらを試して、スカイボックスをカスタマイズします。

ステップを完了としてマーク

## 8. 深夜の外観を作る

Q&A (0)

さて、ここまでで学んだことを活かして、このシーンを深夜に設定する準備が整いました。この機会に、カスタムのプロシージャルスカイボックスマテリアルとディレクショナルライトを設定するだけで、さまざまな雰囲気が得られるので、試してみてください。比較的小さな変更で、雰囲気を劇的に変化させることがあります。

下の例をご覧ください：

[Image: image]

空は紫がかっていて、特に地平線に近いところはまだかなり明るいです。ディレクショナルライトのピンクパープルが見やすくなりましたが、空とディレクショナルライトが非常にスタイリッシュな印象を与えているのが現在のところです。

この例を発展させて、よりリアルな感じのする夜の外観を作りたいとします。プロシージャルスカイボックスマテリアルの色を調整し、**Atmospheric Thickness** の値を少し減らしてみるといいでしょう：

[Image: image]

これでだいぶ良くなりましたね！自分で作業するときは、変更内容を定期的に保存することを忘れないようにしましょう。

**ヒント：**

- スカイボックスの変化はもっと劇的ですが、ディレクショナルライトの設定も忘れずに調整してください。**Color** プロパティへの小さな変更は、シーンのムードに微妙な、しかし効果的な影響を与えることができます。
- この例のように、満足のいく結果が得られるまで、ライティングを何度も繰り返すことは全く普通のことです。

ステップを完了としてマーク

## 9. 次のステップ

Q&A (0)

次に、深夜のシーンを表現するために他の光源と影に注目します。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
