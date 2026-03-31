This version of Unity is unsupported.



# [Texture](Texture.html).anisoLevel




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












                    public int anisoLevel;






### Description



Defines the anisotropic filtering level of the Texture.





Anisotropic filtering makes Textures look better when viewed at a shallow angle, but it can be slower to process on the GPU. Anisotropic filtering is commonly used to improve the appearance of floor, ground or road Textures.

The value range of this variable is 0 to 16. A value of 1 equals no filtering applied and 16 equals full filtering applied.  As the value gets bigger, the Texture is clearer at shallow angles. Lower values mean the Texture is more blurry at shallow angles.

When the `anisoLevel` value is 0 and in **Quality Settings**, **Anisotropic Filtering** is set to **Forced On**, Unity does not apply anisotropic filtering. You can use this to disable anisotropic filtering for a Texture that would behave unpredictably with anisotropic filtering applied.

When the `anisoLevel` value is between 1 and 9, and in **Quality Settings**, **Anisotropic Filtering** is set to **Forced On**, Unity sets the `anisoLevel` to 9. If the value is higher than 9, Unity clamps it between 9 and 16.

If you use the Metal, Vulkan and OpenGL APIs, you can control mipmap filtering and anisotropic filtering levels independently. When you enable anisotropic filtering in any other graphics APIs, Unity also enables trilinear filtering.

Additional resources: [Texture assets](../Manual/Textures.html).


            
