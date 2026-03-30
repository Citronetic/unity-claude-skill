This version of Unity is unsupported.



# [NavMeshBuildSettings](AI.NavMeshBuildSettings.html).maxJumpAcrossDistance




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












                    public float maxJumpAcrossDistance;






### Description



Maximum agent jump distance.





Jump-Across link generation is controlled by the Jump Distance parameter. The parameter controls what is the furthest distance that will be connected. Setting the value to 0 will disable the generation.

The trajectory of the jump-across link is defined so that the horizontal travel is more than 2*agentRadius and less than Jump Distance. In addition the landing location must not be further than voxelSize from the level of the start location.


            
