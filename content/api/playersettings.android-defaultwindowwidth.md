This version of Unity is unsupported.



# [PlayerSettings.Android](PlayerSettings.Android.html).defaultWindowWidth




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







                    public static int defaultWindowWidth;






### Description



The default horizontal size of the Android Player window in pixels.





On Android phones and tablets that support multiple windows, this controls the width of the window when in the popup window mode.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;public class DefaultWindowWidthSample : MonoBehaviour
{
    [MenuItem("Build/Default Window width Sample")]
    public static void BuildWindowWidthSample()
    {
        PlayerSettings.SetScriptingBackend(NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);
        PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;

        //Set default window width
        PlayerSettings.Android.defaultWindowWidth = 100;

        BuildPlayerOptions options = new BuildPlayerOptions();
        options.scenes = new[] { "Assets/Scenes/SampleScene.unity" };
        options.locationPathName = "Build/AndroidBuild.apk";
        options.target = BuildTarget.Android;
        options.targetGroup = BuildTargetGroup.Android;
        BuildPipeline.BuildPlayer(options);
    }
}
```


            
