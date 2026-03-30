This version of Unity is unsupported.

Custom Collider 2D

Use a Custom Collider 2D

# Custom Collider 2D component reference

The Custom **Collider**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](../../../CollidersOverview.html)
See in [Glossary](../../../Glossary.html#Collider) 2D is a [Collider 2D](../collider-2d-landing.html) that interacts with the 2D physics system. Unlike other colliders, you don’t configure this collider in the Unity Editor, instead you configure the collider by assigning [PhysicsShape2D](../../../../ScriptReference/PhysicsShape2D.html) geometry to it via the [PhysicsShapeGroup2D](../../../../ScriptReference/PhysicsShapeGroup2D.html) API.

You can define the collider’s shape by adding, removing, and modifying the `PhysicsShape2D` shapes. Refer to the [PhysicsShape2D](../../../../ScriptReference/PhysicsShapeGroup2D.html) API documentation for more information. This also means that a Custom Collider 2D can contain an unlimited number of low-level `PhysicsShape2D` and form any shape, or emulate other types of Collider 2D.

| Property | Function |
| --- | --- |
| Material | Select the Physics Material 2DUse this to adjust the friction and bounce that occurs between 2D physics objects when they collide More infoSee in Glossary that determines properties of collisionsA collision occurs when the physics engine detects that the colliders of two GameObjects make contact or overlap, when at least one has a Rigidbody component and is in motion. More infoSee in Glossary, such as friction and bounce. |
| Is Trigger | Enable this if you want this Collider 2D to behave as a trigger. The physics system ignores this Collider when this is enabled. |
| Used by Effector | Enable this if you want the Collider 2D to be used by an attached Effector 2D. |
| Offset | Set the local offset values of the Collider 2D geometry. |
| Custom Shape Count (Read only) | Indicates how many PhysicsShape2D the Collider is using. |
| Custom Vertex Count (Read Only) | Indicates how many vertices all PhysicsShape2D in the Collider are using. |
| Layer Overrides | Expand for the Layer override settings. |
| Layer Override Priority | Assign the decision priority that this Collider2D uses when resolving conflicting decisions on whether a contact between itself and another Collision2D should happen or not. Refer to its API page for more information. |
| Include Layers | Select the additional Layers that this Collider 2D should include when deciding if a contact with another Collider2D should happen or not. Refer to its API documentation for more information. |
| Exclude Layers | Select the additional Layers that this Collider 2D should exclude when deciding if a contact with another Collider2D should happen or not. Refer to its API documentation for more information. |
| Force Send Layers | Select the Layers that this Collider 2D is allowed to send forces to during a Collision contact with another Collider2D. Refer to its API documentation for more information. |
| Force Receive Layers | Select the Layers that this Collider 2D can receive forces from during a Collision contact with another Collider2D. Refer to its API documentation for more information. |
| Contract Capture Layers | Select the Layers of other Collider 2D, involved in contacts with this Collider2D, that will be captured. Refer to its API documentation for more information. |
| Callback Layers | Select the Layers that this Collider 2D, during a contact with another Collider2D, will report collision or trigger callbacks for. Refer to its API documentation for more information. |

## Additional resources

- [Collider 2D API documentation](../../../../ScriptReference/Collider2D.html)

- [Rigidbody 2D](../../rigidbody/rigidbody-2d-landing.html)

CustomCollider2D

Custom Collider 2D

Use a Custom Collider 2D
