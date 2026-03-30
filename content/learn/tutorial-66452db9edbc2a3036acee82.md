[Image: image]

# Set up a 2D room

Tutorial

foundational

+10XP

20 mins

38

(5075)

Unity Technologies

[Image: Set up a 2D room]SummarySkills

Set up the 2D player character that the user can move around an empty room with boundary walls.

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

In this 2D Mission, you'll create a top-down 2D version of the interactive living room scene you created earlier. Just like in the 3D scene, you'll control a character, trying to collect all the objects in a room. By completing this scene, you'll learn how working in 2D is similar to working in 3D, but also how it’s different.

Mark step as complete

## 2. Tutorial overview

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

In this first tutorial, you'll set up the 2D player character in a basic room with boundary walls.

Mark step as complete

## 3. Explore the 2D scene

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

The scene that you’ll start with represents a basic 2D room setup, viewed from a top-down perspective. In **top-down** games, the camera angle is positioned above the action, pointing straight down. This genre often emphasizes strategic thinking, exploration, and puzzle-solving, as players can see more of the game world compared to first-person or side-scrolling perspectives.

The starter scene includes a simple 2D floor and a camera configured for 2D viewing.

**Instructions**

**1.**  In the **Project** window, go to **_Unity Essentials** > **Scenes,** then double-click **5_TopDown_2D_Scene** to open it.

**2.**  With the scene open, browse through the **Hierarchy** window to identify the GameObjects in the scene:

- **A Main Camera:** This camera is configured to use **Orthographic** mode instead of the default 3D **Perspective** mode, which is necessary for 2D gameplay.
- **A Floor:** This is an image of an empty wood floor, which will be seen from a top-down perspective.

**3.** In the **Hierarchy** window, double-click the **Floor** GameObject to frame it in the **Scene** view, then orbit around the floor using **Alt+left-click** (macOS: **Option+left-click**) to see that it is completely flat.

Mark step as complete

## 4. Switch to 2D view

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

Unity offers a specialized 2D view of your scene. This view removes the forward-to-back Z-axis entirely, and instead focuses just on the X- and Y-axes. This adjustment restricts scene navigation to just panning and zooming.

**Instructions**

**1.**  Locate and select the **2D** button at the top of the **Scene**view.

This action switches the view from 3D to 2D, optimizing the **Scene**view for 2D development.

**2.**  Try to look around the scene like you would in 3D by right-clicking and dragging within the **Scene**view.

Notice that unlike in 3D view, the view does not rotate; instead, it only pans across the scene.

**3.**  Experiment with panning (right-click and drag) and zooming (scroll wheel or trackpad) in the scene — this is the main way to navigate in 2D mode.

**4.**  Note that the **Scene**view gizmo has disappeared from the upper-right corner of the **Scene**view.

You don't need the **Scene**view gizmo in 2D view because orbiting is disabled — you are no longer using the Z-axis perspective because 2D games do not have depth. You are just using the XY plane now.

Mark step as complete

## 5. Add your player character sprite

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

Just like you did in the living room scene, you’ll now add a player character to the scene. You’ll have the same selection of characters (a robot vacuum, a toy car, etc), but this time they will be 2D sprites instead of 3D models. **Sprites** are 2D graphics that are used to represent characters, objects, and other elements within a game.

**Instructions**

**1.**  In the **Project** window, navigate to **_Unity Essentials** > **Sprites** > **Characters** and browse the available character sprites.

**2.**  Click and drag your desired character sprite into the **Scene**view, positioning it towards the left side of the room.

**3.** With the sprite selected, ensure its **Z** position is set to **0** in the **Transform** component in the **Inspector** window to keep it aligned with the other objects in the 2D plane.

**4.** Briefly switch out of 2D mode and orbit to see how the sprite sits flat directly on the background floor object.

**5.**  In the **Hierarchy** window, rename the sprite “Player” for clarity and future reference.

Mark step as complete

## 6. Configure a Rigidbody 2D component

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

Unlike the **Rigidbody** component used for 3D objects, the **Rigidbody 2D** component is optimized for 2D physics. This component enables your objects to obey the laws of physics, such as gravity and force, within a 2D space.

**Instructions**

