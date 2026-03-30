This version of Unity is unsupported.

Prebuilt shaders in URP

Choose a prebuilt shader in URP

# Shading models in URP

A shading model defines how a Material’s color varies depending on factors such as surface orientation, viewer direction, and lighting. Your choice of a shading model depends on the artistic direction and performance budget of your application. Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#Renderpipeline) (URP) provides **Shaders**A program that runs on the GPU. [More info](../Shaders.html)
See in [Glossary](../Glossary.html#Shader) with the following shading models:

- [Physically Based Shading](#physically-based-shading)An advanced lighting model that simulates the interactions between materials and light in a way that mimics reality. [More info](../shader-StandardShader.html)
See in [Glossary](../Glossary.html#PhysicallyBasedShading)

- [Simple Shading](#simple-shading)

- [Baked Lit Shading](#baked-lit-shading)

- [No lighting](#shaders-with-no-lighting)

## Physically Based Shading

Physically Based Shading (PBS) simulates how objects look in real life by computing the amount of light reflected from the surface based on physics principles. This lets you create photo-realistic objects and surfaces.

This PBS model follows two principles:

*Energy conservation* - Surfaces never reflect more light than the total incoming light. The only exception to this is when an object emits light. For example, a neon sign.
*Microgeometry* - Surfaces have geometry at a microscopic level. Some objects have smooth microgeometry, which gives them a mirror-like appearance. Other objects have rough microgeometry, which makes them look more dull. In URP, you can mimic the level of smoothness of a rendered object’s surface.

When light hits a a rendered object’s surface, part of the light is reflected and part is refracted. The reflected light is called *specular reflection*. This varies depending on the **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](../CamerasOverview.html)
See in [Glossary](../Glossary.html#Camera) direction and the point at which the light hits a surface, also called the [angle of incidence](https://en.wikipedia.org/wiki/Angle_of_incidence_(optics)). In this shading model, the shape of specular highlight is approximated with a GGX function.

For metal objects, the surface absorbs and changes the light. For non-metallic objects, also called [dielectric](https://en.wikipedia.org/wiki/Dielectric) objects, the surface reflects parts of the light.

Light attenuation is only affected by the light intensity. This means that you don’t have to increase the range of your light to control the attenuation.

The following URP Shaders use Physically Based Shading:

- [Lit](lit-shader.html)

- [Particles Lit](particles-lit-shader.html)

> **Note**: This shading model is not suitable for low-end mobile hardware. If you’re targeting this hardware, use Shaders with a [Simple Shading](#simple-shading) model.

To read more about Physically Based Rendering, check this [walkthrough by Joe Wilson on Marmoset](https://marmoset.co/posts/physically-based-rendering-and-you-can-too/).

## Simple shading

This shading model is suitable for stylized visuals or for games that run on less powerful platforms. With this shading model, Materials are not truly photorealistic. The Shaders do not conserve energy. This shading model is based on the [Blinn-Phong](https://en.wikipedia.org/wiki/Blinn%E2%80%93Phong_shading_model) model.

In this Simple shading model, Materials reflect diffuse and specular light, and there’s no correlation between the two. The amount of diffuse and specular light reflected from Materials depends on the properties you select for the Material and the total reflected light can therefore exceed the total incoming light. Specular reflection varies only with camera direction.

Light attenuation is only affected by the light intensity.

The following URP Shaders use Simple Shading:

- [Simple Lit](simple-lit-shader.html)

- [Particles Simple Lit](particles-simple-lit-shader.html)

## Baked Lit shading

The Baked Lit shading model doesn’t have real-time lighting. Materials can receive [baked lighting](https://docs.unity3d.com/Manual/LightMode-Baked.html) from either [lightmaps](https://docs.unity3d.com/Manual/Lightmapping.html)A pre-rendered texture that contains the effects of light sources on static objects in the scene. Lightmaps are overlaid on top of scene geometry to create the effect of lighting. [More info](../Lightmapping.html)
See in [Glossary](../Glossary.html#Lightmap) or [Light Probes](https://docs.unity3d.com/Manual/LightProbes.html)Light probes store information about how light passes through space in your scene. A collection of light probes arranged within a given space can improve lighting on moving objects and static LOD scenery within that space. [More info](../LightProbes.html)
See in [Glossary](../Glossary.html#LightProbe). This adds some depth to your **scenes**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../CreatingScenes.html)
See in [Glossary](../Glossary.html#Scene) at a small performance cost. Games with this shading model can run on less powerful platforms.

The URP Baked Lit shader is the only shader that uses the Baked Lit shading model.

## Shaders with no lighting

URP comes with some unlit-type shaders. Materials with unlit-type shaders are not affected by neither real-time, nor baked lighting. Unlit shaders let you create unique visual look of the objects in your scene. Unlit shaders have significantly faster compilation speed compared with lit shaders.

The following URP Shaders have no lighting:

- [Unlit](unlit-shader.html)

- [Particles Unlit](particles-unlit-shader.html)

Prebuilt shaders in URP

Choose a prebuilt shader in URP
