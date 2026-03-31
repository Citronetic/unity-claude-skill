This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).AddTorque




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

public void AddTorque([Vector3](Vector3.html) torque,
[ForceMode](ForceMode.html) mode = ForceMode.Force);






### Parameters



| Parameter | Description |
| --- | --- |
| torque | Torque vector in world coordinates. |
| mode | The type of torque to apply. |





### Description



Adds a torque to the rigidbody.





Force can be applied only to an active rigidbody. If a GameObject is inactive, AddTorque has no effect.

The effects of the torques applied with this function are accumulated at the time of the call. The physics system applies the effects during the next simulation run (either after [FixedUpdate](PlayerLoop.FixedUpdate.html), or when the script explicitly calls the [Physics.Simulate](Physics.Simulate.html) method).
Because this function has different modes, the physics system only accumulates the resulting angular velocity change, not the passed torque values. Assuming deltaTime (DT) is equal to the simulation step length ([Time.fixedDeltaTime](Time-fixedDeltaTime.html)), and mass is equal to the mass of the Rigidbody the torque is being applied to, here is how the angular velocity change is calculated for all the modes:



          - ForceMode.Force: Interprets the input as torque (measured in Newton-metres), and changes the angular velocity by the value of torque * DT / inertia. The effect depends on the simulation step length and the mass of the body.

          - ForceMode.Acceleration: Interprets the parameter as angular acceleration (measured in radians per second squared), and changes the angular velocity by the value of torque * DT. The effect depends on the simulation step length but does not depend on the mass of the body.

          - ForceMode.Impulse: Interprets the parameter as an angular momentum (measured in kilogram-meters-squared per second), and changes the angular velocity by the value of torque / inertia. The effect depends on the mass of the body but doesn't depend on the simulation step length.

          - ForceMode.VelocityChange: Interprets the parameter as a direct angular velocity change (measured in radians per second), and changes the angular velocity by the value of torque. The effect doesn't depend on the mass of the body and the simulation step length.





Wakes up the Rigidbody by default. If the torque size is zero then the Rigidbody will not be woken up.

Additional resources: [AddRelativeTorque](Rigidbody.AddRelativeTorque.html), [AddForce](Rigidbody.AddForce.html).


              


```
// Rotate an object around its Y (upward) axis in response to
// left/right controls.
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public float torque;
    public Rigidbody rb;    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }    void FixedUpdate()
    {
        float turn = Input.GetAxis("Horizontal");
        rb.AddTorque(transform.up * torque * turn);
    }
}
```




---








## Declaration

public void AddTorque(float x,
float y,
float z,
[ForceMode](ForceMode.html) mode = ForceMode.Force);






### Parameters



| Parameter | Description |
| --- | --- |
| x | Size of torque along the world x-axis. |
| y | Size of torque along the world y-axis. |
| z | Size of torque along the world z-axis. |
| mode | The type of torque to apply. |





### Description



Adds a torque to the rigidbody.





Force can be applied only to an active rigidbody. If a GameObject is inactive, AddTorque has no effect.

Wakes up the Rigidbody by default. If the torque size is zero then the Rigidbody will not be woken up.


            
