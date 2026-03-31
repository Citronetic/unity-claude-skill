This version of Unity is unsupported.



# RaycastCommand Constructor




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

public RaycastCommand([Vector3](Vector3.html) from,
[Vector3](Vector3.html) direction,
[QueryParameters](QueryParameters.html) queryParameters,
float distance);






### Parameters



| Parameter | Description |
| --- | --- |
| from | The starting point of the ray in world coordinates. |
| direction | The direction of the ray. |
| distance | The maximum distance the ray should check for collisions. |
| queryParameters | Structure for specifying additional parameters for a batch query such as layer mask, hit multiple mesh faces, hit triggers and hit backfaces. |





### Description



Create a RaycastCommand.





The query is run in the default physics scene.




---








## Declaration

public RaycastCommand([PhysicsScene](PhysicsScene.html) physicsScene,
[Vector3](Vector3.html) from,
[Vector3](Vector3.html) direction,
[QueryParameters](QueryParameters.html) queryParameters,
float distance);






### Parameters



| Parameter | Description |
| --- | --- |
| physicsScene | The physics scene to run the raycast query in. |
| from | The starting point of the ray in world coordinates. |
| direction | The direction of the ray. |
| distance | The maximum distance the ray should check for collisions. |
| queryParameters | Structure for specifying additional parameters for a batch query such as layer mask, hit multiple mesh faces, hit triggers and hit backfaces. |





### Description



Create a RaycastCommand.




---






                        **Obsolete**
                        This struct signature is no longer supported. Use struct with a QueryParameters instead.




## Declaration

public RaycastCommand([Vector3](Vector3.html) from,
[Vector3](Vector3.html) direction,
float distance,
int layerMask,
int maxHits);






### Parameters



| Parameter | Description |
| --- | --- |
| from | The starting point of the ray in world coordinates. |
| direction | The direction of the ray. |
| distance | The maximum distance the ray should check for collisions. |
| layerMask | A LayerMask that is used to selectively filter which colliders are considered when casting a ray. |
| maxHits | The maximum number of Colliders the ray can hit. |





### Description



Create a RaycastCommand.





The query is run in the default physics scene.




---






                        **Obsolete**
                        This struct signature is no longer supported. Use struct with a QueryParameters instead.




## Declaration

public RaycastCommand([PhysicsScene](PhysicsScene.html) physicsScene,
[Vector3](Vector3.html) from,
[Vector3](Vector3.html) direction,
float distance,
int layerMask,
int maxHits);






### Parameters



| Parameter | Description |
| --- | --- |
| physicsScene | The physics scene to run the raycast query in. |
| from | The starting point of the ray in world coordinates. |
| direction | The direction of the ray. |
| distance | The maximum distance the ray should check for collisions. |
| layerMask | A LayerMask that is used to selectively filter which colliders are considered when casting a ray. |
| maxHits | The maximum number of Colliders the ray can hit. |





### Description



Create a RaycastCommand.


            
