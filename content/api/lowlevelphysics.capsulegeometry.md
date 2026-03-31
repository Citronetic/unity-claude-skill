This version of Unity is unsupported.



# CapsuleGeometry





struct in
          UnityEngine.LowLevelPhysics



/



Implemented in:[UnityEngine.PhysicsModule](UnityEngine.PhysicsModule.html)


                  Leave feedback





Implements interfaces:[IGeometry](LowLevelPhysics.IGeometry.html)




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



















### Description



Contains the basic geometric shape of a capsule.





When Unity retrieves the geometry from the [CapsuleCollider](CapsuleCollider.html), the [CapsuleCollider.direction](CapsuleCollider-direction.html) is not included. For this reason, you should assume the direction is always along the X axis.





### Properties



| Property | Description |
| --- | --- |
| GeometryType | Returns the geometry type of this shape, which is CapsuleGeometry. |
| HalfLength | The distance from the center of the shape to the center of either half-sphere at the caps. |
| Radius | The radius of the half-sphere at either cap of the capsule. |





### Constructors



| Constructor | Description |
| --- | --- |
| CapsuleGeometry | Create a capsule shape with the provided parameters. |


            
