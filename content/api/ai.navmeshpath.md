This version of Unity is unsupported.



# NavMeshPath





class in
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



A path as calculated by the navigation system.





The path is represented as a list of waypoints stored in the [corners](AI.NavMeshPath-corners.html) array. These points are not set directly from user scripts but a NavMeshPath with points correctly assigned is returned by the [NavMesh.CalculatePath](AI.NavMesh.CalculatePath.html) function and the [NavMeshAgent.path](AI.NavMeshAgent-path.html) property.





### Properties



| Property | Description |
| --- | --- |
| corners | Corner points of the path. (Read Only) |
| status | Status of the path. (Read Only) |





### Constructors



| Constructor | Description |
| --- | --- |
| NavMeshPath | NavMeshPath constructor. |





### Public Methods



| Method | Description |
| --- | --- |
| ClearCorners | Erase all corner points from path. |
| GetCornersNonAlloc | Calculate the corners for the path. |


            
