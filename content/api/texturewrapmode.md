This version of Unity is unsupported.



# TextureWrapMode





enumeration


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



















### Description



Wrap mode for textures.





Corresponds to the settings in a [texture inspector](../Manual/class-TextureImporter.html).
Wrap mode determines how texture is sampled when texture coordinates are outside of
the typical 0..1 range. For example, [Repeat](TextureWrapMode.Repeat.html) makes the texture tile, whereas
[Clamp](TextureWrapMode.Clamp.html) makes the texture edge pixels be stretched when outside of of 0..1 range.

Additional resources: [Texture.wrapMode](Texture-wrapMode.html), [texture assets](../Manual/class-TextureImporter.html).





### Properties



| Property | Description |
| --- | --- |
| Repeat | Tiles the texture, creating a repeating pattern. |
| Clamp | Clamps the texture to the last pixel at the edge. |
| Mirror | Tiles the texture, creating a repeating pattern by mirroring it at every integer boundary. |
| MirrorOnce | Mirrors the texture once, then clamps to edge pixels. |


            
