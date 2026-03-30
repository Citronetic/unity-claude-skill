This version of Unity is unsupported.



# [NavMeshBuildSourceShape](AI.NavMeshBuildSourceShape.html).ModifierBox




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



Describes a ModifierBox source for use with [NavMeshBuildSource](AI.NavMeshBuildSource.html).





This shape changes the area type of the walkable surface inside the box. Because this modification happens in a voxel representation of the scene, NavMesh does not follow the outline of the box precisely. If several ModifierBoxes overlap, and have different area types, the area type with the highest index takes precedence. A ModifierBox that you set to Not Walkable takes precedence over any other ModifierBoxes, regardless of their area type. This is useful when you need to block out an area.

Additional resources: [Areas and Costs](https://docs.unity3d.com/Packages/com.unity.ai.navigation@2.0/manual/AreasAndCosts.html).


            
