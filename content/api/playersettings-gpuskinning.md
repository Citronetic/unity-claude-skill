This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).gpuSkinning




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




                [Switch to Manual](../Manual/class-PlayerSettings.html)







                    public static bool gpuSkinning;






### Description



Marked for deprecation in the future. Use [PlayerSettings.meshDeformation](PlayerSettings-meshDeformation.html) instead.





If you change the value of `gpuSkinning`, Unity sets `PlayerSettings.meshDeformation` in the following way:



          - If you set `gpuSkinning` to false, Unity sets `PlayerSettings.meshDeformation` to `MeshDeformation.CPU`.

          - If you set `gpuSkinning` to true, Unity sets `PlayerSettings.meshDeformation` to `MeshDeformation.GPUBatched`.





See [PlayerSettings.meshDeformation](PlayerSettings-meshDeformation.html).


            
