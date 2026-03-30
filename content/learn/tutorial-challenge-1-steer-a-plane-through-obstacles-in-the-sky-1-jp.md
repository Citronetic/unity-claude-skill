[Image: image]

# 課題 1 - 飛行機のプログラミング

Tutorial

Beginner

+10XP

30 mins

0

(89)

Unity Technologies

[Image: 課題 1 - 飛行機のプログラミング]Summary

**課題の概要：**

ドライビングシミュレーションで学んだスキルを使って、障害物の浮かぶ空に飛行機を飛ばしてみましょう。飛行機のピッチを上下に制御するには、上下の矢印からユーザーの入力を取得する必要があります。また、ビューにカメラを保持できるように、カメラを飛行機の横に追従させる必要があります。

**課題の成果：**

- 飛行機が一定の速度で前進する
- 上下の矢印キーを押すと、飛行機の機首が上下に傾く
- カメラは飛行機の横を飛んでいく

Resources

- [Challenge 1 - Starter Files.zip](https://unity-connect-prd.storage.googleapis.com/20210506/913574fa-af65-4d95-abe8-d90282b27a83/Challenge%201%20-%20Starter%20Files.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952074147)

Languages available:

日本語English日本語한국어日本語

## 1. 課題 1 の概要

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
- 「Tutorial Materials（チュートリアルの素材）」セクションから「Challenge 1 Starter Files」を**ダウンロード**し、ダブルクリックして**インポート**します。
- Project ウィンドウで、Assets > Challenge 1 >**Instructions**フォルダーを開き、そこにある「Challenge 1 - Outcome」を最終結果の動画をガイドとして使用して、課題を完成させてください。

ステップを完了としてマーク

## 2. 注意！

Q&A (0)

課題をプロジェクトにインポートするとき、**バグがあることが前提**になっています。

この課題の目的は、以下に挙げるそれらのバグを修正していただくことです。また、ページの下部にはヒントがありますので、行き詰ったときは参考にしてください。

バグが修正できず、プロジェクトから課題ファイルを削除したい場合は、Project ウィンドウで Assets > **Challenge 1**と進み、右クリックし、**Delete**を選択してください。

頑張ってください！

ステップを完了としてマーク

## 3. 飛行機が後退していく

Q&A (0)

- **飛行機を前進させてください。**

ステップを完了としてマーク

## 4. 飛行機の速度が速すぎる

Q&A (0)

- **飛行機の速度を制御できる程度まで遅くしてください。**

ステップを完了としてマーク

## 5. 飛行機が勝手に傾いていく

Q&A (0)

- **ユーザーが上下の矢印キーを押したときだけ、飛行機を傾けるようにします。**

ステップを完了としてマーク

## 6. カメラが飛行機の正面にある

Q&A (0)

- **カメラが飛行機の横にくるように再配置します。**

ステップを完了としてマーク

## 7. カメラが飛行機を追跡しない

Q&A (0)

- **カメラが飛行機を追跡するようにします。**

ステップを完了としてマーク

## 8. ボーナス課題：飛行機のプロペラが回転しない

Q&A (0)

- **飛行機のプロペラを回転させるスクリプトを作成します。**

ステップを完了としてマーク任意のステップ

## 9. ヒント

Q&A (0)

- **飛行機を前進させる***ヒント：Vector3.back はオブジェクトを後方に移動させ、Vector3.forward は前方に移動させます。*
- **飛行機の速度を制御できる程度まで遅くする** *****ヒント：値に Time.deltaTime を掛けると、1 フレームごとの値から 1 秒ごとの値に変換されます*
- **ユーザーが上下の矢印キーを押したときだけ、飛行機を傾けるようにする*****ヒント：PlaneController.cs の Update() 内で、verticalInput に値が割り当てられていますが、Rotate() では使われません。*
- **カメラが飛行機の横にくるように再配置する** *****ヒント：カメラの位置を X = 30、Y = 0、Z = 10 としてみてください。カメラの回転については、X = 0、Y = -90、Z = 0 にしてみてください。*
- **カメラが飛行機を追跡するようにする*****ヒント：FollowPlane.cs では、plane にも offset 変数にも値が割り当てられていません。カメラのインスペクターで plane に値の割り当てを行い、コードで offset = new Vector3(30, 0, 10); と割り当てを行ってください。*
- **ボーナス課題：飛行機のプロペラを回転させる** *****ヒント：飛行機の子オブジェクトとして「Propeller」があります。このオブジェクトに対して新しく「SpinPropellerX.cs」スクリプトを作成し、フレームごとに Z 軸周りに回転させるようにしてみましょう。*

ステップを完了としてマーク任意のステップ

## 10. もっと挑戦してみたい？

Q&A (0)

さらに、簡単 (Easy) なものから高度 (Expert) なものまで、さまざまな難易度のプロトタイプにボーナス機能を追加して、より多くのチャレンジをすることができます。

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

これらの追加ボーナス課題は完全に任意です。もし興味がなく、コースを続けたいだけなら、このステップを完了マークして次のチュートリアルに進むだけでいいのです。

もし興味があれば、[Bonus Feature](https://learn.unity.com/tutorial/bonus-features-1-share-your-work)チュートリアルをチェックしてみてください。そして終わったら、ここに戻って学び続けることを忘れないでくださいね。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
