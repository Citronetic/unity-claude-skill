[Image: image]

# Make a tower of prefab blocks

Tutorial

foundational

+10XP

35 mins

68

(11587)

Unity Technologies

[Image: Make a tower of prefab blocks]SummarySkills

Use new primitive shapes to build a balanced structure, learning about colliders and prefabs.

Languages available:

EnglishEnglishEspañolEnglish

## 1. Overview

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

In this tutorial, you’ll create a few block towers that your bouncing ball will be able to knock over.

When you’re ready to get started, go to the next step.

Mark step as complete

## 2. Add a block and reset its Transform

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

You’re about to begin the construction of your block tower.

To make your first building block, you’ll start by adding a primitive cube. Just like you did with the sphere, you’ll add it to the scene, rename it, then reset its position to the origin as a starting point.

However, this time you’ll use a new technique for creating the new 3D object and a new technique for resetting the object’s position.

**Instructions**

**1.**  At the top of the **Hierarchy** window, select the **Add** (**+**) button to access the**Create** menu, then select **3D Object** > **Cube.**

This technique gets you to the same menu as right-clicking an empty area in the **Hierarchy** window.

**2.**  Rename the cube “Block”.

**3.**  In the **Inspector** window, select the **More** (**⋮**) menu in the upper-right corner of the **Transform** component and select **Reset** to reset the cube’s **Transform** properties, including resetting its position to the origin (0,0,0).

This should position the cube in the center of the room, halfway sunk into the floor.

Mark step as complete

## 3. Reposition and scale the block

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

In this step, you’ll reposition the block so that it’s in the path of the ball and edit its scale so that it looks more like a classic kid’s building block.

However, rather than editing the scale in the **Transform** component directly like you did with the ball, you’ll actually use the **Scale** tool in the **Scene** view.

After you master the **Scale** tool, you’ll have mastered the three most important tools in the **Scene** view: Move, Rotate, and Scale.

**Instructions**

**1.**  In the **Hierarchy** window, select the **Block** GameObject.

**2.**  Use the **Move** tool to reposition the cube above the floor where it will get hit by the ball.

**3.**  Select the **Scale** tool and use the X, Y, and Z handles to scale it down so it’s a tall, skinny block that the ball can knock over. You can confirm in the **Inspector** window, but it should be about **0.1, 0.25, 0.1** on the **X, Y,** and **Z** scale values.

**Tip:**  For faster editing, flip between the **Move**, **Rotate**, and **Scale** tools using the W, E, and R keyboard shortcuts in the **Scene** view.

**4.**  Press **F** to frame the object in the **Scene** view for a clearer look and make sure that it’s sitting just above the floor.

Remember, you can always undo any unwanted edits with **Ctrl+Z** (macOS: **Cmd+Z**).

**5.**  Enter **Play** mode to see the ball unable to knock over the block, which is something you’ll fix in the next step

**6.**  Exit **Play** mode.

Mark step as complete

## 4. Add Rigidbody Component

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

In this step, you’ll add a **Rigidbody** component to the**Block** GameObject.

Initially, the block won’t move when hit by the ball, acting like an immovable brick wall. This behavior is due to the lack of a **Rigidbody** component, which governs the physics properties of the GameObject.

With a **Rigidbody** component, the block can react to a collision and fall over.

**Instructions**

**1.**  With the **Block**GameObject selected, select **Add Component** at the bottom of the **Inspector** window, then search for and add a **Rigidbody** component.

**2.**  Enter **Play** mode to test the interaction.

Observe that the block now gets knocked over when hit by the ball.

**Note:**  Remember to save your scene often with **Ctrl+S** (macOS: **Cmd+S**).

Mark step as complete

## 5. Create a Block Prefab

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

In this step, you’ll transform the **Block** GameObject, which you've already enhanced with a **Rigidbody**component, into a reusable prefab.

**Prefabs** in Unity are GameObjects, with all their components and properties already set up, that you can reuse as a template. You can keep these custom prefabs in a folder in the **Project** window for future use.

**Instructions**

**1.**  In the **Project** window, navigate inside the **Prefabs** folder.

