This version of Unity is unsupported.

Target Joint 2D fundamentals

Wheel Joint 2D

# Target Joint 2D

This **joint**A physics component allowing a dynamic connection between Rigidbody components, usually allowing some degree of movement such as a hinge. [More info](../../Joints.html)
See in [Glossary](../../Glossary.html#joint) connects to a specified target, rather than another **Rigidbody**A component that allows a GameObject to be affected by simulated gravity and other forces. [More info](../../class-Rigidbody.html)
See in [Glossary](../../Glossary.html#Rigidbody) object as other joints do. This behaves in a similar way to a spring type joint.

## Properties

| Property | Function |
| --- | --- |
| Anchor | Define where (in terms of x, y-coordinates on the Rigidbody 2D) the end point of the joint connects to this GameObjectThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary. |
| Target | Define where (in terms of x, y-coordinates in world space) the other end of the joint attempts to move. |
| Auto Configure Target | Enable this property to automatically set the other end of the joint to the current position of the GameObject. Note: When this option is enabled, the target changes as you move the GameObject but the target will not change if the option is not enabled. |
| Max Force | Set the force that the joint can apply when attempting to move the object to the target positionA joint property to set the target position that the joint’s drive force should move it to. More infoSee in Glossary. The higher the value, the higher the maximum force. |
| Damping RatioA joint setting to control spring oscillation. A higher damping ratio means the spring will come to rest faster. More infoSee in Glossary | Set the degree to suppress spring oscillation. In the range 0 to 1, the higher the value, the less movement. |
| Frequency | Set the frequency at which the spring oscillates while the GameObjects are approaching the separation distance you want (measured in cycles per second). In the range 0 to 1,000,000 - the higher the value, the stiffer the spring. Note: Setting Frequency to zero will create the stiffest spring type joint possible. |
| Break Action | Set the action taken when either the force or torque threshold is exceeded. |
| Break Force | Set the force threshold which if exceeded, will cause the joint to perform the selected Break Action. The default value is set to Infinity, which can never be exceeded and therefore the Break Action can never be taken while the threshold remains at this value. |

Target Joint 2D fundamentals

Wheel Joint 2D
