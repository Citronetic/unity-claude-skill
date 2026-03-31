This version of Unity is unsupported.



# [ProfilerModuleMetadataAttribute](Unity.Profiling.Editor.ProfilerModuleMetadataAttribute.html).IconPath




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












                    public string IconPath;






### Description



The path to the attributed Profiler module’s icon.





Unity displays a Profiler module’s icon next to its name in the Profiler window. The recommended icon size at the specified path is 16x16 pixels.
                To provide a retina icon use the “@2x” suffix, as shown in the example below. To provide a dark-mode icon, use the “d_” prefix, as shown in the example below.
                If you're working in a package, use the [package path scheme](../Manual/upm-assets.html) to reference the icon.

A string. Read-only.


              


```
// With the following icons present in the Assets/Icons directory of the project and an icon path of "Assets/Icons/GarbageCollectionIcon.png", Unity will load the appropriate icon depending upon the context.
// - Assets/Icons/GarbageCollectionIcon.png // 16 x 16 Standard Light Mode Icon
// - Assets/Icons/GarbageCollectionIcon@2x.png // 32 x 32 Retina Light Mode Icon
// - Assets/Icons/d_GarbageCollectionIcon.png // 16 x 16 Standard Dark Mode Icon
// - Assets/Icons/d_GarbageCollectionIcon@2x.png // 32 x 32 Retina Dark Mode Iconusing System;
using Unity.Profiling;
using Unity.Profiling.Editor;[Serializable]
[ProfilerModuleMetadata("Garbage Collection", IconPath = "Assets/Icons/GarbageCollectionIcon.png")]
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


            
