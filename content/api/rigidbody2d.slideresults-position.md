This version of Unity is unsupported.



# [Rigidbody2D.SlideResults](Rigidbody2D.SlideResults.html).position




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












                    public [Vector2](Vector2.html) position;






### Description



The position that was calculate as a target position to move to when performing a [Rigidbody2D.Slide](Rigidbody2D.Slide.html).





When a [Rigidbody2D.Slide](Rigidbody2D.Slide.html) command is complete, this will be the position that both the [Rigidbody2D.position](Rigidbody2D-position.html) and [Transform.position](Transform-position.html) are set to however, if [Rigidbody2D.SlideMovement.useSimulationMove](Rigidbody2D.SlideMovement-useSimulationMove.html) is enabled, then neither the [Rigidbody2D.position](Rigidbody2D-position.html) and [Transform.position](Transform-position.html) will be changd upon return but a [Rigidbody2D.MovePosition](Rigidbody2D.MovePosition.html) would have been called using this position. If [Rigidbody2D.SlideMovement.useNoMove](Rigidbody2D.SlideMovement-useNoMove.html) is enabled then no move is processed at all but is simply returned here.

Additional resources: [Rigidbody2D.SlideMovement.useNoMove](Rigidbody2D.SlideMovement-useNoMove.html), [Rigidbody2D.SlideMovement.useSimulationMove](Rigidbody2D.SlideMovement-useSimulationMove.html), [Rigidbody2D.Slide](Rigidbody2D.Slide.html) and [SlideMovement](Rigidbody2D.SlideMovement.html).


            
