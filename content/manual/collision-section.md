This version of Unity is unsupported.

Constant Force component reference

Introduction to collision

# Collision

To configure **collision**A collision occurs when the physics engine detects that the colliders of two GameObjects make contact or overlap, when at least one has a Rigidbody component and is in motion. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#Collision) between GameObjects in Unity, you need to use colliders. Colliders define the shape of a **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) for the purposes of physical collisions. You can then use these colliders to manage collision events. You can configure collisions via **collider**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#Collider) components, or their corresponding C# class.

This documentation describes how to configure collisions and collision events, and how colliders interact with each other and their environment.

| Topic | Description |
| --- | --- |
| Introduction to collision | Overview of the fundamental concepts around physics collision in Unity. |
| Introduction to collider types | The different collider types (static, kinematic, and dynamic), and how collider behaviour differs depending on the collider’s physics body configuration. |
| Collider shapes | The different collider shapes available, and how collider shape complexity affects performance. |
| Collider surfaces | How PhysX handles friction and bounciness on a collider’s surface, and how to configure surface properties for each collider. |
| Collider interactions and events | How collisions can call events and functions to trigger changes at run time. |
| Collision detectionAn automatic process performed by Unity which determines whether a moving GameObject with a Rigidbody and collider component has come into contact with any other colliders. More infoSee in Glossary | How PhysX detects collisions in Unity, and how to select the right algorithm depending on your collider configuration for optimal performance. |

Constant Force component reference

Introduction to collision
