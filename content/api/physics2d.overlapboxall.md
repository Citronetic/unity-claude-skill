This version of Unity is unsupported.



# [Physics2D](Physics2D.html).OverlapBoxAll




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

public static Collider2D[] OverlapBoxAll([Vector2](Vector2.html) point,
[Vector2](Vector2.html) size,
float angle,
int layerMask = DefaultRaycastLayers,
float minDepth = -Mathf.Infinity,
float maxDepth = Mathf.Infinity);






### Parameters



| Parameter | Description |
| --- | --- |
| point | The center of the box. |
| size | The size of the box. |
| angle | The angle of the box. |
| layerMask | Filter to check objects only on specific layers. |
| minDepth | Only include objects with a Z coordinate (depth) greater than this value. |
| maxDepth | Only include objects with a Z coordinate (depth) less than this value. |





### Returns



**Collider2D[]**
        The cast results returned.





### Description



Get a list of all Colliders that fall within a box area.





This function is similar to [OverlapBox](Physics2D.OverlapBox.html) except that all Colliders that fall within the box are returned. The Colliders in the returned array are sorted in order of increasing Z coordinate. An empty array is returned if there are no Colliders within the box.

Note that this function will allocate memory for the returned Collider2D array.

Additional resources: [OverlapBox](Physics2D.OverlapBox.html).


            
