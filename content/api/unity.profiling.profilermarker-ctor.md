This version of Unity is unsupported.



# ProfilerMarker Constructor




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

public ProfilerMarker(string name);






## Declaration

public ProfilerMarker([Unity.Profiling.ProfilerCategory](Unity.Profiling.ProfilerCategory.html) category,
string name);






## Declaration

public ProfilerMarker([Unity.Profiling.ProfilerCategory](Unity.Profiling.ProfilerCategory.html) category,
char* name,
int nameLen);






## Declaration

public ProfilerMarker([Unity.Profiling.ProfilerCategory](Unity.Profiling.ProfilerCategory.html) category,
string name,
[Unity.Profiling.LowLevel.MarkerFlags](Unity.Profiling.LowLevel.MarkerFlags.html) flags);






## Declaration

public ProfilerMarker([Unity.Profiling.ProfilerCategory](Unity.Profiling.ProfilerCategory.html) category,
char* name,
int nameLen,
[Unity.Profiling.LowLevel.MarkerFlags](Unity.Profiling.LowLevel.MarkerFlags.html) flags);






## Declaration

public ProfilerMarker(char* name,
int nameLen);






### Parameters



| Parameter | Description |
| --- | --- |
| name | Marker name. |
| category | Profiler category. |
| nameLen | Marker name length. |
| flags | The marker flags. |





### Description



Constructs a new performance marker for code instrumentation.





Use *ProfilerMarker* to markup a piece of code for the Profiler and [Recorder](Profiling.Recorder.html).


              


```
using Unity.Profiling;public class MySystemClass
{
    static readonly ProfilerMarker s_PreparePerfMarker = new ProfilerMarker("MySystem.Prepare");
    static readonly ProfilerMarker s_SimulatePerfMarker = new ProfilerMarker(ProfilerCategory.Ai, "MySystem.Simulate");    public void UpdateLogic()
    {
        s_PreparePerfMarker.Begin();
        // ...
        s_PreparePerfMarker.End();        using (s_SimulatePerfMarker.Auto())
        {
            // ...
        }
    }
}
```


            
