This version of Unity is unsupported.



# [ShaderGUI](ShaderGUI.html).AssignNewShaderToMaterial




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

public void AssignNewShaderToMaterial([Material](Material.html) material,
[Shader](Shader.html) oldShader,
[Shader](Shader.html) newShader);






### Parameters



| Parameter | Description |
| --- | --- |
| material | The material the newShader should be assigned to. |
| oldShader | Previous shader. |
| newShader | New shader to assign to the material. |





### Description



This method is called when a new shader has been selected for a Material.





Can be used for setting up the new shader based on state from the previous shader. Ensure to call *base.AssignNewShaderToMaterial* to actually set *material.shader*.


            
