This version of Unity is unsupported.



# [Transform](Transform.html).localToWorldMatrix




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




                [Switch to Manual](../Manual/class-Transform.html)







                    public [Matrix4x4](Matrix4x4.html) localToWorldMatrix;






### Description



Matrix that transforms a point from local space into world space (Read Only).





You can also use [Transform.TransformPoint](Transform.TransformPoint.html) to transform coordinates instead of this matrix.

Do not use this matrix to set shader parameters or to perform calculations related to rendering. Use [Renderer.localToWorldMatrix](Renderer-localToWorldMatrix.html) instead.


            
