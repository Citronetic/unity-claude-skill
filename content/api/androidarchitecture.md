This version of Unity is unsupported.



# AndroidArchitecture





enumeration


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



















### Description



Android CPU architecture.


              


```
using UnityEditor.Build;
using UnityEditor;
using UnityEngine;public class AndroidArchitectureExample : MonoBehaviour
{
    [MenuItem("Build/Android Architectures Example")]
    public static void AndroidArchitectures()
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





### Properties



| Property | Description |
| --- | --- |
| None | Invalid architecture. |
| ARMv7 | 32-bit ARM architecture. |
| ARM64 | 64-bit ARM architecture. |
| X86_64 | 64-bit Intel architecture. |
| All | All architectures. |


            
