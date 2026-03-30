This version of Unity is unsupported.

Use collisions to trigger other events

OnCollision events

# Interaction between collider types

The following **collision**A collision occurs when the physics engine detects that the colliders of two GameObjects make contact or overlap, when at least one has a Rigidbody component and is in motion. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#Collision) matrix table describe which event messages Unity generates based on the configuration of each **collider**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#Collider) in a collision pair:

| Collider types | Static collider | Dynamic collider | Kinematic collider | Static trigger collider | Dynamic trigger collider | Kinematic trigger collider |
| --- | --- | --- | --- | --- | --- | --- |
| Static collider | No collision event message sent | Collision detectionAn automatic process performed by Unity which determines whether a moving GameObject with a Rigidbody and collider component has come into contact with any other colliders. More infoSee in Glossary occurs and messages sent on collision | No collision event message sent | No collision event message sent | Trigger messages sent on collision | Trigger messages sent on collision |
| Dynamic collider | Collision detection occurs and messages sent on collision | Collision detection occurs and messages sent on collision | Collision detection occurs and messages sent on collision | Trigger messages sent on collision | Trigger messages sent on collision | Trigger messages sent on collision |
| Kinematic collider | No collision event message sent | Collision detection occurs and messages sent on collision | No collision event message sent | Trigger messages sent on collision | Trigger messages sent on collision | Trigger messages sent on collision |
| Static trigger collider | No collision event message sent | Trigger messages sent on collision | Trigger messages sent on collision | No collision event message sent | Trigger messages sent on collision | Trigger messages sent on collision |
| Dynamic trigger collider | Trigger messages sent on collision | Trigger messages sent on collision | Trigger messages sent on collision | Trigger messages sent on collision | Trigger messages sent on collision | Trigger messages sent on collision |
| Kinematic trigger collider | Trigger messages sent on collision | Trigger messages sent on collision | Trigger messages sent on collision | Trigger messages sent on collision | Trigger messages sent on collision | Trigger messages sent on collision |

## Collision generates collision detection messages

When a pair of colliders make contact, they generate collision detection messages if the following are both true:

- There is at least one dynamic collider.

- The other collider is a static collider, a kinematic collider, or another dynamic collider.

Trigger colliders don’t generate collision detection messages.

Unity only applies physics forces to collider **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) that have a physics body (a Rigidbody or ArticulationBody). When a physics body collider collides with a static collider, only the physics body collider behavior changes as a result of the collision (for example, it might bounce or slow down as a result of the collision).

## Collision generates trigger messages

Trigger messages occur in the following circumstances:

- A dynamic or kinematic trigger collider collides with any collider type.

- A static trigger collider collides with any dynamic or Kinematic collider.

Use collisions to trigger other events

OnCollision events
