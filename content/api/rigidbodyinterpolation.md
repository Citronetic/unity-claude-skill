This version of Unity is unsupported.



# RigidbodyInterpolation





enumeration


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



[Rigidbody](Rigidbody.html) interpolation mode.





Interpolation calculates the pose of a Rigidbody in frames that fall between physics timestep updates, to reduce the appearance of visible jitter. It is particularly useful for player character GameObjects, and any other GameObject that the camera follows.
By default, interpolation is disabled. When interpolation or extrapolation is enabled, the physics system takes control of the Rigidbody's transform. For this reason, you should follow any direct (non-physics) change to the transform with a [Physics.SyncTransforms](Physics.SyncTransforms.html) call. Otherwise, Unity ignores any transform change that does not originate from the physics system.

For the main characters or vehicles that are followed by the camera it is recommended to
use interpolation. For any other rigidbodies it is recommended not to use interpolation.

Additional resources: [Rigidbody.interpolation](Rigidbody-interpolation.html).





### Properties



| Property | Description |
| --- | --- |
| None | No Interpolation. |
| Interpolate | Interpolation will always lag a little bit behind but can be smoother than extrapolation. |
| Extrapolate | Extrapolation will predict the position of the rigidbody based on the current velocity. |


            
