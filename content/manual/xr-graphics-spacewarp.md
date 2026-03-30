This version of Unity is unsupported.

VR frame timing

Optimize for untethered XR devices in URP

# URP Application Spacewarp

URP Application Spacewarp is an optimization for OpenXR that helps applications maintain a high frame rate. Spacewarp synthesizes every other frame, which can reduce computational power and energy use considerably. The technique uses reprojection when synthesizing frames to reduce latency between the user’s movements and display updates.

Spacewarp can cause display artifacts and might require changes to your application for acceptable results.

Refer to the following topics for information about how to use spacewarp in your Unity project:

| Topics | Description |
| --- | --- |
| Prerequisites | Lists the technical requirements needed to utilize spacewarp in Unity projects, including specific versions of Unity, OpenXR, URP, and other necessary components. |
| Understand URP Application Spacewarp | Explains how spacewarp works by interpolating frames and describes associated buffers, limitations, and potential visual artifacts you might encounter. |
| Application spacewarp workflow | Provides an overview of how to enable and configure spacewarp in Unity projects. |
| Enable the OpenXR spacewarp feature in the Editor | Describes methods to enable spacewarp in Unity, either using the Meta SDK for Meta devices or a manual OpenXR feature configuration. |
| Control spacewarp at runtime | Details how to control and manage the spacewarp feature at runtime. |
| Choose shaders compatible with spacewarp | Lists the types of shadersA program that runs on the GPU. More infoSee in Glossary that are compatible with spacewarp. |
| Modify custom shaders to support spacewarp | How to modify custom shaders to support spacewarp. |
| Configure Materials for spacewarp | How to apply the spacewarp feature to specific Materials by toggling the XRAn umbrella term encompassing Virtual Reality (VR), Augmented Reality (AR) and Mixed Reality (MR) applications. Devices supporting these forms of interactive applications can be referred to as XR devices. More infoSee in Glossary Motion Vectors Pass (Space Warp) property. |

## Additional resources

- [Rendergraph](urp/render-graph.html)

- [URP compatibility mode](urp/compatibility-mode.html)

- [Using the Universal Render Pipeline](universal-render-pipeline.html)

- [Shader Graph](shader-graph.html)

