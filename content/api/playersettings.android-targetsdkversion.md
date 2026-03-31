This version of Unity is unsupported.



# [PlayerSettings.Android](PlayerSettings.Android.html).targetSdkVersion




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







                    public static [AndroidSdkVersions](AndroidSdkVersions.html) targetSdkVersion;






### Description



The target API level of your application.





This value must be higher than or equal to minSdkVersion.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;public class TargetSdkVersionSample : MonoBehaviour
{
    [MenuItem("Build/TargetSdkVersion Sample")]
    public static void BuildTargetSdkVersionSample()
    {
        PlayerSettings.SetScriptingBackend(NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);
        PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;        //Set targetSdkversion
        PlayerSettings.Android.targetSdkVersion = AndroidSdkVersions.AndroidApiLevel30;        BuildPlayerOptions options = new BuildPlayerOptions();
        options.scenes = new[] { "Assets/Scenes/SampleScene.unity" };
        options.locationPathName = "Build/AndroidBuild.apk";
        options.target = BuildTarget.Android;
        options.targetGroup = BuildTargetGroup.Android;
        BuildPipeline.BuildPlayer(options);
    }
}
```


            
