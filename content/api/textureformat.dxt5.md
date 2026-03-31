This version of Unity is unsupported.



# [TextureFormat](TextureFormat.html).DXT5




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



Compressed color with alpha channel texture format.





DXT5 (BC3) format compresses textures to 8 bits per pixel, and is widely supported on PC and console platforms.

It is a good format to compress most of RGBA textures. For RGB (without alpha) textures, [DXT1](TextureFormat.DXT1.html) is better. When targeting DX11-class hardware (modern PC, PS4, XboxOne), using [BC7](TextureFormat.BC7.html) might be useful, since compression quality is often better.

Additional resources: [Texture2D.format](Texture2D-format.html), [texture assets](../Manual/Textures.html).


            
