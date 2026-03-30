[Image: image]

# Challenge 3 - Creating Balloons, Bombs, & Booleans

Tutorial

Beginner

+10XP

60 mins

3

(43)

Unity Technologies

[Image: Challenge 3 - Creating Balloons, Bombs, & Booleans]Summary

**Challenge Overview:**

Apply your knowledge of physics, scrolling backgrounds, and special effects to a balloon floating through town, picking up tokens while avoiding explosives. You will have to do a lot of troubleshooting in this project because it is riddled with errors. You will continue practicing and refining your bug reporting skills.

**Challenge Outcome:**

- The balloon floats upwards as the player holds spacebar
- The background seamlessly repeats, simulating the balloon’s movement
- Bombs and Money tokens are spawned randomly on a timer
- When you collide with the Money, there’s a particle and sound effect
- When you collide with the Bomb, there’s an explosion and the background stops
- Detailed and coherent bug report

Resources

- [Challenge 3 - Asset Store](https://assetstore.unity.com/packages/templates/tutorials/create-with-code-challenge-3-balloons-bombs-and-booleans-146045)
- [Challenge 3 - Direct Download.zip](https://unity-connect-prd.storage.googleapis.com/20191004/5f8592bf-25d8-4f30-8911-fc4d037fb9ed/Challenge%203%20-%20Direct%20Download.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952108933)

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

1. Open your **Prototype 3**project
2. **Download** the "Challenge 3 Starter Files" from the Tutorial Materials section, then double-click on it to **Import**
3. In the *Project Window > Assets > Challenge 3 > **Instructions*** folder, use the "Challenge 3 - Instructions" and Outcome video as a guide to complete the challenge

Mark step as complete

## 2. Exploratory testing

Q&A (0)

Use what you learned about exploratory testing as you go through this challenge - select your method for exploratory testing (text document, spreadsheet, testing tool, or mindmap) and take exploratory testing notes as you work through this challenge.

Mark step as complete

## 3. The player can’t control the balloon

Q&A (0)

- The balloon should float up as the player presses spacebar

> **Hint:**There is a “NullReferenceExcepton” error on the player’s rigidBody variable - it has to be assigned in Start() using the ***GetComponent<>*** method

Mark step as complete

## 4. The background only moves when the game is over

Q&A (0)

- The background should move at start, then *stop* when the game is over

> **Hint:**In MoveLeftX.cs, the objects should only Translate to the left if the game is *NOT* over

Mark step as complete

## 5. No objects are being spawned

Q&A (0)

- Make bombs or money objects spawn every few seconds

> **Hint:**There is an error message saying, “Trying to Invoke method: SpawnManagerX.***PrawnsObject***couldn't be called” - spelling matters

Mark step as complete

## 6. Fireworks appear to the side of the balloon

Q&A (0)

- Make the fireworks display at the balloon’s position

> **Hint:**The fireworks particle is a child object of the Player - but its location still has to be set at the same location

Mark step as complete

## 7. The background is not repeating properly

Q&A (0)

- Make the background repeat seamlessly

> **Hint:**The ***repeatWidth*** variable should be half of the background’s *width*, not half of its *height*

Mark step as complete

## 8. Bonus: The balloon can float way too high

Q&A (0)

- Prevent the player from floating their balloon too high

> **Hint:**Add a boolean to check if the balloon ***isLowEnough***, then only allow the player to add upwards force if that boolean is true

Mark step as complete

## 9. Bonus: The balloon can drop below the ground

Q&A (0)

- Make the balloon appear to bounce off of the ground, preventing it from leaving the bottom of the screen. There should be a sound effect when this happens, too!

> **Hint:**Figure out a way to test if the balloon collides with the ground object, then add an impulse force upward if it does

Mark step as complete

## 10. More Bug Reporting

Q&A (0)

Continue building out the bug report you created in the first two challenges and populate it with bugs you find in this challenge - remembering to tag them, and prioritize them appropriately. Remember to try and find additional bugs that are not outlined in the challenge instructions and really focus on writing clear, concise reports. Finally go back to your first two bug reports and see if you can see how you are improving your bug reporting skills from the first challenge to this challenge.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
