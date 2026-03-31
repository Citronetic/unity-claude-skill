This version of Unity is unsupported.



# [BuildProfile](Build.Profile.BuildProfile.html).GetActiveBuildProfile




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

public static [Build.Profile.BuildProfile](Build.Profile.BuildProfile.html) GetActiveBuildProfile();






### Returns



**BuildProfile**
        The active build profile. Returns null when a platform profile is active.





### Description



Gets the active build profile.





Additional resources: [Platform profile](../Manual/build-profiles.html).


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


            
