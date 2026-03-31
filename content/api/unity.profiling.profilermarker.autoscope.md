This version of Unity is unsupported.



# AutoScope





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



Helper IDisposable struct for use with [ProfilerMarker.Auto](Unity.Profiling.ProfilerMarker.Auto.html).





Use [ProfilerMarker.Auto](Unity.Profiling.ProfilerMarker.Auto.html) to enclose a piece of code you want to profile in *using* statement. Constructor of *AutoScope* calls [ProfilerMarker.Begin](Unity.Profiling.ProfilerMarker.Begin.html) and *Dispose* method - [ProfilerMarker.Begin](Unity.Profiling.ProfilerMarker.Begin.html).


              


```
using Unity.Profiling;public class MySystemClass
{
    ProfilerMarker simulatePerfMarker = new ProfilerMarker("MySystem.Simulate");    public void UpdateLogic()
    {
        using (simulatePerfMarker.Auto())
        {
            // ...
        }
    }
}
```


            
