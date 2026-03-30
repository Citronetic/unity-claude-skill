[Image: image]

# Creating a Worldspace UI

Tutorial

Beginner

+10XP

5 mins

211

(204)

Unity Technologies

[Image: Creating a Worldspace UI]Summary

Unity features several different types of User Interface options that allow users to create UI that precisely fit their applications needs. There are two main types of UI categories: Screen Space and World Space. In this tutorial, you will learn to create a Worldspace UI.

Languages available:

日本語English日本語日本語

## 1. Creating a Worldspace UI

Q&A (0)

This tutorial has been verified using Unity 2019.4.10f1 LTS - [https://learn.unity.com/tutorial/creating-a-world-space-ui-2019-3](https://learn.unity.com/tutorial/creating-a-world-space-ui-2019-3)

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 2:27Loaded: 0.00%0:00Remaining Time -2:271xPlayback Rate

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

Unity features several different types of User Interface options that allow you to create UI that fits your needs. There are two main UI categories: Screen Space and World Space. Screen Space projects the UI onto the viewer’s screen and is what most people think of when discussing UI. World Space UI places the interface directly within the Scene environment so that it exists in 3D space. XR applications often make use of this kind of UI, as it helps make the experience feel more natural.

Creating UI in Unity begins by creating a Canvas. The Canvas object defines what is and is not part of the UI system and governs how the UI is rendered on the screen.

1. In the Hierarchy, right-click and select **UI**> **Canvas**. The Canvas may not be immediately visible, as it’s extremely large in comparison to the Scene.

2. In the Inspector, locate the Canvas component and change the Render Mode to **World Space**.

3. If this UI will be receiving inputs (for example, will have a button to push), drag the Main Camera into the Event Camera slot. **(Figure 01)**

[Image: image]

The Canvas can now be moved freely in the Scene, but it’s still extremely large. The easiest way to scale the Canvas to an appropriate size is to group it beneath an object that already exists in the Scene and reset the Canvas.

4. In the Hierarchy, select the Canvas and parent it beneath an object in the Scene. **(Figure 02)**

[Image: image]

5. Select the Canvas and in the Inspector, click on the gear in the upper-right corner of the Rect Transform component and select **Reset** (**Figure 03**).

[Image: image]

6. Un-parent the Canvas by dragging it outside of the object in the Hierarchy.

7. Continue to move and scale the Canvas until it appears in the position in the world that you wish it to occupy (**Figure 04**).

[Image: image]ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
