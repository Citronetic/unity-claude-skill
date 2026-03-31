[Image: image]

# レゴ® Mod：メニューをカスタマイズする

Tutorial

Beginner

+10XP

20 mins

3

(16)

Unity Technologies

[Image: レゴ® Mod：メニューをカスタマイズする]Summary

マイクロゲームのメニュー画面をステッカーのアセットを使ってカスタマイズしましょう。

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

この Mod では、マイクロゲームのメニュー画面をカスタマイズします。アドオンのステッカーアセットも使います。ゲーム体験全体の雰囲気を変えるために、こうしたアセットを使うことができます。

さあ、始めましょう。

ステップを完了としてマーク

## 2. 始める前に

Q&A (0)

#### **エディター内チュートリアル**

最初にレゴ® マイクロゲームのエディター内チュートリアルを完了しておくと、この Mod からもっと多くのことを学べます。ご自分のペースで、時間をかけて学んでいってください。

#### **マイクロゲームを開く**

レゴ® マイクロゲームを開くには、次のようにします。

**1.**  Unity Hub を開きます。

**2.**  マイクロゲームを使ったことがあるかどうかに従って、次のどちらかの手順を行ってください。

- すでにマイクロゲームを使用したことがある場合は、**Projects** タブで保存した Unity プロジェクトを選択してください。プロジェクトを選ぶと Unity エディターが開きます。これには数分かかることもあります。
- マイクロゲームを初めて使う方は、**Learn** タブで「LEGO® Microgame」を選択してください。指示に従って、エディター内チュートリアルを完了してください。

#### **アドオンパッケージ**

