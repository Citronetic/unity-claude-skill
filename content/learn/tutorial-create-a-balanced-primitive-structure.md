[Image: image]

# Create a balanced primitive structure

Exercise

Beginner

+60XP

45 mins

32

Unity Technologies

[Image: Create a balanced primitive structure]Summary

Creating a balanced structure in Unity requires both artistic vision and a deep understanding of how to navigate and transform 3D objects in the Scene view. In this tutorial, you will construct a sculpture from various Unity primitives, ensuring it remains stable with gravity enabled.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

In this challenge, you’ll construct a unique sculpture using a variety of Unity primitives that remains balanced even with gravity enabled.

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

To accomplish this task, you'll need to put your scene view navigation skills to the test, especially your ability to move, rotate, and scale objects in 3D space.

The real-world inspiration for your structure could range from an abstract rock sculpture to a giant modern tower. For example, how could you represent some of the structures below in Unity?

[Image: image]Mark step as complete

## 2. Review your primitive options

Q&A (0)

Before you get started building, it will be helpful to get an overview of all of the 3D primitive shapes at your disposal:

[Image: image]

- **Plane**: A flat, rectangular surface with no height dimension, ideal for creating large-scale flat surfaces like floors or terrain in a 3D environment because it contains many vertices for detailed texturing and interaction. Only one side of the plane is rendered, making it invisible from behind.
- **Quad**: A flat, two-dimensional square with only two triangles, which is what separates it from a plane. It is suitable for simple, efficient flat surfaces or for displaying 2D elements in a 3D scene, like sprites and billboards, due to its lower complexity compared to a plane. Similar to the plane, only one side is rendered, making it invisible from behind.

In the video below, notice how many more subdivisions the plane has than the quad, but also notice that they both share the feature of only rendering their front face.

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

- **Cube**: This object is useful for constructing a wide range of geometric structures due to its uniformity and simplicity.
- **Sphere**: This object is useful for simulating round objects like balls, planets, or character heads.
- **Capsule**: A cylinder capped with hemispheres at both ends, typically used for character collision detection in games.
- **Cylinder**: A 3D shape with two flat circular faces and a curved side, useful for simulating objects with a circular cross-section like tree trunks or barrels.

Mark step as complete

## 3. Tips and tricks

Q&A (0)

Below are a few very helpful tips before you get started building.

Create an empty parent GameObject to stay organized

In order to make sure that your structure stays nice and organized in the **Hierarchy**window, it is helpful to make an empty parent GameObject, then create all of your primitives as child GameObjects. To do this, right-click in the **Hierarchy**window and select **Create Empty**, rename the parent GameObject something like “Structure”,  and reset the position to the origin.

[Image: image]

Then, simply right-click on the Parent GameObject in the **Hierarchy**window when you create new primitives and they will automatically be assigned as child GameObjects. This way, you’ll be able to easily move the entire object around with a single GameObject, and it will keep your **Hierarchy**window more neat.

**Note**: You can also drag one GameObject on top of another to make it a child GameObject. For efficiency, hold **Ctrl** (macOS: **Cmd**) to select multiple individual GameObjects or hold **Shift** to select a list of GameObjects. Check out the video below for a demonstration of this.

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

Use exact coordinates for precision

Sometimes you will want to make things perfectly symmetrical or perfectly spaced apart. Rather than just using the move tool in this situation, you can use the **Transform** properties to space objects precisely. For example, the cubes below are all spaced exactly two units apart on the X axis.

[Image: image]

Use Rigidbody mass for balancing

If you make an object larger, it does not make it heavier. To make it heavier, you need to adjust the **Mass** property in the **Rigidbody** component, which defines the object’s weight in kilograms. In the example below, the cylinders only balance because the two cylinders on the left have a mass of 1kg, while the cylinder on the right has a mass of 2kg.

[Image: image]

Use Mesh Colliders for unusual primitives

A **collider** is a component in Unity that defines the shape of an object for the purposes of physical interactions with other objects in the scene. The collider determines the actual shape for building and balancing purposes — the mesh is simply a visual representation.

[Image: image]

