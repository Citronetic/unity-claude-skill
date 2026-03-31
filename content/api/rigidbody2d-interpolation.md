This version of Unity is unsupported.



# [Rigidbody2D](Rigidbody2D.html).interpolation




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












                    public [RigidbodyInterpolation2D](RigidbodyInterpolation2D.html) interpolation;






### Description



Physics interpolation used between updates.





Interpolation is used to estimate the position of the Rigidbody between physics updates. It can be useful to switch this on when the graphics update is much more frequent than the physics update because the object can appear to move along in jerky "hops" rather than having smooth motion. With *interpolate* mode, motion is smoothed based on the object's positions in previous frames. *Extrapolate* mode smooths motion based on an estimate of its position in the next frame. The choice of mode depends of the dynamics of the object during gameplay.

Additional resources: [Rigidbody.interpolation](Rigidbody-interpolation.html).


            
