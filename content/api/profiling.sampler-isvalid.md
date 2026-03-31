This version of Unity is unsupported.



# [Sampler](Profiling.Sampler.html).isValid




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












                    public bool isValid;






### Description



Returns true if Sampler is valid. (Read Only)





Invalid Sampler represents non-existing Profiler label.

**Note:** At the moment all built-in counters are available only in the Editor and Development Players. [Sampler.Get](Profiling.Sampler.Get.html) in non-Development Players returns invalid Sampler.


              


```
using UnityEngine;
using UnityEngine.Profiling;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        var sampler = Sampler.Get("BehaviourUpdate");
        if (sampler.isValid)
            Debug.Log("Retrieved a Sampler for BehaviourUpdate!");        sampler = Sampler.Get("TerrainRenderer");
        if (!sampler.isValid)
            Debug.Log("Profiler label TerrainRenderer does not exist!");
    }
}
```


            
