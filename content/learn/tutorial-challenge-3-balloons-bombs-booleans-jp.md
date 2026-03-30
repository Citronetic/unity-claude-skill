[Image: image]

# 課題 3 - バルーン、ボム、ブーリアン

Tutorial

Beginner

+0XP

60 mins

3

(151)

Unity Technologies

[Image: 課題 3 - バルーン、ボム、ブーリアン]Summary

**課題の概要：**

物理、背景のスクロール、特殊効果の知識を適用して、爆発物を避けながらトークンを拾い、町中を浮遊するバルーンを作成します。このプロジェクトはエラーが多いので、多くのトラブルシューティングを行う必要があります。

**課題の成果物：**

- プレイヤーがスペースバーを押すと、バルーンが上に浮かぶ
- 背景はシームレスにループし、バルーンの動きをシミュレートする
- ボムとお金を表すトークンがタイマーでランダムに出現する
- お金に当たるとパーティクルと効果音が出る
- ボムとぶつかると爆発して背景が止まる

Resources

- [Challenge 3 - Asset Store](https://assetstore.unity.com/packages/templates/tutorials/create-with-code-challenge-3-balloons-bombs-and-booleans-146045)
- [Challenge 3 - Direct Download.zip](https://unity-connect-prd.storage.googleapis.com/20191004/5f8592bf-25d8-4f30-8911-fc4d037fb9ed/Challenge%203%20-%20Direct%20Download.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952107685)

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. 概要

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

1. **Prototype 3** プロジェクトを開く
2. 「コースの素材」セクションから「Challenge 3 Starter Files」を**ダウンロード**し、ダブルクリックして**インポート**します。
3. Project ウィンドウから Assets > Challenge 3 > **Instructions** フォルダーに移動し、「Challenge 3 - Instructions」と成果物の説明動画をガイドとして使用して、課題を完了させます。

ステップを完了としてマーク

## 2. プレイヤーがバルーンを操作できない！

Q&A (0)

- プレイヤーがスペースキーを押さえている間、バルーンが浮かぶようにします。

ステップを完了としてマーク

## 3. ゲームオーバーになったときしか背景が動かない！

Q&A (0)

- 背景がスタートしたときから動いていて、ゲームオーバーになったときは止まるようにします。

ステップを完了としてマーク

## 4. オブジェクトが全く出現しない！

Q&A (0)

- ボムまたはお金のオブジェクトが数秒おきに出現するようにします。

ステップを完了としてマーク

## 5. バルーンの横に花火が出てくる！

Q&A (0)

- バルーンのある位置に花火が出てくるようにします。

ステップを完了としてマーク

## 6. 背景が正しくループしていない！

Q&A (0)

- 背景がシームレスにループするようにします。

ステップを完了としてマーク

## 7. ボーナス課題：バルーンがものすごく高くまで浮かぶ！

Q&A (0)

- プレイヤーのバルーンがものすごく高くまで浮かばないようにします。

ステップを完了としてマーク

## 8. ボーナス課題：バルーンが地面の下まで落ちていってしまう！

Q&A (0)

- バルーンが地面で弾むようにして、画面の下に出て行ってしまわないようにします。地面で弾んだときに効果音が鳴るようにするとより良いですね！

ステップを完了としてマーク任意のステップ

## 9. ヒント

Q&A (0)

- **プレイヤーがスペースキーを押さえている間、バルーンが浮き上がらせる***ヒント - プレイヤーの RigidBody 変数について「NullReferenceExcepton」エラーが発生する状態になっています。GetComponent<> メソッドを使って変数が Start() で割り当てられるようにします。*
- **背景がゲーム開始時に動いていて、ゲーム終了時には停止するようにする***ヒント - MoveLeftX.cs では、オブジェクトはゲームが終わっていない場合にのみ左に移動する必要があります。*
- **数秒ごとに爆弾やお金のオブジェクトを出現させる***ヒント - 「Trying to Invoke method: SpawnManagerX.PrawnsObject couldn't be called」というエラーが出てきます。これはスペルの問題です。*
- **バルーンの位置で花火を出現させる***ヒント - 花火のパーティクルはプレイヤー（バルーン）の子オブジェクトですが、その位置はプレイヤーと同じ位置に設定されていなければなりません。*
- **背景をシームレスにループさせる***ヒント - repeatWidth 変数は、背景の幅の半分にしましょう。高さの半分ではありません。*
- **ボーナス課題 - バルーンがものすごく高く浮かんでいかないようにする***ヒント - バルーンが十分に低いかをチェックするブール値（名前は例えば「isLowEnough」）を追加し、そのブール値が true の場合にのみ、プレイヤーが上向きの力を加えることができるようにします。*
- **ボーナス課題 - バルーンが画面の下に出ていかないようにするために地面で弾むようにして、弾んだ時に効果音も鳴らすようにする***ヒント - バルーンが地面のオブジェクトと衝突するかどうかをテストする方法を見つけて、衝突を検出したら上向きの力を加えるようにします。*

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
