This version of Unity is unsupported.



# [ProfilerRecorderOptions](Unity.Profiling.ProfilerRecorderOptions.html).CollectOnlyOnCurrentThread




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



Use to collect samples only on the thread ProfilerRecorder was initialized on.


              


```
using System;
using Unity.Profiling;
using UnityEngine;public class CollectGCAllocCountExample
{
    static void PrintGCAllocCount(Action a)
    {
        using (var gcAllocRecorder = ProfilerRecorder.StartNew(ProfilerCategory.Internal, "GC.Alloc", 100, ProfilerRecorderOptions.CollectOnlyOnCurrentThread))
        {
            a.Invoke();            gcAllocRecorder.Stop();            Debug.Log("GC allocs count: " + gcAllocRecorder.Count);
        }
    }
}
```


            
