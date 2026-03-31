This version of Unity is unsupported.



# WheelHit





struct in
          UnityEngine



/



Implemented in:[UnityEngine.VehiclesModule](UnityEngine.VehiclesModule.html)


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



Contact information for the wheel, reported by [WheelCollider](WheelCollider.html).





Friction for the [WheelCollider](WheelCollider.html) is computed separately from the rest of the physics, using
a slip based tire friction model. This allows for more realistic behaviour, but makes
wheel colliders ignore standard [PhysicsMaterial](PhysicsMaterial.html) settings.

The way to simulate different ground materials is to query [WheelCollider](WheelCollider.html) for its collision
information (see [WheelCollider.GetGroundHit](WheelCollider.GetGroundHit.html)). Usually, you get the other collider the wheel
is hitting, and modify the wheel's [WheelCollider.forwardFriction](WheelCollider-forwardFriction.html) and [WheelCollider.sidewaysFriction](WheelCollider-sidewaysFriction.html)
based on the physics material of the ground.

The other members of the WheelHit structure are usually queried for information purposes or special
effects. For example, a "slipping tire" sound can be played if [forwardSlip](WheelHit-forwardSlip.html) or [sidewaysSlip](WheelHit-sidewaysSlip.html)
exceed some threshold.

Additional resources: [WheelCollider.GetGroundHit](WheelCollider.GetGroundHit.html).





### Properties



| Property | Description |
| --- | --- |
| collider | The other Collider the wheel is hitting. |
| force | The magnitude of the force being applied for the contact. |
| forwardDir | The direction the wheel is pointing in. |
| forwardSlip | Tire slip in the rolling direction. Acceleration slip is negative, braking slip is positive. |
| normal | The normal at the point of contact. |
| point | The point of contact between the wheel and the ground. |
| sidewaysDir | The sideways direction of the wheel. |
| sidewaysSlip | Tire slip in the sideways direction. |


            
