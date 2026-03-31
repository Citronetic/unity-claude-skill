This version of Unity is unsupported.



# BoxcastCommand Constructor




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

public BoxcastCommand([Vector3](Vector3.html) center,
[Vector3](Vector3.html) halfExtents,
[Quaternion](Quaternion.html) orientation,
[Vector3](Vector3.html) direction,
[QueryParameters](QueryParameters.html) queryParameters,
float distance);






### Parameters



| Parameter | Description |
| --- | --- |
| center | The center of the box. |
| halfExtents | The half size of the box in each dimension. |
| orientation | The rotation of the box. |
| direction | The direction in which to sweep the box. |
| distance | The maximum length of the cast. |
| queryParameters | Structure for specifying additional parameters for a batch query such as layer mask, hit triggers and hit backfaces. |





### Description



Creates a BoxcastCommand.





This command is run in the default physics scene.




---








## Declaration

public BoxcastCommand([PhysicsScene](PhysicsScene.html) physicsScene,
[Vector3](Vector3.html) center,
[Vector3](Vector3.html) halfExtents,
[Quaternion](Quaternion.html) orientation,
[Vector3](Vector3.html) direction,
[QueryParameters](QueryParameters.html) queryParameters,
float distance);






### Parameters



| Parameter | Description |
| --- | --- |
| physicsScene | The physics scene to run the command in. |
| center | The center of the box. |
| halfExtents | The half size of the box in each dimension. |
| orientation | The rotation of the box. |
| direction | The direction in which to sweep the box. |
| distance | The maximum length of the cast. |
| queryParameters | Structure for specifying additional parameters for a batch query such as layer mask, hit triggers and hit backfaces. |





### Description



Creates a BoxcastCommand.




---






                        **Obsolete**
                        This struct signature is no longer supported. Use struct with a QueryParameters instead.




## Declaration

public BoxcastCommand([Vector3](Vector3.html) center,
[Vector3](Vector3.html) halfExtents,
[Quaternion](Quaternion.html) orientation,
[Vector3](Vector3.html) direction,
float distance,
int layerMask);






### Parameters



| Parameter | Description |
| --- | --- |
| center | The center of the box. |
| halfExtents | The half size of the box in each dimension. |
| orientation | The rotation of the box. |
| direction | The direction in which to sweep the box. |
| distance | The maximum length of the cast. |
| layerMask | A LayerMask that is used to selectively filter which colliders are considered when casting a box. |





### Description



Creates a BoxcastCommand.





This command is run in the default physics scene.




---






                        **Obsolete**
                        This struct signature is no longer supported. Use struct with a QueryParameters instead.




## Declaration

public BoxcastCommand([PhysicsScene](PhysicsScene.html) physicsScene,
[Vector3](Vector3.html) center,
[Vector3](Vector3.html) halfExtents,
[Quaternion](Quaternion.html) orientation,
[Vector3](Vector3.html) direction,
float distance,
int layerMask);






### Parameters



| Parameter | Description |
| --- | --- |
| physicsScene | The physics scene to run the command in. |
| center | The center of the box. |
| halfExtents | The half size of the box in each dimension. |
| orientation | The rotation of the box. |
| direction | The direction in which to sweep the box. |
| distance | The maximum length of the cast. |
| layerMask | A LayerMask that is used to selectively filter which colliders are considered when casting a box. |





### Description



Creates a BoxcastCommand.


            