**2.**  Select the **Add** (**+**) button at the top of the **Project** window, then select **Folder** and name the new folder “My Prefabs”.

**Tip**:  Just like you did in the **Hierarchy** window, you can access this **Create** menu using the **(+)** button or by right-clicking in an empty space in the **Project** window.

**3.**  Click and drag your **Block** GameObject from the **Hierarchy** window into the **My Prefabs** folder in the **Project** window.

**Note**:  When you drag a GameObject from the **Hierarchy** window into any folder in the **Project** window, it converts the object into a prefab.

Observe that the block in the **Hierarchy** window turns blue, indicating it is a copy — or an **instance** — of a prefab.

Mark step as complete

## 6. Create a tower from prefab blocks

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

Now you’ll use the block prefab you created to build a small tower in your Unity scene. The process of constructing a tower not only tests your ability to use prefabs efficiently, but it also allows you to experiment with object positioning in Unity.

**Note:** The tower doesn’t need to be perfect! As long as it stands up, it'll work well.  In fact, it may even be more visually interesting if it’s not perfectly aligned.

**Instructions**

**1.**  From the **Scene** view toolbars, locate the **Center / Pivot** dropdown and make sure that **Center** is selected.

**Note:** If the "Center/Pivot" and "Global/Local" buttons aren’t visible in your editor by default, click the three vertical dots in the top-right corner of the Scene window, go to the **Overlay Menu**, and check the eye icon next to **Tool Settings** to enable them.

If **Pivot** is active, your blocks will end up halfway through the floor at their pivot point.

**2.**  Drag multiple instances of the **Block** prefab from the **Project** window into your scene, positioning them to form a tower.

**Hint:**  In order to make sure your blocks are aligned, you should examine the tower from all angles. Sometimes it might look aligned from one angle, but not from another. Try framing the block you’re working with, then orbiting it or using the **Scene** view gizmo to examine it from different angles.

**3.**  After constructing your tower, enter **Play** mode to observe how the tower behaves.

**4.**  Exit **Play** mode and make any necessary adjustments to the position of the blocks to refine your tower's stability or design.

Mark step as complete

## 7. Reduce the weight in prefab editing mode

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

You might have noticed that the ball had a hard time knocking over all those blocks. By default, the **Rigidbody** component sets an object’s mass to 1.0 kilogram (kg). Your 1kg ball is trying to knock over a tower made of three 1kg blocks!

In this step, you will reduce the weight of your **Block** prefab, and in doing so, reduce the weight of every block in the scene — that’s the beauty of prefabs!

To do this, you'll enter **prefab editing mode,** a powerful feature in Unity that allows you to edit a prefab asset directly. Prefab editing mode isolates the prefab, enabling you to make changes without affecting the rest of your scene.

**Instructions**

**1.**  In the Unity Editor, locate your **Block** prefab in the **Project** window.

**2.**  Double-click the **Block** prefab to enter prefab editing mode.

This mode allows you to make changes to the prefab independently of your scene. You’ll know you’re in prefab editing mode when the rest of your scene disappears from the **Scene** view and you can only see the block.

**3.**  With the **Block** prefab in prefab editing mode, navigate to the **Rigidbody** component in the **Inspector** window and reduce the **Mass** property to 0.1kg.

**4.**  To exit prefab editing mode, select the small back arrow at the top of the **Hierarchy** window.

This action will return you to the main scene.

**5.**  After exiting prefab editing mode, test the changes by entering **Play** mode. Observe how the ball can now much more easily knock over the tower.

Remember to exit **Play** mode when you’re done testing.

Mark step as complete

## 8. Add a material to the prefab

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

In this step, you'll change the block’s material using prefab editing mode so it’s not that boring gray anymore. You'll see the power of prefabs once again, as you modify a single asset and see the change instantly reflected across all instances of that prefab.

**Instructions**

**1.**  Open the **Block** prefab in prefab editing mode by double-clicking it in the **Project** window.

This isolates the prefab for editing.

**2.**  In the **Inspector** window, in the **Mesh Renderer**component, locate the **Material** property of the **Block** prefab.

