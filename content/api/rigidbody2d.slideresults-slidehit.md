This version of Unity is unsupported.



# [Rigidbody2D.SlideResults](Rigidbody2D.SlideResults.html).slideHit




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












                    public [RaycastHit2D](RaycastHit2D.html) slideHit;






### Description



The specific contact found when a slide movement is performed with [Rigidbody2D.Slide](Rigidbody2D.Slide.html).





When a slide along a surface occurs, the slide may hit a surface tangent to the movement. This [RaycastHit2D](RaycastHit2D.html) represents that contact.

It is possible that movement along a surface occurs without any contact to a surface. In this case, the [RaycastHit2D](RaycastHit2D.html) will be invalid.

**NOTE:** This contact does not represent the surface itself that the movement is tangent to. That is represented by [Rigidbody2D.SlideResults.surfaceHit](Rigidbody2D.SlideResults-surfaceHit.html).

Additional resources: [Rigidbody2D.SlideResults.surfaceHit](Rigidbody2D.SlideResults-surfaceHit.html), [Rigidbody2D.Slide](Rigidbody2D.Slide.html) and [SlideMovement](Rigidbody2D.SlideMovement.html).


            
