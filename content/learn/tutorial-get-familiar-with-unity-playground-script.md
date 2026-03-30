[Image: image]

# Getting Familiar with Unity Playground Script

Tutorial

Beginner

+10XP

20 mins

118

(238)

Unity Technologies

[Image: Getting Familiar with Unity Playground Script ]Summary

Unity Playground comes with programmed scripts so that you just need to drag and drop the ones that you need on your hierarchy. Before we dive into game development, let's review Playground scripts that you can use to design your first game in Unity!

Languages available:

EnglishEnglish한국어English

## 1. Movement Scripts

Q&A (0)

*Unity Playground comes with pre-coded scripts so that you just need to drag and drop the ones that you need on your hierarchy. Before we dive in, make sure you look at all that’s available to work with!*

[Image: image]

*Movement scripts allow you to move objects upon click of select keys or automatically.*

1. Open the Unity Playground Cheatsheet and look at the Movement pages (you can also just look on the right side).
2. Look at what kinds of scripts are available.

Questions to Ask:

- What’s the difference between the scripts on ‘Movement’ and Movement 2’?
- Why would you want certain objects to move automatically and others to move upon pressing of keys?
- Why would you want to use ‘FollowTarget’, ‘Patrol’, and ’Wander’ for the enemy player?

[Image: image]Mark step as complete

## 2. Attributes Scripts

Q&A (0)[Image: image]

*Attributes scripts allow you to move objects upon click of select keys or automatically.*

1. **Bullet** has no functionality of its own, but it holds a reference to which Player has shot the projectile
2. **Collectable** awards a point to any player who touches the object
3. **DestroyForPoints** destroys the GameObject on collision and awards points to the Player who originally shot the bullet
4. **HealthSystem** allows characters, enemies, or objects to take damage, and potentially be removed from the game
5. **ModifyHealth** makes any physical object capable of subtracting or adding health to any object that has the**HealthSystem** attribute
6. **Resource** allows objects to be picked up and added to an inventory displayed by the UI

Definitions

- What is [GameObject](https://www.google.com/url?q=https://docs.unity3d.com/560/Documentation/Manual/class-GameObject.html&sa=D&ust=1560828808895000)

Mark step as complete

## 3. Gameplay Scripts

Q&A (0)[Image: image]

*Gameplay scripts are a miscellaneous category of scripts to produce gameplay effects. They act on their own, meaning they don’t require Conditions to activate them.*

1. **ObjectCreatorArea** generates new objects from a prefab, in a rectangular area
2. **ObjectShooter** allows you to propel or shoot a prefab when pressing a key (by default Space)
3. **PickUpAndHold** gives a character the ability to pick up (and drop) something
4. **TimeSelfDestruct** gets rid of objects that are no longer needed in the scene after a certain time

Definitions

- What is a [Prefab](https://www.google.com/url?q=https://docs.unity3d.com/Manual/Prefabs.html&sa=D&ust=1560828808898000)

Mark step as complete

## 4. Conditions Scripts

Q&A (0)[Image: image]

*Conditions act as a gateway to other behaviors. If the condition is verified, then the attached Actions are executed.*

1. **ConditionArea** performs an action when a GameObject enters, exits, or stays  inside the trigger collider
2. **ConditionCollision** performs an action when this GameObject collides with another
3. **ConditionKeyPress** performs an action when a button is pressed, released, or as long as it’s kept pressed
4. **ConditionRepeat** performs an action repeatedly

Definitions

- What is a [Trigger](https://www.google.com/url?q=https://docs.unity3d.com/Manual/CollidersOverview.html&sa=D&ust=1560828808900000)
- What is a [Collider](https://www.google.com/url?q=https://docs.unity3d.com/Manual/CollidersOverview.html&sa=D&ust=1560828808900000)

Mark step as complete

## 5. Actions Scripts

Q&A (0)[Image: image]

*Actions are executed when a Condition is verified.*

1. **On/Off**turns an object on or off
2. **Create**creates a new GameObject from a Prefab in a specific position
3. **Destroy** destroys a GameObject instantaneously on impact. Could be this object, or the one that suffered the impact
4. **Teleport** teleports this or another object to a new location
5. **ConsumeResource** (when a specified Type of Resource is present in the player’s inventory in the quantity specified in Amount Needed), the amount of resources is consumed
6. **DialogueBalloon**creates a dialogue balloon on a character’s head
7. **LoadLevel** restarts the level, or load another one (load another Unity scene)

Mark step as complete

## Complete this Tutorial

Mark all steps complete
