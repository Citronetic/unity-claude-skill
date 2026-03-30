This version of Unity is unsupported.

Set the color of a material in the Standard Shader

Set the Rendering Mode in the Standard Shader using a script

# Configure edge reflections (Fresnel effect)

One important visual cue of objects in the real world has to do with how they become more reflective at grazing angles (illustrated below). This is called the **Fresnel effect**An effect representing the increase in reflectivity on objects when light hits at grazing angles.
See in [Glossary](Glossary.html#FresnelEffect).

[Image: The fresnel effect visible at grazing angles in relation to the viewer is increasingly apparent as the surface of a material becomes smoother]
The fresnel effect visible at grazing angles in relation to the viewer is increasingly apparent as the surface of a material becomes smoother

There are two things to note in this example; firstly, these reflections only appear around the edges of the sphere (that’s when its surface is at a grazing angle), and also that they become more visible and sharper as the smoothness of the material goes up.

In the Standard **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) there is no direct control over the Fresnel effect. Instead it is indirectly controlled through the smoothness of the material. Smooth surfaces will present a stronger Fresnel, totally rough surfaces will have no Fresnel.

Set the color of a material in the Standard Shader

Set the Rendering Mode in the Standard Shader using a script
