This version of Unity is unsupported.



# [TextureFormat](TextureFormat.html).BC6H




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



HDR compressed color texture format.





BC6H format compresses RGB HDR textures to 8 bits per pixel, and is supported on DX11-class PC hardware, as well as PS4 and XboxOne.

It is a good format for compressing floating point texture data (skyboxes, reflection probes, lightmaps, emissive textures), e.g.
textures that uncompressed would be in [RGBAHalf](TextureFormat.RGBAHalf.html) or [RGBAFloat](TextureFormat.RGBAFloat.html) formats. Note that BC6H does not retain the alpha channel; it only stores RGB color channels.

When loading BC6H textures on a platform that doesn't support it, the texture decompresses into [RGBAHalf](TextureFormat.RGBAHalf.html) format (64 bits per pixel) at load time.

Additional resources: [Texture2D.format](Texture2D-format.html), [texture assets](../Manual/Textures.html).


            
