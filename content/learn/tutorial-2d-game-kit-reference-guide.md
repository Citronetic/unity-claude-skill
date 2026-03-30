[Image: image]

# 2D Game Kit Reference Guide

Tutorial

Beginner

+0XP

90 mins

804

(140)

Unity Technologies

[Image: 2D Game Kit Reference Guide]Summary

The best way to use this document is like a reference guide, searching by component or setting you want to know more about. Use the navigation bars to find the section you need.

To learn the basics of how to use the Game Kit, check the [Walkthrough](https://learn.unity.com/tutorial/2d-game-kit-walkthrough?projectId=5c51481eedbc2a00206944f0), which provides a good foundation on using the Kit. The Explorer example game included in this project uses all the components we provided for gameplay. To get inspiration or an example of how to use a GameObject, explore the scenes Zone 1 through 5 in the **Scenes** folder. Important terms and concepts are highlighted with links if you would like to find out more information about them.

Resources

- [2D Game Kit Project Assets](https://assetstore.unity.com/packages/essentials/tutorial-projects/2d-game-kit-107098)

Languages available:

EnglishEnglish日本語English

## 1. Ellen

Q&A (0)

The Ellen [**prefab**](https://unity3d.com/learn/tutorials/topics/interface-essentials/prefabs-concept-usage) is the player character for the Game Kit. Aside from the standard platform controls of moving and jumping, she can crouch, jump down (through platforms), melee attack, and shoot.

#### Standard movement controls (PC)

Ellen is put together using [**Sprite Renderer**](https://docs.unity3d.com/Manual/class-SpriteRenderer.html?_ga=2.135423801.946741115.1517821219-418339272.1486654496), [**Animator**](https://docs.unity3d.com/Manual/class-Animator.html?_ga=2.261310213.946741115.1517821219-418339272.1486654496), [**Capsule Collider 2D**](https://docs.unity3d.com/Manual/class-CapsuleCollider2D.html), and [**Rigidbody 2D**](https://docs.unity3d.com/Manual/class-Rigidbody2D.html) components, as well as a number of custom scripts.

[Image: image]

#### Character Controller 2D

The **Character Controller 2D** script is used to move Ellen within the scene while obeying physics.

[Image: image]

- **Grounded Layer Mask**: (Default setting: **Platform**). These are the [Layers](https://unity3d.com/learn/tutorials/topics/interface-essentials/layers) which the character can stand on. Having it set to the **Platform** layer allows Ellen to walk on anything else that is on that layer such as the ground.
- **Grounded Raycast Distance**: (Default setting: **0.1**). This determines whether Ellen is standing on the ground by using [**Raycasts**](https://unity3d.com/learn/tutorials/topics/physics/raycasting) from the bottom of her Collider. Increasing this number would make Ellen think the ground is higher, and her feet would get stuck in the platform. Lowering this number will make Ellen think the ground is lower, causing her to look like she is falling.

#### Player Input

In this project you can easily remap the input for a player. The **Player Input** script tells Unity’s [**Input Manager**](https://docs.unity3d.com/Manual/class-InputManager.html) what controls your game should use. Whether it’s keyboard and mouse or an Xbox One controller, you can change the keys or buttons for your game on this component.

**Note**: Any changes to this component are per scene, as you change the copy (**instance**) of the **Ellen** prefab. If you have multiple levels in your game and you have changed Ellen’s **Player Input**, you must select the **Apply** button at the top of the Ellen instance. This changes the settings on the original prefab and ensures that any other instance of Ellen in other levels have the same input.

[Image: image]

We’ve provided a handy reminder to let you know if you’re looking at an instance. If you see this warning on the **Player Input** component, select **Select Prefab**, which will take you to edit the prefab.

[Image: image]

The settings for **Player Input** are as follows:

[Image: image]

- **Input Type**: (Default setting: **Mouse And Keyboard**). The option for the type of input, the options are **Mouse And Keyboard** or **Controller**. The default controller type for this Kit is **Xbox One**.
- **Pause**: The key press or button used to pause the game.
- **Key:** The key on the keyboard pressed for the action.
- **Controller Button:** The controller button pressed for the action.
- **Enabled:** Whether the action is on or off. Ticked is on, unticked is off.
- **Interact**: The key press or button used to interact with the environment.
- **Key:** The key on the keyboard pressed for the action.
- **Controller Button:** The controller button pressed for the action.
- **Enabled:** Whether the action is on or off. Ticked is on, unticked is off.
- **Melee Attack**: The key press or button used for Ellen to swing her Staff.
- **Key:** The key on the keyboard pressed for the action.
- **Controller Button:** The controller button pressed for the action.
- **Enabled:** Whether the action is on or off. Ticked is on, unticked is off.
- **Ranged Attack**: The key press or button used for Ellen to shoot her gun.
- **Key:** The key on the keyboard pressed for the action.
- **Controller Button:** The controller button pressed for the action.
- **Enabled:** Whether the action is on or off. Ticked is on, unticked is off.
- **Jump:** The key press or button used to make Ellen jump.
- **Key:** The key on the keyboard pressed for the action.
- **Controller Button:** The controller button pressed for the action.
- **Enabled:** Whether the action is on or off. Ticked is on, unticked is off.
- **Horizontal:** The key press or analogue stick to move left or right.
- **Positive:** The key on the keyboard to move the character right (positive on the X axis).
- **Negative:** The key on the keyboard to move the character left (negative on the X axis).
- **Controller Axis:** The controller analogue stick or button to move left and right.
- **Vertical:** The key press or analogue stick to crouch or look up.
- **Positive:** The key on the keyboard to move the camera to look up (positive on the Y axis).
- **Negative:** The key on the keyboard to crouch (negative on the Y axis).
- **Controller Axis:** The controller analogue stick or button to look up and crouch.
- **Persistence Type and Data Tag**: For information on how the Data Persistence system works see the **Data Persistence** section. Whether Melee Attack and Ranged Attack are enabled is the data persisted by this class.

#### Player Character

[Image: image]

The **Player Character** script holds all the information about how Ellen behaves in the game. The settings here affect movement, audio, and cameras.

**Note**: If you change any settings, the changes are only applied to the prefab instance in that scene. If you would like the changes to happen across all levels in your game, select **Apply** at the top of the instance for the change to be applied to the **Ellen** prefab.

[Image: image]

- **References**: By default you should not need to adjust this. These are all the references the script requires to function.
- **Sprite Renderer**: Used to determine which way the character is facing.
- **Damageable**: Used to determine the direction of motion when the character is hurt.
- **Melee Damager**: Used to enable/disable damage during appropriate animations.
- **Facing Left/Right Bullet Spawn Point**: Used as locations to spawn bullets from when firing.
- **Bullet Pool**: Used when spawning bullets.
- **Camera Follow Target**: Used to control camera positioning relative to the character, which allows behavior such as maintaining a lead from the character when moving fast.

[Image: image]

- **Movement Settings**: These are the settings for controlling how fast Ellen moves on the ground.
- **Max Speed**: (Default setting: **7**). How fast Ellen can run.
- **Ground Acceleration**: (Default setting: **100**). How fast Ellen gets to her Max Speed when on the ground.
- **Ground Deceleration**: (Default setting: **100**). How fast Ellen slows to a stop when there is no input.
- **Pushing Speed Proportion**: (Default setting: **0.5**). What proportion of the Max Speed Ellen moves at when pushing a box.

[Image: image]

- **Airborne Settings**: These are the settings that control how fast Ellen moves while in the air.
- **Airborne Accel Proportion**: (Default setting: **1**). What proportion of the Ground Acceleration Ellen uses when in the air.
- **Airborne Decel Proportion**: (Default setting: **0.5**). What proportion of the Ground Deceleration Ellen uses when in the air.
- **Gravity**: (Default setting: **38**)*.* How fast Ellen accelerates towards the ground. This also affects the jump height.
- **Jump Speed**: (Default setting: **16.5**). How fast Ellen takes off from a jump. This affects the jump height.
- **Jump Abort Speed Reduction**: (Default setting: **100**).**The speed at which the jump value is reduced when the jump button is released. This affects jump height.

[Image: image]

- **Hurt Settings**: These settings determine how Ellen moves and appears when she is hurt. For other settings to do with how Ellen reacts to damage see the section of this document on the **Damage system**.
- **Hurt Jump Angle**: (Default setting: **45**). When Ellen is hurt, she recoils by jumping into the air away from the source of the damage. This is the angle from horizontal at which she jumps.
- **Hurt Jump Speed**: (Default setting: **8**)*.* How fast Ellen takes off when recoiling from damage.
- **Flickering Duration**: (Default setting: **0.05**). When Ellen is hurt her sprite turns on and off quickly to produce a flickering effect. This duration sets how long the sprite stays on and off whilst flickering.

[Image: image]

- **Melee Settings**: These are settings for how Ellen moves when she swings her staff. For other settings to do with how Ellen damages things see the section of this document on the **Damage system**.
- **Melee Attack Dash Speed**: (Default setting: **15**). The distance at which Ellen dashes horizontally when she attacks with her Staff.
- **Dash While Airborne**: (Default setting: **Enabled**). An optional setting to enable a dash during an airborne attack. This sets horizontal movement and does not increment it. If Ellen is already moving horizontally while airborne, this setting may not be noticeable.

[Image: image]

- **Ranged Settings**: These are settings to do with the bullets that are spawned when Ellen fires her gun.
- **Shots Per Second**: (Default setting: **2**). The maximum number of bullets that can be spawned per second.
- **Bullet Speed**: (Default setting: **30**). The speed given to bullets when they are spawned.
- **Holding Gun Timeout Duration**: (Default setting: **1.5**). How long Ellen continues to hold her gun out after she has stopped firing.
- **Right Bullet Spawn Point Animated**: (Default setting: **Enabled**). The bullet spawn point is animated to follow the gun position. By default, the Ellen asset has a bullet spawn position on the right. When she is facing left we mirror the spawn point animation. If you would like to add your own animated sprite that faces to the left, then uncheck this box.

[Image: image]

- **Audio Settings**: By default you should not need to adjust this. We randomize the audio played for Ellen’s various actions so that it does not sound repetitive. These are the references to the **RandomAudioPlayers** that play the audio.
- **Footstep Audio Player**: The **RandomAudioPlayer** used when Ellen makes a step.
- **Landing Audio Player**: The **RandomAudioPlayer** used when Ellen becomes grounded after being airborne.
- **Hurt Audio Player**: The **RandomAudioPlayer** used when Ellen is damaged.
- **Melee Audio Player**: The **RandomAudioPlayer** used when Ellen does a melee attack.
- **Ranged Attack Audio Player**: The **RandomAudioPlayer** used when Ellen does a ranged attack.

[Image: image]

- **Camera Follow Settings**: Rather than following Ellen, the camera follows a target offset from Ellen’s location. These settings control the offset.
- **Camera Horizontal Facing Offset**: (Default setting: **2**). The amount the target is offset horizontally in front of Ellen.
- **Camera Horizontal Speed Offset:** (Default setting: **0.2**). The amount the target is shifted based on Ellen’s horizontal speed.
- **Camera Vertical Input Offset**: (Default setting: **2**). How much the target is offset vertically based on the player’s input.
- **Max Horizontal Delta Damp Time**: (Default setting: **0.4**). The amount of time it takes for the target to move horizontally from no offset to its desired horizontal offset.
- **Max Vertical Delta Damp Time**: (Default setting: **0.6**). The amount of time it takes for the target to move vertically from no offset to its desired vertical offset.
- **Vertical Camera Offset Delay**: (Default setting: **1**). The amount of time that the up or down input keys need to be held before the target starts to move vertically, so that the player can look up or down.

[Image: image]

- **Misc Settings**: A folder for other settings.

- **Sprite Originally Faces Left**: (Default setting: **Disabled**). This refers to the sprite asset itself without any flipping. It is used to determine things like which spawn point bullets should spawn from.

Mark step as complete

## 2. Enemy Behaviour

Q&A (0)

The **Enemy Behaviour** component is applied to Chomper and Spitter, our two enemies in the game. Find these enemies in the **Project** window in **Prefabs** > **Enemies**.

Both enemies use the same component, they just use different settings.

[Image: image]

- **Sprite Faces Left:** Enable if the sprite should face left.
- **Movement:**

- **Speed:** The speed of the enemy.
- **Gravity:** How fast it falls.
- **References**

- **Projectile Prefab:** The prefab of the projectile the enemy is to fire (only for projectile enemy).
- **Scanning settings:**

- **View Direction:** The direction in which the enemy can detect the player. This is depicted with a green circle in the **Scene**view.
- **View FOV:** The field of view the enemy has. This is depicted with a green circle in the **Scene**view.
- **View Distance:** How far away the enemy can see the player. This is depicted with a green circle in the **Scene**view.
- **Time Before Target Lost:** The amount of time before the enemy will stop chasing or searching for the player once the player is out of range.
- **Melee Attack Data:** Melee attack information, this only applies to melee enemies like Chomper.

- **Melee Range:** The distance away from itself the enemy can hit the player.
- **Melee Damager:** The **Damager** script on the enemy. Check out **Damage system** for more information.
- **Contact Damager:** The **Contact Damager** script on the enemy. This script causes damage to the player character when Ellen touches or is touched by the enemy.
- **Attack Dash:** Enables or disables a dash forward when the enemy attacks.
- **Attack Force:** The force applied to the player character when they’re attacked. This is what pushes the player back after being attacked.
- **Range Attack Data** Ranged attack information. This only applies to ranged enemies like Spitter.

- **Shooting Origin:** The position the projectile is shot from.
- **Shoot Angle:** The angle at which the projectile is shot from the origin.
- **Shoot Force:** The force applied to the projectile.
- **Fire Rate:** How fast the projectiles are shot.
- **Audio:**

- **Shooting Audio:** The **RandomAudioPlayer** used when a shot is fired.
- **Melee Attack Audio:** The **RandomAudioPlayer** used when a melee attack occurs.
- **Die Audio:** The **RandomAudioPlayer** used when the enemy dies.
- **Foot Step Audio:** The **RandomAudioPlayer** used for the enemy’s footsteps.
- **Misc:**

- **Flickering Duration:** If the enemy’s health is more than 1 when it is hit, it flickers to indicate a hit. This value is the duration of time the flicker lasts.

Mark step as complete

## 3. Health Pickup

Q&A (0)

The **Health Pickup** is a prefab that increases the player’s health when the player walks through it. Find it in the **Project** window in **Prefabs** > **Interactables**.

[Image: image]

- **Health Amount:** The amount of health the box provides.
- **On Giving Health:** The events triggered when the player character collides with the box and health is given to the player character.

Mark step as complete

## 4. Pressure Pad

Q&A (0)

The**Pressure Pad** is automatically set up so that when the player character walks on it, it lights up and plays a sound. You can connect the **Pressure Pad** to trigger events like opening a door.

[Image: image]

- **Activation Type:** How the button is activated. The option below changes depending on this setting.
- **Item Count:** The number of GameObjects needed to be on the **Pressure Pad** to activate it.
- **Mass:** The weight of a GameObject required to activate the **Pressure Pad**.
- **Required Count:** The required number of items for the pad to trigger the event in **On Pressed** and **On Release**. This changes to **Required Mass** if **Activation Type** is changed.
- **Deactivated Box Sprite:** (Optional). The sprite to change to when the platform is not pressed. Only needed if the **Boxes** option has a **Sprite Renderer**.
- **Activated Box Sprite:** (Optional). The sprite to change to when the platform is pressed. Only needed if the **Boxes** option has a **Sprite Renderer**.
- **Boxes:** (Optional). A list of boxes expected to be pushed onto the **PressurePad**. When they are pushed on, the sprites change to those in **Deactivated Box Sprite** and **Activated Box Sprite**.
- **On Pressed:** Events that happen when the **Pressure Pad** is pressed. This is dependant on the correct **Required Count** or **Required Mass**.
- **On Release:** Events that happen when the **Pressure Pad** is released. This is dependant on the correct **Required Count** or **Required Mass**.

Mark step as complete

## 5. Damage system

Q&A (0)

The damage system in the kit is composed of two components: the **Damager** and **Damageable** scripts.

Adding a **Damager** script to a GameObject makes it able to inflict damage to any GameObject that has a **Damageable** component, as long as their settings match.

#### Damager

The **Damager** component has events for collision with **Damageable** components and non **Damageable** components. The health calculation is done automatically, and these events are used to trigger gameplay changes or visual effects.

The **Damager** component does not require a collider. It displays a box gizmo in the **Scene** view that you can use to tweak the component's size and position.

[Image: image]

- **Damage:** The amount of damage the GameObject inflicts on a **Damageable** (for example, Ellen or Chomper) when hit.
- **Offset** and **Size:** These are the two parameters that define the **Damager** collision box. This is the outer box displayed on the **Spikes** in the **Scene** view. This box will inflict damage when it is collided with.

[Image: image]

- **Offset Based On Sprite Facing**: This setting allows the **Damager** to change position based on which direction a sprite is facing. For example, this is used on Ellen allowing the **Damager** component to flip left and right depending on which way she is facing.
- **Sprite Renderer**: The **Sprite Renderer**component that the above setting uses.
- **Can Hit Triggers**: Toggles whether the **Damager** component collides with triggers (if enabled) or totally ignore triggers (if disabled).
- **Force Respawn**: If this is enabled, the GameObject containing a **Damageable** component immediately respawns to the latest checkpoint. The **Acid** prefab uses this when the Player character falls into it.
- **Ignore Invincibility**: If enabled, the **Damager**component still registers a hit to the **Damageable** but does not remove health. In the example game, the **Acid** prefab uses this so that the player character always respawns, even if they are invincible from a previous enemy hit.
- **Hittable Layers**: The **Layers** on which the **Damager** components inflicts damage. **Layers** that are not selected do not receive damage.
- **On Damageable Hit:** Events here play when a GameObject with a **Damageable** component is hit.
- **On Non Damageable Hit:** Events here play when a GameObject with no **Damageable** component is hit.

#### Damageable

The **Damageable** component receives damage from collisions with GameObjects that have the **Damager** component attached to them. There are events for when damage is received, health is restored, health changes, or complete depletion of health (death) occurs.

Contrary to the **Damager**component, the **Damageable** component relies on colliders attached to the same GameObject, so in addition to adding a **Damageable** script to your GameObject, don't forget to add colliders to define hittable zones!

[Image: image]

- **Starting Health**: Health level. **Damager**components remove the health of GameObjects with a **Damageable**component on each impact. GameObjects with a **Damageable**component die when this reaches 0.
- **Invulnerable After Damage**: If enabled, GameObjects with **Damageable** components becomes invulnerable for a given time after an impact with a **Damager** component.
- **Invulnerability Duration**: Length of time (in seconds) that GameObjects with **Damageable** components are considered invulnerable after impact with a **Damager** component (only applicable if previous setting is enabled).
- **Disable On Death**: This setting disables the GameObject on death.
- **Center Offset**: This is used to define where the centre of the **Damageable** component is (an offset of (0,0,0) means it is on the GameObject position). Used to compute distance to the **Damager**component.
- **On Take Damage:** Events triggered when the GameObject receives damage.
- **On Die:** Events triggered when the GameObject's health is depleted.
- **On Gain Health:** Events triggered when a GameObject gains new health.
- **Persistent Type:** See Persistent Data.
- **Data Tag:** See Persistent Data.

#### Checkpoints

Find checkpoints the **Project** window, in the folder **Prefabs** > **SceneControl**.

[Image: image]

Each time the player character enters a **Checkpoint** collider, this checkpoint becomes active. When the player character fall into the water (or gets hit by any **Damager** component****that has the **Force Respawn** setting) they reappear at that checkpoint.

**Note**: The player character reappears at the GameObject position, so make sure it is above ground!

Mark step as complete

## 6. Moving Platform

Q&A (0)

A prefab located in the **Project** window in **Prefabs** > **Interactables**.

To create a **Moving Platform** in your scene, drag a **MovingPlatform** prefab from the **Project** window into the **Scene**view.

The **Moving Platform** prefab includes a **Moving Platform** script, **Box Collider 2D**, **Rigidbody 2D**, **Platform Effector 2D**, and a **Platform Catcher Script.**

[Image: image]

The **Platform Catcher**script allows GameObjects on top of the platform to move freely. You should not need to change this.

In the **Scene v**iew, the GameObject has a red dotted line with a **Transform** tool on the end. This indicates the movement path of the platform and its destination. Drag the **Transform** tool in any direction to change the path and destination.

[Image: image][Image: image]

- **Platform Catcher**: This automatically finds the **Platform Catcher** script on the platform. You should not need to change this.
- **Preview Position**: Allows you to scrub through and preview the platform's path in the **Scene** view.
- **Start Moving**: When enabled, the platform starts moving as soon as a level is loaded. If disabled, the platform's movement needs to be triggered by an event.

- **When becoming visible**: This option only appears if **Start Moving**is enabled. If **When becoming visible** is enabled, the platform starts moving only when it becomes visible on screen, not when the level is loaded.
- **Looping**: Defines how the platform reacts once it reaches the end of its path.
- **BACK_FORTH:** The platform moves back and forth between a start and end point.
- **LOOP:** Once the platform reaches the last point of its path, it moves toward the start point in a straight line to restart the cycle, making a loop.
- **ONCE:** The platform stops when it reaches the final point.
- **Speed**: (Default setting: **2**). The speed at which the platform moves (in units per second).

[Image: image]

- **Add Node:** This button adds another node (destination point) to your platform’s path. A platform moves from node to node.
- **Node 0:** The platform position. Cannot be deleted. There is no position as this cannot be altered.

- **Wait Time:** The amount of time the platform waits to move on to the next node.
- **Node 1:** The first path and destination. This is always included by default.
- **Position:** The position of the node (local space).
- **Delete:** The button to delete a node.
- **Wait Time:** The amount of time the platform waits to move on to the next node.

A platform with two nodes looks like this in the **Scene** view.

[Image: image]Mark step as complete

## 7. Interaction system

Q&A (0)

The interaction system allows the player to interact with GameObjects. To do this, it uses three components:

- **InteractOnCollision2D**
- **InteractOnTrigger2D**
- **InteractOnButton2D**

Interactions are dependant on GameObjects having a [**Collider 2D**](https://docs.unity3d.com/Manual/Collider2D.html) component on them. A collider is an invisible area around a GameObject that can detect when something touches or enters it. The main ones we use in the Kit are Box ([**Box Collider 2D**](https://docs.unity3d.com/Manual/class-BoxCollider2D.html)), Capsule ([**Capsule Collider 2D**](https://docs.unity3d.com/Manual/class-CapsuleCollider2D.html)) and Circle ([**Circle Collider 2D**](https://docs.unity3d.com/Manual/class-CircleCollider2D.html)).

These are all set up for you in the various prefabs provided in the Kit.

If you wish to add new types of interactions on GameObjects or create your own, depending on which of the following **InteractOn** components you use, you must take note of the **Is Trigger** checkbox on the collider of the GameObject you’d like to make interactable. This documentation includes information on what state the collider needs to be in for a particular **InteractOn** component.

[Image: image]

#### Interact On Collision 2D

This is used to trigger events when GameObject colliders touch.

[Image: image]

- **Script:** The name of the script being used (cannot be changed).
- **Layers:** Only GameObjects on the selected **Layers** trigger the events.
- **On Collision:** Events listed here happen when a GameObject that belong to the set **Layer** collide.

If setting up your own, there is no need to enable **Is Trigger** on the collider.

#### Interact On Trigger 2D

This is used to trigger events when a GameObject enters a collider and then trigger more events when an GameObject exits a collider.

If making your own, ensure **Is Trigger** is enabled on the collider.

[Image: image]

- **Script:** The name of the script being used (cannot be changed).
- **Layers:** Only GameObjects on the selected **Layers** trigger the events.
- **On Enter:** Events listed here happen when a GameObject that belong to the set **Layer** enter the **Trigger**.
- **On Exit:** Events listed here happen when an GameObject that belongs to the set **Layer** exits the **Trigger**.

[Image: image]

- **Inventory Checks:** This allows you to ensure events only happen when a GameObject entering the **Trigger** has a GameObject in its inventory (for example, only opening a door once a player character entering the trigger zone has a **Key**GameObject in their inventory).
- **Size:** (Default setting: **0**). Increase this number to increase the number of inventory items the trigger should expect.
- **Element 0:** The first Inventory Check.
- **Inventory Items:** GameObject(s) the script expects in the inventory of the GameObject colliding with it.
- **Size:** (Default setting: **0**). The number of items you would like the **Trigger** GameObject to carry in its inventory.
- **Element 0:** The first inventory item needed. This must match the expected names (listed in the **Inventory System** section).
- **On has Item:** Events triggered when the GameObject holds ALL the items set in the **Inventory Items**.
- **On Does Not Have Item:** Events triggered when the GameObject does not hold ALL the items set in **Inventory Items**.

#### Interact On Button 2D

This is used to trigger events when a GameObject is inside the trigger zone and a player presses the **Interact** button in the game (check out the **Player Input** section for more information on the **Interact** button).

If making your own, ensure **Is Trigger** is enabled on the collider.

[Image: image]

- **Script:** The name of the script being used (cannot be changed).
- **Layers:** Only GameObjects on the selected **Layers** will trigger the events.
- **On Enter:** Events listed here happen when an GameObject that belongs to the set layer enters the Trigger.
- **On Exit:** Events listed here happen when a GameObject that belongs to the set layer exits the Trigger.
- **Inventory Checks:** This allows you to ensure events only happen when a GameObject entering the trigger and pressing the **Interact** button has a GameObject in its inventory (for example, only opening a door once a player has a **Key** GameObject  in their inventory when entering the trigger and pressing the **Interact** button).
- **Size:** (Default setting: **0**). Increase this number to increase the number of inventory items the **Trigger** should expect.
- **Element 0:** The first Inventory Check.
- **Inventory Items:** GameObjects the script expects in the inventory of the GameObject colliding with it.
- **Size:** The number of items you would like the triggering GameObject to carry in its inventory.
- **Element 0:** The first inventory item needed. This must match the expected names listed in the **Inventory System** section.
- **On Button Press:** Events that are triggered when the **Interact** button is pressed.

Mark step as complete

## 8. Inventory system

Q&A (0)

The inventory system is made up of two parts: the **Inventory Controller** component and the **Inventory Item**.

The **Inventory Controller** component should be added to a GameObject holding the inventory. An **Inventory Item** script should be added to the item that is being collected. For example, Ellen (**Inventory Controller**) collects a Key (**Inventory Item**).

The **Inventory Controller** is able to automatically collect the **Inventory Item** when their colliders make contact, and it defines actions that happen when a GameObject is received or removed.

#### Inventory Controller

The **Inventory Controller** component has an entry for each item that can be carried in your inventory. The component can exist on a character, a chest, or a shop.

[Image: image]

- **Inventory Events:** List of events to occur on specific GameObjects added to the inventory. Increase the number here to add new events

**Tip**: You can delete an event by right-clicking on the name in the list and selecting **Delete Array Element**.

- **Key:** A unique identifier that represents the**Inventory Item**, for example, a Key, a Gun, a Staff, etc. This must match the **Key** in the **Inventory Item** component on the item you wish to be collected. The inventory can only hold a single instance of each GameObject; if a GameObject with the same **Key** is already in the inventory, the **Add** event in the **Inventory Controller** is not called.
- **OnAdd:** Events triggered when the item is added to the inventory.
- **OnRemove:** Events triggered when the item is removed from the inventory.
- **Data Settings:** See the **Persistent Data** documentation for more info.

Do not confuse the **Key** of an item (which is the unique identifier assigned to an item) with a Key, a collectible GameObject we like to use in games. Mention within the documentation of the unique identifier is in bold to limit confusion.

#### Inventory Item

Any item that can be carried in the inventory needs an **Inventory Item** component. This specifies the **Key** of the item, an **Audio Clip**, and which **Layers** can pick the item up.

An **InventoryItem** is a component added to the **GameObject** representing the item. It also requires a **Circle Collider 2D** and automatically adds one if missing. That collider is set to trigger and is used to detect when the player character touches the GameObject.

The state of the GameObject (active or not) is saved, so it remains the same when the scene is reloaded and the player character re-enters the zone.

[Image: image]

- **Inventory Key:** A unique name for the item (for example, Key1), used by the inventory to track if an item is already owned or not.
- **Layers:** The Layer the GameObject collecting the item is on.
- **Disable On Enter:** This setting disables the GameObject once it has been collected.
- **Clip:** The **Audio Clip** to be played when the item is collected. If empty, no **Audio Clip** is played.
- **Data Settings:** See the **Persistent Data** documentation for more info.

Mark step as complete

## 9. Hub Door

Q&A (0)

The **Hub Door** component is used to change the sprite of a GameObject depending on how many inventory items have been collected.

Once all the items have been collected the **On Unlocked** function is called. In the below example the three inventory items to collect are Key1, Key2 and Key3. Each time one item in the inventory is collected the sprite changes.

**Interact On Trigger 2D** and **Interact On Button 2D** are also able to check if this component has been satisfied.

[Image: image]

- **Required Inventory Item Keys:** The list of **Keys** of the GameObjects that need to be collected. Once ALL are collected it triggers the **On Unlocked** event.
- **Size:** The amount of items that need to be collected. Size increases the number of Elements below.
- **Element:** The **Key** of the GameObjects collected.
- **Unlock State Sprites:** The list of sprites that display when collecting items. Sprites change sequentially.
- **Size:** Number of sprite slots.
- **Element:** A sprite that changes the appearance of a GameObject when an inventory item is collected.
- **Key Director Trigger:** This triggers a Director sequence if one is set up.
- **Character Inventory:** The GameObject holding the **Inventory Controller**component. This component uses to track the collection.
- **On Unlocked:** The events triggered when all the items have been collected and sprites changed.
- **Data Settings:** Check out the **Persistent Data** documentation for more information about these settings.

Mark step as complete

## 10. Enemy Spawner

Q&A (0)

The **Enemy Spawner** prefab is located in the **Project** window, in **Prefabs** > **Enemies**. This controls the spawning of multiple enemies in your scene at the location it is placed.

[Image: image]

- **Prefab:** The enemy prefab to be spawned.
- **Initial Pool Count:** This determines the number of enemies that will be held in the pool. A good value to enter here is equal to the number of concurrent enemies that need to be spawned.
- **Total Enemies To Be Spawned:** The number of enemies that the spawner can spawn until it stops spawning enemies.
- **Concurrent Enemies to be spawned:** The number of enemies that the spawner spawns in the world at the same time. For example, If this is set to **5** and **Total Enemies To Be Spawned**is set to **10**, the spawner spawns five enemies. Once one is killed, the spawner spawns a new one, unless it has already spawned 10 in total.
- **Spawn Area:** This is the extent of the spawn zone around the spawn point. Enemies are spawned at random positions within the spawn zone. This can be visualized in the **Scene** view by the white rectangle gizmo around the spawn point.

[Image: image]

- **Spawn Delay:** The delay between the death of an enemy and the spawning of the next one.
- **Removal Delay:** The time before an enemy is removed from the world and sent back to the pool.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
