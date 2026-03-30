This version of Unity is unsupported.

Mesh LOD

Generate LODs on import

# Introduction to Mesh LOD

Mesh **LOD**The *Level Of Detail* (LOD) technique is an optimization that reduces the number of triangles that Unity has to render for a GameObject when its distance from the Camera increases. [More info](../LevelOfDetail.html)
See in [Glossary](../Glossary.html#LOD) reduces the number of polygons Unity has to draw and provides automatic LOD creation.

Mesh LOD creates LODs automatically on model import and stores each LOD in the index buffer of the original **mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](../mesh.html)
See in [Glossary](../Glossary.html#Mesh). For more information about LOD generation, refer to the following pages:

- [Generate LODs on import](mesh-lod-generate-lods.html)

- [How the Mesh LOD generator works](mesh-lod-generator.html)

At runtime, the Mesh LOD feature selects the appropriate LOD automatically depending on the size of the mesh on the screen, project-wide and per-object Mesh LOD settings. For more information, refer to [Mesh LOD runtime quality](mesh-lod-quality.html).

When generating LODs automatically, Unity does not create new **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../class-GameObject.html)
See in [Glossary](../Glossary.html#GameObject) or components. This means that the Mesh LOD feature only optimizes the workload for rendering geometry, and does not provide options for configuring material or **Mesh Renderer**A mesh component that takes the geometry from the Mesh Filter and renders it at the position defined by the object’s Transform component. [More info](../class-MeshRenderer.html)
See in [Glossary](../Glossary.html#MeshRenderer) settings for less detailed LODs. Being focused on geometry optimization, the feature provides a [smaller memory footprint](mesh-lod-generator.html#mesh-lod-memory-footprint) compared with the LOD Group feature.

## Limitations of the Mesh LOD feature

The Mesh LOD feature has the following limitations:

- The following systems do not support Mesh LOD selection. These systems always select LOD0 with the Mesh LOD feature.

- Entities Graphics

- Particle System

- Visual Effect Graph

- [Static batching](../static-batching)A technique Unity uses to draw GameObjects on the screen that combines static (non-moving) GameObjects into big Meshes, and renders them in a faster way. [More info](../DrawCallBatching.html)
See in [Glossary](../Glossary.html#StaticBatching)

- [GPU instancing](../GPUInstancing.html)

- Mesh LOD supports the [LOD cross-fade](lod-transitions-mesh-lod.html) feature with the following limitations:

- [GPU Resident Drawer](../urp/gpu-resident-drawer.html) must be enabled in a project.

- Mesh LOD does not support [custom transition zones](lod-transitions-lod-group.html#width).

- When Mesh LOD generates LODs for models with a Skinned Mesh Renderer component, the generator does not take skin weights or blend shape deformations into account during the mesh simplification process. As a consequence, the LOD generator may remove indices that refer to vertices that are important for the intended mesh deformation. For more information, refer to [Skinned Mesh Renderer deformation artifacts](mesh-lod-troubleshooting.html#skinned-mesh-renderer-deformation-artifacts).

- Using Mesh LODs with Skinned Mesh Renderers does not reduce the workload related to calculating mesh deformations. When performing deformations, a Skinned Mesh Renderer deforms LOD0 regardless of which LOD index Unity is currently using for rendering a mesh.

- Mesh LOD only supports meshes with triangle topology.

- Unity doesn’t provide functionality to visualize which Mesh LOD index is being rendered.

- Using Mesh LOD in combination with LOD Group might lead to unexpected outcomes and is not recommended.

- The following APIs do not support automatic Mesh LOD selection and require explicitly specifying which LOD to draw. To specify an LOD in these methods, use the `forceMeshLod` property in the [RenderParams](../../ScriptReference/RenderParams.html) struct.

- [Graphics.RenderMeshInstanced](../../ScriptReference/Graphics.RenderMeshInstanced.html)

- [Graphics.RenderMeshIndirect](../../ScriptReference/Graphics.RenderMeshIndirect.html)

- [Graphics.RenderMeshPrimitives](../../ScriptReference/Graphics.RenderMeshPrimitives.html)

## Additional resources

- [Troubleshooting Mesh LOD visual artifacts](mesh-lod-troubleshooting.html)

- [Introduction to level of detail](../LevelOfDetail.html)

- [LOD Group](lod-group-landing.html)A component to manage level of detail (LOD) for GameObjects. [More info](../class-LODGroup.html)
See in [Glossary](../Glossary.html#LODGroup)

Mesh LOD

Generate LODs on import
