[Image: image]

# Complete your 2D Puzzle Game

Tutorial

foundational

+10XP

20 mins

27

(4143)

Unity Technologies

[Image: Complete your 2D Puzzle Game]SummarySkills

Fill out the 2D room with pushable furniture, collectibles, and a UI that tracks the player's progress.

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

In this tutorial, you'll fill out the 2D room with furniture that the player can push around, and then fill it with collectibles for the player to search for. At the end, you’ll even add a simple user interface that tracks the number of collectibles remaining, which will make it feel like a fun puzzle game.

When you’re ready to get started, go to the next step.

Mark step as complete

## 2. Fill out the room

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

Now that your 2D room and player character are set up, the next step is to add some furniture to the room. The player will eventually be able to push this furniture around, making the room much more interactive and fun.

**Instructions**

**1.** In the **Project** window, go to the **_Unity Essentials** > **Sprites** > **Furniture** folder.

**2.**  Select furniture sprites you want to add to your room and drag them into the **Scene**view.

**Important:**  Don’t add any rugs to the room yet! You’ll do that in the next step.

**3.** Use the **Move**tool (**W** key) and **Rotate**tool (**E** key) to position and orient your furniture.

These keyboard shortcuts allow for quick switching between tools.

**Important:**  Do not put one piece of furniture on top of another — when you add **Rigidbody** and **Collider** components to them later, they’ll explode out of each other because they’d be intersecting physical objects.

**Tip:**  You should also avoid putting furniture right in a corner — this will allow you to push them around more easily.

**Note:**  Remember to save your scene.

Mark step as complete

## 3. Add a rug on the correct layer

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

If you put a rug in your scene right now, it might sit on top of the furniture. Rugs don’t usually do that. You’ll need to use the **Order in Layer** property of the **Sprite Renderer** component to control exactly how your objects are stacked in 2D space.

This will allow you to strategically place the rug beneath furniture and other movable objects, but still above the floor.

**Instructions**

**1.** In the **Project** window, navigate to the **_Unity Essentials** > **Sprites** > **Rugs** folder.

**2.**  Drag one of the rug sprite prefabs into your scene.

Notice that it goes on top of your furniture.

**3.**  In the **Hierarchy** window, use the **Shift** key to select all the Furniture objects. Then, in the **Sprite Renderer** component, set the furniture’s **Order in Layer** to **10.**

**4.**  Repeat this process for the **Player** GameObject, setting its **Order in Layer** to **10.**

**5.**  Now select any rugs you have in the scene and set the **Order in Layer** to **5.**

**Tip:**  When you space out the layers this way (rather than just using Layer 1, 2, 3, etc), it leaves room for additional elements you might want to introduce between the layers later.

**6.**  Use the **Rect** tool to stretch the rug’s corners to the position you want.

Notice that the rug’s pattern repeats as it stretches rather than being distorted. These rugs are set up as **9-sliced sprites**, which involves splitting the image into nine portions so that when you resize the sprite, it keeps the sprite in proportion.

Mark step as complete

## 4. Make the furniture pushable

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

If you test your scene now, the player will be able to go through the furniture like a ghost. Just like with the player, these physical furniture objects need **2D Collider** and **2D Rigidbody** components to collide and move around as expected.

**Instructions**

**1.**  In the **Hierarchy** window, select all furniture objects, not including the rugs, by holding **Shift** or **Ctrl** (macOS: **Cmd**) to select multiple objects at once.

**2.**  With all furniture selected, go to the **Inspector** window and select **Add Component.** Search for and add a **Rigidbody 2D** component to each selected object.

**3.**  Set the **Gravity Scale** of each **Rigidbody 2D** component to **0** to prevent the furniture from falling to the bottom of the scene.

**4.**  With all the furniture still selected, select **Add Component** again and search for **Box Collider 2D.** Add this component to introduce collision detection to each piece of furniture.

If you added any circular furniture (like the lamp or plant), you’ll need to replace the **Box Collider 2D** component with a **Circle Collider 2D** component that more accurately represents its shape.

**5.**  Select one of your circular furniture sprites and locate its **Box Collider 2D** component. Either right-click the component’s name or select the component’s **More** menu (**⋮**), select **Remove Component,** then add a new **Circle Collider 2D** component instead.

**6.**  Test the scene by entering **Play** mode.

Notice how the objects now collide with each other and the player, but they slide like they’re on ice. You’ll fine-tune their physical properties in the next step to make things feel more realistic.

Mark step as complete

## 5. Increase the furniture’s drag

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

The furniture movement is not very realistic. Let's make the furniture behave more appropriately when the player pushes it. The **Rigidbody 2D** component’s **linear and angular damping** values simulate resistance that objects encounter when moving.

**Instructions**

**1.** In the **Hierarchy** window, select all the pushable furniture objects again.

Remember, don’t select the rugs!

**2.**  In the furniture’s **Rigidbody 2D** component, set the **Linear Damping** to a value between **5** and **10.**

**3.**  Enter **Play** mode to test the new linear damping.

The furniture should no longer slide across the floor, but it will still rotate endlessly like a spinning top.
**4.**  Exit **Play** mode and, with the furniture still selected, set the **Angular Damping** to a value between **5** and **10.**

**5.**  Enter **Play** mode again to test the new angular damping.

The furniture should no longer spin.

Feel free to experiment with those damping values to get the furniture sliding the way you want.

Mark step as complete

## 6. Increase the furniture’s mass

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

The furniture is coming to a stop once it’s pushed, but there’s one thing that still feels off: it’s just as difficult for the player to move a shoe as it is to move a couch.

Adjusting the **mass** of heavier items will add another layer of realism, making larger pieces more challenging to move, which will make the entire experience more fun and immersive.

**Instructions**

