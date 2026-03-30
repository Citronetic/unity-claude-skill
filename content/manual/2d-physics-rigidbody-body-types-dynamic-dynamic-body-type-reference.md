This version of Unity is unsupported.

Dynamic Body Type fundamentals

Kinematic Body Type

# Dynamic Body Type

The Dynamic **Body Type**Defines a fixed behavior for a 2D Rigidbody. Can be Dynamic (the body moves under simulation and is affected by forces like gravity), Kinematic (the body moves under simulation, but isn’t affected by forces like gravity) or Static (the body doesn’t move under simulation). [More info](../../../../2d-physics/rigidbody/introduction-to-rigidbody-2d.html)
See in [Glossary](../../../../Glossary.html#BodyType) is the most common body type for **Rigidbody**A component that allows a GameObject to be affected by simulated gravity and other forces. [More info](../../../../class-Rigidbody.html)
See in [Glossary](../../../../Glossary.html#Rigidbody) 2D.

## Dynamic Rigidbody 2D properties

| Property | Function |
| --- | --- |
| Body Type | Select to set the movement behavior and ColliderAn invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. More infoSee in Glossary 2D interaction of this Rigidbody 2D’s component settings. |
| Dynamic | Select to set this Rigidbody 2D to the Dynamic Body Type, which is designed to move under simulation and has all Rigidbody 2D properties available. The is the default Body Type for a Rigidbody 2D. |
| Kinematic | Select to set this Rigidbody 2D to the Kinematic Body Type, which is designed to move under simulation but only under very explicit user control. Refer to Body Type: Kinematic for more information. |
| Static | Select to set this Rigidbody 2D to the Static Body Type, which is designed to not move under simulation at all and behaves like an immovable object with infinite mass. Refer to Body Type: Static for more information. |
| Material | Set a common physics materialA physics asset for adjusting the friction and bouncing effects of colliding objects. More infoSee in Glossary for all Collider 2Ds attached to this Rigidbody 2D. Note: A Collider 2D uses its own Material property if it has one set. If there is no Material specified here or in the Collider 2D, the default option is None (Physics Material 2D). This uses a default Material which you can set in the Physics 2D window. |
| Simulated | Enable Simulated to have the Rigidbody 2D and any attached Collider 2Ds and JointA physics component allowing a dynamic connection between Rigidbody components, usually allowing some degree of movement such as a hinge. More infoSee in Glossary 2Ds to interact with the physics simulation during runtime. If this is disabled, these components do not interact with the simulation. Refer to Rigidbody 2D properties: Simulated for more information. This property is enabled by default. |
| Use Auto Mass | Enable this property to have the Rigidbody 2D automatically detect the GameObjectThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary’s mass from its Collider 2D. |
| Mass | Define the mass of the Rigidbody 2D. This is grayed out if you have enabled Use Auto Mass. |
| Linear Damping | Set the drag coefficient affecting positional movement. |
| Angular Damping | Set the drag coefficient affecting rotational movement. |
| Gravity Scale | Define the degree to which the GameObject is affected by gravity. |
| CollisionA collision occurs when the physics engine detects that the colliders of two GameObjects make contact or overlap, when at least one has a Rigidbody component and is in motion. More infoSee in Glossary Detection | Define how collisions between Collider 2Ds are detected. |
| Discrete | Select this option to allow GameObjects with Rigidbody 2Ds and Collider 2Ds to overlap or pass through each other during a physics update, if they are moving fast enough. Collision contacts are only generated at the new position. |
| Continuous | Select this option to ensure GameObjects with Rigidbody 2Ds and Collider 2Ds do not pass through each other during a physics update. Instead, Unity calculates the first impact point of any of the Collider 2Ds, and moves the GameObject there. Note: This option takes more CPU time than Discrete. |
| Sleeping Mode | Define how the GameObject “sleeps” to save processor time when it is at rest. |
| Never Sleep | Select this option to have sleeping disabled. Important: This should be avoided where possible, as it can impact system resources. |
| Start Awake | Select this to have the GameObject initially awake. |
| Start Asleep | Select this to have the GameObject initially asleep but can be awaken by collisions. |
| Interpolate | Define how the GameObject’s movement is interpolated between physics updates. Tip: This is useful when motion tends to be jerky. |
| None | Select this to not apply movement smoothing. |
| Interpolate | Select this to smooth movement based on the GameObject’s positions in previous frames. |
| Extrapolate | Select this to smooth movement based on an estimate of the GameObject’s position in the next frame. |
| Constraints | Define any restrictions on the Rigidbody 2D’s motion. |
| Freeze Position | Stops the Rigidbody 2D moving in the X and Y world axes selectively. |
| Freeze Rotation | Stops the Rigidbody 2D rotating around the Z world axis selectively. |
| Layer Overrides | Expand for the Layer override settings. |
| Include Layers | Select the additional Layers that all Collider 2Ds attached to this Rigidbody 2D should include, when deciding if a collision with another Collider2D should occur or not. Refer to Rigidbody2D-includeLayers for more information. |
| Exclude Layers | Select the additional Layers that all Collider 2Ds attached to this Rigidbody 2D should exclude, when deciding if a collision with another Collider 2D should occur or not. Refer to Rigidbody2D-excludeLayers for more information. |

**Note**: Do not use the **Transform component**A Transform component determines the Position, Rotation, and Scale of each object in the scene. Every GameObject has a Transform. [More info](../../../../class-Transform.html)
See in [Glossary](../../../../Glossary.html#TransformComponent) to set the position or rotation of a **Dynamic** Rigidbody 2D. The simulation repositions a **Dynamic** Rigidbody 2D according to its velocity; you can change this directly via forces applied to it by **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](../../../../creating-scripts.html)
See in [Glossary](../../../../Glossary.html#Scripts), or indirectly via collisions and gravity.

Dynamic Body Type fundamentals

Kinematic Body Type
