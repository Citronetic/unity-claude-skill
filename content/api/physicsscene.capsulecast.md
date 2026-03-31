This version of Unity is unsupported.



# [PhysicsScene](PhysicsScene.html).CapsuleCast




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

public bool CapsuleCast([Vector3](Vector3.html) point1,
[Vector3](Vector3.html) point2,
float radius,
[Vector3](Vector3.html) direction,
out [RaycastHit](RaycastHit.html) hitInfo,
float maxDistance = Mathf.Infinity,
int layerMask = DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| point1 | The center of the sphere at the start of the capsule. |
| point2 | The center of the sphere at the end of the capsule. |
| radius | The radius of the capsule. |
| direction | The direction into which to sweep the capsule. |
| hitInfo | If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit). |
| maxDistance | The max length of the sweep. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a capsule. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Returns



**bool**
        True when the capsule sweep intersects any collider, otherwise false.





### Description



Casts a capsule against all colliders in this physics scene and returns detailed information on what was hit.





Additional resources: [Physics.CapsuleCast](Physics.CapsuleCast.html).




---








## Declaration

public int CapsuleCast([Vector3](Vector3.html) point1,
[Vector3](Vector3.html) point2,
float radius,
[Vector3](Vector3.html) direction,
RaycastHit[] results,
float maxDistance = Mathf.Infinity,
int layerMask = DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| point1 | The center of the sphere at the start of the capsule. |
| point2 | The center of the sphere at the end of the capsule. |
| radius | The radius of the capsule. |
| direction | The direction into which to sweep the capsule. |
| results | The buffer to store the results in. |
| maxDistance | The max length of the sweep. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a capsule. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Returns



**int**
        The amount of hits stored to the `results` buffer.





### Description



Casts a capsule against all colliders in this physics scene and returns detailed information on what was hit.





Additional resources: [Physics.CapsuleCastNonAlloc](Physics.CapsuleCastNonAlloc.html).


            
