[Image: image]

# 課題 1 - 飛行機のプログラミング

Tutorial

Beginner

+0XP

30 mins

18

(180)

Unity Technologies

[Image: 課題 1 - 飛行機のプログラミング]Summary

**課題の概要：**

ドライビングシミュレーションで学んだスキルを使って、障害物の浮かぶ空に飛行機を飛ばしてみましょう。飛行機のピッチを上下に制御するには、上下の矢印からユーザーの入力を取得する必要があります。また、ビューにカメラを保持できるように、カメラを飛行機の横に追従させる必要があります。

**課題の成果物：**

- 飛行機が一定の速度で前進する
- 上下の矢印キーを押すと、飛行機の機首が上下に傾く
- カメラは飛行機の横を飛んでいく

Resources

- [Challenge 1 - Asset Store](https://assetstore.unity.com/packages/slug/146043)
- [Challenge 1 - Direct Download.zip](https://unity-connect-prd.storage.googleapis.com/20191004/ed0d2910-f0c8-4962-9302-1104f0f2fe10/Challenge%201%20-%20Direct%20Download.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952074733)

Languages available:

日本語EnglishEspañol日本語日本語

## 1. 課題の概要

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

## 2. 課題 1 の概要

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

- **Prototype 1**プロジェクトを開きます。
- 「チュートリアルの素材」セクションから「Challenge 1 Starter Files」を**ダウンロード**し、ダブルクリックして**インポート**します。
- Project ウィンドウで、Assets > Challenge 1 > Instructions フォルダーを開き、そこにある「Challenge 1 - Instructions」と最終結果の動画をガイドとして使用して、課題を完成させてください。

ステップを完了としてマーク

## 3. 飛行機が後退していく！

Q&A (0)

- **飛行機を前進させてください。**

ステップを完了としてマーク

## 4. 飛行機の速度が速すぎる！

Q&A (0)

- **飛行機の速度を制御できる程度まで遅くしてください。**

ステップを完了としてマーク

## 5. 飛行機が勝手に傾いていく！

Q&A (0)

- **ユーザーが上下の矢印キーを押したときだけ、飛行機を傾けるようにします。**

ステップを完了としてマーク

## 6. カメラが飛行機の正面にある！

Q&A (0)

- **カメラが飛行機の横にくるように再配置します。**

ステップを完了としてマーク

## 7. カメラが飛行機を追跡しない！

Q&A (0)

- **カメラが飛行機を追跡するようにします。**

ステップを完了としてマーク

## 8. ボーナス課題：飛行機のプロペラが回転しない！

Q&A (0)

- **飛行機のプロペラを回転させるスクリプトを作成します。**

ステップを完了としてマーク任意のステップ

## 9. ヒント

Q&A (0)

- **飛行機を前進させる***ヒント：Vector3.back はオブジェクトを後方に移動させ、Vector3.forward は前方に移動させます。*
- **飛行機の速度を制御できる程度まで遅くする*****ヒント：値に Time.deltaTime を掛けると、1 フレームごとの値から 1 秒ごとの値に変換されます*
- **ユーザーが上下の矢印キーを押したときだけ、飛行機を傾けるようにする*****ヒント：PlaneController.cs の Update() で、verticalInput に値が割り当てられていますが、Rotate() では使われません。*
- **カメラが飛行機の横にくるように再配置する*****ヒント：カメラの位置を X = 30、Y = 0、Z = 10 としてみてください。カメラの回転については、X = 0、Y = -90、Z = 0 にしてみてください。*
- **カメラが飛行機を追跡するようにする*****ヒント：FollowPlane.cs では、plane にも offset 変数にも値が割り当てられていません。カメラのインスペクターで plane に値の割り当てを行い、コードで offset = new Vector3(30, 0, 10); と割り当てを行ってください。*
- **ボーナス課題：飛行機のプロペラを回転させるスクリプトを作成する*****ヒント：飛行機の子オブジェクトとして「Propeller」があります。このオブジェクトに対して新しく「SpinPropellerX.cs」を作成し、フレームごとに Z 軸周りに回転させるようにしてみましょう。*

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
