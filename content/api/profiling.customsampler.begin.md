This version of Unity is unsupported.



# [CustomSampler](Profiling.CustomSampler.html).Begin




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

public void Begin();






## Declaration

public void Begin([Object](Object.html) targetObject);






### Description



Begin profiling a piece of code with a custom label defined by this instance of [CustomSampler](Profiling.CustomSampler.html).





This will show up in the Profiler hierarchy.


              


```
using UnityEngine;
using UnityEngine.Profiling;public class ExampleClass : MonoBehaviour
{
    CustomSampler sampler;
    void Start()
    {
        sampler = CustomSampler.Create("MyCustomSampler");
    }    void Update()
    {
        sampler.Begin();
        // do something that takes a lot of time
        sampler.End();
    }
}
```





Profiler.BeginSample is conditionally compiled away using ConditionalAttribute.
Thus it will have zero overhead, when it is deployed in non-Development Build.

Additional resources: [CustomSampler.End](Profiling.CustomSampler.End.html), [CustomSampler.Create](Profiling.CustomSampler.Create.html), [ProfilerCPU](../Manual/ProfilerCPU.html).


            
