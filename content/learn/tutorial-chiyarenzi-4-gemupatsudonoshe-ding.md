[Image: image]

# チャレンジ 4：ゲームパッドの設定

Tutorial

Beginner

+0XP

15 mins

0

Unity Technologies

[Image: チャレンジ 4：ゲームパッドの設定]Summary

同じ入力を使用して、ゲームパッドの 2 つ目のバインディング (binding) を設定し、Input Debug System を使用してリアルタイムで Inputs Received を試します。

Languages available:

日本語English日本語日本語

## 1. ゲームパッドの 2 つ目のバインディングの設定

Q&A (0)

Input System の良さは、コードをさらに調整することなく、素早くバインディングを変更できることです。

1.  Primary Input Actions アセットで、Next Vehicle と Reset Vehicle の横にある「+」ボタンをクリックし、バインディングをそれぞれ Button North と Select に設定して、「Next Vehicle」と「Reset Vehicle」のアクションに 2 つ目のバインディングを追加します。

注：バインディングには、任意の入力を設定することができます。ゲームパッドやその他の入力システムをお持ちでない場合は、キーボードの別のキーに入力を設定することができます。

[Image: image]

2. Handbrake にも同様の作業を行い、入力の Binding を「Button South」またはその他の任意の入力に設定します。

[Image: image]

3. Acceleration Action に 2 つの新しいバインディング（1 つは加速用、もう 1 つは減速用）を追加します。1 つ目のバインディングでは、加速を処理するために Path を **Right Trigger**に設定します。2 つ目のバインディングでは、Path を **Left Trigger** に設定し、**Invert Processor** を追加して、Left Trigger が負の値に反転するようにします。

[Image: image]

4. Steering Angle Action に新しいバインディングを追加し、それを **Left Stick / X** binding に設定します。**Save Asset**をクリックします。

[Image: image]

5. **Play**をクリックして、接続したゲームパッドを使ってエディターでテストします。Play モードを終了します。

[Image: image]ステップを完了としてマーク

## 2. デバッグシステムの使用

Q&A (0)

1. Input Debug ウィンドウ (**Window > Analysis > Input Debugger**) を開きます。ウィンドウで、Keyboard（ゲームパッドがあればそれも）を選択します。このウィンドウを開くと、Device の入力を見ることができます。これはデバッグに役立ちます。

[Image: image][Image: image]ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
