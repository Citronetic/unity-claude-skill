This version of Unity is unsupported.

Tilemap Renderer component reference

Troubleshoot mismatched Cell Layouts

# Tilemap Collider 2D component reference

The **Tilemap **Collider**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](../../CollidersOverview.html)
See in [Glossary](../../Glossary.html#Collider) 2D** component generates collider shapes for [tiles](../tiles-for-tilemaps/tile-asset-reference.html)A simple class that allows a sprite to be rendered on a Tilemap. [More info](../../tilemaps/tiles-for-tilemaps/scriptable-tiles/scriptable-tiles-landing.html)
See in [Glossary](../../Glossary.html#Tile) on a [Tilemap](./tilemap-reference.html)A GameObject that allows you to quickly create 2D levels using tiles and a grid overlay. [More info](../../tilemaps/work-with-tilemaps/tilemap-reference.html)
See in [Glossary](../../Glossary.html#Tilemap). You control this collider generation process with the properties found in the component.

## Properties

| Property | Description |
| --- | --- |
| Max Tile Change Count | Set the maximum number of tile changes (such as adding/removing tiles to the tilemap) to accumulate before doing a full collider rebuild instead of an incremental rebuild.Note: A high number of accumulated changes can cause the incremental rebuild of the Tilemap Collider 2D to be slower than a full rebuild. Decrease this value to resolve this issue. |
| Extrusion Factor | Set the amount (in Unity world space units) to extrude the collider shape of each tile. This minimizes the gaps between the collider shapes of neighboring tiles and brings them to within the minimum Vertex Distance set in the Composite Collider 2D component., which can then compose the tile colliders together. Note: This property isn’t available by default. It becomes available when you select a Composite Operation and attach a Composite Collider 2D to the same GameObject. |
| Material | Select the Physics Material 2DUse this to adjust the friction and bounce that occurs between 2D physics objects when they collide More infoSee in Glossary that determines properties of collisionsA collision occurs when the physics engine detects that the colliders of two GameObjects make contact or overlap, when at least one has a Rigidbody component and is in motion. More infoSee in Glossary, such as friction and bounce. |
| Is Trigger | Enable this if you want this Collider 2D to behave as a trigger. The physics system ignores this collider when this is enabled. |
| Used by Effector | Enable this if you want the Collider 2D to be used by an attached Effector 2D. |
| Composite Operations | Select the composite operation used by an attached Composite Collider 2D component.Note: When you select any operation besides None, the following properties—Material, Is Trigger, Used By Effector, and Edge Radius—become controlled by the attached Composite Collider 2D component and are no longer available in this collider’s properties. |
| None | Select this to have no composite operation take place. |
| Merge | Select this to have this composite operation compose geometry using a Boolean OR operation. |
| Intersect | Select this to have this composite operation compose geometry using a Boolean AND operation. |
| Difference | Select this to have this composite operation compose geometry using a Boolean NOT operation. |
| Flip | Select this to have this composite operation compose geometry using a Boolean XOR operation. |
| Offset | Set the local offset values of the Collider 2D geometry. |
| Layer Overrides | Expand for the Layer override settings. |
| Layer Override Priority | Assign the decision priority that this Collider2D uses when resolving conflicting decisions on whether a contact between itself and another Collision2D should happen or not. Refer to its API page for more information. |
| Include Layers | Select the additional Layers that this Collider 2D should include when deciding if a contact with another Collider2D should happen or not. Refer to its API documentation for more information. |
| Exclude Layers | Select the additional Layers that this Collider 2D should exclude when deciding if a contact with another Collider2D should happen or not. Refer to its API documentation for more information. |
| Force Send Layers | Select the Layers that this Collider 2D is allowed to send forces to during a Collision contact with another Collider2D. Refer to its API documentation for more information. |
| Force Receive Layers | Select the Layers that this Collider 2D can receive forces from during a Collision contact with another Collider2D. Refer to its API documentation for more information. |
| Contract Capture Layers | Select the Layers of other Collider 2D, involved in contacts with this Collider2D, that will be captured. Refer to its API documentation for more information. |
| Callback Layers | Select the Layers that this Collider 2D, during a contact with another Collider2D, will report collision or trigger callbacks for. Refer to its API documentation for more information. |

## Additional resources

- [Physics 2D Reference](../../2d-physics/2d-physics.html)

- [Collider 2D](../../2d-physics/collider/collider-2d-landing.html)

- [Composite Collider 2D](../../2d-physics/collider/composite-collider/composite-collider-2d-reference.html)

---

- New properties added in Unity 2020.1

- Tilemaps added in [2017.2](https://docs.unity3d.com/2017.2/Documentation/Manual/30_search.html?q=newin20172) NewIn20172
TilemapCollider2D

Tilemap Renderer component reference

Troubleshoot mismatched Cell Layouts
