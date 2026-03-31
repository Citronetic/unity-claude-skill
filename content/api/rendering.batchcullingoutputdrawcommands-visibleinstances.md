This version of Unity is unsupported.



# [BatchCullingOutputDrawCommands](Rendering.BatchCullingOutputDrawCommands.html).visibleInstances




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












                    public int* visibleInstances;






### Description



The indices of visible instances to render.





Because each draw command can have a different number of instances, BatchRendererGroup stores the instance indices here, and each draw command indexes them with the visibleOffset property. The instance indices are zero-based indices that Unity passes directly to the shader which should use the value to determine where to load instance data from.

The culling callback must allocate the memory for this command using [UnsafeUtility.Malloc](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.Malloc.html) with the [Allocator.TempJob](Unity.Collections.Allocator.TempJob.html) parameter. Unity releases this memory when it finishes rendering the draw commands.

The visible instance indices only use the least significant 24 bits for the actual instance index and use the highest 8 bits for the LOD crossfade factor. In a future version of BatchRendererGroup, this restriction will only apply to draw commands which actually set the LODCrossFade flag. This will enable you to use all 32 bits which is useful if you want to encode data directly into the index.


            
