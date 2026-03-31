This version of Unity is unsupported.



# OverlapBoxCommand Constructor




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

public OverlapBoxCommand([Vector3](Vector3.html) center,
[Vector3](Vector3.html) halfExtents,
[Quaternion](Quaternion.html) orientation,
[QueryParameters](QueryParameters.html) queryParameters);






### Parameters



| Parameter | Description |
| --- | --- |
| center | The center of the box. |
| halfExtents | The half of the size of the box in each dimension. |
| orientation | The orientation of the box. |
| queryParameters | Structure for specifying additional parameters for a batch query such as layer mask, hit triggers. |





### Description



Create an OverlapBoxCommand.





The query is run in the default physics scene.




---








## Declaration

public OverlapBoxCommand([PhysicsScene](PhysicsScene.html) physicsScene,
[Vector3](Vector3.html) center,
[Vector3](Vector3.html) halfExtents,
[Quaternion](Quaternion.html) orientation,
[QueryParameters](QueryParameters.html) queryParameters);






### Parameters



| Parameter | Description |
| --- | --- |
| physicsScene | The physics scene to run the overlap box query in. |
| center | The center of the box. |
| halfExtents | Half of the size of the box in each dimension. |
| orientation | The orientation of the box. |
| queryParameters | Structure for specifying additional parameters for a batch query such as layer mask or hit triggers. |





### Description



Create a OverlapBoxCommand.


            
