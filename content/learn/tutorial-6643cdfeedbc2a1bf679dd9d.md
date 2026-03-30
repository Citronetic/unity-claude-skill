[Image: image]

# Audio Essentials: More things to try

Tutorial

foundational

+10XP

20 mins

21

(6092)

Unity Technologies

[Image: Audio Essentials: More things to try]Summary

Further develop your project and skills with optional challenges of varying difficulty.

Languages available:

EnglishEnglishEspañolEnglish

## 1. Overview

Q&A (0)

Try these optional activities to challenge yourself, build your skills, and improve your project!

Each challenge is tagged as **Easy**, **Medium**, or**Expert** difficulty so that you know what to expect. You can do one of them, all of them, or none of them — it’s totally up to you!

- **Easy:** Add a humming sound coming from the refrigerator.
- **Medium:** Source your own background music.
- **Expert:** Experiment with reverb zones.

If you’re not interested in doing these challenges, skip to the end of this tutorial to mark it as complete.

Mark step as complete

## 2. Easy: Add a humming sound coming from the refrigerator

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

To fully round out the kitchen soundscape, you can add another ambient sound to the environment: an electrical humming sound coming from the refrigerator.

This optional challenge is classified as Easy difficulty.

**Instructions**

**1.**  Add an **Audio Source** component to the refrigerator and use the **Fridge-Hum** file for its audio clip.

**2.**  Enable **Loop,** reduce the **Volume,** and set the **Spatial Blend** to **1** (full 3D).

**Note:**  If you want, experiment with different **Min Distance** and **Max Distance** values in the 3D sound settings to see what feels most natural for the refrigerator humming sound.

Mark step as complete

## 3. Medium: Source some new background music

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

You can personalize your project by adding your own background music. The [Unity Asset Store](https://assetstore.unity.com/) is the perfect place to find audio for your project. You can filter by category (audio) and also by price.

**Important**:  If you don’t use the Asset Store, check the license to make sure you have the rights to use any audio you download. This matters because we encourage you to publish this project later!

For more information on licensing, see [Copyright for creators](https://learn.unity.com/tutorial/6705b8f4edbc2a00b9f70106?uv=6).

This optional challenge is classified as Medium difficulty.

**Instructions**

**1.**  Browse the [Unity Asset Store](https://assetstore.unity.com/).

You’ll need to be signed in and then select **Add to My Assets** for any assets you’re interested in. Then, use [these instructions](https://learn.unity.com/tutorial/project-setup-processes#6273ee10edbc2a0232556f19) to learn how to import assets into your project.

**2.**  If you want to look for other music online, search for music with CC0 or CC-NC licenses.

You can check out the Audio Files at [Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:Audio_files) to start.

**3.**  After you’ve added the files to the **Audio** > **Music** folder in your **Assets** folder, you can swap out the music currently set in the **Audio Source** component of your **Background Music** GameObject.

Mark step as complete

## 4. Expert: Experiment with reverb zones

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

A reverb zone in Unity is a spatial audio effect that simulates the way sound reflects and reverberates in a physical space, from echoing caverns to a soundproof padded room.

Although it is not entirely necessary to add a reverb zone in this particular scene, it is very cool to see how they work and experiment with different reverb zone presets.

This optional challenge is classified as Expert difficulty.

**Instructions**

**1.**  In the **Hierarchy** window, right-click and select **Audio** > **Audio Reverb Zone** to create a new Audio Reverb Zone. This will add an **Audio Reverb Zone** component to a new GameObject in your scene.

**2.**  With the **Audio Reverb Zone** component selected, use the **Move** tool to position the reverb zone at the center of the kitchen.

**3.**  In the **Audio Reverb Zone** component in the **Inspector** window, locate the **Reverb Preset** dropdown.

**4.**  Enter Play mode and experiment with some of the presets such as Concert Hall, Cave, Underwater, and others.

Notice how all the sliders beneath the preset change with every selection.

**5.**  While you're playtesting, move in and out of the reverb zone to hear how the audio changes with distance.

**6.**  Exit **Play** mode and apply the preset you want.

You’ll likely just want a simple **Room** preset for the most natural sound. You can also select the **User** preset to make custom edits to the reverb properties (such as decay time, density, and diffusion), but these are pretty complex and beyond the scope of this course.

Mark step as complete

## 5. Proceed to the next tutorial

Q&A (0)

No matter if you chose to tackle a single challenge, complete them all, or skip them, you're set for the next step.

**Instructions**

Proceed to the next tutorial, where you'll have a chance to complete a quiz and get credit for completing this project.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
