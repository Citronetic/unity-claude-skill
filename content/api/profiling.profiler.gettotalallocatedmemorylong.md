This version of Unity is unsupported.



# [Profiler](Profiling.Profiler.html).GetTotalAllocatedMemoryLong




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

public static long GetTotalAllocatedMemoryLong();






### Returns



**long**
        The amount of memory allocated by Unity. This returns 0 if the Profiler is not available.





### Description



The total memory allocated by the internal allocators in Unity. Unity reserves large pools of memory from the system; this includes double the required memory for textures because Unity keeps a copy of each texture on both the CPU and GPU. This function returns the amount of used memory in those pools.


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


            
