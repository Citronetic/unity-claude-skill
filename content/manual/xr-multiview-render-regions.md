This version of Unity is unsupported.

Foveated rendering

VR frame timing

# Multiview Render Regions

Understand the Multiview Render Regions feature for **XR**An umbrella term encompassing Virtual Reality (VR), Augmented Reality (AR) and Mixed Reality (MR) applications. Devices supporting these forms of interactive applications can be referred to as XR devices. [More info](XR.html)
See in [Glossary](Glossary.html#XR) devices.

The Multiview Render Regions feature is an optimization technique to prevent processing on areas of the screen not visible by the user (the nasal region of a VR headset).

## About Multiview Render Regions

Multiview Render Regions is a Vulkan-specific feature that sets multiple scissors, **viewports**The user’s visible area of an app on their screen.
See in [Glossary](Glossary.html#Viewport), and render areas on the headset to reduce rendering load. On **VR**Virtual Reality [More info](VROverview.html)
See in [Glossary](Glossary.html#VR) devices, Multiview Render Regions sets specific values per eye so that areas outside of the user’s view aren’t processed. On Head-Mounted Devices (HMD), this is the nasal region of the headset.

[Image: With Multiview Render Regions enabled (right), the nasal region hidden from the user’s view isn’t rendered to reduce unnecessary processing. Theres no visible difference in the headset (bottom).]
With Multiview Render Regions enabled (right), the nasal region hidden from the user’s view isn’t rendered to reduce unnecessary processing. There’s no visible difference in the headset (bottom).

Multiview Render Regions incorporates two Vulkan extensions ([Multiview per view viewports](https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/VK_QCOM_multiview_per_view_viewports.html), and [Multiview per view render areas](https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/VK_QCOM_multiview_per_view_render_areas.html)) (Khronos documentation). When you enable the Multiview Render Regions feature, you opt into using these extensions.

## Prerequisites

To use Multiview Render Regions, your project must meet the following requirements:

- Unity 6.1 or newer.

- Use the Vulkan API. (Refer to [Configure graphics APIs](configure-graphicsAPIs.html) to understand how to set your graphics API to Vulkan.)

### Supported plug-ins

The following **plug-ins**A set of code created outside of Unity that creates functionality in Unity. There are two kinds of plug-ins you can use in Unity: Managed plug-ins (managed .NET assemblies created with tools like Visual Studio) and Native plug-ins (platform-specific native code libraries). [More info](./plug-ins.html)
See in [Glossary](Glossary.html#Plug-in) support Multiview Render Regions:

- [Oculus](https://docs.unity3d.com/Packages/com.unity.xr.oculus@latest) 4.6 and newer

- [OpenXR](https://docs.unity3d.com/Packages/com.unity.xr.openxr@1.14/manual/features/multiviewrenderregions.html) 1.14 and newer

## Project settings

Configure the following settings in the **XR Plug-in Management** section of your **Project Settings** (menu: **Edit** > **Project Settings** > **XR Plug-in Management**):

- **Stereo Rendering Mode** set to **Multiview**.

- Enable **Symmetric Projection (Vulkan)**.

### Post-processing and intermediate textures

In Unity 6.2 and newer with [OpenXR 1.15](https://docs.unity3d.com/Packages/com.unity.xr.openxr@1.15/manual/features/multiviewrenderregions.html), you can choose which render passes Unity applies Multiview Render Regions to. To learn about the available options for **Multiview Render Regions Optimizations** in OpenXR 1.15, refer to the OpenXR [Multiview Render Regions](https://docs.unity3d.com/Packages/com.unity.xr.openxr@1.15/manual/features/multiviewrenderregions.html) documentation.

If you select **Final Pass** in OpenXR 1.15, or enable **Optimize Multiview Render Regions** in OpenXR 1.14 or Oculus, Multiview Render Regions is applied to the final render pass only. This means Multiview Render Regions is only applied to render passes that output to eye textures. As such, performance gains aren’t expected when using intermediate textures or **post-processing**A process that improves product visuals by applying filters and effects before the image appears on screen. You can use post-processing effects to simulate physical camera and film properties, for example Bloom and Depth of Field. [More info](PostProcessingOverview.html) post processing, postprocessing, postprocess
See in [Glossary](Glossary.html#post-processing) with this feature enabled. If you use intermediate textures or post-processing in your project, profile your project to verify whether Multiview Render Regions will lead to performance gains before you enable it.

**Note**: Unity recommends that you avoid post-processing if your project targets standalone XR devices. Refer to [Optimize for untethered XR devices in URP](urp/xr-untethered-device-optimization) for more information about graphics optimization in XR.

## Enable Multiview Render Regions

If your chosen plug-in [supports Multiview Render Regions](#supported-plug-ins), to enable Multiview Render Regions:

1. Go to the **XR Plug-in Management** section of your **Project Settings** (menu: **Edit** > **Project Settings**).

2. Either:

- Enable **Optimize Multiview Render Regions** (Oculus or OpenXR 1.14).

- Choose the **Multiview Render Regions Optimizations** mode (OpenXR 1.15). Refer to the OpenXR [Multiview Render Regions](https://docs.unity3d.com/Packages/com.unity.xr.openxr@1.15/manual/features/multiviewrenderregions.html) for information on the available options.

## Additional resources

- [Optimize for untethered XR devices in URP](urp/xr-untethered-device-optimization)

- [Stereo rendering](SinglePassStereoRendering.html)

Foveated rendering

VR frame timing
