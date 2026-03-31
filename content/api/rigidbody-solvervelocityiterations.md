This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).solverVelocityIterations




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







                    public int solverVelocityIterations;






### Description



The solverVelocityIterations affects how how accurately Rigidbody joints and collision contacts are resolved. Overrides [Physics.defaultSolverVelocityIterations](Physics-defaultSolverVelocityIterations.html). Must be positive.





Increasing this value will result in higher accuracy of the resulting exit velocity after a Rigidbody bounce.
If you are experiencing issues with jointed Rigidbodies or Ragdolls moving too much after collisions you can try to increase this value.

Additional resources: [Rigidbody.solverIterations](Rigidbody-solverIterations.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        Rigidbody rb = GetComponent<Rigidbody>();
        rb.solverVelocityIterations = 30;
    }
}
```


            
