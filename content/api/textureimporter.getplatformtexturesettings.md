This version of Unity is unsupported.



# [TextureImporter](TextureImporter.html).GetPlatformTextureSettings




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

public bool GetPlatformTextureSettings(string platform,
out int maxTextureSize,
out [TextureImporterFormat](TextureImporterFormat.html) textureFormat,
out int compressionQuality,
out bool etc1AlphaSplitEnabled);






### Parameters



| Parameter | Description |
| --- | --- |
| platform | The platform for which settings are required (see options below). |
| maxTextureSize | Maximum texture width/height in pixels. |
| textureFormat | Format of the texture for the given platform. |
| compressionQuality | Value from 0..100, equivalent to the standard JPEG quality setting. |
| etc1AlphaSplitEnabled | Status of the ETC1 and alpha split flag. |





### Returns



**bool**
        True if the platform override was found, false if no override was found.





### Description



Gets platform specific texture settings.





The values for the chosen platform are returned in the "out" parameters. The options for the platform string are "Standalone", "Web", "iPhone", "Android", "WebGL", "Windows Store Apps", "PS4", "XboxOne", "Nintendo Switch" and "tvOS".


              


```
using UnityEngine;
using UnityEditor;
using UnityEngine.UI;
using System.Collections;public class DisplayInfo : EditorWindow
{
    [MenuItem("PlatformSettings/GetSettingsForAndroid")]
    static void GetAndroidSettings()
    {
        string  platformString = "Android";
        int     platformMaxTextureSize = 0;
        TextureImporterFormat platformTextureFmt;
        int     platformCompressionQuality = 0;
        bool    platformAllowsAlphaSplit = false;        TextureImporter ti = (TextureImporter)TextureImporter.GetAtPath("Assets/characters.png");
        if (ti.GetPlatformTextureSettings(platformString, out platformMaxTextureSize, out platformTextureFmt, out platformCompressionQuality, out platformAllowsAlphaSplit))
        {
            Debug.Log("Found some overrides for platform: " + platformString);
        }
    }
}
```




---








## Declaration

public bool GetPlatformTextureSettings(string platform,
out int maxTextureSize,
out [TextureImporterFormat](TextureImporterFormat.html) textureFormat,
out int compressionQuality);






### Parameters



| Parameter | Description |
| --- | --- |
| platform | The platform whose settings are required (see below). |
| maxTextureSize | Maximum texture width/height in pixels. |
| textureFormat | Format of the texture. |
| compressionQuality | Value from 0..100, equivalent to the standard JPEG quality setting. |





### Returns



**bool**
        True if the platform override was found, false if no override was found.





### Description



Gets platform specific texture settings.





The values for the chosen platform are returned in the "out" parameters. The options for the platform string are "Standalone", "Web", "iPhone", "Android", "WebGL", "Windows Store Apps", "PS4", "XboxOne", "Nintendo Switch" and "tvOS".




---








## Declaration

public bool GetPlatformTextureSettings(string platform,
out int maxTextureSize,
out [TextureImporterFormat](TextureImporterFormat.html) textureFormat);






### Parameters



| Parameter | Description |
| --- | --- |
| platform | The platform whose settings are required (see below). |
| maxTextureSize | Maximum texture width/height in pixels. |
| textureFormat | Format of the texture. |





### Returns



**bool**
        True if the platform override was found, false if no override was found.





### Description



Gets platform specific texture settings.





The values for the chosen platform are returned in the "out" parameters. The options for the platform string are "Standalone", "Web", "iPhone", "Android", "WebGL", "Windows Store Apps", "PS4", "XboxOne", "Nintendo Switch" and "tvOS".




---








## Declaration

public [TextureImporterPlatformSettings](TextureImporterPlatformSettings.html) GetPlatformTextureSettings(string platform);






### Parameters



| Parameter | Description |
| --- | --- |
| platform | The platform whose settings are required (see below). |





### Returns



**TextureImporterPlatformSettings**
        A [TextureImporterPlatformSettings](TextureImporterPlatformSettings.html) structure containing the platform parameters.





### Description



Gets platform specific texture settings.





Returns the parameters for the chosen platform. The options for the platform string are "Standalone", "Web", "iPhone", "Android", "WebGL", "Windows Store Apps", "PS4", "XboxOne", "Nintendo Switch" and "tvOS".


            
