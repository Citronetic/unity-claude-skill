This version of Unity is unsupported.

Vertex-Lit

Specular

# Diffuse

**Note.** Unity 5 introduced the [Standard Shader](shader-StandardShader.html) which replaces this **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader).

[Image: Normal Diffuse shader.]
Normal Diffuse shader.

## Diffuse Properties

Diffuse computes a simple (Lambertian) lighting model. The lighting on the surface decreases as the angle between it and the light decreases. The lighting depends only on this angle, and does not change as the **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera) moves or rotates around.

## Performance

Generally, this shader is cheap to render. For more details, please view the [Shader Peformance page](shader-Performance.html).

NormalDiffuse

Vertex-Lit

Specular
