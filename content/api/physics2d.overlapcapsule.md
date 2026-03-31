This version of Unity is unsupported.



# [Physics2D](Physics2D.html).OverlapCapsule




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

public static [Collider2D](Collider2D.html) OverlapCapsule([Vector2](Vector2.html) point,
[Vector2](Vector2.html) size,
[CapsuleDirection2D](CapsuleDirection2D.html) direction,
float angle,
int layerMask = DefaultRaycastLayers,
float minDepth = -Mathf.Infinity,
float maxDepth = Mathf.Infinity);






### Parameters



| Parameter | Description |
| --- | --- |
| point | The center of the capsule. |
| size | The size of the capsule. |
| direction | The direction of the capsule. |
| angle | The angle of the capsule. |
| layerMask | Filter to check objects only on specific layers. |
| minDepth | Only include objects with a Z coordinate (depth) greater than this value. |
| maxDepth | Only include objects with a Z coordinate (depth) less than this value. |





### Returns



**Collider2D**
        The Collider overlapping the capsule.





### Description



Checks if a Collider falls within a capsule area.





The capsule is defined by its center coordinate in world space, its size, direction and angle. The optional *layerMask* allows the test to check only for objects on specific layers.

Although the Z axis is not relevant for rendering or collisions in 2D, you can use the *minDepth* and *maxDepth* parameters to filter objects based on their Z coordinate. If more than one Collider falls within the capsule then the one returned will be the one with the lowest Z coordinate value. Null is returned if there are no Colliders in the box.

Additional resources: [OverlapCapsule](Physics2D.OverlapCapsule.html), [OverlapCapsuleAll](Physics2D.OverlapCapsuleAll.html).




---








## Declaration

public static int OverlapCapsule([Vector2](Vector2.html) point,
[Vector2](Vector2.html) size,
[CapsuleDirection2D](CapsuleDirection2D.html) direction,
float angle,
[ContactFilter2D](ContactFilter2D.html) contactFilter,
Collider2D[] results);






### Parameters



| Parameter | Description |
| --- | --- |
| point | The center of the capsule. |
| size | The size of the capsule. |
| direction | The direction of the capsule. |
| angle | The angle of the capsule. |
| contactFilter | The contact filter used to filter the results differently, such as by layer mask, Z depth.  Note that normal angle is not used for overlap testing. |
| results | The array to receive results.  The size of the array determines the maximum number of results that can be returned. |





### Returns



**int**
        Returns the number of results placed in the `results` array.





### Description



Checks if a Collider falls within a capsule area.





This function returns the number of Colliders found and places those Colliders in the `results` array.




---








## Declaration

public static int OverlapCapsule([Vector2](Vector2.html) point,
[Vector2](Vector2.html) size,
[CapsuleDirection2D](CapsuleDirection2D.html) direction,
float angle,
[ContactFilter2D](ContactFilter2D.html) contactFilter,
List<Collider2D> results);






### Parameters



| Parameter | Description |
| --- | --- |
| point | The center of the capsule. |
| size | The size of the capsule. |
| direction | The direction of the capsule. |
| angle | The angle of the capsule. |
| contactFilter | The contact filter used to filter the results differently, such as by layer mask, Z depth.  Note that normal angle is not used for overlap testing. |
| results | The list to receive results. |





### Returns



**int**
        Returns the number of results placed in the `results` list.





### Description



Checks if a Collider falls within a capsule area.





The integer return value is the number of results written into the `results` list. The results list will be resized if it doesn't contain enough elements to report all the results. This prevents memory from being allocated for results when the `results` list does not need to be resized, and improves garbage collection performance when the query is performed frequently.


            
