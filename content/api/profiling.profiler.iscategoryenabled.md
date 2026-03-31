This version of Unity is unsupported.



# [Profiler](Profiling.Profiler.html).IsCategoryEnabled




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

public static bool IsCategoryEnabled([Unity.Profiling.ProfilerCategory](Unity.Profiling.ProfilerCategory.html) category);






### Parameters



| Parameter | Description |
| --- | --- |
| category | Which category you want to check the state of. |





### Returns



**bool**
        Returns whether or not a given [ProfilerCategory](Unity.Profiling.ProfilerCategory.html) is currently enabled.





### Description



Returns whether or not a given [ProfilerCategory](Unity.Profiling.ProfilerCategory.html) is currently enabled.





Enabled categories emit stats and samples. Each enabled category adds to the profiler overhead.
To disable a category, either close the corresponding chart in the [ProfilerWindow](ProfilerWindow.html) or call [Profiler.SetCategoryEnabled](Profiling.Profiler.SetCategoryEnabled.html).


            
