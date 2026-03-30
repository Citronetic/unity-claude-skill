This version of Unity is unsupported.

Particle velocity

Particle rotation

# Create particles that change velocity over time

To create particles that drift in a particular direction, use the [Velocity over Lifetime](PartSysVelOverLifeModule.html) module’s Linear X, Y and Z curves.

To create effects with particles that spin around a center position, use the use the [Velocity over Lifetime](PartSysVelOverLifeModule.html) module’s **Orbital** velocity values. Additionally, you can propel particles towards or away from a center position using the **Radial** velocity values. You can define a custom center of rotation for each particle by using the **Offset** value.

You can also use the [Velocity over Lifetime](PartSysVelOverLifeModule.html) module to adjust the speed of the particles in the **Particle System**A component that simulates fluid entities such as liquids, clouds and flames by generating and animating large numbers of small 2D images in the scene. [More info](class-ParticleSystem.html)
See in [Glossary](Glossary.html#particlesystem) without affecting their direction, by leaving all the above values at zero and only modifying the **Speed Modifier** value.

Particle velocity

Particle rotation
