This version of Unity is unsupported.



# [NavMeshBuildSettings](AI.NavMeshBuildSettings.html).tileSize




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












                    public int tileSize;






### Description



Sets the tile size in voxel units.





The NavMesh is built in square tiles in order to build the mesh in parallel and to control maximum memory usage. It also helps to make the carving changes more local. If you plan to update NavMesh at runtime, a good tile size is around 32–128 voxels (roughly 5 to 20 meters for human size characters). 64 is good value to start, and you can use the [profiler window](../Manual/Profiler.html) to find a good trade off. Default value is 256, which is good for static baking. If you use a lot of [carving obstacles](https://docs.unity3d.com/Packages/com.unity.ai.navigation@2.0/manual/CreateNavMeshObstacle.html) you can try a smaller size if you see in the profiler that a lot of time is being spent on carving.

The tile size is specified in units of voxels per tile side length.

Note: if you want to use this setting, you must also set [overrideTileSize](AI.NavMeshBuildSettings-overrideTileSize.html) to true.


            
