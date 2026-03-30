This version of Unity is unsupported.



# [Rigidbody2D.SlideResults](Rigidbody2D.SlideResults.html).surfaceHit




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












                    public [RaycastHit2D](RaycastHit2D.html) surfaceHit;






### Description



The specific contact found when a slide movement is performed with [Rigidbody2D.Slide](Rigidbody2D.Slide.html).





When a slide along a surface occurs, a surface contact will be detected either from using a [Rigidbody2D.SlideMovement.surfaceAnchor](Rigidbody2D.SlideMovement-surfaceAnchor.html) or using Rigidbody2D.SlideMovement.gravityScale.

In short, if the movement anchors to a surface or if gravity causes a contact with the surface, this [RaycastHit2D](RaycastHit2D.html) represents that contact.

**NOTE:** This contact does not necessarily represent the surface that movement is tangent to. That is represented by [Rigidbody2D.SlideResults.slideHit](Rigidbody2D.SlideResults-slideHit.html).

Additional resources: [Rigidbody2D.SlideResults.slideHit](Rigidbody2D.SlideResults-slideHit.html), [Rigidbody2D.Slide](Rigidbody2D.Slide.html) and [SlideMovement](Rigidbody2D.SlideMovement.html).


            
