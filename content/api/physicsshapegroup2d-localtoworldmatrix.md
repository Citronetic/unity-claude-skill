This version of Unity is unsupported.



# [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html).localToWorldMatrix




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












                    public [Matrix4x4](Matrix4x4.html) localToWorldMatrix;






### Description



Gets or sets a matrix that transforms the [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html) vertices from local space into world space.





When retrieving a [PhysicsShapeGroup2D](PhysicsShapeGroup2D.html) via [Rigidbody2D.GetShapes](Rigidbody2D.GetShapes.html) or [Collider2D.GetShapes](Collider2D.GetShapes.html), this matrix will be set to the pose of the [Rigidbody2D](Rigidbody2D.html) unless a [Rigidbody2D](Rigidbody2D.html) is not available in which case the matrix it set to [Matrix4x4.identity](Matrix4x4-identity.html).


            
