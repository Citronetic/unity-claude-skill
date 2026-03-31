This version of Unity is unsupported.



# [ContentBuildInterface](Build.Content.ContentBuildInterface.html).CalculatePlayerDependenciesForScene




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

public static [Build.Content.SceneDependencyInfo](Build.Content.SceneDependencyInfo.html) CalculatePlayerDependenciesForScene(string scenePath,
[Build.Content.BuildSettings](Build.Content.BuildSettings.html) settings,
[Build.Content.BuildUsageTagSet](Build.Content.BuildUsageTagSet.html) usageSet);






## Declaration

public static [Build.Content.SceneDependencyInfo](Build.Content.SceneDependencyInfo.html) CalculatePlayerDependenciesForScene(string scenePath,
[Build.Content.BuildSettings](Build.Content.BuildSettings.html) settings,
[Build.Content.BuildUsageTagSet](Build.Content.BuildUsageTagSet.html) usageSet,
[Build.Content.BuildUsageCache](Build.Content.BuildUsageCache.html) usageCache);






### Parameters



| Parameter | Description |
| --- | --- |
| usageCache | Optional cache object to use for improving performance with multiple calls to this api. |
| scenePath | Input path of the Scene for dependency calculation. |
| settings | Settings for dependency calculation. |
| usageSet | Output usage tags generated from dependency calculation. |





### Returns



**SceneDependencyInfo**
        Dependency information for the Scene.





### Description



Calculates the Scene dependency information.





Internal use only. See note on [ContentBuildInterface](Build.Content.ContentBuildInterface.html).


            
