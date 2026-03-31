This version of Unity is unsupported.



# [PlayerSettings.Android](PlayerSettings.Android.html).resizeableActivity




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







                    public static bool resizeableActivity;






### Description



Indicates whether your Android application is resizable.





By default the Android application is resizable. Disable this option to make the application non-resizable.

**Note:** If you enable this option, your application will continue to run when it loses focus but is visible on screen. If the application is minimized or no longer visible the Android Player will pause.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;public class ResizeableActivitySample : MonoBehaviour
{
    [MenuItem("Build/ResizeableActivity Sample")]
    public static void BuildResizeableActivitySample()
    {
        PlayerSettings.SetScriptingBackend(NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);
        PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;        //Set resizeableActivity to true
        PlayerSettings.Android.resizeableActivity = true;        BuildPlayerOptions options = new BuildPlayerOptions();
        options.scenes = new[] { "Assets/Scenes/SampleScene.unity" };
        options.locationPathName = "Build/AndroidBuild.apk";
        options.target = BuildTarget.Android;
        options.targetGroup = BuildTargetGroup.Android;
        BuildPipeline.BuildPlayer(options);
    }
}
```


            
