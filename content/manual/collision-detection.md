This version of Unity is unsupported.

Example scripts for collider events

Choose a collision detection mode

# Collision detection

Collision detection is the **physics engine**A system that simulates aspects of physical systems so that objects can accelerate correctly and be affected by collisions, gravity and other forces. [More info](PhysicsSection.html)
See in [Glossary](Glossary.html#PhysicsEngine)’s process for detecting when a physics body (Rigidbody or ArticulationBody) comes into contact with a **collider**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#Collider). Unity provides different **collision**A collision occurs when the physics engine detects that the colliders of two GameObjects make contact or overlap, when at least one has a Rigidbody component and is in motion. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#Collision) detection algorithms for different situations, so that you can choose the most efficient approach for each individual physics body (Rigidbody or Articulation Body) in your **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene).

| Topic | Description |
| --- | --- |
| Choose a collision detection mode | Choose the right collision detectionAn automatic process performed by Unity which determines whether a moving GameObject with a Rigidbody and collider component has come into contact with any other colliders. More infoSee in Glossary mode for each collider in your project. |
| Layer-based collision detection | Use layers to define which GameObjectsThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary can collide with each other. |
| Discrete collision detectionA collision detection method that calculates and resolves collisions based on the pose of objects at the end of each physics simulation step. More infoSee in Glossary | Overview of the high-efficiency discrete collision detection mode available in Unity. |
| Continuous collision detection (CCD) | Overview of the high-accuracy continuous collision detectionA collision detection method that calculates and resolves collisions over the entire physics simulation step. This can prevent fast-moving objects from tunnelling through walls during a simulation step. More infoSee in Glossary (CCD) modes available in Unity. |

Example scripts for collider events

Choose a collision detection mode
