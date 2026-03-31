This version of Unity is unsupported.



# [Shader](Shader.html).GetGlobalInt




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

public static int GetGlobalInt(string name);






## Declaration

public static int GetGlobalInt(int nameID);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | The name ID of the property retrieved by Shader.PropertyToID. |
| name | The name of the property. |





### Description



This method is deprecated. Use [GetGlobalFloat](Shader.GetGlobalFloat.html) or [GetGlobalInteger](Shader.GetGlobalInteger.html) instead.





Calling this method is equivalent to calling [GetGlobalFloat](Shader.GetGlobalFloat.html) and casting the returned value to integer.
                    Additional resources: [GetGlobalFloat](Shader.GetGlobalFloat.html), [GetGlobalInteger](Shader.GetGlobalInteger.html).


            
