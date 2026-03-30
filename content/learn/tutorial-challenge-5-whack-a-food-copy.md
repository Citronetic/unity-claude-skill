[Image: image]

# Challenge 5 - Whack-a-Food Game

Tutorial

Beginner

+10XP

60 mins

1

(21)

Unity Technologies

[Image: Challenge 5 - Whack-a-Food Game]Summary

**Challenge Overview:**

Put your User Interface skills to the test with this whack-a-mole-like challenge in which you have to get all the food that pops up on a grid while avoiding the skulls.  You will have to debug buttons, mouse clicks, score tracking, restart sequences, and difficulty setting to get to the bottom of this one.

**Challenge Outcome:**

- All of the buttons look nice with their text properly aligned
- When you select a difficulty, the spawn rate changes accordingly
- When you click a food, it is destroyed and the score is updated in the top-left
- When you lose the game, a restart button appears that lets you play again

Resources

- [Challenge 5 - Asset Store](https://assetstore.unity.com/packages/slug/146047)
- [Challenge 5 - Direct Download.zip](https://unity-connect-prd.storage.googleapis.com/20191004/3ebc2b05-eb0a-44b5-81f1-ff992cddbef6/Challenge%205%20-%20Direct%20Download.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952163014)

Languages available:

EnglishEnglishEnglish

## 1. Exploratory Testing & Test Script vs. Carl!

Q&A (0)

Unlike the previous challenges, where we let you watch Carl work through the challenge and then you QA we want to flip the order. For this round, before watching the video:

1. Open the starter file, and conduct your own exploratory testing.
2. From your notes, create a test script. We highly recommend you then run your test script through the starter file and adjust as necessary.
3. Then, watch the video and compare your test script to what Carl uncovers are the problems in this challenge. Are you as good as Carl?!?!

Mark step as complete

## 2. Overview

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

1. Open your **Prototype 5**project
2. **Download** the "Challenge 5 Starter Files" from the Tutorial Materials section, then double-click on it to **Import**
3. In the *Project Window > Assets > Challenge 5 > **Instructions*** folder, use the "Challenge 5 - Outcome” video as a guide to complete the challenge

Mark step as complete

## 3. The difficulty buttons look messy

Q&A (0)

- Center the text on the buttons horizontally and vertically

> **Hint:**If you expand one of the button objects in the hierarchy, you’ll see a “Text” object inside - you have to edit the properties of that “Text” object

Mark step as complete

## 4. The food is being destroyed too soon

Q&A (0)

- The food should only be destroyed when the player clicks on it, not when the mouse touches it

> **Hint:**OnMouseEnter() detects when the mouse *enters* an object’s collider - OnMouseDown() detects when the mouse *clicks* on an object’s collider

Mark step as complete

## 5. The Score is being replaced by the word “score”

Q&A (0)

- It should always say,
“Score: __“ with the value displayed after “Score:”

> **Hint:**When you set the score text, you have to add (concatenate) the word “Score: “ *and* the actual score value

Mark step as complete

## 6. When you lose, there’s no way to Restart

Q&A (0)

- Make the Restart button appear on the game over screen

> **Hint:**In the GameOver() method, make sure the restart button is being reactivated

Mark step as complete

## 7. The difficulty buttons don’t change the difficulty

Q&A (0)

- The spawnRate is always way too fast. When you click Easy, the spawnRate should be slower - if you click Hard, the spawnRate should be faster.

> **Hint:**There is no information (or parameter) being passed from the buttons’ script to the Game Manager’s script - you need to implement a difficulty parameter

Mark step as complete

## 8. Bonus: The game can go on forever

Q&A (0)

- Add a “Time: __” display that counts down from 60 in whole numbers (i.e. 59, 58, 57, etc) and triggers the game over sequence when it reaches 0.

> **Hint:**Google, “Unity Count down timer C#”. It will involve subtracting “Time.deltaTime” and using the Mathf.Round() method to display only whole numbers.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
