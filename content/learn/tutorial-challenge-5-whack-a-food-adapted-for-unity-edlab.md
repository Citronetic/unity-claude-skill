[Image: image]

# Challenge 5 - Whack-a-Food (Adapted for Unity EdLab)

Tutorial

Beginner

+10XP

60 mins

0

Unity Technologies

[Image: Challenge 5 - Whack-a-Food (Adapted for Unity EdLab)]Summary

**Challenge Overview:**

Put your User Interface skills to the test with this whack-a-mole-like challenge in which you have to get all the food that pops up on a grid while avoiding the skulls.  You will have to debug buttons, mouse clicks, score tracking, restart sequences, and difficulty setting to get to the bottom of this one.

**Challenge Outcome:**

- All of the buttons look nice with their text properly aligned
- When you select a difficulty, the spawn rate changes accordingly
- When you click a food, it is destroyed and the score is updated in the top-left
- When you lose the game, a restart button appears that lets you play again

Resources

- [Challenge 5 - Starter Files.zip](https://unity-connect-prd.storage.googleapis.com/20210506/6b85b614-5937-4211-9a5a-117378ab83d2/Challenge%205%20-%20Starter%20Files.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952155432)

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%0:00Remaining Time -0:001xPlayback Rate

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

- Open your **Prototype 5**project
- In your **File Explorer**, select the drive named “Unity Projects and Assets”. Navigate to **CreateWithCode > Unit 5 - User Interface > Challenge 5 - Whack-a-Food**. Double-click the “Challenge-5_Start” package to **import**.
- In the *Project Window > Assets > Challenge 5 > **Instructions*** folder, use the Challenge 5 - Outcome video as a guide to complete the challenge

Mark step as complete

## 2. Warning

Q&A (0)

When you import the challenge into your project, it is **supposed to have bugs**.

The purpose of the challenge is for you to fix those bugs, which are listed below. There are also hints at the bottom of the page to help you if you get stuck.

If you cannot fix the bugs and wish to delete the challenge files from your project, in the Project window, right-click on Assets > **Challenge 5**and select **Delete.**

Good luck!

Mark step as complete

## 3. The difficulty buttons look messy

Q&A (0)

- Center the text on the buttons horizontally and vertically

Mark step as complete

## 4. The food is being destroyed too soon

Q&A (0)

- The food should only be destroyed when the player clicks on it, not when the mouse touches it

Mark step as complete

## 5. The Score is being replaced by the word “score”

Q&A (0)

- It should always say,
“Score: __“ with the value displayed after “Score:”

Mark step as complete

## 6. When you lose, there’s no way to Restart

Q&A (0)

- Make the Restart button appear on the game over screen

Mark step as complete

## 7. The difficulty buttons don’t change the difficulty

Q&A (0)

- The spawnRate is always way too fast. When you click Easy, the spawnRate should be slower - if you click Hard, the spawnRate should be faster.

Mark step as complete

## 8. Bonus: The game can go on forever

Q&A (0)

- Add a “Time: __” display that counts down from 60 in whole numbers (i.e. 59, 58, 57, etc) and triggers the game over sequence when it reaches 0.

Mark step as completeOptional Step

## 9. Hints

Q&A (0)

- **Center the text on the buttons horizontally and vertically***Hint - If you expand one of the button objects in the hierarchy, you’ll see a “Text” object inside - you have to edit the properties of that “Text” object*
- **The food should only be destroyed when the player clicks on it, not when the mouse touches it***Hint - OnMouseEnter() detects when the mouse enters an object’s collider - OnMouseDown() detects when the mouse clicks on an object’s collider*
- **It should always say, “Score: __“ with the value displayed after “Score:”***Hint - When you set the score text, you have to add (concatenate) the word “Score: “ and the actual score value*
- **Make the Restart button appear on the game over screen***Hint - In the GameOver() method, make sure the restart button is being reactivated*
- **The spawnRate is always way too fast. When you click Easy, the spawnRate should be slower - if you click Hard, the spawnRate should be faster.***Hint - There is no information (or parameter) being passed from the buttons’ script to the Game Manager’s script - you need to implement a difficulty parameter*
- **Bonus - Add a “Time: __” display that counts down from 60 in whole numbers (i.e. 59, 58, 57, etc) and triggers the game over sequence when it reaches 0.***Hint - Google, “Unity Count down timer C#”. It will involve subtracting “Time.deltaTime” and using the Mathf.Round() method to display only whole numbers.*

Mark step as completeOptional Step

## 10. Want even more challenges?

Q&A (0)

If you want, you can challenge yourself even more by attempting to add special bonus features to your main prototype, which range from Easy to Expert in difficulty.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%0:00Remaining Time -0:001xPlayback Rate

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

These extra bonus challenges are entirely optional. If you are not interested and just want to continue with the course, simply mark this step complete and move on to the next tutorial.

If you are interested, check out the [Bonus Feature tutorial](https://learn.unity.com/tutorial/bonus-features-5-share-your-work)and remember to return here when you're done to keep learning!

Mark step as complete

## Complete this Tutorial

Mark all steps complete
