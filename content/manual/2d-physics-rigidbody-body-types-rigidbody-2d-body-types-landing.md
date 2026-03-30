This version of Unity is unsupported.

Introduction to Rigidbody 2D

Introduction to Rigidbody 2D body types

# Rigidbody 2D body types

There are three options for **Body Type**Defines a fixed behavior for a 2D Rigidbody. Can be Dynamic (the body moves under simulation and is affected by forces like gravity), Kinematic (the body moves under simulation, but isn’t affected by forces like gravity) or Static (the body doesn’t move under simulation). [More info](../../../2d-physics/rigidbody/introduction-to-rigidbody-2d.html)
See in [Glossary](../../../Glossary.html#BodyType) which define the behavior of the **Rigidbody**A component that allows a GameObject to be affected by simulated gravity and other forces. [More info](../../../class-Rigidbody.html)
See in [Glossary](../../../Glossary.html#Rigidbody) 2D. Any **Collider**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](../../../CollidersOverview.html)
See in [Glossary](../../../Glossary.html#Collider) 2D attached to that Rigidbody 2D inherits the Rigidbody 2D’s Body Type as well.

The selected Body Type defines the Rigidbody 2D’s movement behavior (position and rotation) and Collider interactions. When a Body Type changes, Unity recalculates various mass-related internal properties, and all existing contacts for the Collider 2Ds attached to the Rigidbody 2D need to be re-evaluated during the **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../../../class-GameObject.html)
See in [Glossary](../../../Glossary.html#GameObject)’s next FixedUpdate. Depending on how many contacts and Collider 2Ds are attached to the body, changing the Body Type can cause variations in performance.

The properties of the Rigidbody 2D component in its **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](../../../UsingTheInspector.html)
See in [Glossary](../../../Glossary.html#Inspector) window differs depending on which Body Type you have selected. You can refer to the following pages for detailed information about the property settings for each Body Type:

| Page | Description |
| --- | --- |
| Introduction to Rigidbody 2D body types | Understand the concepts behind the different ypes of Rigidbody 2D body types. |
| Dynamic Body Type | Techniques and resources for working with a Dynamic Body Type Rigidbody 2D. |
| Kinematic Body Type | Techniques and resources for working with a Kinematic Body Type Rigidbody 2D. |
| Static Body Type | Techniques and resources for working with a Static Body Type Rigidbody 2D. |

## Additional resources

- [API documentation on Rigidbody2D](../../../../ScriptReference/Rigidbody2D.html)

Introduction to Rigidbody 2D

Introduction to Rigidbody 2D body types
