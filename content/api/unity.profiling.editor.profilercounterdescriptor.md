This version of Unity is unsupported.



# ProfilerCounterDescriptor





struct in
          Unity.Profiling.Editor


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



Provides a descriptor for a Profiler counter.





Used to describe a [Profiler Counter](https://docs.unity3d.com/Packages/com.unity.profiling.core@latest/index.html?subfolder=/api/Unity.Profiling.ProfilerCounter-1.html) or
            [Profiler Counter Value](https://docs.unity3d.com/Packages/com.unity.profiling.core@latest/index.html?subfolder=/api/Unity.Profiling.ProfilerCounterValue-1.html),
            often within a [ProfilerModule](Unity.Profiling.Editor.ProfilerModule.html) or [ProfilerModuleViewController](Unity.Profiling.Editor.ProfilerModuleViewController.html).


              


```
using System;
using Unity.Profiling;
using Unity.Profiling.Editor;[Serializable]
[ProfilerModuleMetadata("Garbage Collection")]
public class GarbageCollectionProfilerModule : ProfilerModule
{
    static readonly ProfilerCounterDescriptor[] k_ChartCounters = new ProfilerCounterDescriptor[]
    {
        new ProfilerCounterDescriptor("GC Reserved Memory", ProfilerCategory.Memory),
        new ProfilerCounterDescriptor("GC Used Memory", ProfilerCategory.Memory),
        new ProfilerCounterDescriptor("GC Allocated In Frame", ProfilerCategory.Memory),
    };    public GarbageCollectionProfilerModule() : base(k_ChartCounters) {}
}
```





Additional resources: [ProfilerModule](Unity.Profiling.Editor.ProfilerModule.html), [ProfilerModuleViewController](Unity.Profiling.Editor.ProfilerModuleViewController.html).





### Properties



| Property | Description |
| --- | --- |
| CategoryName | The category name of the described Profiler counter. |
| Name | The name of the described Profiler counter. |





### Constructors



| Constructor | Description |
| --- | --- |
| ProfilerCounterDescriptor | Initializes and returns an instance of ProfilerCounterDescriptor. |


            
