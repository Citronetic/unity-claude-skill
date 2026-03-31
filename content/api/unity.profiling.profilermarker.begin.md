This version of Unity is unsupported.



# [ProfilerMarker](Unity.Profiling.ProfilerMarker.html).Begin




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

public void Begin();






## Declaration

public void Begin([Object](Object.html) contextUnityObject);






### Parameters



| Parameter | Description |
| --- | --- |
| contextUnityObject | Object associated with the operation. |





### Description



Begin profiling a piece of code marked with a custom name defined by this instance of [ProfilerMarker](Unity.Profiling.ProfilerMarker.html).





Always use [End](Unity.Profiling.ProfilerMarker.End.html) to close a started section of an instrumented code.

Code marked with [Begin](Unity.Profiling.ProfilerMarker.Begin.html) and [End](Unity.Profiling.ProfilerMarker.End.html) will show up in the Profiler hierarchy.
Use [Recorder](Profiling.Recorder.html) to obtain per-frame timings in the Player.

**Note:** Both [Begin](Unity.Profiling.ProfilerMarker.Begin.html) and [End](Unity.Profiling.ProfilerMarker.End.html) are thread safe and can be used in jobified code.


              


```
using Unity.Profiling;public class MySystemClass
{
    static ProfilerMarker s_PreparePerfMarker = new ProfilerMarker("MySystem.Prepare");    public void UpdateLogic()
    {
        s_PreparePerfMarker.Begin();
        // ...
        s_PreparePerfMarker.End();
    }
}
```





[Begin](Unity.Profiling.ProfilerMarker.Begin.html) is conditionally compiled away using ConditionalAttribute.
Thus it will have zero overhead, when it is deployed in non-Development Build.

Additional resources: [ProfilerMarker.End](Unity.Profiling.ProfilerMarker.End.html), [Recorder](Profiling.Recorder.html), [ProfilerCPU](../Manual/ProfilerCPU.html).


            
