[Image: image]

# Challenge: Re-targeting Animations

Tutorial

intermediate

+10XP

20 mins

7

(40)

Unity Technologies

[Image: Challenge: Re-targeting Animations]Summary

In this challenge, you will practice re-targeting imported animations for different biped models. Using an imported animation from Mixamo, you will create a new animator Controller, configure the humanoid model, and add imported Animation Clip as a new animation state.

Languages available:

EnglishEnglishEnglish

## 1. Setup the new model

Q&A (0)

- Select Adam in the Hierarchy.
- Select Rig in the Inspector.
- Ensure the animation Type is set to Humanoid
- Ensure Avatar Definition is set to "Create from This Model"
- Hit apply to apply your changes.
- Note: the model's hierarchy must be supported in order to copy the Avatar Definition from another Avatar, as long as all the files use the same bone structure.

Mark step as complete

## 2. Configure the model's bone structure

Q&A (0)

- Select Configure.
- Ensure all of the required bones are dragged into the corresponding Adam Avatar Bones parameters.
- Ensure Adam is in a T-Pose, for proper re-targeting.
- When finished, hit "Done"

[Image: image]Mark step as complete

## 3. Create a new Animation Controller and add it to Adam's Animator

Q&A (0)

In the Hierarchy, select Adam.

Create a new Animator Controller, and rename it to AdamAnimatorController. Double click it to open the Animator Controller Window.

Drag the new Animator Controller (*AdamAnimatorController)* into the Animator Controller parameter (in Adam's Animator)

[Image: image]Mark step as complete

## 4. To reuse Animation Clips, add an Animation Clip to Adam's Animator Controller.

Q&A (0)

- Select Adam, with the Animator Controller Window open.
- Drag in the Mixamo Animation Clip *HiphopDancingAnim*, imported from the Mixamo library.
- Set up a new transition from the Entry State to the new Animation state, and set the Mixamo state as the Default State.

[Image: image]

- Hit play to try it out.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
