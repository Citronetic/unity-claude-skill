This version of Unity is unsupported.



# [ArmDof](ArmDof.html).LastArmDof




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



















### Description



The last value of the [ArmDof](ArmDof.html) enum.





This value can be used in `for` loops.


              


```
using UnityEngine;using UnityEngine.Animations;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        for (int i = 0; i < (int)ArmDof.LastArmDof; ++i)
        {
            var handle = new MuscleHandle(HumanPartDof.LeftArm, (ArmDof)i);
            Debug.Log(handle.name);
        }
    }
}
```


            
