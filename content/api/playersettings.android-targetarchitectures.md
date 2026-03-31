This version of Unity is unsupported.



# [PlayerSettings.Android](PlayerSettings.Android.html).targetArchitectures




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







                    public static [AndroidArchitecture](AndroidArchitecture.html) targetArchitectures;






### Description



A set of CPU architectures for the Android build target.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;public class TargetArchitecturesExample : MonoBehaviour
{
    [MenuItem("Build/Android Target Architectures Example")]
    public static void TargetArchitectures()
    {
        PlayerSettings.SetScriptingBackend(NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);        //Set the targetArchitecture to ARM64 AndroidAchitecture
        PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;        BuildPlayerOptions options = new BuildPlayerOptions();
        options.scenes = new[] { "Assets/Scenes/SampleScene.unity" };
        options.locationPathName = "Builds/AndroidBuild.apk";
        options.target = BuildTarget.Android;
        options.targetGroup = BuildTargetGroup.Android;        BuildPipeline.BuildPlayer(options);
    }
}
```


            
