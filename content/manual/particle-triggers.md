This version of Unity is unsupported.

Particle collisions

Configure a particle trigger

# Particle triggers

The Built-in **Particle System**A component that simulates fluid entities such as liquids, clouds and flames by generating and animating large numbers of small 2D images in the scene. [More info](class-ParticleSystem.html)
See in [Glossary](Glossary.html#particlesystem)’s [Triggers](PartSysTriggersModule.html) module allows you to access and modify particles based on their interaction with one or more **Colliders**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#Collider) in the **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene).

When you enable this module, the Particle System calls the [OnParticleTrigger()](../ScriptReference/MonoBehaviour.OnParticleTrigger.html) callback on attached **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts), which you can use to access lists of particles depending on where they are in respect to the Colliders in the Scene.

Particle collisions

Configure a particle trigger
