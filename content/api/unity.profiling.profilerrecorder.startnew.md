This version of Unity is unsupported.



# [ProfilerRecorder](Unity.Profiling.ProfilerRecorder.html).StartNew




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

public static [Unity.Profiling.ProfilerRecorder](Unity.Profiling.ProfilerRecorder.html) StartNew([Unity.Profiling.ProfilerCategory](Unity.Profiling.ProfilerCategory.html) category,
string statName,
int capacity,
[Unity.Profiling.ProfilerRecorderOptions](Unity.Profiling.ProfilerRecorderOptions.html) options);






### Parameters



| Parameter | Description |
| --- | --- |
| category | Profiler category. |
| statName | Profiler marker or counter name. |
| capacity | Maximum amount of samples to be collect. Must be greater than 0. |
| options | ProfilerRecorder options. |





### Returns



**ProfilerRecorder**
        Returns new enabled recorder instance.





### Description



Initialize a new instance of ProfilerRecorder and start data collection.





For a list of built-in Profiler markers available,
                see the User Manual documentation on [Common Profiler markers](../Manual/profiler-markers.html).

**Note:** *capacity* paramether must be greater than 0, otherwise StartNew throws an exception.


              


```
using Unity.Profiling;
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    ProfilerRecorder systemMemoryRecorder;
    ProfilerRecorder gcMemoryRecorder;
    ProfilerRecorder mainThreadTimeRecorder;    void OnEnable()
    {
        systemMemoryRecorder = ProfilerRecorder.StartNew(ProfilerCategory.Memory, "System Used Memory");
        gcMemoryRecorder = ProfilerRecorder.StartNew(ProfilerCategory.Memory, "GC Reserved Memory");
        mainThreadTimeRecorder = ProfilerRecorder.StartNew(ProfilerCategory.Internal, "Main Thread", 15);
    }    void OnDisable()
    {
        systemMemoryRecorder.Dispose();
        gcMemoryRecorder.Dispose();
        mainThreadTimeRecorder.Dispose();
    }
}
```





Additional resources: [ctor](Unity.Profiling.ProfilerRecorder-ctor.html).




---








## Declaration

public static [Unity.Profiling.ProfilerRecorder](Unity.Profiling.ProfilerRecorder.html) StartNew([Unity.Profiling.ProfilerMarker](Unity.Profiling.ProfilerMarker.html) marker,
int capacity,
[Unity.Profiling.ProfilerRecorderOptions](Unity.Profiling.ProfilerRecorderOptions.html) options);






### Parameters



| Parameter | Description |
| --- | --- |
| capacity | Maximum amount of samples to be collected. Must be greater than 0. |
| options | Profiler recorder options. |
| marker | Profiler marker instance. |





### Returns



**ProfilerRecorder**
        Returns new enabled recorder instance.





### Description



Initialize a new instance of ProfilerRecorder for ProfilerMarker and start data collection.





Additional resources:: [ProfilerMarker](Unity.Profiling.ProfilerMarker.html).


            
