This version of Unity is unsupported.



# [BatchCullingOutputDrawCommands](Rendering.BatchCullingOutputDrawCommands.html).instanceSortingPositionFloatCount




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












                    public int instanceSortingPositionFloatCount;






### Description



If [BatchDrawCommandFlags.HasSortingPosition](Rendering.BatchDrawCommandFlags.HasSortingPosition.html) is set for one or more draw commands, this contains float3 world-space positions that Unity uses for depth sorting.





You must set this in the [OnPerformCulling](Rendering.BatchRendererGroup.OnPerformCulling.html) callback.

**Note**: The number of elements is expressed in floats. Because Unity expects three floats per instance, you should set this value to three times the number of depth-sorted instances.


            
