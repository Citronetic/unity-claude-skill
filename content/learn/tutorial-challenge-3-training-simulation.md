[Image: image]

# Challenge 3 - Training Simulation

Tutorial

Beginner

+10XP

60 mins

1

(249)

Unity Technologies

[Image: Challenge 3 - Training Simulation]SummarySkills

In this challenge, you'll apply the skills you learned while making your VR Room in an industrial training simulation. In this app, using buttons, knobs, levers, and joysticks, the user has to collect crates dropped into the factory and stack them on a nearby platform.

This challenge is part of the [Create with VR course](https://learn.unity.com/course/create-with-vr).

This challenge will assess skills learned in the following lessons:

- [Comfort & Accessibility](https://learn.unity.com/tutorial/3-1-comfort-and-accessibility?uv=2020.2&courseId=60183276edbc2a2e6c4c7dae&projectId=6018353dedbc2a0f634b7918)
- [Optimization](https://learn.unity.com/tutorial/3-2-optimization?uv=2020.2&courseId=60183276edbc2a2e6c4c7dae&projectId=6018353dedbc2a0f634b7918)
- [Lighting](https://learn.unity.com/tutorial/3-3-lighting?uv=2020.2&courseId=60183276edbc2a2e6c4c7dae&projectId=6018353dedbc2a0f634b7918)

Languages available:

EnglishEnglishEspañol한국어English

## Overview Video

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

## 1. Challenge walkthrough

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

Mark step as complete

## 2. Getting started

Q&A (0)

**1.  Open the broken Training prototype Scene:**

- From the **Project**window, expand, **Assets** > **Challenges** > **03_Training** > **Scenes**
- Double-click on the **Training_Prototype_Broken** Scene to open it.

**2.  Begin working on the challenge tasks:**

- Work through the tasks outlined in the steps below.
- If you want to push your skills, attempt the optional bonus challenge tasks, as well.
- If you get stuck, there are hints for each task at the bottom of the page.

Mark step as complete

## 3. Challenge tasks

Q&A (0)

**1.  The black fade in screen appears in the middle of the factory.**

- The black fade in screen should cover the user’s entire field of view.

**2.  The “Console Labels” toggle makes the entire console disappear.**

- Only the labels on the console should disappear when the toggle is deactivated.

**3.  The lighting on the floor looks really bad.**

- Make the floor lighting look as detailed as the other surfaces.

**4.  The pile of boxes in the back left corner does not have realistic baked lighting and shadows.**

- The shadows on all the piles of boxes should be the same.

**5.  The console is not responding to the baked light above it - it looks very dark.**

- Keeping the light above the console baked for optimization, the console should appear to be lit by the light above it..

Mark step as complete

## 4. Bonus tasks

Q&A (0)

**6.  There is no visual indicator on the magnet when it is active vs inactive.**

- The magnet should turn a different color when it is active vs inactive.

**7.  The user has access to their ray and direct interactors throughout the entire app.**

- The user should not be able to use the console while reading the instructions and their rays should disappear when they have clicked through the instructions.

**8.  There is no way for the user to be able to control the speed of the magnet. [Expert}**

- There should be a setting that controls the speed of the magnet.

**9.  There is no way for the user to track or save their progress in this training. [Expert]**

- There should be some user interface that displays how many boxes have been successfully lifted and how much time has elapsed.

Mark step as complete

## 5. Hints

Q&A (0)

**Main task hints:**

**1.** To better visualize the fade canvas, temporarily set its Canvas Group Alpha value to 1, then make sure it’s not too far from the camera.

**2.**Make sure the correct object is being Activated/Deactivated by the toggle.

**3.**From the top of Scene view, change the Draw Mode from Shaded to Baked Lightmap - you will see that the lightmap resolution on the floor is very low compared to other objects.

**4.**In order for objects to be baked into the lightmap, they need to be marked as “static”.

**5.** Light probes allow dynamic objects to respond to baked lighting conditions.

**Bonus task hints:**

**6.**You can use the same function you used to change the indicator light on the remote.

**7.**In the ShowMessageFromList component on the welcome Text object, there is an On Complete () event. On this event, you should toggle off the rays and toggle on the console’s functionality, which should be disabled by default.

**8.**No hints available. Use Google!

**9.**No hints available. Use Google!

Mark step as complete

## Complete this Tutorial

Mark all steps complete
