This version of Unity is unsupported.



# [NavMeshBuilder](AI.NavMeshBuilder.html).BuildNavMeshData




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















## Declaration

public static [AI.NavMeshData](AI.NavMeshData.html) BuildNavMeshData([AI.NavMeshBuildSettings](AI.NavMeshBuildSettings.html) buildSettings,
List<NavMeshBuildSource> sources,
[Bounds](Bounds.html) localBounds,
[Vector3](Vector3.html) position,
[Quaternion](Quaternion.html) rotation);






### Parameters



| Parameter | Description |
| --- | --- |
| buildSettings | Settings for the bake process, see NavMeshBuildSettings. |
| sources | List of input geometry used for baking, they describe the surfaces to walk on or obstacles to avoid. |
| localBounds | Bounding box relative to position and rotation which describes the volume where the NavMesh should be built. Empty bounds is treated as no bounds, i.e. the NavMesh will cover all the inputs. |
| position | Center of the NavMeshData. This specifies the origin for the NavMesh tiles (Additional resources: NavMeshBuildSettings.tileSize). |
| rotation | Orientation of the NavMeshData, you can use this to generate NavMesh with an arbitrary up-vector – e.g. for walkable vertical surfaces. |





### Returns



**NavMeshData**
        Returns a newly built NavMeshData, or null if the NavMeshData was empty or an error occurred.
The newly built NavMeshData, or null if the NavMeshData was empty or an error occurred.





### Description



Builds a NavMesh data object from the provided input sources.





Note: that [NavMeshBuilder.BuildNavMeshData](AI.NavMeshBuilder.BuildNavMeshData.html) has same effect as creating a new empty [NavMeshData](AI.NavMeshData.html) and calling [NavMeshBuilder.UpdateNavMeshData](AI.NavMeshBuilder.UpdateNavMeshData.html).


            
