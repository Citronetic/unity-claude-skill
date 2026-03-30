This version of Unity is unsupported.



# [NavMesh](AI.NavMesh.html).RemoveNavMeshData




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

public static void RemoveNavMeshData([AI.NavMeshDataInstance](AI.NavMeshDataInstance.html) handle);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The instance of a NavMesh to remove. |





### Description



Removes the specified [NavMeshDataInstance](AI.NavMeshDataInstance.html) from the game, making it unavailable for agents and queries.





Use the instance returned by [AddNavMeshData](AI.NavMesh.AddNavMeshData.html) to remove the corresponding NavMesh data. If the instance is not valid, e.g. has been removed before, the call has no effect.

Additional resources: [NavMeshDataInstance.Remove](AI.NavMeshDataInstance.Remove.html), [RemoveAllNavMeshData](AI.NavMesh.RemoveAllNavMeshData.html).


            
