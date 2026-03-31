This version of Unity is unsupported.



# [WheelFrictionCurve](WheelFrictionCurve.html).stiffness




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












                    public float stiffness;






### Description



Multiplier for the [extremumValue](WheelFrictionCurve-extremumValue.html) and [asymptoteValue](WheelFrictionCurve-asymptoteValue.html) values (default 1).





Changes the stiffness of the friction. Setting this to zero
will completely disable all friction from the wheel.

Usually you modify `stiffness` to simulate various ground materials (e.g. lower the stiffness
when driving on grass).
Additional resources: [WheelCollider.GetGroundHit](WheelCollider.GetGroundHit.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public WheelCollider wheel;    void Start()
    {
        wheel = GetComponent<WheelCollider>();
    }    // When attached to the WheelCollider, modifies tire friction based on
    // static friction of the ground material.
    void FixedUpdate()
    {
        WheelHit hit;
        if (wheel.GetGroundHit(out hit))
        {
            WheelFrictionCurve fFriction = wheel.forwardFriction;
            fFriction.stiffness = hit.collider.material.staticFriction;
            wheel.forwardFriction = fFriction;
            WheelFrictionCurve sFriction = wheel.sidewaysFriction;
            sFriction.stiffness = hit.collider.material.staticFriction;
            wheel.sidewaysFriction = sFriction;
        }
    }
}
```


            
