This version of Unity is unsupported.

Change particle color

Particle rendering and shading

# Particle lights and trails

Understand how the **Particle System**A component that simulates fluid entities such as liquids, clouds and flames by generating and animating large numbers of small 2D images in the scene. [More info](class-ParticleSystem.html)
See in [Glossary](Glossary.html#particlesystem) can render lights and trails on particle effects.

## Lights

The [Lights](PartSysLightsModule.html) module is a fast way to add real-time lighting to your particle effects. It can be used to make systems cast light onto their surroundings, for example for a fire, fireworks or lightning. It also allows you to have the lights inherit a variety of properties from the particles they are attached to. This can make it more believable that the particle effect itself is emitting light. For example, this can be achieved by making the lights fade out with their particles and having them share the same colors.

This module makes it easy to create a lot of real-time lights very quickly, and real-time lights have a high performance cost, especially in **Forward Rendering**A rendering path that renders each object in one or more passes, depending on lights that affect the object. Lights themselves are also treated differently by Forward Rendering, depending on their settings and intensity. [More info](RenderTech-ForwardRendering.html)
See in [Glossary](Glossary.html#ForwardRendering) mode. If the lights also cast shadows, the performance cost is even higher. To help guard against an accidental tweak to the emission rate and thus causing thousands of real-time lights to be created, the Maximum Lights property should be used. Creating more lights than your target hardware is able to manage can cause slowdowns and unresponsiveness.

## Trails

The [Trails](PartSysTrailsModule.html) module adds trails to a percentage of your particles. This module shares a number of properties with the [Trail Renderer](class-TrailRenderer.html)A visual effect that lets you to make trails behind GameObjects in the Scene as they move. [More info](class-TrailRenderer.html)
See in [Glossary](Glossary.html#TrailRenderer) component, but offers the ability to easily attach Trails to particles, and to inherit various properties from the particles. Trails can be useful for a variety of effects, such as bullets, smoke, and magic visuals.

[Image: The Trails module in Particles mode]
The Trails module in Particles mode

[Image: The Trails module in Ribbon mode]
The Trails module in Ribbon mode

### Tips

- Use the [Renderer](PartSysRendererModule.html) module to specify the Trail Material.

- Unity samples colors from the Color Gradient at each vertex, and linearly interpolates colors between each vertex,. Add more vertices to your **Line Renderer**A component that takes an array of two or more points in 3D space and draws a straight line between each one. You can use a single Line Renderer component to draw anything from a simple straight line to a complex spiral. [More info](class-LineRenderer.html)
See in [Glossary](Glossary.html#LineRenderer) to get a closer approximation of a detailed Color Gradient.

Change particle color

Particle rendering and shading
