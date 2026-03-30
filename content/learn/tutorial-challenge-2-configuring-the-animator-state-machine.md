[Image: image]

# Challenge 2: Configuring the Animator State Machine

Tutorial

Beginner

+0XP

15 mins

0

Unity Technologies

[Image: Challenge 2: Configuring the Animator State Machine]Summary

*In this challenge, you will configure an Animator component to cycle through the animations you created in the previous challenge*

Languages available:

EnglishEnglishEnglish

## 1. Use the animator to string together multiple animation clips

Q&A (0)

**1.**To handle the transition between the Animation clips, open the Animator window and open the DominoBlock Animator.

[Image: image]

**2.**You should see the three animation clips you previously created in the Animator. To transition from one to another right-click and select **Create Transition** and drag the arrow to the other animation clip.

[Image: image]

**3.**Note that you can modify the animation speed by selecting the animation in the Project window and modifying its speed. The speed is set to 5 for each of these animations, you can set the speed to your preference.

[Image: image]

**4.**Press **Play** and you’ll see the result in the scene.

**5.**Create the following animation sequence:

[Image: image]

**6.**Now that you have successfully set up the three animation transitions, configure an animator parameter that’ll be used to control when the transition happens. Click the Parameters tab in the Animator window and create a Trigger parameter called “TriggerScale”.

[Image: image]

**7.**To configure the animation triggers, select the transition in the Animator and in the inspector, click the **+** button on the Conditions to create a new condition under which the transition will occur. Add the TriggerScale to the condition.

[Image: image]

**8.**Now press **Play** and in the Animator window you can manually Trigger the Scale.

[Image: image]Mark step as complete

## Complete this Tutorial

Mark all steps complete
