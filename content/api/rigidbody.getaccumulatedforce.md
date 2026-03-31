This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).GetAccumulatedForce




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










## Declaration

public [Vector3](Vector3.html) GetAccumulatedForce(float step = Time.fixedDeltaTime);






### Parameters



| Parameter | Description |
| --- | --- |
| step | The timestep of the next physics simulation. |





### Returns



**Vector3**
        Accumulated force expressed in [ForceMode.Force](ForceMode.Force.html).





### Description



Returns the force that the [Rigidbody](Rigidbody.html) has accumulated before the simulation step.





The accumulated force is reset during each physics simulation step.


              


```
using UnityEngine;public class AddForceScript : MonoBehaviour
{
    private Rigidbody rigidbody;    void Start()
    {
        rigidbody = GetComponent<Rigidbody>();
        rigidbody.useGravity = false;
    }    private void FixedUpdate()
    {
        rigidbody.AddForce(Vector3.up * 10f, ForceMode.Impulse);
        var accumulatedForce = rigidbody.GetAccumulatedForce();
        rigidbody.AddForce(accumulatedForce * -1f, ForceMode.Force);
    }
}
```





In this example, the Rigidbody doesn't move.


            
