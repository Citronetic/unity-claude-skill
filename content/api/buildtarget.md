This version of Unity is unsupported.



# BuildTarget





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



Specifies the target platform for a Player or AssetBundle build.





Pass a platform property to `BuildTarget` to specify the target platform to build a Player for. For example, use [BuildTarget.Android](BuildTarget.Android.html) to target the Android platform. At runtime, use `BuildTarget` to identify the currently selected build target. Only actively supported platforms are documented in this list.

**Important**: When targeting Windows, it's recommended to use the `StandaloneWindow64` target unless you specifically need to target devices that use a 32-bit CPU.

Additional resources: [BuildPipeline.BuildPlayer](BuildPipeline.BuildPlayer.html), [EditorUserBuildSettings.activeBuildTarget](EditorUserBuildSettings-activeBuildTarget.html), [BuildAssetBundlesParameters.targetPlatform](BuildAssetBundlesParameters-targetPlatform.html).


              


```
using UnityEditor;// Build your project on multiple platforms in a single action
public static class BuildAll
{
    [MenuItem("Build/Build All Platforms")]
    public static void BuildAllPlatforms()
    {
        string[] buildScenes = { "Assets/PathToYourScene.unity" };
        string projectName = "MyGame";        // Build for Windows
        BuildPipeline.BuildPlayer(buildScenes, $"Builds/Windows/{projectName}.exe", BuildTarget.StandaloneWindows64, BuildOptions.None);        // Build for macOS
        BuildPipeline.BuildPlayer(buildScenes, $"Builds/macOS/{projectName}.app", BuildTarget.StandaloneOSX, BuildOptions.None);        // Build for Android
        BuildPipeline.BuildPlayer(buildScenes, $"Builds/Android/{projectName}.apk", BuildTarget.Android, BuildOptions.None);
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| StandaloneOSX | Build a macOS standalone.To specify which architecture to use (Intel, ARM or Universal), please use PlayerSettings.SetArchitecture. |
| StandaloneWindows | Build a Windows 32-bit standalone. |
| iOS | Build an iOS player. |
| Android | Build an Android .apk standalone app. |
| StandaloneWindows64 | Build a Windows 64-bit standalone. |
| WebGL | Build to WebGL platform. |
| WSAPlayer | Build an Windows Store Apps player. |
| StandaloneLinux64 | Build a Linux 64-bit standalone. |
| PS4 | Build a PS4 Standalone. |
| XboxOne | Build a Xbox One Standalone. |
| tvOS | Build to Apple's tvOS platform. |
| Switch | Build a Nintendo Switch player. |
| LinuxHeadlessSimulation | Build a LinuxHeadlessSimulation standalone. |
| GameCoreXboxSeries | Build an Xbox Series player. |
| GameCoreXboxOne | Build an Xbox one player. |
| PS5 | Build to PlayStation 5 platform. |
| VisionOS | Build a visionOS player. |


            
