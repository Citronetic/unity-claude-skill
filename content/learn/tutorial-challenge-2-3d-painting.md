[Image: image]

# Challenge 2 - 3D Painting

Tutorial

Beginner

+10XP

60 mins

9

(394)

Unity Technologies

[Image: Challenge 2 - 3D Painting]SummarySkills

In this challenge, you'll apply the skills you learned while making your VR Room in a 3D painting app. In this app, the user can choose the shape they want to paint on, select the color and size of their brush on a handheld palette, and then create their masterpiece!

This challenge will review your skills learned in the following lessons:

- [Audio & Haptics](https://learn.unity.com/tutorial/2-1-audio-and-haptics)
- [Activation Events](https://learn.unity.com/tutorial/2-2-activation-events)
- [Direct & Ray Interactors](https://learn.unity.com/tutorial/2-3-direct-and-ray-interactors)
- [User Interface](https://learn.unity.com/tutorial/2-4-user-interface)

This challenge is part of the [Create with VR course](https://learn.unity.com/course/create-with-vr).

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

**1.  Open the broken 3D painting prototype Scene:**

- From the **Project**window, expand, **Assets** > **Challenges** > **02_3DPainting** > **Scenes**
- Double-click on the **3DPainting_Prototype_Broken** Scene to open it.

**2.  Begin working on the challenge tasks:**

- Work through the tasks outlined in the steps below.
- If you want to push your skills, attempt the optional bonus challenge tasks, as well.
- If you get stuck, there are hints for each task at the bottom of the page.

Mark step as complete

## 3. Challenge tasks

Q&A (0)

**1.  The Canvas that allows you to change the shape on the pedestal follows the camera.**

- This canvas should be stationary next to the pedestal.

**2.  The toggled ray and palette canvas are tracking the opposite hands.**

- The palette should move with the left hand and, when you press the thumbstick or primary button on the right controller, the toggled ray should emit from the right hand.

**3.  The paint brush activation is backwards, starting when the trigger is released and stopping when it’s pressed.**

- The paintbrush should create a trail while the trigger is being held, stopping when the trigger is released.

**4.  The medium brush size button turns invisible when pressed and makes the trail gigantic.**

- The button should turn the same grey color as the other buttons when pressed and change the trail to a size in between the small and large brush sizes.

**5.  The paint brush sound effect stays the same, regardless of how far it is from you.**

- The paint brush sound should be at full volume close to your face, but about 50% volume when your arm is outstretched

Mark step as complete

## 4. Bonus tasks

Q&A (0)

**6.  There is no audio feedback from the UI.**

- Add sound effects for all of the buttons in the UI and a continuous sound effect that plays while the paint brush is in use.

**7.  There is no way to hide the pedestal completely.**

- Add a toggle UI to the menu next to the pedestal that shows/hides the pedestal object when toggled on/off.

**8.  There is no way to save your work.**

- Add a “Print” button that creates a miniature version of your 3d creation on a table next to you.

**9.  There is no way to paint on the back or sides of the object.**

- Add a slider to the UI that rotates the entire pedestal, giving you the ability to paint the back as well.

Mark step as complete

## 5. Hints

Q&A (0)

**Main task hints:**

**1.**The canvas render mode needs to be in “World Space” - not “Screen Space”.

**2.**Look at the input mapping in the XR Controller components for the LeftHand and the RightRay.

**3.**Look at the functions in the Activated and Deactivated events in the paintbrush’s XR Grab Interactable component.

**4.**Make sure to check the alpha (transparency) value of the button tint. Look at the functions on the small and large brushes for references on the ideal trail width.

**5.**Make sure that 3D audio is enabled, and check the 3D audio rolloff curve to make sure it is down to 50% at around 1 meter from the source.

**Bonus task hints:**

**6.**Try using either the PlayQuickSound or the PlaySoundsFromList scripts.

**7.**Use the Toggle() function in the ToggleVisibility script.

**8.**No hints available. Use Google!

**9.**No hints available. Use Google!

Mark step as complete

## Complete this Tutorial

Mark all steps complete
