This version of Unity is unsupported.



# [Physics](Physics.html).BoxCastAll




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

public static RaycastHit[] BoxCastAll([Vector3](Vector3.html) center,
[Vector3](Vector3.html) halfExtents,
[Vector3](Vector3.html) direction,
[Quaternion](Quaternion.html) orientation = Quaternion.identity,
float maxDistance = Mathf.Infinity,
int layerMask = DefaultRaycastLayers,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| center | Center of the box. |
| halfExtents | Half the size of the box in each dimension. |
| direction | The direction in which to cast the box. |
| orientation | Rotation of the box. |
| maxDistance | The max length of the cast. |
| layerMask | A Layer mask that is used to selectively filter which colliders are considered when casting a box. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Returns



**RaycastHit[]**
        All colliders that were hit.





### Description



Like [Physics.BoxCast](Physics.BoxCast.html), but returns all hits.





**Notes:** For colliders that overlap the box at the start of the sweep,  [RaycastHit.normal](RaycastHit-normal.html) is set opposite to the direction of the sweep, [RaycastHit.distance](RaycastHit-distance.html) is set to zero, and the zero vector gets returned in [RaycastHit.point](RaycastHit-point.html). You might want to check whether this is the case in your particular query and perform additional queries to refine the result.


            
