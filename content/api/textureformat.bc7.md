This version of Unity is unsupported.



# [TextureFormat](TextureFormat.html).BC7




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



High quality compressed color texture format.





BC7 format compresses textures to 8 bits per pixel, and is supported on DX11-class PC hardware, as well as PS4 and XboxOne.

Generally it produces better quality than the more widely available [DXT5](TextureFormat.DXT5.html) format, however it requires a modern GPU, and texture compression during import time is often slower too. Note that BC7 is not available on Mac when using OpenGL.

When loading BC7 textures on a platform that does not support it, the texture will be decompressed into [RGBA32](TextureFormat.RGBA32.html) format (32 bits per pixel) at load time.

Additional resources: [Texture2D.format](Texture2D-format.html), [texture assets](../Manual/Textures.html).


            
