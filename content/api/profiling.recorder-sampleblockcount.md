This version of Unity is unsupported.



# [Recorder](Profiling.Recorder.html).sampleBlockCount




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












                    public int sampleBlockCount;






### Description



Number of time Begin/End pairs was called during the previous frame. (Read Only)





The counter represents the number of complete or running profiling block during previous frame.


              


```
using UnityEngine;
using UnityEngine.Profiling;public class ExampleClass : MonoBehaviour
{
    Recorder materialSetPass;
    void Start()
    {
        materialSetPass = Recorder.Get("Material.SetPassFast");
        materialSetPass.enabled = true;
    }    void Update()
    {
        if (materialSetPass.isValid)
            Debug.Log("Material SetPass count: " + materialSetPass.sampleBlockCount);
    }
}
```


            
