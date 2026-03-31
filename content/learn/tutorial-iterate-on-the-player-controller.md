[Image: image]

# Iterate on the player controller

Tutorial

foundational

+10XP

30 mins

3

(13)

Unity Technologies

[Image: Iterate on the player controller]Summary

This tutorial will guide you through integrating mouse controls into your game, allowing the **Player** GameObject to move towards a mouse click or touch input, including using layers to limit where the player can move. Through the process, you'll also learn about the importance of flexibility in game controls for enhanced user interaction.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

When it comes to developing games, flexibility in user interaction is key. You've used a keyboard-based control scheme for the player up to this point, but what if you wanted to try something different?

In this tutorial, you'll learn to use ray casts to move the **Player** GameObject towards a mouse click or touch input.

Even if this feature is not something you want in your 3D game, it’s worthwhile to see how you could implement it, since configuring different input schemes is a critical skill for any game developer. You can always undo these changes after you implement them.

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

## 2. Create a ray from the camera to the mouse position

Q&A (0)

Our goal is to use rays to detect a spot in the play area where the player clicked and then move the **Player**GameObject towards that target position. A **ray** is an infinite line starting at a specific point and going off in some direction. Rays are often used in games to shoot bullets, detect proximity, or, as we'll do here, detect mouse clicks.

To create a ray from the camera to the mouse position, follow these instructions:

**1. Open the PlayerController script:**

- You’ll add all of the functionality inside this script, allowing you to control the **Player**GameObject with the mouse or with the keyboard. If you don’t like the mouse controls, you can always remove it later.

**2. Log when the mouse is clicked:**

- Add the following code to your new script:

```csharp
private void Update()
{
    if (Pointer.current.press.isPressed)
    {
        Debug.Log("Mouse Clicked");
    }
}
```

With this code, the message "Mouse Clicked" will appear in the **Console** window whenever the left mouse button is pressed.

This code uses the **Update()**function instead of **FixedUpdate()** because the user can click the screen at any moment and the **Update** function runs every frame. **FixedUpdate** is synced with the game's physics system, which operates on a fixed time-step, so may not run every frame. By checking for input in **Update**, you ensure that even brief key presses or mouse clicks aren't missed between physics updates. The **Update** function is ideal for capturing fast, frame-dependent changes like user input.

**Debug.Log** statements are primarily used for debugging and providing real-time information during development. They are useful for identifying and resolving issues in your code. However, excessive use can clutter the **Console**window and slightly impact performance, so it's best to remove them for the final game release.

**3. Test the Debug.Log statement:**

- Run your game and watch the **Console**window - you should see "Mouse Clicked" logged every frame that the mouse button is held down.

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

**4. Collapse identical entries:**

- Select **Collapse** at the top of the **Console** window.
- This will group any identical commands into a single line and indicate with a number on the right how many times that same message was logged. This is helpful for keeping your **Console**window tidy.

[Image: Console window with the Collapse button highlighted, showing the number of identical items that have been collapsed.]

**5. Cast a ray from the camera to the mouse position:**

- Delete the **Debug.Log** statement you just added — you don’t need it anymore.
- Add the following lines of code where the**Debug.Log**statement was, then test your game again:

```csharp
Vector2 aimPosition = Pointer.current.position.ReadValue();
Ray ray = Camera.main.ScreenPointToRay(aimPosition);
Debug.Log(ray);
```

These lines of code create a **Ray** GameObject that extends from the camera's position through a screen point. Let's break it down:

- **Vector2 aimPosition = Pointer.current.position.ReadValue();**: This line reads the current mouse position using the Input System. **Pointer.current** accesses the pointer device (which can be either the mouse or a touch on mobile), **.position** gets the position, and **ReadValue()** retrieves the current position value as a **Vector2**, measured in pixels from the bottom-left of the screen.
- **Ray ray**: This line declares a new variable ray of type **Ray**. It’s used in Unity to detect collisions, among other things.
- **Camera.main**: This line refers to the main camera in your Unity scene. This is typically the camera tagged as the "MainCamera" in your scene, which is the camera used for rendering what the player sees in the game. If there are multiple cameras, Unity uses the first enabled camera it finds.
- **ScreenPointToRay(aimPosition)**: This function takes a position on the screen and transforms it into a ray from the camera. Here,**aimPosition** is the position of the mouse cursor, measured in pixels from the bottom-left of the screen. **ScreenPointToRay** translates this 2D screen position into a 3D ray that extends into the world from the camera.
- **Debug.Log(ray);**: This line will log the origin and direction of the ray in the console. This can be useful for debugging, as you can verify that the ray is being cast as expected.

