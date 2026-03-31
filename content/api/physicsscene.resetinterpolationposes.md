This version of Unity is unsupported.



# [PhysicsScene](PhysicsScene.html).ResetInterpolationPoses




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

public void ResetInterpolationPoses();






### Description



Resets the [Transform](Transform.html) positions of interpolated and extrapolated Rigidbodies in this [PhysicsScene](PhysicsScene.html) to [Rigidbody.position](Rigidbody-position.html) and [Transform](Transform.html) rotations to [Rigidbody.rotation](Rigidbody-rotation.html).





Call this method before simulating to prevent Transform poses of interpolated and extrapolated Rigidbodies from getting synced to the physics system. If multiple [PhysicsScene.Simulate](PhysicsScene.Simulate.html) calls are to be made this frame, it's enough to call this method only once, before the first simulation.

This method is called automatically for the default [PhysicsScene](PhysicsScene.html) and therefore any manual calls on the [Physics.defaultPhysicsScene](Physics-defaultPhysicsScene.html) will fail.

Additional resources: [PhysicsScene.InterpolateBodies](PhysicsScene.InterpolateBodies.html).


            
