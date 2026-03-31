This version of Unity is unsupported.



# ProfilerCounterDescriptor Constructor




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

public ProfilerCounterDescriptor(string name,
[Unity.Profiling.ProfilerCategory](Unity.Profiling.ProfilerCategory.html) category);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of the Profiler counter to describe. A string. |
| category | The category of the Profiler counter to describe. A ProfilerCategory. |





### Description



Initializes and returns an instance of [ProfilerCounterDescriptor](Unity.Profiling.Editor.ProfilerCounterDescriptor.html).


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





Additional resources: [ProfilerModule](Unity.Profiling.Editor.ProfilerModule.html).




---








## Declaration

public ProfilerCounterDescriptor(string name,
string categoryName);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of the Profiler counter to describe, as a string. |
| categoryName | The category name of the Profiler counter to describe, as a string. |





### Description



Initializes and returns an instance of [ProfilerCounterDescriptor](Unity.Profiling.Editor.ProfilerCounterDescriptor.html).


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
        new ProfilerCounterDescriptor("GC Reserved Memory", ProfilerCategory.Memory.Name),
        new ProfilerCounterDescriptor("GC Used Memory", ProfilerCategory.Memory.Name),
        new ProfilerCounterDescriptor("GC Allocated In Frame", ProfilerCategory.Memory.Name),
    };    public GarbageCollectionProfilerModule() : base(k_ChartCounters) {}
}
```





Additional resources: [ProfilerModule](Unity.Profiling.Editor.ProfilerModule.html).


            
