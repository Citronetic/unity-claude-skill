This version of Unity is unsupported.



# [BuildProfile](Build.Profile.BuildProfile.html).SetActiveBuildProfile




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















## Declaration

public static void SetActiveBuildProfile([Build.Profile.BuildProfile](Build.Profile.BuildProfile.html) buildProfile);






### Parameters



| Parameter | Description |
| --- | --- |
| buildProfile | The build profile to be set as the active build profile. When the value is null, Unity sets the platform profile as active. |





### Description



Sets the active build profile.





This method updates the active build profile in Unity. When you switch to a build profile that targets a non-active platform, this function reimports assets affected by the target platform settings and then returns. All script files will be compiled on the next Editor update.

                **Note:** This method isn't available to set build profiles that target a non-active platform when running the Editor in [batch mode](../Manual/EditorCommandLineArguments.html). Changing the platform requires recompiling script code for the given platform, which can't be done while script code is executing. This isn't a problem in the Editor as the operation is deferred to the next Editor update. However, in batch mode the Editor will stop after executing the designated script code, so deferring the operation isn't possible. To set a build profile that targets a non-active platform in batch mode, use the [activeBuildProfile](../Manual/EditorCommandLineArguments.html) command-line argument.

                Additional resources: [Platform profile](../Manual/build-profiles.html), [BuildProfile.GetActiveBuildProfile](Build.Profile.BuildProfile.GetActiveBuildProfile.html), [AssetDatabase.LoadAssetAtPath](AssetDatabase.LoadAssetAtPath.html).


              


```
using UnityEditor;
using UnityEditor.Build.Profile;public static class Builder
{
    [MenuItem("Build/Build Active Profile")]
    public static void BuildActiveProfile()
    {
        var options = new BuildPlayerWithProfileOptions
        {
            buildProfile = BuildProfile.GetActiveBuildProfile(),
            locationPathName = "Builds/MyBuild"
        };        BuildPipeline.BuildPlayer(options);
    }    [MenuItem("Build/Set macOS Build Profile")]
    public static void SetActiveBuildProfile()
    {
        var specificBuildProfile = AssetDatabase.LoadAssetAtPath<BuildProfile>(
            "Assets/Settings/Build Profiles/macOS.asset"
        );
        BuildProfile.SetActiveBuildProfile(specificBuildProfile);
    }
}
```


            
