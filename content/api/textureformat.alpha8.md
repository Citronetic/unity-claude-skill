This version of Unity is unsupported.



# [TextureFormat](TextureFormat.html).Alpha8




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



Alpha-only texture format, 8 bit integer.





This format only stores the alpha channel and doesn't hold any color data. It can be used by custom shaders for computing alpha independently of the other channels. Set the texture data in the same way as with other textures, for example using [Texture2D.SetPixels](Texture2D.SetPixels.html), except only the alpha component from [Color](Color.html) is used.

Additional resources: [Texture2D](Texture2D.html), [texture assets](../Manual/Textures.html).


            
