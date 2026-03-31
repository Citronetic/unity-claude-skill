This version of Unity is unsupported.



# [Profiler](Profiling.Profiler.html).SetCategoryEnabled




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

public static void SetCategoryEnabled([Unity.Profiling.ProfilerCategory](Unity.Profiling.ProfilerCategory.html) category,
bool enabled);






### Parameters



| Parameter | Description |
| --- | --- |
| category | The category you want to enable or disable. |
| enabled | Enable or disable the collection of data for this category. |





### Description



Enable or disable a given [ProfilerCategory](Unity.Profiling.ProfilerCategory.html).





Disable a category to stop it from emitting stats and samples. Disabling categories that you are not interested in is a way to reduce the Profiler overhead. If you turn a category back on after you profile a frame with a disabled [ProfilerCategory](Unity.Profiling.ProfilerCategory.html), this only turns on collection for subsequent frames.

**Note**: If the [ProfilerWindow](ProfilerWindow.html) is open when starting to profile, it will override the enabled/disabled categories to reflect which charts are open at the time.

To query the current state of a category, use [Profiler.IsCategoryEnabled](Profiling.Profiler.IsCategoryEnabled.html).


            
