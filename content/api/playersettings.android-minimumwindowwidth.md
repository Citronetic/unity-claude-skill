This version of Unity is unsupported.



# [PlayerSettings.Android](PlayerSettings.Android.html).minimumWindowWidth




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







                    public static int minimumWindowWidth;






### Description



The minimum horizontal size of the Android Player window in pixels.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;public class MinimumWindowWidthSample : MonoBehaviour
{
    [MenuItem("Build/Minimum Window Width Sample")]
    public static void BuildMinimumWindowWidthSample()
    {
        PlayerSettings.SetScriptingBackend(NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);
        PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;        //Set minimum window width to 300
        PlayerSettings.Android.minimumWindowWidth = 300;        BuildPlayerOptions options = new BuildPlayerOptions();
        options.scenes = new[] { "Assets/Scenes/SampleScene.unity" };
        options.locationPathName = "Build/AndroidBuild.apk";
        options.target = BuildTarget.Android;
        options.targetGroup = BuildTargetGroup.Android;
        BuildPipeline.BuildPlayer(options);
    }
}
```


            
