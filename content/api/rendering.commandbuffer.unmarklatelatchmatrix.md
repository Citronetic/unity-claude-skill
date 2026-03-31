This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).UnmarkLateLatchMatrix




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

public void UnmarkLateLatchMatrix([Rendering.CameraLateLatchMatrixType](Rendering.CameraLateLatchMatrixType.html) matrixPropertyType);






### Parameters



| Parameter | Description |
| --- | --- |
| matrixPropertyType | Camera matrix property type to be unmarked for late latching. |





### Description



Unmark a global shader property for late latching. After unmarking, the shader property will no longer be late latched.  This function is intended for the Universal Render Pipeline (URP) to specify late latched shader properties.


            
