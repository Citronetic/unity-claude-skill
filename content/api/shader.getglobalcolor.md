This version of Unity is unsupported.



# [Shader](Shader.html).GetGlobalColor




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

public static [Color](Color.html) GetGlobalColor(string name);






## Declaration

public static [Color](Color.html) GetGlobalColor(int nameID);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | The name ID of the property retrieved by Shader.PropertyToID. |
| name | The name of the property. |





### Description



Gets a global color property for all shaders previously set using [SetGlobalColor](Shader.SetGlobalColor.html).





It is only an alias to [GetGlobalVector](Shader.GetGlobalVector.html) that the vector value is cast to color. No sRGB-linear conversion is done during the function call.

Additional resources: [GetGlobalVector](Shader.GetGlobalVector.html).


            
