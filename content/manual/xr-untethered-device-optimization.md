This version of Unity is unsupported.

URP Application Spacewarp

Resolution control in XR projects

# Optimize for untethered XR devices in URP

Understand the ways you can optimize your URP project for **XR**An umbrella term encompassing Virtual Reality (VR), Augmented Reality (AR) and Mixed Reality (MR) applications. Devices supporting these forms of interactive applications can be referred to as XR devices. [More info](XR.html)
See in [Glossary](Glossary.html#XR) devices.

This page describes the optimization techniques for universal **render pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline) (URP) projects that target untethered extended reality (XR) devices. An untethered XR device is an XR device that aren’t connected to a desktop with a wire.

Most untethered XR devices use tile-based GPUs. The guidelines on this page help you use this hardware architecture more efficiently and avoid using rendering techniques that are less efficient on those devices. To learn more about how tiled-based GPUs work, refer to the additional resources section.

To optimize your XR project, consider the following:

- [Use Vulkan API](#vulkan)

- [Use OpenXR](#openxr)

- [Use the render graph system](#render-graph)

- [Use Forward rendering](#forward-rendering)

- [Avoid post-processing](#post-processing)

- [Avoid geometry shaders](#geometry-shaders)

- [Use MSAA for anti-aliasing](#msaa)

- [Disable depth priming](#depth-priming)

- [Disable Opaque texture and Depth texture properties](#textures)

- [Disable SSAO](#ssao)

- [Disable HDR](#hdr)

- [Implement resolution scaling](#resolution-scaling)

The following sections describe these methods in more detail.

## Use Vulkan API

Vulkan API is more stable and provides better performance compared to OpenGL ES API in URP projects targeting XR platforms. Many new OpenXR features are only available on Vulkan.

Refer to [Configure graphics APIs](configure-graphicsAPIs.html#override-default-gfxapi) for information on how to change the graphics API to Vulkan.

## Use OpenXR Plugin

Use the [OpenXR Plugin](https://docs.unity3d.com/Packages/com.unity.xr.openxr@1.12) in projects that target XR platforms.

Enable the following settings in your OpenXR project:

- [Multi-view \ Single pass rendering](https://docs.unity3d.com/Packages/com.unity.xr.openxr@1.12/manual/project-configuration.html#set-the-render-mode)

- [Foveated rendering](https://docs.unity3d.com/Packages/com.unity.xr.openxr@1.12/manual/features/foveatedrendering.html)

- [Multiview render regions](https://docs.unity3d.com/Packages/com.unity.xr.openxr@1.12/manual/features/multiviewrenderregions.html)

**Tip:** Consider whether [URP Application SpaceWarp](xr-graphics-spacewarp.html) is appropriate for your project. Application SpaceWarp can improve frame rate significantly, but might cause visible artifacts for some content.

## Use render graph system

In Unity 6.0 and newer, new URP projects use the render graph system. Refer to [Benefits of the render graph system](https://docs.unity3d.com/Packages/com.unity.render-pipelines.core@17.0/manual/render-graph-benefits.html) to understand the benefits of render graph.

## Use Forward rendering

In URP, Deferred rendering generates several render targets for the G-buffer. Unity performs multiple [graphics memory loads](https://developer.qualcomm.com/software/snapdragon-profiler/app-notes/avoid-gmem-loads) (Qualcomm documentation) to access those render targets, which is slow on tile-based GPUs.

Refer to [Deferred rendering implementation details](urp/rendering/deferred-rendering-path-landing.html) for more information on the implementation of the G-buffer in URP.

The ****Rendering Path**The technique that a render pipeline uses to render graphics. Choosing a different rendering path affects how lighting and shading are calculated. Some rendering paths are more suited to different platforms and hardware than others. [More info](RenderingPaths.html)
See in [Glossary](Glossary.html#RenderingPath)** settings is in the [**Rendering**](urp/urp-universal-renderer.html#rendering) section of the [Universal Renderer Asset](urp/urp-universal-renderer.html).

## Avoid post-processing

Some **post-processing**A process that improves product visuals by applying filters and effects before the image appears on screen. You can use post-processing effects to simulate physical camera and film properties, for example Bloom and Depth of Field. [More info](PostProcessingOverview.html) post processing, postprocessing, postprocess
See in [Glossary](Glossary.html#post-processing) effects are supported on XR platforms, as outlined in [Universal Render Pipeline compatibility in XR](xr-render-pipeline-compatibility.html). However, the recommended practice is to avoid post-processing on untethered XR devices because of its performance impact.

URP renders post-processing in multiple render passes where the output of one pass is the input of the next one. On tile-based GPUs one of the most resource intensive tasks is performing a GMEM load. Post-processing passes often cause GMEM loads because they might load additional textures or copy the current screen color information to perform certain effects. In certain post-processing effects, for example in [bloom](post-processing-bloom)A post-processing effect used to reproduce an imaging artifact of real-world cameras. The effect produces fringes of light extending from the borders of bright areas in an image, contributing to the illusion of an extremely bright light overwhelming the camera or eye capturing the scene.
See in [Glossary](Glossary.html#Bloom), rendering a **pixel**The smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. [More info](ShadowPerformance.html)
See in [Glossary](Glossary.html#pixel) requires sampling adjacent pixels. This can cause extra GMEM loads for accessing pixels outside a certain tile.

In URP, the post-processing pass executes a final **blit**A shorthand term for “bit block transfer”. A blit operation is the process of transferring blocks of data from one place in memory to another.
See in [Glossary](Glossary.html#blit) even if there are no effects to execute. This requires another GMEM load because the blit operation copies the current texture in which Unity executes the post-processing pass to the final **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera) texture.

On XR platforms Unity performs such operations once per view which increases the performance impact.

**Note:** Some effects can cause motion sickness. Refer to section [Post-processing in URP for VR](integration-with-post-processing#post-processing-in-urp-for-vr) for a list of effects that can cause motion sickness.

To disable post-processing for a specific **Universal Renderer**:

1. Select a **Universal Renderer** asset.

2. Under **Post-processing**, ensure that the **Enabled** checkbox is cleared.

To disable post-processing for a camera:

1. Select a camera in the **Hierarchy** window.

2. In the ****Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector)** window, expand the **Rendering** section.

3. Ensure that **Post Processing** is cleared.

## Avoid geometry shaders

Avoid using geometry **shaders**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) on platforms with tile-based GPUs. Some devices don’t support geometry shaders.

The generation of additional primitives and vertices breaks the tiled GPU flow because the division of primitives after the binning pass becomes invalid.

## Use MSAA for anti-aliasing

Tile-based GPUs can store more samples in the same tile. This makes Multi-sample Anti-aliasing (MSAA) efficient on mobile and untethered XR platforms. 2X MSAA value provides a good balance between visual quality and performance.

You can change the MSAA settings in the **Quality** section of the URP Asset. For more information on MSAA, refer to [Anti-aliasing in URP](urp/anti-aliasing.html).

## Disable depth priming

Disable depth priming on XR platforms. XR devices have two views, which increases the performance impact from performing the depth pre-pass.

For untethered XR devices there are no benefits of performing the depth priming. You can obtain similar results using hardware optimization features, such as Low-Resolution-Z (LRZ) or Hidden Surface Removal (HSR).

For information on how to configure or disable depth priming, refer to the [Depth Priming Mode](urp/urp-universal-renderer.html#rendering) property description.

## Disable Opaque texture and Depth texture properties

Disable the **Opaque Texture** and **Depth Texture** properties to improve performance. Enabling those options causes extra texture copy operations, which requires extra GMEM loads.

Refer to [Rendering](urp/universalrp-asset.html#rendering) for more information on these opaque and depth texture properties..

To identify if your current configuration is using intermediate textures, use the [Render Graph Viewer](urp/render-graph-view.html) window.

## Disable SSAO

Screen Space **Ambient Occlusion**A method to approximate how much ambient light (light not coming from a specific direction) can hit a point on a surface.
See in [Glossary](Glossary.html#Ambientocclusion) (SSAO) might have poor performance on mobile and untethered XR devices.

SSAO in URP requires the depth priming pass, two blur passes to reduce the noise, and an additional blit pass to clean the image. Such passes require several GMEM loads which have a high performance impact on tile-based GPUs.

Refer to [SSAO](urp/post-processing-ssao.html) for more information.

## Disable HDR

High Definition Rendering (HDR) has higher precision and improves graphics fidelity, but requires more bits per pixel to process. Disable **HDR**high dynamic range
See in [Glossary](Glossary.html#HDR) to reduce memory bandwidth and improve performance.

Most untethered XR devices don’t support HDR rendering.

To disable HDR:

1. Select a URP Asset.

2. In the **Inspector** window, in the **Quality** section, clear the **HDR** property.

**Note**: some features, such as HDR light estimation require HDR. Check the requirements for the features your project uses to ensure HDR isn’t required.

## Implement resolution scaling

Unity recommends that you implement resolution scaling to reduce GPU workload and maintain a stable frame rate.

To learn more, refer to [Resolution control in XR projects](xr-graphics-resolution-scaling.html).

## Additional resources

- [Tile-Based Rendering](https://developer.arm.com/documentation/102662/0100/Overview) (Arm)

URP Application Spacewarp

Resolution control in XR projects
