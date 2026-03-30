This version of Unity is unsupported.

Changing resolution scale

Dynamic Resolution

# Introduction to changing resolution scale

To reduce the amount of work for the GPU and speed up rendering, you can change the resolution of the image Unity renders. For example, you can render at a lower resolution when the frame rate of the application decreases.

When you change the resolution scale, Unity does the following:

1. Renders at a lower resolution.

2. Uses one of several upscaling technique to increases the resolution of the rendered image, so it matches the final image.

If you use the Universal Render Pipeline (URP) or the Built-In Render Pipeline, you can only use dynamic resolution on some platforms.

For more information, refer to:

- [Dynamic resolution](DynamicResolution-landing.html)A Camera setting that allows you to dynamically scale individual render targets to reduce workload on the GPU. [More info](DynamicResolution-landing.html)
See in [Glossary](Glossary.html#dynamicresolution) if you use URP or the Built-In Render Pipeline.

- [Dynamic resolution in the High Definition Render Pipeline (HDRP)](https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@17.0/manual/Dynamic-Resolution.html)

## Upscaling techniques

The upscaling techniques depend on the [render pipeline](render-pipelines.html)A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline) you choose and the platform you build for.

The Built-In Render Pipeline always uses a filtering technique the GPU provides.

| Feature | What the feature uses to upscale the image | URP | HDRP |
| --- | --- | --- | --- |
| Bilinear | The bilinear or linear filtering the graphics API provides. | Yes. Refer to quality settings in the URP asset | No. |
| Nearest-neighbor | The nearest-neighbor or point sampling filtering the graphics API provides. | Yes. Refer to quality settings in the URP asset | No. |
| Catmull-Rom | Four bilinear samples. | No | Yes. Refer to Choose an upscale filter in HDRP. |
| AMD FidelityFX Contrast Adaptive Sharpen (CAS) | Contrast levels. | No | Yes. Refer to Choose an upscale filter in HDRP. |
| Temporal Anti-Aliasing Upscaling (TAAU) | Data from previous frames. | No | Yes. Refer to Choose an upscale filter in HDRP. |
| Spatial-Temporal Post-processingA process that improves product visuals by applying filters and effects before the image appears on screen. You can use post-processing effects to simulate physical camera and film properties, for example Bloom and Depth of Field. More info post processing, postprocessing, postprocessSee in Glossary (STP) | Multiple input textures. STP configures itself automatically to provide the best balance of performance and quality based on the platform. | Yes, but you can’t use STP together with dynamic resolution. Refer to Upscaling resolution in URP with STP. | Yes, but you can’t use STP together with software dynamic resolution. Refer to STP in HDRP. |
| AMD FidelityFX Super Resolution (FSR) 1 | The frame buffer. | Yes. Refer to quality settings in the URP asset. | Yes. Refer to Choose an upscale filter in HDRP. |
| AMD FidelityFX Super Resolution (FSR) 2 | Multiple input textures. | No | Yes. Refer to Choose an upscale filter in HDRP. |
| NVIDIA Deep Learning Super Sampling (DLSS) 4 Super Resolution | Multiple input textures. | No | Yes. Refer to DLSS in HDRP. |

## Additional resources

- [Choosing a render pipeline](choose-a-render-pipeline-landing.html)

- [Graphics rendering: Getting the best performance with Unity 6](https://www.youtube.com/watch?v=Oc6T4hh5gaI)

Changing resolution scale

Dynamic Resolution
