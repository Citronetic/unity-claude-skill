This version of Unity is unsupported.



# [TextureImporter](TextureImporter.html).IsPlatformTextureFormatValid




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










## Declaration

public static bool IsPlatformTextureFormatValid([TextureImporterType](TextureImporterType.html) textureType,
[BuildTarget](BuildTarget.html) target,
[TextureImporterFormat](TextureImporterFormat.html) currentFormat);






### Parameters



| Parameter | Description |
| --- | --- |
| textureType | The TextureImporterType that the importer uses. |
| target | The platform that the setting targets, referred to as the BuilTarget. |
| currentFormat | The TextureImporterFormat to validate. |





### Returns



**bool**
        Returns true if [TextureImporterFormat](TextureImporterFormat.html) is valid and can be set. Returns false otherwise.





### Description



Validates [TextureImporterFormat](TextureImporterFormat.html) based on a specified import type ([TextureImporterType](TextureImporterType.html)) and a specified build target ([BuildTarget](BuildTarget.html).).





[TextureImporterFormat](TextureImporterFormat.html) is not available for all platforms based on the [TextureImporterType](TextureImporterType.html) of a given Texture. Use this method to check that the format set with SetPlatformTextureSettings is a valid format.


            
