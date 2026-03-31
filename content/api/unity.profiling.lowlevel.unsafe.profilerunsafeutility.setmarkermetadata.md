This version of Unity is unsupported.



# [ProfilerUnsafeUtility](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.html).SetMarkerMetadata




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

public static void SetMarkerMetadata(IntPtr markerPtr,
int index,
string name,
byte type,
byte unit);






## Declaration

public static void SetMarkerMetadata(IntPtr markerPtr,
int index,
char* name,
int nameLen,
byte type,
byte unit);






### Parameters



| Parameter | Description |
| --- | --- |
| markerPtr | Profiler marker handle. |
| index | Metadata parameter index. |
| name | Metadata parameter name. |
| type | Metadata type. Must be one of ProfilerMarkerDataType values. |
| unit | Metadata unit. Must be one of ProfilerMarkerDataUnit values. |
| nameLen | Metadata parameter name length. |





### Description



Set Profiler marker metadata name and type.





Use to add additional usage context to the Profiler sample metadata parameter.


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
    }    static readonly IntPtr markerHandle = MakeMarkerWithIntMetadata("MyMarker", "Work Idx");
    static unsafe void DoWork(int num)
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





Additional resources: [ProfilerMarkerDataType](Unity.Profiling.LowLevel.ProfilerMarkerDataType.html), [ProfilerMarkerDataUnit](Unity.Profiling.ProfilerMarkerDataUnit.html).


            