- [OpenXR](https://docs.unity3d.com/Packages/com.unity.xr.openxr@latest)

- [OpenXR XR_FB_space_warp extension](https://registry.khronos.org/OpenXR/specs/1.0/html/xrspec.html#XR_FB_space_warp)

- [Application Spacewarp Developer Guide (Meta)](https://developers.meta.com/horizon/documentation/unity/unity-asw/)

## Prerequisites

To use URP Application Spacewarp, your project must meet the following prerequisites:

- Unity 6.1+

- OpenXR 1.11.0+

- Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline) (URP) 17.0.3+

- Rendergraph (Spacewarp is not supported in [URP compatibility mode](urp/compatibility-mode.html))

- Vulkan graphics API

- Android build target

- XR Headset that supports URP Application Spacewarp

**Note:** Refer to your device’s documentation and specifications to determine whether it supports the OpenXR [XR_FB_space_warp](https://registry.khronos.org/OpenXR/specs/1.0/html/xrspec.html#XR_FB_space_warp) extension. (You can also look at the Android logs from a device to make sure that the extension is enabled successfully when you test your app.)

## Understand URP Application Spacewarp

URP Application Spacewarp synthesizes every other frame using data from previous frames. In addition to the standard eye buffer for the rendered **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene), spacewarp requires a motion vector buffer and a **depth buffer**A memory store that holds the z-value depth of each pixel in an image, where the z-value is the depth for each rendered pixel from the projection plane. [More info](class-RenderTexture.html)
See in [Glossary](Glossary.html#depthbuffer). The URP XR Pass renders these to low resolution motion vector and depth buffers.

To synthesize a frame, spacewarp shifts **pixels**The smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. [More info](ShadowPerformance.html)
See in [Glossary](Glossary.html#pixel) from the previous rendered frame to a new, extrapolated position based on the motion vectors and depth. To decrease latency, the frame is reprojected using positional timewarp based on the latest available input pose.

**Note**: Positional timewarp is a more effective form of reprojection that uses the update pose along with depth information to both translate and rotate the final frame. Technically, positional timewarp is a different feature than application spacewarp. Meta headsets automatically turn on positional timewarp when application spacewarp is active. Other headsets might not.

For additional information about Application Spacewarp on Meta devices, refer to [Application Spacewarp Developer Guide (Meta)](https://developers.meta.com/horizon/documentation/unity/unity-asw/).

### Limitations of spacewarp

- While spacewarp can improve your app’s rendering performance, it doesn’t simply double your frame rate. (Meta estimates a 70% improvement in the best cases for Quest headsets.) However, spacewarp doesn’t work at all if your frame rate is already very low (around 18 fps or less).

- Frame synthesis can introduce visual artifacts such as distortion and stuttering. Refer to [Visual artifacts](#visual-artifacts).

- Not all objects can have spacewarp applied to them, which means they effectively render at half the framerate. Refer to [Unwarped objects](#unwarped-objects).

- Unity does not support using spacewarp in the [URP compatibility mode](urp/compatibility-mode.html).

### Visual artifacts

Application spacewarp can cause visual artifacts. You should evaluate whether the benefits of spacewarp outweigh observed problems.

#### Unwarped objects

If a moving object does not have motion vectors, then it can appear to stutter as it moves because its position is only updated in the rendered frames, not the synthesized frames. Still, there might be cases where things look better without spacewarp.

You can apply spacewarp to specific objects by changing the **XR Motion Vectors Pass (Space Warp)** property of their assigned Material. Objects with **XR Motion Vectors Pass (Space Warp)** disabled are not warped. Refer to [Configure Materials for spacewarp](#materials) for more information.

[Image: Material Inspector showing Advanced Options section.]
Material Inspector showing Advanced Options section.

Unity also does not apply spacewarp to:

- **Particle systems**A component that simulates fluid entities such as liquids, clouds and flames by generating and animating large numbers of small 2D images in the scene. [More info](class-ParticleSystem.html)
See in [Glossary](Glossary.html#particlesystem)

- Objects that use materials with shaders that don’t support spacewarp

- Composition layers (only the default scene layer is warped)

#### Transparent objects

Spacewarp can cause artifacts when applied to transparent objects because the movement of objects behind a transparent object isn’t captured in the motion vector and depth buffers. The artifacts can be more obvious when close to the **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera).

In some cases, you can mitigate artifacts related to transparency by rendering such content to a composition layer. However, spacewarp is not applied to composition layers, so animation within a layer might appear choppy.

#### Fast-moving objects

Objects moving with a high apparent velocity can create noticeable artifacts. When spacewarp moves the pixels rendered for an object, the algorithm distorts the background to fill any empty areas left in the object’s wake. The more area an object covers and the farther it moves across the screen, the more likely this distortion will be noticeable. The characteristics of the background behind the object can also make a difference. For example a regular grid with straight lines might show the effects of the distortion more readily than a noisy texture. Objects that you “teleport” from one location to another can cause visual artifacts in the same manner.

In particular, you should evaluate the appearance of controller or hand graphics in your app. These are always close to the user, take up a large portion of the screen, and move at a high apparent velocity, all of which can accentuate spacewarp-related artifacts.

## Application Spacewarp workflow

To enable and use URP Application Spacewarp in your project, complete the following steps:

1. [Enable the OpenXR spacewarp feature](#enable-spacewarp) in the Editor.

2. [Control spacewarp at runtime](#control-spacewarp).

3. [Configure Materials for spacewarp](#materials).

4. [Modify custom shaders](#modify-custom-shaders) to support spacewarp, if necessary.

## Enable the OpenXR spacewarp feature in the Editor

You can enable URP Application Spacewarp in two ways:

- Use the Meta SDK (for Meta headsets).

- Add an OpenXR feature descriptor and import the required library functions manually.

If you are developing for the Meta platform and using Meta’s SDK packages already, use the Meta SDK to enable Application Spacewarp also.

If you are developing for a non-Meta headset that supports spacewarp or don’t want to add the Meta SDK packages and assets to your project, then you should use the manual method to add the OpenXR feature descriptor.

### Enable spacewarp with the Meta SDK

To enable Application Spacewarp when using the Meta SDK package:

1. Obtain the [Meta Core SDK package](https://assetstore.unity.com/packages/tools/integration/meta-xr-core-sdk-269169?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774939312483) from the Unity **Asset Store**A growing library of free and commercial assets created by Unity and members of the community. Offers a wide variety of assets, from textures, models and animations to whole project examples, tutorials and Editor extensions. [More info](AssetStore.html)
See in [Glossary](Glossary.html#AssetStore).

2. Install the package in your project with the Unity Package Manager.

3. Open the ****Project Settings**A broad collection of settings which allow you to configure how Physics, Audio, Networking, Graphics, Input and many other areas of your project behave. [More info](comp-ManagerGroup.html)
See in [Glossary](Glossary.html#ProjectSettings)** window.

4. Choose the **OpenXR** settings page under **XR **Plug-in**A set of code created outside of Unity that creates functionality in Unity. There are two kinds of plug-ins you can use in Unity: Managed plug-ins (managed .NET assemblies created with tools like Visual Studio) and Native plug-ins (platform-specific native code libraries). [More info](./plug-ins.html)
See in [Glossary](Glossary.html#Plug-in) Management**,.

5. Select the Android tab.

6. Under **OpenXR Feature Groups**, enable **Meta XR Spacewarp**.

[Image: OpenXR settings page showing spacewarp feature option added by Meta SDK.]
OpenXR settings page showing spacewarp feature option added by Meta SDK.

**Note:** You must also enable the feature at runtime and for some XR platforms, including Meta, you must update the camera position and rotation every frame.

**Note:** In the past, a customized fork of URP was required to support the XR motion vector buffer required by Spacewarp. You no longer need to use this modified version as of URP 17.0.3.

### Enable spacewarp manually

To manually enable the URP Application Spacewarp feature, you must:

1. Extend the [OpenXRFeature](https://docs.unity3d.com/Packages/com.unity.xr.openxr@latest?subfolder=/api/UnityEngine.XR.OpenXR.Features.OpenXRFeature.html) class to declare the spacewarp feature with an [OpenXRFeature attribute](https://docs.unity3d.com/Packages/com.unity.xr.openxr@latest?subfolder=/api/UnityEditor.XR.OpenXR.Features.OpenXRFeatureAttribute.html).

2. Import the `MetaSetSpaceWarp`, `MetaSetAppSpacePosition`, and `MetaSetAppSpaceRotation` functions from the UnityOpenXR dll library. (This library is part of the OpenXR package.)

3. Enable the **XR Space Warp** feature in the OpenXR Feature Groups list for the OpenXR platforms you are targeting. Refer to [OpenXR: Project configuration](https://docs.unity3d.com/Packages/com.unity.xr.openxr@latest?subfolder=/manual/project-configuration.html) for information about how to find and change OpenXR settings.

The [example script](#spacewarp-feature-code) performs the first two steps. When you include the script in your project, it adds the **URP Application Spacewarp** option to the OpenXR settings page.

[Image: OpenXR settings page showing the spacewarp feature option added by a custom feature declaration.]
OpenXR settings page showing the spacewarp feature option added by a custom feature declaration.

The following script adds the feature descriptor and imports the required functions from the UnityOpenXR library:

```cs
using System.Runtime.InteropServices;
using UnityEditor;
using UnityEngine;
using UnityEngine.XR.OpenXR;
using UnityEngine.XR.OpenXR.Features;

#if UNITY_EDITOR
// OpenXR feature declaration.
[UnityEditor.XR.OpenXR.Features.OpenXRFeature(UiName = "URP Application Spacewarp",
    Desc=@"URP Application Spacewarp feature",
    Company = "Unity",
    DocumentationLink = "",
    OpenxrExtensionStrings = "XR_FB_space_warp",
    Version = "1.0.0",
    BuildTargetGroups = new []{BuildTargetGroup.Android},
    FeatureId = featureId)]
#endif
public class SpacewarpFeature : OpenXRFeature
{
    // The feature id string. This is used to give the feature a well known id for reference.
    public const string featureId = "com.unity.openxr.feature.Spacewarp";

    // Turn spacewarp on or off.
    public static bool SetSpacewarp(bool enabled)
    {
        return MetaSetSpaceWarp(enabled);
    }

    // Update spacewarp for camera movement.
    public static bool SetAppSpaceTransform(Vector3 position, Quaternion rotation)
    {
        return MetaSetAppSpacePosition(
                   position.x,
                   position.y,
                   position.z)
               &&
               MetaSetAppSpaceRotation(
                   rotation.x,
                   rotation.y,
                   rotation.z,
                   rotation.w);
    }

    // Import functions from the UnityOpenXR dll.
    [DllImport("UnityOpenXR", EntryPoint = "MetaSetSpaceWarp")]
    private static extern bool MetaSetSpaceWarp(bool enabled);

    [DllImport("UnityOpenXR", EntryPoint = "MetaSetAppSpacePosition")]
    private static extern bool MetaSetAppSpacePosition(float x, float y, float z);

    [DllImport("UnityOpenXR", EntryPoint = "MetaSetAppSpaceRotation")]
    private static extern bool MetaSetAppSpaceRotation(float x, float y, float z, float w);
}
```

**Note**: In the future, this technique of manually adding the spacewarp feature descriptor and importing the related functions from the OpenXR package libraries might be superseded in an update to the Unity OpenXR packages. You should keep your version of the `SpacewarpFeature` class as simple as possible to make it easy to replace when this happens.

Once you have added this script to your project, enable spacewarp by adding a script to your scene that calls `SetSpacewarp(true)`. Depending on your headset, you might need to also update Position and Rotation via the other two functions with the main camera’s position and rotation. Refer to your headset’s specifications to see whether it’s required.

## Control spacewarp at runtime

In addition to enabling URP Application Spacewarp in your XR settings for the project, you must also turn spacewarp on at runtime.

To turn spacewarp on, call the `SpacewarpFeature.SetSpacewarp` function defined in the [SpacewarpFeature example script](#spacewarp-feature-code). Pass `true` to enable spacewarp and `false` to turn it off.

**Note:** If you’re using the Meta SDK, call `OVRManager.SetSpaceWarp(true)` to turn on the spacewarp feature.

On Meta headsets, you must call functions to update the position and rotation of the main camera every frame. (See the documentation for your headset for other devices or if you are using the Meta SDK.)

If you are using the [SpacewarpFeature example script](#spacewarp-feature-code), you can enable and control spacewarp by adding the following MonoBehaviour to your scene’s main Camera object:

```cs
using UnityEngine;

// Add to main scene camera
public class SpacewarpController : MonoBehaviour
{
    void Start()
    {
        // Enable spacewarp when scene loads
        SpacewarpFeature.SetSpacewarp(true);
    }

    void Update()
    {
        // Update spacewarp with camera position and rotation
        SpacewarpFeature.SetAppSpaceTransform(transform.position, transform.rotation);
    }
}
```

## Choose shaders compatible with spacewarp

URP Application Spacewarp requires shaders that record XR motion vectors, which are used to predict the position of pixels in the extrapolated frames. If you use a shader that doesn’t record XR motion vectors, rendered objects that use it won’t update in the synthesized frames. These objects might appear to stutter because they are effectively rendered at half the framerate. Refer to [Understand URP Application Spacewarp](#understand-spacewarp) for information about how spacewarp works.
The following URP base shaders are spacewarp compatible:

- [Lit](urp/lit-shader.html)

- [Unlit](urp/unlit-shader.html)

- [Complex Lit](urp/shader-complex-lit.html)

- [Simple Lit](urp/simple-lit-shader.html)

- [Baked Lit](urp/baked-lit-shader.html)

For Shadergraph, the following **Material** options for the **Universal** [Graph Target](https://docs.unity3d.com/Packages/com.unity.shadergraph@17.0/manual/Graph-Target.html) are spacewarp compatible:

- Lit

- Unlit

## Modify custom shaders to support spacewarp

To enable your custom shaders to work with URP Application Spacewarp, you must add support for the XRMotionVectors render pass.

First, add the `_XRMotionVectorsPass` property to your shader. This property allows you to enable spacewarp on a per-material basis. (Refer to [Configure Materials for spacewarp](#materials) for information about how it works with the URP shaders that support spacewarp.)

```hlsl
[HideInInspector] _XRMotionVectorsPass("_XRMotionVectorsPass", Float) = 1.0
```

Next, add the following shader subpass declaration:

```hlsl
Pass
{
        Name "XRMotionVectors"
        Tags { "LightMode" = "XRMotionVectors" }
        ColorMask RGBA

        // Stencil write for obj motion pixels
        Stencil
        {
        WriteMask 1
                Ref 1
                Comp Always
                Pass Replace
        }

        HLSLPROGRAM
        #pragma shader_feature_local _ALPHATEST_ON
        #pragma multi_compile _ LOD_FADE_CROSSFADE
        #pragma shader_feature_local_vertex _ADD_PRECOMPUTED_VELOCITY
        #define APPLICATION_SPACE_WARP_MOTION 1

        #include "Packages/com.unity.render-pipelines.universal/Shaders/BakedLitInput.hlsl"
        #include_with_pragmas "Packages/com.unity.render-pipelines.universal/ShaderLibrary/ObjectMotionVectors.hlsl"
        ENDHLSL
  }
```

## Configure Materials for spacewarp

You can apply URP Application Spacewarp to specific objects by changing the **XR Motion Vectors Pass (Space Warp)** property of their assigned Material. You can find the **XR Motion Vectors Pass (Space Warp)** property in the **Advanced Options** section of the ****Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector)** window for a Material. Objects with **XR Motion Vectors Pass (Space Warp)** disabled are not warped.

[Image: Material Inspector showing Advanced Options section.]
Material Inspector showing Advanced Options section.

**Tip**: If the **XR Motion Vectors Pass (Space Warp)** option is disabled or missing, make sure that your Unity project meets the [Prerequisites](#prerequisites) for using URP Application Spacewarp.

VR frame timing

Optimize for untethered XR devices in URP
