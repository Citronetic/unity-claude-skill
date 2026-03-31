This version of Unity is unsupported.



# [ProfilerRecorderOptions](Unity.Profiling.ProfilerRecorderOptions.html).SumAllSamplesInFrame




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



Use to sum all samples within a frame and collect those as one sample per frame.


              


```
using System;
using Unity.Profiling;
using UnityEngine;public class CollectGCAllocCountExample2
{
    static void PrintGCAllocCount(Action a)
    {
        using (var gcAllocRecorder = ProfilerRecorder.StartNew(ProfilerCategory.Internal, "GC.Alloc", 1, ProfilerRecorderOptions.SumAllSamplesInFrame | ProfilerRecorderOptions.CollectOnlyOnCurrentThread))
        {
            a.Invoke();            gcAllocRecorder.Stop();            var count = gcAllocRecorder.Count == 0 ? 0 : gcAllocRecorder.GetSample(0).Count;
            Debug.Log("GC allocs count: " + count);
        }
    }
}
```





Additional resources: [ProfilerRecorderSample](Unity.Profiling.ProfilerRecorderSample.html).


            
