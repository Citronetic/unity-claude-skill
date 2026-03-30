[Image: image]

# Challenge 1 - Architecture Review

Tutorial

Beginner

+10XP

60 mins

10

(906)

Unity Technologies

[Image: Challenge 1 - Architecture Review]SummarySkills

In this challenge, you'll apply the skills you learned while making your VR Room in an architecture review app. In this prototype, the user can examine a building at real-world scale, inspect a miniature 3d model and floor plan of that building, and even use a ruler to take measurements as they look around.

This challenge will assess skills learned in the following lessons:

- [VR locomotion](https://learn.unity.com/tutorial/vr-locomotion)
- [Grabbable objects](https://learn.unity.com/tutorial/grabbable-objects)
- [Sockets](https://learn.unity.com/tutorial/sockets-g)

This challenge is part of the [Create with VR course](https://learn.unity.com/course/create-with-vr).

Languages available:

한국어EnglishEspañol한국어한국어

## 개요 비디오

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

단계를 완료로 표시

## 2. Getting started

Q&A (0)

**1.  Open the broken architecture review prototype Scene:**

- From the **Project**window, expand, **Assets** > **Challenges** > **01_Architecture** > **Scenes**
- Double-click on the **Architecture_Prototype_Broken** Scene to open it.

**2.  Begin working on the challenge tasks:**

- Work through the tasks outlined in the steps below.
- If you want to push your skills, attempt the optional bonus challenge tasks, as well.
- If you get stuck, there are hints for each task at the bottom of the page.

단계를 완료로 표시

## 3. Challenge tasks

Q&A (0)

**1.  The measuring stick and clipboard aren’t attaching properly to the left wrist.**

- The clipboard should be flipped around and the measuring stick should snap to the spot just to the left of the clipboard.

**2.  The house model is snapping to the pedestal from very far away.**

- The house model should snap to the pedestal when you place it on top of the pedestal.

**3.  You can currently snap the ruler and clipboard to the pedestal and the house model the left wrist.**

- You should only be able to put the house model on the pedestal, while the clipboard and measuring stick should only be able to snap to the wrist.

**4.  The dining table is too tall.**

- The table should be exactly 0.74 meters (or 29 inches) high.

**5.  The teleportation anchor next to the pedestal puts the player upside-down and facing away from the pedestal.**

- Teleporting here should orient the player upright and towards the pedestal.

단계를 완료로 표시

## 4. Bonus tasks

Q&A (0)

**6.  The ray on your right hand uses all the default settings.**

- Change the shape of your ray to a smooth bezier curve to make teleporting easier and edit the valid and invalid colors to fade from transparent to opaque.

**7.  The scene should have some ambient sound.**

- Add an ambient wind sound in the background and randomized bird sounds that seem to be coming from different locations around the house.

단계를 완료로 표시

## 5. Hints

Q&A (0)

**Main task hints:**

**1.**Look at the position and rotation of the Attach Transforms for your left hand sockets.

**2.** Look at the size of the Sphere Collider on the pedestal socket.

**3.**Look at the Interaction Layer Masks of the sockets and grabbable objects.

**4.**Try creating a measuring stick that is exactly the right height and putting it next to the table.

**5.**Look at the local orientation of the anchor as well as the “Match Orientation” setting in its Teleportation Anchor component.

**Bonus task hints:**

**6.**Look in the XR Ray Interactor component to edit the line’s shape and the XR Interactor Line Visual component to edit its colors.

**7.**Make sure your audio source is set to the 3D “Spatial Blend,” then, if you want, use the OnTimedInterval and PlaySoundsFromList components to randomize the bird sounds.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
