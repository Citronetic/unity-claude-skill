This version of Unity is unsupported.



# [NavMeshBuildSettings](AI.NavMeshBuildSettings.html).voxelSize




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












                    public float voxelSize;






### Description



Sets the voxel size in world length units.





The NavMesh is built by first voxelizing the Scene, and then figuring out walkable spaces from the voxelized representation of the Scene. The voxel size controls how closely the NavMesh fits the geometry of your Scene, and is defined in world units.

If you require a more detail so that the NavMesh more closely fits your Scene’s geometry, you can reduce the voxel size. An increase in detail will also cause your game to consume more memory and take more time to calculate the NavMesh data. The scaling is roughly quadratic, so doubling the resolution will result in an approximate quadrupling of the build time.

In general you should aim to have 4-6 voxels per character diameter. For example, if you have a Scene with characters that have a radius of 0.3, a good voxel size is 0.1. The default value is set to a third of the agentRadius.

Note: If you want to use this setting, you must also set [overrideVoxelSize](AI.NavMeshBuildSettings-overrideVoxelSize.html) to true.


            
