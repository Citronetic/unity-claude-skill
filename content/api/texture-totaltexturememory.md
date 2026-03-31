This version of Unity is unsupported.



# [Texture](Texture.html).totalTextureMemory




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












                    public static ulong totalTextureMemory;






### Description



The total texture memory, in bytes, that Unity would use if all textures are loaded at full resolution.





This is a theoretical value that does not take into account any input from the streaming system or manual adjustments, such as setting the [Texture2D.requestedMipmapLevel](Texture2D-requestedMipmapLevel.html) directly. To see a texture memory value that takes these inputs into account, use [Texture.desiredTextureMemory](Texture-desiredTextureMemory.html).

The value only considers instances of Texture2D and CubeMap textures. It does not include any other texture types. Furthermore, it does not track any 2D and CubeMap textures created internally by the Unity Editor.


            
