This version of Unity is unsupported.



# [Profiler](Profiling.Profiler.html).GetMonoHeapSizeLong




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

public static long GetMonoHeapSizeLong();






### Returns



**long**
        The size of the managed heap.





### Description



Returns the size of the reserved space for managed-memory.





This will grow when the total allocated managed-memory exceeds the currently reserved amount.
The size of the reserved space for managed allocations, will also have an effect on how frequent the garbage collector will run, and how long it takes to make a garbage collection. The larger the heap, the longer it takes, but the less often it will run.

**Note**: This API is available even when the rest of Profiler class is not available (ie, in release builds).


              


```
using UnityEngine;
using UnityEngine.Profiling;public class ExampleClass : MonoBehaviour
{
    void Update()
    {
        Debug.Log("Allocated Mono heap size" + Profiler.GetMonoHeapSizeLong() + "Bytes");
    }
}
```


            
