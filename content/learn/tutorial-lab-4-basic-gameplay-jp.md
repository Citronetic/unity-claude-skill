[Image: image]

# ラボ 4 - 基本的なゲームプレイ

Tutorial

Beginner

+0XP

90 mins

4

(74)

Unity Technologies

[Image: ラボ 4 - 基本的なゲームプレイ]Summary

**概要：**

このラボでは、基本的なゲームプレイを作ってプロジェクトに命を吹き込むために、あらゆる非プレイヤーオブジェクトを使って作業します。投射物、拾えるアイテム、あるいは敵に基本的な動きと衝突検出を与え、プレハブにし、スポーンマネージャーによってランダムにスポーンさせます。このラボが終わる頃には、ゲームのコア機能の形が見えてくることでしょう。

**プロジェクトの成果物：**

非プレイヤーオブジェクトは、基本的な動きを持たされた状態でシーン内の適切な場所に出現します。オブジェクトが互いに衝突すると、オブジェクトは意図した通りに反応し、バウンドしたり、破壊されたりします。

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

## 2. オブジェクトに基本的な動きを与える

Q&A (0)

> シーンにオブジェクトを出現させる前に、オブジェクトを思い通りに動かせるようにしておく必要があります。

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

1. 必要な場合は、**Rigidbody**コンポーネントを非プレイヤーオブジェクトに追加してください。
2. ゲームプレイ中にインスタンス化されるオブジェクト用の**新しいスクリプト**を作成し、それらをそれぞれのオブジェクトにアタッチします（投射物や拾えるアイテムを含む）。
3. オブジェクトの**基本的な動き**をプログラムし、それらが動作するかどうかをテストします。

このステップが終わる頃には、すべてのオブジェクトについてゲーム内での基本的な動き方が決まっているはずです。

ステップを完了としてマーク

## 3. 画面外に出たオブジェクトを消去する

Q&A (0)

> ヒエラルキーが乱雑になりすぎないように、これらのオブジェクトが画面から離れたときに消去されるようにしましょう。

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

1. 新しいスクリプトを作成するか、既存のスクリプトにコードを追加して、オブジェクトが画面から離れたら確実に消去されるようにします。

このステップを終えた段階で、ゲームと関係ないところに行ったオブジェクトは消去されるようにしておきます。

ステップを完了としてマーク

## 4. オブジェクトの衝突を取り扱う

Q&A (0)

> すべてのオブジェクトが動きだした今、お互いに衝突することも起こり得ます。オブジェクト同士がぶつかったときに何が起きるかプログラムする必要があります。

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

1. 必要な場合は、オブジェクトの **Rigidbody の質量（mass）**を編集します。
2. 必要な場合は、オブジェクトが衝突したときの振る舞いを変更するために、オブジェクトに適用する新しい**物理マテリアル**を作成します。
3. オブジェクトに**タグ**を追加して、どのオブジェクトがどのオブジェクトと衝突しているかを正確に検出できるようにします。
4. ***OnCollisionEnter()***（Rigidbody の衝突の場合）または ***OnTriggerEnter()***（トリガーベースの衝突の場合）を使用して、特定の衝突が発生したときにオブジェクトを破棄したり、メッセージをコンソールに記録して、何が起きたかがわかるようにします。

このステップを終えた段階で、オブジェクトが衝突したとき、破棄される、弾む、何もしないなどの振る舞いが定まっている状態にしてください。

ステップを完了としてマーク

## 5. オブジェクトをプレハブにする

Q&A (0)

> ここまでで、オブジェクトが必要な振る舞いの基本的な部分が出来上がりました。ゲームプレイ中にインスタンス化する場合は、プレハブにする必要があります。

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

1. Assets ディレクトリに、「Prefabs」という名前の新しい**フォルダー**を作成します。
2. 各オブジェクトを**ドラッグ**して**新しいプレハブ**を作成します。
3. すべてのオブジェクトがプレハブになったら、シーンから**削除**します。
4. ゲーム実行中に Prefabs フォルダからシーンにドラッグしてオブジェクトの動作を**テスト**します。

このステップが終わると、ゲームプレイ中にスポーンされるすべてのオブジェクトはプレハブになっており、シーンにはもう存在しないはずです。

ステップを完了としてマーク

## 6. SpawnManager にプレハブを出現させる

Q&A (0)

> これですべてのプレハブが設定できたので、スポーンマネージャーを作成して、間隔をおいて、必要に応じてランダムな場所に出現させることができます。

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

1. 空の「Spawn Manager」オブジェクトを作成し、新しい SpawnManager.cs スクリプトをアタッチします。
2. プレハブ用に個別の **GameObject または GameObject 配列**変数を作成し、インスペクターで代入します。
3. ***Instantiate()、Random.Range()、***および ***InvokeRepeating()***メソッドを使用して、間隔をおいてオブジェクトを生成します（ランダムなオブジェクト、ランダムな場所、またはその両方）。
4. Assets フォルダーを右クリックして「**Export Package**」し、新しいバージョンを **Backups**フォルダーに保存します。

このステップが終わると、オブジェクトが適切な場所から自動的にスポーンされるようになっているはずです。

ステップを完了としてマーク

## 7. まとめ

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

新しい機能：

- 非プレイヤーオブジェクトのプレハブに基本的な動きを持たせる
- 画面外に行ったオブジェクトが消去される
- オブジェクト間の衝突が適切に処理される
- 一定の時間間隔で適切な場所にオブジェクトが生成される。

新しい概念とスキル：

- プロジェクトの基本的なゲームプレイを独力で作成する

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