Test your game now. You'll see each ray's origin and direction logged in the **Console**window when you click.

[Image: Console messages logging directional rays’ origins and directions.]

**6. Draw the ray:**

- Delete the previous **Debug.Log** statement — you don’t need it anymore.
- Add the following line of code where the **Debug.Log** statement was, then test your game again:

```
Debug.DrawRay(ray.origin, ray.direction * 50, Color.yellow);
```

This line of code is used to visualize a ray in the Unity Editor's **Scene** view. It will draw a ray starting from the origin point of the ray (**ray.origin)** extending along the ray's direction (**ray.direction**) for a specified length (multiplied by 50 in this case), and It will be colored yellow. Feel free to change the “yellow” to another color option.

**7. Run your game again, with both the Game view and Scene view open.**

Now, whenever you click, you'll see a yellow ray in the **Scene** view from the camera to the click position.

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

**Important**:****You must have **Gizmos** enabled in the **Scene** view to be able to visualize the rays.

Mark step as complete

## 3. Set the target position

Q&A (0)

Now that you have the ray functioning as expected, you can use it to set the player’s target position and move the player towards that position.

First, you'll need to add variables for the player’s target position and a boolean to track if the player is moving. To do this, follow these instructions:

**1. Add targetPos and isMoving variables:**

- Declare these at the top of your script:

```csharp
private Vector3 targetPos;
[SerializeField] private bool isMoving = false;
```

Adding **[SerializeField]** before a private variable makes that variable visible in the **Inspector** window while keeping its access restricted to within its class in the scripts. This is often done to allow designers and other team members to easily modify or view the values of certain variables from the Unity Editor without exposing the variable to potential unwanted access or modifications from other scripts.

**2. Detect hit point and set the variables:**

- Add the following lines of code below the **debug.DrawRay** call in the **Update** function:

```csharp
RaycastHit hit; // Define variable to hold ray cast hit information

// Check if ray cast hits an object
if (Physics.Raycast(ray, out hit))
{
    targetPos = hit.point; // Set target position
    isMoving = true; // Start player movement
}
```

At a high level, this code uses a ray cast to detect if the mouse has clicked on an object in the scene. If an object is hit, it sets a target position for player movement and turns on a flag for movement (**isMoving = true**);

Here’s a more detailed explanation of this code:

- **RaycastHit** stores info on a ray cast's point of contact with an object, including its location, orientation, distance from origin, and the collider impacted.
- **Physics.Raycast** sends a ray into the scene from the origin point in the direction specified by the ray object. It returns **true** if the ray intersects with a collider, otherwise it returns **false**.
- The **out** keyword specifies that **hit** is an output variable. If the ray cast hits an object, **hit** will be filled with the data about the collider the ray cast hit. If the ray cast does not hit any colliders, **hit** will be left unchanged.
- If the ray cast hits an object, the point where the ray cast hits is saved in **targetPos**. The **hit.point** property of a **RaycastHit** is a **Vector3** that represents the exact point in world space where the ray cast hit the object.
- The boolean **isMoving** is set to **true**, which means the **Player**GameObject should now start moving towards the **targetPos**. The **Player**GameObject won’t actually do that yet since you haven’t programmed it, but you'll use that variable to determine when the player should or shouldn’t move in the next step.

**3. Stop moving when the mouse is not clicked:**

Add the following lines of code after the entire **if** statement checking when the mouse is clicked:

```csharp
else
{
  isMoving = false; // Stop player movement
}
```

This code uses an else statement to check if the left mouse button is no longer held down to set **isMoving** to false, since we don’t want the player moving when the mouse is released.

