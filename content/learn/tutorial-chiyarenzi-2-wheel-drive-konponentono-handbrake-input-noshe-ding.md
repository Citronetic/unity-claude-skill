[Image: image]

# チャレンジ 2：Wheel Drive コンポーネントの Handbrake Input の設定

Tutorial

Beginner

+0XP

15 mins

0

Unity Technologies

[Image: チャレンジ 2：Wheel Drive コンポーネントの Handbrake Input の設定]Summary

本チュートリアルでは、1D 軸を使って1D 軸の動きを制御するために、Input System を設定します。 さらに、Button アクションと Modifier アクションを使用するために、Input System と C# スクリプティングを設定します。

Languages available:

日本語English日本語日本語

## 1. Wheel Drive コンポーネントの Handbrake Input の操作

Q&A (0)

1. Primary Input Action のアセットに、「Handbrake」という新しい Action を追加し、Binding をキーボードの「X」キーに設定します。

[Image: image]

2. Input Action Asset の上部にある **Save Asset**をクリックします。

[Image: image]

3. コードエディターで Family Car の Wheel Drive スクリプトを開きます：

[Image: image]

4. スクリプトの先頭に Input System の名前空間を追加します：

[Image: image]

5. 以下の変数宣言を作成します：

[Image: image]

6. Awake メソッドを作成し、以下のロジックを Awake メソッドボディに追加します：

[Image: image]

7. 以下のように表示される GetHandBrakeInput という新しいメソッドを作成します：

[Image: image]

8. 以下の OnEnable メソッドと OnDisable メソッドをスクリプトに追加します。

[Image: image]

9. Update メソッドからオリジナルの handBrake input のロジックを削除します：

[Image: image]

10. エディターに戻り、Primary Input Actions Reference を各 Vehicles の WheelDrive コンポーネントに追加します：

[Image: image]

11. Play モードに入り、**X**キーを押して先ほど実装した handbrake (ハンドブレーキ) 入力のテストを行います。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
