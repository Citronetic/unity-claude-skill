This version of Unity is unsupported.



# [PlayerSettings.Android](PlayerSettings.Android.html).minifyRelease




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







                    public static bool minifyRelease;






### Description



Enable to minify release build.





Enable to minify your java code in release configuration. Use proguard configuration file to control the process.

**Note**: Minification can sometimes remove needed code and produce non-working binaries.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;public class MinifyReleaseExample : MonoBehaviour
{
    [MenuItem("Build/Android Minify Release Example")]
    public static void MinifyRelease()
    {
        PlayerSettings.SetScriptingBackend(NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);
        PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;        //Enable minify release
        PlayerSettings.Android.minifyRelease = true;        BuildPlayerOptions options = new BuildPlayerOptions();
        options.scenes = new[] { "Assets/Scenes/SampleScene.unity" };
        options.locationPathName = "Builds/AndroidBuild.apk";
        options.target = BuildTarget.Android;
        options.targetGroup = BuildTargetGroup.Android;        BuildPipeline.BuildPlayer(options);
    }
}
```


            
