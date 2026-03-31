This version of Unity is unsupported.



# [PlayerSettings.Android](PlayerSettings.Android.html).minifyDebug




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







                    public static bool minifyDebug;






### Description



Enable to minify debug build.





Enable to minify your java code in debug (development) configuration. Use proguard configuration file to control the process.

**Note:** Minification can sometimes remove needed code and produce non-working binaries.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;public class MinifyDebugSample : MonoBehaviour
{
    [MenuItem("Build/Minify Debug Sample")]
    public static void BuilMinifyDebugSample()
    {
        PlayerSettings.SetScriptingBackend(NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);
        PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;        //Set minifyDebug value to true
        PlayerSettings.Android.minifyDebug = true;        BuildPlayerOptions options = new BuildPlayerOptions();
        options.scenes = new[] { "Assets/Scenes/SampleScene.unity" };
        options.locationPathName = "Build/AndroidBuild.apk";
        options.target = BuildTarget.Android;
        options.targetGroup = BuildTargetGroup.Android;
        BuildPipeline.BuildPlayer(options);
    }
}
```


            
