This version of Unity is unsupported.



# [Rigidbody2D.SlideMovement](Rigidbody2D.SlideMovement.html).layerMask




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












                    public [LayerMask](LayerMask.html) layerMask;






### Description



A [LayerMask](LayerMask.html) that will be used when determining what [Collider2D](Collider2D.html) should be detected.





This [Layer](Experimental.GraphView.GraphView.Layer.html) will only be used when [Rigidbody2D.SlideMovement.useLayerMask](Rigidbody2D.SlideMovement-useLayerMask.html) is true in which case, the specified [LayerMask](LayerMask.html) will be used to determine which [Collider2D](Collider2D.html) will be detected and any Layer Collision Matrix configuration will be ignored.

In other words, this [LayerMask](LayerMask.html) can be used to override and explicitly specify which layers will be used to detect [Collider2D](Collider2D.html).

Additional resources: [Rigidbody2D.SlideMovement.useLayerMask](Rigidbody2D.SlideMovement-useLayerMask.html), [Rigidbody2D.Slide](Rigidbody2D.Slide.html) and [SlideResults](Rigidbody2D.SlideResults.html).


            
