This version of Unity is unsupported.



# [Profiler](Profiling.Profiler.html).enableAllocationCallstacks




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












                    public static bool enableAllocationCallstacks;






### Description



Enables the recording of callstacks for managed allocations.





When enabled, the Unity player saves callstack for each managed allocation sample which is known as *GC.Alloc*. You can see the callstacks in the Timeline View or in the Object Details pane of the Hierarchy View when selecting the *GC.Alloc* sample.

You must also set [Profiler.enabled](Profiling.Profiler-enabled.html) to `true` in order to start the capture.


              


```
using UnityEngine;
using System.Collections;
using UnityEngine.Profiling;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        Profiler.logFile = "mylog"; //Also supports passing "myLog.raw"
        Profiler.enableBinaryLog = true;
        Profiler.enableAllocationCallstacks = true;
        Profiler.enabled = true;        // Optional, if more memory is needed for the buffer
        Profiler.maxUsedMemory = 256 * 1024 * 1024;
    }
}
```





**Note:**
Callstacks capture adds noticable performance overhead to the profiling for every managed allocation.


            
