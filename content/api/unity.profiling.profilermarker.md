This version of Unity is unsupported.



# ProfilerMarker





struct in
          Unity.Profiling



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Performance marker used for profiling arbitrary code blocks.





Use *ProfilerMarker* to mark up script code blocks for the Profiler.

The information produced by markers is displayed in the [CPU Profiler](../Manual/ProfilerCPU.html) and can be also captured with [Recorder](Profiling.Recorder.html). During development (in Editor and Development Players) this can help to get performance overview of different parts of game code and identify performance issues.


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





*ProfilerMarker* represents a named profiler handle and is the most efficient way of profiling your code. It can be used in jobified code.

Methods [Begin](Unity.Profiling.ProfilerMarker.Begin.html) and [End](Unity.Profiling.ProfilerMarker.End.html) are marked with ConditionalAttribute. They are conditionally compiled away and thus have zero overhead in non-Development (Release) builds.

When Profiler collects instrumentation data, *ProfilerMarker* helps to reduce overhead and the amount of transferred data. [Profiler.BeginSample](Profiling.Profiler.BeginSample.html) transfers full string to the data stream while [ProfilerMarker.Begin](Unity.Profiling.ProfilerMarker.Begin.html) and [CustomSampler.Begin](Profiling.CustomSampler.Begin.html) only integer identifier of the marker.

Also [ProfilerMarker.End](Unity.Profiling.ProfilerMarker.End.html) provides a context information to the [Recorder](Profiling.Recorder.html) making it possible to track timings of a marked code in Players.

Additional resources: [Recorder](Profiling.Recorder.html).





### Properties



| Property | Description |
| --- | --- |
| Handle | Gets native handle of the ProfilerMarker. |





### Constructors



| Constructor | Description |
| --- | --- |
| ProfilerMarker | Constructs a new performance marker for code instrumentation. |





### Public Methods



| Method | Description |
| --- | --- |
| Auto | Creates a helper struct for the scoped using blocks. |
| Begin | Begin profiling a piece of code marked with a custom name defined by this instance of ProfilerMarker. |
| End | End profiling a piece of code marked with a custom name defined by this instance of ProfilerMarker. |


            
