This version of Unity is unsupported.



# [Sampler](Profiling.Sampler.html).Get




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

public static [Profiling.Sampler](Profiling.Sampler.html) Get(string name);






### Parameters



| Parameter | Description |
| --- | --- |
| name | Profiler Sampler name. |





### Returns



**Sampler**

          [Sampler](Profiling.Sampler.html) object which represents specific profiler label.





### Description



Returns [Sampler](Profiling.Sampler.html) object for the specific CPU Profiler label.





You can use this function to get a Sampler associated with a built-in or custom label. The *name* parameter is the same you can see in Hierarchy view of the [Profiler Window](../Manual/ProfilerCPU.html).
If label with the specified *name* parameter does not exist or not available in the Player, an invalid Sampler object will be returned. You can use [Sampler.isValid](Profiling.Sampler-isValid.html) to verify if Sampler is valid.


              


```
using UnityEngine;
using UnityEngine.Profiling;public class ExampleClass : MonoBehaviour
{
    Sampler sampler;
    void Start()
    {
        sampler = Sampler.Get("BehaviourUpdate");
    }
}
```





**Get** can be used to obtain any existing Sampler including custom Sampler. Return value is always Sampler type and can not be casted to CustomSampler.

**Note:** At the moment all built-in counters are available only in the Editor and Development Players. **Get** in non-Development Players returns invalid Sampler.

Additional resources: [Sampler](Profiling.Sampler.html), [Sampler.isValid](Profiling.Sampler-isValid.html),  [CPU Usage Profiler](../Manual/ProfilerCPU.html).


            
