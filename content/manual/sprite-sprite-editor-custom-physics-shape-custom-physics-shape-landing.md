This version of Unity is unsupported.

Custom outline editor reference

Use the Custom Physics Shape editor

# Custom physics shape

Use the [Sprite Editor’s](../sprite-editor-landing.html) Custom Physics Shape module to edit a **Sprite**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../../sprite/sprite-landing.html)
See in [Glossary](../../../Glossary.html#Sprite)’s Physics Shape, which defines the initial shape of the Sprite’s [Collider 2D](../../../2d-physics/collider/collider-2d-landing.html) **Mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](../../../mesh.html)
See in [Glossary](../../../Glossary.html#Mesh). You can further refine the Physics Shape through the **Collider**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](../../../CollidersOverview.html)
See in [Glossary](../../../Glossary.html#Collider)’s component settings.

| Topic | Description |
| --- | --- |
| Use the Custom Physics Shape editor | Have Unity automatically generate the shape, or manually create and edit it in the editor window. |
| Open the Custom Physics Shape editor | Open the Custom Physics Shape editor to edit shapes. |
| Generate the physics shape | Automatically generate a physics shape for a sprite and refine it. |
| Manually edit the physics shape | Manually draw and refine a rectangular outline. |
| Move a control point | Adjust the Mesh outline by dragging control points. |
| Add or remove control points | Manipulate points along the outline of a mesh to adjust the shape. |
| Move edges | Edit the shape of the mesh by moving the lines connecting its control points. |
| Work with multiple outlines | Create new rectangular outlines for specific collisionA collision occurs when the physics engine detects that the colliders of two GameObjects make contact or overlap, when at least one has a Rigidbody component and is in motion. More infoSee in Glossary areas. |
| Update the shape of the collider 2D meshes | Update the shape of the Collider 2D meshes if you have edited the outline of a Sprite used by existing GameObjectsThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary. |
| Custom Physics Shape editor reference | Define, copy, paste, and adjust physics shapes for sprites. |

Custom outline editor reference

Use the Custom Physics Shape editor
