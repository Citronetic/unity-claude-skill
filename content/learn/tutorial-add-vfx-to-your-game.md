[Image: image]

# Add VFX to your game

Tutorial

foundational

+10XP

60 mins

101

(29)

Unity Technologies

[Image: Add VFX to your game]Summary

You've learned how to implement VFX in 3D and 2D projects. In this tutorial, you'll apply those skills to add VFX to your game.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

In this tutorial, you’ll add particle effects to your game, whether you’re working in 2D, 3D, or decided to try both. By the end, your project will have fully functional VFX, just like the example projects shown below.

#### 3D game

If you’re doing the 3D game, you'll create visual effects to simulate an explosion when the enemy catches the player and a pickup effect for the tokens.

By the end, your game could look something like this:

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

#### 2D game

For the 2D game, you'll customize the particles to your chosen theme.

By the end, your game could look something like this:

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

Your game design document (GDD) is still evolving, so take a moment to open it and review your plans.

Your visual style will shape the entire look and feel of your effects. A horror game might use smoky, gritty particles, while a bright, whimsical game might rely on sparkles and soft glows.

Now, think about your theme and the kinds of particle effects that make sense for your project, whether you’re building it in 2D, 3D, or both.

Ask yourself the following questions:

- What visual effects reinforce your game’s atmosphere? Dust, sparks, fog, trails, magical bursts?
- Should certain events (pickups, hits, damage, game over) have distinctive particle effects to give clear feedback?
- Should characters or enemies have unique effects that help players identify their actions or states?
- How intense should each effect be? Subtle and restrained, or bold and attention-grabbing?
- When should effects play continuously, and when should they trigger only during specific actions?
- Are there moments where not using VFX makes the impact stronger?
- Should effects vary based on speed, power, or distance from the player?

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

## 3. Review your design document

Q&A (0)

### 3D game

Take some time to review the assets provided in the [UCU Game Developer package](https://drive.google.com/uc?id=1Q2CX4Ju-5UgrsJKkc135vu0zImUPvtbP&export=download) that you downloaded and imported earlier.

If you haven’t downloaded and imported those assets, you can do that now.

In the asset pack, you can browse the **Prefabs**> **VFX**folder, which contains a few sample particle systems to get you started. Drag these into your scene to preview them.

### 2D game

Take some time to find sprites you can use in your own 2D game that align with your selected theme. Below are a few links to sites that contain both free and commercial 2D assets:

- [Kenney 2D Assets](https://kenney.nl/assets/category:2D?sort=update)
- [OpenGameArt.org](https://opengameart.org/art-search-advanced?keys=&field_art_type_tid%5B%5D=9&sort_by=count&sort_order=DESC)
- [CraftPix.net](https://craftpix.net/)
- [Top free game assets tagged 2D - itch.io](https://itch.io/game-assets/free/tag-2d)

Mark step as complete

## 4. More things to try

Q&A (0)

- If you want to develop your skills further, explore new concepts, or improve your project, check out some of the optional activities below. Each activity is identified as being either Easy, Medium, or Difficult, so you know what level of difficulty to expect.

These activities are entirely optional, so if you’re not interested, no problem – just skip this step. We do recommend attempting at least one of them in order to get the most out of this learning experience. Good luck!

#### Easy: Win celebration

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

To enhance the gaming experience when the player wins, incorporate a jubilant celebration effect triggered by the existing win activation function in the **PlayerController** script.

#### Medium: Add trailing smoke or dust behind the player as it moves

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

You can enhance the sense of speed of the **Player** GameObject by adding trailing particles behind it. Ensure that the effect only activates when the **Player** GameObject is in motion, which will provide a realistic touch. Keep in mind the effect should dynamically adjust based on the direction of the ball's movement, for a more natural and polished outcome.

Mark step as complete

## 5. Next steps

Q&A (0)

In this tutorial, you created visual effects to add to the visual impact of the game and create a more immersive experience. In the next tutorial, you'll learn how to add user interface elements to the game.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