**1.** In the **Scene**view, adjust the mass of heavier furniture items to make them harder to move.

For example, set the mass of a heavy couch to **10,** which makes it ten times more difficult to move than the default value of **1.**

**2.**  Test the scene to observe the changes.

Set the mass of all the furniture objects until they feel appropriately difficult to push around, especially relative to each other.

Mark step as complete

## 7. Add a collectible to the scene

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

With the room completely set up, you’re ready to introduce some collectibles into the scene.

For this scene, we have provided with you 2D collectible sprite prefabs that already include the following components:

- A **2D Collider** component (either Box or Polygon) with **Is Trigger** enabled so that the player can detect it but not bump into it, just like the 3D collectible.
- A **Collectible 2D** script component, which is very similar to the **Collectible** script you wrote earlier — it rotates the collectible and spawns a particle effect when it’s collected.

With these components already set up, the collectible should work properly as soon as you drag it into the scene.

**Instructions**

**1.**  In the **Project** window, navigate to the **_Unity Essentials** > **Sprites** > **Collectibles** folder.

**2.**  Drag your desired sprite prefab into your scene in front of the player.

**3.**  Enter **Play** mode and get the collectible.

You’ll notice that the collectible is destroyed and a VFX object spawns.

**Note:**  If you’re interested, go to the **Scripts** > **Provided Scripts** folder, select the **Collectible2D** script, and scan through the code in the **Inspector** window. Note the key differences between this script and the Collectible script you wrote:

- Instead of rotating the collectible along the Y-axis, it rotates it along the Z-axis to align with the 2D world's plane.
- Instead of the default **OnTriggerEnter** and **Collider** code, it uses **OnTriggerEnter2D** and **Collider2D.** These optimized 2D functions avoid 3D physics calculations, which aren't needed in a 2D context.

Mark step as complete

## 8. Design a level full of collectibles

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

You now have everything you need to transform this scene from a simple 2D environment into an engaging experience that challenges players to explore and interact with the game world.

You can strategically place collectibles throughout the room to guide player movement, encourage interaction with objects, and introduce puzzles or challenges. Draw inspiration from classic puzzle designs to create a fun and challenging gameplay experience.

**Instructions**

**1.**  Select the collectible object you've already added to your scene.

This will be your template for the others.

**2.**  Duplicate the collectible by pressing **Ctrl+D** (macOS: **Cmd+D**).

Nothing will appear to happen, but a new duplicate object will appear in the **Hierarchy** window.

**3.**  To ensure even spacing between collectibles, hold **Ctrl** (macOS: **Cmd**) while moving the duplicate.

This action enables Unity's snapping feature, which helps to maintain consistent spacing.

**4.**  Continue duplicating the collectible and placing the copies throughout the room.

Arrange them in a manner that encourages exploration and interaction, such as under furniture or along a path that requires maneuvering around obstacles. You can scatter them or line them up; they don't have to be perfect.

**5.**  Test your level by playing through it, ensuring that all collectibles are accessible.

**Note:**  Remember to save your scene.

Mark step as complete

## 9. Clean up the Hierarchy window

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

You probably noticed that your **Hierarchy** window is now more cluttered than ever, since it has pushable furniture, decorative rugs, and a whole bunch of new collectibles. Take a moment to clean up and organize your **Hierarchy** window.

**Instructions**

**1.** Select all pushable furniture objects in the **Hierarchy** window using the **Shift** or **Ctrl** (macOS: **Cmd**) keys. Right-click one of the selected objects and select **Create Empty Parent,** then name it something like “Pushable Objects” for clarity.

**2.**  Since your rugs are distinct from the pushable furniture, create a new parent GameObject for them named something like “Static decorations” or “Rugs”.

**3.**  Select all your collectibles and create an empty parent GameObject for them named “Collectibles”.

Mark step as complete

## 10. Add the UI prefab

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

In this step, you’ll introduce a User Interface (UI) that displays the number of remaining collectibles in the scene. A **UI** is any set of on-screen elements, like buttons and menus, that allow players to interact with the game and receive information.

You'll be surprised how much this simple UI transforms your scene from an interactive environment to a more game-like experience.

Since this is not a learning experience about creating UI’s, you'll use a provided prebuilt UI prefab, but there are lots of resources available for you to learn more about creating a UI in Unity if you’re interested!

**Instructions**

**1.** In the **Project** window, navigate to **_Unity Essentials** > **Prefabs** > **UI.**

**2.**  Drag the **Remaining_Collectibles_UI** prefab into the **Hierarchy** window.

You won’t see anything change in the **Scene**view.

**3.**  Test your game to see how the UI tracks and updates the number of collectibles as you collect them, adding a layer of fun and engagement to the gameplay experience.

**4.** If you’re interested, expand the **Remaining_Collectibles_UI** GameObject in the **Hierarchy** window to see how it’s set up.

By selecting some of the objects, you may be able to figure out how to change the color, font, or position of the UI elements. Remember, you can always undo any unwanted changes with **Ctrl+Z** (macOS: **Cmd+Z**).

**Tip:**  You can preview any changes you make to the UI in the **Game** view.

**Note:**  Remember to save your scene.

Mark step as complete

## 11. Review and proceed to the next tutorial

Q&A (0)

Congratulations on completing your 2D scene! You created a fun, interactive, game-like experience.

Here are some of the things you learned along the way:

- Set the **Order in Layer** property to control how objects appear in a 2D scene.
- Explain how 9-sliced sprites work.
- Adjust **Rigidbody**properties, including mass and damping, to control how objects respond to physical forces.
- Explain why scripts for 2D interactions use 2D functions.

**Instructions**

Proceed to the next tutorial, where you’ll use the **Sprite Editor** to configure a 2D animated cat or dog.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
