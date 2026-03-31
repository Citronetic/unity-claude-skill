This version of Unity is unsupported.



# SpriteImportData





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



Struct that represents how [Sprite](Sprite.html) asset should be generated when calling [TextureGenerator.GenerateTexture](AssetImporters.TextureGenerator.GenerateTexture.html).





### Properties



| Property | Description |
| --- | --- |
| alignment | Pivot value represented by SpriteAlignment. |
| border | Border value for the generated Sprite. |
| name | Name for the generated Sprite. |
| outline | Sprite Asset creation uses this outline when it generates the Mesh for the Sprite. If this is not given, SpriteImportData.tesselationDetail will be used to determine the mesh detail. |
| pivot | Pivot value represented in Vector2. |
| rect | Position and size of the Sprite in a given texture. |
| spriteID | An identifier given to a Sprite. Use this to identify which data was used to generate that Sprite. |
| tessellationDetail | Controls mesh generation detail. This value will be ignored if SpriteImportData.ouline is provided. |


            
