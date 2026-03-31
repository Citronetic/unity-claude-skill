This version of Unity is unsupported.



# JointMotor





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



The JointMotor is used to motorize a joint.





For example the [HingeJoint](HingeJoint.html) can be told to rotate at a given speed and force.
The joint will then attempt to reach the velocity with the given maximum force.

Additional resources: [HingeJoint](HingeJoint.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        HingeJoint hinge = GetComponent<HingeJoint>();        // Make the hinge motor rotate with 90 degrees per second and a strong force.
        JointMotor motor = hinge.motor;
        motor.force = 100;
        motor.targetVelocity = 90;
        motor.freeSpin = false;
        hinge.motor = motor;
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| force | The motor will apply a force. |
| freeSpin | If freeSpin is enabled the motor will only accelerate but never slow down. |
| targetVelocity | The motor will apply a force up to force to achieve targetVelocity. |


            
