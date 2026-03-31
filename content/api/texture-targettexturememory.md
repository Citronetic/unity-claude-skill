This version of Unity is unsupported.



# [Texture](Texture.html).targetTextureMemory




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












                    public static ulong targetTextureMemory;






### Description



Total texture memory usage in bytes after applying the memory budget and loading all textures.





Indicates the memory allocated to textures in the scene after loading all textures and applying the [Texture memory budget](../Manual/TextureStreaming-configure.html#memory-budget.html), considering mipmap streaming settings. As Unity loads or unloads texture mipmaps, the [Texture.currentTextureMemory](Texture-currentTextureMemory.html) value approaches the `targetTextureMemory`.

The value only considers instances of Texture2D and CubeMap textures. It does not include any other texture types. Furthermore, it does not track any 2D and CubeMap textures created internally by the Unity Editor.


            
