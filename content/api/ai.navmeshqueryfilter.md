This version of Unity is unsupported.



# NavMeshQueryFilter





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



Specifies which agent type and areas to consider when searching the NavMesh.





This struct is used with the NavMesh query methods overloaded with the query filter argument.
Additional resources: [NavMesh.CalculatePath](AI.NavMesh.CalculatePath.html), [NavMesh.Raycast](AI.NavMesh.Raycast.html), [NavMesh.FindClosestEdge](AI.NavMesh.FindClosestEdge.html), [NavMesh.SamplePosition](AI.NavMesh.SamplePosition.html).





### Properties



| Property | Description |
| --- | --- |
| agentTypeID | The agent type ID, specifying which navigation meshes to consider for the query functions. |
| areaMask | A bitmask representing the traversable area types. |





### Public Methods



| Method | Description |
| --- | --- |
| GetAreaCost | Returns the area cost multiplier for the given area type for this filter. |
| SetAreaCost | Sets the pathfinding cost multiplier for this filter for a given area type. |


            
