This version of Unity is unsupported.



# [MaterialEditor](MaterialEditor.html).ShaderProperty




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

public void ShaderProperty([MaterialProperty](MaterialProperty.html) prop,
string label);






## Declaration

public void ShaderProperty([Rect](Rect.html) position,
[MaterialProperty](MaterialProperty.html) prop,
string label);






### Description



Handes UI for one shader property.





This function will draw appropriate UI for the given shader property, depending on its type.

Any custom [MaterialPropertyDrawer](MaterialPropertyDrawer.html) objects defined for this property in the shader will also be applied. If you want to draw the "default" UI without any custom drawers, use [DefaultShaderProperty](MaterialEditor.DefaultShaderProperty.html) function.

Additional resources: [MaterialProperty](MaterialProperty.html), [MaterialPropertyDrawer](MaterialPropertyDrawer.html).


            