However, there are some situations where the mesh will not match the collider, such as with a cylinder. The cylinder primitive actually uses a capsule-shaped collider, which makes it difficult to use for building, since it doesn’t actually have any flat surfaces on the collider.

[Image: image]

In situations like this, you can use something called a **Mesh Collider**component, which uses the actual mesh to define the shape of an object for physics interactions. When the **Convex** property is enabled, the mesh is treated as a convex shape, offering improved performance but potentially sacrificing some accuracy compared to a non-convex mesh collider. Check out the image below to see how the **Mesh Collider** component wraps more accurately around the mesh than the **Capsule Collider** component.

[Image: image]

Another situation where your collider might not match your mesh is when scaling a sphere to a non-sphere shape. The sphere collider always retains its perfectly spherical shape, so you will get a mismatch. Check out the example below of the default **Sphere Collider**component compared with a**Mesh Collider** component on a scaled sphere.

[Image: image]

To swap out the default collider with a convex **Mesh Collider** component, watch the video below.

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

Mark step as complete

## 4. Instructions

Q&A (0)

With the guidance above in mind, use the following instructions to create your own scene:

**1.** Choose a design.

- You can either recreate one of the example structures above, find other inspiration, or use your imagination to design something unique.

**2.**  Create a new scene.

- Start fresh by creating a new Unity scene.

**3.**Create the ground.

- Add a plane GameObject to serve as the foundation for your structure.

**4.**Build your structure.

- Add various primitive shapes (like cubes, spheres, capsules, or cylinders) to assemble your structure.

**5.**Enable gravity.

- Add a **Rigidbody** component to your primitives, so they obey the laws of physics.

**6.** Position the camera.

- Make sure to position the camera to nicely frame your creation.

Mark step as complete

## 5. Requirements

Q&A (0)

To successfully complete this challenge, your Unity sculpture should meet the following criteria:

- It Incorporates at least two different types of primitive shapes.
- All objects must have a **Rigidbody** component with the **Use Gravity** property enabled.
- It remains standing when you switch to Play mode.
- It has a custom material applied to the GameObjects for a visually engaging aesthetic.

Mark step as completeOptional Step

## 6. Submit your work

Q&A (0)

After you’ve fulfilled the requirements, please submit and share your project! Follow these instructions to submit your project:

**1.**Take a screenshot or screen recording of your project in Play mode.

**2.**  Add a submission title and description.

- Make sure to include the image or video of your project. If you have additional details to share about your process or the project that you have created, you can share them in the description too.

**3.**  Set who can view your submission.

- **Public:**Anyone who views this tutorial.
- **Private:** Just you.

**4.**  Select **Save and preview submission**.

**5.**  Check your submission preview and then complete the CAPTCHA test and select **Submit and continue**.

We highly recommend that you comment on at least one other creator's submission. Did they successfully complete the challenge? What do you like about the project?

#### Please login to submit

Login

## Complete this Tutorial

Mark all steps complete

Submission Gallery

[[Image: balanced primitive]

balanced primitive

by schand

Ssuriuni20](https://learn.unity.com/submission/69ca0278edbc2a0cdabc7e24)[[Image:  Balanced primitive structure]

Balanced primitive structure

This project shows a balanced structure made of different shapes that interact through physics. I used gravity and constraints to keep the objects standing while the board tilts.

Iinguuna81](https://learn.unity.com/submission/69c81e6dedbc2a07b6f3116a)[[Image: Primitive Structures]

Primitive Structures

Basic primitive structures

Rrbechara20](https://learn.unity.com/submission/69c8179fedbc2a07b6f31107)[[Image: Playground]

Playground

Balancing test

KKamil60](https://learn.unity.com/submission/69c6766fedbc2a03b801ca91)[[Image: balance rigitbody]

balance rigitbody

balance of rigitbody

Vv153dm70](https://learn.unity.com/submission/69c64b3eedbc2a02099046ce)[[Image: fun guns]

fun guns

a game were you kill people and upgrade guns.

Jjaxsrhondeau80](https://learn.unity.com/submission/69c5ef4eedbc2a01bdb5db4b)Load More
