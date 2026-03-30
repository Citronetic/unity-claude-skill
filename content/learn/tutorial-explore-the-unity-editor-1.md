[Image: image]

# Explore the Unity Editor

Tutorial

foundational

+0XP

10 mins

1534

(35082)

Unity Technologies

[Image: Explore the Unity Editor]Summary

In this tutorial, you will review:

- The Unity Editor interface
- The role of scenes in Unity
- Navigation in a scene

Languages available:

EnglishEnglish한국어English

## 1. Overview

Q&A (0)

This tutorial is a review and reference of the essentials of the Unity Editor. Keep this tutorial handy as a reminder of the windows, tools, and keystrokes you can use to manage your scenes and assets and navigate in the Scene view.

Mark step as complete

## 2. Introduction to the Unity Editor

Q&A (0)

The default Unity Editor layout is organized with the most important windows you’ll need positioned to help you complete basic activities. Let’s start by reviewing them:

Unity Editor interface

[Image: image]

There are five key areas of the basic Editor interface.

#### Scene view and Game view

In the center of the default Unity Editor layout is the **Scene view**. This is your interactive window into the world you are creating. You’ll use the Scene view to manipulate objects and view them from various angles.

In the default layout, the **Game view** also appears in this area; you’ll use the Game view to playtest your game.

#### Hierarchy window

The **Hierarchy** **window** is where you can organize all the things in your project. These things are called **GameObjects**.

If you add a GameObject to your project in Scene view, it will be listed in the Hierarchy. If you delete a GameObject from the scene, it will no longer be listed.

#### Project window

The **Project window** is where you can find all the files (assets) available for use in your project, whether you use them or not.

The **Project** window works like a file explorer, organized in folders. You can drag assets directly from the Project window into the Scene view to add them to the scene.

Note the difference between the **Project** and **Hierarchy** windows: the **Hierarchy window** contains all the GameObjects in the current scene, and the **Project** window contains all the assets available to your entire project.

#### Inspector window

The **Inspector** **window** is where you’ll find and configure detailed information about GameObjects.

When you select a GameObject in Scene view or in the Hierarchy, you’ll see its components in the Inspector. **Components** describe the properties and behaviors of GameObjects.

#### Toolbar

Use the toolbar buttons to change your point of view in the scene, and start and stop Play mode.

The scene navigation functions are hosted in a floating toolbar in your **Scene** view. These functions allow you to move, rotate and scale your selected GameObjects.

Mark step as complete

## 3. Review the Editor layout options

Q&A (0)

You can use the**Layout**menu, found in the under **Window**, to change the arrangement of the windows in the Editor. There are several layouts provided, and you can save your own layouts.

The best layout for the Editor depends on what you are doing and your own personal preferences. For example:

- If you’re spending a lot of time configuring components, you might want to dock the Inspector next to the **Hierarchy**window.
- If you’re doing a lot of environment design, you might want to make the scene view as large as possible.
- If you’re editing the user interface, you’ll want to make sure the **Game** view is visible.

We recommend you use the default layout while you’re learning Unity.

Mark step as complete

## 4. Using scenes in your project

Q&A (0)

Projects in the Unity Editor are organized into scenes. **Scenes** are containers for everything in the experience you are creating.

One way to think about scenes is as discrete experiences. For example, each level in a game could be a separate scene, and the game’s main menu could be another.

A Unity project can have one scene or more than a hundred, depending on its scope and complexity. There aren’t strict rules about exactly how you should organize a Unity project into scenes, except that a project in Unity must have at least one scene.

#### Review the scenes in the project

Scenes in a Unity project are typically stored in a folder named Scenes. Unity projects that we provide on Unity Learn often have this folder pre-created. If you’re creating a project from scratch though, this folder won’t exist until you create it.

To review the scenes in a Unity project, follow these instructions:

**1.**In the **Project** window, use the navigation panel or search bar to find the **Scenes** folder.

**2.**Double-click a scene to open it.

You’ll see the contents of that scene in the **Hierarchy**window and **Scene** view.

Mark step as complete

## 5. Practice navigating the scene

Q&A (0)

