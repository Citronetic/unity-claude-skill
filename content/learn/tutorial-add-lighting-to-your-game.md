[Image: image]

# Add lighting to your game

Tutorial

foundational

+10XP

60 mins

1

(9)

Unity Technologies

[Image: Add lighting to your game]Summary

You've learned how to implement lighting in 3D and 2D projects. In this tutorial, you'll apply those skills to add lighting to your game.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

In this tutorial, you’ll add lighting to your game, whether you’re working in 2D, 3D, or decided to try both. By the end, your project will have a lighting solution, just like the example projects shown below.

### 3D

If you’re doing the 3D game, you’ll design a lighting solution that will enhance the experience and align with the theme of your game.

[Image: image]

### 2D

If you’re doing the 2D game, you’ll design a lighting solution that will enhance the experience and align with the theme of your game. Depending on your selected theme and setup, you may not need any lights in your scene, or you may have a game where lighting is essential to the game loop.

[Image: Fish game with additional lights added]Mark step as complete

## 2. Requirements

Q&A (0)

Your game design document (GDD) is still evolving, so take a moment to look at how lighting supports the atmosphere, clarity, and tone of your game.

Lighting is one of the strongest mood-setters you have. A horror game leans into darkness, sharp contrasts, and gloomy environments, while a cheerful adventure might use soft light, warm colours, and broad illumination. Now, think about the lighting approach that suits your project, whether you’re building in 2D, 3D, or both.

Ask yourself the following questions:

- What overall mood should your lighting create? Tense, inviting, mysterious, energetic?
- Do important objects or characters need highlight lighting to draw attention?
- Should the lighting change during gameplay to signal danger, progression, or time of day?
- How will colour temperature and contrast guide the player through the space? Should your game rely on baked lighting, real-time lighting, or a hybrid approach?
- Will lighting be purely functional, heavily stylised, or something in between?

[Image: Sample of lighting in Pincers in Paradise][Image: Screenshot from the example Survive the night game where a character is seen from a top-down perspective and is lighting up a dark space with a flashlight.]Mark step as complete

## 3. Challenge guidance

Q&A (0)

The following sections will provide you with some guidance on each of the tasks in this challenge.

If you need a reminder on how to do this, check out the [**Lighting**](https://learn.unity.com/pathway/game-development/unit/lighting) mission again.

### Add additional light sources to your scene

- Design a lighting solution for your scene based on your theme and design.

#### Bake your lighting (3D)

- Make sure all lights that should be included in the baking process have their mode set to **Baked**.
- Make sure all objects that should be included in the bake are marked as static. This should include everything that will not move at runtime.
- If there’s a need for dynamic lighting in your scene, remember to set the mode for these lights to **Realtime**. Remember that dynamic lights have a drastic influence on performance; use them sparingly.
- Bake your lightmap.

#### Organize your Hierarchy window

Make the management of your scene easier by organizing the GameObjects in your **Hierarchy**window under headings like **Static**, **Dynamic**, **Lighting**, **UI**, and **Other**. Feel free to add your own.

[Image: Organized Hierarchy]

#### Add Light probes to simulate realistic and dynamic lighting effects on objects (3D)

- Create **Light** **probes** that will cover the scene and capture baked light for the dynamic objects.
- Bake your lightmap textures again to see the effect of the **Light** **probes** on the dynamic objects when the game runs.

[Image: Light probes in the scene]

#### A Global Light 2D (2D)

- Add a **Global Light 2D** to your scene.
- Set its **Colour** and **Intensity** to define the overall brightness of the scene.

[Image: image]

#### Make certain objects cast 2D shadows (2D)

- Add a **Shadow** **Caster** **2D** component to any sprite you want to block light.
- Ensure the **Light** **2D** component and the **Shadow** **Caster** component share the same **Light** **Layer** so the shadows respond correctly.

Mark step as complete

## 4. More things to try

Q&A (0)

#### Easy: Create moving lights

Create dynamic lights in the scene by animating some of them. Remember that for this to work, you'll have to set the lights to **Realtime**.

Keep in mind that realtime lighting has a high performance cost, so use them sparingly.

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

## 5. Next steps

Q&A (0)

In this tutorial, you created a custom lighting setup for your game. In the next tutorials, you will continue iterating on and improving your game.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
