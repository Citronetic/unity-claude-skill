This version of Unity is unsupported.



# [QualitySettings](QualitySettings.html).GetActiveQualityLevelsForPlatformCount




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




                [Switch to Manual](../Manual/class-QualitySettings.html)










## Declaration

public static int GetActiveQualityLevelsForPlatformCount(string buildTargetGroupName);






### Parameters



| Parameter | Description |
| --- | --- |
| buildTargetGroupName | The platform to obtain the number of selected Quality Levels. |





### Returns



**int**
        The total amount of Quality Levels active for the given platform.





### Description



[Editor Only] Obtains the number of Quality Levels that are selected for a given platform.


              


```
public int GetActiveActiveQualityLevelsForPlatform(BuildTarget platform)
{
    var activeBuildTargetGroup = BuildPipeline.GetBuildTargetGroup(platform);
    var namedBuildTarget = NamedBuildTarget.FromBuildTargetGroup(activeBuildTargetGroup);
    return QualitySettings.GetActiveQualityLevelsForPlatformCount(namedBuildTarget.TargetName);
}
```





Returns the count of quality levels that are including the given platform.


            
