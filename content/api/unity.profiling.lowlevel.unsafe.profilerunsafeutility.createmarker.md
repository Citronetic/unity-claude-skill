This version of Unity is unsupported.



# [ProfilerUnsafeUtility](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.html).CreateMarker




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

public static IntPtr CreateMarker(string name,
ushort categoryId,
[Unity.Profiling.LowLevel.MarkerFlags](Unity.Profiling.LowLevel.MarkerFlags.html) flags,
int metadataCount);






## Declaration

public static IntPtr CreateMarker(char* name,
int nameLen,
ushort categoryId,
[Unity.Profiling.LowLevel.MarkerFlags](Unity.Profiling.LowLevel.MarkerFlags.html) flags,
int metadataCount);






### Parameters



| Parameter | Description |
| --- | --- |
| name | A marker name. |
| categoryId | A profiler category identifier. |
| flags | The marker flags. |
| metadataCount | The metadata parameters count, or 0 if no parameters are expected. |
| nameLen | Marker name string length. |





### Returns



**IntPtr**
        Returns the marker native handle.





### Description



Constructs a new Profiler marker handle for code instrumentation.





Use profiler marker handle with [ProfilerUnsafeUtility](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.html) methods only.

The *categoryId* parameter associates the marker with one of the predefined categories in [ProfilerCategory](Unity.Profiling.ProfilerCategory.html) struct.

**Note:** Markers created with *CreateMarker* automatically get [MarkerFlags.Script](Unity.Profiling.LowLevel.MarkerFlags.Script.html) flag.


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





Use *CreateMarker* to set metadata parameter names when passing metadata with :ref::BeginSampleWithMetadata method.


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





Additional resources: [ProfilerCategory](Unity.Profiling.ProfilerCategory.html), [MarkerFlags](Unity.Profiling.LowLevel.MarkerFlags.html).


            
