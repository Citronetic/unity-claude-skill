[Image: image]

# ラボ 3 - プレイヤーのコントロール

Tutorial

Beginner

+0XP

60 mins

6

(89)

Unity Technologies

[Image: ラボ 3 - プレイヤーのコントロール]Summary

**概要：**

このレッスンでは、プレイヤーの基本的な動きを制限するコードを含め、プレイヤーの基本的な動きをプログラムします。プレイヤーを動かす方法はプロジェクトの種類に応じてさまざまな方法が考えられるため、どのように実装するかについてのステップバイステップの指示はありません。これを行うためには、リサーチをしたり、他のコードを参照したり、上手く動かないときは問題を解決したりする必要があります。

**プロジェクトの成果物：**

プレイヤーがユーザーの入力に基づいて動き回るようになり、かつ、入っていってはいけないところには動けなくなります。

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

## 2. PlayerController を作成し、コードを計画する

Q&A (0)

> プレイヤーがどのような動きをするかに関わらず、必ず PlayerController スクリプトが必要になります。

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

1. プレイヤーを選択し、**Rigidbody** コンポーネントを追加します。
2. 「Assets」フォルダに新しく「Scripts」フォルダーを作成します。
3. 新しい「Scripts」フォルダー内に、新しく「PlayerController」C#スクリプトを作成します。
4. スクリプトをプレイヤーに**アタッチ**してから**開きます**。
5. プレイヤーに必要なプログラミングの種類を決めます。

このステップを終えたら、新しいスクリプトを開いて、その中に何を書くのか、しっかりとした計画を立てなければなりません。

ステップを完了としてマーク

## 3. ユーザー入力から基本的な動作をさせる

Q&A (0)

> まず最初にプログラムするのは、ユーザーの入力に基づいたプレイヤーの非常に基本的な動きです。

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

1. 新しく **private float speed 変数**を宣言します。
2. 物理を使用する場合は、新しく **Rigidbody playerRb 変数**を宣言し、Start() で初期化します。
3. 矢印キーを使用する場合は、新しく **verticalInput**変数および **horizontalInput**変数を宣言します。
4. キーを押したことに基づいた動きをする場合は、**if 文**を作成して **KeyCode**をテストします。
5. ***Translate***メソッドまたは ***AddForce***メソッド（物理を使用している場合）を使用して、キャラクターを移動します。

このステップを終えると、ユーザーの入力に基づいて、プレイヤーを望みの方向に動かせるようになっているはずです。

ステップを完了としてマーク

## 4. プレイヤーの動きを制限する

Q&A (0)

> プレイヤーがどのような動きをしていても、ゲームプレイに合わせた制限をかける必要があります。

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

1. プレイヤーが衝突してはいけないオブジェクト（地面を含む）に衝突している場合は、Collider コンポーネントの「**Is trigger**」ボックスの状態をチェックしてください。
2. プレイヤーの位置や回転を制約する場合は、Rigidbody コンポーネントで**制約**を展開し、特定の軸について制約をかけます。
3. プレイヤーが**画面の外**に出ていってしまう場合は、**if 文**に位置を確認してリセットするようなコードを書いてください。
4. プレイヤーが二段ジャンプをしたり画面外へ飛んでいってしまう場合、**ブーリアン変数**を作ってユーザーのできる操作に制限を与えます。
5. プレイヤーがプレイエリアの外側に沿って物理的な障壁によって制約を受ける必要がある場合は、プリミティブの**平面**や**立方体**を作成し、それらを拡大縮小して壁を形成します。

このステップを終えると、プレイヤーの動きにはゲームがまともにプレイできるような適切な制限を加えられているはずでず。

ステップを完了としてマーク

## 5. コードを整理して、バックアップをエクスポートする

Q&A (0)

> これで基本的な機能が動作するようになったので、コードを整理してバックアップを作成しましょう。

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

1. 新しく**空**のゲームオブジェクトを作成し、その中にオブジェクトを入れ子構造を作り、ヒエラルキーを**整理**します。
2. コードブロックを新しい void 関数に移動して、Update メソッドをクリーンアップします（例：「MovePlayer()」や「ConstraintPlayerPosition()」など）。
3. コメントを追加してコードを読みやすくします。
4. すべてが正常に動作することを確認するために**テストを行い**、シーンを**保存**します。
5. Assetsフォルダーを右クリックして「**Export Package**」を選んでパッケージをエクスポートし、新しいバージョンを **Backups** フォルダーに保存します。

このステップを終えると、コードには適切にコメントが付けられ、整理され、バックアップができた状態になっているはずです。

ステップを完了としてマーク

## 6. レッスンのまとめ

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

新しい進捗：

- ユーザーの入力に基づいてユーザーが移動できる
- プレイヤーの動きがゲームの要件に合わせて制約されている

新しい概念とスキル：

- C#を使って自分の手でプログラミングをする
- 問題のトラブルシューティングを自分の手で行う

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
