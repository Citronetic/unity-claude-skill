This version of Unity is unsupported.



# [WheelCollider](WheelCollider.html).GetGroundHit




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




                [Switch to Manual](../Manual/class-WheelCollider.html)










## Declaration

public bool GetGroundHit(out [WheelHit](WheelHit.html) hit);






### Description



Gets ground collision data for the wheel.





If the wheel collides with something, returns `true` and fills the `hit` structure. If the wheel
is not colliding, returns `false` and leaves `hit` structure unchanged.

The reported hit is always the closest one. Because the tire friction model does not automatically
respond to other [PhysicsMaterial](PhysicsMaterial.html)s, any simulation of different ground materials must be done
manually by adjusting [forwardFriction](WheelCollider-forwardFriction.html) and [sidewaysFriction](WheelCollider-sidewaysFriction.html) based on collider's
material returned here.


            
