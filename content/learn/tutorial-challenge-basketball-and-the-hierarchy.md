[Image: image]

# Challenge - Basketball and the Hierarchy

Tutorial

Beginner

+10XP

60 mins

103

(24)

Unity Technologies

[Image: Challenge - Basketball and the Hierarchy]Summary

`Challenge Overview`:

Use the skills you’ve learned in the previous two lessons to score on a basketball hoop. After you’ve scored, you will have to use the hierarchy and inspector windows to manipulate the way your catapult works. When you’ve found out how to make changes to your catapult, try the *Free Play* activities again using different catapult settings. When you’ve finished working with the catapult settings, look at the code that calculates the values you see inside the simulation.

`Challenge Outcome`:

- Catapult will throw a cannonball through a basketball hoop
- Catapult settings and characteristics will be manipulated
- Editor code will be investigated

`Challenge Objectives`:

In this challenge, you will reinforce the following skills/concepts:

- Using mass and force sliders to send a cannonball to a specific location
- Use the hierarchy menu to select elements of your catapult
- Adjust the launch settings of your catapult using the inspector window in Unity
- Complete the *Free Play* activities without the use of the force and mass sliders
- Adjust the project settings and investigate the effect of your changes in the *Free Play* activities
- Look at the code that allows the physics editor to make calculations

Resources

- [CatapultPhysics.zip](https://unity-connect-prd.storage.googleapis.com/20190628/ea8f7faa-7b2d-44fa-9994-3203a780547d_CatapultPhysics.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952218859)
- [Challenge.pdf](https://unity-connect-prd.storage.googleapis.com/20190704/b9adc10b-9a26-4fd8-9d13-eea799ce7c50_Challenge.pdf?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952218859)
- [Worksheet.pdf](https://unity-connect-prd.storage.googleapis.com/20190704/b13d4626-dad0-4998-b533-c6810c7c7745_Worksheet.pdf?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952218859)
- [Quiz.pdf](https://unity-connect-prd.storage.googleapis.com/20190704/bc3fbb80-2473-4692-8711-58978dbaefbc_Quiz.pdf?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952218859)
- [Formulas and More.pdf](https://unity-connect-prd.storage.googleapis.com/20190704/b30e0146-a0ce-487f-b1a6-4e31cd59e07a_Formulas_and_More.pdf?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952218859)

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

Use the skills you’ve learned in the previous two lessons to get the cannonball through the basketball hoop. After you’ve scored, you will have to use the **Hierarchy**and **Inspector** windows to manipulate the way your catapult works. When you’ve found out how to make changes to your catapult, try the Free Play activities again using different catapult settings. When you’ve finished working with the catapult settings, look at the code that calculates the values you see inside the simulation.

Mark step as complete

## 2. Score a basket

Q&A (0)

In this challenge, you must set the values to throw the ball through the hoop:

[Image: image]

**1.**Enter Play mode and select the**Basketball [Challenge]** button.

**2.**Use the **Cannonball Force** and **Spring Mass** sliders to find a set of values that will allow you to catapult the ball through the hoop.

**Hint**: Use what you've learned in the previous free-play activities and manipulate the spring force and mass sliders.

[Image: image]Mark step as complete

## 3. Adjust the trajectory without the sliders

Q&A (0)

Until now, you’ve used the provided sliders to change the behavior of the catapult and cannonball. Unity exposes all of the various settings to the user so that they can build an application like this without the need for a slider interface.

Your challenge is to adjust the mass of the cannonball without the use of the sliders.

**1.**Enter Play mode and select the **Free Play [Boxes]** button.

**2.**Find the **Cannonball**GameObject in the **Hierarchy**window.

[Image: image]

**3.**Use the **Inspector**window to check which variables are available to you.

**4.**Adjust the variables and run the simulation without changing the **Cannonball Mass** slider and see if you can knock the boxes over.

**Tip**: The cannonball's mass can be changed in the **RigidBody**component of the **Cannonball**GameObject.

Mark step as complete

## 4. More things to try

Q&A (0)

Below are a couple of other things to try once you feel confident about you abilities:

- Change the launch angle of the catapult arm.

**Tip**: You need to find the GameObject that contains these settings.

- Inspect the code to see how the forces and movement are calculated in the context of the Unity physics system.

**Tip**: You will find the scripts in the **Assets**> **Scripts**folder.

Congratulations, you have finished the **Catapult Physics: Forces and Energy** tutorial! In this tutorial, you learned how to calculate the forces, velocity and energy associated with a moving projectile.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
