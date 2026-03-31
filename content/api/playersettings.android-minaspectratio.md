This version of Unity is unsupported.



# [PlayerSettings.Android](PlayerSettings.Android.html).minAspectRatio




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







                    public static float minAspectRatio;






### Description



Minimum aspect ratio which is supported by the application.





This value is expressed as (longer dimension / shorter dimension) in decimal form. For example, if the minimum aspect ratio is 4:3, set this value to 1.33. This value needs to be greater than or equal to 1.0. By default it is set to 1.0.

**Note**: This attribute is ignored if you enable PlayerSettings.resizeableActivity. This attribute is available from Android API level 29.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;public class MinAspectRatioSample : MonoBehaviour
{
    [MenuItem("Build/MinAspectRatio Sample")]
    public static void BuildMinAspectRatioSample()
    {
        PlayerSettings.SetScriptingBackend(NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);
        PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;        //Set min aspect ratio to 2.0f
        PlayerSettings.Android.minAspectRatio = 2.0f;        BuildPlayerOptions options = new BuildPlayerOptions();
        options.scenes = new[] { "Assets/Scenes/SampleScene.unity" };
        options.locationPathName = "Build/AndroidBuild.apk";
        options.target = BuildTarget.Android;
        options.targetGroup = BuildTargetGroup.Android;
        BuildPipeline.BuildPlayer(options);
    }
}
```


            
