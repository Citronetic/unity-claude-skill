This version of Unity is unsupported.



# [TextureImporter](TextureImporter.html).SetTextureSettings




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

public void SetTextureSettings([TextureImporterSettings](TextureImporterSettings.html) src);






### Description



Sets texture importers settings from [TextureImporterSettings](TextureImporterSettings.html) class.


              


```
using UnityEngine;
using UnityEditor;// Automatically convert any texture with "SingleChannel"
// in its path into a single channel texture, and set it to use the red color channel.class SingleChannelPreprocessor : AssetPostprocessor
{
    void OnPreprocessTexture()
    {
        if (assetPath.Contains("SingleChannel"))
        {
            TextureImporter textureImporter  = (TextureImporter)assetImporter;
            textureImporter.textureType = TextureImporterType.SingleChannel;

            TextureImporterSettings settings = new TextureImporterSettings();
            textureImporter.ReadTextureSettings(settings);
            settings.singleChannelComponent = TextureImporterSingleChannelComponent.Red;
            textureImporter.SetTextureSettings(settings);
        }
    }
}
```





Additional resources: [TextureImporter.ReadTextureSettings](TextureImporter.ReadTextureSettings.html).


            
