This version of Unity is unsupported.



# [GeometryHolder](LowLevelPhysics.GeometryHolder.html).As




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

public T As();






### Returns



**T**
        Returns the basic geometric shape which is stored in the GeometryHolder.





### Description



Return the specified geometric shape stored inside this Geometry Holder object.





This function throws an InvalidOperationException if you try to request a geometric shape that is not stored in the GeometryHolder.

In the case of [CapsuleGeometry](LowLevelPhysics.CapsuleGeometry.html), when Unity retrieves the shape from a [CapsuleCollider](CapsuleCollider.html) component, the [CapsuleCollider.direction](CapsuleCollider-direction.html) is not included. For this reason, you should assume the direction is always along the X axis.

Additional resources: [BoxGeometry](LowLevelPhysics.BoxGeometry.html), [SphereGeometry](LowLevelPhysics.SphereGeometry.html), [CapsuleGeometry](LowLevelPhysics.CapsuleGeometry.html), [ConvexMeshGeometry](LowLevelPhysics.ConvexMeshGeometry.html), [TriangleMeshGeometry](LowLevelPhysics.TriangleMeshGeometry.html), [TerrainGeometry](LowLevelPhysics.TerrainGeometry.html).


            
