[Image: image]

# Lesson 2.1 - Player Positioning

Tutorial

Beginner

+10XP

60 mins

27

(3854)

Unity Technologies

[Image: Lesson 2.1 - Player Positioning]SummarySkills

**Overview:**

You will begin this unit by creating a new project for your second Prototype and getting basic player movement working. You will first choose which character you would like, which types of animals you would like to interact with, and which food you would like to feed those animals. You will give the player basic side-to-side movement just like you did in Prototype 1, but then you will use if-then statements to keep the Player in bounds.

**Project Outcome:**

The player will be able to move left and right on the screen based on the user’s left and right key presses, but will not be able to leave the play area on either side.

Resources

- [Prototype 2 - Starter Files.zip](https://unity-connect-prd.storage.googleapis.com/20241211/fbd3deed-d8ef-4b04-a8f9-530887b39e38/Prototype%202%20-%20Starter%20Files.zip?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035357808)

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 概要ビデオ

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

## 1. Create a new Project for Prototype 2

Q&A (0)

> *The first thing we need to do is create a new project and import the Prototype 2 starter files.*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

1. Open **Unity Hub** and create an empty “Prototype 2” project in your course directory on the correct Unity version.
If you forget how to do this, refer to the instructions in [Lesson 1.1 - Step 1](https://learn.unity.com/course/create-with-code/unit/unit-1-driving-simulation/tutorial/lesson-1-1-start-your-3d-engines?version=6.0#674f41a1edbc2a1e806fc55b).
2. Click to download the [Prototype 2 Starter Files](https://unity-connect-prd.storage.googleapis.com/20241211/fbd3deed-d8ef-4b04-a8f9-530887b39e38/Prototype%202%20-%20Starter%20Files.zip?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035357808), **extract** the compressed folder, and then **import** the .unitypackage into your project.
For a reminder on how to import packages, see the referenced [documentation](https://docs.unity3d.com/Manual/AssetPackagesImport.html?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035357808).

**Note:** If you see warnings in the Console after importing the package into your project, you can safely ignore them. Open the Console and click the **Clear** button.
3. From the Project window, open the **Prototype 2**scene and **delete** the SampleScene.
4. In the top-right of the Unity Editor, change your **Layout** from Default to your custom layout.

ステップを完了としてマーク

## 2. Add the Player, Animals, and Food

Q&A (0)

> *Let’s get all of our objects positioned in the scene, including the player, animals, and food.*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

1. If you want, drag a different **material** from *Course Library > Materials* onto the Ground object
2. Drag 1 **Human**, 3 **Animals**, and 1 **Food** object into the Hierarchy.
3. Rename the character “Player”, then **reposition** the animals and food so you can see them.
4. Adjust the XYZ **scale** of the food so you can easily see it from above.

ステップを完了としてマーク

## 3. Configure project settings for the Input Manager

Q&A (0)

The code you’ll add in the following steps uses a system called the **Input Manager** to handle player controls. If you’re using Unity 6.1 or higher, your Unity project is likely set up to use a different system called the **Input System**. To ensure the Input Manager code works correctly, you need to change a project setting to allow both systems to run side-by-side.

Follow the video and instructions below.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

#### **Instructions**

**1.**Open the **Player Settings**:

- From the main menu, select **Edit** > **Project Settings,**then select the **Player** category from the leftmost panel.

**2.**Enable support for both input systems:

- Find the **Configuration** section.
- From the **Active Input Handling** dropdown, select **Both**.
- Select the **Apply** button to confirm the change.

The Unity Editor will automatically restart to apply this setting. After restarting, your project will be correctly configured to handle input from both the original Input Manager and the newer Input System.

ステップを完了としてマーク

## 4. Get the user’s horizontal input

Q&A (0)

> *If we want to move the Player left-to-right, we need a variable tracking the user’s input.*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

1. In your **Assets** folder, create a “Scripts” folder, and a “PlayerController” script inside
2. **Attach** the script to the Player and open it
3. At the top of PlayerController.cs, declare a new ***public float horizontalInput***
4. In ***Update()***, set ***horizontalInput =  Input.GetAxis(“Horizontal”)***, then test to make sure it works in the inspector

[Image: image]ステップを完了としてマーク

## 5. Move the player left-to-right

Q&A (0)

> *We have to actually use the horizontal input to translate the Player left and right.*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

1. Declare a new ***public float speed = 10.0f;***
2. In ***Update()***, Translate the player side-to-side based on ***horizontalInput*** and ***speed***

[Image: image]ステップを完了としてマーク

## 6. Keep the player inbounds

Q&A (0)

> *We have to prevent the player from going off the side of the screen with an if-then statement.*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

1. In ***Update()***, write an**if-statement**checking if the player’s left X position is **less than** a certain value
2. In the if-statement, set the player’s  position to its current position, but with a **fixed X location**

[Image: image]ステップを完了としてマーク

## 7. Clean up your code and variables

Q&A (0)

> *We need to make this work on the right side, too, then clean up our code.*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

1. Repeat this process for the **right side**of the screen
2. Declare new ***xRange*** variable, then replace the hardcoded values with them
3. Add **comments** to your code

[Image: image]ステップを完了としてマーク

## 8. Lesson Recap

Q&A (0)

New Functionality

- The player can move left and right based on the user’s left and right key presses
- The player will not be able to leave the play area on either side

New Concepts & Skills

- Adjust object scale
- If-statements
- Greater/Less than operators

Next Lesson

- We’ll learn how to create and throw endless amounts of food to feed our animals!

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
