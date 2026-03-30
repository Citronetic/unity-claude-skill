[Image: image]

# 課題 5 - 食べ物クリックゲーム

Tutorial

Beginner

+0XP

60 mins

4

(94)

Unity Technologies

[Image: 課題 5 - 食べ物クリックゲーム]Summary

**課題の概要：**

この課題では、ここまで学んだユーザーインターフェースのスキルを使って、ドクロをクリックしないようにしつつ、グリッド上に現れる食べ物をすべてクリックしていくモグラたたきのようなゲームを作ります。ボタン、マウスクリック、スコア追跡、再スタートの流れ、難易度設定についてデバッグを行い、この課題を完成させてください。

課題の成果物：

- すべてのボタンのテキストが適切な配置になっている。
- 難易度を選択すると、それに応じてオブジェクトの出現率が変化する。
- 食べ物のオブジェクトはクリックして破壊でき、左上のスコア表示が更新される。
- ゲームオーバーになると再スタートボタンが表示され、それをクリックすると再プレイが可能になる。

Resources

- [Challenge 5 - Asset Store](https://assetstore.unity.com/packages/slug/146047)
- [Challenge 5 - Direct Download.zip](https://unity-connect-prd.storage.googleapis.com/20191004/3ebc2b05-eb0a-44b5-81f1-ff992cddbef6/Challenge%205%20-%20Direct%20Download.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952163373)

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

1. **Prototype 5**プロジェクトを開きます。
2. 「コースの素材」セクションから「Challenge 5 Starter Files」を**ダウンロード**し、ダブルクリックしてインポートします。
3. Project ウィンドウで、*Assets > Challenge 5 > **Instructions***フォルダーの「Challenge 5 - Outcome」動画をガイドとして使用して、課題を完了させます。

ステップを完了としてマーク

## 2. 難易度ボタンの見た目が乱雑！

Q&A (0)

- ボタンのテキストの水平位置と垂直位置を共に中央にします。

ステップを完了としてマーク

## 3. 食べ物が出現してから消えるまでが早すぎる！

Q&A (0)

- 食べ物はマウスカーソルが触れた瞬間に消えるようになっていますが、これはプレイヤーがクリックしたときだけ消えるようにします。

ステップを完了としてマーク

## 4. スコアが「score」という単語で置き換えられる！

Q&A (0)

- 「Score:」の後に得点の値をつないで「Score: <得点>」のように表示する形式にします。

ステップを完了としてマーク

## 5. ゲーム終了後、再スタートできない！

Q&A (0)

- 再スタートボタンをゲームオーバー画面に表示するようにします。

ステップを完了としてマーク

## 6. どの難易度ボタンを押しても難易度が変わらない！

Q&A (0)

- spawnRate の値がどのボタンを押しても食べ物を速く表示するような値になっています。Easy をクリックしたら spawnRate の値はもっと食べ物をゆっくり表示する値にして、Hard をクリックしたらより速く表示する値にするように設定します。

ステップを完了としてマーク

## 7. ボーナス課題：いつまでもゲームが続く！

Q&A (0)

- 「Time: <数値>」と表示する部分を作り、60 から整数でカウントダウンして（59、58、57、...のように）、0 になったらゲームオーバーの処理を行うようにしてみましょう。

ステップを完了としてマーク任意のステップ

## 8. ヒント

Q&A (0)

- **ボタンのテキストの水平位置と垂直位置を共に中央にする***ヒント - Hierarchy 内のボタンオブジェクトを展開すると、その中に「Text」オブジェクトが表示されます。*
- **食べ物はマウスカーソルが触れた瞬間に消えるようになっているが、これをプレイヤーがクリックしたときだけ消えるようにする***ヒント - OnMouseEnter() は、マウスがオブジェクトのコライダーに入ったタイミングを検出します。OnMouseDown() は、マウスがオブジェクトのコライダーをクリックしたタイミングを検出します。*
- **「Score:」の後に得点の値をつないで「Score: <得点>」のように表示する形式にする***ヒント - スコアのテキストを設定するとき、「Score: 」 と実際のスコアの値を連結します。*
- **再スタートボタンをゲームオーバー画面に表示するようにします。***ヒント - GameOver() メソッドで、再スタートボタンが再度有効化されていることを確認してください。*
- **spawnRate の値が常に食べ物を非常に速く表示するような値になるので、Easy をクリックしたらもっと食べ物をゆっくり表示する値に、Hard をクリックしたらより速く表示する値に設定する***ヒント - ボタンのスクリプトから Game Manager のスクリプトに渡される情報（またはパラメーター）がありません。*
- **ボーナス課題： 「Time: <数値>」と表示する部分を作り、60 から整数でカウントダウンして（59、58、57、...のように）、0 になったらゲームオーバーの処理を行うようにする** *****ヒント - 「Unity count down timer C#」でググってみてください。「Time.deltaTime」を引いていく方法や、Mathf.Round()メソッドを使って整数部分のみを表示するような方法が見つかると思います。*

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
