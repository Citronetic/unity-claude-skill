This version of Unity is unsupported.



# BatchDrawCommandProcedural





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



Represents a procedural draw command for a [BatchRendererGroup](Rendering.BatchRendererGroup.html).





This type of draw command has a reference to a material, but all vertex data is fetched procedurally by the shader.





### Properties



| Property | Description |
| --- | --- |
| baseVertex | Base vertex |
| batchID | The batch ID that this draw command uses. Determines the metadata values that are available to a shader. |
| elementCount | Number of elements (indices or vertices) to draw |
| flags | Specifies rendering options for the draw command. |
| indexBufferHandle | Handle of an index buffer to use for indexed drawing. |
| indexOffsetBytes | Offset into the index buffer where indices will be read from, when issuing indexed draws. |
| lightmapIndex | The index of the baked lightmap used in this draw command. If lightmap texture arrays are enabled, this value is always -1 (0xFFFF). |
| materialID | Identifies which Material to use to render the instances in this draw command. |
| sortingPosition | Together with BatchDrawCommand.flags, this specifies how to depth sort the instances in this draw command. |
| splitVisibilityMask | Indicates which splits that the draw command is visible in. |
| topology | The primitive topology to use when executing the draw command. |
| visibleCount | The number of instances to draw with this draw command. This must be a value greater than 1. |
| visibleOffset | The index of the element in BatchCullingOutputDrawCommands.visibleInstances that matches the first instance in this draw command. |


            
