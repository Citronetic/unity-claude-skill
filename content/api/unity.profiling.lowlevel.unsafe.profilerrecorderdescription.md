This version of Unity is unsupported.



# ProfilerRecorderDescription





struct in
          Unity.Profiling.LowLevel.Unsafe



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Gets the description of a Profiler metric.





Provides information about Profiler metrics that are accessible with the [ProfilerRecorder](Unity.Profiling.ProfilerRecorder.html).
Use [Name](Unity.Profiling.LowLevel.Unsafe.ProfilerRecorderDescription.Name.html) and [Category](Unity.Profiling.LowLevel.Unsafe.ProfilerRecorderDescription.Category.html) to create an instance of [ProfilerRecorder](Unity.Profiling.ProfilerRecorder.html).


              


```
using System.Collections.Generic;
using System.Text;
using UnityEngine;
using Unity.Profiling;
using Unity.Profiling.LowLevel.Unsafe;public class Example
{
    struct StatInfo
    {
        public ProfilerCategory Cat;
        public string Name;
        public ProfilerMarkerDataUnit Unit;
    }    static unsafe void EnumerateProfilerStats()
    {
        var availableStatHandles = new List<ProfilerRecorderHandle>();
        ProfilerRecorderHandle.GetAvailable(availableStatHandles);        var availableStats = new List<StatInfo>(availableStatHandles.Count);
        foreach (var h in availableStatHandles)
        {
            var statDesc = ProfilerRecorderHandle.GetDescription(h);
            var statInfo = new StatInfo()
            {
                Cat = statDesc.Category,
                Name = statDesc.Name,
                Unit = statDesc.UnitType
            };
            availableStats.Add(statInfo);
        }
        availableStats.Sort((a, b) =>
        {
            var result = string.Compare(a.Cat.ToString(), b.Cat.ToString());
            if (result != 0)
                return result;            return string.Compare(a.Name, b.Name);
        });        var sb = new StringBuilder("Available stats:\n");
        foreach (var s in availableStats)
        {
            sb.AppendLine($"{(int)s.Cat}\t\t - {s.Name}\t\t - {s.Unit}");
        }        Debug.Log(sb.ToString());
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| Category | Gets the ProfilerCategory value of the Profiler metric. |
| DataType | Gets the data value type of the Profiler metric. |
| Flags | Profiler marker flags of the metric. |
| Name | The name of the Profiler metric. |
| NameUtf8 | The name of the Profiler metric as a pointer to UTF-8 byte array. |
| NameUtf8Len | Name length excluding null terminator. |
| UnitType | Gets the data unit type of the Profiler metric. |


            
