[Image: image]

# レッスン 1.3 - ハイスピードチェイス

Tutorial

Beginner

+10XP

50 mins

0

(99)

Unity Technologies

[Image: レッスン 1.3 - ハイスピードチェイス]Summary

**概要：**

運転時は道路から目を離さないようにしましょう！ ー このレッスンでは、カメラ用の新しい C# スクリプトのコードを書きます。これにより、カメラは道路を前に進んで車を追跡し、プレイヤーが適切な視点でシーンを見られるようにします。これを行うには、プログラミングで非常に重要な概念である変数を使用する必要があります。

**プロジェクトの成果：**

カメラはシーンの道路を走る車を追跡し、プレイヤーがゲームの状況を確認できるようにします。

Languages available:

日本語English日本語한국어日本語

## 1. 車に速度を表す変数を追加する

Q&A (0)

> *車のスピードを変更し、インスペクターからアクセスできるようにする簡単な方法が必要です。これを実現するためには、変数と呼ばれるものが必要です。*

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

1. PlayerController.cs スクリプトにおいて、クラスの先頭に***public float speed = 5.0f;*** を追加します。
2. Translate メソッドの **speed 値**を **speed 変数**に置き換えてテストします。
3. スクリプトで**保存**してから、**インスペクター**で speed の値を編集して希望の速度にします。

[Image: image]ステップを完了としてマーク

## 2. カメラ用にスクリプトを新規作成する

Q&A (0)

> *現在、カメラは 1 つの位置に固定されて動かなくなっています。プレイヤーに追従させたい場合は、カメラ用に新しいスクリプトを作成する必要があります。*

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

1. FollowPlayer という名前の **C# スクリプト**を新規に作成し、**カメラ**にアタッチします。
2. スクリプトの先頭に ***public GameObject player;*** を追加します。
3. **Main Camera** を選択して、インスペクターで**空になっている player 変数**に、プレイヤーのオブジェクトを**ドラッグ**します。
4. **Update()** で、カメラの位置をプレイヤーの位置に代入してテストします。

[Image: image]ステップを完了としてマーク

## 3. カメラの位置にオフセットを追加する

Q&A (0)

> *プレイヤーがゲーム画面をきちんと見られるように、カメラの位置を車の上に移動する必要があります。*

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

1. Update メソッドの行に ***+ new Vector3(0, 5, -7)***を追加し、テストします

[Image: image]ステップを完了としてマーク

## 4. オフセットを Vector3 変数にする

Q&A (0)

> *カメラの位置は修正されましたが、後から変更したい場合もあります。そこで、オフセットにアクセスする簡単な方法が必要です。*

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

1. **FollowPlayer.cs** の先頭で、***private Vector3 offset;*** と宣言します。
2. 新しい ***Vector3()***のコードをコピーして、その変数に**代入**します。
3. コピー元のコードを ***offset***変数に**置き換えます**。
4. **テスト**して**保存**します。

[Image: image]ステップを完了としてマーク

## 5. LateUpdate でカメラをスムーズに移動させる

Q&A (0)

> *車が道路を走っているときに、カメラがちょっとカクカクしていることにお気づきかもしれませんが、これは直しておきましょう。*

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

1. プロトタイプをテストして、車の走行に伴うカメラのジッターに注目します。
2. FollowPlayer.cs 内で ***Update()***を***LateUpdate()*** に置き換えます。
3. **保存**して、カメラのカクツキが少なくなるかどうか**テスト**します。

[Image: image]ステップを完了としてマーク

## 6. 再生モード時のエディターの色を変更する

Q&A (0)

> *変数を作成および編集するときに、再生モードで誤って変更を加えることのないようにしておきましょう。*

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

1. 画面上のメニューから、**Windows**の場合は Edit > Preferences、**Mac**の場合は****Unity > Preferences と選択します。
2. 左側のメニューの **Colors**を選択し、「**Playmode tint」**を編集して、わずかに色がつくようにします。
3. プロジェクトを**再生**してテストし、環境設定を閉じます。

ステップを完了としてマーク

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

- カメラが設定されたオフセット距離で車を追跡する

新しい概念とスキル

- 変数
- データ型
- アクセス修飾子
- 変数の宣言と初期化

次のレッスン

- 次のレッスンでは、仕上げとして、車を制御してシーン内で運転できるようにするためのコードを追加します。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
