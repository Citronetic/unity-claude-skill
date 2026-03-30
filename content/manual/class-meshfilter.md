This version of Unity is unsupported.

Skinned Mesh Renderer component reference

Mesh asset Inspector window reference

# Mesh Filter component reference

[Switch to Scripting](../ScriptReference/MeshFilter.html)

A **Mesh Filter** component holds a reference to a mesh. It works with a [Mesh Renderer](https://docs.unity3d.com/Manual/class-MeshRenderer.html)A mesh component that takes the geometry from the Mesh Filter and renders it at the position defined by the object’s Transform component. [More info](class-MeshRenderer.html)
See in [Glossary](Glossary.html#MeshRenderer) component on the same **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject); the Mesh Renderer renders the mesh that the Mesh Filter references.

To render a deformable mesh, use a [Skinned Mesh Renderer](https://docs.unity3d.com/Manual/class-SkinnedMeshRenderer.html) instead. A Skinned Mesh Renderer component does not need a Mesh Filter component.

## Mesh Filter Inspector reference

| Property | Function |
| --- | --- |
| MeshThe main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. More infoSee in Glossary | A reference to a mesh asset.To change the mesh asset that the Mesh Filter component references, use the picker (circle icon) next to the mesh’s name.Note: The settings for other components on this GameObject don’t change when you change the mesh that the Mesh Filter references. For example, a Mesh Renderer doesn’t update its settings, which might cause Unity to render the mesh with unexpected properties. If this happens, adjust the settings of the other components as needed.Corresponds to the MeshFilter.mesh property. |

MeshFilter

Skinned Mesh Renderer component reference

Mesh asset Inspector window reference
