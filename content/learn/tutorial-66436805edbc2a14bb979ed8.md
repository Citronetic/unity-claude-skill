[Image: image]

# Add furniture to the kid’s room

Tutorial

foundational

+10XP

20 mins

99

(12433)

Unity Technologies

[Image: Add furniture to the kid’s room]SummarySkills

Open the bedroom scene and furnish it with various items to personalize the space.

Languages available:

EnglishEnglishEspañolEnglish

## 1. Mission overview

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

In this tutorial series, you'll explore Unity's capabilities by designing a kid's bedroom scene with dynamic elements like a bouncing ball and a tower of blocks.

You'll learn new skills in 3D navigation, object customization, and using Unity's physics system. You’ll also create prefabs, adjust lighting, and capture your scene with a camera.

This foundational knowledge is vital to creating any type of Unity project.

Mark step as complete

## 2. Tutorial overview

Q&A (0)[Image: image]

In this first tutorial, you’ll fill an empty room with furniture, designing it the way you want.

Mark step as complete

## 3. Open the 3D Scene

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

To begin, you’ll open the empty 3D scene where you'll design a kid’s room from scratch. To start, this scene will only contain the ground and the sky — it’ll be up to you to add everything else.

**Instructions**

In the **Project** window, navigate to **_Unity Essentials** > **Scenes** and double-click **2_KidsRoom_3D_Scene** to open it.

You'll see a big empty white ground object in front of a blue sky in the **Scene** view.

Don’t worry if your view of the scene doesn’t match the view in the example!

Mark step as complete

## 4. Drag the bedroom prefab into the scene

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

Now, you'll add the main structure of the bedroom using a prefab.

**Prefabs** are pre-fabricated assets that you can reuse across your project. In this project we’ve provided you with a whole bunch of prefabs that are ready to use as you design this world, including a prefab of the actual room with the walls, floor, and windows.

**Instructions**

**1.**  In the **Project** window, go to **_Unity Essentials** > **Prefabs** > **Rooms.**

**2.**  Click and drag the **01_Bedroom** prefab onto the center of the ground in the **Scene** view.

**Important:** If you accidentally double-click **01_Bedroom,** you'll see a close-up of the prefab in the **Scene** view. Just click on the small back arrow at the top of the **Hierarchy** window to return to the main scene.

**3.**  Once the bedroom is in the scene, use your Frame, Orbit, Zoom skills to get a good view of the empty room:

- Use **F** to frame in on the bedroom.
- Hold **Alt** (macOS: **Option**), and **left-click** and drag with your mouse to orbit around the room.
- Zoom with the scroll wheel or trackpad to get to a good distance.

Mark step as complete

## 5. Position the bedroom at the origin

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

For consistency and ease of design, you'll position the bedroom at the exact **origin** — or center — of the scene, using the **Transform** component.

Every single object in your scene has a **Transform** component, which allows you to control the object’s position, rotation, and scale.

The origin of a scene is position 0, 0, 0 on the X-, Y-, and Z-axes.

**Instructions**

**1.**  In the **Hierarchy** window, select the **01_Bedroom** GameObject.

**2.**  Go to the **Inspector** window and set the **Position** values in the **Transform** component to **X = 0, Y = 0,** and **Z = 0.**

**Note:**  Remember to save your scene regularly with **Ctrl+S** (macOS: **Cmd+S**).

Mark step as complete

## 6. Add a bed to the bedroom

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

Next, you'll add a bed against the left wall of the room. The bed will be a central piece of furniture around which other items will be arranged.

There are many bed prefabs to choose from, so you’ll want to browse the options using the **Preview** window at the bottom of the **Inspector** window before you drag one into your scene.

**Instructions**

**1.**  Navigate to **_Unity Essentials** > **Prefabs** > **Bedroom** and select each of the beds to preview them at the bottom of the **Inspector** window.

**2.**  Drag a bed prefab into your scene, then use the **Move** and **Rotate** tools to position it with its back against the left wall.

**Important:** Don't double-click the bed prefabs in the **Project** window — just single-click them to preview them.

**Tip:** You can always undo any unwanted edits with **Ctrl+Z**  (macOS: **Cmd+Z**).

Mark step as complete

## 7. Decorate with more furniture

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

Personalize your bedroom by adding some more furniture. Use your own design sense to arrange items like nightstands, dressers, and chests.

**Instructions**

**1.**  From **_Unity Essentials** > **Prefabs** > **Bedroom**, drag furniture items into your scene, then move and rotate them to your liking.

**Tip:**  Frame and orbit around newly placed objects to make sure they’re actually located where you think they are.

**2.**  At a minimum, add a rug and one other piece of furniture. A rocking horse and basketball net might also be fun, since this is a kid’s room after all.

**Important:** Leave one corner of the room empty so you have a place to put your block tower.

**Note:**  Remember to save your scene regularly with **Ctrl+S** (macOS: **Cmd+S**).

Mark step as complete

## 8. Review and proceed to the next tutorial

Q&A (0)

Congratulations on completing the first steps on this room! You've successfully opened a 3D scene, added and positioned a bedroom prefab, and personalized the space with furniture.

Here are some of the things you learned how to do along the way:

- Add an instance of a prefab to a scene by dragging the prefab from the **Project**window.
- Use the **Transform**component to position a GameObject.

**Instructions**

Proceed to the next tutorial where you'll make a ball bounce off a ramp toward the corner of the room.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
