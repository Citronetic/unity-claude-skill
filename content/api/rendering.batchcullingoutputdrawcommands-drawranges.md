This version of Unity is unsupported.



# [BatchCullingOutputDrawCommands](Rendering.BatchCullingOutputDrawCommands.html).drawRanges




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












                    public BatchDrawRange* drawRanges;






### Description



Contains filtering settings for draw commands, which tell Unity in which conditions it should render a given draw command.





Each draw range covers a continuous range of draw commands in the [BatchCullingOutputDrawCommands.drawCommands](Rendering.BatchCullingOutputDrawCommands-drawCommands.html) array, and the settings in the [BatchDrawRange](Rendering.BatchDrawRange.html) struct apply to all of them. You must populate this with at least one draw range, but you can use more if necessary.

The culling callback must allocate the memory for this command using [UnsafeUtility.Malloc](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.Malloc.html) with the [Allocator.TempJob](Unity.Collections.Allocator.TempJob.html) parameter. Unity releases this memory when it finishes rendering the draw commands.


            
