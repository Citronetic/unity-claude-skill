This version of Unity is unsupported.



# [ArticulationBody](ArticulationBody.html).AddTorque




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




                [Switch to Manual](../Manual/class-ArticulationBody.html)










## Declaration

public void AddTorque([Vector3](Vector3.html) torque,
[ForceMode](ForceMode.html) mode = ForceMode.Force);






### Parameters



| Parameter | Description |
| --- | --- |
| torque | The torque to apply. |
| mode | The type of torque to apply. |





### Description



Add torque to the articulation body.





You can only apply a torque to an active ArticulationBody. If a GameObject is inactive, AddTorque has no effect.

[ForceMode.Force](ForceMode.Force.html) and [ForceMode.Acceleration](ForceMode.Acceleration.html) modes modify the Angular Velocity Per Second accumulator and [ForceMode.Impulse](ForceMode.Impulse.html) and [ForceMode.VelocityChange](ForceMode.VelocityChange.html) modify the Angular Velocity Per Step accumulator. Mixing these 2 groups of ForceModes doesn't work for Articulation Bodies and will result in only the Angular Velocity Per Second accumulator being applied.

For more information on how ForceMode affects angular velocity, see [Rigidbody.AddTorque](Rigidbody.AddTorque.html).

Applying a torque to an ArticulationBody wakes up that body. If the torque size is zero then the ArticulationBody does not wake up.

Unit of measurement - Nm (Newtonmeters).

Additional resources: [AddRelativeTorque](ArticulationBody.AddRelativeTorque.html), [AddForce](ArticulationBody.AddForce.html).


              


```
// Rotate an object around its Y (upward) axis in response to
// left/right controls.
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public float torque;
    public ArticulationBody ab;    void Start()
    {
        ab = GetComponent<ArticulationBody>();
    }    void FixedUpdate()
    {
        float turn = Input.GetAxis("Horizontal");
        ab.AddTorque(transform.up * torque * turn);
    }
}
```


            
