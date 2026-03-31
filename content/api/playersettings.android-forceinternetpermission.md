This version of Unity is unsupported.



# [PlayerSettings.Android](PlayerSettings.Android.html).forceInternetPermission




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







                    public static bool forceInternetPermission;






### Description



Force internet permission flag.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;public class ForceInternetPermissionSample : MonoBehaviour
{
    [MenuItem("Build/ForceInternetPermission Sample")]
    public static void BuildForceInternetPermissionSample()
    {
        PlayerSettings.SetScriptingBackend(NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);
        PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;

        //Set forceInternetPermission to true
        PlayerSettings.Android.forceInternetPermission = true;

        BuildPlayerOptions options = new BuildPlayerOptions();
        options.scenes = new[] { "Assets/Scenes/SampleScene.unity" };
        options.locationPathName = "Build/AndroidBuild.apk";
        options.target = BuildTarget.Android;
        options.targetGroup = BuildTargetGroup.Android;
        BuildPipeline.BuildPlayer(options);
    }
}
```


            
