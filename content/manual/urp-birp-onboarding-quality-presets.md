This version of Unity is unsupported.

Change how lights fade to match the Built-In Render Pipeline

Find Built-In Render Pipeline quality settings in URP

# Convert quality settings from the Built-In Render Pipeline to URP

This page provides recommended URP graphics [Quality Level](../../class-QualitySettings.html) settings for **Low** and **High** quality level values. These settings approximately match the performance of the equivalent **Low** and **High** default presets in the Built-In **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../../render-pipelines.html)
See in [Glossary](../../Glossary.html#Renderpipeline).

URP changes the implementation of many features and settings, and as a result they often have a different performance impact to the Built-In Render Pipeline equivalent. When you upgrade a project from the Built-In Render Pipeline to URP, your existing quality levels might provide a different level of performance, and you might need to update or create new quality levels for your project. You can use the values on this page as a starting point.

This page is split into the following sections:

- [Project Settings](#project-settings)A broad collection of settings which allow you to configure how Physics, Audio, Networking, Graphics, Input and many other areas of your project behave. [More info](../../comp-ManagerGroup.html)
See in [Glossary](../../Glossary.html#ProjectSettings)

- [URP Asset](#urp-asset)

> **Note**: In URP, many quality level settings have moved from the Project Settings window to the URP Asset. For more information on where to find these settings in URP projects, refer to [Built-In Render Pipeline Quality Settings Reference](quality-settings-location.html).

## Project Settings

You can change the following settings in [Project Settings](../../class-QualitySettings.html) under **Project Settings** > **Quality**.

| Setting | “Low” preset value | “High” preset value |
| --- | --- | --- |
| Rendering |  |  |
| Real-time Reflection ProbesA rendering component that captures a spherical view of its surroundings in all directions, rather like a camera. The captured image is then stored as a Cubemap that can be used by objects with reflective materials. More infoSee in Glossary | No | Yes |
| Resolution Scaling Fixed DPI Factor | 1 | 1 |
| VSyncVertical synchronization (VSync) is a display setting that caps a game’s frame rate to match the refresh rate of a monitor, to prevent image tearing.See in Glossary Count | Don’t Sync | Every V Blank |
| Textures |  |  |
| Global Mipmap Limit | Half Resolution | Full Resolution |
| Anisotropic Textures | Disabled | Disabled |
| Texture Streaming | No | No |
| Particles |  |  |
| Particle Raycast Budget | 16 | 256 |
| TerrainThe landscape in your scene. A Terrain GameObject adds a large flat plane to your scene and you can use the Terrain’s Inspector window to create a detailed landscape. More infoSee in Glossary |  |  |
| BillboardsA textured 2D object that rotates so that it always faces the Camera. More infoSee in Glossary Face CameraA component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. More infoSee in Glossary Position | No | Yes |
| Shadows |  |  |
| ShadowmaskA Texture that shares the same UV layout and resolution with its corresponding lightmap. More infoSee in Glossary Mode | Shadowmask | Distance ShadowmaskA version of the Shadowmask lighting mode that includes high quality shadows cast from static GameObjects onto dynamic GameObjects. More infoSee in Glossary |
| Async Asset Upload |  |  |
| Time Slice | 2 | 2 |
| Buffer Size | 16 | 16 |
| Persistent Buffer | Yes | Yes |
| Level of DetailThe Level Of Detail (LOD) technique is an optimization that reduces the number of triangles that Unity has to render for a GameObject when its distance from the Camera increases. More infoSee in Glossary |  |  |
| LOD Bias | 0.4 | 1 |
| Maximum LOD level | 0 | 0 |
| Meshes |  |  |
| Skin Weights | 4 Bones | Unlimited |

## URP Asset

You can change the following settings inside any [URP Asset](./../universalrp-asset.html).

| Setting | “Low” preset value | “High” preset value |
| --- | --- | --- |
| Rendering |  |  |
| Depth Texture | No | No |
| Opaque Texture | No | No |
| Terrain Holes | Yes | Yes |
| Quality |  |  |
| HDRhigh dynamic rangeSee in Glossary | Yes | Yes |
| Anti Aliasing (MSAA) | Disabled | 2x |
| Render Scale | 1 | 1 |
| Lighting |  |  |
| Main Light | Per PixelThe smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. More infoSee in Glossary | Per Pixel |
| Cast Shadows | No | Yes |
| Shadows Resolution | N/A | 2048 |
| Additional Lights | Disabled | Per Pixel |
| Per Object Limit | N/A | 4 |
| Cast Shadows | N/A | Yes |
| Shadow Atlas Resolution | N/A | 2048 |
| Shadow Resolution Tiers | N/A |  |
| Low | N/A | 512 |
| Medium | N/A | 1024 |
| High | N/A | 2048 |
| Cookie Atlas Resolution | N/A | 2048 |
| Cookie Atlas Format | N/A | Color High |
| Reflection Probes |  |  |
| Probe Blending | No | Yes |
| Box Projection | No | No |
| Shadows |  |  |
| Max Distance | N/A | 50 |
| Cascade Count | N/A | 3 |
| Split 1 | N/A | 12.5 |
| Split 2 | N/A | 33.8 |
| Last Border | N/A | 3.8 |
| Working Unit | N/A | Metric |
| Depth Bias | N/A | 1 |
| Normal Bias | N/A | 1 |
| Soft Shadows | N/A | Yes |
| Post-processingA process that improves product visuals by applying filters and effects before the image appears on screen. You can use post-processing effects to simulate physical camera and film properties, for example Bloom and Depth of Field. More info post processing, postprocessing, postprocessSee in Glossary |  |  |
| Grading Mode | Low Dynamic Range | Low Dynamic Range |
| LUT Size | 16 | 32 |
| Fast sRGB/Linear Conversion | No | No |

## Additional resources

- [Find Quality Settings in URP](./quality-settings-location.html)

- [URP Asset](./../universalrp-asset.html)

Change how lights fade to match the Built-In Render Pipeline

Find Built-In Render Pipeline quality settings in URP
