This version of Unity is unsupported.



# BuildPlayerOptions





struct in
          UnityEditor


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



Provide various options to control the behavior of [BuildPipeline.BuildPlayer](BuildPipeline.BuildPlayer.html).





Additional resources: [EditorBuildSettings](EditorBuildSettings.html), [BuildPlayerWindow.DefaultBuildMethods.GetBuildPlayerOptions](BuildPlayerWindow.DefaultBuildMethods.GetBuildPlayerOptions.html)


              


```
using UnityEditor;
using UnityEngine;public class BuildPlayerOptionsExample
{
    [MenuItem("Build/Log Build Settings")]
    public static void MyBuild()
    {
        // Log some of the current build options retrieved from the Build Settings Window
        BuildPlayerOptions buildPlayerOptions = BuildPlayerWindow.DefaultBuildMethods.GetBuildPlayerOptions(new BuildPlayerOptions());
        Debug.Log("BuildPlayerOptions\n"
            + "Scenes: " + string.Join(",", buildPlayerOptions.scenes) + "\n"
            + "Build location: " + buildPlayerOptions.locationPathName + "\n"
            + "Options: " + buildPlayerOptions.options + "\n"
            + "Target: " + buildPlayerOptions.target);
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| assetBundleManifestPath | The path to an manifest file describing all of the asset bundles used in the build (optional). |
| extraScriptingDefines | The additional preprocessor defines you can specify while compiling assemblies for the Player. These defines are appended to the existing Scripting Define Symbols list configured in the Player settings. |
| locationPathName | Specifies the path for the application to be built. |
| options | Additional BuildOptions, like whether to run the built player. |
| scenes | The Scenes to be included in the build. |
| subtarget | The Subtarget to build. |
| target | The BuildTarget to build. |
| targetGroup | The BuildTargetGroup to build. |


            
