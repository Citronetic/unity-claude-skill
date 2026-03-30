[Image: image]

# Add audio to your game

Tutorial

foundational

+10XP

60 mins

4

(42)

Unity Technologies

[Image: Add audio to your game]Summary

Adding sound to your games allows you to enhance immersion, create a more engaging atmosphere, and provide audio cues for gameplay elements and storytelling.

In this tutorial, you’ll add some ambient music to make things more exciting, add pickup sounds to give feedback to the user, and finally, add a sound effect that plays when you lose the game.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

Adding sound to your games allows you to enhance immersion, create a more engaging atmosphere, and provide audio cues for gameplay elements and storytelling.

In this tutorial, you’ll add some ambient music to make things more exciting, add pickup sounds to give feedback to the user, and finally, add a sound effect that plays when you lose the game.

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

Mark step as complete

## 2. Requirements

Q&A (0)

In order to successfully complete this challenge, your project must include the following elements, styled according to the theme outlined in your design document:

- A soundtrack that starts automatically and plays while the game is running.
- A sound that tells the user when they successfully pick up a token.
- A sound that plays when the enemy character catches the player.

Mark step as complete

## 3. Review your design document

Q&A (0)

Your Game Design Document (GDD) is still a work in progress. Take a moment to open your GDD now and review it.

Depending on the design decisions you make, your soundscape could be completely different. A horror-themed game will have a very different soundscape from a lighthearted unicorn-themed game. Some sounds are so iconic that you immediately associate them with a specific game.

Now, think about your specific theme and the type of sounds that would make sense for your game.

Mark step as complete

## 4. Review the asset pack

Q&A (0)

Take some time to review the assets provided in the [UCU Game Developer package](https://drive.google.com/uc?id=1Q2CX4Ju-5UgrsJKkc135vu0zImUPvtbP&export=download) that you downloaded and imported earlier in the [Fill out a Game Design Document](https://learn.unity.com/tutorial/fill-out-a-game-design-document) tutorial.

If you did not download and import those assets, you can do that now.

In the asset pack, you can browse the entire **Sound** folder, which contains a **Music** and **SoundFX** folder. These might give you ideas for audio you could add to your game.

Mark step as complete

## 5. Challenge guidance

Q&A (0)

The following sections will provide you with some guidance on each of the tasks in this challenge.

#### Background music

- Create a new GameObject to hold the **Audio Source**component.
- Enable the **Play on Awake** option to make sure the music plays when the game starts.
- If you need a reminder on how to do this, review the [Audio mission](https://learn.unity.com/project/creative-core-audio) in the **Creative Core** pathway on Unity Learn.

#### Pickup sound

- Play on Awake won't work in this case. You need a way to play the sound only when needed. There is a pickup function that manages the pickup event in the **PlayerController** script. This would be a great place to activate a sound.
- You can stop and start a sound with the **<yoursoundcomponent>.Play()** and <yoursoundcomponent>.Stop() methods.
- You can access the **Audio Source** component on a GameObject with the GetComponent<AudioSource>(); method. It is best practice to do this in the Awake function of a script since the Awake method is called when a scene is loaded. Add this line to your Awake function:

```csharp
audioSource = GetComponent<AudioSource>();
```

#### Lose sound

- In this case, you can’t use the **Player** GameObject to hold the **Audio Source** component since it will be destroyed on the game-over event.
- Remember that the collision function holds a reference to the object it collided with; in this case, the **Enemy** GameObject.
- Need more help? Here is the full line of code:

```csharp
collision.gameObject.GetComponent<AudioSource>().Play();
```

Mark step as complete

## 6. More things to try

Q&A (0)

If you want to further develop your skills, explore new concepts, or improve your project, check out some of the optional activities below. Each activity is identified as being either Easy, Medium, or Difficult, so you know what level of difficulty to expect.

These activities are entirely optional, so if you’re not interested, no problem – just skip this step. We do recommend attempting at least one of them in order to get the most out of this learning experience. Good luck!

#### Easy: Play a new sound on win

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

Set a sound effect to play when the win condition is achieved. You already have a function that sets the **winText** GameObject in the **PlayerController** script. You can also use that function to play a sound.

Remember you may need to switch off the theme music as well.

#### Medium: Play a sound when the player hits the boundary walls.

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

In the assets for this project, you were provided with a library of sounds. You can select one of these sounds and use it to indicate when the ball hits a wall. For this to work, you can add the sound to the walls and then use tags to identify the collision object, then play the audio source on that object.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
