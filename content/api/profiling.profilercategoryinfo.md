This version of Unity is unsupported.



# ProfilerCategoryInfo





struct in
          UnityEditor.Profiling


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



Category information descriptor structure.





Contains the full information about a Profiler category such as its name, color, id, and flags.
Use with [FrameDataView.GetAllCategories](Profiling.FrameDataView.GetAllCategories.html) and [FrameDataView.GetCategoryInfo](Profiling.FrameDataView.GetCategoryInfo.html) to get information on the available Profiler categories.


              


```
using System;
using System.Collections.Generic;
using UnityEditor.Profiling;
using Unity.Profiling;public class Example
{
    public static void GetAllBuiltinProfilerCategories(FrameDataView frameDataView, List<ProfilerCategoryInfo> unityProfilerCategories)
    {
        unityProfilerCategories.Clear();
        var infos = new List<ProfilerCategoryInfo>();
        frameDataView.GetAllCategories(infos);
        foreach (var info in infos)
        {
            if (info.flags.HasFlag(ProfilerCategoryFlags.Builtin))
            {
                unityProfilerCategories.Add(info);
            }
        }
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| color | The color of the Profiler category, as a Color32. |
| flags | Flags for showing if the Category is user defined or built into Unity. |
| id | Id used by Unity for tracking the Category. |
| name | The name used by Unity for the Category. |


            
