This version of Unity is unsupported.



# [Handles](Handles.html).matrix




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












                    public static [Matrix4x4](Matrix4x4.html) matrix;






### Description



Matrix for all handle operations. This is used by functions in [HandleUtility](HandleUtility.html) and [Handles](Handles.html) to transform controls.





To make all Handle routines work in the local coordinate space of a GameObject, set this to [Transform.localToWorldMatrix](Transform-localToWorldMatrix.html).

The handles matrix is reset to identity at the end of every frame. It is considered best practice to store and restore the state of this matrix during use. See [DrawingScope](Handles.DrawingScope.html) for a convenient means of preserving handle global state.


            
