This version of Unity is unsupported.



# [HingeJoint](HingeJoint.html).limits




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




                [Switch to Manual](../Manual/class-HingeJoint.html)







                    public [JointLimits](JointLimits.html) limits;






### Description



Limit of angular rotation (in degrees) on the hinge joint.





The joint will be limited so that the angle is always between [JointLimits.min](JointLimits-min.html) and [JointLimits.max](JointLimits-max.html).
The joint angle is in degrees relative to the rest angle. The rest angle between the bodies is always zero at the beginning of the simulation.

Additional resources: [useLimits](HingeJoint-useLimits.html), [JointLimits](JointLimits.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // Set the hinge limits for a door.
        HingeJoint hinge = GetComponent<HingeJoint>();        JointLimits limits = hinge.limits;
        limits.min = 0;
        limits.bounciness = 0;
        limits.bounceMinVelocity = 0;
        limits.max = 90;
        hinge.limits = limits;
        hinge.useLimits = true;
    }
}
```





Modifying the limits does **not** automatically enable the limits.


            
