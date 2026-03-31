This version of Unity is unsupported.



# [Renderer](Renderer.html).localToWorldMatrix




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












                    public [Matrix4x4](Matrix4x4.html) localToWorldMatrix;






### Description



Matrix that transforms a point from local space into world space (Read Only).





Use this matrix for shader parameters and calculations related to rendering instead of [Transform.localToWorldMatrix](Transform-localToWorldMatrix.html).
The matrix from the Transform component does not take into account features such as static batching which modify a mesh's vertex coordinates.


            
