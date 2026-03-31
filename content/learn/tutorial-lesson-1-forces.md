[Image: image]

# Lesson 1: Forces

Tutorial

Beginner

+10XP

60 mins

60

(34)

Unity Technologies

[Image: Lesson 1: Forces]Summary

In this tutorial, you will learn about how forces interact to produce projectile motion of a cannonball as it is launched from a catapult. You will begin by opening the Unity editor and downloading the project assets by following the included link. When you have the assets loaded and configured, you will start lesson one and begin working through the included steps. By changing the sliders that control your cannonball’s mass and the spring force of your catapult, you will watch how the forces applied by a catapult affect the arc and speed of a projectile. Using the data set you collect from the launch; you will calculate the acceleration of your cannonball. Once you are finished with the lesson activity, you will move on to the target free play section and experiment with mass and force until you are able to hit the center of a target.

You will be able to explain the relationship between the forces applied to a cannonball, the mass of the ball, and the ball’s acceleration. Using what you've learned, you will find the optimal mass and force settings needed to hit the bullseye on a target.

`Learning Objectives`:

By the end of this lesson, you will be able to:

- Adjust the mass of the cannonball being launched from a catapult.
- Adjust the force applied to a cannonball by a catapult.
- Understand the relationship between a force applied to a cannonball and its velocity.
- Understand the relationship between a force applied to a cannonball and the distance it travels.
- Use the velocity calculated in the Unity editor to determine the acceleration of a cannonball at different points in its arc.

*Note:  Follow along in the worksheet that can be found under *Tutorial Materials.* This is also where you can find other important resources like the Formulas and More page.

Resources

