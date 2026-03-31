This version of Unity is unsupported.



# [PlayerSettings.Android](PlayerSettings.Android.html).reportGooglePlayAppDependencies




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







                    public static bool reportGooglePlayAppDependencies;






### Description



Indicates whether to track application dependencies for Google Play Store verification.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;public class ReportGooglePlayAppDependenciesSample : MonoBehaviour
{
    [MenuItem("Build/Report Google Play App Dependencies Sample")]
    public static void BuildReportGooglePlayAppDependenciesSample()
    {
        PlayerSettings.SetScriptingBackend(NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);
        PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;        //Set reportGooglePlayAppDependencies to true
        PlayerSettings.Android.reportGooglePlayAppDependencies = true;        BuildPlayerOptions options = new BuildPlayerOptions();
        options.scenes = new[] { "Assets/Scenes/SampleScene.unity" };
        options.locationPathName = "Build/AndroidBuild.apk";
        options.target = BuildTarget.Android;
        options.targetGroup = BuildTargetGroup.Android;
        BuildPipeline.BuildPlayer(options);
    }
}
```


            
