This version of Unity is unsupported.



# AndroidBlitType





enumeration


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



Describes the method for how content is displayed on the screen.





Options are as follows:

Use **Always** to render offscreen and blit to the backbuffer.
Use **Never** to render directly to the backbuffer.
Use **Auto** or automatically choose the most appropriate option.

Depending on the device, [AndroidBlitType.Never](AndroidBlitType.Never.html) may not support switching MSAA settings at runtime or rendering at non-native resolution.
[AndroidBlitType.Never](AndroidBlitType.Never.html) does not provide a sRGB backbuffer. Linear rendering requires a framebuffer that does sRGB read/write conversions (see [RenderTexture.sRGB](RenderTexture-sRGB.html)), otherwise the generated image typically appears too dark. Therefore [AndroidBlitType.Never](AndroidBlitType.Never.html) is not recommended when linear rendering is used. If you want to use linear rendering with [AndroidBlitType.Never](AndroidBlitType.Never.html) despite this information, you have to setup your own sRGB render target and handle the blit to the backbuffer.

AndroidBlitType is ignored when the Vulkan Graphics API is used.


              


```
using UnityEditor;
using UnityEditor.Build;
using UnityEngine;public class AndroidBlitTypeExample : MonoBehaviour
{
    [MenuItem("Build/Android Blit Type Auto Example")]
    public static void AndroidBlitTypes()
    {
        PlayerSettings.SetScriptingBackend(NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);
        PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;        //Set AndroidBlitType to Auto which automatically determines
        //the most appropriate method for drawing to the screen.
        PlayerSettings.Android.blitType = AndroidBlitType.Auto;        BuildPlayerOptions options = new BuildPlayerOptions();
        options.scenes = new[] { "Assets/Scenes/SampleScene.unity" };
        options.locationPathName = "Builds/AndroidBuild.apk";
        options.target = BuildTarget.Android;
        options.targetGroup = BuildTargetGroup.Android;        BuildPipeline.BuildPlayer(options);
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| Always | Always render offscreen and blit to the backbuffer. |
| Never | Never render offscreen and blit to the backbuffer. Always render directly to the backbuffer. |
| Auto | Automatically determine the most appropriate method for drawing to the screen. |


            
