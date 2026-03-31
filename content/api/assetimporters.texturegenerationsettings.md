This version of Unity is unsupported.



# TextureGenerationSettings





struct in
          UnityEditor.AssetImporters


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



Represents how a texture should be generated from calling [TextureGenerator.GenerateTexture](AssetImporters.TextureGenerator.GenerateTexture.html).





### Properties



| Property | Description |
| --- | --- |
| assetPath | Path where the Asset will be placed. |
| enablePostProcessor | When set to true, the AssetPostprocessor hooks will be called during texture generation. The following will hold for any AssetPostprocessors triggered through TextureGenerator.GenerateTexture
                - When the postprocessor is invoked AssetPostprocessor.assetPath will be set to the assetPath value in this structure.
                - The value of AssetPostprocessor.context will be set to null.
                - Only OnPostprocessTexture, OnPostprocessCubemap, ... is called. The OnPreprocessTexture functions are not called. |
| platformSettings | Platform settings for generating the texture. |
| qualifyForSpritePacking | Indicates if the Sprite generated can be used for atlas packing. |
| secondarySpriteTextures | Secondary textures for the generated Sprites. |
| sourceTextureInformation | Texture format for the image data. |
| spriteImportData | Sprite Asset generation data. |
| spritePackingTag | Tag used for Sprite packing. |
| textureImporterSettings | Settings for generating texture. |





### Constructors



| Constructor | Description |
| --- | --- |
| TextureGenerationSettings | The Constructor initializes to most common value based on the TetureImporterType you pass in. |


            
