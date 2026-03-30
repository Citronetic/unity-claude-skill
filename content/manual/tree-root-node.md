This version of Unity is unsupported.

Tree Hierarchy view UI reference

Branch group reference

# Root node reference

The root node has properties that affect the entire tree, although you can override some properties at the branch or leaf group level.

## Distribution

| Property | Function |
| --- | --- |
| Tree Seed | The randomizing seed for the tree. Change the seed to vary the tree’s procedural generation. Note that the seed from the root nodeA transform in an animation hierarchy that allows Unity to establish consistency between Animation clips for a generic model. It also enables Unity to properly blend between Animations that have not been authored “in place” (that is, where the whole Model moves its world position while animating). More infoSee in Glossary changes the structure of the whole tree, including all branch groups, whereas seeds from a branch group change only that group. |
| Area Spread | The tree’s radius. This parameter has an effect only if your trunk branch group has a frequency of more than 1. It also impacts the spread of leaves if you attached a leaf group to the trunk. |
| Ground Offset | Lowers the tree relative to the Tree GameObjectThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary’s y-axis. In other words, the tree can extend below its GameObject. Use this to sink the tree partially into the ground, for example to partially cover its roots. |

## Geometry

| Property | Function |
| --- | --- |
| LODThe Level Of Detail (LOD) technique is an optimization that reduces the number of triangles that Unity has to render for a GameObject when its distance from the Camera increases. More infoSee in Glossary Quality | Default level of detail (LOD) for the entire tree. Note that you can change the value for specific branch groups. The higher the LOD, the more complex the tree and the higher its performance impact. The Hierarchy Stats field in the Tree hierarchy view shows the meshThe main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. More infoSee in Glossary’s complexity as a count of vertices and triangles. |
| Ambient OcclusionA method to approximate how much ambient light (light not coming from a specific direction) can hit a point on a surface.See in Glossary | Ambient occlusion makes a tree more realistic by creating soft shadows where the tree, branches, and leaves obscures some light. It’s enabled by default, but you can disable it to improve performance. |
| AO Density | Density of the ambient occlusion, from 0 to 1. The higher the density, the more detailed the shadows, but at the cost of increased memory use. |

## Material

| Property | Function |
| --- | --- |
| Translucency Color | A color multiplier to tint backlit leaves. It simulates the light coming through and creating a halo around the leaves. You might need to rotate your view around your tree to notice the impact, placing the tree between your view and the sceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary’s light source. |
| Trans. View Dep. | Translucency View Dependency. Determines how much the translucency depends on either the view angle or the leaf’s normal vector. When the value is 0, the translucency remains constant even if the cameraA component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. More infoSee in Glossary tilts up or down. If the value is 1, the translucency changes when the camera tilts. |
| Alpha Cutoff | Clips alpha values in the texture that are lower than this value. This creates a cutout in the texture. Note that the materials also have an Alpha Cutoff property, and you might need to adjust both cutoffs to get the desired appearance. |
| Shadow Strength | A shadow multiplier softening the leaves on shadows. Note that this softens all shadows, including those cast by large objects such as neighboring trees and mountains, and so can create shadows that appear too light for their surroundings. |
| Shadow Offset | Scales the values of the material’s Shadow Offset texture. This offsets the position of the leaves when collecting shadows, so that the leaves don’t look like they were placed on one quadA primitive object that resembles a plane but its edges are only one unit long, it uses only 4 vertices, and the surface is oriented in the XY plane of the local coordinate space. More infoSee in Glossary. BillboardA textured 2D object that rotates so that it always faces the Camera. More infoSee in Glossary leaves must always have brighter values in the center of the texture and darker ones at the border. |
| Shadow Caster Res. | The resolution of the texture atlas that has alpha values from source diffuse textures. The Unity Editor uses the atlas when rendering leaves that cast shadows. Higher resolutions can impact performance. |

## Additional resources

- [Mesh Renderer component](class-MeshRenderer.html)

- [Animate trees with Wind Zones](class-WindZone.html)

- [Create trees and leaves from meshes](terrain-Tree-From-Mesh.html)

Tree Hierarchy view UI reference

Branch group reference
