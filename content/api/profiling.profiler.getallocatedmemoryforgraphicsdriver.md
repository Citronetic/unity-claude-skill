This version of Unity is unsupported.



# [Profiler](Profiling.Profiler.html).GetAllocatedMemoryForGraphicsDriver




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

public static long GetAllocatedMemoryForGraphicsDriver();






### Returns



**long**
        Estimated used graphics memory in bytes. Returns 0 in Release Players.





### Description



Returns the estimated amount of allocated memory for the graphics driver, in bytes.





Use to obtain a value of the graphics memory used by all allocated graphics resources such as textures, meshes, compute and geometry buffers. The value is estimated based on the properties of created graphics resources which are allocated using graphics scripting API as well as internal graphics resources used by the Unity engine.

**Note:** Only available in development players and the Unity Editor.


              


```
using UnityEngine;
using UnityEngine.Profiling;public class ExampleClass : MonoBehaviour
{
    void Update()
    {
            Debug.Log("Estimated used graphics memory: " + Profiler.GetAllocatedMemoryForGraphicsDriver() + " Bytes");
    }
}
```





Additional resources: [GetTotalReservedMemoryLong](Profiling.Profiler.GetTotalReservedMemoryLong.html).


            
