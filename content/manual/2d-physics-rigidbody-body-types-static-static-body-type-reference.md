This version of Unity is unsupported.

Static Body Type fundamentals

Rigidbody 2D Simulated property

# Static Body Type reference

Due to limited behavior, **Rigidbody**A component that allows a GameObject to be affected by simulated gravity and other forces. [More info](../../../../class-Rigidbody.html)
See in [Glossary](../../../../Glossary.html#Rigidbody) 2D with a Static **body type**Defines a fixed behavior for a 2D Rigidbody. Can be Dynamic (the body moves under simulation and is affected by forces like gravity), Kinematic (the body moves under simulation, but isn’t affected by forces like gravity) or Static (the body doesn’t move under simulation). [More info](../../../../2d-physics/rigidbody/introduction-to-rigidbody-2d.html)
See in [Glossary](../../../../Glossary.html#BodyType) only have a very limited set of properties are available for this **Body Type**.

## Static Rigidbody 2D properties

| Property | Function |
| --- | --- |
| Body Type | Select to set the movement behavior and ColliderAn invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. More infoSee in Glossary 2D interaction of this Rigidbody 2D’s component settings. |
| Dynamic | Select to set this Rigidbody 2D to the Dynamic Body Type, which is designed to move under simulation and has all Rigidbody 2D properties available. The is the default Body Type for a Rigidbody 2D. |
| Kinematic | Select to set this Rigidbody 2D to the Kinematic Body Type, which is designed to move under simulation but only under very explicit user control. Refer to Body Type: Kinematic for more information. |
| Static | Select to set this Rigidbody 2D to the Static Body Type, which is designed to not move under simulation at all and behaves like an immovable object with infinite mass. |
| Material | Set a common physics materialA physics asset for adjusting the friction and bouncing effects of colliding objects. More infoSee in Glossary for all Collider 2Ds attached to this Rigidbody 2D. Note: A Collider 2D uses its own Material property if it has one set. If there is no Material specified here or in the Collider 2D, the default option is None (Physics Material 2D). This uses a default Material which you can set in the Physics 2D window.  Note: Use this to ensure that all Collider 2Ds attached to the same Static Body Type Rigidbody 2D can all use the same Material. |
| Simulated | Enable Simulated to have the Rigidbody 2D and any attached Collider 2Ds and JointA physics component allowing a dynamic connection between Rigidbody components, usually allowing some degree of movement such as a hinge. More infoSee in Glossary 2Ds to interact with the physics simulation during runtime. If this is disabled, these components do not interact with the simulation. Refer to Rigidbody 2D properties: Simulated for more information. This property is enabled by default. |
| Layer Overrides | Expand for the Layer override settings. |
| Include Layers | Select the additional Layers that all Collider 2Ds attached to this Rigidbody 2D should include, when deciding if a collisionA collision occurs when the physics engine detects that the colliders of two GameObjects make contact or overlap, when at least one has a Rigidbody component and is in motion. More infoSee in Glossary with another Collider2D should occur or not. Refer to Rigidbody2D-includeLayers for more information. |
| Exclude Layers | Select the additional Layers that all Collider 2Ds attached to this Rigidbody 2D should exclude, when deciding if a collision with another Collider 2D should occur or not. Refer to Rigidbody2D-excludeLayers for more information. |

Static Body Type fundamentals

Rigidbody 2D Simulated property
