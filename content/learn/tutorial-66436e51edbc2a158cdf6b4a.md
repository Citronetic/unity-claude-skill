[Image: image]

# Make a bouncy ball

Tutorial

foundational

+10XP

30 mins

35

(8197)

Unity Technologies

[Image: Make a bouncy ball]SummarySkills

Make a ball bounce off a ramp toward the corner of the room.

Languages available:

EnglishEnglishEspañolEnglish

## 1. Overview

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:07Loaded: 0.00%0:00Remaining Time -0:071xPlayback Rate

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

In this tutorial, you’ll create a ball that bounces off a ramp and toward the corner of the room. Eventually, you’ll build a block tower that the ball will crash into, but first you need to get that ball rolling.

As you complete these steps, you’ll learn how to create new 3D shapes, apply custom materials, and implement physics in your scene.

When you’re ready to get started, go to the next step.

Mark step as complete

## 2. Create and rename a sphere

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:18Loaded: 2.07%0:00Remaining Time -0:181xPlayback Rate

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

The first step in creating a bouncing ball is adding a simple sphere in the scene.

Unity provides you with a number of primitive shapes that you can add, including a sphere, a cube, a cylinder, a capsule, and even a flat plane. These simple shapes can be used as building blocks and as placeholders for more complex models.

Here, you'll create a sphere and rename it “Ball”, which will later bounce off a ramp.

**Instructions**

**1.**  In the **Hierarchy** window, right-click in an empty area and select **3D Object** > **Sphere**.

**Note:** When you create the sphere, it may appear in a seemingly random location, which is actually based on the object you last framed in the **Scene** view. You might not even see the sphere after creating it. Don’t worry about its location for now!

**2.**  Right-click on the new **Sphere** GameObject in the**Hierarchy** window, select **Rename**, and rename it “Ball”.

Mark step as complete

## 3. Edit the sphere’s scale

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:11Loaded: 19.13%0:00Remaining Time -0:111xPlayback Rate

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

The ball is currently way too big — you need to make it smaller.

**Scale** determines the size of an object. In Unity, scale is relative to real-world measurements, where 1 unit typically equals 1 meter.

Adjusting the scale of the ball to 0.25 in all dimensions makes it about the size of a standard kid’s ball — about one quarter of a meter in diameter, which is just less than one foot wide.

**Instructions**

**1.**  Make sure the **Ball** GameObject is still selected.

**2.**  In the **Inspector** window, in the **Transform** component, set the **Ball** GameObject's **Scale** to **X = 0.25, Y = 0.25,** and **Z = 0.25.**

**Note:** You can also select the chain link icon next to the **Scale** properties to enable or disable **constrained proportions.** When this is enabled, changing one scale property automatically changes the other two by the same amount.

Mark step as complete

## 4. Position the ball in the air

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:09Loaded: 5.83%0:00Remaining Time -0:091xPlayback Rate

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

Now you’re going to position the ball high above the floor near the window so that it can fall to the ground and bounce toward the corner.

Rather than using the Transform tools in the **Scene** view to drag the ball around, you’ll enter the ball’s precise position directly in the **Inspector** window in the **Transform** component.

Every single GameObject in the scene has a **Transform** component, which controls its position, rotation, and scale.

The **Position** values are measured in meters along each of the 3 axes (X, Y, and Z) relative to the origin of the scene.

**Instructions**

**1.**  With the **Ball** GameObject still selected, locate the **Transform** component in the **Inspector** window

**2.**  Set its Transform position to **X = 2, Y = 3,** and **Z = -1**:

- X = 2 will position the ball 2 meters to the right of the origin on the X-axis.
- Y = 3 will position the ball 3 meters up from the origin on the Y-axis.
- Z = -1 will position the ball 1 meter back from the origin on the Z-axis.

**Note:**  You can tell which direction is positive for each axis by looking at the **Scene** view gizmo. The colored cones point toward the positive direction for each axis.

Mark step as complete

## 5. Create and apply a new material

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:28Loaded: 1.86%0:00Remaining Time -0:281xPlayback Rate

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

The sphere primitive you added for the ball has a default material that is a very dull gray color — if it’s a kid’s ball, it should be more exciting!

**Materials** define the visual appearance of objects in Unity. Here, you'll create a new material in your project’s assets and apply it to the sphere.

