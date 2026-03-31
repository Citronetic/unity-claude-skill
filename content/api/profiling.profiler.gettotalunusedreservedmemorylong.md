This version of Unity is unsupported.



# [Profiler](Profiling.Profiler.html).GetTotalUnusedReservedMemoryLong




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

public static long GetTotalUnusedReservedMemoryLong();






### Returns



**long**
        The amount of unused memory in the reserved pools. This returns 0 if the Profiler is not available.





### Description



Unity allocates memory in pools for usage when unity needs to allocate memory. This function returns the amount of unused memory in these pools.


              


```
using UnityEngine;
using UnityEngine.Profiling;public class Example : MonoBehaviour
{
    void Update()
    {
        Debug.Log("Total Reserved memory by Unity: " + Profiler.GetTotalReservedMemoryLong() + "Bytes");
        Debug.Log("- Allocated memory by Unity: " + Profiler.GetTotalAllocatedMemoryLong() + "Bytes");
        Debug.Log("- Reserved but not allocated: " + Profiler.GetTotalUnusedReservedMemoryLong() + "Bytes");
    }
}
```


            
