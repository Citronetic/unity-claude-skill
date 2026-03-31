This version of Unity is unsupported.



# [Recorder](Profiling.Recorder.html).Get




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

public static [Profiling.Recorder](Profiling.Recorder.html) Get(string samplerName);






### Parameters



| Parameter | Description |
| --- | --- |
| samplerName | Sampler name. |





### Returns



**Recorder**

          [Recorder](Profiling.Recorder.html) object for the specified Sampler.





### Description



Use this function to get a Recorder for the specific Profiler label.


              


```
using UnityEngine;
using UnityEngine.Profiling;public class ExampleClass : MonoBehaviour
{
    Recorder behaviourUpdateRecorder;
    void Start()
    {
        behaviourUpdateRecorder = Recorder.Get("BehaviourUpdate");
        behaviourUpdateRecorder.enabled = true;
    }    void Update()
    {
        if (behaviourUpdateRecorder.isValid)
            Debug.Log("BehaviourUpdate time: " + behaviourUpdateRecorder.elapsedNanoseconds);
    }
}
```





Additional resources: [Sampler](Profiling.Sampler.html), [Sampler.GetRecorder](Profiling.Sampler.GetRecorder.html).


            
