This version of Unity is unsupported.



# [NavMesh](AI.NavMesh.html).CalculateTriangulation




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

public static [AI.NavMeshTriangulation](AI.NavMeshTriangulation.html) CalculateTriangulation();






### Returns



**NavMeshTriangulation**
        Object that contains a list of vertices and a list of indices that describe the triangles of the active NavMeshes.





### Description



Calculates a triangulation of all the NavMeshes that are present in the scene at the time of the call.





Calculates and returns a simple triangulation of all the NavMeshes that are currently active. The resulting object contains vertices, triangle indices and NavMesh [area types](AI.NavMesh.GetAreaFromName.html). The triangles from each NavMesh instance are grouped together in the array. These triangle groups are further sorted in the array based on the [agent types](AI.NavMeshBuildSettings-agentTypeID.html) that their originating NavMeshes were built for.

The triangulation captures the current shape of the NavMeshes, which can include temporary holes [carved](AI.NavMeshObstacle-carving.html) by NavMeshObstacles.

The returned mesh contains only the triangles used for pathfinding. It does not contain the detail that is used to place the agents on the walkable surface. This is noticeable on locations with curved surfaces.

Additional resources: [Areas and Costs](https://docs.unity3d.com/Packages/com.unity.ai.navigation@2.0/manual/AreasAndCosts.html) to learn how to use different Area types.


            
