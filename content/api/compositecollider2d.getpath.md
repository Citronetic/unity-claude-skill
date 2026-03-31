This version of Unity is unsupported.



# [CompositeCollider2D](CompositeCollider2D.html).GetPath




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

public int GetPath(int index,
Vector2[] points);






### Parameters



| Parameter | Description |
| --- | --- |
| index | The index of the path from 0 to pathCount minus 1. |
| points | An ordered array of the vertices (points) in the selected path. |





### Returns



**int**
        Returns the number of points placed in the `points` array.





### Description



Gets a path from the Collider by its index.





A *path* is a cyclic sequence of line segments between points that define the outline of the Collider. Since the Collider can have holes and discontinuous parts, its shape is not necessarily defined by a single path.

Returns the number of points placed in the `points` array.

Additional resources: [GetPathPointCount](CompositeCollider2D.GetPathPointCount.html) & [pathCount](CompositeCollider2D-pathCount.html).




---








## Declaration

public int GetPath(int index,
List<Vector2> points);






### Parameters



| Parameter | Description |
| --- | --- |
| index | The index of the path from 0 to pathCount minus 1. |
| points | An ordered list of the vertices (points) in the selected path. |





### Returns



**int**
        Returns the number of points placed in the `points` list.





### Description



Gets a path from the Collider by its index.





A *path* is a cyclic sequence of line segments between points that define the outline of the Collider. Since the Collider can have holes and discontinuous parts, its shape is not necessarily defined by a single path.

The integer return value is the number of results written into the `results` list. The results list will be resized if it doesn't contain enough elements to report all the results. This prevents memory from being allocated for results when the `results` list does not need to be resized, and improves garbage collection performance when the query is performed frequently.

Additional resources: [GetPathPointCount](CompositeCollider2D.GetPathPointCount.html) & [pathCount](CompositeCollider2D-pathCount.html).


            
