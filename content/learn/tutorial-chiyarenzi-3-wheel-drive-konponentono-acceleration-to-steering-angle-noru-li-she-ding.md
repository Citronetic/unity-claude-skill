[Image: image]

# チャレンジ 3：Wheel Drive コンポーネントの Acceleration と Steering Angle の入力設定

Tutorial

Beginner

+0XP

20 mins

0

Unity Technologies

[Image: チャレンジ 3：Wheel Drive コンポーネントの Acceleration と Steering Angle の入力設定]Summary

本チュートリアルでは、Wheel Drive コンポーネントの Acceleration と Steering の入力を設定します。

Languages available:

日本語English日本語日本語

## 1. Wheel Drive コンポーネントの Control の入力設定

Q&A (0)

1. Primary Input Action のアセットに、「Acceleration」という新しい Action を追加し、Action type を **Value**、Control Type を**Axis**に設定します。

[Image: image]

2. キー操作による軸入力を制御するには、「+」ボタンを使って 1D Axis Composite を追加し、負の binding を「S」キーに、正の binding を「W」キーに設定します。

[Image: image]

3. 新しい Action「Steering Angle」を追加し、Action Type を **Value**、Control Type を **Axis** に設定します。

[Image: image]

4. キー操作による軸入力を制御するには、「＋」ボタンを使って 1D axis composite を追加し、負の Binding を「A」キーに、正の Binding を「D」キーに設定します。

[Image: image]

5. Code エディターで Wheel Drive スクリプトを開きます。

[Image: image]

6. 以下の変数宣言を作成します：

[Image: image]

7. Awake メソッドのボディに以下のロジックを追加します：

[Image: image]

8. 以下のように表示される GetAngleInput と GetTorqueInput という 2 つの新しいメソッドを作成します：

[Image: image]

9. OnEnable メソッドと OnDisable メソッドに以下のメソッドの呼び出しを追加します：

[Image: image]

10. オリジナルの角度 (angle) とトルク (torque) の入力ロジックを Update メソッドから削除します：

[Image: image]

11. Play モードでは、WASD キーを使って Acceleration と Steering Angle の入力をテストします。

[Image: image]ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