**Instructions**

**1.**  In the **Project** window, navigate to **_Unity Essentials** > **Materials.**

**2.**  Right-click inside the **Materials** folder and select **Create** > **Folder**, and name it “My Materials”.

This is where you’ll keep your custom materials.

**3.**  Inside the new **My Materials** folder, right-click and select **Create** > **Material** then rename the new material “Ball_Mat” (short for “Ball Material”).

You have just created a new asset in the **Project** window, which means that this material can be used in any scene in your entire project. You’ve added a new custom asset! You can see from the **Create** menu when you right-clicked that you can make all kinds of assets, including scripts, animations, fonts, and more.

**4.**  Drag the new **Ball_Mat** material directly onto the **Ball** GameObject in the **Scene** view, which should make it turn the default plain white material color.

**Note:**  Remember to save your scene often with **Ctrl+S** (macOS: **Cmd+S**).

Mark step as complete

## 6. Adjust the material properties

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:21Loaded: 1.96%0:00Remaining Time -0:211xPlayback Rate

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

With your custom material now applied to the ball, you’re ready to adjust the material’s properties to your liking. You can customize the ball’s color and how it interacts with light in the scene. Creating materials can get very complicated, so you’ll start by adjusting just three key properties:

- **Base Map Color:** The basic color of the object.
- **Metallic Map:** How metallic the object looks.
- **Smoothness:** How smooth the object looks.

**Instructions**

**1.** Make sure that **Ball_Mat** material is selected in the **Project** window.

**2.**  In the **Inspector** window, in the **Surface Inputs** section, for the **Base Map** property, select the white color swatch and use the **Color** window to choose a new color.

Observe how your changes affect the ball's appearance.

**3.**  Adjust the sliders for the **Metallic Map** and **Smoothness** properties to your liking.

Mark step as complete

## 7. Add a Rigidbody and test

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:31Loaded: 1.75%0:00Remaining Time -0:311xPlayback Rate

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

Now that your ball looks ready for action, it's time to bring it to life by simulating physics.

To give the ball physical properties, you'll add a **Rigidbody** component to it. Without a **Rigidbody** component, the ball will stay at its current location in midair. But with a **Rigidbody** component, it will have mass and respond to gravity.

**Instructions**

**1.**  Select the **Play** to enter Play mode and watch as your ball floats in midair. Select the **Stop** button to exit Play mode.

**2.**  Select the **Ball** GameObject in the **Hierarchy** window or **Scene** view.

**3.**  Select the **Add Component** button at the bottom of the **Inspector** window, then enter "Rigidbody" in the search bar and select the **Rigidbody** component to add it to your ball.

**4.**  Enter Play mode again and watch as your ball now responds to gravity and falls to the ground, then exit Play mode.

**Important:** You must exit **Play** mode whenever you’re done testing. While you’re in Play mode, no edits you make will be saved.

**5.**  After exiting **Play** mode, remember to save your scene with **Ctrl+S** (macOS: **Cmd+S**).

Mark step as complete

## 8. Create and apply a Physics Material

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:23Loaded: 14.15%0:00Remaining Time -0:231xPlayback Rate

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

Your bouncy ball's bounce is probably pretty disappointing. It behaves more like a bag of sand than a lively, bouncy ball.

To make it bounce, you'll create and apply a Physics Material. Unlike standard materials, which control the visual aspects of GameObjects, **Physics Materials** govern the physical behavior of GameObjects, like how they bounce upon impact.

**Instructions**

**1.**  Right-click inside the **My Materials** folder, and select **Create** > **Physics Material.** Rename the new material "Ball_Physics".

**2.**  In the **Inspector** window, set the **Bounciness** property of this Physics Material to **1** for maximum bounce effect.

**3.**  Drag and drop the Physics Material onto the ball in the **Scene** view.

You won't be able to tell from the **Scene** view that you've successfully applied the new Physics Material until you test it.

**4.**  To observe the changes, select the **Play** button and watch as your ball bounces.

**5.** Remember to exit **Play** mode after you’re done testing.

Mark step as complete

## 9. Review the components

Q&A (0)[Image: image]

You have customized this ball a lot at this point.

In this step, let's take a moment to review all of the components that contribute to the ball's behavior and appearance in Unity.

**Instructions**

**1.**  Select the **Ball** GameObject in the **Hierarchy** window, then examine the **Inspector** window.

