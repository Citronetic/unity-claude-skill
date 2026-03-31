This version of Unity is unsupported.



# [ProfilerUnsafeUtility](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.html).BeginSampleWithMetadata




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

public static void BeginSampleWithMetadata(IntPtr markerPtr,
int metadataCount,
void* metadata);






### Parameters



| Parameter | Description |
| --- | --- |
| markerPtr | Profiler marker handle. |
| metadataCount | Metadata parameters count. |
| metadata | Unsafe pointer to the ProfilerMarkerData array. |





### Description



Starts profiling a piece of code marked with a custom name that the *markerPtr* handle and metadata parameters has defined.





Code marked with [BeginSampleWithMetadata](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.BeginSampleWithMetadata.html) and [EndSample](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.EndSample.html) shows up in the Profiler hierarchy.
Always use [EndSample](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.EndSample.html) to close a started section of the instrumented code.

In the Timeline view of the Profiler Window the provided *metadata* is available in the tooltip message.
Use [HierarchyFrameDataView.GetItemMetadata](Profiling.HierarchyFrameDataView.GetItemMetadata.html) to retrieve metadata programmatically.

**Note:** Both [BeginSampleWithMetadata](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.BeginSampleWithMetadata.html) and [EndSample](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.EndSample.html) are thread safe and can be used in jobified code.

The low level Profiler API is included in a Release Build.


              


```
using Unity.Collections.LowLevel.Unsafe;
using Unity.Profiling;
using Unity.Profiling.LowLevel;
using Unity.Profiling.LowLevel.Unsafe;
using System;class Example
{
    static IntPtr MakeMarkerWithIntMetadata(string name, string paramName)
    {
        var handle = ProfilerUnsafeUtility.CreateMarker(name, ProfilerUnsafeUtility.CategoryScripts, MarkerFlags.Default, 1);
        ProfilerUnsafeUtility.SetMarkerMetadata(handle, 0, paramName, (byte)ProfilerMarkerDataType.Int32, (byte)ProfilerMarkerDataUnit.Count);
        return handle;
    }    static readonly IntPtr markerHandle = MakeMarkerWithIntMetadata("MyMarker", "Work Idx");    static unsafe void DoWork(int num)
    {
        var metadata = stackalloc ProfilerMarkerData[1];
        metadata[0].Type = (byte)ProfilerMarkerDataType.Int32;
        metadata[0].Size = (uint)UnsafeUtility.SizeOf<int>();
        metadata[0].Ptr = UnsafeUtility.AddressOf(ref num);
        ProfilerUnsafeUtility.BeginSampleWithMetadata(markerHandle, 1, metadata);
        //...
        ProfilerUnsafeUtility.EndSample(markerHandle);
    }
}
```





Use [Recorder](Profiling.Recorder.html) to obtain per-frame timings in the Player for the specific marker name.

Additional resources: [EndSample](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.EndSample.html), [CreateMarker](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.CreateMarker.html), [SetMarkerMetadata](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.SetMarkerMetadata.html).


            
