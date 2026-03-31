This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).DrawMeshInstancedProcedural




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

public void DrawMeshInstancedProcedural([Mesh](Mesh.html) mesh,
int submeshIndex,
[Material](Material.html) material,
int shaderPass,
int count,
[MaterialPropertyBlock](MaterialPropertyBlock.html) properties);






### Parameters



| Parameter | Description |
| --- | --- |
| mesh | The Mesh to draw. |
| submeshIndex | Which subset of the mesh to draw. This only applies to meshes that are composed of several materials. |
| material | Material to use. |
| shaderPass | Which pass of the shader to use, or -1 which renders all passes. |
| count | The number of instances to be drawn. |
| properties | Additional Material properties to apply onto the Material just before this Mesh is drawn. See MaterialPropertyBlock. |





### Description



Add a "draw mesh with instancing" command.

Draw a mesh using Procedural Instancing. This is similar to [Graphics.DrawMeshInstancedIndirect](Graphics.DrawMeshInstancedIndirect.html), except that when the instance count is known from script, it can be supplied directly using this method, rather than via a ComputeBuffer.
If [Material.enableInstancing](Material-enableInstancing.html) is false, the command logs an error and skips rendering each time the command is executed; the command does not immediately fail and throw an exception.

InvalidOperationException will be thrown if the current platform doesn't support this API (for example, if GPU instancing is not available). See [SystemInfo.supportsInstancing](SystemInfo-supportsInstancing.html).





Additional resources: [DrawMesh](Rendering.CommandBuffer.DrawMesh.html), [Graphics.DrawMeshInstancedProcedural](Graphics.DrawMeshInstancedProcedural.html), [MaterialPropertyBlock](MaterialPropertyBlock.html).


            
