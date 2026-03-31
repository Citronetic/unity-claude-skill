This version of Unity is unsupported.



# BatchDrawCommandProceduralIndirect





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



Represents a procedural indirect draw command for a [BatchRendererGroup](Rendering.BatchRendererGroup.html).





This type of draw command has a reference to a material, but all vertex data is fetched procedurally by the shader.
                The actual draw data to be used is passed by the GPU in the buffer set up as the indirectArgsBufferHandle.





### Properties



| Property | Description |
| --- | --- |
| batchID | The batch ID that this draw command uses. Determines the metadata values that are available to a shader. |
| flags | Specifies rendering options for the draw command. |
| indexBufferHandle | Handle of an index buffer to use for indexed drawing. |
| indirectArgsBufferHandle | GraphicsBufferHandle of the GraphicsBuffer from which the indirect draw command will be read. |
| indirectArgsBufferOffset | Offset in bytes from which the indirect draw command will be read. |
| lightmapIndex | The index of the baked lightmap used in this draw command. If lightmap texture arrays are enabled, this value is always -1 (0xFFFF). |
| materialID | Identifies which Material to use to render the instances in this draw command. |
| sortingPosition | Together with BatchDrawCommand.flags, this specifies how to depth sort the instances in this draw command. |
| splitVisibilityMask | Indicates which splits that the draw command is visible in. |
| topology | The primitive topology to use when executing the draw command. |
| visibleInstancesBufferHandle | Handle of the GraphicsBuffer from which the draw command will read visible instance index. |
| visibleInstancesBufferWindowOffset | Offset of the visible instances buffer that will be bound as element zero. |
| visibleInstancesBufferWindowSizeBytes | Amount of data in the buffer to be bound, starting from the visibleInstancesBufferWindowOffset value. |
| visibleOffset | The index of the element in BatchCullingOutputDrawCommands.visibleInstances that matches the first instance in this draw command. |


            
