This version of Unity is unsupported.

Assign a channel-packed texture to a URP material

Introduction to reducing shader variants in URP

# Reducing shader variants in URP

Resources on speeding up builds by reducing the number of **shaders**A program that runs on the GPU. [More info](../Shaders.html)
See in [Glossary](../Glossary.html#Shader) URP compiles.

| Page | Description |
| --- | --- |
| Introduction to reducing shader variants | Learn about disabling features and shader keywords to speed up builds, and reduce memory usage and file sizes. |
| Check how many shader variants your build has | Log how many shader variants Unity compiles and strips. |
| Strip feature shader variants | To remove shader variants for features you don’t use, enable Strip Unused Variants in URP Graphics settings. |
| Strip level of detail (LOD) shader variants | To reduce shader variants by around 50%, make Unity use stencil testing instead of alpha testing to fade between different LODThe Level Of Detail (LOD) technique is an optimization that reduces the number of triangles that Unity has to render for a GameObject when its distance from the Camera increases. More infoSee in Glossary levels. |
| Strip fog shader variants | Make Unity use dynamic branching in the shader code that generates fog, instead of keywords and shader variants. |
| Remove shader variants if you use a custom Renderer Feature | Use the FilterAttribute API to remove shader variants. |

## Additional resources

- [Reducing rendering work on the CPU or GPU](../OptimizingGraphicsPerformance-urp)

- [Troubleshooting shaders](../shader-troubleshooting.html)

Assign a channel-packed texture to a URP material

Introduction to reducing shader variants in URP
