This version of Unity is unsupported.



# CapsulecastCommand Constructor




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

public CapsulecastCommand([Vector3](Vector3.html) p1,
[Vector3](Vector3.html) p2,
float radius,
[Vector3](Vector3.html) direction,
[QueryParameters](QueryParameters.html) queryParameters,
float distance);






### Parameters



| Parameter | Description |
| --- | --- |
| p1 | The center of the sphere at the start of the capsule. |
| p2 | The center of the sphere at the end of the capsule. |
| radius | The radius of the capsule. |
| direction | The direction of the capsule cast. |
| queryParameters | Structure for specifying additional parameters for a batch query such as layer mask, hit triggers and hit backfaces. |
| distance | The maximum length of the sweep. |





### Description



Creates a CapsulecastCommand.





This command is run in the default physics scene.




---








## Declaration

public CapsulecastCommand([PhysicsScene](PhysicsScene.html) physicsScene,
[Vector3](Vector3.html) p1,
[Vector3](Vector3.html) p2,
float radius,
[Vector3](Vector3.html) direction,
[QueryParameters](QueryParameters.html) queryParameters,
float distance);






### Parameters



| Parameter | Description |
| --- | --- |
| physicsScene | The physics scene to run the command in. |
| p1 | The center of the sphere at the start of the capsule. |
| p2 | The center of the sphere at the end of the capsule. |
| radius | The radius of the capsule. |
| direction | The direction of the capsule cast. |
| queryParameters | Structure for specifying additional parameters for a batch query such as layer mask, hit triggers and hit backfaces. |
| distance | The maximum length of the sweep. |





### Description



Creates a CapsulecastCommand.




---






                        **Obsolete**
                        This struct signature is no longer supported. Use struct with a QueryParameters instead.




## Declaration

public CapsulecastCommand([Vector3](Vector3.html) p1,
[Vector3](Vector3.html) p2,
float radius,
[Vector3](Vector3.html) direction,
float distance,
int layerMask);






### Parameters



| Parameter | Description |
| --- | --- |
| p1 | The center of the sphere at the start of the capsule. |
| p2 | The center of the sphere at the end of the capsule. |
| radius | The radius of the capsule. |
| direction | The direction of the capsule cast. |
| distance | The maximum length of the sweep. |
| layerMask | The LayerMask that selectively ignores Colliders when casting a capsule. |





### Description



Creates a CapsulecastCommand.





This command is run in the default physics scene.




---






                        **Obsolete**
                        This struct signature is no longer supported. Use struct with a QueryParameters instead.




## Declaration

public CapsulecastCommand([PhysicsScene](PhysicsScene.html) physicsScene,
[Vector3](Vector3.html) p1,
[Vector3](Vector3.html) p2,
float radius,
[Vector3](Vector3.html) direction,
float distance,
int layerMask);






### Parameters



| Parameter | Description |
| --- | --- |
| physicsScene | The physics scene to run the command in. |
| p1 | The center of the sphere at the start of the capsule. |
| p2 | The center of the sphere at the end of the capsule. |
| radius | The radius of the capsule. |
| direction | The direction of the capsule cast. |
| distance | The maximum length of the sweep. |
| layerMask | The LayerMask that selectively ignores Colliders when casting a capsule. |





### Description



Creates a CapsulecastCommand.


            
