This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).AddRelativeForce




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

public void AddRelativeForce([Vector3](Vector3.html) force,
[ForceMode](ForceMode.html) mode = ForceMode.Force);






### Parameters



| Parameter | Description |
| --- | --- |
| force | Force vector in local coordinates. |





### Description



Adds a force to the rigidbody relative to its coordinate system.





Force can be applied only to an active rigidbody. If a GameObject is inactive, AddRelativeForce has no effect.

Wakes up the Rigidbody by default. If the force size is zero then the Rigidbody will not be woken up.

For more information on how ForceMode affects velocity, see [Rigidbody.AddForce](Rigidbody.AddForce.html).

Additional resources: [AddForce](Rigidbody.AddForce.html), [AddForceAtPosition](Rigidbody.AddForceAtPosition.html), [AddRelativeTorque](Rigidbody.AddRelativeTorque.html).


              


```
using UnityEngine;
using System.Collections;// Add a thrust force to push an object in its current forward
// direction (to simulate a rocket motor, say).
public class ExampleClass : MonoBehaviour
{
    public float thrust;
    public Rigidbody rb;
    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }    void FixedUpdate()
    {
        rb.AddRelativeForce(Vector3.forward * thrust);
    }
}
```




---








## Declaration

public void AddRelativeForce(float x,
float y,
float z,
[ForceMode](ForceMode.html) mode = ForceMode.Force);






### Parameters



| Parameter | Description |
| --- | --- |
| x | Size of force along the local x-axis. |
| y | Size of force along the local y-axis. |
| z | Size of force along the local z-axis. |





### Description



Adds a force to the rigidbody relative to its coordinate system.





Force can be applied only to an active rigidbody. If a GameObject is inactive, AddRelativeForce has no effect.

Wakes up the Rigidbody by default. If the force size is zero then the Rigidbody will not be woken up.


            
