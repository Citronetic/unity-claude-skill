This version of Unity is unsupported.

Direct and indirect lighting

Introduction to lighting data

# Lighting data

Resources for how Unity stores lighting data and visibility data for lightmapping, **Light Probes**Light probes store information about how light passes through space in your scene. A collection of light probes arranged within a given space can improve lighting on moving objects and static LOD scenery within that space. [More info](LightProbes.html)
See in [Glossary](Glossary.html#LightProbe), and **Reflection Probes**A rendering component that captures a spherical view of its surroundings in all directions, rather like a camera. The captured image is then stored as a Cubemap that can be used by objects with reflective materials. [More info](class-ReflectionProbe.html)
See in [Glossary](Glossary.html#ReflectionProbe).

| Page | Description |
| --- | --- |
| Introduction to lighting data | Understand how Unity stores lighting data and visibility data for lightmapping, Light Probes, and Reflection Probes. |
| Lighting Data Assets | Learn about the asset Unity creates to store precomputed lighting data for a sceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary. |
| GI cacheThe cached intermediate files used when Unity precomputes lighting data. Unity keeps this cache to speed up computation. More infoSee in Glossary | Learn about the internal data cache Unity uses to store intermediate files when it precomputes lighting data for lightmapping. |
| Lightmap data format | Understand how Unity stores light intensity as textures during lightmapping, and learn about support for high dynamic range (HDR) lightmapsA pre-rendered texture that contains the effects of light sources on static objects in the scene. Lightmaps are overlaid on top of scene geometry to create the effect of lighting. More infoSee in Glossary. |
| Light Probe data format | Understand how Unity stores light as spherical harmonics data in Light Probes. |

Direct and indirect lighting

Introduction to lighting data
