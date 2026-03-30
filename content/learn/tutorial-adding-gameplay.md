[Image: image]

# Adding Gameplay

Tutorial

Beginner

+10XP

30 mins

23

(372)

Unity Technologies

[Image: Adding Gameplay]Summary

In this section we will take a look at adding various gameplay elements with the Game Kit. We have set up a demo level to show these, but you can also use a new Scene or your own Scene if you prefer.

Languages available:

日本語English日本語简体中文日本語

## 1. Moving Platforms

Q&A (0)

You can use MovingPlatforms to get your player from one place to another. Let’s add one to the Scene:

- Navigate to the **Project**window.
- Go to **Assets > 3D GamekitLite > Prefabs > Interactables.**

[Image: image]

The **Interactables**folder contains all the pre-made gameplay elements created for this Kit.

- Left-click and drag the **MovingPlatform** Prefab into the **Scene view**or the **Hierarchy** window.

- If you move this into the **Hierarchy** window, don’t forget to use Frame Select to find it (keyboard shortcut: F).
- You can also position, rotate and scale the GameObject through the Inspector window in the Transform component.

[Image: image]

**Tip:**

Hover your mouse over X, Y or Z and left-click drag to the left or right to increase and decrease these values.

- Position the whole GameObject where you would like the platform to start from.

We have positioned ours above the acid pool we created earlier.

[Image: image]

Now let’s make the platform and set its movement path.

ステップを完了としてマーク

## 2. Gizmos

Q&A (0)

The MovingPlatform comes with 3 Gizmos attached to allow you to easily alter the motion of the platform.

[Image: image]

The screenshot above highlights the relevant Gizmos:

- Set the Transform position to place the GameObject in the world.
- **Start**position.
- A dashed line, which indicates the path that the platform takes between the**Start** position and the **End** position.
- **End** position

In the **MovingPlatform’s Inspector**window, find the**Simple Translator**component and tick the **Activate** box to enable movement.

[Image: image]

If you adjust the **Start** position before you enable **Activate**, the **MovingPlatform** snaps to the**Start**position rather than the initial position set in **Transform.** This is to ensure the platform always starts from the right place, and translates according to behaviours set in the **Simple Translator**component.

**Tip:**

Hold the **Ctrl** key (**Cmd** on macOS) when you move a Gizmo to snap it to the grid and move it in increments. This can help you get straighter paths.

Ellen needs to avoid the acid pool, but the default Translate isn’t large enough for the **MovingPlatform** to fully cover it, so you need to adjust the **End** Gizmo.

To see the current translation motion of the **MovingPlatform** in the Editor, you can move the slider for **Preview Position** in a range from 0 to 1. The **Scene**window shows that the platform moves to where it would be in the game at that stage of the translation.

[Image: image]

This is a very useful way to preview the behaviour and check for overlaps with other GameObjects in the Scene.

#### Duration

To alter the speed of the sequence from**Start** to **End**, change the Duration value. This is 5 seconds by default. Make this value smaller if you want a faster sequence, and larger if you want a slower sequence.

#### Set up MovingPlatform

You can use the Transform handles to drag the **Start** and **End** position gizmos. Hold down Ctrl (Cmd) whilst doing so to snap the location to a grid, for easier adjustment.

You can move the **Preview Position** slider at any point to preview the **MovingPlatform’s** movement between the two positions.

The last step for this workflow is to set the **Loop Type**. There are three different types of Loops.

#### Loop Type

**Once:** moves from **Start**to **End**, and stops when it reaches **End.**

[Image: image]

Once loop type is most commonly used when you only require the player to be transported from the **Start** to the **End.**

**Ping Pong**: moves from **Start** to **End** and then **End** to **Start**, giving a continuous loop.

[Image: image]

**Ping Pong** is the best type to use when you need the route the platform provides to be continuously available.

**Repeat:** moves from**Start**to**End**, then returns to **Start**to repeat.

[Image: image]

For this example:

- Set the **Loop Type** to **Ping Pong.**

[Image: image]ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