**2.**  Locate the **Transform** component.

The **Transform** component sets the position, rotation, and scale of the ball. This is the only component that is required for every GameObject.

**3.**  Locate the **Mesh Filter** component.

The **Mesh Filter** component determines the shape of your GameObject. A mesh is a wireframe 3D model. In the case of the ball, the Mesh is set to a Sphere shape.

**4.**  Locate the **Mesh Renderer** component.

The **Mesh Renderer** component controls the external appearance of the ball. Try to find the material you applied to the ball. When you apply a material, it shows up in this component.

**5.**  Locate the **Sphere Collider** component.

The **Sphere Collider**component defines the physical boundaries of GameObjects for collision purposes. Try to find the **Physics Material** you created and applied.

**6.**  Locate the **Rigidbody** component.

The **Rigidbody** component integrates the ball into Unity’s physics system, giving it properties like mass and drag.

Mark step as complete

## 10. Add a Ramp and test collision

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:53Loaded: 0.00%0:00Remaining Time -0:531xPlayback Rate

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

In this step, you'll add a ramp that the ball can bounce off.

The ramp has to be positioned precisely beneath the ball, which can be tricky if you’re viewing the scene from an angle. You'll see how to use framing to help with this.

**Instructions**

**1.**   In the **Project** window, navigate to **Prefabs** > **Shapes.**

**2.**  Drag the **Ramp** prefab into your scene and place it on the floor, approximately beneath the ball.

**3.**  For precise positioning, select the **Ball** GameObject and press **F** to frame it, then switch to the top view using the **Scene** view gizmo. WIth the **Move** tool, adjust the ramp's position so it's directly under the ball.

**4.**  With the **Rotate** tool, rotate the ramp so that the ball will bounce and roll to the back right corner of the room.

**5.**  Enter **Play** mode to test the interaction. Notice the unexpected result where the ball passes through the ramp, then exit Play mode.

Before moving on, try to guess why the ball did what it did. Is there a type of component that could fix this?

Mark step as complete

## 11. Add a Collider to the ramp

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:31Loaded: 1.36%0:00Remaining Time -0:311xPlayback Rate

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

You'll now fix the ramp by adding a collider component, which is essential for physical interactions in Unity. A collider is a component that defines the shape of an object for the purpose of physical collisions and interactions within the environment. Without a collider, an object has no physical boundaries and other objects can go right through it — like a cloud.

The sphere primitive you added earlier for the ball already came with a Sphere collider — that's what the Physics Material is attached to.

Unity provides various collider shapes (such as sphere, cube, and capsule colliders). However, since the ramp has an irregular shape, you’ll use something called a **Mesh** collider, which conforms to the unique shape of the object’s mesh (3D shape).

**Instructions**

**1.**  Select the ramp in your scene.

**2.**  In the **Inspector** window, select **Add Component** and search for 'Mesh collider'. Add the **Mesh** collider component to the ramp.

**3.**  In the **Mesh** collider component, enable the **Convex** property.

Enabling the **Convex** property simplifies the collider into a convex shape, almost as if you were wrapping the object in some hard material. Unity needs **Mesh** colliders to be set as **Convex** to allow them to interact with other objects.

**4.**  With the **Mesh** collider added and set as **Convex**, enter Play mode to test the ball's interaction with the ramp.

**5.**  Exit **Play** mode and save your scene.

Mark step as complete

## 12. Review and proceed to next tutorial

Q&A (0)

Congratulations on making a ball bounce around your room in an interesting way!

Here are some of the things you learned how to do along the way:

- Add a 3D primitive to a scene.
- Describe the default characteristics of a primitive.
- Make a new material in the **Project**window.
- Explain the attributes a material adds to a GameObject.
- Assign a material to a GameObject by dragging it from the **Project**window into **Scene**view.
- Change the basic properties of a material.
- Add a component to a GameObject via the **Inspector**window.
- Explain the attributes that a **Rigidbody**component adds to a GameObject.
- Make a new Physics Material in the project window.
- Explain the attributes a Physics Material adds to a GameObject.
- Identify specific components in the **Inspector**window.

**Instructions**

Proceed to the next tutorial where you'll add a tower of blocks for the ball to knock over!

Mark step as complete

## Complete this Tutorial

Mark all steps complete
