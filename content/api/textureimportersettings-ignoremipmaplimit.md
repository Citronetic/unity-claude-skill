This version of Unity is unsupported.



# [TextureImporterSettings](TextureImporterSettings.html).ignoreMipmapLimit




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












                    public bool ignoreMipmapLimit;






### Description



Enable this flag for textures that should ignore mipmap limit settings.





This has no effect if the [textureShape](TextureImporterSettings-textureShape.html) is not `Texture2D` or `Texture2DArray`. Also, this has no effect on textures without mipmaps. For additional information, see [Texture2D.ignoreMipmapLimit](Texture2D-ignoreMipmapLimit.html) and [Texture2DArray.ignoreMipmapLimit](Texture2DArray-ignoreMipmapLimit.html).

By default, an imported texture asset has mipmap limits enabled, and uses the global mipmap limit. If you imported a Texture2DArray asset in Unity version 2023.1 or earlier, the asset will continue to ignore mipmap limits to ensure consistent behavior when upgrading.

Additional resources: [Texture2D.ignoreMipmapLimit](Texture2D-ignoreMipmapLimit.html), [Texture2DArray.ignoreMipmapLimit](Texture2DArray-ignoreMipmapLimit.html), [mipmapEnabled](TextureImporterSettings-mipmapEnabled.html).


            
