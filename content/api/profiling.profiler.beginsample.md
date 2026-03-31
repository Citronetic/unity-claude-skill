This version of Unity is unsupported.



# [Profiler](Profiling.Profiler.html).BeginSample




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

public static void BeginSample(string name);






## Declaration

public static void BeginSample(string name,
[Object](Object.html) targetObject);






### Parameters



| Parameter | Description |
| --- | --- |
| name | A string to identify the sample in the Profiler window. |
| targetObject | An object that provides context to the sample,. |





### Description



Begin profiling a piece of code with a custom label.





The Profiler displays the sample in the Hierarchy and Timeline views. The sample is nested under the events or functional calls that lead to the execution of the sampled code. For example, a sample placed in Update displays under `Update.ScriptRunBehaviourUpdate` in the Profiler Hierarchy and Timeline views. If you supply a `targetObject`, then you can click on the sample in the Profiler Timeline to select that object in the Editor (when profiling from the Editor Play mode).

Profiler.BeginSample is conditionally compiled away using ConditionalAttribute.
Thus it will have zero overhead, when it is deployed in non-Development Build.


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





Additional resources: [Profiler.EndSample](Profiling.Profiler.EndSample.html), [ProfilerCPU](../Manual/ProfilerCPU.html).


            
