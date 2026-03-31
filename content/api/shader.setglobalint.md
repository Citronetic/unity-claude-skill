This version of Unity is unsupported.



# [Shader](Shader.html).SetGlobalInt




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

public static void SetGlobalInt(string name,
int value);






## Declaration

public static void SetGlobalInt(int nameID,
int value);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | The name ID of the property retrieved by Shader.PropertyToID. |
| name | The name of the property. |





### Description



This method is deprecated. Use [SetGlobalFloat](Shader.SetGlobalFloat.html) or [SetGlobalInteger](Shader.SetGlobalInteger.html) instead.





Internally float and integer shader properties are treated exactly the same, so this function is just an alias to [SetGlobalFloat](Shader.SetGlobalFloat.html).


            
