This version of Unity is unsupported.



# [Collider2D](Collider2D.html).GetShapeBounds




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

public [Bounds](Bounds.html) GetShapeBounds(List<Bounds> bounds,
bool useRadii,
bool useWorldSpace);






### Parameters



| Parameter | Description |
| --- | --- |
| bounds | The list used to store the returned Bounds. |
| useRadii | Whether the radius of each PhysicsShape2D should be used to calculate the Bounds or not. |
| useWorldSpace | Whether to transform all the returned Bounds to world space or leave them in their default local space. |





### Returns



**Bounds**
        Returns the combined [Bounds](Bounds.html) of the retrieved list.





### Description



Retrieves a list of [Bounds](Bounds.html) for all [PhysicsShape2D](PhysicsShape2D.html) created by this [Collider2D](Collider2D.html),  and returns the combined [Bounds](Bounds.html) of the retrieved list.





Additional resources: [Bounds](Bounds.html), [Collider2D.GetShapes](Collider2D.GetShapes.html) and [Collider2D.GetShapeHash](Collider2D.GetShapeHash.html).


            
