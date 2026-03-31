This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).MarkLateLatchMatrixShaderPropertyID




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

public void MarkLateLatchMatrixShaderPropertyID([Rendering.CameraLateLatchMatrixType](Rendering.CameraLateLatchMatrixType.html) matrixPropertyType,
int shaderPropertyID);






### Parameters



| Parameter | Description |
| --- | --- |
| matrixPropertyType | Camera matrix property type to be late latched. |
| shaderPropertyID | Shader property name id. |





### Description



Mark a global shader property id to be late latched.  Possible shader properties include view, inverseView, viewProjection, and inverseViewProjection matrices. The Universal Render Pipeline (URP) uses this function to support late latching of shader properties. If you call this function when using built-in Unity rendering or the High-Definition Rendering Pipeline (HDRP), the results are ignored.


            
