This version of Unity is unsupported.



# [PlayerSettings.Android](PlayerSettings.Android.html).splitApplicationBinary




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







                    public static bool splitApplicationBinary;






### Description



Split application binary into modules.





When enabled, Unity splits up the player executable and data into modules:

**APK**: Generates an APK that consists only of the executable (Java and Native) code (~10MB), and the data for the first scene. Unity serializes the application data separately in an APK Expansion File (.obb). For more information, refer to [APK expansion files](../Manual/android-OBBsupport.html).

**AAB**: Generates an AAB that contains a base module and one or more asset packs. The base module contains the executable (Java and Native) code (~10MB), and the data for the first scene. Asset packs contain the rest of the application data. For more information, refer to [Asset packs in Unity](../Manual/android-asset-packs-in-unity.html).


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;public class SplitApplicationBinarySample : MonoBehaviour
{
    [MenuItem("Build/Split Application Binary Sample")]
    public static void BuildSplitApplicationBinarySample()
    {
        PlayerSettings.SetScriptingBackend(NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);
        PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;        //Set splitApplicationBinary to true
        PlayerSettings.Android.splitApplicationBinary = true;        BuildPlayerOptions options = new BuildPlayerOptions();
        options.scenes = new[] { "Assets/Scenes/SampleScene.unity" };
        options.locationPathName = "Build/AndroidBuild.apk";
        options.target = BuildTarget.Android;
        options.targetGroup = BuildTargetGroup.Android;
        BuildPipeline.BuildPlayer(options);
    }
}
```


            
