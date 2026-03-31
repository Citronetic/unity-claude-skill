This version of Unity is unsupported.



# BatchDrawCommand





struct in
          UnityEngine.Rendering



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



















### Description



The Rendering.BatchDrawCommand struct defines instructions for drawing multiple objects in a single instanced draw call. It specifies parameters like meshes, materials, transforms, and shader properties for rendering.





The Rendering.BatchDrawCommand struct helps render large numbers of similar objects by reducing the overhead of individual draw calls.

Use it for custom rendering workflows, especially with BatchRendererGroup, where manual control over GPU draw calls is required. It's common in advanced rendering scenarios, like custom culling or procedural object batches.

Set up a BatchDrawCommand with required properties (mesh, material, transforms) and pass it to BatchRendererGroup.

Additional resources: [BatchRendererGroup](Rendering.BatchRendererGroup.html).





### Properties



| Property | Description |
| --- | --- |
| activeMeshLod | Currently active Mesh LOD. |
| batchID | The batch ID that this draw command uses. Determines the metadata values that are available to a shader. |
| flags | Specifies rendering options for the draw command. |
| lightmapIndex | The index of the baked lightmap used in this draw command. If BatchDrawCommandFlags.UseLegacyLightmapsKeyword is not set, this value is ignored. |
| materialID | Identifies which Material to use to render the instances in this draw command. |
| meshID | Identifies which Mesh to use to render the instances in this draw command. |
| sortingPosition | Together with BatchDrawCommand.flags, this specifies how to depth sort the instances in this draw command. |
| splitVisibilityMask | Indicates which splits that the draw command is visible in. |
| submeshIndex | Specifies which sub-mesh of the Mesh identified by BatchDrawCommand.meshID to use to render the instances in this draw command. |
| visibleCount | The number of instances to draw with this draw command. This must be a value greater than 1. |
| visibleOffset | The index of the element in BatchCullingOutputDrawCommands.visibleInstances that matches the first instance in this draw command. |


            
