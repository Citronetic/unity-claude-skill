This version of Unity is unsupported.



# [Rigidbody2D](Rigidbody2D.html).totalForce




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












                    public [Vector2](Vector2.html) totalForce;






### Description



The total amount of force that has been explicitly applied to this [Rigidbody2D](Rigidbody2D.html) since the last physics simulation step.





When adding force to the [Rigidbody2D](Rigidbody2D.html) using [Rigidbody2D.AddForce](Rigidbody2D.AddForce.html), [Rigidbody2D.AddForceAtPosition](Rigidbody2D.AddForceAtPosition.html) or [Rigidbody2D.AddRelativeForce](Rigidbody2D.AddRelativeForce.html) the force total is summed. This only applies when using [ForceMode2D.Force](ForceMode2D.Force.html) and not when using [ForceMode2D.Impulse](ForceMode2D.Impulse.html).

During the next simulation step, the total force will be time-integrated into the [Rigidbody2D.linearVelocity](Rigidbody2D-linearVelocity.html) then automatically reset to [zero](Vector2-zero.html).

**NOTE**: Only a [Rigidbody2D](Rigidbody2D.html) with a [Dynamic Body Type](RigidbodyType2D.Dynamic.html) will respond to force or torque. Setting this property on a [Kinematic Body Type](RigidbodyType2D.Kinematic.html) or [Static Body Type](RigidbodyType2D.Static.html) will have no effect.


              


```
using UnityEngine;
using UnityEngine.Assertions;public class Example : MonoBehaviour
{
    void Start()
    {
        // Fetch the rigidbody.
        var body = GetComponent<Rigidbody2D>();        // Make the assumption the body has no previous force applied.
        Assert.AreEqual(Vector2.zero, body.totalForce);        // Initialize a force.
        var force = new Vector2(3f, 2f);        // Add the force.
        body.AddForce(force);        // The total force should be what we just added.
        Assert.AreEqual(force, body.totalForce);        // Add the same force again.
        body.AddForce(force);        // The total force should still be what we've added.
        Assert.AreEqual(force * 2f, body.totalForce);        // We can reset any force that has been applied since the last simulation step.
        body.totalForce = Vector2.zero;
    }
}
```


            
