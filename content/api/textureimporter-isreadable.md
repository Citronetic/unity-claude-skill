This version of Unity is unsupported.



# [TextureImporter](TextureImporter.html).isReadable




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




                [Switch to Manual](../Manual/class-TextureImporter.html)







                    public bool isReadable;






### Description



Whether Unity stores an additional copy of the imported texture's pixel data in CPU-addressable memory.





By default, this is `false`. Set this to `true` only if you want to use the texture with methods that read, write, and manipulate the pixel data on the CPU, such as [Texture2D.GetPixels](Texture2D.GetPixels.html) or [ImageConversion.EncodeToPNG](ImageConversion.EncodeToPNG.html).

                For more information, see [Texture.isReadable](Texture-isReadable.html).

                This corresponds to the **Read/Write Enabled** setting in the [Texture Import Settings](../Manual/class-TextureImporter.html).


            
