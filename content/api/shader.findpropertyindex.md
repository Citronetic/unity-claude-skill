This version of Unity is unsupported.



# [Shader](Shader.html).FindPropertyIndex




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

public int FindPropertyIndex(string propertyName);






### Parameters



| Parameter | Description |
| --- | --- |
| propertyName | The name of the shader property. |





### Description



Finds the index of a shader property by its name.





You can use the index with functions such as [GetPropertyType](Shader.GetPropertyType.html) and [GetPropertyFlags](Shader.GetPropertyFlags.html) to get more detailed property information. If Unity cannot find a property with the given name, the function returns -1.


            
