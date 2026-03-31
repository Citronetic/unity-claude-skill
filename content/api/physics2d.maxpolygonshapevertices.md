This version of Unity is unsupported.



# [Physics2D](Physics2D.html).MaxPolygonShapeVertices




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












                    public static int MaxPolygonShapeVertices;






### Description



The maximum number of vertices allowed per primitive polygon shape type ([PhysicsShapeType2D.Polygon](PhysicsShapeType2D.Polygon.html)). (Read Only)





The low-level physics engine sets a maximum number of vertices allowed per convex polygon shape. This count is set to be a balance between flexibility and performance. Any time a polygon shape is encountered, all of its edges need to iterated to calculate collisions or perform queries. A value too large results in a lot of time discounting polygons. A value too small reduces the number of useful polygon shapes that can be created.

**NOTE**: This is a compile-time constant that cannot be changed.


            
