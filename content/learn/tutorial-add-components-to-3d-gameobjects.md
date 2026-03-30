[Image: image]

# Add components to 3D GameObjects

Tutorial

foundational

+10XP

25 mins

47

(9170)

Unity Technologies

[Image: Add components to 3D GameObjects]Summary

In this tutorial, you will see how components add functionality to GameObjects. The component you will see in action here, the Rigidbody component, lets a GameObject behave like a physical object instead of floating in space. In this tutorial, you will:

- Position the Main Camera in order to achieve the desired framing of the scene.
- Explore the relationship between GameObjects and components.
- Identify specific components in the Inspector window.
- Add physical properties to a 3D GameObject by applying the Rigidbody component and setting its properties.
- Enter Play mode to preview a scene in the Game view.
- Add a collider to a GameObject.
- Experiment with 3D physics in Unity.

Languages available:

EnglishEnglishEspañol日本語한국어English

## 1. Overview

Q&A (0)

**Components**add behaviors and functionality to a GameObject. So far, you’ve used the Transform component — and that is just the beginning! In this tutorial, you will add another component, the Rigidbody component, which gives a GameObject physical properties so that it can interact with gravity and other GameObjects. You will also position the Main Camera to watch how a GameObject responds to gravity in 3D.

Mark step as complete

## 2. Position a falling object

Q&A (0)

Let’s create a GameObject that will fall onto your structure:

**1**.  Create a new sphere primitive. Make sure it is at the top level and not a child of any other GameObject.

**2**.  Move the sphere to the space above your structure so that it is positioned in “mid-air.”

**Tip**: Locate the Gizmo at the upper-right corner of the Scene view window and select the y-axis. This will give you a top-down view of your scene. Make sure your sphere is positioned to fall down onto your structure.

[Image: image]Mark step as complete

## 3. Position the Main Camera

Q&A (0)

In every new scene there is a **Main Camera** GameObject. Its position in the Scene view is denoted with a camera icon like the one shown below.

[Image: image]

**Note**: If you don’t see the camera icon as shown above, make sure your Gizmos are enabled. At the upper-right corner of the Scene view window, look for the word **Gizmos**and enable it (without opening the dropdown menu) so that it is shaded.

This camera captures and displays your scene to the user in the Game view. While the Scene view is where you build scenes, the Game view is where you run your game or application in Unity.

To set up your Main Camera to view your structure in Game view:

**1.**In the Hierarchy, select **Main Camera**. You’ll see a Camera Preview window, which shows you how the scene will look in Game view.

**2.** In the Scene view window, press **F** to focus on **Main Camera**.

The camera in your scene is a GameObject. When you select it, you will see its Transform component in the Inspector window. You can change these settings as you would with any other GameObject.

**Note:** Scaling a camera has no effect.

**3.**Move and rotate the camera to get a view of the sphere and the structure below it.

**Tip**: Your users will feel more oriented and grounded if you keep the horizon level in your camera view.

**4.**When you select a camera, you see the outlines of a pyramid-like shape called the **frustum**coming out of the camera. The **frustum** shows you what part of your scene the camera is viewing. Use the handles on the sides of the frustum to narrow or widen the view..

**Tip**: You can also move the camera to align with your current Scene view by selecting it in the Hierarchy window and then pressing**Ctrl+Shift+F** (macOS: **Cmd+Shift+F**).

Manipulate the camera until you get a good view of the structure and the sphere above it, as in the example below.

[Image: image]

**5.**Run your application to display the Game view. You’ll see the view you set up in the camera preview. Nothing else will happen, but next you’ll give the sphere new properties so that it will fall.

Mark step as complete

## 4. Give the sphere mass

Q&A (0)

Objects in the physical world don’t hover in mid-air, but in a Unity scene, by default, GameObjects don’t have mass or respond to gravity. To make a GameObject behave like a real-world physical object, you can give it physical properties by adding a Rigidbody component.

To add the Rigidbody component to the GameObject:

**1.**  Select your sphere.

**2.**  Select **Add Component** at the bottom of the Inspector window. A window will appear allowing you to search for components.

[Image: image]

**3.**  Use the search bar to find **Rigidbody** and select it.

**Note:** There are two options available: **Rigidbody**and **Rigidbody 2D***.*Make sure you select the Rigidbody component, not the 2D one.

[Image: image]

**4.**  Run your application. The sphere falls!

What does the sphere do on your structure? Does it roll down the stairs? Does it just drop onto a level surface and stop there? If the sphere lands on a flat level surface, it won’t roll. (You’ll add some bounce in the next tutorial.)

**5.**To make interesting things happen, move the sphere to a new position and play it again. Try dropping your sphere from several different positions.

**Note**: If you’re interested in learning more about physics in Unity, see [**Physics Best Practices**](https://learn.unity.com/tutorial/physics-best-practices) for more information.

Mark step as complete

## 5. Experiment with falling GameObjects

Q&A (0)

Try variations of this exercise. Move your sphere  and the **Main Camera GameObject**to get the results you want.

More things to try:

- Duplicate your sphere and position the duplicates to fall from varying heights and locations on your structure.
- Add other primitives with a Rigidbody component and see how they behave.
- Experiment with the **Mass**property of the Rigidbody component. (If you make a cube very heavy, it won’t bounce or tumble as much.)

**Note:**You can change the properties of a selected GameObject while the game is running, but when the game is stopped all values will revert back to what they were before the game was started. This is useful to test different parameters during runtime, but if you want the changes to be permanent, you need to make the changes while the game is stopped.

Mark step as complete

## 6. Next Steps

Q&A (0)

You have seen how to add properties to GameObjects through components, and you used the Rigidbody component to make a GameObject respond to gravity in the Game view. You also saw how the Game view differs from the Scene view, and you manipulated the Main Camera to change the Game view’s display.

Next, you’ll add more components that make GameObjects look more realistic in 3D space.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
