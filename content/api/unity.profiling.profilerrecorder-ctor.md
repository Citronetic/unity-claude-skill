This version of Unity is unsupported.



# ProfilerRecorder Constructor




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

public ProfilerRecorder(string categoryName,
string statName,
int capacity,
[Unity.Profiling.ProfilerRecorderOptions](Unity.Profiling.ProfilerRecorderOptions.html) options);






## Declaration

public ProfilerRecorder([Unity.Profiling.ProfilerCategory](Unity.Profiling.ProfilerCategory.html) category,
string statName,
int capacity,
[Unity.Profiling.ProfilerRecorderOptions](Unity.Profiling.ProfilerRecorderOptions.html) options);






### Parameters



| Parameter | Description |
| --- | --- |
| categoryName | Profiler category name. |
| statName | Profiler marker or counter name. |
| capacity | Maximum amount of samples to be collected. |
| options | Profiler recorder options. |
| category | Profiler category identifier. |





### Description



Constructs ProfilerRecorder instance with a Profiler metric name and category.





Use to initialize ProfilerRecorder and associate it with a specific Profiler metric.

By default, ProfilerRecorder does not start collecting data immediately. Use [ProfilerRecorderOptions.StartImmediately](Unity.Profiling.ProfilerRecorderOptions.StartImmediately.html) to enable collection together with ProfilerRecorder construction.  Alternatively, use [Start](Unity.Profiling.ProfilerRecorder.Start.html) method after construction.

If the [CurrentValue](Unity.Profiling.ProfilerRecorder.CurrentValue.html) is the only data you are interested in, you don't need to start ProfilerRecorder or allocate sample storage. In this case, use 0 as a `capacity` parameter when creating ProfilerRecorder.

Using a negative number as a `capacity` parameter throws `ArgumentException`.

For a list of built-in Profiler markers and counters available, refer to [Profiler markers reference](../Manual/profiler-markers.html) and [Profiler counters reference](../Manual/profiler-counters-reference.html).

**Note:**

ProfilerRecorder allocates memory and must be disposed when it is no longer needed.


              


```
using Unity.Profiling;
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    ProfilerRecorder systemMemoryRecorder;
    ProfilerRecorder gcMemoryRecorder;
    ProfilerRecorder mainThreadTimeRecorder;    void OnEnable()
    {
        systemMemoryRecorder = new ProfilerRecorder(ProfilerCategory.Memory, "System Used Memory", 1, ProfilerRecorderOptions.Default | ProfilerRecorderOptions.StartImmediately);
        gcMemoryRecorder = new ProfilerRecorder(ProfilerCategory.Memory, "GC Reserved Memory", 1, ProfilerRecorderOptions.Default | ProfilerRecorderOptions.StartImmediately);
        mainThreadTimeRecorder = new ProfilerRecorder(ProfilerCategory.Internal, "Main Thread", 15);
        mainThreadTimeRecorder.Start();
    }    void OnDisable()
    {
        systemMemoryRecorder.Dispose();
        gcMemoryRecorder.Dispose();
        mainThreadTimeRecorder.Dispose();
    }
}
```





Additional resources: [StartNew](Unity.Profiling.ProfilerRecorder.StartNew.html).




---








## Declaration

public ProfilerRecorder(string statName,
int capacity,
[Unity.Profiling.ProfilerRecorderOptions](Unity.Profiling.ProfilerRecorderOptions.html) options);






### Parameters



| Parameter | Description |
| --- | --- |
| statName | Profiler marker or counter name. |
| capacity | Maximum amount of samples to be collected. |
| options | Profiler recorder options. |





### Description



Constructs ProfilerRecorder instance with a Profiler metric name.





Use to initialize ProfilerRecorder with a metric name only.
Unity searches for the metric name across all categories, and as such, initialization is slower than if you specify a category.




---








## Declaration

public ProfilerRecorder([Unity.Profiling.ProfilerCategory](Unity.Profiling.ProfilerCategory.html) category,
char* statName,
int statNameLen,
int capacity,
[Unity.Profiling.ProfilerRecorderOptions](Unity.Profiling.ProfilerRecorderOptions.html) options);






## Declaration

public ProfilerRecorder([Unity.Profiling.ProfilerMarker](Unity.Profiling.ProfilerMarker.html) marker,
int capacity,
[Unity.Profiling.ProfilerRecorderOptions](Unity.Profiling.ProfilerRecorderOptions.html) options);






## Declaration

public ProfilerRecorder([Unity.Profiling.LowLevel.Unsafe.ProfilerRecorderHandle](Unity.Profiling.LowLevel.Unsafe.ProfilerRecorderHandle.html) statHandle,
int capacity,
[Unity.Profiling.ProfilerRecorderOptions](Unity.Profiling.ProfilerRecorderOptions.html) options);






### Parameters



| Parameter | Description |
| --- | --- |
| category | Profiler category identifier. |
| statName | Profiler marker or counter name pointer. |
| statNameLen | Profiler marker or counter name length. |
| capacity | Maximum amount of samples to be collected. |
| options | Profiler recorder options. |
| marker | Profiler marker instance. |
| statHandle | Profiler recorder handle. |





### Description



Constructs ProfilerRecorder instance with a Profiler metric name pointer or other unsafe handles.


            
