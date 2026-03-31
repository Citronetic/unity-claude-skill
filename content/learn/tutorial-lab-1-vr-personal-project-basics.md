[Image: image]

# Lab 1 - VR Personal Project Basics

Tutorial

Beginner

+10XP

120 mins

14

(633)

Unity Technologies

[Image: Lab 1 - VR Personal Project Basics]SummarySkills

In this first lab, you'll fill out a design document to lay out your concept, and then set up a basic VR scene using simple primitive shapes.

This lab will draw on skills learned in the following lessons:

- [VR Project Setup](https://learn.unity.com/tutorial/vr-project-setup)
- [VR locomotion](https://learn.unity.com/tutorial/vr-locomotion)
- [Grabbable objects](https://learn.unity.com/tutorial/grabbable-objects)
- [Sockets](https://learn.unity.com/tutorial/sockets-g)

This lab is part of the [Create with VR course](https://learn.unity.com/course/create-with-vr).

Resources

- [Project Design Doc - VR [WORD].docx](https://unity-connect-prd.storage.googleapis.com/20210212/c8a63efb-f45e-4b3c-bfad-c42f351d2dfc/Project%20Design%20Doc%20-%20VR%20[WORD].docx?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035259814)
- [Project Design Doc - VR [PDF].pdf](https://unity-connect-prd.storage.googleapis.com/20210212/00cd91a4-a6aa-4c93-abaa-004949d72618/Project%20Design%20Doc%20-%20VR%20[PDF].pdf?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035259814)
- [Project Design Doc - VR [GDOC]](https://docs.google.com/document/d/18zUYaiwvXaOpKAUaUxqwVbzzO1qCrkLt2goQDZsEjnE/copy)

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

## 1. Fill out your design document

Q&A (0)

Before you get working on your project, you need a plan for what you’re actually going to create. The best way to do that is with a Design Document.

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

**1.  Get a blank copy of the VR Project Design Doc**

- Click [here to create a copy of a Google Doc](https://docs.google.com/document/d/18zUYaiwvXaOpKAUaUxqwVbzzO1qCrkLt2goQDZsEjnE/copy)
- Click [here to download as a Word document](https://connect-prd-cdn.unity.com/20210212/c8a63efb-f45e-4b3c-bfad-c42f351d2dfc/Project%20Design%20Doc%20-%20VR%20[WORD].docx?_ga=2.111809031.209333272.1612709644-59568313.1601905412)
- Click [here to download as a PDF](https://connect-prd-cdn.unity.com/20210212/00cd91a4-a6aa-4c93-abaa-004949d72618/Project%20Design%20Doc%20-%20VR%20[PDF].pdf?_ga=2.111809031.209333272.1612709644-59568313.1601905412)

**2.  Fill out Section 1 (App Info) of the document:**

- Give your app a tentative title
- Place a checkmark (using copy and paste) next to the one or two categories that best describe your app.

**3.  Fill out Section 2 (Pitch) of the document:**

- Describe the goal of the app.
- Describe why it will be especially effective in VR.
- Describe what users will do during the app, at a high level.
- Specify whether your app will target devices with 3 or 6 degrees of Freedom

**4.  Fill out Section 3 (Basics) of the document:**

- Describe where the app will take place and how users will get around the environment.
- List the types of objects users will be able to grab and any socket interactors you will likely use.

You should now have the first 3 sections of your Design Document complete, providing enough direction to complete the rest of this lab.

Mark step as complete

## 2. Open and run a new VR project

Q&A (0)

Just like you did at the start of the VR Room project, the first thing you have to do for your personal projects is create a new Unity project configured for VR.

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

**1.  Create a new Unity project for your personal project:**

- Follow the instructions in the [VR Project Setup tutorial](https://learn.unity.com/tutorial/vr-project-setup).
- Move the extracted folder to the same directory as your VR Room project.
- Instead of naming your project “VR Room - [Your Name]” - name it “VR Personal Project - [Your Name]”.

**2.  Import the VR Course Library into your project:**

- Follow the instructions in the [VR Project Setup tutorial](https://learn.unity.com/tutorial/vr-project-setup).

**3.  Configure your project to run on your specific device:**

- Follow the instructions in the [VR Project Setup tutorial](https://learn.unity.com/tutorial/vr-project-setup).

**4.  Make sure you are ready to start developing your personal project:**

- Rename and open the **Starter Scene**.
- Make sure you can successfully run your project on your VR device or with the Device Simulator.

**5.  If you do not want the Challenges in your project:**

- In the Project Window, right-click the **Challenges** folder and click **Delete**.

You should now have a new project open to a starter scene and be able to test it in VR or with the Device Simulator.

Mark step as complete

## 3. Set up the basic scene with primitives

Q&A (0)

Rather than using assets from the course library, you can develop this basic scene using primitives and simple colored materials:

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

**1.  Create the ground:**

- In the Hierarchy, select the **Plane** object.
- Reset the Plane’s position to 0, 0, 0 in the Inspector.
- Rename it “Ground”.

**2.  Keep your materials organized:**

- Create a new “Materials” folder inside the Assets directory.

**3.  Create a material for the Ground:**

- In the Materials folder, **right-click** > **Create** > **Material**.
- Rename the new material “Ground”.
- Edit the Base Map color in the inspector.
- Drag the material onto your Ground object.

**4.  Block out the rest of your basic scene:**

- Continue creating and scaling additional primitive objects (cubes, spheres, planes, capsules, etc) and applying simple colored materials.
- Do not create grabbable objects yet - only critical environmental things like a room, a table, etc

**Note:** If you have objects that will be reused throughout the scene, you should create a “Prefabs” folder and drag those objects into it to make them prefabs.

You should now have your basic scene blocked out with primitives at an appropriate scale.

Mark step as complete

## 4. Set up basic locomotion

Q&A (0)

Now that you have the basic scene blocked out, you need some way of getting around it.

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

**1.  Allow the user to move around the scene:**

- Follow the instructions in the [VR Locomotion tutorial](https://learn.unity.com/tutorial/vr-locomotion) to set up Teleportation Areas.
- It may be helpful to temporarily make your entire ground object a Teleportation Area for testing and development purposes.
- Alternatively, it may be helpful to use continuous movement for testing and development purposes.

**2.  Allow the user to teleport to important locations in the scene:**

- Follow the instructions in the [VR Locomotion tutorial](https://learn.unity.com/tutorial/vr-locomotion) to set up Teleportation Anchors.
- Instead of using the mats like you did in your Room, create 1 x 0.1 x 1 cubes named “Teleportation Anchor”
- Remember to set the Match Orientation property to match the anchor’s forward direction.

You should now be able to move around your basic scene.

Mark step as complete

## 5. Set up basic grabbable objects

Q&A (0)

The last thing  you’ll do is create any grabbable object prefabs you expect the user to interact with.

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

**1.  To make more complex objects with primitives:**

- Create an Empty object.
- Rename the object.
- Create Primitive child objects to represent the mesh of the form of the object.

**2.  To make your objects grabbable:**

- Follow the instructions in the [Grabbable Objects tutorial](https://learn.unity.com/tutorial/grabbable-objects).
- Add components on the Empty parent object, not the primitive child objects.

**3.  To add sockets to your scene:**

- Follow the instructions in the [Sockets tutorial](https://learn.unity.com/tutorial/sockets-g).

**4.  To make your interactable objects into Prefabs:**

- Drag each new interactable object into the Prefabs folder.

You should now have basic functioning prefabs for the main grabbable objects in your scene.

Mark step as complete

## 6. Organize your Hierarchy

Q&A (0)

Before your Hierarchy gets too crowded, you should take a  moment to re-organize it

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

**1.  To make organizer objects in your Hierarchy:**

- In the Hierarchy, create new empty GameObjects named “XR,” “LIGHTING”, “STATIC,” and  “DYNAMIC,”
- Reset all of their positions to 0, 0 0.

**2.  To organize your objects into categories:**

- Drag objects from your Hierarchy either onto the organizer objects (to make child objects) or underneath the organizer objects (to use the organizer objects as headers)

Your Hierarchy should now be organized by category.

Mark step as complete

## 7. Recap

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

**New Functionality:**

- VR project set up
- Scene  blocked out with primitives
- Locomotion around the scene
- Grabbable objects
- Socket interactors

**New Concepts & Skills:**

- Applying VR basics, such as locomotion and grabbable objects in your own VR app.

**Next Lab:**

- Implement core functionality and interactions.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
