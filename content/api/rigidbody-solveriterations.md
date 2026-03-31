This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).solverIterations




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




                [Switch to Manual](../Manual/class-Rigidbody.html)







                    public int solverIterations;






### Description



The solverIterations determines how accurately Rigidbody joints and collision contacts are resolved. Overrides [Physics.defaultSolverIterations](Physics-defaultSolverIterations.html). Must be positive.





If you are having trouble with connected Rigidbodies oscillating and behaving erratically setting
a higher solver iteration count may improve their stability (but is slower).

Additional resources: [Rigidbody.solverVelocityIterations](Rigidbody-solverVelocityIterations.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        Rigidbody rb = GetComponent<Rigidbody>();
        rb.solverIterations = 30;
    }
}
```


            
