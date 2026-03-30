This version of Unity is unsupported.

Spring Joint 2D fundamentals

Target Joint 2D

# Spring Joint 2D

The **Spring **Joint**A physics component allowing a dynamic connection between Rigidbody components, usually allowing some degree of movement such as a hinge. [More info](../../Joints.html)
See in [Glossary](../../Glossary.html#joint) 2D** component allows two **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../../class-GameObject.html)
See in [Glossary](../../Glossary.html#GameObject) controlled by **Rigidbody**A component that allows a GameObject to be affected by simulated gravity and other forces. [More info](../../class-Rigidbody.html)
See in [Glossary](../../Glossary.html#Rigidbody) physics to be attached together as if by a spring. The spring will apply a force along its axis between the two GameObjects, attempting to keep them a certain distance apart.

## Properties

| Property | Function |
| --- | --- |
| Enable CollisionA collision occurs when the physics engine detects that the colliders of two GameObjects make contact or overlap, when at least one has a Rigidbody component and is in motion. More infoSee in Glossary | Enable this property to enable collisions between the two connected GameObjects. |
| Connected Rigidbody | Specify the other object this joint connects to. Leave this as None to have the other end of the joint fixed at a point in space defined by the Connected Anchor property. Select the circle icon to the right to view a list of GameObjects to connect to. |
| Auto Configure Connected Anchor | Enable this property to automatically set the anchor location for the other object this joint connects to. You do not need to enter coordinates for the Connected Anchor property if you enable this property. |
| Anchor | Define where (in terms of x, y-coordinates on the Rigidbody 2D) the end point of the joint connects to the GameObject. |
| Connected Anchor | Define where (in terms of x, y-coordinates on the Rigidbody 2D) the end point of the joint connects to the other GameObject. |
| Auto Configure Distance | Enable this property to automatically detect the distance between the two GameObjects and set it as the distance that the joint keeps between the two GameObjects. |
| Distance | Set the distance that the spring should attempt to maintain between the two objects. (Can be set manually.) |
| Damping RatioA joint setting to control spring oscillation. A higher damping ratio means the spring will come to rest faster. More infoSee in Glossary | Set the degree to suppress spring oscillation. In the range 0 to 1, the higher the value, the less movement. |
| Frequency | Set the frequency at which the spring oscillates while the GameObjects are approaching the separation distance you want (measured in cycles per second). In the range 0 to 1,000,000 - the higher the value, the stiffer the spring. Note: Setting Frequency to zero will create the stiffest spring type joint possible. |
| Break Action | Set the action taken when either the force or torque threshold is exceeded. |
| Break Force | Set the force threshold which if exceeded, will cause the joint to perform the selected Break Action. The default value is set to Infinity, which can never be exceeded and therefore the Break Action can never be taken while the threshold remains at this value. |

SpringJoint2D

Spring Joint 2D fundamentals

Target Joint 2D
