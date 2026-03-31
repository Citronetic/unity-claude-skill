This version of Unity is unsupported.



# [MaterialEditor](MaterialEditor.html).TexturePropertyMiniThumbnail




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

public [Texture](Texture.html) TexturePropertyMiniThumbnail([Rect](Rect.html) position,
[MaterialProperty](MaterialProperty.html) prop,
string label,
string tooltip);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rect that this control should be rendered in. |
| label | Label for the field. |





### Returns



**Texture**
        Returns total height used by this control.





### Description



Draw a property field for a texture shader property that only takes up a single line height.





The thumbnail is shown to the left of the label. Note for some textures it might use more vertical space than a single line height because of an additional information box.


            
