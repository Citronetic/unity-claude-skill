This version of Unity is unsupported.



# WheelFrictionCurve





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



WheelFrictionCurve is used by the [WheelCollider](WheelCollider.html) to describe friction properties of the wheel tire.





The curve takes a measure of tire slip as an input and gives a force as output. The curve is approximated by
a two-piece spline. The first section goes from *(0,0)* to *(extremumSlip,extremumValue)*, at which
point the curve's tangent is zero. The second section goes from *(extremumSlip,extremumValue)*
to *(asymptoteSlip,asymptoteValue)*, where curve's tangent is again zero:

[Image: image]

In the previous image a graph displays the wheel slip curve with force on the y-axis and slip on the x-axis. Force increases as slip increases up to the extremum point, after which force declines as slip increases up to the asymptote point. Beyond the asymptote the curve becomes a flat line as additional slip gives no further change in force.

Wheel collider computes friction separately from the rest of physics engine, using a slip based
friction model. It separates the overall friction force into a "forwards" component (in the
direction of rolling, and responsible for acceleration and braking) and "sideways" component
(orthogonal to rolling, responsible for keeping the car oriented). Tire friction is described
separately in these directions using [WheelCollider.forwardFriction](WheelCollider-forwardFriction.html) and [WheelCollider.sidewaysFriction](WheelCollider-sidewaysFriction.html).
In both directions it is first determined how much the tire is slipping (what is the speed difference between
the rubber and the road). Then this slip value is used to find out tire force exerted on the contact.

The property of real tires is that for low slip they can exert high forces as the rubber compensates
for the slip by stretching. Later when the slip gets really high, the forces are reduced as the tire
starts to slide or spin. Thus tire friction curves have a shape like in the image above.

Because the friction for the tires is computed separately, the [PhysicsMaterial](PhysicsMaterial.html) of the ground
does not affect the wheels. Simulation of different road materials is done by changing
the [WheelCollider.forwardFriction](WheelCollider-forwardFriction.html) and [WheelCollider.sidewaysFriction](WheelCollider-sidewaysFriction.html) of the wheel,
based on what material the wheel is hitting.

Additional resources: [WheelCollider](WheelCollider.html), [WheelCollider.forwardFriction](WheelCollider-forwardFriction.html), [WheelCollider.sidewaysFriction](WheelCollider-sidewaysFriction.html).





### Properties



| Property | Description |
| --- | --- |
| asymptoteSlip | Asymptote point slip (default 2). |
| asymptoteValue | Force at the asymptote slip (default 10000). |
| extremumSlip | Extremum point slip (default 1). |
| extremumValue | Force at the extremum slip (default 20000). |
| stiffness | Multiplier for the extremumValue and asymptoteValue values (default 1). |


            
