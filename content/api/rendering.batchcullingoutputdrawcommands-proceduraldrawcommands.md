This version of Unity is unsupported.



# [BatchCullingOutputDrawCommands](Rendering.BatchCullingOutputDrawCommands.html).proceduralDrawCommands




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












                    public BatchDrawCommandProcedural* proceduralDrawCommands;






### Description



The array that contains procedural draw commands to render as the result of the OnPerformCulling call.





This can contain as many procedural commands as necessary, and each command can render multiple instances. The culling callback must allocate the memory for this using [UnsafeUtility.Malloc](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.Malloc.html) with the [Allocator.TempJob](Unity.Collections.Allocator.TempJob.html) parameter. Unity releases this memory when it finishes rendering the draw commands.


            