When working in Unity Editor, navigating in the Scene view is very important. One way to think about navigating in this window is like operating a drone camera — it lets you examine your GameObjects from any angle or distance.

With practice, you can learn to navigate with ease. There are also more general settings you can use to configure the Scene view.

Let’s quickly review the basics:

- **Pan:**Select the **Hand**tool in the Toolbar, and click and drag in the Scene view to move your view.
- **Zoom:**Holding **Alt** (Windows) or **Option** (macOS), right-click and drag in the **Scene** view to zoom.
- **Orbit:**Holding **Alt** (Windows) or **Option** (macOS),  left-click and drag to orbit around the current pivot point. Note: this option is not available in 2D mode.
- **Focus (Frame Select):**When a GameObject is selected, select **F** with your cursor in the **Scene** view to focus your view on that GameObject.

**Note:** If your cursor is not in the **Scene** view, Frame Select will not work.

#### Flythrough mode

You can also use**Flythrough mode** to navigate in the Scene view by flying around in first person, which is common in many games. To do this:

- Click and hold the right mouse button.
- Use **WASD** to move the view left/right/forward/backward.
- Use **Q** and **E** to move the view up and down.
- Select and hold **Shift** to move faster.

**Note:** Flythrough mode is not available in 2D mode. Instead, holding the right mouse button down while moving the cursor pans around the **Scene** view.

For further guidance, you can [review a complete overview in the Unity Manual](https://docs.unity3d.com/Manual/SceneViewNavigation.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955032442).

Mark step as complete

## 6. Review the tools

Q&A (0)

Effective use of the transform and scene navigation tools is an essential skill in Unity, which allows you to position, scale, and view your GameObjects efficiently in 3D space. With these tools and some practice, you can develop habits to get the results you want quickly and easily.

**Note:** If you are in a scene without any GameObjects to practice with, right-click in the **Hierarchy** window and select **3D Object** > **Cube**.

The keyboard shortcuts for the toolbars correspond to the QWERTY keys at the top left of a standard keyboard. Using these keys, you can switch quickly between the tools and keep your mouse in the **Scene** view.

[Image: image]

**Q:**Hand tool, to pan your view

**W:** Move tool, to select and change position

**E:** Rotate tool, to select and rotate

**R:**Scale tool, to select and change size

**T:**Rect Transform tool, to scale in 2D

**Y:**Transform tool, to move, scale, and rotate with one Gizmo

For each of the transform tools, a Gizmo appears that allows you to manipulate the GameObject along each specific axis. As you manipulate these controls, the values in the **Transform** Component change accordingly.

[Image: image]

You will discover your own system for navigating the Scene view and manipulating GameObjects efficiently. For example, your system might be to rest the fingers of your non-mouse hand on the QWER keys to change tools, rest your thumb on the ALT key to orbit your view of the scene, and move your index finger to the F key to focus on a GameObject as needed.

Mark step as complete

## 7. Practice your Unity Editor skills

Q&A (0)

One way to develop your confidence at navigating in the Scene view and manipulating GameObjects in Unity Editor is to practice.

Try creating a Cube primitive in a Unity project, and then try the moves below. Watch the videos to see how it's done.

**1.**Use the Move tool to move the cube.

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

**2.** Use the Rotate tool to rotate the cube.

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

**3.**Use the Scale tool to resize the cube.

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

**4.** Use the Transform tool to do any combination of move, rotate, and scale.

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

**5.**Pan your view back and forth, so that the cube appears on the right and left sides of your screen.

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

**6.** Zoom your view in and out, keeping the cube in view.

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

**7.**Zoom out from the cube, and use the Focus key to zoom back into it.

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

**8.**Orbit the cube so that you can see all six sides.

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

**9.**Use Flythrough to move your point of view in any direction.

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

**Tip:**If you’re not sure how to complete the above exercises, review the previous two steps to refresh your memory on how to complete each task.

Mark step as complete

## 8. Unity Editor tips and tricks

Q&A (0)

In this video, Unity creators share some of their best tips and tricks to help you develop your confidence in the Editor.

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

**Note:** To view transcripts of videos, select **Show transcript** while playing each video. You can also download a set of PDF files using the link in the **Materials**section at the top of each tutorial page.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
