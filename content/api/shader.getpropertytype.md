This version of Unity is unsupported.



# [Shader](Shader.html).GetPropertyType




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




                [Switch to Manual](../Manual/class-Shader.html)










## Declaration

public [Rendering.ShaderPropertyType](Rendering.ShaderPropertyType.html) GetPropertyType(int propertyIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| propertyIndex | The index of the shader property. |





### Description



Returns the [ShaderPropertyType](Rendering.ShaderPropertyType.html) of the property at the specified index.





If Unity cannot find a property at the specified index, the function throws an `ArgumentOutOfRangeException`.


            
