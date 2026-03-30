[Image: image]

# Challenge 4 - Scripting Soccer

Tutorial

Beginner

+10XP

60 mins

1

(23)

Unity Technologies

[Image: Challenge 4 - Scripting Soccer]Summary

**Challenge Overview:**

Use the skills you learned in the Sumo Battle prototype in a completely different context: the soccer field. Just like in the prototype, you will control a ball by rotating the camera around it and applying a forward force, but instead of knocking them off the edge, your goal is to knock them into the opposing net while they try to get into your net. Just like in the Sumo Battle, after every round a new wave will spawn with more enemy balls, putting your defense to the test. However, almost nothing in this project is functioning! It’s your job to get it working correctly. As you do so, you will combine what you have learned about test scripts, exploratory testing, and bug reporting and practice all three throughout the challenge.

**Challenge Outcome:**

- Enemies move towards your net, but you can hit them to deflect them away
- Powerups apply a temporary strength boost, then disappear after 5 seconds
- When there are no more enemy balls, a new wave spawns with 1 more enemy

Resources

- [Challenge 4 - Asset Store](https://assetstore.unity.com/packages/templates/tutorials/create-with-code-challenge-4-soccer-scripting-146046)
- [Challenge 4 - Direct Download.zip](https://unity-connect-prd.storage.googleapis.com/20191121/50333e6f-03cb-4143-a9ab-886dd6411f3a/Challenge%204%20-%20Direct%20Download.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952146674)

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

1. Open your **Prototype 4**project
2. **Download** the "Challenge 4 Starter Files" from the Tutorial Materials section, then double-click on it to **Import**
3. In the *Project Window > Assets > Challenge 4 > **Instructions*** folder, use the resources as a guide to complete this challenge

Mark step as complete

## 2. Practicing QA Skills

Q&A (0)

For this challenge, combine what you have learned about test scripts, exploratory testing, and bug reporting and practice all three throughout this challenge:

1. Read through the challenge and create a test script.
2. As you work through the challenge keep exploratory notes,
3. As you work through the challenge catalog, tag and prioritize bugs.

Mark step as complete

## 3. Hitting an enemy sends it back towards you

Q&A (0)

> When you hit an enemy, it should send it *away* from the player

- **Hint:**In PlayerControllerX.cs, to get a Vector *away* from the player, you should subtract the [enemy position] minus the [player’s position] - not the reverse

Mark step as complete

## 4. A new wave spawns when the player gets a powerup

Q&A (0)

> A new wave should spawn when all enemy balls have been removed

- **Hint:**In SpawnManagerX.cs, check that the enemyCount variable is being set correctly

Mark step as complete

## 5. The powerup never goes away

Q&A (0)

> The powerup should only last for a certain duration, then disappear

- **Hint:**In PlayerControllerX.cs, the PowerupCoolDown Coroutine code looks good, but this coroutine is never actually called with the StartCoroutine() method

Mark step as complete

## 6. 2 enemies are spawned in every wave

Q&A (0)

> One enemy should be spawned in wave 1, two in wave 2, three in wave 3, etc

- **Hint:**In SpawnManagerX.cs, the for-loop that spawns enemy should make use of the enemiesToSpawn parameter

Mark step as complete

## 7. The enemy balls are not moving anywhere

Q&A (0)

> The enemy balls should go towards the “Player Goal” object

- **Hint:**There is an error in EnemyX.cs: “NullReferenceException: Object reference not set to an instance of an object”. It looks like the playerGoal object is never assigned.

Mark step as complete

## 8. Bonus: The player needs a turbo boost

Q&A (0)

> The player should get a speed boost whenever the player presses spacebar - and a particle effect should appear when they use it

- **Hint:**In PlayerController, add a simple if-statement that adds an “impulse” force if spacebar is pressed. To add a particle effect, first attach it as a child object of the Focal Point.

Mark step as complete

## 9. Bonus: The enemies never get more difficult

Q&A (0)

> The enemies’ speed should increase in speed by a small amount with every new wave

- **Hint:**You’ll need to track and increase the enemy speed in SpawnManagerX.cs. Then in EnemyX.cs, reference that speed variable and set it in Start().

Mark step as complete

## Complete this Tutorial

Mark all steps complete
