This version of Unity is unsupported.



# [NavMeshBuildSettings](AI.NavMeshBuildSettings.html).ledgeDropHeight




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












                    public float ledgeDropHeight;






### Description



Maximum agent drop height.





Drop-Down link generation is controlled by the Drop Height parameter. The parameter controls what is the highest drop that will be connected, setting the value to 0 will disable the generation.

The trajectory of the drop-down link is defined so that the horizontal travel is: 2*agentRadius + 4*voxelSize. That is, the drop will land just beyond the edge of the platform. In addition the vertical travel needs to be more than bake settings’ Step Height (otherwise we could just step down) and less than Drop Height. The adjustment by voxel size is done so that any round off errors during voxelization does not prevent the links being generated. You should set the Drop Height to a bit larger value than what you measure in your level, so that the links will connect properly.


            
