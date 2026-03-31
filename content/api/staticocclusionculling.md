This version of Unity is unsupported.



# StaticOcclusionCulling





class in
          UnityEditor


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



StaticOcclusionCulling lets you perform static occlusion culling operations.





### Static Properties



| Property | Description |
| --- | --- |
| doesSceneHaveManualPortals | Does the Scene contain any occlusion portals that were added manually rather than automatically? |
| isRunning | Used to check if asynchronous generation of static occlusion culling data is still running. |
| umbraDataSize | Returns the size in bytes that the PVS data is currently taking up in this Scene on disk. |





### Static Methods



| Method | Description |
| --- | --- |
| Cancel | Used to cancel asynchronous generation of static occlusion culling data. |
| Clear | Clears the PVS of the opened Scene. |
| Compute | Used to generate static occlusion culling data. |
| GenerateInBackground | Used to compute static occlusion culling data asynchronously. |
| RemoveCacheFolder | Removes temporary folder used when baking occlusion. |


            
