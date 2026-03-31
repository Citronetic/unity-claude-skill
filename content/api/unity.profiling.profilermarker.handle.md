This version of Unity is unsupported.



# [ProfilerMarker](Unity.Profiling.ProfilerMarker.html).Handle




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












                    public IntPtr Handle;






### Description



Gets native handle of the [ProfilerMarker](Unity.Profiling.ProfilerMarker.ProfilerMarker.html).





Use *Handle* to obtain a native marker handle and extend funtionality of [ProfilerMarker](Unity.Profiling.ProfilerMarker.ProfilerMarker.html).


              


```
using System.Diagnostics;
using System.Runtime.CompilerServices;
using Unity.Collections.LowLevel.Unsafe;
using Unity.Profiling;
using Unity.Profiling.LowLevel;
using Unity.Profiling.LowLevel.Unsafe;public static class ProfilerMarkerExtension
{
    [MethodImpl(MethodImplOptions.AggressiveInlining)]
    [Conditional("ENABLE_PROFILER")]
    public static unsafe void Begin(this ProfilerMarker marker, int metadata)
    {
        var data = new ProfilerMarkerData();
        data.Type = (byte)ProfilerMarkerDataType.Int32;
        data.Size = (uint)UnsafeUtility.SizeOf<int>();
        data.Ptr = UnsafeUtility.AddressOf(ref metadata);
        ProfilerUnsafeUtility.BeginSampleWithMetadata(marker.Handle, 1, &data);
    }    [MethodImpl(MethodImplOptions.AggressiveInlining)]
    [Conditional("ENABLE_PROFILER")]
    public static unsafe void Begin(this ProfilerMarker marker, uint metadata)
    {
        var data = new ProfilerMarkerData();
        data.Type = (byte)ProfilerMarkerDataType.UInt32;
        data.Size = (uint)UnsafeUtility.SizeOf<uint>();
        data.Ptr = UnsafeUtility.AddressOf(ref metadata);
        ProfilerUnsafeUtility.BeginSampleWithMetadata(marker.Handle, 1, &data);
    }    [MethodImpl(MethodImplOptions.AggressiveInlining)]
    [Conditional("ENABLE_PROFILER")]
    public static unsafe void Begin(this ProfilerMarker marker, long metadata)
    {
        var data = stackalloc ProfilerMarkerData[1];
        data[0].Type = (byte)ProfilerMarkerDataType.Int64;
        data[0].Size = (uint)UnsafeUtility.SizeOf<long>();
        data[0].Ptr = UnsafeUtility.AddressOf(ref metadata);
        ProfilerUnsafeUtility.BeginSampleWithMetadata(marker.Handle, 1, data);
    }    [MethodImpl(MethodImplOptions.AggressiveInlining)]
    [Conditional("ENABLE_PROFILER")]
    public static unsafe void Begin(this ProfilerMarker marker, ulong metadata)
    {
        var data = stackalloc ProfilerMarkerData[1];
        data[0].Type = (byte)ProfilerMarkerDataType.UInt64;
        data[0].Size = (uint)UnsafeUtility.SizeOf<ulong>();
        data[0].Ptr = UnsafeUtility.AddressOf(ref metadata);
        ProfilerUnsafeUtility.BeginSampleWithMetadata(marker.Handle, 1, data);
    }    [MethodImpl(MethodImplOptions.AggressiveInlining)]
    [Conditional("ENABLE_PROFILER")]
    public static unsafe void Begin(this ProfilerMarker marker, float metadata)
    {
        var data = stackalloc ProfilerMarkerData[1];
        data[0].Type = (byte)ProfilerMarkerDataType.Float;
        data[0].Size = (uint)UnsafeUtility.SizeOf<float>();
        data[0].Ptr = UnsafeUtility.AddressOf(ref metadata);
        ProfilerUnsafeUtility.BeginSampleWithMetadata(marker.Handle, 1, data);
    }    [MethodImpl(MethodImplOptions.AggressiveInlining)]
    [Conditional("ENABLE_PROFILER")]
    public static unsafe void Begin(this ProfilerMarker marker, double metadata)
    {
        var data = stackalloc ProfilerMarkerData[1];
        data[0].Type = (byte)ProfilerMarkerDataType.Double;
        data[0].Size = (uint)UnsafeUtility.SizeOf<double>();
        data[0].Ptr = UnsafeUtility.AddressOf(ref metadata);
        ProfilerUnsafeUtility.BeginSampleWithMetadata(marker.Handle, 1, data);
    }    [MethodImpl(MethodImplOptions.AggressiveInlining)]
    [Conditional("ENABLE_PROFILER")]
    public static unsafe void Begin(this ProfilerMarker marker, string metadata)
    {
        var data = stackalloc ProfilerMarkerData[1];
        data[0].Type = (byte)ProfilerMarkerDataType.String16;
        fixed(char* c = metadata)
        {
            data[0].Size = ((uint)metadata.Length + 1) * 2;
            data[0].Ptr = c;
            ProfilerUnsafeUtility.BeginSampleWithMetadata(marker.Handle, 1, data);
        }
    }
}
```





Additional resources: [ProfilerUnsafeUtility.CreateMarker](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.CreateMarker.html), [ProfilerUnsafeUtility.BeginSampleWithMetadata](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.BeginSampleWithMetadata.html).


            
