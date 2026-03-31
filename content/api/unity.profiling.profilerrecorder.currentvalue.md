This version of Unity is unsupported.



# [ProfilerRecorder](Unity.Profiling.ProfilerRecorder.html).CurrentValue




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












                    public long CurrentValue;






### Description



Gets current value of the Profiler metric.





Use to obtain immediate profiler counter value or marker timing.
If the current value is the only data you are interested in, there is no need to start ProfilerRecorder or allocate sample storage. In this case use 0 as a capacity parameter when creating ProfilerRecorder.


              


```
using UnityEngine;
using Unity.Profiling;public class Example
{
    public static void LogCurrentSystemMemoryUsage()
    {
        var systemMemoryRecorder = new ProfilerRecorder(ProfilerCategory.Memory, "System Used Memory", 0);
        Debug.Log("System Used Memory (bytes): " + systemMemoryRecorder.CurrentValue);
    }
}
```





Use *CurrentValue* to retrieve timings of a code tagged with [ProfilerMarker.Auto](Unity.Profiling.ProfilerMarker.Auto.html).


              


```
using UnityEngine;
using Unity.Profiling;public class Example
{
    static readonly ProfilerMarker k_MyMarker = new ProfilerMarker(ProfilerCategory.Scripts, "MyMarker");    public static void TimeSynchronousMethodWithMarkers()
    {
        using (var recorder = ProfilerRecorder.StartNew(ProfilerCategory.Scripts, "MyMarker"))
        {
            using (k_MyMarker.Auto())
            {
                // ...
            }            Debug.Log("MyMarker total time, ns:  " + recorder.CurrentValue);
        }
    }
}
```





**Note:**


[Stop](Unity.Profiling.ProfilerRecorder.Stop.html) resets *CurrentValue* to zero.


            