**Important:**The else statement needs to follow the final curly brace of the **if (Pointer.current.press.isPressed)** statement — not the **if (Physics.Raycast)** statement.

**4. Test your game:**

- Test your game and keep the **PlayerController** component visible to monitor the **isMoving**variable.
- Notice that **isMoving** becomes true when you click and false when you release.

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

## 4. Move the player towards the target position

Q&A (0)

You now have all the data you’ll need to move the player:

- The **isMoving** variable will tell the player when to move.
- The **targetPos** variable will tell the player where to move.

Now all you need to do is actually move the player where and when it should move. To do this, follow these instructions:

**1. Move the player:**

- Add the following lines of code to the bottom of the **FixedUpdate** function:

```csharp
private void FixedUpdate()
{
  /*
  /  other keyboard movement code
  */

  if (isMoving)
  {
    // Move the player towards the target position
    Vector3 direction = targetPos - rb.position;
    direction.Normalize();
    rb.AddForce(direction * speed);
  }
}
```

- In the**FixedUpdate()**method here, it first checks whether the player is supposed to be moving (**isMoving**). If yes, it calculates the **direction** — this is the straight path from where the player is now (**rb.position**) to the place they clicked (**targetPos**).
- But this direction vector can be big, which would make the player go flying, so you need to make it simpler — or **normalize** it. The **direction.Normalize();** line converts the direction vector into a unit vector, ensuring its magnitude is **1** and maintaining only the direction information.
- Once you have the right direction, you then tell the **Player** GameObject's **Rigidbody** (its physical component) to add a push or force towards that direction. The speed variable controls how big this push is, meaning how fast the player moves.

**2. Test the player movement:**

- Run the game — the **Player** GameObject should move towards the mouse when it’s clicked!

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

****

**3. Stop moving when the player reaches the pointer:**

- Add the following lines of code before the final curly bracket of the **FixedUpdate** function:

```csharp
// Stop moving the player if it is close to the target position
if (Vector3.Distance(rb.position, targetPos) < 0.5f)
{
  isMoving = false;
}
```

****

**4. Test the updated movement:**

- Run the game — the player should now stop moving when it’s close enough to the pointer.
- You might notice a problem: what happens if you click on a moving platform — the ball could end up floating in the air!

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

## 5. Control the ray cast with layers

Q&A (0)

In Unity, **layers** are a method of separating game objects in different categories. They're a kind of tagging system that allows you to create groups of objects for different purposes.

In your project, you’ll use layers to control where the player can move. By assigning just the ground-related objects to a **Ground** layer, you can tell the ray cast to specifically look for that layer. When a user clicks on something on that layer, the player will move. If the user clicks on anything not in the **Ground** layer, like a platform or outside the play area, the ray cast ignores it, and the player won’t move.

To control the ray cast with layers, follow these instructions:

**1.**Add a new **Ground** layer.

- If you don't have a **Ground** layer yet, create one by navigating to **Layers** > **Edit Layers** and adding a new layer in one of the empty slots.

[Image: image]

**2.**Add ground objects to the **Ground** layer.

- Open the **Layer** dropdown at the top of the **Inspector**window and select your ground object to assign it to the Ground layer. You can also add any ramps you have to this layer.

[Image: image]

**3.**Check if the ray hits the ground.

- Add the following if-statement around code that assigns the **targetPos** and **isMoving** variables within the **Physics.Raycast** if-statement:

```csharp
// Check if raycast hits an object
if (Physics.Raycast(ray, out hit))
{
 if (hit.collider.gameObject.layer == LayerMask.NameToLayer("Ground"))
 {
  targetPos = hit.point; // Set target position
  isMoving = true; // Start player movement
 }
}
```

This line of code checks if the object that your ray cast hits belongs to the **Ground** layer. If the object does belong to the **Ground** layer, it executes the code inside the if-statement.

**4.**Test the game.

The player should now only respond if you select an object assigned to the **Ground** layer.

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

## 6. Choose your controls

Q&A (0)

Now, your game has dual controls: the player can be controlled with the keyboard or with the mouse. Having multiple control schemes increases the accessibility of your game, since some players might find it difficult to use a keyboard or a mouse.

