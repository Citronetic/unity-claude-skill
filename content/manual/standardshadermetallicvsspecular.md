This version of Unity is unsupported.

Creating a material from a prebuilt shader

Configure reflections in prebuilt shaders

# Metallic and specular workflows

Prebuilt Unity **shaders**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) have two different ways of calculating reflections, known as workflows:

- Metallic workflow. Set a value for how metallic the material is, where 0 is non-metallic and 1 is fully metallic. Unity calculates the strength and color of reflections, and tints them with the base color.

- Specular workflow. Set a color value to directly control the tint and intensity of reflections and highlights.

The workflow controls two types of reflections:

- Specular reflections, which are bright spots that reflect [light components](lighting-light-sources.html).

- Environment reflections, which reflect the surrounding environment, for example the [skybox](sky-landing.html)A special type of Material used to represent skies. Usually six-sided. [More info](sky-landing.html)
See in [Glossary](Glossary.html#Skybox).

In both workflows, you can also adjust the blurriness or sharpness of reflections using a smoothness value.

**Note:** You can use either workflow for any material. The metallic workflow isn’t only for metallic materials.

## Metallic workflow

In the metallic workflow, the following applies:

- A value of 0 means the surface is non-metallic, also known as dielectric. The base color is visible as matte color, also known as diffuse reflection. Specular highlights are the color of the light source.

- A value of 1 means the surface is metallic. There’s no diffuse reflection. The base color defines the color of the specular reflections and environment reflections.

Values between 0 and 1 blend these two results.

[Image: Spheres with a range of metallic values from 0 to 1, and a constant smoothness value of 0.8. The reflection of the environment becomes more visible.]
Spheres with a range of metallic values from 0 to 1, and a constant smoothness value of 0.8. The reflection of the environment becomes more visible.

For more information, refer to [Configure reflections in prebuilt shaders](StandardShaderMaterialParameterMetallic.html).

## Specular workflow

In the specular workflow, a **specular color**The color of a specular highlight.
See in [Glossary](Glossary.html#specularcolor) value directly controls the intensity and color of reflections on the surface. This makes it possible to have a specular reflection that’s a different color to diffuse reflection.

A black specular color means no reflections, while a white specular color means full reflection.

[Image: Spheres with a range of specular colors from black to white. Rubber, dirt, rough plastic, and mud have a dark specular color, and faint reflections. Brushed metal has a light specular color and a clear, bright reflection.]
Spheres with a range of specular colors from black to white. Rubber, dirt, rough plastic, and mud have a dark specular color, and faint reflections. Brushed metal has a light specular color and a clear, bright reflection.

For more information, refer to [Configure reflections in prebuilt shaders](StandardShaderMaterialParameterMetallic.html).

## Smoothness

In both workflows, a smoothness value controls the clarity of the specular effect.

Smoothness represents the microsurface detail of the material. A low smoothness value means the surface is microscopically rough with many different surface angles, so light rays bounce off at a wide range of angles, and fewer reflections reach the **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera). A high smoothness value means the surface is microscopically smooth like a mirror, so light rays bounce off at a narrow range of angles, and more reflections reach the camera.

[Image: A comparison of low, medium and high values for smoothness (top to bottom).]
A comparison of low, medium and high values for smoothness (top to bottom).

As a result, a low smoothness value produces blurry, diffuse reflections, while a high smoothness value produces clear, sharp reflections.

[Image: Spheres with a range of smoothness values from 0 to 1. Plaster and smooth wood have lower smoothness values, and blurrier reflections. Steel and a mirror have high smoothness values, and sharper, clearer reflections. Glossy plastic is approximately in the middle.]
Spheres with a range of smoothness values from 0 to 1. Plaster and smooth wood have lower smoothness values, and blurrier reflections. Steel and a mirror have high smoothness values, and sharper, clearer reflections. Glossy plastic is approximately in the middle.

For more information, refer to [Configure reflections in prebuilt shaders](StandardShaderMaterialParameterMetallic.html).

## Additional resources

- [Reflections](reflections-landing.html)

- [Reference for metallic and specular values of real surfaces](StandardShaderMaterialCharts.html)

- [Creating Believable Visuals](https://learn.unity.com/tutorial/creating-believable-visuals?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774937785303) on the Unity Learn site

Creating a material from a prebuilt shader

Configure reflections in prebuilt shaders