**3.**  Select the **Object** picker (**⊙**) next to the **Material** property.

This action opens a window displaying all available material assets in your entire project.

**4.**  Browse through the list of materials. You'll see various options, including some designed for furniture, floors, and so on — some of them might have some unintuitive names. Select a material that appeals to you and apply it to the Block prefab.

**Note:**  You can also create your own material like you did for the ball if you don’t see one you like!

**5.**  Exit prefab editing mode by selecting the back arrow at the top of the **Hierarchy** window.

Observe how the new material is now applied to all instances of the block in your scene.

**Note:**  Remember to save your scene regularly with **Ctrl+S** (macOS: **Cmd+S**).

Mark step as complete

## 9. Organize blocks with a parent GameObject

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

In this step, you’ll address the clutter in your Unity project's **Hierarchy** window caused by numerous **Block** prefabs.

You'll learn to organize these blocks under a single parent GameObject, simplifying your scene and making it more manageable.

As a reminder, a **parent** GameObject is a GameObject that serves as a container for other GameObjects, known as **child** GameObjects. These terms describe a hierarchical relationship, much like a family tree.

**Instructions**

**1.**  In the **Hierarchy** window, select the first **Block** GameObject, then hold down the **Shift** key and select the last **Block** prefab in your list to select all blocks in between. You can also hold **Ctrl** (macOS: **Cmd**) to select individual additional GameObjects.

**2.**  Right-click the selected blocks and choose **Create Empty Parent.**

This action creates a new parent GameObject with the individual blocks indented as child GameObjects.

**3.**  Rename this new GameObject something descriptive, like “Block_Tower”.

**4.**  With the **Block_Tower** GameObject selected, you can move, rotate, and scale the entire group of blocks as one unit.

Mark step as complete

## 10. Turn the block tower into a prefab

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

The block tower you've created consists of multiple individual blocks arranged in a specific structure.

If you convert this entire structure into a prefab, you enable the possibility of reusing this complex object multiple times within your project.

You’ll see that prefabs are particularly beneficial when creating repeated structures or patterns in your game environment.

**Instructions**

**1.**  In the **Hierarchy** window, select the Block_Tower GameObject.

**2.**  Click and drag it into the **Prefabs** > **My Prefabs** folder within the **Project** window (next to your **Block** prefab).

This action converts your GameObject into a reusable prefab.

Now, you can easily create multiple instances of your **Block_Tower**throughout your scene.

**3.**  Add a few more of these towers to your scene to make for a more interesting collision.

**4.**  Enter Play mode to test the collision path with multiple towers.

**Note:**  If you want, edit the block tower in prefab editing mode to make it a more interesting structure.

Mark step as complete

## 11. Adjust the ball's mass

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

With so many towers in your scene, the ball may once again have a hard time knocking all of the blocks over. But what would happen if the ball was ten times heavier? Or one hundred times heavier?

**Instructions**

**1.**  Select the Ball GameObject.

**2.**  In the **Inspector** window, in the **Rigidbody** component, increase the mass to ensure it topples the block structure when it collides.

**3.**  Enter Play mode and watch the blocks fly!

**Note:**  Remember to save your scene often with **Ctrl+S** (macOS: **Cmd+S**).

Mark step as complete

## 12. Review and proceed to next tutorial

Q&A (0)[Image: image]

Congratulations on creating a fun block tower experiment for the kids’ bedroom!

Here are some of the things you learned how to do along the way:

- Reset the **Transform**component to reposition an object at the origin.
- Scale objects with the **Scale**tool.
- Explain how to use prefabs in a scene.
- Make a new prefab from an existing GameObject in a scene.
- Identify a prefab instance in the **Hierarchy**window.
- Switch the tool handle position of a GameObject between **Center**and **Pivot**.
- Edit a prefab in prefab mode.
- Assign a material to a GameObject by changing the **Mesh Renderer** component.
- Make an empty GameObject as a parent for other GameObjects.
- Arrange GameObjects in parent-child relationships using the **Hierarchy**window.

**Instructions**

Proceed to the next tutorial where you'll edit the lighting, change the background, and position your camera for a perfect shot of your scene.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
