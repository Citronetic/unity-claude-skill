This version of Unity is unsupported.



# [Physics2D](Physics2D.html).OverlapCircleAll




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

public static Collider2D[] OverlapCircleAll([Vector2](Vector2.html) point,
float radius,
int layerMask = DefaultRaycastLayers,
float minDepth = -Mathf.Infinity,
float maxDepth = Mathf.Infinity);






### Parameters



| Parameter | Description |
| --- | --- |
| point | The center of the circle. |
| radius | The radius of the circle. |
| layerMask | Filter to check objects only on specified layers. |
| minDepth | Only include objects with a Z coordinate (depth) greater than or equal to this value. |
| maxDepth | Only include objects with a Z coordinate (depth) less than or equal to this value. |





### Returns



**Collider2D[]**
        The cast results.





### Description



Get a list of all Colliders that fall within a circular area.





This function is similar to [OverlapCircle](Physics2D.OverlapCircle.html) except that all Colliders that fall within the circle are returned. The Colliders in the returned array are sorted in order of increasing Z coordinate. An empty array is returned if there are no Colliders within the circle.

Note that this function will allocate memory for the returned Collider2D array. You can use [Physics2D](Physics2D.Physics2D.html).OverlapCircle to avoid this overhead if you need to make the check frequently.

Additional resources: [OverlapCircle](Physics2D.OverlapCircle.html).


            
