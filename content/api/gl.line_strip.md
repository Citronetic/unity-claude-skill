This version of Unity is unsupported.



# [GL](GL.html).LINE_STRIP




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












                    public static int LINE_STRIP;






### Description



Mode for [Begin](GL.Begin.html): draw line strip.





Draws lines between each vertex passed, from the beginning to the end. If you pass three vertices, A, B and C, two lines are drawn: one between A and B, and one between B and C.

To set up the screen for drawing in 2D, use [GL.LoadOrtho](GL.LoadOrtho.html) or [GL.LoadPixelMatrix](GL.LoadPixelMatrix.html).
To set up the screen for drawing in 3D, use [GL.LoadIdentity](GL.LoadIdentity.html) followed by [GL.MultMatrix](GL.MultMatrix.html) with the desired transformation matrix.

Additional resources: [GL.Begin](GL.Begin.html), [GL.End](GL.End.html).


            
