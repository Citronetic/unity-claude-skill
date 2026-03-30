[Image: image]

# 課題 4 - サッカーのスクリプティング

Tutorial

Beginner

+0XP

60 mins

4

(88)

Unity Technologies

[Image: 課題 4 - サッカーのスクリプティング]Summary

**課題の概要：**

このユニットで作った相撲バトルのプロトタイプで学んだスキルを、サッカー場というまったく異なる文脈で使用します。プロトタイプと同じように、カメラを回転させて前方に力を加えることでボールをコントロールしますが、ボールを端から叩き落とすのではなく、自陣のネットに入ってこようとするボールを、逆に敵陣のネットに叩き込んでやることが目標です。相撲と同じように、ラウンドを重ねるごとに敵のボールが増え、防御力が試されます。ところで、このプロジェクトは今のところほとんど何も機能していません。それを正常に動作させるのがあなたの仕事です。

**課題の成果物：**

- 自陣のネットに向かって敵が移動してくる。プレイヤーはそれらをはじき返して逸らすことができる
- プレイヤーを強化するパワーアップがある。パワーアップは5秒後に消滅する
- 敵のボールをすべて敵陣のネットに叩き込むと、ボールが1個増えた新たな敵のボールの集団が出現します。

Resources

- [Challenge 4 - Asset Store](https://assetstore.unity.com/packages/templates/tutorials/create-with-code-challenge-4-soccer-scripting-146046)
- [Challenge 4 - Direct Download.zip](https://unity-connect-prd.storage.googleapis.com/20191121/50333e6f-03cb-4143-a9ab-886dd6411f3a/Challenge%204%20-%20Direct%20Download.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952147144)

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

1. **Prototype 4** プロジェクトを開く
2. 「コースの素材」セクションから「Challenge 4 Starter Files」を**ダウンロード**し、ダブルクリックして**インポート**します。
3. *Project* ウィンドウから、*Assets > Challenge 4 > **Instructions***フォルダーにアクセスし、そこにあるリソースをこの課題を完了するためにリソースとして使用します。

ステップを完了としてマーク

## 2. 敵にぶつかると自分の方に飛んでくる！

Q&A (0)

- 敵にぶつかったら敵が向こうに飛んでいくようにしましょう。

ステップを完了としてマーク

## 3. プレイヤーがパワーアップアイテムを取ったらすぐに新しい敵の集団が出現する！

Q&A (0)

- 敵のボールが全部なくなってから新しい敵の集団を出現させるようにします。

ステップを完了としてマーク

## 4. いつまでもパワーアップしっぱなし！

Q&A (0)

- パワーアップは一定時間だけ持続し、その時間が過ぎたら消えるようにします。

ステップを完了としてマーク

## 5. いつまでも敵が 2 体ずつしか出現しない！

Q&A (0)

- 敵の集団は、最初は 1 体、次は 2 体、その次は 3 体...というように、集団が出現するごとに 1 体ずつ出現数が増えるようにします。

ステップを完了としてマーク

## 6. 敵のボールがどこにも動いていかない！

Q&A (0)

- 敵のボールが「Player Goal」オブジェクトに向かって動いていくようにします。

ステップを完了としてマーク

## 7. ボーナス課題：プレイヤーにスピードアップ機能をつけよう！

Q&A (0)

- プレイヤーがスペースキーを押したときにスピードアップするようにしましょう。また、スピードアップの時にパーティクルエフェクトも発生させてみましょう。

ステップを完了としてマーク

## 8. ボーナス課題：敵がずっと同じ強さのまま！

Q&A (0)

- 敵の集団が出現するたびに、敵のスピードを少しずつ上げていくようにしてみましょう。

ステップを完了としてマーク任意のステップ

## 9. ヒント

Q&A (0)

- **敵にぶつかったら向こうに飛んで行くようにする***ヒント - PlayerControllerX.cs で、プレイヤーから離れる方向の Vector を取得するには、「敵の位置」から「プレイヤーの位置」を引きます。逆ではありません。*
- **敵のボールが全部なくなってから新しい敵の集団を出現させる***ヒント - SpawnManagerX.cs で enemyCount 変数が正しく設定されていることを確認してください。*
- **パワーアップが一定時間だけ持続し、その時間が過ぎたら消えるようにする***ヒント - PlayerControllerX.cs の PowerupCoolDown コルーチンのコードは正しいようですが、このコルーチンは StartCoroutine() メソッドで実際に呼び出されない状態になっています。*
- **最初は 1 体、次は 2 体、その次は 3 体...というように、敵の集団が出現するごとに 1 体ずつ出現数を増やす***ヒント - SpawnManagerX.cs の敵を出現させる for ループ で enemiesToSpawn パラメータを使用します。*
- **敵のボールが「Player Goal」オブジェクトに向かって動いていくようにする***ヒント - EnemyX.cs で「NullReferenceException: Object reference not set to an instance of an object」というエラーが出る状態になっています。playerGoal オブジェクトが割り当てられていないようです。*
- **ボーナス課題 - プレイヤーがスペースキーを押したときスピードアップするようにして、スピードアップの時にパーティクルエフェクトを発生させる***ヒント - PlayerController で、スペースキーが押されたとき「Impulse」で力を加える単純な if ステートメントを追加します。パーティクルエフェクトを追加するには、最初に Focal Point の子オブジェクトとしてアタッチします。*
- **ボーナス - 敵の集団が出現するたびに、敵のスピードを少しずつ上げていくようにする***ヒント - SpawnManagerX.cs で敵の速度を管理し、増加させます。次に EnemyX.cs で、その速度変数を参照して Start() で設定します。*

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
