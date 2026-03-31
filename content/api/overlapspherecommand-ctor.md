This version of Unity is unsupported.



# OverlapSphereCommand Constructor




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

public OverlapSphereCommand([Vector3](Vector3.html) point,
float radius,
[QueryParameters](QueryParameters.html) queryParameters);






### Parameters



| Parameter | Description |
| --- | --- |
| point | The center of the sphere. |
| radius | The radius of the sphere. |
| queryParameters | Structure for specifying additional parameters for a batch query such as layer mask or hit triggers. |





### Description



Create an OverlapSphereCommand.





This query is run in the default physics scene.




---








## Declaration

public OverlapSphereCommand([PhysicsScene](PhysicsScene.html) physicsScene,
[Vector3](Vector3.html) point,
float radius,
[QueryParameters](QueryParameters.html) queryParameters);






### Parameters



| Parameter | Description |
| --- | --- |
| physicsScene | The physics scene to run the overlap sphere query in. |
| point | The center of the sphere. |
| radius | The radius of the sphere. |
| queryParameters | Structure for specifying additional parameters for a batch query such as layer mask or hit triggers. |





### Description



Create an OverlapSphereCommand.


            
