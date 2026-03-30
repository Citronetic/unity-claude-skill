[Image: image]

# Challenge 3: Configure the Wheel Drive Component’s Acceleration and Steering Angle Inputs

Tutorial

Beginner

+0XP

20 mins

7

(171)

Unity Technologies

[Image: Challenge 3: Configure the Wheel Drive Component’s Acceleration and Steering Angle Inputs]Summary

In this tutorial you will configure the Wheel Drive Component's Acceleration and Steering Inputs.

Languages available:

日本語English日本語日本語

## 1. Wheel Drive Component Control Inputs

Q&A (0)

1. In the Primary Input Action’s Asset, add a new Action called “Acceleration” and set the Action type to **Value**and Control Type to **Axis.**

[Image: image]

2. To control the axis input from the key presses use the “+” button to add a 1D axis composite and set the negative binding to the “S” key and the positive binding to the “W" key.

[Image: image]

3. Add a new Action called “Steering Angle” and set the Action type to **Value**and Control Type to **Axis.**

[Image: image]

4. To control the axis input from the key presses use the “+” button to add a 1D axis composite and set the negative binding to the “A” key and the positive binding to the “D” key.

[Image: image]

5. Open the Wheel Drive script in your code editor.

[Image: image]

6. Create the following variable declarations:

[Image: image]

7. Add the following logic to the Awake method body:

[Image: image]

8. Create two new methods called GetAngleInput and GetTorqueInput that appear as follows:

[Image: image]

9. Add the following method calls to the OnEnable and OnDisable methods:

[Image: image]

10. Remove the original angle and torque input logic from the Update method:

[Image: image]

11. Go into Play mode and test out the Acceleration and Steering Angle inputs using the WASD keys.

[Image: image]ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
