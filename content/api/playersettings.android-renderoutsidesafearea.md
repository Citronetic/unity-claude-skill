This version of Unity is unsupported.



# [PlayerSettings.Android](PlayerSettings.Android.html).renderOutsideSafeArea




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







                    public static bool renderOutsideSafeArea;






### Description



Extends rendering layout into display cutout area, utilizing all of the available screen space.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;public class RenderOutsideSafeAreaSample : MonoBehaviour
{
    [MenuItem("Build/Render Outside Safe Area Sample")]
    public static void BuildRenderOutsideSafeAreaSample()
    {
        PlayerSettings.SetScriptingBackend(NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);
        PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;        //Disables rendering outside safe area
        PlayerSettings.Android.renderOutsideSafeArea = false;        BuildPlayerOptions options = new BuildPlayerOptions();
        options.scenes = new[] { "Assets/Scenes/SampleScene.unity" };
        options.locationPathName = "Build/AndroidBuild.apk";
        options.target = BuildTarget.Android;
        options.targetGroup = BuildTargetGroup.Android;
        BuildPipeline.BuildPlayer(options);
    }
}
```


            
