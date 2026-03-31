[Image: image]

# Lesson 1 - Start your 3D Engines

Tutorial

Beginner

+0XP

80 mins

1

Unity Technologies

[Image: Lesson 1 - Start your 3D Engines]Summary

**Overview:**

In this lesson, you will create your very first game project in Unity Hub. You will choose and position a vehicle for the player to drive and an obstacle for them to hit or avoid. You will also set up a camera for the player to see through, giving them a perfect view of the scene. Throughout this process, you will learn to navigate the Unity Editor and grow comfortable moving around in 3D Space. Lastly, you will customize your own window layout for the Unity Editor.

**Project Outcome:**

You will have a vehicle and obstacle positioned on the road and the camera set up perfectly behind the vehicle. You will also have a new custom Unity layout, perfectly optimized for editing.

Resources

- [Prototype 1 - Asset Store](https://assetstore.unity.com/packages/templates/tutorials/create-with-code-prototype-1-driving-simulation-145891)
- [Prototype 1 - Direct Download.zip](https://unity-connect-prd.storage.googleapis.com/20191004/11d568c2-0b8a-4eca-9219-52d05a07eba1/Prototype%201%20-%20Direct%20Download.zip?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035339672)

Languages available:

EnglishEnglishEnglish

## 1. Introduction

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Mark step as complete

## 2. Make a course folder and new project

Q&A (0)

> *The first thing we need to do is create a folder that will hold all of our course projects, then create a new Unity project inside it for Prototype 1.*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

1. On your **desktop** (or somewhere else you will remember), Right-click > create **New Folder**, then name it “Create with Code”
2. [Create a new Unity project](https://learn.unity.com/tutorial/project-setup-processes#60f6aedeedbc2a7e96802196) using the **3D template** - remember to use one of the supported versions of Unity such as the 2022 LTS.
3. Name the project “Prototype 1” and set the file location to the new **Create with Code** folder.
4. Select **Create**, then wait for Unity to open your new project.

Mark step as complete

## 3. Import assets and open Prototype 1

Q&A (0)

> Now that we have an empty project open, we need to import the assets for Prototype 1 and open the scene

**IMPORTANT:**THE ASSETS IN THIS COURSE ARE ONLY COMPATIBLE WITH UNITY VERSION **2018.4**. IF YOU ARE USING A NEWER VERSION OF UNITY, YOU WILL VERY LIKELY ENCOUNTER ERRORS, SO PLEASE MAKE SURE YOU ARE USING THE CORRECT VERSION OF UNITY BEFORE CONTINUING.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

1. Click on one of the two links found in the **Tutorial Materials** tab towards the top of this tutorial page to access the Prototype 1 starter files, then **download**and**import**them into Unity
2. In the **Project**window, in *Assets > Scenes >*double-click on the **Prototype 1 scene** to open it
3. Delete the **Sample Scene** without saving
4. **Right-click + drag** to look around at the start of the road

Mark step as complete

## 4. Add your vehicle to the scene

Q&A (0)

> *Since we’re making a driving simulator, we need to add our own vehicle to the scene.*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

1. In the **Project Window**, open *Assets > Course Library > Vehicles*, then drag a vehicle into the **Hierarchy**
2. **Hold** **right-click + WASD** to fly to the vehicle, then try to rotate around it
3. **Press F** in the Scene view to focus on it, then use the **scroll wheel** to zoom in and out and **hold the scroll wheel** to pan
4. Press F to focus on it, **hold alt+left-click** to rotate around it perfectly
5. If anything goes wrong, press **Ctrl/Cmd+Z**to Undo until it’s fixed

Mark step as complete

## 5. Add an obstacle and reposition it

Q&A (0)

> *The next thing our game needs is an obstacle! We need to choose one and position it in front of the vehicle.*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

1. Go to Course Library > Obstacles and **drag an obstacle** directly into the **Scene view**
2. In the Inspector for your obstacle, in the top-right of the Transform component, click the more options button*>**Reset***
3. In the **Inspector**window, change the **XYZ Location** to **x**=**0**,**y**=**0**, **z**=**25**.
4. In the **Hierarchy** window, **Right-click** > **Rename** your two objects as “Vehicle” and “Obstacle”.

**Note**: In newer versions of Unity, the toolbar that allows you to move, rotate, and scale objects can be found within the **Scene** view.

Mark step as complete

## 6. Locate your camera and run the game

Q&A (0)

> *Now that we’ve set up our vehicle and obstacle, let’s try running the game and looking through the camera.*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

1. Select the **Camera** in the **Hierarchy** window, then press**F** to focus on it.
2. Press the **Play**button to run your game, then press the **Play** button again to **stop** it.

Mark step as complete

## 7. Move the camera behind the vehicle

Q&A (0)

> *In order for the player to properly view our game, we should position and angle the camera in a good spot behind the vehicle*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

1. Use the **Move**and**Rotate tools** to move the camera behind the vehicle looking down on it
2. **Hold Ctrl/Cmd** to move the camera by whole units

Mark step as complete

## 8. Customize the interface layout

Q&A (0)

> *Last but not least, we need to customize the Unity Editor layout so that it’s perfect for editing our project.*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

1. In the upper-right corner, change the layout from “Default” or "Layout" to “**Tall**”.
2. Move the **Game**view beneath the**Scene** view.
3. In the **Project**window, open the dropdown menu in the top-right and select **One-column layout**.
4. In the layout Dropdown, **save a new Layout** and call it “My Layout”.

Mark step as complete

## 9. Lesson Recap

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

New Functionality

- Project set up with assets imported
- Vehicle positioned at the start of the road
- Obstacle positioned in front of the vehicle
- Camera positioned behind vehicle

New Concepts & Skills

- Create a new project
- Import assets
- Add objects to the scene
- Game vs Scene view
- Project, Hierarchy, Inspector windows
- Navigate 3D space
- Move and Rotate tools
- Customize the layout

Next Lesson

- We’ll really make this interactive by writing our first line of code in C# to make the vehicle move and have it collide with other objects in the scene

Mark step as complete

## Complete this Tutorial

Mark all steps complete
