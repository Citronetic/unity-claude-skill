This version of Unity is unsupported.



# [Sampler](Profiling.Sampler.html).GetRecorder




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

public [Profiling.Recorder](Profiling.Recorder.html) GetRecorder();






### Returns



**Recorder**

          [Recorder](Profiling.Recorder.html) object associated with the Sampler.





### Description



Returns [Recorder](Profiling.Recorder.html) associated with the Sampler.





Each Sampler has only one recorder. Multiple calls to **GetRecorder** return references that control the same native Recorder object.
If Sampler object is invalid, it returns invalid Recorder object as well.


              


```
using UnityEngine;
using UnityEngine.Profiling;public class ExampleClass : MonoBehaviour
{
    Recorder behaviourUpdateRecorder;
    void Start()
    {
        var sampler = Sampler.Get("BehaviourUpdate");
        behaviourUpdateRecorder = sampler.GetRecorder();
        if (behaviourUpdateRecorder.isValid)
            behaviourUpdateRecorder.enabled = true;
    }    void Update()
    {
        if (behaviourUpdateRecorder.isValid)
            Debug.Log("BehaviourUpdate time: " + behaviourUpdateRecorder.elapsedNanoseconds);
    }
}
```





**Note:** At the moment Samplers are available only in the Editor and Development Players. Use [Sampler.isValid](Profiling.Sampler-isValid.html) to verify if Sampler can be used to create a valid Recorder.

Additional resources: [Sampler.isValid](Profiling.Sampler-isValid.html), [Recorder](Profiling.Recorder.html), [Recorder.isValid](Profiling.Recorder-isValid.html).


            
