This version of Unity is unsupported.



# [ProfilerUnsafeUtility](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.html).EndSample




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

public static void EndSample(IntPtr markerPtr);






### Parameters



| Parameter | Description |
| --- | --- |
| markerPtr | Marker handle. |





### Description



End profiling a piece of code marked with a custom name defined by this instance of [ProfilerMarker](Unity.Profiling.ProfilerMarker.html).





Code marked with [BeginSample](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.BeginSample.html) and [EndSample](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.EndSample.html) shows up in the Profiler hierarchy.
Always use [BeginSample](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.BeginSample.html) or [BeginSampleWithMetadata](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.BeginSampleWithMetadata.html) to start a section of the instrumented code.

**Note:** [EndSample](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.EndSample.html) is thread safe and can be used in jobified code.

The low level Profiler API is included in a Release Build.


              


```
using Unity.Collections.LowLevel.Unsafe;
using Unity.Profiling.LowLevel;
using Unity.Profiling.LowLevel.Unsafe;
using System;class Example
{
    static readonly IntPtr markerHandle = ProfilerUnsafeUtility.CreateMarker("MyMarker", ProfilerUnsafeUtility.CategoryScripts, MarkerFlags.Default, 0);
    static unsafe void DoWork(int num)
    {
        ProfilerUnsafeUtility.BeginSample(markerHandle);
        //...
        ProfilerUnsafeUtility.EndSample(markerHandle);
    }
}
```





Additional resources: [BeginSample](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.BeginSample.html), [BeginSampleWithMetadata](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.BeginSampleWithMetadata.html), [Recorder](Profiling.Recorder.html), [ProfilerCPU](../Manual/ProfilerCPU.html).


            
