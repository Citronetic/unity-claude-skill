This version of Unity is unsupported.



# PhysicsShapeGroup2D Constructor




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

public PhysicsShapeGroup2D(int shapeCapacity = 1,
int vertexCapacity = 8);






### Parameters



| Parameter | Description |
| --- | --- |
| shapeCapacity | The initial capacity of the PhysicsShape2D list used to contain the shapes. |
| vertexCapacity | The initial capacity of the vertices list used to contain the shape geometry. |





### Description



Initializes and returns an instance of [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html). The shape group will be empty and ready for use by [Collider2D.GetShapes](Collider2D.GetShapes.html), [Rigidbody2D.GetShapes](Rigidbody2D.GetShapes.html) or manually adding shapes.





Both the `shapeCapacity` and  `vertexCapacity` should be set high enough so that new allocations are not required and therefore no garbage collection work is produced.


            
