This version of Unity is unsupported.



# [PhysicsShape2D](PhysicsShape2D.html).adjacentStart




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












                    public [Vector2](Vector2.html) adjacentStart;






### Description



Defines the position of a virtual point adjacent to the start vertex of an edge shape.





An edge shape is comprised of multiple edge (line segments) defined by all its vertices. However, when a collision occurs with the start vertex of the shape then this vertex can be used to form a collision normal, and calculate the collision response. This allows for joining of individual edge shapes to produce a continuous collision surface.

This property is identical to [EdgeCollider2D.adjacentStartPoint](EdgeCollider2D-adjacentStartPoint.html). It is only used when the [shapeType](PhysicsShape2D-shapeType.html) is [PhysicsShapeType2D.Edges](PhysicsShapeType2D.Edges.html) and [useAdjacentStart](PhysicsShape2D-useAdjacentStart.html) is true.


            
