This version of Unity is unsupported.

Introduction to Wheel colliders

Wheel collider suspension

# Wheel collider friction

The Wheel **collider**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#Collider) calculates wheel friction separately from the rest of the **physics engine**A system that simulates aspects of physical systems so that objects can accelerate correctly and be affected by collisions, gravity and other forces. [More info](PhysicsSection.html)
See in [Glossary](Glossary.html#PhysicsEngine), and ignores standard [Physics Material](class-PhysicsMaterial.html)A physics asset for adjusting the friction and bouncing effects of colliding objects. [More info](class-PhysicsMaterial.html)
See in [Glossary](Glossary.html#PhysicsMaterial) settings. Instead, it uses a slip-based friction model, which provides more realistic behavior.

In most cases, the **Wheel collider**A special collider for grounded vehicles. It has built-in collision detection, wheel physics, and a slip-based tire friction model. It can be used for objects other than wheels, but it is specifically designed for vehicles with wheels. [More info](class-WheelCollider.html)
See in [Glossary](Glossary.html#WheelCollider)’s default friction settings are sufficient to create a working vehicle. To work with the wheel friction settings, you should have an understanding of forward slip (also called longitudinal slip) and sideways slip (also called lateral slip) in the context of real-world vehicle dynamics. This understanding is necessary if you want to build an extremely realistic vehicle or you want to have finer control of the friction and slip behavior of your wheels.

On real-world vehicles, wheels can exert high forces and high friction at low slip because the rubber stretches to compensate for the slip. When the slip gets too high, the wheel starts to slide or spin, which reduces the amount of force they exert. Unity uses a wheel friction curve to define and describe this behavior.

## Wheel friction curve properties

The Wheel collider has two groups of properties for wheel friction: **Forward Friction** and **Sideways Friction**. Each group has the same four settings (refer to the [Wheel collider component reference](class-WheelCollider.html) for detailed information on each property):

- **Extremum Slip** ([`WheelFrictionCurve.extremumSlip`](../ScriptReference/WheelFrictionCurve-extremumSlip.html))

- **Extremum Value** ([`WheelFrictionCurve.extremumValue`](../ScriptReference/WheelFrictionCurve-extremumValue.html))

- **Asymptote Slip** ([`WheelFrictionCurve.asymptoteSlip`](../ScriptReference/WheelFrictionCurve-asymptoteSlip.html))

- **Asymptote Value** ([`WheelFrictionCurve.asymptoteValue`](../ScriptReference/WheelFrictionCurve-asymptoteValue.html))

These [`WheelFrictionCurve`](../ScriptReference/WheelFrictionCurve.html) properties describe the curve that demonstrates the relationship between the slip and the wheel’s force in a typical wheel friction setup. There is one curve for forward friction, and one for sideways friction.

[Image: Typical shape of a wheel friction curve.]
Typical shape of a wheel friction curve.

The curve starts at 0 slip and 0 force. When the slip increases, the force also increases until it reaches a maximum force that the wheel can maintain (the **Extremum** point). The coordinates for this point are (`ExtremumSlip` , `ExtremumValue`).

When the slip increases further, the wheel starts to slide or spin, and can no longer maintain the maximum force. As a result, the force decreases until it reaches a point where it can remain steady and consistent as the slip continues to increase (the **Asymptote** point). The coordinates for this point are (`AsymptoteSlip` , `AsymptoteValue`).

Introduction to Wheel colliders

Wheel collider suspension
