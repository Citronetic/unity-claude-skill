This version of Unity is unsupported.



# [PhysicsScene](PhysicsScene.html).OverlapBox




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

public int OverlapBox([Vector3](Vector3.html) center,
[Vector3](Vector3.html) halfExtents,
Collider[] results,
[Quaternion](Quaternion.html) orientation = Quaternion.identity,
int layerMask = DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| center | Center of the box. |
| halfExtents | Half of the size of the box in each dimension. |
| results | The buffer to store the results in. |
| orientation | Rotation of the box. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a box. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Returns



**int**
        The amount of colliders stored in `results`.





### Description



Find all colliders touching or inside of the given box, and store them into the buffer.





Additional resources: [Physics.OverlapBoxNonAlloc](Physics.OverlapBoxNonAlloc.html).


            
