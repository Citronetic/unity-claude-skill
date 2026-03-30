This version of Unity is unsupported.

Create particles that change velocity over time

Particle appearance

# Particle rotation

Understand how the **Particle System**A component that simulates fluid entities such as liquids, clouds and flames by generating and animating large numbers of small 2D images in the scene. [More info](class-ParticleSystem.html)
See in [Glossary](Glossary.html#particlesystem) can change a particle’s rotation based on its speed or lifetime.

## Rotation by speed

The [Rotation by Speed](PartSysRotBySpeedModule.html) module can change a particle’s rotation based on its speed in distance units per second.

This module can be used when the particles represent solid objects moving over the ground such as rocks from a landslide. The rotation of the particles can be set in proportion to the speed so that they roll over the surface convincingly.

The Speed Range is only applied when the velocity is in one of the curve modes. Fast particles will rotate using the values at the right end of the curve, while slower particles will use values from the left side of the curve.

## Rotation over lifetime

The [Rotation Over Lifetime](PartSysRotOverLifeModule.html) module can change a particle’s rotation based on how long it has existed.

This module is useful when particles represent small solid objects, such as pieces of debris from an explosion. Assigning random values of rotation will make the effect more realistic than having the particles remain upright as they fly. The random rotations will also help to break up the regularity of similarly shaped particles (the same texture repeated many times can be very noticeable).

Create particles that change velocity over time

Particle appearance
