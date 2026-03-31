This version of Unity is unsupported.



# [PlayerSettings.Android](PlayerSettings.Android.html).enableArmv9SecurityFeatures




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







                    public static bool enableArmv9SecurityFeatures;






### Description



Enable Armv9 security features, including Pointer Authentication (PAuth, PAC) and Branch Target Identification (BTI) for Arm64 builds.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;public class EnableArmv9SecurityFeaturesSample : MonoBehaviour
{
    [MenuItem("Build/Enable Armv9 Security Features Sample")]
    public static void BuildEnableArmv9SecurityFeaturesSample()
    {
        PlayerSettings.SetScriptingBackend(NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);
        PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;

        //Enables Armv9SecurityFeatures
        PlayerSettings.Android.enableArmv9SecurityFeatures = true;

        BuildPlayerOptions options = new BuildPlayerOptions();
        options.scenes = new[] { "Assets/Scenes/SampleScene.unity" };
        options.locationPathName = "Build/AndroidBuild.apk";
        options.target = BuildTarget.Android;
        options.targetGroup = BuildTargetGroup.Android;
        BuildPipeline.BuildPlayer(options);
    }
}
```


            
