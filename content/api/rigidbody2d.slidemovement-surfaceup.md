This version of Unity is unsupported.



# [Rigidbody2D.SlideMovement](Rigidbody2D.SlideMovement.html).surfaceUp




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












                    public [Vector2](Vector2.html) surfaceUp;






### Description



A reference direction used to calculate contact angles.





Both [Rigidbody2D.SlideMovement.surfaceSlideAngle](Rigidbody2D.SlideMovement-surfaceSlideAngle.html) and [Rigidbody2D.SlideMovement.gravitySlipAngle](Rigidbody2D.SlideMovement-gravitySlipAngle.html) use this to determine the surface angle.

The magnitude of this vector is typically unimportant as it is automatically normalized, however, if the magnitude is zero then both the [Rigidbody2D.SlideMovement.surfaceSlideAngle](Rigidbody2D.SlideMovement-surfaceSlideAngle.html) and [Rigidbody2D.SlideMovement.gravitySlipAngle](Rigidbody2D.SlideMovement-gravitySlipAngle.html) will be ignored resulting in always sliding and slipping. This can be used for moving in a "top down" view where gravity is not used and slipping is always required in all directions.

**NOTE:** By default, this value is [Vector2.up](Vector2-up.html).

Additional resources: [Rigidbody2D.Slide](Rigidbody2D.Slide.html) and [SlideResults](Rigidbody2D.SlideResults.html).


            
