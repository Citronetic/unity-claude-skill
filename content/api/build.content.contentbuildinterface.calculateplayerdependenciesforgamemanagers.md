This version of Unity is unsupported.



# [ContentBuildInterface](Build.Content.ContentBuildInterface.html).CalculatePlayerDependenciesForGameManagers




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

public static [Build.Content.GameManagerDependencyInfo](Build.Content.GameManagerDependencyInfo.html) CalculatePlayerDependenciesForGameManagers([Build.Content.BuildSettings](Build.Content.BuildSettings.html) settings,
[Build.Content.BuildUsageTagGlobal](Build.Content.BuildUsageTagGlobal.html) globalUsage,
[Build.Content.BuildUsageTagSet](Build.Content.BuildUsageTagSet.html) usageSet);






## Declaration

public static [Build.Content.GameManagerDependencyInfo](Build.Content.GameManagerDependencyInfo.html) CalculatePlayerDependenciesForGameManagers([Build.Content.BuildSettings](Build.Content.BuildSettings.html) settings,
[Build.Content.BuildUsageTagGlobal](Build.Content.BuildUsageTagGlobal.html) globalUsage,
[Build.Content.BuildUsageTagSet](Build.Content.BuildUsageTagSet.html) usageSet,
[Build.Content.BuildUsageCache](Build.Content.BuildUsageCache.html) usageCache);






## Declaration

public static [Build.Content.GameManagerDependencyInfo](Build.Content.GameManagerDependencyInfo.html) CalculatePlayerDependenciesForGameManagers([Build.Content.BuildSettings](Build.Content.BuildSettings.html) settings,
[Build.Content.BuildUsageTagGlobal](Build.Content.BuildUsageTagGlobal.html) globalUsage,
[Build.Content.BuildUsageTagSet](Build.Content.BuildUsageTagSet.html) usageSet,
[Build.Content.BuildUsageCache](Build.Content.BuildUsageCache.html) usageCache,
[Build.Content.DependencyType](Build.Content.DependencyType.html) mode);






### Parameters



| Parameter | Description |
| --- | --- |
| settings | Settings for dependency calculation. |
| globalUsage | Global usage tag for lighting and fog modes in use in the project. |
| usageSet | Output usage tags generated from dependency calculation. |
| usageCache | Optional cache object to use for improving performance with multiple calls to this api. |
| mode | Specifies how to calculate dependencies between internal Unity game managers and game assets. |





### Returns



**GameManagerDependencyInfo**
        The calculated dependencies for internal Unity game manager classes.





### Description



Calculates dependency information for various internal Unity game manager classes.





Internal use only. See note on [ContentBuildInterface](Build.Content.ContentBuildInterface.html).


            
