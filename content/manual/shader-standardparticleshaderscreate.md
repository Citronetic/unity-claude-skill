This version of Unity is unsupported.

Particle shaders in the Built-In Render Pipeline

Standard Particle Shaders Material Inspector window reference for the Built-In Render Pipeline

# Create a particle material in the Built-In Render Pipeline

The Unity Standard Particle Shaders are built-in shaders that enable you to render a variety of **Particle System**A component that simulates fluid entities such as liquids, clouds and flames by generating and animating large numbers of small 2D images in the scene. [More info](class-ParticleSystem.html)
See in [Glossary](Glossary.html#particlesystem) effects. These shaders provide various particle-specific features that aren’t available with the Standard **Shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader).

To use a Particle Shader:

1. Select the Material you want to apply the shader to. For example, you could apply a Flame Material to a Fire Particle System effect.

2. In the Material’s **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector), select **Shader Particles**.

3. Choose the Particle Shader that you want to use, such as **Standard Surface**.

4. Enable and disable the various Particle Shader properties in the Inspector.

## Types of particle shader

Unity has the following types of particle shader:

- Standard Particles **Surface Shader**A streamlined way of writing shaders for the Built-in Render Pipeline. [More info](SL-SurfaceShaders.html)
See in [Glossary](Glossary.html#SurfaceShader) - This comes with functionality similar to the Standard Shader, but works especially well with particles. Like the Standard Shader, it supports **Physically Based Shading**An advanced lighting model that simulates the interactions between materials and light in a way that mimics reality. [More info](shader-StandardShader.html)
See in [Glossary](Glossary.html#PhysicallyBasedShading). It does not include features that are unsuitable for dynamic particles, such as lightmapping.

- Standard Particles Unlit Shader - This simple shader is faster than the Surface Shader. It supports all of the generic particle controls, such as flipbook blending and distortion, but does not perform any lighting calculations.

[Image: An example of billboard particles using the Standard Particle Surface Shader with a normal map]
An example of billboard particles using the Standard Particle Surface Shader with a normal map

Particle shaders in the Built-In Render Pipeline

Standard Particle Shaders Material Inspector window reference for the Built-In Render Pipeline
