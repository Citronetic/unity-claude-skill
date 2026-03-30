This version of Unity is unsupported.

Character Joint component reference

Hinge Joint component reference

# Fixed Joint component reference

[Switch to Scripting](../ScriptReference/FixedJoint.html)

**Fixed **Joints**A physics component allowing a dynamic connection between Rigidbody components, usually allowing some degree of movement such as a hinge. [More info](Joints.html)
See in [Glossary](Glossary.html#joint)** restricts an object so that its movement is dependent upon another object’s movement. This is similar to **Parenting**, but is implemented through physics rather than the **Transform** hierarchy. They are useful if you want to connect two objects’ movement without parenting, or if you have objects that you want to easily break apart from each other.

Fixed Joints can be useful because you do not need to script a change in your Hierarchy to achieve the desired effect. The trade-off is that you must use ****Rigidbodies**A component that allows a GameObject to be affected by simulated gravity and other forces. [More info](class-Rigidbody.html)
See in [Glossary](Glossary.html#Rigidbody)** for any objects that use a **Fixed Joint**.

## Properties

| Property | Function |
| --- | --- |
| Connected Body | Optional reference to the Rigidbody that the joint is dependent upon. If not set, the joint connects to the world. |
| Connected Articulation Body | Optional reference to the ArticulationBody that the joint is dependent upon. If not set, the joint connects to the world. |
| Break Force | The amount of applied force that causes this joint to break. |
| Break Torque | The amount of applied torque that causes this joint to break. |
| Enable CollisionA collision occurs when the physics engine detects that the colliders of two GameObjects make contact or overlap, when at least one has a Rigidbody component and is in motion. More infoSee in Glossary | When checked, this property enables collisions between physics bodies that are connected with the joint. |
| Enable Preprocessing | Disabling preprocessing helps to stabilize configurations that are otherwise impossible. |
| Mass Scale | The scale to apply to the inverted mass and inertia tensor of the Rigidbody, ranging from 0.00001 to infinity. This is useful when the joint connects two Rigidbodies of largely varying mass. The physics solver produces better results when the connected Rigidbodies have a similar mass. When your connected Rigidbodies vary in mass, use this property with the Connect Mass Scale property to apply fake masses to make them roughly equal to each other. This produces a high-quality and stable simulation, but reduces the physical behaviour of the Rigidbodies. |
| Connected Mass Scale | The scale to apply to the inverted mass and inertia tensor of the connected Rigidbody, ranging from 0.00001 to infinity. |

FixedJoint

Character Joint component reference

Hinge Joint component reference
