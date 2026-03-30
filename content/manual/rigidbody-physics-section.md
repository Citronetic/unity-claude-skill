This version of Unity is unsupported.

Character Controller component reference

Introduction to rigid body physics

# Rigidbody physics

In physics simulation, [rigid bodies](https://docs.nvidia.com/gameworks/content/gameworkslibrary/physx/guide/Manual/RigidBodyOverview.html) enable physics-based behaviour such as movement, gravity, and **collision**A collision occurs when the physics engine detects that the colliders of two GameObjects make contact or overlap, when at least one has a Rigidbody component and is in motion. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#Collision).

In Unity, you can configure rigid bodies with the [`Rigidbody`](../ScriptReference/Rigidbody.html) class, or the corresponding [Rigidbody](class-Rigidbody.html)A component that allows a GameObject to be affected by simulated gravity and other forces. [More info](class-Rigidbody.html)
See in [Glossary](Glossary.html#Rigidbody) component.

| Topic | Description |
| --- | --- |
| Introduction to Rigidbody physics | Overview of the concepts and fundamental behaviours of the Rigidbody class and component. |
| Configure Rigidbody colliders | How to configure CollidersAn invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. More infoSee in Glossary on a Rigidbody so that the physics system can accurately detect collisions. |
| Apply constant force to a Rigidbody | How and when to apply a constant linear or rotational force to a Rigidbody GameObjectThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary. |
| Apply interpolation to a Rigidbody | How to use interpolation to smoothen the movement of a Rigidbody if it appears jittery at runtime. |
| Rigidbody component reference | Reference page for the Rigidbody component. |
| Constant Force component reference | Reference page for the Constant ForceA simple component for adding a constant force or torque to game objects with a Rigidbody. More infoSee in Glossary component. |

## Additional resources

- [Nvidia: PhysX Rigid Body overview](https://docs.nvidia.com/gameworks/content/gameworkslibrary/physx/guide/Manual/RigidBodyOverview.html)

Character Controller component reference

Introduction to rigid body physics