**1.**  In the **Hierarchy** window, select the **Player** GameObject.

**2.**  In the **Inspector** window, select **Add Component** and search for **Rigidbody 2D.** Select it to add it to your player character.

**Important:** Make sure to add the **Rigidbody 2D** component, rather than the default **Rigidbody** component used for 3D applications.

**3.**  Enter **Play** mode to see the **Player** GameObject fall out of the bottom of the screen.

This type of gravity might make sense in a 2D side scroller, but it doesn’t make sense in a top-down game.

**4.**  Exit **Play** mode and, in the **Rigidbody 2D** component, adjust the **Gravity Scale** property to **0.**

This will stop gravity from affecting the player.

Even though you disabled gravity, you still need the **Rigidbody 2D** component so that the player can move around.

**5.**  Enter **Play** mode again to ensure the player character now stays put in the room, then exit **Play** mode.

**Note:**  Remember to save your scene!

Mark step as complete

## 7. Add the PlayerController2D script

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

Next, you’ll add a player controller script that allows you to control the movements of the 2D player.

Unlike Unity's built-in components, such as the **Rigidbody 2D** component, **PlayerController2D** is a custom script we’ve provided for you designed to manage player inputs and movements within a 2D environment.

**Instructions**

**1.** In the **Project** window, navigate to **_Unity Essentials** > **Scripts** > **Provided Scripts,** then locate the **PlayerController2D** script.

If you’re interested, feel free to open the script, read through it, and see if you can figure out how it works. It has a lot of comments that should help you out.

**2.**  Select the **Player** GameObject to show its components in the **Inspector** window, then drag the **PlayerController2D** script directly into the **Inspector** window to add it as a component to the **Player** GameObject.

**Note:**  You can also drag the script directly onto the **Player** GameObject in the **Scene**view or use the **Add Component** button in the **Inspector** window to add the script.

**3.**  With the **PlayerController2D** script added, you can now configure its properties, including its speed and whether or not you want the player to be able to move diagonally.

**4.** Test the player controls in **Play** mode.

Your character should now move with either the arrow keys or the WASD keys.

**Tip:**  If you edit values in the **Inspector** window, you might have to click within the **Game**view window to regain control of the Player.

Mark step as complete

## 8. Lock your aspect ratio

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

**Aspect ratio** describes the relationship between the width and the height of a screen. Old-fashioned TVs and the very first films, for example, used a 4:3 aspect ratio. That means that the screen was 4 units wide and 3 units high. However, modern widescreen TVs and most modern films use a wider 16:9 aspect ratio.

The **Game** view **aspect ratio** menu allows you to simulate how your game will look on different screen sizes and shapes during development.

Up to this point, you have been using a **Free Aspect** ratio in the **Game** view, which means that the aspect ratio depends on the **Editor** window's size.

However, while you're developing a game, it can be helpful to use the aspect ratio that your game's users will see on their devices. You can even set an aspect ratio that is best for your game regardless of the device so that you don't have to accommodate every screen shape, such as vertical portrait mode.

**Instructions**

**1.** Enter **Play** mode again to test your game.

**2.** Find the **aspect ratio** dropdown, usually located in the top bar of the **Game** view.

**3.**  Your view should be set to **Free Aspect** by default, but if it’s not, set it to **Free Aspect** now and resize the **Game** view.

Notice that you can no longer see the entire floor, and the player can exit the viewable area.

**4.**  Select **16:9** from the **aspect ratio** dropdown to set the **Game** view to a widescreen aspect ratio.

This ratio matches the dimensions of the floor, so the entire floor will always be in view.

**5.** Resize the **Game** view again.

Notice that the entire floor now stays consistent even while the window changes size.

**6.**  Exit **Play** mode when you’re done testing.

Mark step as complete

## 9. Add a wall

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

Now that you have your player in the room, you need walls to prevent that player from moving off-screen.

In the same way that you used a primitive cube to create your building blocks in the kid’s room, you’ll use Unity’s provided 2D sprite shapes to make this wall.

You’ll also use a new tool in the **Scene** view toolbar — the **Rect** tool — to quickly and easily move and reshape the sprite.

**Instructions**

