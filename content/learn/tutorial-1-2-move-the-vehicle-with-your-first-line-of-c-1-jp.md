[Image: image]

# レッスン 1.2 - アクセル全開！

Tutorial

Beginner

+10XP

70 mins

4

(116)

Unity Technologies

[Image: レッスン 1.2 - アクセル全開！]Summary

**概要：**

このレッスンでは、ドライビングシミュレーターを動かしていきます。まず、はじめて C＃でコードを記述し、車両の位置を変更して前進できるようにします。次に、物理コンポーネントをオブジェクトに追加して、それらが互いに衝突できるようにします。最後に、Hierarchy ウィンドウでオブジェクトを複製し、道路に沿って配置する方法を学習します。

**プロジェクトの成果：**

独自の C# スクリプトを搭載して移動できるようになった車両と、オブジェクトでいっぱいの道路ができ、すべてのオブジェクト同士は物理コンポーネントを使用して互いに衝突することができる状態になっています。

Languages available:

日本語English日本語한국어日本語

## 1. はじめてのスクリプトを作成して適用する

Q&A (0)

> *はじめての C# スクリプトとして、車両の動きを制御するスクリプトを書くところからこのレッスンを始めましょう。*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

1. Project ウィンドウで右クリックして、Create > **Folder**と選択してフォルダーを作成し、「Scripts」という名前にします。
2. 「Scripts」フォルダー内で右クリックして、Create > **C# Script**と選択して C#スクリプトファイルを作成し、名前を「PlayerController」にします。
3. 新しいスクリプトを **Vehicle オブジェクト**に**ドラッグ**します。
4. Vehicle オブジェクトを**クリック**して、Inspector の**コンポーネント**として追加されていることを確認します。

****

ステップを完了としてマーク

## 2. Update() メソッドにコメントを追加する

Q&A (0)

> *車両を前に動かすには、まず新しいスクリプトを開いて、開発環境に慣れておく必要があります。*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

1. *スクリプトを**ダブルクリック**して **Visual Studio**で開く*
2. ***Update()** メソッドで、「**// Move the vehicle forward**」とコメントを記入します。*

[Image: image]ステップを完了としてマーク

## 3. 車を前に動かす

Q&A (0)

> *プログラムする内容についてコメントをつけました。次は、実際に車両を前進させるコードの行を作成しましょう。*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

1. 新しく追加したコメントの次の行で ***transform.tr***まで入力し、オートコンプリートメニューから **Translate** を選択します。
2. 「**(**」を入力し、「**0, 0, 1**」を括弧の間に追加し、セミコロン「(**;**) 」で行を終えます。
3. **Ctrl/Cmd + S** を押してスクリプトを保存し、ゲームを実行してテストします。

[Image: image]

**注：**オートコンプリートが正しく動作するためには、お使いの IDE に対応する Unity プラグインがインストールされている必要があります。

ステップを完了としてマーク

## 4. Vector3 を使って前に進む

Q&A (0)

> *Z 軸に沿って移動するように車両をプログラムしましたが、実はもっときれいにコードを書く方法があります。*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

1. **Delete** the 0, 0, 1 you typed and use auto-complete to **replace it** with ***Vector3.forward***
2. *先ほど入力した「0, 0, 1」を**削除**し、オートコンプリートを使用して **Vector3.forward**に**置き換えます**。*

[Image: image]ステップを完了としてマーク

## 5. 車のスピードをカスタマイズする

Q&A (0)

> *現在、車のスピードをコントロールすることはできません。コードを変更して、これを調整できるようにしましょう。*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

1. **** Time.deltaTime**を追加して、*ゲームを実行します。
2. **** 20**を追加して、*ゲームを実行します。

[Image: image]ステップを完了としてマーク

## 6. RigidBody コンポーネントをオブジェクトに追加する

Q&A (0)

> *現在、車両は箱を通り抜けるようになっています。より現実に近くするには、物理演算を追加する必要があります*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

1. **Vehicle**を選択し、Inspector で **Add Component**をクリックして **RigidBody** を選択します。
2. **Obstacle**を選択し、Inspector で **Add Component** をクリックして **RigidBody**を選択します。
3. RigidBody コンポーネントのプロパティで、車と障害物の**質量**を現実世界でありそうな重量（**キログラム**単位）まで増加させて、再度テストします。

ステップを完了としてマーク

## 7. 障害物を複製して配置する

Q&A (0)

> *最後に障害物を複製して、道路をよりスリリングなものにしてみましょう。*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

1. 障害物をクリックして、Hierarchy の**リストの一番下**にドラッグします。
2. **Ctrl/Cmd+D**を押して障害物を複製し、**Z 軸**に沿ってより原点に近い方へ移動させます。
3. これをさらに数回繰り返して、障害物を増やします。
4. 何度か複製した後、Hierarchy から障害物を 1 つ選択し、**Ctrl キーを押しながらクリック**して複数の障害物を選択し、それらを**複製**します。

ステップを完了としてマーク

## 8. レッスンのまとめ

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

新しい機能

- 車が一定のスピードで道路を移動する
- 車が障害物と衝突すると、空中に飛ぶ

新しい概要とスキル

- C# スクリプト
- Start() と Update()
- コメント
- メソッド
- パラメーターを渡す
- Time.deltaTime
- 乗算（「*」）演算子
- コンポーネント
- Collider と RigidBody

次のレッスン

- カメラにコードを追加して、プレイヤーが道路に沿って運転するときにカメラが追従するようにします。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
