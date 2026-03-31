This version of Unity is unsupported.



# NavMeshBuildSettings





struct in
          UnityEngine.AI



/



Implemented in:[UnityEngine.AIModule](UnityEngine.AIModule.html)


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



















### Description



The NavMeshBuildSettings struct allows you to specify a collection of settings which describe the dimensions and limitations of a particular agent type.





You might want to define multiple NavMeshBuildSettings if your game involves characters with large differences in height, width or climbing ability.

You can also use this struct to control the precision and granularity of the build process, by setting the voxel and tile sizes. Some of the values are coupled, meaning there are constraints on the values based on other values. For example, it’s not valid for [agentClimb](AI.NavMeshBuildSettings-agentClimb.html) to be larger than [agentHeight](AI.NavMeshBuildSettings-agentHeight.html).
To help diagnose violations of these rules, a special method [ValidationReport](AI.NavMeshBuildSettings.ValidationReport.html) can be evaluated.





### Properties



| Property | Description |
| --- | --- |
| agentClimb | The maximum vertical step size an agent can take. |
| agentHeight | The height of the agent for baking in world units. |
| agentRadius | The radius of the agent for baking in world units. |
| agentSlope | The maximum slope angle which is walkable (angle in degrees). |
| agentTypeID | The agent type ID the NavMesh will be baked for. |
| buildHeightMesh | Enables the creation of additional data needed to determine the height at any position on the NavMesh more accurately. |
| debug | Options for collecting debug data during the build process. |
| ledgeDropHeight | Maximum agent drop height. |
| maxJobWorkers | The maximum number of worker threads that the build process can utilize when building a NavMesh with these settings. |
| maxJumpAcrossDistance | Maximum agent jump distance. |
| minRegionArea | The approximate minimum area of individual NavMesh regions. |
| overrideTileSize | Enables overriding the default tile size. Additional resources: tileSize. |
| overrideVoxelSize | Enables overriding the default voxel size. Additional resources: voxelSize. |
| tileSize | Sets the tile size in voxel units. |
| voxelSize | Sets the voxel size in world length units. |





### Public Methods



| Method | Description |
| --- | --- |
| ValidationReport | Validates the properties of NavMeshBuildSettings. |


            
