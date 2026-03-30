[Image: image]

# チェックポイント

Tutorial

Beginner

+0XP

60 mins

0

(40)

Unity Technologies

[Image: チェックポイント]Summary

チェックポイントは、ほとんどの近代的なゲームの一般的な要素です。これにより、プレイヤーは自分の進行状況を保存することができるので、もし死んでしまった場合、そのチェックポイントに戻って再生することができます。

Languages available:

日本語English日本語简体中文日本語

## 1. チェックポイントを探す

Q&A (0)

3D ゲームキット ライトには **Checkpoint**プレハブがあります。それを見つけるには、**3D GamekitLite > Prefabs > Utilities > Checkpoint** を選択してください。

[Image: image]

**Checkpoint**は見えませんが、**エレン**はコライダーエリア（緑色のワイヤーフレームの箱）に入ることでチェックポイントを記録できます。プレイヤーがチェックポイントを通過したことを知っていて、どこでリスポーンするかを知っていることを確実にするために、**エレン**がチェックポイントに触れたことをゲーム内で視覚的な物で説明する必要があります。

この例では、シーンにもう一つ **Crystal** を追加して、**エレン**がチェックポイントを通過したときに**Crystal**が起動するように設定します。そのためには、**Crystal**と **Checkpoint**を配置し、エレンが **Checkpoint**に触れたときに **Crystal**にゲームコマンドを送信するように **Checkpoint**を設定します。

**Checkpoint**を追加するには以下の様に行います。

- **Checkpoint** プレハブをシーンにドラッグ＆ドロップして配置し、**エレン**がコライダーに触れるようにします。
- サイズを変更して、入れたい部分だけをカバーするようにします。

[Image: image]

**インスペクター**ウィンドウで、**Layer**を **Checkpoint** に設定します。

[Image: image]

**3D GamekitLite > Prefabs > Interactables** に移動し、**Crystal** プレハブをシーンにドラッグします。チェックポイントエリアの近くに置き、名前を **CheckpointCrystal** に変更します。

[Image: image]

- 2つのゲームオブジェクトをリンクするには、**Checkpoint** を選択します。
- **Add Component** を選択します。
- **Send On Trigger Event**を追加します（検索ボックスに入力して検索します）。

以下の設定を **Send On Trigger Event**コンポーネントに適用します。

- **Interaction Type**を**Activate**に設定
- ゲームオブジェクトの選択で、**Interactive Object**に**CheckpointCrystal**を設定
- **One Shot**をチェックする(有効化する)
- **Layers**を **Player**に設定します。これにより、プレイキャラクター（**エレン**）がチェックポイントの範囲内で衝突するようになります。

[Image: image]

それらの間の接続を確認するには、**CheckpointCrystal**を選択し、インスペクタウィンドウを表示して、**Game Command Receiver** の Senders リストに**Checkpoint** があることを確認します。

[Image: image]

チェックポイントをテストするには、**Play**を押して、**エレン**を**チェックポイント**の中に移動させましょう。これで **CheckpointCrystal** が起動するはずです。次に、**エレン**が死んだらどうなるかテストしてみましょう。正しく設定されていれば、**エレン**はチェックポイントの中央にリスポーンします。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
