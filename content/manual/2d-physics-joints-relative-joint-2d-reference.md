This version of Unity is unsupported.

Relative Joint 2D fundamentals

Slider Joint 2D

# Relative Joint 2D component reference

The **Relative **Joint**A physics component allowing a dynamic connection between Rigidbody components, usually allowing some degree of movement such as a hinge. [More info](../../Joints.html)
See in [Glossary](../../Glossary.html#joint) 2D** connects two **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../../class-GameObject.html)
See in [Glossary](../../Glossary.html#GameObject) controlled by **Rigidbody**A component that allows a GameObject to be affected by simulated gravity and other forces. [More info](../../class-Rigidbody.html)
See in [Glossary](../../Glossary.html#Rigidbody) physics to maintain in a position based on each other’s location. Use this joint to keep two objects offset from each other, at a position and angle you decide.

## Properties

| Property | Function |
| --- | --- |
| Enable CollisionA collision occurs when the physics engine detects that the colliders of two GameObjects make contact or overlap, when at least one has a Rigidbody component and is in motion. More infoSee in Glossary | Enable this property to enable collisions between the two connected GameObjects. |
| Connected Rigid Body | Specify the other object this joint connects to. Leave this as None to have the other end of the joint fixed at a point in space defined by the Connected Anchor property. Select the circle icon to the right to view a list of GameObjects to connect to. |
| Max Force | Set the linear (or straight line) movement between joined GameObjects. A high value (up to 1,000) uses high force to maintain the offset. |
| Max Torque | Set the angular (or rotation) movement between joined GameObjects. A high value (up to 1000) uses high force to maintain the offset. |
| Correction Scale | Tweak the joint to correct its behavior if required. Increasing the Max Force or Max Torque may affect the joint’s behavior such that the joint doesn’t reach its target, requiring you to correct it by adjusting this setting. The default setting is 0.3. |
| Auto Configure Offset | Enable this property to automatically set and maintain the distance and angle between the connected objects. You do not need to manually enter the Linear Offset and Angular Offset when you enable this property. |
| Linear Offset | Enter local space coordinates to specify and maintain the distance between the connected objects. |
| Angular Offset | Enter local space coordinates to specify and maintain the angle between the connected objects. |
| Break Action | Set the action taken when either the force or torque threshold is exceeded. |
| Break Force | Set the force threshold which if exceeded, will cause the joint to perform the selected Break Action. The default value is set to Infinity, which can never be exceeded and therefore the Break Action can never be taken while the threshold remains at this value. |
| Break Torque | Set the torque threshold which if exceeded, will cause the joint to perform the selected Break Action. The default value is set to Infinity, which can never be exceeded and therefore the Break Action can never be taken while the threshold remains at this value. |

RelativeJoint2D

Relative Joint 2D fundamentals

Slider Joint 2D
