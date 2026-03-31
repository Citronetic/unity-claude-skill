This version of Unity is unsupported.



# [Shader](Shader.html).SetGlobalMatrix




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

public static void SetGlobalMatrix(string name,
[Matrix4x4](Matrix4x4.html) value);






## Declaration

public static void SetGlobalMatrix(int nameID,
[Matrix4x4](Matrix4x4.html) value);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | The name ID of the property retrieved by Shader.PropertyToID. |
| name | The name of the property. |





### Description



Sets a global matrix property for all shaders.





Global properties are used if a shader needs them but the material does
not have them defined (for example, if the shader does not expose them
in `Properties` block).

Additional resources: [SetGlobalColor](Shader.SetGlobalColor.html), [SetGlobalFloat](Shader.SetGlobalFloat.html); [Material](Material.html) class, [ShaderLab documentation](../Manual/Shaders.html).


            
