This version of Unity is unsupported.



# [Rigidbody2D](Rigidbody2D.html).AddTorque




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















## Declaration

public void AddTorque(float torque,
[ForceMode2D](ForceMode2D.html) mode = ForceMode2D.Force);






### Parameters



| Parameter | Description |
| --- | --- |
| torque | Torque to apply. |
| mode | The force mode to use. |





### Description



Apply a torque at the rigidbody's centre of mass.





Applying torque to the [Rigidbody2D](Rigidbody2D.html) changes the [angularVelocity](Rigidbody2D-angularVelocity.html) only. This change is scaled (divided) by the rotational [inertia](Rigidbody2D-inertia.html). Therefore, a larger [inertia](Rigidbody2D-inertia.html) results in smaller changes to [angularVelocity](Rigidbody2D-angularVelocity.html), and a smaller [inertia](Rigidbody2D-inertia.html) results in larger changes to [angularVelocity](Rigidbody2D-angularVelocity.html).

When applying torque either as a force or an impulse, you can use any value to get the required change in [angularVelocity](Rigidbody2D-angularVelocity.html). However, if you require a specific change in degrees, then you must first convert the `torque` value into radians by multiplying with [Mathf.Deg2Rad](Mathf.Deg2Rad.html) then multiplying by the [inertia](Rigidbody2D-inertia.html).

The following example demonstrates this as an impulse:

Additional resources: [AddForce](Rigidbody2D.AddForce.html), [AddForceAtPosition](Rigidbody2D.AddForceAtPosition.html).


              


```
using UnityEngine;public class TorqueRotationExample : MonoBehaviour
{
    // Add an impulse which produces a change in angular velocity (specified in degrees).
    public void AddTorqueImpulse(float angularChangeInDegrees)
    {
        var body = GetComponent<Rigidbody2D>();
        var impulse = (angularChangeInDegrees * Mathf.Deg2Rad) * body.inertia;        body.AddTorque(impulse, ForceMode2D.Impulse);
    }
}
```


            
