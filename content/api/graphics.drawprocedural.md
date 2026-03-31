This version of Unity is unsupported.



# [Graphics](Graphics.html).DrawProcedural




                  Leave feedback




                  Suggest a change












## Success!



Thank you for helping us improve the quality of Unity Documentation. Although we cannot accept all submissions, we do read each suggested change from our users and will make updates where applicable.

                      Close




## Submission failed



For some reason your suggested change could not be submitted. Please <a>try again</a> in a few minutes. And thank you for taking the time to help us improve the quality of Unity Documentation.

                      Close


                      Your name


                      Your email


                      Suggestion*

                      Submit suggestion


Cancel















## Declaration

public static void DrawProcedural([Material](Material.html) material,
[Bounds](Bounds.html) bounds,
[MeshTopology](MeshTopology.html) topology,
int vertexCount,
int instanceCount,
[Camera](Camera.html) camera,
[MaterialPropertyBlock](MaterialPropertyBlock.html) properties,
[Rendering.ShadowCastingMode](Rendering.ShadowCastingMode.html) castShadows,
bool receiveShadows,
int layer);






### Parameters



| Parameter | Description |
| --- | --- |
| material | Material to use. |
| bounds | The bounding volume surrounding the instances you intend to draw. |
| topology | Topology of the procedural geometry. |
| vertexCount | Vertex count to render. |
| instanceCount | Instance count to render. |
| camera | If null (default), the mesh will be drawn in all cameras. Otherwise it will be rendered in the given Camera only. |
| properties | Additional material properties to apply onto material just before this mesh will be drawn. See MaterialPropertyBlock. |
| castShadows | Determines whether the mesh can cast shadows. |
| receiveShadows | Determines whether the mesh can receive shadows. |
| layer | Layer to use. |





### Description



This function is now obsolete. For non-indexed rendering, use [Graphics.RenderPrimitives](Graphics.RenderPrimitives.html) instead.
For indexed rendering, use [Graphics.RenderPrimitivesIndexed](Graphics.RenderPrimitivesIndexed.html). Draws procedural geometry on the GPU.





This function is now obsolete. For non-indexed rendering, use RenderPrimitives instead.
For indexed rendering, use [Graphics.RenderPrimitivesIndexed](Graphics.RenderPrimitivesIndexed.html).

DrawProcedural does a draw call on the GPU, without any vertex or index buffers. If the shader requires vertex buffers one of the following occurs depending on platform: If the vertex buffer is declared but compiler can optimize it away then the normal DrawProcedural call will occur. If the compiler is not able to optimize the vertex buffer declaration away then this will be converted into a normal mesh drawing call with emulated vertexbuffers injected. The latter option has performance overhead so it is recommended not to declare vertex inputs in shaders when using DrawProcedural.
This is mainly useful on [Shader Model 4.5](../Manual/SL-ShaderCompileTargets.html) level hardware where shaders can read arbitrary data from [ComputeBuffer](ComputeBuffer.html) buffers.

There's also similar functionality in CommandBuffers, see [CommandBuffer.DrawProcedural](Rendering.CommandBuffer.DrawProcedural.html).

For non-indexed rendering:
`public static void DrawProcedural(Material material, Bounds bounds, MeshTopology topology, int vertexCount, int instanceCount = 1, Camera camera = null, MaterialPropertyBlock properties = null, ShadowCastingMode castShadows = ShadowCastingMode.On, bool receiveShadows = true, int layer = 0)`

For indexed rendering (takes GraphicsBuffer indexBuffer):
`public static void DrawProcedural(Material material, Bounds bounds, MeshTopology topology, GraphicsBuffer indexBuffer, int indexCount, int instanceCount = 1, Camera camera = null, MaterialPropertyBlock properties = null, ShadowCastingMode castShadows = ShadowCastingMode.On, bool receiveShadows = true, int layer = 0)`

Additional resources: [Graphics.RenderPrimitives](Graphics.RenderPrimitives.html), [Graphics.RenderPrimitivesIndexed](Graphics.RenderPrimitivesIndexed.html), [Graphics.DrawProceduralIndirect](Graphics.DrawProceduralIndirect.html), [SystemInfo.supportsInstancing](SystemInfo-supportsInstancing.html).




---








## Declaration

public static void DrawProcedural([Material](Material.html) material,
[Bounds](Bounds.html) bounds,
[MeshTopology](MeshTopology.html) topology,
[GraphicsBuffer](GraphicsBuffer.html) indexBuffer,
int indexCount,
int instanceCount,
[Camera](Camera.html) camera,
[MaterialPropertyBlock](MaterialPropertyBlock.html) properties,
[Rendering.ShadowCastingMode](Rendering.ShadowCastingMode.html) castShadows,
bool receiveShadows,
int layer);






### Parameters



| Parameter | Description |
| --- | --- |
| material | Material to use. |
| bounds | The bounding volume surrounding the instances you intend to draw. |
| topology | Topology of the procedural geometry. |
| indexBuffer | Index buffer used to submit vertices to the GPU. |
| instanceCount | Instance count to render. |
| indexCount | Index count to render. |
| camera | If null (default), the mesh will be drawn in all cameras. Otherwise it will be rendered in the given Camera only. |
| properties | Additional material properties to apply onto material just before this mesh will be drawn. See MaterialPropertyBlock. |
| castShadows | Determines whether the mesh can cast shadows. |
| receiveShadows | Determines whether the mesh can receive shadows. |
| layer | Layer to use. |





### Description



Draws procedural geometry on the GPU, with an index buffer.





Use the [GraphicsBuffer.Target.Index](GraphicsBuffer.Target.Index.html) target flag to create an index buffer.


            
