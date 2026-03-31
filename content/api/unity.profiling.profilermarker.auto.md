This version of Unity is unsupported.



# [ProfilerMarker](Unity.Profiling.ProfilerMarker.html).Auto




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

public [Unity.Profiling.ProfilerMarker.AutoScope](Unity.Profiling.ProfilerMarker.AutoScope.html) Auto();






### Returns



**AutoScope**
        IDisposable struct which calls [Begin](Unity.Profiling.ProfilerMarker.Begin.html) and [End](Unity.Profiling.ProfilerMarker.End.html) automatically.





### Description



Creates a helper struct for the scoped **using** blocks.





[Begin](Unity.Profiling.ProfilerMarker.Begin.html) is called in the constructor and [End](Unity.Profiling.ProfilerMarker.End.html) in the *Dispose* method.

**Note:** [Auto](Unity.Profiling.ProfilerMarker.Auto.html) is thread safe and can be used in jobified code.


              


```
using Unity.Profiling;public class MySystemClass
{
    static ProfilerMarker s_SimulatePerfMarker = new ProfilerMarker("MySystem.Simulate");    public void UpdateLogic()
    {
        using (s_SimulatePerfMarker.Auto())
        {
            // ...
        }
    }
}
```


            
