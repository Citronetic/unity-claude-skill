[Image: image]

# Challenge: Re-Using Animation Clips

Tutorial

Beginner

+10XP

30 mins

3

(59)

Unity Technologies

[Image: Challenge: Re-Using Animation Clips]Summary

In this challenge, you will bring a model into the scene, create a new Animator Controller, and add several custom Animation Clips. This process is the foundation of re-targeting and reusing animations from other models.

Languages available:

EnglishEnglishEnglish

## 1. Create an Animator on your scene's model

Q&A (0)

- Select the cube in the scene.
- In the Inspector, add an Animator component.
- Create a new Animator Controller, and call it CarRotateAnimationController.
- In the Inspector, add CarRotateAnimationController to the Animator Controller parameter in Cube's Animator component.

Mark step as complete

## 2. Make a new Animation Clip with the target model.

Q&A (0)

- Select the Cube, and open the Animation Window.
- Create a new Animation Clip, and call it Rotation.
- Add the required Rotation key frames to create a rotation motion for the Cube. We rotated the car by 360 degrees over a 5 second period.

[Image: image]Mark step as complete

## 3. Add the custom Animation Clip to the Animator as a new Animation State

Q&A (0)

- Open CarRotateAnimatorController.
- Add the Rotation Animation Clip as a new Animation State.
- Loop the Animation so the Cube continues to Rotate.
- Hit play and try it out.
- Note: To slow down the rotation without modifying the original Animation Clip, modify the clip's Speed value in the Animator Controller Window.

[Image: image]Mark step as complete

## 4. Re-Use the Animation Clip for the Car

Q&A (0)

- Select the SportsCarChassis model in the scene.
- Add an Animator component.
- Drag the CarRotateAnimatorController into the Animator Controller parameter.
- Hit play. The car should now rotate with the cube.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
