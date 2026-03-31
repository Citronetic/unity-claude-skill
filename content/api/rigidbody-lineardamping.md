This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).linearDamping




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







                    public float linearDamping;






### Description



The linear damping of the Rigidbody linear velocity.





linearDamping can be used to slow down an object.

                Zero indicates that no damping should be used whereas higher values increase the damping, effectively slowing down the linear motion faster.

                **Note:** The following formula is how the linear damping is applied: `linearVelocity *= ( 1 - linearDamping * dt )`

                Additional resources: [Rigidbody.angularDamping](Rigidbody-angularDamping.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Rigidbody rb;    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }    void OpenParachute()
    {
        rb.linearDamping = 20;
    }    void Update()
    {
        if (Input.GetButton("Space"))
            OpenParachute();
    }
}
```


            
