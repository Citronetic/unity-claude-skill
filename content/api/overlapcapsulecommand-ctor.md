This version of Unity is unsupported.



# OverlapCapsuleCommand Constructor




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

public OverlapCapsuleCommand([Vector3](Vector3.html) point0,
[Vector3](Vector3.html) point1,
float radius,
[QueryParameters](QueryParameters.html) queryParameters);






### Parameters



| Parameter | Description |
| --- | --- |
| point0 | The center of the sphere at the start of the capsule. |
| point1 | The center of the sphere at the end of the capsule. |
| radius | The radius of the capsule. |
| queryParameters | Structure for specifying additional parameters for a batch query such as layer mask or hit triggers. |





### Description



Create an OverlapCapsuleCommand.





The query is run in the default physics scene.




---








## Declaration

public OverlapCapsuleCommand([PhysicsScene](PhysicsScene.html) physicsScene,
[Vector3](Vector3.html) point0,
[Vector3](Vector3.html) point1,
float radius,
[QueryParameters](QueryParameters.html) queryParameters);






### Parameters



| Parameter | Description |
| --- | --- |
| physicsScene | The physics scene this command is run in. |
| point0 | The center of the sphere at the start of the capsule. |
| point1 | The center of the sphere at the end of the capsule. |
| radius | The radius of the capsule. |
| queryParameters | Structure for specifying additional parameters for a batch query such as layer mask or hit triggers. |





### Description



Create an OverlapCapsuleCommand.


            
