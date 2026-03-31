This version of Unity is unsupported.



# [ProfilerMarkerDataType](Unity.Profiling.LowLevel.ProfilerMarkerDataType.html).Blob8




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



Indicates that [ProfilerMarkerData.Ptr](Unity.Profiling.LowLevel.Unsafe.ProfilerMarkerData.Ptr.html) points to a raw byte array.





Use [Blob8](Unity.Profiling.LowLevel.ProfilerMarkerDataType.Blob8.html) to arbitrary binary data to the [ProfilerUnsafeUtility.BeginSampleWithMetadata](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.BeginSampleWithMetadata.html).


              


```
using System.Diagnostics;
using System.Runtime.CompilerServices;
using Unity.Profiling;
using Unity.Profiling.LowLevel;
using Unity.Profiling.LowLevel.Unsafe;public static class ProfilerMarkerExtension
{
    [MethodImpl(MethodImplOptions.AggressiveInlining)]
    [Conditional("ENABLE_PROFILER")]
    public static unsafe void Begin(this ProfilerMarker marker, byte* metadata, uint metadataSize)
    {
        var data = new ProfilerMarkerData();
        data.Type = (byte)ProfilerMarkerDataType.Blob8;
        data.Size = metadataSize;
        data.Ptr = metadata;
        ProfilerUnsafeUtility.BeginSampleWithMetadata(marker.Handle, 1, &data);
    }
}
```


            
