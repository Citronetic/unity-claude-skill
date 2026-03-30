This version of Unity is unsupported.

Friction Joint 2D fundamentals

Hinge Joint 2D

# Friction Joint 2D component reference

The **Friction **Joint**A physics component allowing a dynamic connection between Rigidbody components, usually allowing some degree of movement such as a hinge. [More info](../../Joints.html)
See in [Glossary](../../Glossary.html#joint) 2D** connects **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../../class-GameObject.html)
See in [Glossary](../../Glossary.html#GameObject) controlled by **Rigidbody**A component that allows a GameObject to be affected by simulated gravity and other forces. [More info](../../class-Rigidbody.html)
See in [Glossary](../../Glossary.html#Rigidbody) 2D physics. The Friction Joint 2D reduces both the linear and angular velocities between the objects to zero (ie, it slows them down).

## Properties

| Property | Function |
| --- | --- |
| Enable CollisionA collision occurs when the physics engine detects that the colliders of two GameObjects make contact or overlap, when at least one has a Rigidbody component and is in motion. More infoSee in Glossary | Enable this property to enable collisions between the two connected GameObjects. |
| Connected Rigid Body | Specify the other object this joint connects to. Leave this as None to have the other end of the joint fixed at a point in space defined by the Connected Anchor property. Select the circle icon to the right to view a list of GameObjects to connect to. |
| Auto Configure Connected Anchor | Enable this property to automatically set the anchor location for the other object this joint connects to. You do not need to enter coordinates for the Connected Anchor property if you enable this property. |
| Anchor | Define where (in terms of x, y-coordinates on the Rigidbody 2D) the end point of the joint connects to this GameObject. |
| Connected Anchor | Define where (in terms of x, y-coordinates on the Rigidbody 2D) the end point of the joint connects to the other GameObject. |
| Max Force | Set the linear (or straight line) movement between joined GameObjects. A high value resists the linear movement between GameObjects. |
| Max Torque | Set the angular (or rotation) movement between joined GameObjects. A high value resists the rotation movement between GameObjects. |
| Break Action | Set the action taken when either the force or torque threshold is exceeded. |
| Break Force | Set the force threshold which if exceeded, will cause the joint to perform the selected Break Action. The default value is set to Infinity, which can never be exceeded and therefore the Break Action can never be taken while the threshold remains at this value. |
| Break Torque | Set the torque threshold which if exceeded, will cause the joint to perform the selected Break Action. The default value is set to Infinity, which can never be exceeded and therefore the Break Action can never be taken while the threshold remains at this value. |

FrictionJoint2D

Friction Joint 2D fundamentals

Hinge Joint 2D
