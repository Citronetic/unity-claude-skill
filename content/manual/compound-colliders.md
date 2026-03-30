This version of Unity is unsupported.

Terrain collider component reference

Introduction to compound colliders

# Compound colliders

Compound colliders are collections of multiple colliders on a single **Rigidbody**A component that allows a GameObject to be affected by simulated gravity and other forces. [More info](class-Rigidbody.html)
See in [Glossary](Glossary.html#Rigidbody) **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject). Each **collider**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#Collider) is attached to a child GameObject, with the Rigidbody GameObject as its parent. This allows you to group and arrange colliders into complex shapes, and have the physics system treat them as a single [rigid body](RigidbodiesOverview.html).

| Topic | Description |
| --- | --- |
| Introduction to compound colliders | Overview of compound colliders and how they work. |
| Create a compound collider | Create a compound collider from a collection of multiple colliders. |

Terrain collider component reference

Introduction to compound colliders
