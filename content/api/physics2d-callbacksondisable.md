This version of Unity is unsupported.



# [Physics2D](Physics2D.html).callbacksOnDisable




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












                    public static bool callbacksOnDisable;






### Description



Use this to control whether or not the appropriate OnCollisionExit2D or OnTriggerExit2D callbacks should be called when a [Collider2D](Collider2D.html) is disabled.





If the [Collider2D](Collider2D.html) being disabled has at least a single contact with another [Collider2D](Collider2D.html) then with this property set to true, a callback would be produced.  With the property set to false, no callback would be produced.

    Only "OnCollisionExit2D" or "OnTriggerExit2D" will be called by disabling a [Collider2D](Collider2D.html).


            
