This version of Unity is unsupported.



# [MaterialEditor](MaterialEditor.html).TexturePropertySingleLine




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

public [Rect](Rect.html) TexturePropertySingleLine([GUIContent](GUIContent.html) label,
[MaterialProperty](MaterialProperty.html) textureProp);






## Declaration

public [Rect](Rect.html) TexturePropertySingleLine([GUIContent](GUIContent.html) label,
[MaterialProperty](MaterialProperty.html) textureProp,
[MaterialProperty](MaterialProperty.html) extraProperty1);






## Declaration

public [Rect](Rect.html) TexturePropertySingleLine([GUIContent](GUIContent.html) label,
[MaterialProperty](MaterialProperty.html) textureProp,
[MaterialProperty](MaterialProperty.html) extraProperty1,
[MaterialProperty](MaterialProperty.html) extraProperty2);






### Parameters



| Parameter | Description |
| --- | --- |
| label | The label used for the texture property. |
| textureProp | The texture property. |
| extraProperty1 | First optional property inlined after the texture property. |
| extraProperty2 | Second optional property inlined after the extraProperty1. |





### Returns



**Rect**
        Returns the Rect used.





### Description



Method for showing a texture property control with additional inlined properites.





This method can be used if multiple controls is wanted on the same line. The texture is shown using the mini thumbnail. Usefull for compact representation of properties of up to three material properties.
Additional resources: [TexturePropertyTwoLines](MaterialEditor.TexturePropertyTwoLines.html), [ShaderGUI](ShaderGUI.html).


            
