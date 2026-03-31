This version of Unity is unsupported.



# ClosestPointCommand Constructor




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

public ClosestPointCommand([Vector3](Vector3.html) point,
int colliderInstanceID,
[Vector3](Vector3.html) position,
[Quaternion](Quaternion.html) rotation,
[Vector3](Vector3.html) scale);






### Parameters



| Parameter | Description |
| --- | --- |
| point | Location you want to find the closest point to. |
| colliderInstanceID | The ID of the Collider that you find the closest point on. |
| position | The position of the Collider. |
| rotation | The rotation of the Collider. |
| scale | The global scale of the Collider. |





### Description



Create a ClosestPointCommand using Instance ID of the Collider.




---








## Declaration

public ClosestPointCommand([Vector3](Vector3.html) point,
[Collider](Collider.html) collider,
[Vector3](Vector3.html) position,
[Quaternion](Quaternion.html) rotation,
[Vector3](Vector3.html) scale);






### Parameters



| Parameter | Description |
| --- | --- |
| point | Location you want to find the closest point to. |
| collider | The Collider that you find the closest point on. |
| position | The position of the Collider. |
| rotation | The rotation of the Collider. |
| scale | The global scale of the Collider. |





### Description



Schedule a batch of closest points which are performed in a job.





Can only be invoked from the main thread, since Unity Components are unavailable off the main thread. In the threaded context, use the other constructor that accepts Instance ID instead.


            
