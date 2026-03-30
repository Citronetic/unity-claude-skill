[Image: image]

# Challenge 3: Control the Animator from a C# script

Tutorial

Beginner

+0XP

10 mins

3

Unity Technologies

[Image: Challenge 3: Control the Animator from a C# script]Summary

*In this tutorial, you will create a basic C# script to control the animator state machine*

Languages available:

EnglishEnglishEnglish

## 1. Use the existing script to trigger various animations on the animator

Q&A (0)

**1.**With the DominoBlock GameObject selected, click **Add Component** and select the Animator State Changer script. Set the Animator reference and add the Trigger Name to the field

[Image: image]

**2.**Press **Play** and use the “Spacebar” keypress to control the trigger.

[Image: image]

**3.**Open the script in a code editor.

[Image: image]

**4.**Notice the primary logic that makes this script function. The animator.SetTrigger can be used to set animator triggers. In this example a key press is used to start the set trigger sequence, but you could adjust this code to set the trigger after a certain time or when a certain event happens in your application.

[Image: image]

**5.**To create multiple DominoBlocks in the scene, create an empty GameObject called Domino and add the DominoBlock as a child to it.

[Image: image]

**6.**This makes the animation local to the parent GameObject which means you can clone the parent GameObject and move them around the scene and keep the animation functioning properly. Place 3 around the edge of the circle in preparation for the next steps.

[Image: image]Mark step as complete

## Complete this Tutorial

Mark all steps complete
