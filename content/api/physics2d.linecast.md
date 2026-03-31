This version of Unity is unsupported.



# [Physics2D](Physics2D.html).Linecast




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

public static [RaycastHit2D](RaycastHit2D.html) Linecast([Vector2](Vector2.html) start,
[Vector2](Vector2.html) end,
int layerMask = DefaultRaycastLayers,
float minDepth = -Mathf.Infinity,
float maxDepth = Mathf.Infinity);






### Parameters



| Parameter | Description |
| --- | --- |
| start | The start point of the line in world space. |
| end | The end point of the line in world space. |
| layerMask | Filter to detect Colliders only on certain layers. |
| minDepth | Only include objects with a Z coordinate (depth) greater than or equal to this value. |
| maxDepth | Only include objects with a Z coordinate (depth) less than or equal to this value. |





### Returns



**RaycastHit2D**
        The cast results returned.





### Description



Casts a line segment against Colliders in the Scene.





A *linecast* is an imaginary line between two points in world space. Any object making contact with this line can be detected and reported. This differs from the similar *raycast* in that raycasting specifies the line using an origin and direction.

This function returns a RaycastHit2D object when the line contacts a Collider in the Scene. The *layerMask* can be used to detect objects selectively only on certain layers (this allows you to apply the detection only to enemy characters, for example). The direction of the line is assumed to extend from the start point to the end point. Only the first Collider encountered in that direction will be reported. Although the Z axis is not relevant for rendering or collisions in 2D, you can use the *minDepth* and *maxDepth* parameters to filter objects based on their Z coordinate.

Linecasts are useful for determining lines of sight, targets hit by gunfire and for many other purposes in gameplay.

Note that this function will allocate memory for the returned RaycastHit2D object.

Additionally, this will also detect Collider(s) at the start of the line.  In this case the line is starting inside the Collider and doesn't intersect the Collider surface.  This means that the collision normal cannot be calculated in which case the collision normal returned is set to the inverse of the line vector being tested.  This can easily be detected because such results are always at a RaycastHit2D fraction of zero.

**NOTE:** All results are sorted into ascending distance order i.e. the first result is the closest.

Additional resources: [LayerMask](LayerMask.html) class, [RaycastHit2D](RaycastHit2D.html) class, [LinecastAll](Physics2D.LinecastAll.html), [DefaultRaycastLayers](Physics2D.DefaultRaycastLayers.html), [IgnoreRaycastLayer](Physics2D.IgnoreRaycastLayer.html), [raycastsHitTriggers](Physics2D-raycastsHitTriggers.html).




---








## Declaration

public static int Linecast([Vector2](Vector2.html) start,
[Vector2](Vector2.html) end,
[ContactFilter2D](ContactFilter2D.html) contactFilter,
RaycastHit2D[] results);






### Parameters



| Parameter | Description |
| --- | --- |
| start | The start point of the line in world space. |
| end | The end point of the line in world space. |
| contactFilter | The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle. |
| results | The array to receive results.  The size of the array determines the maximum number of results that can be returned. |





### Returns



**int**
        Returns the number of results placed in the `results` array.





### Description



Casts a line segment against Colliders in the Scene with results filtered by [ContactFilter2D](ContactFilter2D.html).





The overloads of this function with the `contactFilter` parameter can filter the returned results by the options in [ContactFilter2D](ContactFilter2D.html).

**NOTE:** All results are sorted into ascending distance order i.e. the first result is the closest.

Additional resources: [ContactFilter2D](ContactFilter2D.html) and [RaycastHit2D](RaycastHit2D.html).




---








## Declaration

public static int Linecast([Vector2](Vector2.html) start,
[Vector2](Vector2.html) end,
[ContactFilter2D](ContactFilter2D.html) contactFilter,
List<RaycastHit2D> results);






### Parameters



| Parameter | Description |
| --- | --- |
| start | The start point of the line in world space. |
| end | The end point of the line in world space. |
| contactFilter | The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle. |
| results | The list to receive results. |





### Returns



**int**
        Returns the number of results placed in the `results` list.





### Description



Casts a line segment against Colliders in the Scene with results filtered by [ContactFilter2D](ContactFilter2D.html).





The integer return value is the number of results written into the `results` list. The results list will be resized if it doesn't contain enough elements to report all the results. This prevents memory from being allocated for results when the `results` list does not need to be resized, and improves garbage collection performance when the query is performed frequently.

The results can also be filtered by the `contactFilter`.

**NOTE:** All results are sorted into ascending distance order i.e. the first result is the closest.

Additional resources: [ContactFilter2D](ContactFilter2D.html) and [RaycastHit2D](RaycastHit2D.html).


            
