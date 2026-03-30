This version of Unity is unsupported.

Set the lighting model in a Surface Shader in the Built-In Render Pipeline

Surface Shader examples in the Built-In Render Pipeline

# Optimize Surface Shaders

[Surface Shaders](SL-SurfaceShaders.html)A streamlined way of writing shaders for the Built-in Render Pipeline. [More info](SL-SurfaceShaders.html)
See in [Glossary](Glossary.html#SurfaceShader) are great for writing **shaders**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) that interact with lighting. However, their default options are tuned to cover a broad number of general cases. Tweak these for specific situations to make shaders run faster or at least be smaller:

- The `halfasview` for Specular shader types is even faster. The half-vector (halfway between lighting direction and view vector) is computed and normalized per vertex, and the [lighting function](SL-SurfaceShaderLighting.html) receives the half-vector as a parameter instead of the view vector.

- `noforwardadd` makes a shader fully support one-directional light in **Forward rendering**A rendering path that renders each object in one or more passes, depending on lights that affect the object. Lights themselves are also treated differently by Forward Rendering, depending on their settings and intensity. [More info](RenderTech-ForwardRendering.html)
See in [Glossary](Glossary.html#ForwardRendering) only. The rest of the lights can still have an effect as per-vertex lights or spherical harmonics. This is great to make your shader smaller and make sure it always renders in one pass, even with multiple lights present.

- `noambient` disables ambient lighting and spherical harmonics lights on a shader. This can make performance slightly faster.

## Additional resources

- [Optimize shader runtime performance](SL-ShaderPerformance.html)

Set the lighting model in a Surface Shader in the Built-In Render Pipeline

Surface Shader examples in the Built-In Render Pipeline
