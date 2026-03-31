This version of Unity is unsupported.



# AtlasSettings





struct in
          UnityEditor.Sprites


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



Describes the final atlas texture.





Note that if not all Sprites can be fit to an area defined by maxWidth and maxHeight, multiple atlas pages will be generated.





### Properties



| Property | Description |
| --- | --- |
| allowsAlphaSplitting | Marks this atlas so that it contains textures that have been flagged for Alpha splitting when needed (for example ETC1 compression for textures with transparency). |
| anisoLevel | Anisotropic filtering level of the atlas texture. |
| colorSpace | Desired color space of the atlas. |
| compressionQuality | Quality of atlas texture compression in the range [0..100]. |
| enableRotation | Allows Sprite Packer to rotate/flip the Sprite to ensure optimal Packing. |
| filterMode | Filtering mode of the atlas texture. |
| format | The format of the atlas texture. |
| generateMipMaps | Detemines if sprite atlas textures generate mipmaps. |
| maxHeight | Maximum height of the atlas texture. |
| maxWidth | Maximum width of the atlas texture. |
| paddingPower | The amount of extra padding between packed sprites. |


            
