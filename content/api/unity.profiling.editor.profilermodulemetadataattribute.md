This version of Unity is unsupported.



# ProfilerModuleMetadataAttribute





class in
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



Provides metadata related to a [ProfilerModule](Unity.Profiling.Editor.ProfilerModule.html), such as its name and icon path.





You must attribute a [ProfilerModule](Unity.Profiling.Editor.ProfilerModule.html) derived type with [ProfilerModuleMetadataAttribute](Unity.Profiling.Editor.ProfilerModuleMetadataAttribute.html) for Unity to display it in the Profiler window.


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





### Properties



| Property | Description |
| --- | --- |
| DisplayName | The attributed Profiler module’s display name. |
| IconPath | The path to the attributed Profiler module’s icon. |





### Constructors



| Constructor | Description |
| --- | --- |
| ProfilerModuleMetadataAttribute | Initializes and returns an instance of ProfilerModuleMetadataAttribute. |


            
