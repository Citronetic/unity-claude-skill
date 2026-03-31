This version of Unity is unsupported.



# [WheelCollider](WheelCollider.html).suspensionExpansionLimited(bool)




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




                [Switch to Manual](../Manual/class-WheelCollider.html)














### Parameters



| Parameter | Description |
| --- | --- |
| active | Turns on/off the property |





### Description



Limits the expansion velocity of the Wheel Collider's suspension. If you set this property on a Rigidbody that has several Wheel Colliders, such as a vehicle, then it affects all other Wheel Colliders on the Rigidbody.





If you use a Wheel Collider that has extreme values for Suspension Spring properties, such as  [suspensionSpring.damper](JointSpring-spring.html) or [suspensionSpring.spring](JointSpring-spring.html), the large damping forces might make the vehicle stick to the ground, instead of lifting off. While it's best practice to use realistic damping ratios, you can use this property to limit the velocity of suspension.

In more detail, the simulation checks whether the suspension can extend to the target length in the given simulation time step. If it can, Unity computes the suspension force as usual, otherwise it sets the force to zero. If you use this feature, it results in a slightly more realistic behavior at the potential cost of losing control when steering the vehicle.


            
