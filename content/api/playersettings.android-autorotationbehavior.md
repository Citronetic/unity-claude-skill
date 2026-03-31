This version of Unity is unsupported.



# [PlayerSettings.Android](PlayerSettings.Android.html).autoRotationBehavior




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







                    public static [AndroidAutoRotationBehavior](AndroidAutoRotationBehavior.html) autoRotationBehavior;






### Description



Indicate whether your application window rotates based on device orientation settings (User) or device orientation sensor (Sensor), when default orientation is Auto Rotation.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;public class AutoRotationBehaviorSample : MonoBehaviour
{
    [MenuItem("Build/AutoRotationBehavior Sample")]
    public static void BuildAutoRotationBehaviorSample()
    {
        PlayerSettings.SetScriptingBackend(NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);        PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;

        //Set autoRotation behavior value to user
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


            
