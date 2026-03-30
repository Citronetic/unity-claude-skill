This version of Unity is unsupported.



# [NavMeshBuildSettings](AI.NavMeshBuildSettings.html).minRegionArea




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












                    public float minRegionArea;






### Description



The approximate minimum area of individual NavMesh regions.





This property allows you to cull away small non-connected NavMesh regions. NavMesh regions whose surface area is smaller than the specified value, will be removed.

Note: some regions may not get removed. The NavMesh is built in parallel as a grid of tiles. If a region straddles a tile boundary, the region is not removed. The reason for this is that the region pruning happens at a stage in the build process where surrounding tiles are not available.


            
