This version of Unity is unsupported.



# [GL](GL.html).MultMatrix




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















## Declaration

public static void MultMatrix([Matrix4x4](Matrix4x4.html) m);






### Description



Sets the current model matrix to the one specified.





The model matrix is typically the local-to-world matrix of the object being drawn.

Changing the model, view or projection matrices overrides the current rendering matrices.
It is good practice to save and restore these matrices using [GL.PushMatrix](GL.PushMatrix.html) and [GL.PopMatrix](GL.PopMatrix.html).


            
