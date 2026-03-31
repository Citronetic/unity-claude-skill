This version of Unity is unsupported.



# [ProfilerUnsafeUtility](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.html).BeginSample




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

public static void BeginSample(IntPtr markerPtr);






### Parameters



| Parameter | Description |
| --- | --- |
| markerPtr | Profiler marker handle. |





### Description



Starts profiling a piece of code marked with a custom name that the *markerPtr* handle has defined.





Code marked with [BeginSample](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.BeginSample.html) and [EndSample](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.EndSample.html) shows up in the Profiler hierarchy.
Always use [EndSample](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.EndSample.html) to close a started section of the instrumented code.

**Note:** Both [BeginSample](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.BeginSample.html) and [EndSample](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.EndSample.html) are thread safe and can be used in jobified code.

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





Use [Recorder](Profiling.Recorder.html) to obtain per-frame timings in the Player for the specific marker name.

Additional resources: [CreateMarker](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.CreateMarker.html), [EndSample](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.EndSample.html).


            
