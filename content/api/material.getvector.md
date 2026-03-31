This version of Unity is unsupported.



# [Material](Material.html).GetVector




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




                [Switch to Manual](../Manual/class-Material.html)










## Declaration

public [Vector4](Vector4.html) GetVector(string name);






## Declaration

public [Vector4](Vector4.html) GetVector(int nameID);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | The name ID of the property retrieved by Shader.PropertyToID. |
| name | The name of the property. |





### Description



Get a named vector value.





Four component vectors and colors are the same in Unity shaders. `GetVector` does exactly the same
as [GetColor](Material.GetColor.html) just the input data type is different (`xyzw` in the vector becomes `rgba` in the color).
The only difference is that color values are converted from sRGB to Linear value, when using linear color space
(see [properties in shader programs](../Manual/SL-PropertiesInPrograms.html)).

Additional resources: [GetColor](Material.GetColor.html), [SetVector](Material.SetVector.html), [Shader.PropertyToID](Shader.PropertyToID.html).


            
