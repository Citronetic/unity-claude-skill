This version of Unity is unsupported.

Decal

Transparent Shader Family

# Diffuse Detail

**Note.** Unity 5 introduced the [Standard Shader](shader-StandardShader.html) which replaces this **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader).

[Image: Diffuse Detail shader.]
Diffuse Detail shader.

## Diffuse Detail Properties

This shader is a version of the regular Diffuse shader with additional data. It allows you to define a second “Detail” texture that will gradually appear as the **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera) gets closer to it. It can be used on **terrain**The landscape in your scene. A Terrain GameObject adds a large flat plane to your scene and you can use the Terrain’s Inspector window to create a detailed landscape. [More info](terrain-UsingTerrains.html)
See in [Glossary](Glossary.html#Terrain), for example. You can use a base low-resolution texture and stretch it over the entire terrain. When the camera gets close the low-resolution texture will get blurry, and we don’t want that. To avoid this effect, create a generic Detail texture that will be tiled over the terrain. This way, when the camera gets close, the additional details appear and the blurry effect is avoided.

The Detail texture is put “on top” of the base texture. Darker colors in the detail texture will darken the main texture and lighter colors will brighten it. Detail texture are usually gray-ish.

## Performance

This shader is pixel-lit, and approximately equivalent to the Diffuse shader. It is marginally more expensive due to additional texture.

NormalDiffuseDetail

Decal

Transparent Shader Family