このクリエイティブ Mod を完了するには、[**Stickers LEGO® Microgame Add-On**](https://assetstore.unity.com/packages/2d/characters/stickers-lego-microgame-add-ons-179850) をダウンロードしてインストールする必要があります。

ステップを完了としてマーク

## 3. テストのためにシーンを調整する

Q&A (0)

まず、チュートリアルシーンを変更して、勝敗の結果表示画面をトリガーして変更をテストすることが簡単にできるようにしておきましょう。

**1.**Project ウィンドウで、 *Assets* > *LEGO* > *Prefabs* > *LEGO Behaviour Bricks と移動します。*

[Image: image]

**2.**Scene ビューで、ステージの終了地点に移動します。プロジェクトにあった元の Win ブロックとその Touch Trigger を削除（**Ctrl**/**Cmd**+**Del**）します。

**3.**  プレイヤーのスタート地点に戻ります。手っ取り早い方法は、Hierarchy ウィンドウで「Player Minifig」を選択し、シーンビューにカーソルを合わせてショートカットキーの **F**（**フレーム選択**）を使い、そのゲームオブジェクトに視点を合わせることです。

**4.**  「Win」ブロックを Project ウィンドウから Scene ビューにドラッグします。

[Image: image]

**5.** LEGO® Tools で、**ブロックの組み立て**を有効にし、ブロック選択を **Single Brick** に設定します。

[Image: image]

**6.** プロジェクトウィンドウで「Touch Trigger」を探し、シーンビューにドラッグします。

**7.** カーソルで Touch Trigger ブロックを Win ブロックの上に移動させます。接続できる場所に張り付きながら動きます。クリックしてブロックを接続します。

[Image: image]

**8.** Project ウィンドウで、「Hazard」ブロックを探し、Scene ビューの、Win ブロックから少し離れた場所にドラッグします。

[Image: image]

**9.** **Ctrl** / **Cmd** + **S**を押して変更を保存します。

ステップを完了としてマーク

## 4. ゲームの最初に表示されるメニューを見直す

Q&A (0)

次に、ゲームの最初に表示されるメニュー、勝利時のメニュー、敗北時のメニューを作るために使われている UI（ユーザーインターフェース）を見直しましょう。

**1.**Project ウィンドウで、*Assets > LEGO > Scenes*と移動します。

[Image: image]

**2.**「Menu Intro」をダブルクリックしてシーンを開きます。プロンプトが表示されたら、変更を保存します。

**3.**Scene ビューの上部で、**2D ボタン**を選択して 2D 表示を有効にします。

[Image: image]

**4.**Hierarchy ウィンドウで、「Canvas」ゲームオブジェクトを選択します。

**5.**  キャンバスをよく見たい場合は、Scene ビュにカーソルを合わせて、ホットキー の **F**（**フレーム選択**）を使用します。

**6.** Scene ビューで Canvas の各要素を選択するか、Hierarchy ウィンドウで、親になっている「Canvas」ゲームオブジェクト、次に「Menu」オブジェクト、そしてその子になっているゲームオブジェクトの要素を表示することができます。

ゲームの最初に表示させるメニューの Canvas には、次の要素が含まれています。

- Title（テキスト）
- Play Button（テキストとステッカー）
- Controls Button（テキストとステッカー）

[Image: image]ステップを完了としてマーク

## 5. ステッカーでメニューをカスタマイズする

Q&A (0)

メニュー画面の Canvas をカスタマイズして、ゲーム全体の外観に合わせることができます。これを行う方法の 1 つが、LEGO® Microgame Stickers Add On を使って、2D 画像を本物のステッカーのように Canvas に追加することです。（こういう 2D 画像は[スプライト](https://docs.unity3d.com/ja/current/Manual/Sprites.html?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035316399)と呼ばれています）。

#### 1. ステッカーを変更する

まず、ステッカーを変更しましょう。

**1.**Scene ビューまたは Hierarchy ビューで、Canvas 上のステッカーを選択します。この例では、Play Button の横にある Treasure Map ステッカーを使用しています。

[Image: image]

**2.** インスペクターで、**Image**コンポーネントを探します。

**3.  ソース画像ピッカー**（丸いアイコン）を選択し、Select Sprite ウィンドウでゲームに合ったステッカーを選択します。

[Image: image]

#### 2. ステッカーのサイズを変更する

次の手順で、追加したステッカーのサイズを変更することができます。

**1.**Scene ビューまたは Hierarchy ビューで、Canvas 上の「Sticker」ゲームオブジェクトを選択します。

**2.**ツールバーで、**Rect ツール**を選択します（またはショートカットキーの **T** を使用します）。ギズモを選択してドラッグし、ステッカーのサイズを変更します。**Shift** キーを押しながらドラッグすると、ステッカーのアスペクト比を保ったまま、均一なサイズ変更を行うことができます。

下の動画は Rect ツールを使って、均一なサイズ変更と均一でないサイズ変更を順番に行っているところを実演しています。

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

#### 3. ステッカーを複製する

メニューのステッカーを複製することもできます。

**1.**Scene ビューまたは Hierarchy ウィンドウで、複製したいステッカーを選択します。

**2.  Ctrl / Cmd + D** でゲームオブジェクトを複製します。

**3.**ツールバーで、**移動ツール**を選択し（またはショートカットキーの **W** を使用）Canvas 上のステッカーの配置を調整します。

#### テストして保存する

**重要：**

- ツールバーの**再生ボタン**を選択して再生モードに入り、「Win」または「Hazard」ブロックを発動させてゲームの最初のメニューを表示させて、変更をテストします。テストが終わったら再生モードを終了することを忘れないでください。再生モードで行った変更は保存されません。
- 定期的に変更を保存（**Ctrl / Cmd + S**）するようにしてください。

ステップを完了としてマーク

## 6. テキストをカスタマイズする

Q&A (0)

次に、テキストをカスタマイズしましょう。

#### 1. テキストを変更する

テキストを変更するには、次のようにします。

**1.**Hierarchy ビューまたは Scene ビューで、「Title」 ゲームオブジェクトを選択します。

**2.** インスペクターで、**TextMeshPro - Text (UI) コンポーネント**を見つけます。

**3.**  **Text Input** フィールドで、ゲームの名前を変更します。

[Image: image]

#### 2. テキストの色を変更する（単色）

1 つの色を選んで、その色に変更する場合は、次のようにします。

**1.**インスペクターで、**TextMeshPro - Text (UI) コンポーネント**の**Vertex Color**プロパティを探します。

[Image: image]

**2.**カラーボックスを選択し、ゲームの外観に合わせて色を選択します。

[Image: image]

#### 3. テキストの色を変更する（グラデーション）

テキストの色をカラーグラデーションに変更する場合は、次のようにします。

**1.**インスペクターで、**TextMeshPro - Text (UI) コンポーネント**の**Color Gradient**プロパティを有効にします。

[Image: image]

**2.**色選択ボックスを使って、テキストの右下と右上、左下と左上の端の色をそれぞれ設定します。ステッカーから色を拾いたい場合は、カラーピッカー（スポイトのアイコン）を使うこともできます。

[Image: image]

#### 4. テキストボックスの色を変更する

テキストボックスの色を変更する（例えば、再生ボタンの背景など）には、次のようにします。

**1.** Hierarchy ビューまたは Scene ビューで、「Play Button」ゲームオブジェクトを選択します。

[Image: image]

**2.**  インスペクターで、**Image コンポーネント**の **Color** プロパティを探します。

[Image: image]

**3.**色選択ボックスまたはカラーピッカー（スポイトアイコン）を使用して、背景の色を設定します。

**4.**インスペクターで、**Custom Button (Script)**コンポーネントの横の矢印をクリックして、折りたたまれたプロパティを展開します。

**5.  Transition**を **None**に設定します。

[Image: image]

#### テストして保存する

**重要：**

- ツールバーの**再生ボタン**を選択して再生モードに入り、「Win」または「Hazard」ブロックを発動させてゲームの最初のメニューを表示させて、変更をテストします。テストが終わったら再生モードを終了することを忘れないでください。再生モードで行った変更は保存されません。
- 定期的に変更を保存（**Ctrl / Cmd + S**）するようにしてください。

ステップを完了としてマーク

## 7. 実験して繰り返し修正する

Q&A (0)

ゲームの最初に表示されるメニュー画面をカスタマイズしたら、「勝利時のメニュー」と「敗北時のメニュー」のそれぞれのシーンにある Canvas も変更してみてください。

変更がプレイヤー体験にどのような影響を与えるかを明確に把握するために、テストをしながら行ってください。

**ヒント：**

- テストが終わったら再生モードを終了することを忘れないでください。再生モードで行った変更は保存されません。
- ゲームのメニュー以外のシーンに戻るときは、Scene ビューの上部にあるボタンを使って、**3D 表示**に戻るようにしてください。

ステップを完了としてマーク

## 8. もっと改造したい人へ

Q&A (0)

メニュー画面の完成度を一段引き上げるために、次のような変更を行ってみるのはいかがでしょうか。

- キャンバス上の要素を移動したり、サイズを変更したりして、より自由な感じにします。
- メニュー画面に合うように、[**シーンのスカイボックスを変更する**](https://learn.unity.com/tutorial/lego-mod-change-mood-jp)。

皆さんがどんなものを作るのか、今から楽しみです。

#### 次のステップ

他の[**レゴ® マイクロゲームクリエイティブ Mod**](https://learn.unity.com/project/lego-template-jp) にもトライして、皆さんのマイクロゲームをどんどんカスタマイズしてしまいましょう。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
