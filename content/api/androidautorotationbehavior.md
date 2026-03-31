This version of Unity is unsupported.



# AndroidAutoRotationBehavior





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



Options to control the application window orientation when **Default orientation** is set to **Auto rotation**.


              


```
using UnityEditor;
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;public class AutoRotationBehaviorSample : MonoBehaviour
{
    [MenuItem("Build/AutoRotationBehavior Sample")]
    public static void BuildAutoRotationBehaviorSample()
    {
        PlayerSettings.SetScriptingBackend(NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);        PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;

        // Set autoRotation behavior to a value from AndroidAutoRotationBehavior enum
        // Replace with Sensor if needed
        PlayerSettings.Android.autoRotationBehavior = AndroidAutoRotationBehavior.User;

        BuildPlayerOptions options = new BuildPlayerOptions();
        options.scenes = new[] { "Assets/Scenes/SampleScene.unity" };
        options.locationPathName = "Build/AndroidBuild.apk";
        options.target = BuildTarget.Android;
        options.targetGroup = BuildTargetGroup.Android;
        BuildPipeline.BuildPlayer(options);
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| User | Application window rotates based on the device’s auto rotate orientation settings. |
| Sensor | Application window rotates based on the device’s orientation sensor. |


            
