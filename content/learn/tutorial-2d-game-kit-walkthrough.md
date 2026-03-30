[Image: image]

# 2D Game Kit Walkthrough

Tutorial

Beginner

+10XP

60 mins

2155

(2959)

Unity Technologies

[Image: 2D Game Kit Walkthrough]Summary

This guide will walk you through setting up an empty Scene to start creating a new level with the Game Kit. This will walk you through some of the fundamentals used in this Kit to create gameplay. The Kit comes with a premade game, which contains examples of every part of the Kit in use if you get stuck for ideas.

If you're already familiar with the Kit, and need some quick information, take a look at the [reference guide](https://learn.unity.com/tutorial/2d-game-kit-reference-guide) and [advanced topics](https://learn.unity.com/tutorial/2d-game-kit-advanced-topics) this can also be found in the Documentation folder within the project.

Resources

- [2D Game Kit](https://assetstore.unity.com/packages/essentials/tutorial-projects/2d-game-kit-107098)

Languages available:

EnglishEnglishEspañol日本語한국어简体中文English

## 1. Creating a New Scene

Q&A (0)

The project allows us to automatically create a new default Scene. This Scene contains Ellen (our hero), a small platform, Health UI, and everything you need to move around and attack.

Let’s create a new scene;

- In the top menu, click **Kit Tools**
- Choose **Create New Scene**...

[Image: image]

- A new window opens

[Image: image]

- In the empty field next to **New Scene Name**, enter the name you would like to call your Scene
- Click **Create**

Unity creates a new Scene in the root of your project, and adds the Scene to the[Build Settings](https://docs.unity3d.com/Manual/BuildSettings.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931750997) for you.

[Image: image]

Unity also opens the new Scene in the Editor, so you can start working on it.

[Image: image]Mark step as complete

## 2. Painting a Level

Q&A (0)

The 2D Game Kit uses Unity’s [Tilemap feature](https://unity3d.com/learn/tutorials/topics/2d-game-creation/intro-2d-world-building-w-tilemap?playlist=17093&ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931750997), which is designed to help you draw out a level quickly and easily. The Kit has everything set up for you, so you can get started straight away.

Let’s start designing a level:

- In the top menu, go to **Window > 2D > Tile Palette**

[Image: image]

The Tile Palette window looks like this:

[Image: image]

We have created two **Tile Palettes** that allow you to draw out levels. These tiles use the **Scriptable Tile** system of the Unity **Tilemap**. They automatically choose the right sprite for a platform. We have two styles of sprites: Grassy Rocks and Alien Structure.

We need to make sure the correct set of tiles is selected in **Tile Palette**;

- Click the **Tile Palette Menu**
- Select **Tileset_Gamekit**
- Pick the type of tile you like best for your level

[Image: image]

Now let’s paint some tiles in the scene to create a level;

- Click on a tile in the **Tile Palette** to select it
- Navigate to the **Scene View**
- Left-click and drag to draw your level

If you make a mistake, you can hold Shift and left-click or drag to erase Tiles.

[Image: image]Mark step as complete

## 3. Testing Your Level

Q&A (0)

Now that you have created a level, it’s time to run around in it.

[Image: image]

- Press **Play** at the top of the Editor

[Image: image]

We have included a debug menu. Press **F12** on your Keyboard to bring up the option to enable or disable each of Ellen’s weapons in the **Game View**.

Mark step as complete

## 4. Adding a Moving Platform

Q&A (0)

Before we begin manipulating **GameObjects** in the **Scene View**, make sure that you are not in paint mode. To do this, close the **Tile Palette** or select the **Move Tool** at the top left of the editor (you can also select the **Move Tool** by pressing **W** on your keyboard).

[Image: image]

Now let’s add a moving platform to our level;

[Image: image]

- Navigate to the **Project Window**
- Go to **Prefabs** > **Interactables**
- Left click and drag **MovingPlatform** into the **Scene View**
- Make sure the **MovingPlatform** is selected in the **Hierarchy**
- Press W to use the **Move Tool**

Use the **Move Tool** on the **MovingPlatform** to put it wherever you want in your level.

When you select the **MovingPlatform**, a red dotted line appears, with a **Move Tool** gizmo at the end of it (the red arrow). This indicates the path the platform will take when the game is playing.

[Image: image]

- Use the Move Tool gizmo at the end of the red dotted line to indicate the path you would like the platform to take.

[Image: image]

To preview the path the **MovingPlatform** will take, select the **MovingPlatform** and follow these steps:

- Navigate to the **Inspector**
- In the **Moving Platform** Component, find the **Preview Position** slider
- Click and drag to scrub and see where the **MovingPlatform** will go.

Let’s make the path of this platform a little more complex by making it loop in a square. We do this by adding **Nodes**.

**Nodes** are additional navigation points for the **Moving Platform** Component.

[Image: image]

- In the **Inspector** locate the **Moving Platform Component**
- Click **Add Node** twice

[Image: image]

This adds an additional two red dotted lines and gizmos. Use the gizmos to position your extra **Nodes** into a square shape.

You’ll notice that there isn’t a path going from the last node back to beginning. If we press Play now, it will stop at the last point, go backwards on the path, and start again.

You can change the settings of the platform to make it form a loop;

- In the **Moving Platform** Component find the **Looping** option
- Click the dropdown that says **BACK_FORTH**
- Select **Loop**

[Image: image]

This forms a loop in the gizmos, and the platform takes this path.

*Note: The preview slider does not preview a complete loop, so you need to press Play to see it fully in action.*

[Image: image]

Every Component we have provided in the Kit has many options to customise the way they work. For more information on what every option does in the **Moving Platform** Component, check the [Components Documentation](https://unity3d.com/learn/tutorials/projects/2d-game-kit/moving-platform?playlist=49633&ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931750997) and find the Moving Platform section.

Mark step as complete

## 5. Opening a Door with Events

Q&A (0)

In the 2D Game Kit, Events allow us to create actions. We’ll use Events to trigger a door opening when the player steps on a pressure pad.

Let’s start by adding in a Door:

- In the **Project Window**, go to **Prefabs > Interactables**
- Find the **Door Prefab** and drag it into the **Scene View**. Place it somewhere where it blocks the player’s path.

[Image: image]

Now let’s add the pressure pad into the Scene:

- In the **Project** window, go to **Prefabs > Interactables** and find the **PressurePad** Prefab
- Drag it onto the ground in front of the **Door**

*Note: If the player seems to be blocked by the pressure pad instead of stepping on it, lower it slightly. The player can easily get stuck against the collider.*

[Image: image]

Some events are already defined; for example, when stepped on, the **PressurePad** plays a sound and lights up. Now let’s connect the **PressurePad** to the **Door**.

- In the **Hierarchy** window, select the **PressurePad**
- In the **Inspector**, find the **Pressure Pad** component
- In the **On Pressed** list, click the + at the bottom right to add a new event
- Drag the **Door** **GameObject** from the **Hierarchy** window to the None(Object) field in the event
- In the **No Function** dropdown, find **Animator > Play(string)**

[Image: image]

- In the text box that appeared under the dropdown, enter the text **DoorOpening**

[Image: image]

- Press **Play** and use the movement keys (**A** and **D**) to run onto the Pressure Pad. The door should open!

All the **Animation Clips** are stored in the **Project** window, in **Art > Animations > Animation Clips**. To play different Animators in an Event, you must match the name (string) of the **Animation Clip** exactly.

[Image: image]

If you wanted to shoot a switch instead of placing a pressure pad, you can do that by using the same steps, but selecting the **ResusableSwitch** in the Prefabs folder instead. Give it a try!

Mark step as complete

## 6. Enemies

Q&A (0)

We have two pre-made enemies in the Kit: Chomper and Spitter. Find these in the Project window, in **Prefabs > Enemies**

[Image: image]

They are both controlled by the **Enemy Behaviour** Component in the Inspector. You can use this Component to adjust properties like the enemy’s speed, field of view (FOV), health, and much more. Each enemy has the same Component, they are just set up slightly differently. Note that as well as setting specific values, you can also click and drag left/right on Component properties to scrub through values.

Try adding a **Chomper** to your Scene. Play around with the settings to adjust his speed and field of view (FOV). Don’t forget that while in Play mode, you can press **F12** to make sure weapons are enabled, and attack with **O** or **K**.

[Image: image]

In the Scene above, a **Chomper** is selected. We have adjusted his **View FOV** and **View Direction** so that he won’t spot Ellen until he turns around:

[Image: image]

For more information on the **Enemy Behaviour** Component check the [Components Documentation](https://unity3d.com/learn/tutorials/projects/2d-game-kit/introduction-reference-guide?playlist=49633&ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931750997).

Mark step as complete

## 7. Damaging with Objects

Q&A (0)

In this section, we’ll explore the damage system. To do this, we’ll go through the steps of dropping a box on a Spitter to kill him. Sorry, little guy!

[Image: image]

Start by drawing out a level where Ellen is higher up, and the Spitter is on a platform underneath a drop, like this:

[Image: image]

- Go to **Prefabs > Enemies** and drag a Spitter into the **Scene View**
- Place him on the lower portion of your level, close to the cliff-face
- With **Spitter** selected, locate the **Enemy Behaviour Script**
- Reduce the **View Distance** number so that **Spitter** does not shoot you immediately while you test this gameplay

[Image: image]

- In the **Project Window** go to **Prefabs > Interactables**, and click and drag the **PushableBox** Prefab into the **Scene View**
- Select the **PushableBox** in the **Hierarchy** window, and, in the **Inspector** click **Add Component**
- In the **Search Box**, type **Damage**
- Click on **Damager** to add it to the **PushableBox**

The **Damager** Component tells any GameObject that has a **Damageable Component** on it (like a Spitter or a Chomper) to give it damage. There is more in-depth information on this system in the [Components Documentation](https://unity3d.com/learn/tutorials/projects/2d-game-kit/introduction-reference-guide?playlist=49633&ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931750997).

[Image: image]

The **Damager** is represented by a green collision box as shown above. This is the area which causes damage. This is not covering the **PushableBox** right now, so when we push the box onto the Spitter, it will not damage him.

Let’s move this box so that it’s roughly the size and position of the **PushableBox**. There are two ways to do this:

- Select and drag the green dots on the edges of the green collision box to be over the **PushableBox**

[Image: image]

- In the Inspector locate the **Damager Component**
- Adjust the **Offset** and **Size** to position and size the collision box. The easiest way to do this is to left-click on the words and drag left and right to scrub through values.

[Image: image]

Lastly, we need to make sure the damage is given to the right GameObjects. We separate objects into ***Layers*** in the Editor so that they can easily be found and seperated:

- Select the **PushableBox**
- In the Inspector, find the **Damager** Component
- On the **HittableLayers** dropdown select the **Enemy Layer**

[Image: image]

The **PushableBox** will now cause damage to anything on the **Enemy** Layer, like our Spitter.

Experiment with causing damage to other enemies, and even Ellen herself!

Mark step as complete

## 8. Decorating

Q&A (0)

The Kit also includes decorative sprites, which are all used in the example game “The Explorer” included in the Kit.

Tip: If something catches your eye in the example game, you can look up the name and search it in the Project View.

To make your level Instagram-worthy, find the decorations in the Project view in **Art > Sprites > Environment.** A lot are stored in sub-folders, so don’t forget to expand the small arrows and see what other sprites are in that category.

[Image: image]Mark step as complete

## 9. Teleporting the Player

Q&A (0)

It is possible to teleport a player from one area in a Scene to another, or between different levels.

#### **Teleporting within a Scene**

To teleport the player within a Scene, we need to set up a **transition**. For this, we’re going to make two prefabs:

- TransitionStart
- TransitionEnd

First we need to setup the starting point of the transition:

- In the Project window, go to **Prefabs > SceneControl**
- Find the **TransitionStart** Prefab
- Drag **TransitionStart** to the **Scene View**. Place it at a position where the player will touch the Collider (the green box) when walking. In the example above, we’ve placed it on the other side of the door:

[Image: image]

To set up the destination;

- Drag another **TransitionStart** Prefab from the **SceneControl** folder into the **Scene View**
- In the Inspector, rename this to **TransitionEnd**:

[Image: image]

Now let’s link the two together:

- In the **Hierarchy**, select the **TransitionStart** GameObject
- In the **Inspector**, find the **TransitionPoint** Component
- Drag the **Ellen** GameObject from the Hierarchy into the **Transition Point** Component’s **Transitioning Game Object** slot
- Set **Transition Type** to **Same Scene**

[Image: image]

This ensures that Ellen is the only object teleported, and that she is teleported within the same Scene.

Now let’s set the destination:

- Drag the **TransitionEnd** GameObject into the **TransitionPoint** Component’s **DestinationTransform** slot
- Set **Transition When** to **On Trigger Enter**

On **Trigger Enter** means that the Transition only activates when the player enters the Collider and not on a key press. If you’d rather teleport only when the player press the interact key (**E**), set **Transition When** to **Interact Pressed**.

#### **Teleporting to another Scene**

To make the player transition to a new Scene, we need two prefabs:

- **TransitionStart** is the same prefab we used in the previous section; it “sends” the player to the destination. It contains a **Transition Point** Component, which defines all the properties for where the teleportation starts, and where the teleportation should take the player. Place this prefab where you want the transition to start.
- **TransitionDestination** is a prefab which “receives” the player. It contains a **Transition Destination** Component. Place this prefab in a different Scene, where you want the transition to finish.

#### **Setting up TransitionDestination**

Let’s set up the destination first, so that we have all the information we need later when we set up the start point. To add a transition to a Scene, open that Scene, navigate to the Project window, and go to **Prefabs > SceneControl > TransitionDestination.** Place it in your Scene, in the location you want the teleporter to lead to.

The **TransitionDestinaton** prefab contains a **Scene Transition Destination** Component:

[Image: image]

- First, set the **Destination Tag** to a letter. It doesn’t really matter which letter, as long as it is the only **Scene Transition Destination Component** in this Scene with that letter.
- Next, tell it which GameObject it should expect to receive. Drag the player GameObject (Ellen) from the Hierarchy window to the **Transitioning Game Object** slot.
- Finally, make sure your destination Scene is in your Editor’s Build Settings. To do this, go to **File > Build Settings** and click **Add Open Scenes**.

#### **Setting** **up** **TransitionStart**

These settings are mostly the same as they were in the previous section, with a few changes:

[Image: image]

- Set **Transition Type** to **Different Level**
- Set **New Scene Name** to the Scene you want to send it to.
- Set **Transition Destination** Tag to the **Destination Tag** letter you set in the **Transition Destination Component**.

#### Example

Let’s make the player teleport to the first level of the game. In your **Transition Start** Component, change the settings as follows:

- Set **Transition Type** to **Different Level**
- Set **New Scene Name** to Zone1.
- Set **Transition Destination** to A

[Image: image]

Press Play, and walk to where the transition is. You should travel all the way to the start of Zone1!

Mark step as complete

## 10. Having Fun

Q&A (0)

Most objects within the Kit play with the Events system seen in the Pressure Pad setup.

Explore the existing Scenes (Zones 1 to 5) to see how other objects are set up using events and triggers.

See the [Components Documentation](https://learn.unity.com/tutorial/2d-game-kit-reference-guide) for a details of all the components and their parameters.

Happy level designing!

Mark step as complete

## Complete this Tutorial

Mark all steps complete
