This version of Unity is unsupported.

Static Body Type reference

Collider 2D

# Rigidbody 2D Simulated property

The Simulated property is common to all available **Body Types**Defines a fixed behavior for a 2D Rigidbody. Can be Dynamic (the body moves under simulation and is affected by forces like gravity), Kinematic (the body moves under simulation, but isn’t affected by forces like gravity) or Static (the body doesn’t move under simulation). [More info](../../2d-physics/rigidbody/introduction-to-rigidbody-2d.html)
See in [Glossary](../../Glossary.html#BodyType). Use this property to start (enabled) or stop (disabled) a **Rigidbody**A component that allows a GameObject to be affected by simulated gravity and other forces. [More info](../../class-Rigidbody.html)
See in [Glossary](../../Glossary.html#Rigidbody) 2D and any attached **Collider**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](../../CollidersOverview.html)
See in [Glossary](../../Glossary.html#Collider) 2Ds and **Joint**A physics component allowing a dynamic connection between Rigidbody components, usually allowing some degree of movement such as a hinge. [More info](../../Joints.html)
See in [Glossary](../../Glossary.html#joint) 2Ds from interacting with the 2D physics simulation. Changing this property is more memory and processor efficient than enabling or disabling individual Collider 2D and Joint 2D components.

When you enable the Simulated property, the following occurs:

- The Rigidbody 2D moves via the simulation (gravity and physics forces are applied).

- Any attached Collider 2Ds continue creating new contacts and continuously reevaluate contacts.

- Any attached Joint 2Ds are simulated and constrain the attached Rigidbody 2D.

- All internal physics objects for Rigidbody 2D, Collider 2D, and Joint 2D stay in memory.

When you disable the Simulated property, the following occurs:

- The Rigidbody 2D isn’t moved by the simulation (gravity and physics forces aren’t applied).

- The Rigidbody 2D doesn’t create new contacts, and any attached Collider 2D contacts are destroyed.

- Any attached Joint 2Ds aren’t simulated, and don’t constrain any attached Rigidbody 2Ds.

- All internal physics objects for Rigidbody 2D, Collider 2D, and Joint 2D remain in memory.

## Improve efficiency with the Simulated property

You can stop and start individual elements of the 2D physics simulation by enabling and disabling physics related components individually on both Collider 2D and Joint 2D components. However, enabling and disabling individual elements of the physics simulations means internal **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../../class-GameObject.html)
See in [Glossary](../../Glossary.html#GameObject) and physics-based components are constantly created and destroyed, which can cost high memory usage and processor power. Therefore, it’s more efficient to disable the physics simulation entirely rather than disabling the individual components.

**Note**: When you disable a Rigidbody 2D’s Simulated option, any attached Collider 2D is effectively ‘invisible’ and can’t be detected by any physics queries, such as with `Physics.Raycast`.

Static Body Type reference

Collider 2D
