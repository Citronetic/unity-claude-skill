[Image: image]

# Challenge 2: Configure the Wheel Drive Component’s Handbrake Input

Tutorial

Beginner

+0XP

15 mins

4

(200)

Unity Technologies

[Image: Challenge 2: Configure the Wheel Drive Component’s Handbrake Input]Summary

In this tutorial you will setup the Input System to use the 1D axis to control a 1D axis movement.  In addition you will setup the Input System and C# scripting to use the Button and Modifier actions.

Languages available:

EnglishEnglish日本語English

## 1. Working with the Wheel Drive Component's Handbrake Input

Q&A (0)

1. In the Primary Input Action’s Asset, add a new Action called “Handbrake” and set the binding to the “X” key on the keyboard.

[Image: image]

2. Click **Save Asset** at the top of the Input Action Asset.

[Image: image]

3. Open the Family Car Wheel Drive script in your code editor:

[Image: image]

4. Add the Input System namespace at the top of the script:

[Image: image]

5. Create the following variable declarations:

[Image: image]

6. Create an Awake method and add the following logic to the Awake method body:

[Image: image]

7. Create a new method called GetHandBrakeInput that appears as follows:

[Image: image]

8. Add the following OnEnable and OnDisable methods to the script:

[Image: image]

9. Remove the original handBrake input logic from the Update method:

[Image: image]

10. Back in the editor, add the Primary Input Actions Reference to the WheelDrive component on each of the vehicles:

[Image: image]

11. Go into Play mode and test out the handbrake input you just implemented by pressing the **X** key.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
