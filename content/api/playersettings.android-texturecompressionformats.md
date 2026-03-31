This version of Unity is unsupported.



# [PlayerSettings.Android](PlayerSettings.Android.html).textureCompressionFormats




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




                [Switch to Manual](../Manual/class-PlayerSettings.html)







                    public static TextureCompressionFormat[] textureCompressionFormats;






### Description



Target texture compression formats.





If you set multiple texture compression formats, you can use the [Texture Compression Targeting](https://developer.android.com/guide/playcore/asset-delivery/texture-compression) feature. To use this feature you must also build the application as an Android App Bundle (aab file) or export a Gradle project for an Android App Bundle. In this case, Unity generates the Android App Bundle or the Gradle project with asset packs that include textures compressed using the texture compression formats you specify in this property. Android treats the first texture compression format as the "default".

If you only set one target texture compression format, or if you build your application as an apk or export Gradle project for an apk, Android only uses the first (or only) texture compression format to compress textures. In this case, you can override the target texture compression format using the [EditorUserBuildSettings.androidBuildSubtarget](EditorUserBuildSettings-androidBuildSubtarget.html) property.

You can't add the [TextureCompressionFormat.BPTC](TextureCompressionFormat.BPTC.html) or [TextureCompressionFormat.Unknown](TextureCompressionFormat.Unknown.html) options to texture compression formats for Android, also it's not possible to assign a null value or an empty array.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;public class TextureCompressionFormatsSample : MonoBehaviour
{
    [MenuItem("Build/Texture Compression Formats Sample")]
    public static void BuildAndroidTextureCompressionSample()
    {
        PlayerSettings.SetScriptingBackend(NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);
        PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;        // Set textureCompressionFormats to ETC2 and ASTC texture formats
        PlayerSettings.Android.textureCompressionFormats = new[]
        {
            TextureCompressionFormat.ETC2,
            TextureCompressionFormat.ASTC
        };

        // Configure an Android App Bundle build
        EditorUserBuildSettings.buildAppBundle = true;        // Configure build Player options
        BuildPlayerOptions buildOptions = new BuildPlayerOptions();
        buildOptions.scenes = new[] { "Assets/Scenes/SampleScene.unity" };
        buildOptions.locationPathName = "Build/TextureCompressionAndroidBuild.aab";
        buildOptions.target = BuildTarget.Android;
        buildOptions.targetGroup = BuildTargetGroup.Android;
        BuildPipeline.BuildPlayer(buildOptions);

        // Log each configured texture compression format
        foreach (TextureCompressionFormat format in PlayerSettings.Android.textureCompressionFormats)
        {
            Debug.Log($"Configured Texture Compression Format: {format}");
        }
    }
}
```


            
