[Image: image]

# Lab 3 - Player Control

Tutorial

Beginner

+10XP

60 mins

19

(1118)

Unity Technologies

[Image: Lab 3 - Player Control]SummarySkills

**Overview:**

In this lesson, you program the player’s basic movement, including the code that limits that movement. Since there are a lot of different ways a player can move, depending on the type of project you’re working on, you will not be given step-by-step instructions on how to do it. In order to do this, you will need to do research, reference other code, and problem-solve when things go wrong.

**Project Outcome:**

The player will be able to move around based on user input, but *not* be able to move where they shouldn’t.

Languages available:

EnglishEnglishEspañol日本語한국어English

## Overview Video

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

## 1. Configure project settings for the Input Manager

Q&A (0)

The code you’ll add in this project uses a system called the **Input Manager** to handle player controls. If you’re using Unity 6.1 or higher, your Unity project is likely set up to use a different system called the **Input System**. To ensure the Input Manager code works correctly, you need to change a project setting to allow both systems to run side-by-side.

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

Mark step as complete

## 2. Create PlayerController and plan your code

Q&A (0)

> Regardless of what type of movement your player has, it’ll definitely need a PlayerController script

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

1. Select your Player and add a **Rigidbody**component (with or without gravity enabled)
2. In your Assets folder, create a new “Scripts” folder
3. Inside the new “Scripts” folder, create a new “PlayerController” script
4. **Attach** it to the player, then **open** it
5. Determine what type of programming will be required for your Player

By the end of this step, you should have a new Script open and a solid plan for what will go in it.

Mark step as complete

## 3. Basic movement from user input

Q&A (0)

> The first thing we’ll program is the player’s very basic movement based on user input

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

1. Declare a new ***private float speed*** variable
2. If using physics, declare a new ***Rigidbody playerRb variable*** for it and initialize it in Start()
3. If using arrow keys, declare new ***verticalInput*** and/or ***horizontalInput*** variables
4. If basing your movement off a key press, create the **if-statement** to test for the **KeyCode**
5. Use either the ***Translate*** method or ***AddForce*** method (if using physics) to move your character

By the end of this step, the player should be able to move the way that you want based on user input.

Mark step as complete

## 4. Constrain the Player’s movement

Q&A (0)

> No matter what kind of movement your player has, it needs to be limited for gameplay

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

1. If your player is colliding with objects they shouldn’t (including the ground), check the “**Is trigger**” box in the Collider component
2. If your player’s position or rotation should be constrained, expand the **constraints** in the Rigidbody component and constrain certain axes
3. If your Player can go **off the screen**, write an **if-statement** checking and resetting the position
4. If the Player can double-jump or fly off-screen, create a **boolean variable**that limits the user’s ability to do so
5. If your player should be constrained by physical barriers along the outside of the play area, create more primitive **Planes** or **Cubes** and scale them to form walls

By the end of this step, the player’s movement should be constrained in such a way that makes your game playable.

Mark step as complete

## 5. Code Cleanup and Export Backup

Q&A (0)

> Now that we have the basic functionality working, let’s clean up our code and make a backup.

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

1. Create new**Empty** game objects and nest objects inside them to **organize** your hierarchy
2. Clean up your Update methods by moving the blocks of code into new void functions (e.g. “MovePlayer()” or “ConstrainPlayerPosition()”)
3. Add comments to make your code more readable
4. **Test** to make sure everything still works, then **save** your scene
5. Right-click on your *Assets folder > **Export Package*** then save a new version in your **Backups** folder

By the end of this step, your code should be commented, organized, and backed up.

Mark step as complete

## 6. Lesson Recap

Q&A (0)

New progress

- Player can move based on user input
- Player movement is constrained to suit the requirements of the game

New concepts & skills:

- Program in C# independently
- Troubleshoot issues independently

Mark step as complete

## Complete this Tutorial

Mark all steps complete
