This version of Unity is unsupported.



# PhysicsScene2D





struct in
          UnityEngine



/



Implemented in:[UnityEngine.Physics2DModule](UnityEngine.Physics2DModule.html)


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



Represents a single instance of a 2D physics Scene.





A 2D physics Scene owns all 2D physics component objects added to it and can perform a simulation of them as well as execute queries against them.  All of this functionality is isolated from any other physics Scene.  Using this, multiple independent physics Scenes can coexist.





### Properties



| Property | Description |
| --- | --- |
| subStepCount | The number of simulation sub-steps that occurred  during the last simulation step. |
| subStepLostTime | The amount of simulation time that has been "lost" due to simulation sub-stepping hitting the maximum number of allowed sub-steps. |





### Public Methods



| Method | Description |
| --- | --- |
| BoxCast | Casts a box against colliders in the PhysicsScene2D, returning the first intersection only. |
| CapsuleCast | Casts a capsule against colliders in the PhysicsScene2D, returning the first intersection only. |
| CircleCast | Casts a circle against colliders in the PhysicsScene2D, returning the first intersection only. |
| GetRayIntersection | Cast a 3D ray against the 2D Colliders in the Scene. |
| IsEmpty | Determines whether the physics Scene is empty or not. |
| IsValid | Determines whether the physics Scene is valid or not. |
| Linecast | Casts a line segment against colliders in the PhysicsScene2D, returning the first intersection only. |
| OverlapArea | Checks an area (non-rotated box) against Colliders in the PhysicsScene2D, returning the first intersection only. |
| OverlapBox | Checks a box against Colliders in the PhysicsScene2D, returning the first intersection only. |
| OverlapCapsule | Checks a capsule against Colliders in the PhysicsScene2D, returning the first intersection only. |
| OverlapCircle | Checks a circle against Colliders in the PhysicsScene2D, returning the first intersection only. |
| OverlapPoint | Checks a point against Colliders in the PhysicsScene2D, returning the first intersection only. |
| Raycast | Casts a ray against colliders in the PhysicsScene2D, returning the first intersection only. |
| Simulate | Simulate physics associated with this PhysicsScene. |





### Static Methods



| Method | Description |
| --- | --- |
| OverlapCollider | Checks a Collider against Colliders in the PhysicsScene2D, returning all intersections. |


            
