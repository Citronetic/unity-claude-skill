[Image: image]

# レッスン 1.4 - ドライバーのシートにステップイン

Tutorial

Beginner

+0XP

50 mins

10

(315)

Unity Technologies

[Image: レッスン 1.4 - ドライバーのシートにステップイン]Summary

**概要：**

このレッスンでは、道路に出て車両を制御する必要があります。そのためには、プレイヤーが矢印キーを押していることを検出し、その入力に基づいて車両を加速および回転させる必要があります。新しいメソッド、ベクトル、および変数を使用して、車が前方または後方に移動したり、左右に曲がれるようにします。

**プロジェクトの成果：**

プレイヤーが上下の矢印キーを押すと、車両は前後に移動します。また、プレイヤーが左右の矢印キーを押すと、車両が回転します。

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. 導入

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

## 2. 車両を左右に動かせるようにする

Q&A (0)

> *これまで、車両は道路に沿ってまっすぐ進むことしかできませんでした。障害物を回避するために、左右に移動できるようにする必要があります。*

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

1. PlayerController.cs の先頭に、***public float turnSpeed;***を追加します。
2. ***Update()***で、***transform.Translate(Vector3.right * Time.deltaTime * turnSpeed);***を追加します。
3. ゲームを実行します。***turnSpeed 変数のスライダー***を動かすと、車が左右に移動します。

[Image: image]ステップを完了としてマーク

## 3. 入力に基づいて左右に動かす

Q&A (0)

> *現在、インスペクターでしか車の左右の動きを制御できません。プレイヤーの能力を拡張して、プレイヤーが自分でその動きを制御できるようにする必要があります。*

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

1. **PlayerController.cs**で、新しく ***public float horizontalInput;*** 変数を追加します。
2. **Update()**で **horizontalInput = Input.GetAxis("Horizontal");**と代入を行い、テストしてインスペクターで確認します。
3. 車をコントロールできるように、車を左右に動かす **Translate メソッド**に ***horizontalInput***変数を追加します。
4. インスペクターで、***turnSpeed***を設定し、***speed***変数を変更して、微調整します。

[Image: image]ステップを完了としてマーク

## 4. 車の速度をコントロールする

Q&A (0)

> *プレイヤーがハンドルを制御できるようになったので、アクセルペダルとブレーキも制御できるようにしましょう。*

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

1. 新しく ***public forwardInput***変数を宣言します。
2. ***Update()*** で、***forwardInput = Input.GetAxis("Vertical");***と代入を行います。
3. ***forwardInput*** 変数を***車を前方向に動かす Translate メソッド***に追加して、テストします。

[Image: image]ステップを完了としてマーク

## 5. 車をスライドさせるのではなく、回転させる

Q&A (0)

> *いま、車は少し奇妙な動きをしています...回転するのではなく、左へ右へとスライドしながら走っています。実車のように車両を回転させましょう。*

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

1. ***Update()*** で、***transform.Rotate(Vector3.up, horizontalInput);***を呼び出し、テストします。
2. **車を左右に移動する**コードの行を**削除**して、テストします。
3. その行に「**** turnSpeed * Time.deltaTime***」を追加し、テストします。

[Image: image]ステップを完了としてマーク

## 6. コードと Hierarchy をきれいにする

Q&A (0)

> *このレッスンでは、新しいものをたくさん追加しました。先に進み、より専門的なことを学ぶ前に、スクリプトと Hierarchy をきれいにして、スクリプトを整理しておきましょう。*

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

1. Hierarchy 内で右クリックして Create Empty を選択し、「Obstacles」と名前を変更して、すべての障害物を**ドラッグ**します。
2. **PlayerController** で変数の値を**初期化**し、すべての変数を ***private***にします（***player*** 変数を除く）。
3. 「**//**」を使って、コードの各セクションに**コメント**を追加します。

[Image: image]ステップを完了としてマーク

## 7. レッスンのまとめ

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

新しい機能

- プレイヤーが上下の矢印キーを押すと、車両が前後に移動する
- プレイヤーが左右の矢印キーを押すと、車両が回転する

新しい概念とスキル

- 空のオブジェクト
- ユーザー入力の取得
- Translate と Rotate

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
