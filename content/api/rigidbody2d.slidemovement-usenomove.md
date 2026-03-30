This version of Unity is unsupported.



# [Rigidbody2D.SlideMovement](Rigidbody2D.SlideMovement.html).useNoMove




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












                    public bool useNoMove;






### Description



Controls if any [Rigidbody2D](Rigidbody2D.html) movement will happen or not.





When a slide movement is complete, a new [Rigidbody2D](Rigidbody2D.html) position has been calculated, however it may be preferred to not perform the movement of the [Rigidbody2D](Rigidbody2D.html) at all.

When this is enabled, no movement will occur.  The [Rigidbody2D.SlideResults.position](Rigidbody2D.SlideResults-position.html) always returns the calculated position so that can be used to move the [Rigidbody2D](Rigidbody2D.html).

**NOTE:** If this is enabled then a  [Rigidbody2D.SlideMovement.useSimulationMove](Rigidbody2D.SlideMovement-useSimulationMove.html) cannot be used and should be disabled.

Additional resources: [Rigidbody2D.SlideResults.position](Rigidbody2D.SlideResults-position.html), [Rigidbody2D.Slide](Rigidbody2D.Slide.html) and [SlideResults](Rigidbody2D.SlideResults.html).


            