If you’d like to return to the original keyboard controls and remove the mouse controls entirely, all you have to do is comment out the line of code that adds force based on the direction of the mouse click.

If you’re feeling ambitious, you could also try to allow the user to choose which control scheme they prefer in a settings menu.

Mark step as complete

## 7. Would this work on Mobile?

Q&A (0)

One of the powerful aspects about developing in Unity is that your hard work can pay off on many platforms, including mobile devices. So, let's consider how the control scheme you just implemented will work on mobile.

The code waits for the player to press (either by clicking the mouse or tapping the screen) and then tracks the position on the screen. Mobile devices, of course, don't have a mouse, but they do recognize when and where the screen is touched.

The great news is that Unity's Input System handles both mouse and touch automatically through the same API. By using the [**Pointer** class](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/manual/Pointers.html?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035114911) instead of the [**Mouse** class](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/manual/Mouse.html?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035114911), the code already works for both mouse clicks on desktop and touch input on mobile with no additional changes needed.

Here's what makes it work:

- **Pointer.current.press.isPressed** detects both mouse left-clicks and screen touches
- **Pointer.current.position** gets the mouse cursor position or touch position automatically

This means your click-to-move system will work identically on mobile devices - players can simply tap where they want their character to move, and the ray cast will detect the ground just like it does with mouse clicks.

To actually test and deploy your game on mobile, follow these instructions:

**1.**Switch your build target to **Web** in **File**>**Build Settings**.

**2.**Build your project and publish it to Unity Play.

**3.**Make sure to enable the **I have added mobile controls to my game**setting.

**4.**Test your web game on a mobile device.

Mark step as complete

## 8. Configuring multi-platform input

Q&A (0)

Unity offers two input systems: the older **Input Manager**and the newer **Input System**. You might see both used in Unity projects, so it's useful to understand them.

Input Manager

The Input Manager is Unity's older system for handling inputs. To familiarize yourself with the Input Manager, follow these instructions:

**1. Access the Input Manager:**

- Navigate to **Edit** > **Project Settings** and select **Input Manager**.
- Expand **Axes**, and then expand the **Horizontal** and **Vertical** axes.

**2. Explore the Input Manager:**

- The **Horizontal** input uses the left and right arrow keys on a computer, or alternatively the **A** and **D** keys.
- You can also configure the axes to work with mouse or joystick input, which could be useful for console or mobile platforms.

[Image: Input Manager settings with the Axes dropdown expanded and the Horizontal and Vertical axes expanded. The Negative Button, Positive Button, Alt Negative Button, and Alt Positive button properties are also highlighted.]

#### Input Actions

The new Input Actions system offers more flexibility. If you recall, when you configured your player input, you added the **Player Input** component, created an **Input Action** **Asset**, and used the **OnMove** method for keyboard input.

This system lets you easily map different devices to a specific action by creating bindings.

A **binding** in Unity's Input System is a connection between an input control and an action that allows the user to control your application using a device, touch, or gestures.

To familiarize yourself with the Input Actions system, follow these instructions:

**1. Access the Input Actions system:**

- Select the **Player** GameObject.
- In the **Player Input** component, double-click the**Input Action Asset** assigned to the **Asset** property.

- This will open the **Input Actions**window.

[Image: Player Input component with the Player Input Action Asset variable highlighted.]

**2. Explore the Input Actions system:**

- In the **Input Actions** window, use the foldout (triangle) to expand the **Move** action, then expand the **WASD**binding.
- Notice that there are different bindings to that action, allowing you to easily configure input from multiple devices mapped to a specific action.

[Image: Input action window with the Move action expanded and WASD highlighted.]

Although configuring input for mobile, console, or XR is beyond the scope of this tutorial, it's important to know it's possible. You can still challenge yourself to try it out — we encourage you to give it a try in the next step.

Mark step as complete

## 9. Next steps

Q&A (0)

In this tutorial, you learned to implement a new control scheme using ray casting, an essential tool in game development. This mouse-based control has potential for use on touch-based platforms like mobile, AR, or VR. You used Unity's layer system to refine control responsiveness, ensuring our player character only moves when you want it to.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
