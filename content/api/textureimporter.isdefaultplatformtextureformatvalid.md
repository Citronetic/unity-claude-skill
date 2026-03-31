This version of Unity is unsupported.



# [TextureImporter](TextureImporter.html).IsDefaultPlatformTextureFormatValid




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

public static bool IsDefaultPlatformTextureFormatValid([TextureImporterType](TextureImporterType.html) textureType,
[TextureImporterFormat](TextureImporterFormat.html) currentFormat);






### Parameters



| Parameter | Description |
| --- | --- |
| currentFormat | The TextureImporterType that the importer uses. |
| textureType | The TextureImporterFormat to validate. |





### Returns



**bool**
        Returns true if [TextureImporterFormat](TextureImporterFormat.html) is valid and can be set. Returns false otherwise.





### Description



Validates [TextureImporterFormat](TextureImporterFormat.html) based on the type of the current format ([TextureImporterType](TextureImporterType.html)) and the default platform.





This method depends on the platforms that are available in the current Unity installation. Because some platforms do not support all formats, these formats cannot be used with the Default Settings. Use this method to check that a format is valid and can be set.


            
