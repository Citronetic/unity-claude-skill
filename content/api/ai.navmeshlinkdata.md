This version of Unity is unsupported.



# NavMeshLinkData





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



Used for runtime manipulation of links connecting polygons of the NavMesh.





A typical use case is to connect different navigation meshes. Use the [NavMesh.AddLink](AI.NavMesh.AddLink.html) method to instantiate a link with these properties in the navigation system. The [NavMesh Link](https://docs.unity3d.com/Packages/com.unity.ai.navigation@2.0/manual/NavMeshLink.html) component creates its runtime data in this way.





### Properties



| Property | Description |
| --- | --- |
| agentTypeID | Specifies which agent type this link is available for. |
| area | Area type of the link. |
| bidirectional | If true, the link can be traversed in both directions, otherwise only from start to end position. |
| costModifier | If positive, overrides the pathfinder cost to traverse the link. |
| endPosition | End position of the link. |
| startPosition | Start position of the link. |
| width | If positive, the link will be rectangle aligned along the line from start to end. |


            
