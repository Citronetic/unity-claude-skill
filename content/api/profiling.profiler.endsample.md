This version of Unity is unsupported.



# [Profiler](Profiling.Profiler.html).EndSample




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

public static void EndSample();






### Description



Ends the current profiling sample.





The Profiler displays samples in its Hierarchy and Timeline views.


              


```
using UnityEngine;
using System.Collections;
using UnityEngine.Profiling;public class ExampleClass : MonoBehaviour
{
    void Example()
    {
        Profiler.BeginSample("MyPieceOfCode");
        // Code to measure...
        Profiler.EndSample();
    }
}
```





Additional resources: [Profiler.BeginSample](Profiling.Profiler.BeginSample.html), [Profiler](../Manual/Profiler.html).


            
