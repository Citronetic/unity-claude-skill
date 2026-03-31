This version of Unity is unsupported.



# [JobsUtility](Unity.Jobs.LowLevel.Unsafe.JobsUtility.html).MaxJobThreadCount




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












                    public static int MaxJobThreadCount;






### Description



The maximum number of job threads that the job system can create.





This maximum is the maximum number of threads that the job can system support. However, the maximum number of job worker threads that the job system
creates is lower because the job system doesn't create more job worker threads than logical CPU cores on the target hardware. This value is useful for compile time constants,
however when used for creating buffers it might be larger than what you need. If you want to allocate a buffer that can be subdivided evenly between job worker threads, use
the runtime constant that [JobsUtility.ThreadIndexCount](Unity.Jobs.LowLevel.Unsafe.JobsUtility.ThreadIndexCount.html) returns.

                SA: Unity.Jobs.LowLevel.Unsafe.JobsUtility.ThreadIndexCount


              


```
using UnityEngine;public class JobWorkerExample : MonoBehaviour
{
    void Update()
    {
        // Sets worker count thread to 1
        Unity.Jobs.LowLevel.Unsafe.JobsUtility.JobWorkerCount = 1;
        // Sets worker count thread to 4
        Unity.Jobs.LowLevel.Unsafe.JobsUtility.JobWorkerCount = 4;
        // Reads the value of JobWorkerCount and outputs it to the Unity log
        Debug.Log("${ Unity.Jobs.LowLevel.Unsafe.JobsUtility.JobWorkerCount}");    }
}
```


            
