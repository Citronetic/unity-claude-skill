This version of Unity is unsupported.



# [Physics2D](Physics2D.html).OverlapAreaAll




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

public static Collider2D[] OverlapAreaAll([Vector2](Vector2.html) pointA,
[Vector2](Vector2.html) pointB,
int layerMask = DefaultRaycastLayers,
float minDepth = -Mathf.Infinity,
float maxDepth = Mathf.Infinity);






### Parameters



| Parameter | Description |
| --- | --- |
| pointA | One corner of the rectangle. |
| pointB | Diagonally opposite the point A corner of the rectangle. |
| layerMask | Filter to check objects only on specific layers. |
| minDepth | Only include objects with a Z coordinate (depth) greater than or equal to this value. |
| maxDepth | Only include objects with a Z coordinate (depth) less than or equal to this value. |





### Returns



**Collider2D[]**
        The cast results returned.





### Description



Get a list of all Colliders that fall within a rectangular area.





This function is similar to [OverlapArea](Physics2D.OverlapArea.html) except that all Colliders that fall within the area are returned. The Colliders in the returned array are sorted in order of increasing Z coordinate. An empty array is returned if there are no Colliders within the area.

Note that this function will allocate memory for the returned Collider2D array.

Additional resources: [OverlapArea](Physics2D.OverlapArea.html).


            
