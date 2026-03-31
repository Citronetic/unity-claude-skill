This version of Unity is unsupported.



# [Physics](Physics.html).OverlapCapsuleNonAlloc




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

public static int OverlapCapsuleNonAlloc([Vector3](Vector3.html) point0,
[Vector3](Vector3.html) point1,
float radius,
Collider[] results,
int layerMask = AllLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| point0 | The center of the sphere at the start of the capsule. |
| point1 | The center of the sphere at the end of the capsule. |
| radius | The radius of the capsule. |
| results | The buffer to store the results into. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a capsule. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Returns



**int**
        The amount of entries written to the buffer.





### Description



Check the given capsule against the physics world and return all overlapping colliders in the user-provided buffer.





Same as [Physics.OverlapCapsule](Physics.OverlapCapsule.html) but does not allocate anything on the managed heap.


            
