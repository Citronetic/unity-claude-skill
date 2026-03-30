This version of Unity is unsupported.



# [NavMeshBuildSettings](AI.NavMeshBuildSettings.html).agentSlope




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












                    public float agentSlope;






### Description



The maximum slope angle which is walkable (angle in degrees).





The valid range is 0–60 degrees. Steep slopes will be excluded from the resulting NavMesh. Please note that setting the slope higher than 45 can give artifacts due to the voxelization process - i.e. a steep slope cannot be distinguished from a wall.


            
