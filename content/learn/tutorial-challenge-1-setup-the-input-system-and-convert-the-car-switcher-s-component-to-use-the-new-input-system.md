[Image: image]

# Challenge 1: Setting up the Input System

Tutorial

Beginner

+0XP

20 mins

8

(233)

Unity Technologies

[Image: Challenge 1: Setting up the Input System]Summary

In this tutorial you will configure the Input System, and create the first input along with the corresponding C# script.

Make sure to download the project materials below and import them into a New Unity project before starting.

Resources

- [Live Session - InputSystemAssets.zip](https://unity-connect-prd.storage.googleapis.com/20201208/fa2c25ce-09eb-4066-aeea-8acce5d3c8d8/Live%20Session%20-%20InputSystemAssets.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952170437)

Languages available:

EnglishEnglish日本語English

## 1. Set up and configure the Input System

Q&A (0)

To get started, you'll first want to make sure that you have Postprocessing Version 2.0.3 installed.

1. Update the Post Processing package to 2.3.0 using the Package Manager (**Window**>**Package Manager**).

[Image: image]

2. Download the Input System from the Package Manager (**Window**>**Package Manager**).

[Image: image]

3. Ensure the project settings are switched over to use the new Input system by opening the project settings clicking on **Player**> **Other**> **Active Input Handling** and setting it to “Both” (note: the editor may restart after making this change).

[Image: image]

4. Create a new Input Actions Asset and name it “Primary Input Actions.”

[Image: image]

5. Double click on the asset to open it up in the Input window and dock it in the bottom of the editor (for quick access).

[Image: image]

6. Click on the “+” button next to Action Maps to add a new action map and name it “Gameplay.”

[Image: image]

7. There is a default Action created, go ahead and rename it “Next Vehicle.”

[Image: image]

8. Select the Binding under the Next Vehicle and set it to the **K** key on the keyboard.

[Image: image]

9. Create a new Action called “Reset Vehicle” and add a binding for Reset Vehicle and set it to the **R** key on the keyboard:

[Image: image]

10. Click **Save Asset** at the top of the Input actions window to save the asset.

[Image: image]

11. Open the CarSwitcher.cs C# component that is attached to the “Main Camera” GameObject (**Cameras**>**Main Camera**).

[Image: image]

12. Add the Input System using statement at the top of the script and the following variable declarations:

[Image: image]

13. In the Awake method add the following logic to setup the Next Vehicle and Reset Vehicle inputs.

[Image: image]

14. Before heading back to the Unity Editor, add and configure the following OnEnable and OnDisable methods:

[Image: image]

15. The deprecated Update method is no longer needed, so go ahead and remove it.

[Image: image]

16. In the Editor set the reference to the Input Actions in the Car Switcher component.

[Image: image]

17. Go into Play mode and ensure you can transition between vehicles by pressing the **K** key and reset vehicles by pressing the **R** key.

[Image: image]Mark step as complete

## Complete this Tutorial

Mark all steps complete