**1.**  In the **Hierarchy** window, right-click and select **2D Object** > **Sprite** > **Square** to create a new square sprite.

This square is the start of your wall.

**2.**  Rename the sprite “Wall_Bottom” for clarity.

**Note:**  Check to make sure that the object’s **Z** position value is set to **0** so that it’s on the same Z plane as the floor object.

**3.**  With the square sprite selected, switch to the **Rect** tool from the toolbar.

You should see four blue circles at the corners of the square and a donut-shaped blue circle at its center, which represents the object’s pivot point.

**Note:**  You could also press the **T** key on your keyboard to access the **Rect** tool, which is the next letter in the row of toolbar shortcuts you have already used (QWERT).

**4.**  With the **Rect** tool you can control the object’s shape and move it around. Click and drag the corners or sides to stretch it across the desired edge of your room. The white wall should overlap the bottom edge of the floor.

**5.** Enter **Play** mode to see how your bottom wall looks.

The wall won’t actually work yet; the player can go right through it! You’ll fix that next.

Mark step as complete

## 10. Add 2D colliders

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

As you probably remember, colliders define the physical boundaries of objects, allowing them to interact with each other. Just like Unity has a 2D version of a **Rigidbody** component, it also has 2D versions of colliders:

- Instead of a **3D Box Collider,** there’s a **2D Box Collider**.
- Instead of a **3D Sphere Collider,**there’s a **2D Circle Collider**.
- There are a lot of other 2D colliders to fit your assets’ needs.

You’ll use colliders to stop the player from passing through the wall.

**Instructions**

**1.**  Select the **Wall** GameObject in the **Hierarchy** window. In the **Inspector** window, select **Add Component,** then search for and select **Box Collider 2D** to add it to the wall.

**2.**  Select your player character in the **Hierarchy** window.

**3.**  Depending on the shape of your character, add either a **Box Collider 2D** or a **Circle Collider 2D** component.

For the Robot vacuum and UFO, you’ll likely want a **Circle Collider** component.

**3.**  Enter **Play** mode to test.

Your player character should now collide with the wall, unable to pass through it.

Mark step as complete

## 11. Make the remaining walls

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

You have one wall done — you just need three more!

**Instructions**

**1.**  Select the **Wall** GameObject you've already created in the **Hierarchy** window.

**2.**  Duplicate the wall object by pressing **Ctrl+D** (macOS: **Cmd+D**). Rename this duplicate to indicate its position (For example, “Wall_Top”).

**Tip:**  Right after duplicating an object, press the **F2** key (macOS: **Return** key) to quickly rename the selected duplicate. Then press **Enter** (macOS: **Return**) again to confirm the new name.

**3.**  Use the **Move** tool to adjust the duplicate's position to the opposite side of the original wall.

Don’t worry — the placement doesn’t have to be perfect. It just has to overlap the edge of the play area.

**4.**  Duplicate the top wall, then use a combination of the **Rect** tool and **Move** tool to create Wall_Left and Wall_Right.

**5.**  To organize the **Hierarchy** window, select all wall objects (using the **Shift** or **Ctrl** (macOS: **Cmd**) keys. Right-click one of the selected objects and select **Create Empty Parent.**

This action groups the walls under a single GameObject, which you can name “Walls” for clarity.

**6.**  Test the scene to ensure all walls are correctly positioned and prevent the player from moving beyond the designated game area.

**Note:**  Remember to save your scene!

Mark step as complete

## 12. Review and proceed to the next tutorial

Q&A (0)

Congratulations on setting up your first 2D scene with your player in a room surrounded by walls.

Here are some of the things you learned how to do along the way:

- Switch between 2D view and 3D view of a scene.
- Explain the differences between navigating in 2D space vs. 3D space.
- Define sprite.
- Adjust the aspect ratio of **Game**view to playtest using the same view that users will see.
- Use the **Rect**tool to move and scale 2D objects.
- Explain the differences between 2D colliders and 3D colliders.
- Duplicate a GameObject.

**Instructions**

Proceed to the next tutorial where you'll complete your 2D game, including adding pushable furniture, collectibles, and even a user interface!

Mark step as complete

## Complete this Tutorial

Mark all steps complete
