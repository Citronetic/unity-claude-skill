This version of Unity is unsupported.



# [BatchCullingOutputDrawCommands](Rendering.BatchCullingOutputDrawCommands.html).drawCommandPickingInstanceIDs




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












                    public int* drawCommandPickingInstanceIDs;






### Description



The instance IDs that are associated with the draw commands.





Unity only uses this command when it renders object-picking or selection data in the Editor, which is when [BatchCullingContext.viewType](Rendering.BatchCullingContext-viewType.html) is equal to [BatchCullingViewType.Picking](Rendering.BatchCullingViewType.Picking.html) or [BatchCullingViewType.SelectionOutline](Rendering.BatchCullingViewType.SelectionOutline.html). Otherwise, Unity ignores this value and you can leave it set to `null`.

Each element in this array corresponds to a draw command in one of the various draw command arrays. The arrays are considered in the following order, which is the same order as they are defined in the struct:



          1. The first [BatchCullingOutputDrawCommands.drawCommandCount](Rendering.BatchCullingOutputDrawCommands-drawCommandCount.html) elements correspond to the draw commands in [BatchCullingOutputDrawCommands.drawCommands](Rendering.BatchCullingOutputDrawCommands-drawCommands.html).

          2. The next [BatchCullingOutputDrawCommands.indirectDrawCommandCount](Rendering.BatchCullingOutputDrawCommands-indirectDrawCommandCount.html) elements correspond to the draw commands in [BatchCullingOutputDrawCommands.indirectDrawCommands](Rendering.BatchCullingOutputDrawCommands-indirectDrawCommands.html).

          3. The next [BatchCullingOutputDrawCommands.proceduralDrawCommandCount](Rendering.BatchCullingOutputDrawCommands-proceduralDrawCommandCount.html) elements correspond to the draw commands in [BatchCullingOutputDrawCommands.proceduralDrawCommands](Rendering.BatchCullingOutputDrawCommands-proceduralDrawCommands.html).

          4. The last [BatchCullingOutputDrawCommands.proceduralIndirectDrawCommandCount](Rendering.BatchCullingOutputDrawCommands-proceduralIndirectDrawCommandCount.html) elements correspond to the draw commands in [BatchCullingOutputDrawCommands.proceduralIndirectDrawCommands](Rendering.BatchCullingOutputDrawCommands-proceduralIndirectDrawCommands.html).





The size of this array should be equal to the sum of [BatchCullingOutputDrawCommands.drawCommandCount](Rendering.BatchCullingOutputDrawCommands-drawCommandCount.html), [BatchCullingOutputDrawCommands.indirectDrawCommandCount](Rendering.BatchCullingOutputDrawCommands-indirectDrawCommandCount.html), [BatchCullingOutputDrawCommands.proceduralDrawCommandCount](Rendering.BatchCullingOutputDrawCommands-proceduralDrawCommandCount.html), and [BatchCullingOutputDrawCommands.proceduralIndirectDrawCommandCount](Rendering.BatchCullingOutputDrawCommands-proceduralIndirectDrawCommandCount.html).

See Also: [BatchRendererGroup.SetPickingMaterial](Rendering.BatchRendererGroup.SetPickingMaterial.html).


            
