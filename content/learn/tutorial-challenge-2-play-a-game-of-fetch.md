[Image: image]

# Challenge 2 - Play a Game of Fetch

Tutorial

Beginner

+10XP

60 mins

1

(35)

Unity Technologies

[Image: Challenge 2 - Play a Game of Fetch]Summary

**Challenge Overview:**

Use your array and random number generation skills to program this challenge where balls are randomly falling from the sky and you have to send your dog out to catch them before they hit the ground. To complete this challenge, you will have to make sure your variables are assigned properly, your if-statements are programmed correctly, your collisions are being detected perfectly, and that objects are being generated randomly. Finally you will continue practicing your bug reporting skills.

**Challenge Outcome:**

- A random ball (of 3) is generated at a random x position above the screen
- When the user presses spacebar, a dog is spawned and runs to catch the ball
- If the dog collides with the ball, the ball is destroyed
- If the ball hits the ground, a “Game Over” debug message is displayed
- The dogs and balls are removed from the scene when they leave the screen
- A detailed bug report

Resources

- [Challenge 2 - Asset Store](https://assetstore.unity.com/packages/templates/tutorials/create-with-code-challenge-2-play-fetch-146044)
- [Challenge 2 - Direct Download.zip](https://unity-connect-prd.storage.googleapis.com/20191004/55f72a9b-8dbc-4e19-b4e3-6f34d5dd4b79/Challenge%202%20-%20Direct%20Download.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952083069)

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

The media could not be loaded, either because the server or network failed or because the format is not supported.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

1. Open your **Prototype 2**project
2. **Download** the "Challenge 2 Starter Files" from the Tutorial Materials section, then double-click on it to **Import**
3. In the *Project Window > Assets > Challenge 2 > **Instructions*** folder, use the "Challenge 2 - Instructions" and “Outcome” video as a guide to complete the challenge

Mark step as complete

## 2. Dogs are spawning at the top of the screen

Q&A (0)

- Make the balls spawn from the top of the screen

> **Hint:**Click on the Spawn Manager object and look at the “Ball Prefabs” array

Mark step as complete

## 3. The player is spawning green balls instead of dogs

Q&A (0)

- Make the player spawn dogs

> **Hint:**Click on the Player object and look at the “Dog Prefab” variable

Mark step as complete

## 4. The balls are destroyed if anywhere near the dog

Q&A (0)

- The balls should only be destroyed when coming into direct contact with a dog

> **Hint:**Check out the box collider on the dog prefab

Mark step as complete

## 5. Nothing is being destroyed off screen

Q&A (0)

- Balls should be destroyed when they leave the bottom of the screen and dogs should be destroyed when they leave the bottom of the screen

> **Hint:**In the DestroyOutOfBounds script, double-check the lowerLimit and bottomLimit variables, the greater than vs less than signs, and which position (x,y,z) is being tested

Mark step as complete

## 6. Only one type of ball is being spawned

Q&A (0)

- Ball 1, 2, and 3 should be spawned randomly

> **Hint:**In the SpawnRandomBall() method, you should declare a new random ***int index*** variable, then incorporate that variable into the the Instantiate call

Mark step as complete

## 7. Bonus: The spawn interval is always the same

Q&A (0)

- Make the spawn interval a random value between 3 seconds and 5 seconds

> **Hint:**Using "InvokeRepeating" won't work here because it requires you to define a constant repeat rate. Try using the simpler "Invoke" method instead, then re-setting the **startDelay**and re-calling the method from within the "SpawnRandomBall" method.

Mark step as complete

## 8. Bonus: The player can “spam” the spacebar key

Q&A (0)

- Only allow the player to spawn a new dog after a certain amount of time has passed

> **Hint:**Search for  Time.time in the Unity Scripting API and look at the example. And don’t worry if you can’t figure it out - this is a *very difficult* challenge.

Mark step as complete

## 9. Continue to Create Bug reports

Q&A (0)

Using the bug report you created in the first challenge continue to populate it with bugs you find in this challenge - remembering to tag them, and prioritize them appropriately. Remember to try and find additional bugs that are not outlined in the challenge instructions.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
