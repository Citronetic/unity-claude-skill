This version of Unity is unsupported.

Particle physics forces

Particle collisions

# Apply forces to particles

The **Particle System Force Field** component applies forces to particles in [Particle Systems](class-ParticleSystem.html)A component that simulates fluid entities such as liquids, clouds and flames by generating and animating large numbers of small 2D images in the scene. [More info](class-ParticleSystem.html)
See in [Glossary](Glossary.html#particlesystem).

To attach this component to a Particle System, enable the [External Forces Module](PartSysExtForceModule.html) in the Particle System, and assign either a **Layer Mask**A value defining which layers to include or exclude from an operation, such as rendering, collision or your own code. [More info](Layers.html)
See in [Glossary](Glossary.html#LayerMask), or the specific Force Field component.

Use the [Particle System Force Field](class-ParticleSystemForceField.html) component to apply various types of forces to particles.

All forces are applied in the local space of the Force Field. For example, rotating Transform affects the direction and rotation properties.

For a full introduction to particle systems and their uses, see documentation on [Particle Systems](ParticleSystems.html).

Particle physics forces

Particle collisions