- [Lesson 1.pdf](https://unity-connect-prd.storage.googleapis.com/20190704/77b41f35-aaa9-4c3f-80df-5f3d19e4b5dc_Lesson_1.pdf?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035347985)
- [Worksheet.pdf](https://unity-connect-prd.storage.googleapis.com/20190704/6bebf20c-404a-4010-bfde-7b46adfba9dd_Worksheet.pdf?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035347985)
- [Formulas and More.pdf](https://unity-connect-prd.storage.googleapis.com/20190704/d2861be0-88b7-42e7-907b-da2456325935_Formulas_and_More.pdf?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035347985)
- [CatapultPhysics .unitypackage.zip](https://unity-connect-prd.storage.googleapis.com/20240202/6d1ab035-3b6b-4ac6-9c3f-f89339d5dda4/CatapultPhysics%20.unitypackage.zip?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035347985)

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

In this project, you will have a chance to explore the physics involved in a catapult launch. Lessons on forces and energy will guide your exploration and a final challenge will test your knowledge. You will be manipulating multiple variables in the engine itself to produce changes in velocity, acceleration, distance and more!

*This project is powered by Enable Education. You can find a link to the Enable Education website in the Project Materials to the right.*

**Project Objectives**

At the end of this project, you will be able to:

- Adjust the mass of the cannonball being launched from a catapult.
- Adjust the force applied to a cannonball by a catapult.
- Understand the relationship between a force applied to a cannonball and its velocity.
- Understand the relationship between a force applied to a cannonball and the distance it travels.
- Use the velocity calculated in the Unity editor to determine the acceleration of a cannonball at different points in its arc.
- Adjust the mass of a cannonball and the force being used to launch it and understand the relationship between mass, force, and energy.
- Understand the relationship between elastic potential energy and kinetic energy.
- Understand the relationship between the kinetic energy involved in the launch of a cannonball and the gravitational potential energy that a cannonball gains as it travels higher.
- Explain the relationship between the law of conservation of energy and the way a catapult launches a cannonball.
- Use kinematic equations to find the acceleration of a ball as it launches from a catapult.

Mark step as complete

## 2. Before you begin

Q&A (0)

#### New to Unity?

If you’re new to Unity, welcome! The [**Unity Essentials learning pathway**](https://learn.unity.com/pathway/unity-essentials) has been designed to help you get set up and ready to create in the Unity Editor. We recommend you complete this pathway before continuing with the **Catapult Physics; Forces, and Energy tutorial.**

#### Update the Unity Hub

Before you begin to set up your Unity project, consider updating your Unity Hub to the latest release. If you are using an older version of the Hub, there may be differences between the guidance provided and your experience.

#### Review the Unity Editor basics

If you need to refresh your memory of the Unity Editor basics, you can take a moment to review [**Explore the Unity Editor**](https://learn.unity.com/tutorial/explore-the-unity-editor-1) at any time.

Mark step as complete

## 3. Download the asset package

Q&A (0)

In this step, you'll open the Unity Editor and configure it so that you can start the lessons!

**1.**Scroll up to the **Overview**section of this page, locate the Tutorial Materials and select the link labeled **CatapultPhysics.zip**. Download the file and save it somewhere where it will be easy to find.

[Image: image]

**2.**Extract all the files from the zip package to a location of your choice.

**3.**Open the Unity Hub.

**4.**In the Unity Hub, create a new project using the 3D Core template. If you are not familiar with this process, you can review the [Project setup processes](https://learn.unity.com/tutorial/project-setup-processes#6566074eedbc2a1d950fa759) tutorial.

Your Unity project may take a few minutes to open.

**5.** When the project opens, from the main menu, select **Assets**>**Import Package** >**Custom Package**.

**6.**Browse your computer for the unzipped file, select it, and select **Open**.

**7.**Make sure everything is selected in the**Import Unity Package** window, then select **Import**.

[Image: image]

**8.**In your **Project**folder, go to **Assets**> **Scenes**and double-click the PhysicsCatapult scene to open it.

[Image: image]

**9.** You should now see a catapult. If you don´t see the catapult in the centre of the scene window, select the Catapult GameObject in the Hierarchy and press F on your keyboard.

**10.** From the main menu, select **Window**>**Physics Config** **Window**.

**11.**Click and drag the **EditorPhysicsConfig**tab to the rightmost side of the screen and dock it.

[Image: image]Mark step as complete

## 4. Experiment with force variables

Q&A (0)

Before the tension is released and the cannonball is launched, the cannonball remains stationary because the mass of the cannonball and the tension holding it down cancel out the force being applied by the catapult’s spring.

There are complex forces acting on the cannonball as it goes from its resting position to the position at launch. The force the spoon is exerting on the cannonball that keeps it from flying outwards is called **centripetal force**. The force that the cannonball exerts on the spoon that pushes away from the center as it is being launched is called **centrifugal force**.

In this section, you’ll experiment with different force variables to see the impact of the changes on the ball's trajectory:

**1.**Select the **Lesson 1 [Forces]** button.

[Image: image]

**2.**Select the **Start Playing**button.

**3.**Select Proceed to Step 1

**4.**Using the two available sliders, change the settings to two random numbers.

[Image: image]

**5.**Select **Proceed to Step 2** to see how the selections you made using the mass and force slider affect the way your cannonball is launched.

**6.**Select**Proceed to Step 3** and record the velocity of the cannonball at the apex of its arc.

Mark step as complete

## 5. Calculate the cannonball's acceleration

Q&A (0)

In this section, you will use data from the simulation to calculate the acceleration of the cannonball.

To calculate acceleration, you must gather a few data points and use a basic physics formula. The formula you'll need is F=ma, but a [reference sheet](https://connect-prd-cdn.unity.com/20190704/d2861be0-88b7-42e7-907b-da2456325935_Formulas_and_More.pdf) with all the required information is provided:

**1.**Download the [Formulas and More reference](https://connect-prd-cdn.unity.com/20190704/d2861be0-88b7-42e7-907b-da2456325935_Formulas_and_More.pdf) sheet from the Tutorial Materials section at the top of this tutorial.

[Image: image][Image: image]

**2.**Download the worksheet also listed under the Tutorial Materials and follow along on the worksheet as you continue through the lessons.

[Image: image]

**3.**Enter Play mode

**4.**Select the **Lesson 1** **[Forces]**button and pick a setting for your mass and spring force.

**5.**Proceed through the three steps as before and take note of the velocity of the cannonball again.

**6.**Using the velocity data points you’ve recorded and the provided reference sheet, calculate the acceleration of the cannonball from prelaunch to the apex of its arc.

**7.**Using the velocity data points you’ve recorded and the provided reference sheet, calculate the acceleration of the cannonball from the apex of its arc to when it settles on the ground.

**8.**In the worksheet, calculate the cannonball's acceleration after it’s launched using the resultant force and the mass you've selected with the sliders.

**Teacher Tip**: The only force acting on the cannonball at this point is gravity.

[Image: image]Mark step as complete

## 6. Open Target Free Play and Use Variable Forces to Hit the Target

Q&A (0)

In this section, you will use what you have learned to hit a given target with the cannonball:

**1.**Enter Play mode.

**2.**Select the**Free Play [Target]** button. A wall with a target is now presented to you.

**3.**Try to hit each of the colored rings on the target by changing the mass of the cannonball and the catapult’s spring force, starting with the black ring.

**4.**Once you’ve hit each of the colored rings on the target, try and hit the bullseye at the target’s center.

**5.**Once you’ve found a set of mass and spring force values that allow you to hit the center of the target, find a way to hit the center of the target with the mass set to its lowest and highest values.

[Image: image]

In this lesson, you learned about the impact of mass and force on the trajectory of a projectile. You also learned how to calculate the acceleration of a projectile with given data points.

In the next section, you'll learn about the different types of energy involved in the motion of an object.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
