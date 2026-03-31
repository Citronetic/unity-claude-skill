This version of Unity is unsupported.



# [PhysicsScene](PhysicsScene.html).OverlapSphere




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

public int OverlapSphere([Vector3](Vector3.html) position,
float radius,
Collider[] results,
int layerMask = AllLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Center of the sphere. |
| radius | Radius of the sphere. |
| results | The buffer to store the results into. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a sphere. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Returns



**int**
        The number of colliders detected that overlap with the sphere and were stored in the `results` array. The return value cannot exceed the size of the `results` array.





### Description



Computes and stores colliders touching or inside the sphere into the provided buffer.





Additional resources: [Physics.OverlapSphereNonAlloc](Physics.OverlapSphereNonAlloc.html).


            
