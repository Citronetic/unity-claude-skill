This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).DrawTextureAlpha




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

public static void DrawTextureAlpha([Rect](Rect.html) position,
[Texture](Texture.html) image,
[ScaleMode](ScaleMode.html) scaleMode = ScaleMode.StretchToFill,
float imageAspect = 0,
float mipLevel = -1);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to draw the texture within. |
| image | Texture to display. |
| scaleMode | How to scale the image when the aspect ratio of it doesn't fit the aspect ratio to be drawn within. |
| imageAspect | Aspect ratio to use for the source image. If 0 (the default), the aspect ratio from the image is used. |
| mipLevel | What mip-level to sample. If negative, texture will be sampled normally.
It sets material _Mip property. |





### Description



Draws the alpha channel of a texture within a rectangle.





Additional resources: [GUI.color](GUI-color.html), [GUI.contentColor](GUI-contentColor.html)

[Image: image]

*Alpha texture in an Editor Window.*


            
