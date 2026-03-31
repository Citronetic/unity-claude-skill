This version of Unity is unsupported.



# [TextureImporter](TextureImporter.html).SetPlatformTextureSettings




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

public void SetPlatformTextureSettings([TextureImporterPlatformSettings](TextureImporterPlatformSettings.html) platformSettings);






### Parameters



| Parameter | Description |
| --- | --- |
| platformSettings | A TextureImporterPlatformSettings instance that contains the platform settings. |





### Description



Sets specific target platform settings.





Setup the parameters for a specific platform as described in [TextureImporterPlatformSettings](TextureImporterPlatformSettings.html).




---






                        **Obsolete**
                        Use UnityEditor.TextureImporter.SetPlatformTextureSettings(TextureImporterPlatformSettings) instead.




## Declaration

public void SetPlatformTextureSettings(string platform,
int maxTextureSize,
[TextureImporterFormat](TextureImporterFormat.html) textureFormat);




                        **Obsolete**
                        Use UnityEditor.TextureImporter.SetPlatformTextureSettings(TextureImporterPlatformSettings) instead.




## Declaration

public void SetPlatformTextureSettings(string platform,
int maxTextureSize,
[TextureImporterFormat](TextureImporterFormat.html) textureFormat,
bool allowsAlphaSplit = False);




                        **Obsolete**
                        Use UnityEditor.TextureImporter.SetPlatformTextureSettings(TextureImporterPlatformSettings) instead.




## Declaration

public void SetPlatformTextureSettings(string platform,
int maxTextureSize,
[TextureImporterFormat](TextureImporterFormat.html) textureFormat,
int compressionQuality,
bool allowsAlphaSplit);






### Parameters



| Parameter | Description |
| --- | --- |
| platform | The platforms whose settings are to be changed (see below). |
| maxTextureSize | Maximum texture width/height in pixels. |
| textureFormat | Data format for the texture. |
| allowsAlphaSplit | Allows splitting of imported texture into RGB+A so that ETC1 compression can be applied (Android only, and works only on textures that are a part of some atlas). |
| compressionQuality | Value from 0..100, with 0, 50 and 100 being respectively Fast, Normal, Best quality options in the texture importer UI. For Crunch texture formats, this roughly corresponds to JPEG quality levels. |





### Description



Sets specific target platform settings.





The options for the platform string are: "Standalone", "iPhone", "Android", "WebGL", "Windows Store Apps", "PS4", "XboxOne", "Nintendo Switch" and "tvOS".


            
