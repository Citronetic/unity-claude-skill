This version of Unity is unsupported.



# [Physics2D](Physics2D.html).CapsuleCastAll




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

public static RaycastHit2D[] CapsuleCastAll([Vector2](Vector2.html) origin,
[Vector2](Vector2.html) size,
[CapsuleDirection2D](CapsuleDirection2D.html) capsuleDirection,
float angle,
[Vector2](Vector2.html) direction,
float distance = Mathf.Infinity,
int layerMask = DefaultRaycastLayers,
float minDepth = -Mathf.Infinity,
float maxDepth = Mathf.Infinity);






### Parameters



| Parameter | Description |
| --- | --- |
| origin | The point in 2D space where the capsule originates. |
| size | The size of the capsule. |
| capsuleDirection | The direction of the capsule. |
| angle | The angle of the capsule (in degrees). |
| direction | Vector representing the direction to cast the capsule. |
| distance | The maximum distance over which to cast the capsule. |
| layerMask | Filter to detect Colliders only on certain layers. |
| minDepth | Only include objects with a Z coordinate (depth) greater than this value. |
| maxDepth | Only include objects with a Z coordinate (depth) less than this value. |





### Returns



**RaycastHit2D[]**
        The cast results returned.





### Description



Casts a capsule against Colliders in the Scene, returning all Colliders that contact with it.





A *CapsuleCast* is conceptually like dragging a capsule through the Scene in a particular direction.  Any object making contact with the capsule can be detected and reported.

This function is similar to the [CapsuleCast](Physics2D.CapsuleCast.html) function but instead of detecting just the first Collider that is hit, an array of all Colliders along the path of the capsule is returned. The Colliders in the array are sorted in order of distance from the origin point. The *layerMask* can be used to detect objects selectively only on certain layers (this allows you to apply the detection only to enemy characters, for example).

The returned [RaycastHit2D](RaycastHit2D.html) returns both the point and normal of the contact where the capsule would touch the Collider.  It also returns the centroid where the capsule would be positioned for it to contact at that point.

**NOTE:** All results are sorted into ascending distance order i.e. the first result is the closest.

Additional resources: [ContactFilter2D](ContactFilter2D.html), [LayerMask](LayerMask.html) class, [RaycastHit2D](RaycastHit2D.html) class, [CapsuleCast](Physics2D.CapsuleCast.html), [DefaultRaycastLayers](Physics2D.DefaultRaycastLayers.html), [IgnoreRaycastLayer](Physics2D.IgnoreRaycastLayer.html), [raycastsHitTriggers](Physics2D-raycastsHitTriggers.html).


            
