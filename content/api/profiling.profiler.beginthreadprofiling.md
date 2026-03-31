This version of Unity is unsupported.



# [Profiler](Profiling.Profiler.html).BeginThreadProfiling




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

public static void BeginThreadProfiling(string threadGroupName,
string threadName);






### Parameters



| Parameter | Description |
| --- | --- |
| threadGroupName | The name of the thread group to which the thread belongs. |
| threadName | The name of the thread. |





### Description



Enables profiling on the thread from which you call this method.





Makes the thread show up with its registered name in the Profiler Timeline View, showing the duration of each sample on the thread.
Samples which cross frame boundaries are sliced and might contribute time to multiple frames.

**Note:**
Calling this method on an internal Unity thread (such as main thread, render thread or job system threads) has no effect.


              


```
using UnityEngine;
using UnityEngine.Profiling;
using System.Threading;public class ExampleClass : MonoBehaviour
{
    CustomSampler sampler;
    void Start()
    {
        sampler = CustomSampler.Create("MyCustomSampler");
        var thread = new Thread(MyThreadFunc) { IsBackground = true };
        thread.Start();
    }    void MyThreadFunc()
    {
        Profiler.BeginThreadProfiling("My threads", "My thread 1");
        // Now samples will show up in the profiler timeline view
        for (int i = 0; i < 10; i++)
        {
            sampler.Begin();
            // ...
            sampler.End();
        }        // Unregister the thread before exit
        Profiler.EndThreadProfiling();
    }
}
```





**Note:**
[Profiler.EndThreadProfiling](Profiling.Profiler.EndThreadProfiling.html) should always be called before thread destruction to free internal resources.

Additional resources: [Profiler.EndThreadProfiling](Profiling.Profiler.EndThreadProfiling.html), [CustomSampler](Profiling.CustomSampler.html).


            
