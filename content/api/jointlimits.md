This version of Unity is unsupported.



# JointLimits





struct in
          UnityEngine



/



Implemented in:[UnityEngine.PhysicsModule](UnityEngine.PhysicsModule.html)


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



















### Description



JointLimits is used by the [HingeJoint](HingeJoint.html) to limit the joints angle.





Additional resources: [HingeJoint](HingeJoint.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // Set the hinge limits for a door.
        HingeJoint hinge = GetComponent<HingeJoint>();        JointLimits limits = hinge.limits;
        limits.min = 0;
        limits.max = 90;
        limits.bounciness = 0;
        limits.bounceMinVelocity = 0;
        hinge.limits = limits;
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| bounceMinVelocity | The minimum impact velocity which will cause the joint to bounce. |
| bounciness | Determines the size of the bounce when the joint hits it's limit. Also known as restitution. |
| contactDistance | Distance inside the limit value at which the limit will be considered to be active by the solver. |
| max | The upper angular limit (in degrees) of the joint. |
| min | The lower angular limit (in degrees) of the joint. |


            
