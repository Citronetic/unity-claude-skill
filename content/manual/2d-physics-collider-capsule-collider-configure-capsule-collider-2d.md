This version of Unity is unsupported.

Capsule Collider 2D component reference

Composite Collider 2D

# Configure Capsule Collider 2D

There are multiple properties for a Capsule **Collider**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](../../../CollidersOverview.html)
See in [Glossary](../../../Glossary.html#Collider) 2D that you must configure before it can be used correctly.

## Defining size and direction

The settings that define the shape of the **Capsule Collider**A capsule-shaped collider component that handles collisions for GameObjects like barrels and character limbs. [More info](../../../class-CapsuleCollider.html)
See in [Glossary](../../../Glossary.html#capsulecollider) 2D are **Size** and **Direction**. Both the Size and Direction properties refer to **X** and **Y** (horizontal and vertical, respectively) in the local space of the Capsule Collider 2D, and not in world space.

A typical way to set up the Capsule Collider 2D is to set the **Size** to match the **Direction**. For example, if the Capsule Collider 2D’s **Direction** is **Vertical**, the **Size** of **X** is 0.5 and the **Size** of **Y** is 1, this makes the vertical direction capsule taller, rather than wider.

In the example below, the **X** and **Y** are represented by the yellow lines.

[Image: An example of a Capsule Collider 2D set so the Size matches Direction]
An example of a Capsule Collider 2D set so the **Size** matches **Direction**

## Capsule configuration examples

You can change the Capsule Collider 2D with different configurations. Below are some examples.

Note that when the **X** and **Y** of the **Size** property are the same, the Capsule Collider 2D always approximates to a circle.

[Image: Examples of Capsule Collider 2D configurations]
Examples of Capsule Collider 2D configurations

**Note:** A known issue in the 2D physics system is that when a **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../../../class-GameObject.html)
See in [Glossary](../../../Glossary.html#GameObject) moves across multiple Colliders, one or several of the Colliders may register a **collision**A collision occurs when the physics engine detects that the colliders of two GameObjects make contact or overlap, when at least one has a Rigidbody component and is in motion. [More info](../../../CollidersOverview.html)
See in [Glossary](../../../Glossary.html#Collision) between the Colliders. This may occur even when the Colliders are perfectly aligned. This collision can cause the Collider to slow down or stop.

While constructing a surface with the Capsule Collider 2D can help reduce this problem, it is recommeneded to use a single Collider rather than multiple Colliders for a surface, such as the [Edge Collider 2D](../edge-collider-2d-reference.html).

Capsule Collider 2D component reference

Composite Collider 2D
