This version of Unity is unsupported.



# [MarkerFlags](Unity.Profiling.LowLevel.MarkerFlags.html).AvailabilityNonDevelopment




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



Specifies that marker is present in non-development Players.





Use *AvailabilityNonDevelopment* to determine whether or not a profiler marker or counter is available in non-development Players.


              


```
using System.Collections.Generic;
using Unity.Profiling.LowLevel;
using Unity.Profiling.LowLevel.Unsafe;public class Example
{
    public static unsafe void WriteAllNonDevelopmentStatsToFile(string filePath)
    {
        using (var writer = new System.IO.StreamWriter(filePath))
        {
            var availableStatHandles = new List<ProfilerRecorderHandle>();
            ProfilerRecorderHandle.GetAvailable(availableStatHandles);
            foreach (var h in availableStatHandles)
            {
                var statDesc = ProfilerRecorderHandle.GetDescription(h);
                if (!statDesc.Flags.HasFlag(MarkerFlags.AvailabilityNonDevelopment))
                    continue;                var name = System.Text.Encoding.UTF8.GetString(statDesc.NameUtf8, statDesc.NameUtf8Len);
                writer.WriteLine($"{name};{statDesc.Flags}");
            }
        }
    }
}
```





Use *AvailabilityNonDevelopment* to signify that a profiler marker created with the help of [ProfilerUnsafeUtility.CreateMarker](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.CreateMarker.html) is available in non-development Players.


              


```
using Unity.Collections.LowLevel.Unsafe;
using Unity.Profiling.LowLevel;
using Unity.Profiling.LowLevel.Unsafe;
using System;class Example
{
    static readonly IntPtr markerHandle = ProfilerUnsafeUtility.CreateMarker("MyMarker", ProfilerUnsafeUtility.CategoryScripts, MarkerFlags.AvailabilityNonDevelopment, 0);
    static unsafe void DoWork(int num)
    {
        ProfilerUnsafeUtility.BeginSample(markerHandle);
        //...
        ProfilerUnsafeUtility.EndSample(markerHandle);
    }
}
```





**Note:**

*AvailabilityNonDevelopment* flag has no effect on the [ProfilerMarker](Unity.Profiling.ProfilerMarker.html) creation as [ProfilerMarker](Unity.Profiling.ProfilerMarker.html) API is Development Player only.


            
