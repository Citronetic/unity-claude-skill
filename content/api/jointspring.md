This version of Unity is unsupported.



# JointSpring





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



JointSpring is used add a spring force to [HingeJoint](HingeJoint.html) and [PhysicsMaterial](PhysicsMaterial.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        HingeJoint hinge = GetComponent<HingeJoint>();        // Make the spring reach shoot for a 70 degree angle.
        // This could be used to fire off a catapult.        JointSpring spring = hinge.spring;
        spring.spring = 10;
        spring.damper = 3;
        spring.targetPosition = 70;
        hinge.spring = spring;
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| damper | The damper force uses to dampen the spring. |
| spring | The spring forces used to reach the target position. |
| targetPosition | The target position the joint attempts to reach. |


            
