[Image: image]

# Challenge 3 - Balloons, Bombs, & Booleans (Adapted for Unity EdLab)

Tutorial

Beginner

+10XP

60 mins

1

Unity Technologies

[Image: Challenge 3 - Balloons, Bombs, & Booleans (Adapted for Unity EdLab)]Summary

**Challenge Overview:**

Apply your knowledge of physics, scrolling backgrounds, and special effects to a balloon floating through town, picking up tokens while avoiding explosives. You will have to do a lot of troubleshooting in this project because it is riddled with errors.

**Challenge Outcome:**

- The balloon floats upwards as the player holds spacebar
- The background seamlessly repeats, simulating the balloon’s movement
- Bombs and Money tokens are spawned randomly on a timer
- When you collide with the Money, there’s a particle and sound effect
- When you collide with the Bomb, there’s an explosion and the background stops

Resources

- [Challenge 3 - Starter Files.zip](https://unity-connect-prd.storage.googleapis.com/20210506/13b7b5f4-501e-43a6-9e67-cc9f71a7e406/Challenge%203%20-%20Starter%20Files.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952105788)

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
- English

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

- Open your **Prototype 3**project
- In your **File Explorer**, select the drive named “Unity Projects and Assets”. Navigate to **CreateWithCode > Unit 3 - Sound and Effects > Challenge 3 - Balloons, Bombs_ Booleans**. Double-click the “Challenge-3_Start” package to **import**.
- In the *Project Window > Assets > Challenge 3 > **Instructions*** folder, use the Challenge 3 - Outcome video as a guide to complete the challenge

Mark step as complete

## 2. Warning

Q&A (0)

When you import the challenge into your project, it is **supposed to have bugs**.

The purpose of the challenge is for you to fix those bugs, which are listed below. There are also hints at the bottom of the page to help you if you get stuck.

If you cannot fix the bugs and wish to delete the challenge files from your project, in the Project window, right-click on Assets > **Challenge 3**and select **Delete.**

Good luck!

Mark step as complete

## 3. The player can’t control the balloon

Q&A (0)

- The balloon should float up as the player presses spacebar

Mark step as complete

## 4. The background only moves when the game is over

Q&A (0)

- The background should move at start, then *stop* when the game is over

Mark step as complete

## 5. No objects are being spawned

Q&A (0)

- Make bombs or money objects spawn every few seconds

Mark step as complete

## 6. Fireworks appear to the side of the balloon

Q&A (0)

- Make the fireworks display at the balloon’s position

Mark step as complete

## 7. The background is not repeating properly

Q&A (0)

- Make the background repeat seamlessly

Mark step as complete

## 8. Bonus: The balloon can float way too high

Q&A (0)

- Prevent the player from floating their balloon too high

Mark step as complete

## 9. Bonus: The balloon can drop below the ground

Q&A (0)

- Make the balloon appear to bounce off of the ground, preventing it from leaving the bottom of the screen. There should be a sound effect when this happens, too!

Mark step as completeOptional Step

## 10. Hints

Q&A (0)

- **The balloon should float up as the player presses spacebar***Hint - There is a “NullReferenceExcepton” error on the player’s rigidBody variable - it has to be assigned in Start() using the GetComponent<> method*
- **The background should move at start, then stop when the game is over***Hint - In MoveLeftX.cs, the objects should only Translate to the left if the game is NOT over*
- **Make bombs or money objects spawn every few seconds***Hint - There is an error message saying, “Trying to Invoke method: SpawnManagerX.PrawnsObject couldn't be called” - spelling matters*
- **Make the fireworks display at the balloon’s position***Hint - The fireworks particle is a child object of the Player - but its location still has to be set at the same location*
- **Make the background repeat seamlessly***Hint - The repeatWidth variable should be half of the background’s width, not half of its height*
- **Bonus - Prevent the player from floating their balloon too high***Hint - Add a boolean to check if the balloon isLowEnough, then only allow the player to add upwards force if that boolean is true*
- **Bonus - Make the balloon appear to bounce off of the ground, preventing it from leaving the bottom of the screen. There should be a sound effect when this happens, too!***Hint - Figure out a way to test if the balloon collides with the ground object, then add an impulse force upward if it does*

Mark step as completeOptional Step

## 11. Want even more challenges?

Q&A (0)

If you want, you can challenge yourself even more by attempting to add special bonus features to your main prototype, which range from Easy to Expert in difficulty.

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

These extra bonus challenges are entirely optional. If you are not interested and just want to continue with the course, simply mark this step complete and move on to the next tutorial.

If you are interested, check out the [Bonus Feature tutorial](https://learn.unity.com/tutorial/bonus-features-3-share-your-work) and remember to return here when you're done to keep learning!

Mark step as complete

## Complete this Tutorial

Mark all steps complete
