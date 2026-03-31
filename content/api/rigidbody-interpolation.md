This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).interpolation




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




                [Switch to Manual](../Manual/class-Rigidbody.html)







                    public [RigidbodyInterpolation](RigidbodyInterpolation.html) interpolation;






### Description



Interpolation provides a way to manage the appearance of jitter in the movement of your Rigidbody GameObjects at run time.





Interpolation calculates the pose of a Rigidbody in frames that fall between physics timestep updates, to reduce the appearance of visible jitter. It is particularly useful for player character GameObjects, and any other GameObject that the camera follows.
By default, interpolation is disabled. When interpolation or extrapolation is enabled, the physics system takes control of the Rigidbody's transform. For this reason, you should follow any direct (non-physics) change to the transform with a [Physics.SyncTransforms](Physics.SyncTransforms.html) call. Otherwise, Unity ignores any transform change that does not originate from the physics system.
Physics simulation runs at discrete timesteps, while graphics are rendered at variable frame rates.
This can lead to visual jitter on some GameObjects, because the physics and graphics updates are not synchronized.
The visual effect is particularly noticeable on GameObjects that the camera follows (such as player characters and vehicles).
It is recommended to turn on interpolation for the main character but disable it for everything else.


            
