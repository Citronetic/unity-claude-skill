This version of Unity is unsupported.



# [BatchCullingOutputDrawCommands](Rendering.BatchCullingOutputDrawCommands.html).instanceSortingPositions




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












                    public float* instanceSortingPositions;






### Description



If [BatchDrawCommandFlags.HasSortingPosition](Rendering.BatchDrawCommandFlags.HasSortingPosition.html) is set for one or more draw commands, the `instanceSortingPositions` array contains explicit `float3` world space positions that Unity uses for depth sorting.
The culling callback must allocate the memory for the `instanceSortingPositions` using the `UnsafeUtility.Malloc` method and the `Allocator.TempJob` parameter. The memory is released by Unity when the rendering is complete.
If the length of the array is 0, set its value to null.





The culling callback must allocate the memory for this using [UnsafeUtility.Malloc](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.Malloc.html) with the [Allocator.TempJob](Unity.Collections.Allocator.TempJob.html) parameter. Unity releases this memory when it finishes rendering the draw commands.

If no draw commands contain depth-sorted instances, set this to `null`.


            
