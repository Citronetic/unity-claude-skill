This version of Unity is unsupported.



# TextureImporterPlatformSettings





class in
          UnityEditor


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



Stores platform specifics settings of a [TextureImporter](TextureImporter.html).





Additional resources: TextureImporter.





### Properties



| Property | Description |
| --- | --- |
| allowsAlphaSplitting | Allows Alpha splitting on the imported texture when needed (for example ETC1 compression for textures with transparency). |
| androidETC2FallbackOverride | Override for ETC2 decompression fallback on Android devices that don't support ETC2. |
| compressionQuality | The quality of Crunch texture compression. The range is 0 through 100. A higher quality means larger textures and longer compression times. |
| crunchedCompression | Use crunch compression when available. |
| format | Format of imported texture. |
| ignorePlatformSupport | Ignores platform support checks for the selected texture format. |
| maxTextureSize | Maximum texture size. |
| name | Name of the build target. |
| overridden | Set to true in order to override the Default platform parameters by those provided in the TextureImporterPlatformSettings structure. |
| resizeAlgorithm | For Texture to be scaled down choose resize algorithm. ( Applyed only when Texture dimension is bigger than Max Size ). |
| textureCompression | Compression of imported texture. |





### Public Methods



| Method | Description |
| --- | --- |
| CopyTo | Copy parameters into another TextureImporterPlatformSettings object. |


            
