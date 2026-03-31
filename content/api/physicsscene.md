This version of Unity is unsupported.



# PhysicsScene





struct in
          UnityEngine



/



Implemented in:[UnityEngine.PhysicsModule](UnityEngine.PhysicsModule.html)


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



















### Description



Represents a single instance of a 3D physics Scene.





### Public Methods



| Method | Description |
| --- | --- |
| BoxCast | Casts the box along a ray and returns detailed information on what was hit. |
| CapsuleCast | Casts a capsule against all colliders in this physics scene and returns detailed information on what was hit. |
| InterpolateBodies | Interpolates Rigidbodies in this PhysicsScene. |
| IsEmpty | Gets whether the physics Scene is empty or not. |
| IsValid | Gets whether the physics Scene is valid or not. |
| OverlapBox | Find all colliders touching or inside of the given box, and store them into the buffer. |
| OverlapCapsule | Check the given capsule against the physics world and return all overlapping colliders in the user-provided buffer. |
| OverlapSphere | Computes and stores colliders touching or inside the sphere into the provided buffer. |
| Raycast | Casts a ray, from point origin, in direction direction, of length maxDistance, against all colliders in the Scene. |
| ResetInterpolationPoses | Resets the Transform positions of interpolated and extrapolated Rigidbodies in this PhysicsScene to Rigidbody.position and Transform rotations to Rigidbody.rotation. |
| RunSimulationStages | Runs specified physics simulation stages on this physics scene. |
| Simulate | Simulate physics associated with this PhysicsScene. |
| SphereCast | Casts a sphere along a ray and returns detailed information on what was hit. |


            
