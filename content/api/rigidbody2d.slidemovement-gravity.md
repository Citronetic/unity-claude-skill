This version of Unity is unsupported.



# [Rigidbody2D.SlideMovement](Rigidbody2D.SlideMovement.html).gravity




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












                    public [Vector2](Vector2.html) gravity;






### Description



The gravity to be applied to the slide position.





In a similar way to how the [Physics2D.gravity](Physics2D-gravity.html) works, the gravity vector here is scaled by time and applied as movement to the slide position. However, unlike [Physics2D.gravity](Physics2D-gravity.html), this has no way of increasing the velocity to produce an acceleration so if this is required then this should be maintained and the current accumulated gravity velocity passed in. The reason that gravity is separated from the provided `velocity` is that it has a different behaviour in that it can produce slippage on surfaces where the angle is higher than [Rigidbody2D.SlideMovement.gravitySlipAngle](Rigidbody2D.SlideMovement-gravitySlipAngle.html).

**NOTE:** By default this is (0, -9.81). Using [Vector2.zero](Vector2-zero.html) results in no gravity being applied.

Additional resources: [Rigidbody2D.Slide](Rigidbody2D.Slide.html) and [SlideResults](Rigidbody2D.SlideResults.html).


            
