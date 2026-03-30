This version of Unity is unsupported.

Choose a render pipeline

Set up a render pipeline

# Render pipeline feature comparison

This page contains information on feature support in the Built-in **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline), the Universal Render Pipeline (URP), and the High Definition Render Pipeline (HDRP). It also contains suggested alternatives for certain features.

For ease of reference, features are broken down into the following categories:

- [Platform Support](#platform-support)

- [Lighting](#lighting)

- [Color](#color)

- [Camera](#camera)

- [Shaders](#shaders)

- [World building](#world-building)

- [Visual effects](#visual-effects)

- [2D and UI](#2d-and-ui)

- [XR](#xr)

- [Scripting](#scripting)

- [Optimizations](#optimizations)

- [Debug](#debug)

## Platform Support

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Windows | Yes | YesDirectX 11, DirectX 12, Vulkan | YesDirectX 11, DirectX 12, Vulkan |
| MacOS | Yes | Yes | Yes |
| Linux | Yes | Yes | YesVulkan |
| XBox One | Yes | Yes | Yes |
| XBox Series | Yes | Yes | Yes |
| PlayStation 4 | Yes | Yes | Yes |
| PlayStation 5 | Yes | Yes | Yes |
| Nintendo Switch | Yes | Yes | No |
| iOS | Yes | Yes | No |
| Android | Yes | Yes | No |
| Desktop VRVirtual Reality More infoSee in Glossary | Yes | Yes | Yes |
| Mobile VR | Yes | Yes | No |
| Hololens | Yes | Yes | No |
| WebGLA JavaScript API that renders 2D and 3D graphics in a web browser. The Unity Web build option allows Unity to publish content as JavaScript programs which use HTML5 technologies and the WebGL rendering API to run Unity content in a web browser. More infoSee in Glossary | Yes | Yes | No |
| WebGPU | No | YesExperimental | No |

## Lighting

### Lights

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Directional | Yes | Yes | Yes |
| Spot | YesSupported shapes: Cone | YesSupported shapes: Cone | YesSupported shapes: Cone, Pyramid, Box |
| Point | Yes | Yes | Yes |
| Area | YesSupported shapes: Rectangle (only with Enlighten Realtime Global Illumination), Disc (baked only) | YesSupported shapes: Rectangle (baked only), Disc (baked only) | YesSupported shapes: Rectangle (real-time and baked), Tube (real-time only), Disc (baked only) |
| Inner Spot angle | No | Yes | Yes |
| Shading technique | YesMultiple passes | YesSingle pass only | YesHybrid tile and cluster |
| Culling Per Object | Yes | Yes | No |
| Culling Per Tile | No | No | Yes |
| Culling Per Layer | YesBased on GameObject layers | YesBased on dedicated Rendering layers (32 layers available) | YesBased on dedicated Rendering layers (only the first 16 are used) |
| Multiple directional lights | Yes | YesSupports shadowing for one directional light at a time. | YesSupports shadowing for one directional light at a time. To simulate more, use Spot light with a Box shape. |
| Number of real-time lights per object | Unlimited | Forward: 1 Directional light + up to 8 lights per-object depending on the settings in the Render Pipeline asset.Deferred and Deferred+: Unlimited lights for opaque objects. For transparents or objects that shade in forward mode the same limit as above applies.Forward+: Not Applicable. Forward+ shade lights per-tile, see “Number of real-time lights per Camera” below.For more information check: Render Path Comparison | Unlimited (HDRP doesn’t classify lights per object, see bellow the “Number of real-time lights per Camera” section). |
| Number of real-time lights per Camera | Unlimited | On mobile platforms: 32.On other platforms: 256 (configurable to improve build time and performance adding the package Packages/com.unity.render-pipelines.universal-config, and changing the value of MAX_VISIBLE_LIGHT_COUNT_DESKTOP in Runtime/ShaderConfig.cs.hlsl and k_MaxVisibleLightCountDesktop in Runtime/ShaderConfig.cs). | In Deferred: 63 per 16x16 pixel tile.In Forward: 63 per 32x32 pixel cluster.You can disable the cap for the deferred rendering path in Frame Settings > Light Loop Debug > Deferred Tile. This will affect performance. |
| Light attenuation type | YesLegacy | YesInverseSquared | YesInverseSquared |
| Vertex Lights | Yes | Yes | No |
| SH Lights | Yes | No | No |
| Light Cookies | YesOnly shape, no color (Alpha channel). | YesColored cookie (RGB) | YesColored cookie (RGB) |
| IES Lights | No | No | Yes |
| Light Distance Fade | No | No | Yes |
| Physical light units | No | No | Yes |
| Light anchor tool | Yes | Yes | Yes |

### Shadows

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Directional Light Shadows | Yes | Yes | Yes |
| Multiple Directional Light Shadows | Yes | No | No |
| Directional Light Cascade Shadows | Yes1, 2, or 4 cascades, control by percentage only. | Yes1 to 4 cascades. Control by percentage, or switch to meters.Settings are in URP asset. | Yes1 to 4 cascades. Control by percentage or distance. Settings are in Volumes. |
| Shadow Cascade Blending | No | No | Yes |
| Spot Light Shadows | Yes | Yes | Yes |
| Point Light Shadows | Yes | Yes | Yes |
| Area Light Shadows | No | No | YesOnly for rectangle shape |
| Stable Fit Shadow Projection | Yes | Yes | Yes |
| Close Fit Shadow Projection | Yes | No | NoNo support for orthographic projection. Use wide field of view to emulate. |
| Shadow Screen Space Pass | Yes | Yes | YesMostly used for Raytracing. |
| Shadow bias | YesSupported types: Constant clip space offset. Normal bias | YesSupported types: Offsets shadowmap texels in the light direction, Normal bias | YesSupported types: Slope bias, Normal bias |
| PCF filtering (Percentage Closer Filtering) | No | YesPCF Tent 5x5 | YesFor Point and Spot lights in “Low” (PCF 3x3 4 taps) and “Medium” (PCF 5x5 9 taps) quality settings, and for Directional lights in “Low” (PCF 5x5 9 taps) and “Medium” (PCF Tent 5x5 9 taps) quality settings. |
| PCSS filtering (Percentage Closer Soft Shadows) | No | No | YesFor Point and Spot lights, Directional lights and Area lights when in “High” quality in the HDRP settings for each kind of light. |
| EVSM filtering (Exponential Variance Shadow Mapping) | No | No | YesFor area lights only in all quality settings except “High”. |
| Shadow update modes | No | No | YesEvery frame, On Enable, On Demand. Each cascade can be updated independently using the API (RequestSubShadowMapRendering) |
| Resolution settings | YesConfigured in Quality Settings. | YesConfigured in URP Lighting Settings. | YesConfigure shadowmap resolution or budget per Light, and configure shadow atlas size in HDRP Asset. |
| Dynamic rescale | No | No | Yes |
| Directional light shadow caching | No | No | Yes |
| Punctual and Area lights shadow caching | No | No | Yes |
| Dynamic Shadow Casters | No | No | Yes |
| Static Shadow Casters | No | No | Yes |
| Contact Shadows | No | No | Yes |
| Micro Shadows | No | No | Yes |
| Shadow Cascade Volume Controller | No | No | Yes |
| Shadow Distance Fade | Yes | Yes | YesConfigure in Shadows Volume. |
| Shadow Mask | YesConfigure per scene. | YesConfigure per scene. | YesConfigure per Light. |
| Distance Shadow Mask | YesConfigure per scene. | YesForward Rendering Path only. | YesConfigure per Light. |
| Transparent objects casting shadows | YesUse the Transparent Cutout shaders for objects with “gaps” such as fences, vegetation, etc. or custom pixel-lit shaders using the Geometry render queue. Opacity can affect shadow intensity using dithering. | NoAlpha clipping only. | YesRaytracing only (incl support of colored shadows). For raster, alpha clipping only (use Alpha clipping > Shadow threshold option). |
| Transparent objects receiving shadows | No | Yes | Yes |
| Shadow tint | No | No | YesShadow tint or penumbra tint options |
| Shadow matte | No | No | YesUse Unlit master node and “Enable Shadow Matte” |
| Shadow Layers | No | No | Yes |

### Global Illumination

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Baked Global IlluminationA group of techniques that model both direct and indirect lighting to provide realistic lighting results.See in Glossary: Progressive CPU LightmapperA tool in Unity that bakes lightmaps according to the arrangement of lights and geometry in your scene. More infoSee in Glossary | Yes | Yes | Yes |
| Baked Global Illumination: Progressive GPU Lightmapper | Yes | Yes | Yes |
| Baked Global Illumination: Enlighten Lightmapper | NoDeprecated | NoDeprecated | NoDeprecated |
| Baked Global Illumination: Mixed Lighting modes | YesSubtractive, Baked indirect, Shadow Mask, Distance Shadow mask | YesSubtractive, Baked indirect, Shadow Mask, Distance Shadow mask | YesBaked indirect, Shadow Mask (per light setting), Distance Shadow mask (per light setting) |
| Baked Global Illumination: Double Sided GI | Yes | Yes | Yes |
| Realtime Global Illumination: Pre-computed (Enlighten) | YesSupport ends after Unity 6 | YesSupport ends after Unity 6 | YesSupport ends after Unity 6 |
| Realtime Global Illumination: Screen space GI | No | No | Yes |
| Screen Space Reflections | Yes | No | Yes |
| Planar Reflections | No | No | Yes |
| Raytraced Reflections | No | No | Yes |
| Screen Space Refractions | No | No | Yes |
| Non directional lightmapA pre-rendered texture that contains the effects of light sources on static objects in the scene. Lightmaps are overlaid on top of scene geometry to create the effect of lighting. More infoSee in Glossary | Yes | Yes | Yes |
| Directional lightmap | Yes | Yes | Yes |

### Light Probes

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Light ProbesLight probes store information about how light passes through space in your scene. A collection of light probes arranged within a given space can improve lighting on moving objects and static LOD scenery within that space. More infoSee in Glossary: Blending | Yes | Yes | Yes |
| Light Probes: Custom provided | Yes | Yes | Yes |
| Light Probes: Occlusion Probes | Yes | Yes | Yes |
| Light Probes: Proxy volumes (LPPV) | Yes | NoDeprecated | Yes |

### Adaptive Probe Volumes

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Probe Volumes: Per pixelThe smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. More infoSee in Glossary lighting | No | Yes | Yes |
| Probe Volumes: Per vertex lighting | No | Yes | No |
| Probe Volumes: Blending | No | Yes | Yes |
| Probe Volumes: Touchup volumes | No | Yes | Yes |
| Probe Volumes: Stream from disk | No | YesIncl. non compute pass for lower end devices. | Yes |
| Probe Volumes: Sky occlusion | No | Yes | Yes |
| Probe Volumes: Reflection ProbesA rendering component that captures a spherical view of its surroundings in all directions, rather like a camera. The captured image is then stored as a Cubemap that can be used by objects with reflective materials. More infoSee in Glossary Normalization | No | No | Yes |

### Reflection Probes

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Reflection Probes: Baked | Yes | Yes | Yes |
| Reflection Probes: Real-time | Yes | Yes | Yes |
| Reflection Probes: Real-time time sliced all faces at once | Yes | Yes | No |
| Reflection Probes: Real-time time sliced individual faces | Yes | Yes | Yes |
| Reflection Probes: On-demand API | Yes | Yes | Yes |
| Reflection Probes: Proxy volumes | No | No | Yes |
| Reflection Probes: Simple sampling | YesChoose per-object how to sample reflection probes. | YesChoose in the URP asset whether URP always performs simple sampling from reflection probes, or if it blends. | NoSee Reflection Hierarchy. |
| Reflection Probes: Blend probes sampling | YesChoose per-object how to sample reflection probes.Blend up to 2 reflection probes. | YesChoose in the URP asset whether URP always performs simple sampling from reflection probes, or if it blends.If blending is enabled, URP always blends sky + 1 local probe, or 2 probes if there is no sky. | YesNo blending limit. All reflections including planar blend between each other. |
| Reflection Probes: Blend probes and skybox sampling | Yes | Yes | YesSee Reflection Hierarchy. |
| Reflection Probes: Distanced based roughness | No | No | Yes |
| Reflection Probes: Box Projection | Yes | Yes | Yes |
| Reflection Probes: Oriented Box Projection | No | No | Yes |
| Reflection Probes: Sphere Projection | Yes | No | Yes |
| Reflection Probes: Per probe resolution | Yes | No | Yes |

### Raytracing

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Ray-traced Ambient OcclusionA method to approximate how much ambient light (light not coming from a specific direction) can hit a point on a surface.See in Glossary | No | No | Yes |
| Ray-traced Contact Shadows | No | No | Yes |
| Ray-traced Global Illumination | No | No | Yes |
| Ray-traced Reflections | No | No | YesIncl. decals |
| Ray-traced Shadows | No | No | Yes |
| Ray-traced Recursive Rendering | No | No | Yes |
| AxF (automotive material) | No | No | Yes |
| Terrain | No | No | YesHeightmap only. No support for terrain details and terrain trees. For vegetation on terrain, we recommend using mixed rendering modes for ray traced GI and reflections which allow to support foliage/vegetation & deformation, and for shadows using raster shadows. |
| VFX Graph particles | No | No | Yes |
| Windows | No | No | YesRequires DX12, and platforms with hardware supporting RTX. |
| Linux | No | No | No |
| PS5 | No | No | Yes |
| XBox Series | No | No | Yes |

### Pathtracing

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Lit (Pathtracing support) | No | No | Yes |
| Hair (Pathtracing support) | No | No | Yes |
| Eye (Pathtracing support) | No | No | No |
| Fabric (Pathtracing support) | No | No | Yes |
| AxF (Pathtracing support) | No | No | Yes |
| Decals (Pathtracing support) | No | No | YesExcept emissive decals. |
| Punctual lights (point, spot, directional) | No | No | YesIncl. box spot light |
| Area Lights | No | No | YesIncl. volumetric fog control |
| Tube and Disc Lights | No | No | Yes |
| Depth of fieldA post-processing effect that simulates the focus properties of a camera lens. More infoSee in Glossary (Pathtracing support) | No | No | Yes |
| Exponential FogA fog model that emulates realistic fog behavior by simulating light absorption over distance by a certain attenuation factor.See in Glossary (Pathtracing support) | No | No | Yes |
| Anisotropic fog (Pathtracing support) | No | No | Yes |
| Local Volumetric fog (Pathtracing support) | No | No | No |
| HDRIhigh dynamic range imageSee in Glossary sampling | No | No | Yes |
| Denoiser | No | No | YesNVidia Optix™ AI accelerated denoiser orIntel® Open Image Denoise. |
| Recorder integration | No | No | Yes |
| VFX Graph particles | No | No | No |

### Environment lighting

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Skybox | YesPer project. Set in the Lighting window. | YesPer project. Set in the Lighting window. | YesConfigure in Visual Environment Volume. Choose from HDRI sky, physical sky or custom sky. |
| Gradient | YesPer project. Set in the Lighting window. | YesPer project. Set in the Lighting window. | YesConfigure in Visual Environment Volume. |
| Color | YesPer project. Set in the Lighting window. | YesPer project. Set in the Lighting window. | NoAlternative: use Gradient sky. |
| Real-time Ambient Mode | YesBy script. | YesBy script. | YesConfigure in Visual Environment Volume. |
| Baked Ambient Mode | YesBy default | YesBy default | YesConfigure in Visual Environment Volume.Uses the environment stored in Lighting > Environment settings. |
| Indirect Lighting Controller | No | No | Yes |

## Color

### HDR

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| HDRhigh dynamic rangeSee in Glossary rendering | Yes | Yes | Yes |
| HDR output | No | YesOnly certain devices are supported, see URP Documentation for more information. | YesUse the HDROutputSettings API to configure HDR output options and HDRP’s tonemapping HDR options.See HDRP HDR documentation for more information. |

### Color space

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Linear | YesRequires OpenGLES3.0 | Yes | Yes |
| Gamma | Yes | Yes | No |

## Camera

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Multi display | Yes | Yes | Yes |
| Hardware Dynamic resolution | Yes | YesSupported on Vulkan, DirectX 12, Metal, and compatible consoles. | YesSupported on Vulkan, DirectX 12, Metal, and compatible consoles. |
| Software Dynamic resolution | No | NoExcept for XR direct-to-eye rendering. | Yes |
| Nvidia Deep learning super sampling (DLSS) | No | No | Yes |
| AMD FidelityFX™ Super Resolution 1.0 | No | Yes | Yes |
| AMD FidelityFX™ Super Resolution 2.0 | No | No | Windows platforms only. |
| TAA upsampler | No | No | Yes |
| Unity Spatial Temporal Post Process (STP) | No | Yes | Yes |
| Mip bias | No | Yes | Yes |
| Compositing multiple cameras | YesUse multiple cameras | YesUse Camera stacking | YesUse HDRP Compositor |
| Physical camera | YesAffects field of view only | YesAffects field of view only | YesAffects field of view, exposure, bloom, and depth of field |
| Multi-sample anti-aliasing (MSAA) | YesForward rendering path only | YesForward rendering path only | YesForward rendering path only |
| Fast approximate anti-aliasing (FXAA) | Yes | Yes | Yes |
| Subpixel morphological anti-aliasing (SMAA) | Yes | Yes | Yes |
| Temporal anti-aliasing (TAA) | YesAdditional pass to render all object’s motion vectors. No override support for transparents. | YesAdditional pass to render all object’s motion vectors. No override support for transparents. No custom motion vectors in ShaderGraph. Not compatible with Dynamic Resolution, MSAA nor Camera Stacking. 16-bits. | YesUses per-shader motion vectors and the stencil buffer to only render motion vectors where needed. Allows custom motion vectors in shaders, for example using the ShaderGraph or Alembic packages. 32-bits (float). |
| Depth Texture | Yes | Yes | Yes |
| Depth + Normal Texture | Yes | Yes | Yes |
| Depth + Normal Texture (affected by decals) | No | No | YesExcept if MSAA is enabled. |
| Color Texture | No | Yes | Yes |
| Motion Vectors | Yes | Yes | Yes |
| Thickness Pass | No | No | YesOptional |

## Shaders

### Authoring workflows

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Material Variants | Yes | Yes | Yes |
| ShaderA program that runs on the GPU. More infoSee in Glossary Graph | Yes | Yes | Yes |
| ShaderLab | Yes | YesHand-coded shaders are supported, but not recommended. Shader Graph is recommended (more easily upgradable). | YesHand-coded shaders are supported, but not recommended. Shader Graph is recommended (more easily upgradable). |
| ShaderLabUnity’s language for defining the structure of Shader objects. More infoSee in Glossary Command: UsePass | Yes | Yes | Yes |
| ShaderLab Command: GrabPass | Yes | NoAlternative: Scene color node in ShaderGraph / create a Renderer Feature | NoAlternative: Scene color node in ShaderGraph / create a Custom Pass |
| Surface Shaders | Yes | No. For more information about alternatives, refer to Surface shadersA streamlined way of writing shaders for the Built-in Render Pipeline. More infoSee in Glossary | No. For more information about alternatives, refer to Surface shaders. |
| Diffusion Profiles | No | No | Yes |

### Prebuilt shaders

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Camera-relative rendering | No | No | Yes |
| Material type: Metallic / Standard | Yes | Yes | Yes |
| Material type: Specular | Yes | Yes | Yes |
| Surface Type and Blend Mode: Opaque | Yes | Yes | Yes |
| Surface Type and Blend Mode: Faded (Alpha Blend) | Yes | Yes | YesAlso supports premultiplied alpha. |
| Surface Type and Blend Mode: Transparent | Yes | Yes | Yes |
| Surface Type and Blend Mode: Cutout | Yes | Yes | Yes |
| Surface Type and Blend Mode: Additive | No | Yes | Yes |
| Surface Type and Blend Mode: Multiply | No | Yes | NoNot compatible with half res transparent optimization and offscreen UI blending. |
| Surface Type and Blend Mode: Translucence | No | No | YesTranslucent Material Type in the Lit shaders |
| Surface Inputs: Albedo (Base Map) | Yes | Yes | Yes |
| Surface Inputs: Specular | Yes | Yes | YesBase map when using Material Type Specular |
| Surface Inputs: Metallic | Yes | Yes | YesStored in the R channel of the Mask Map. |
| Surface Inputs: Ambient Occlusion | Yes | Yes | YesStored in the G channel of the Mask Map. |
| Surface Inputs: Smoothness | Yes | Yes | YesStored in the A channel of the Mask Map. |
| Surface Inputs: Normal MapA type of Bump Map texture that allows you to add surface detail such as bumps, grooves, and scratches to a model which catch the light as if they are represented by real geometry.See in Glossary | Yes | Yes | Yes |
| Surface Inputs: Bent Normal Map | No | No | Yes |
| Surface Inputs: Detail Map | Yes | Yes | YesAlbedo stored in the R channel of the Detail Map. Smoothness stored in the B channel. |
| Surface Inputs: Detail Normal Map | Yes | Yes | YesY axis stored in the G channel of the Detail Map. X axis stored in the A channel. |
| Surface Inputs: Heightmap | YesPixel displacement only. | YesPixel displacement only. | YesPixel or vertex displacement. |
| Surface Inputs: Detail Mask | Yes | Yes | YesStored in the B channel of the Mask Map. |
| Surface Inputs: Emissive Map | Yes | Yes | Yes |
| Surface Inputs: Transmission Mask | No | No | YesAlso available in Shader Graph. |
| Surface Inputs: Specular Occlusion | No | No | Yes |
| Surface Inputs: Planar & Triplanar mapping | NoAlternative: Use ShaderGraph Triplanar node | NoAlternative: Use ShaderGraph Triplanar node | Yes |
| Included Lighting models: ClearCoat | No | Yes | Yes |
| Included Lighting models: SubSurface Scattering | No | No | YesIncludes Dual Lobe multipliers and diffuse shading power for skin. |
| Included Lighting models: Colored Translucent | No | No | Yes |
| Included Lighting models: Anisotropy | No | No | Yes |
| Included Lighting models: Irridescence | No | No | Yes |
| Included Lighting models: Fabric | No | No | Yes |
| Included Lighting models: Eye | No | No | YesEye caustics available in High quality mode. |
| Included Lighting models: Hair (Approximate) | No | No | YesBased on Kajiya Kay parametrization |
| Included Lighting models: Hair (Physical) | No | No | YesBased on Marshner-Disney parametrization. Cinematic option available to trade performance vs quality. |
| Add custom Lighting model as a plugin | Yes | No | YesPluggable Master Node (undocumented) |
| Features: Light Cookies | YesSupports grayscale textures | YesSupports RGB textures | YesSupports RGB textures |
| Features: Parallax Mapping | Yes | Yes | Yes |
| Features: Light Distance Fade | No | No | Yes |
| Features: Shadow Distance Fade | Yes | Yes | YesConfigure in Shadows Volume. |
| Features: Shadow Cascade Blending | No | No | Yes |
| Features: GPU Instancing | Yes | Yes | Yes |
| Features: Double Sided GI | Yes | No | Yes |
| Features: Two Sided | No | YesConfigure with the RenderFace property. | YesConfigure with the Double Side toggle. |
| Features: Material sorting priority | No | Yes | Yes |
| Features: Renderer sorting priority | No | NoNot exposed (use debug mode of the inspector). | Yes |
| Features: GPU Tesselation | No | No | YesUse the LitTesselation Shader. |
| Features: Specular Occlusion | No | No | YesUse only the ambient occlusion map, or both bent and ambient occlusion maps. |
| Features: Geometric Specular Anti-Aliasing | No | No | Yes |
| Features: Add precomputed velocity | No | YesRequires per vertex velocity information (for example, Alembic, or using ShaderGraph custom velocity option) | YesRequires per vertex velocity information (for example, Alembic, or using ShaderGraph custom velocity option) |

### Shader Graph

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| UI | Yes | Yes | Yes |
| Full screen master node | No | Yes | Yes |
| Custom post-processingA process that improves product visuals by applying filters and effects before the image appears on screen. You can use post-processing effects to simulate physical camera and film properties, for example Bloom and Depth of Field. More info post processing, postprocessing, postprocessSee in Glossary | No | Yes | Yes |
| Custom render textureA special type of Texture that is created and updated at runtime. To use them, first create a new Render Texture and designate one of your Cameras to render into it. Then you can use the Render Texture in a Material just like a regular Texture. More infoSee in Glossary | Yes | Yes | Yes |
| Text MeshThe main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. More infoSee in Glossary Pro | No | Yes | No |
| Decals | No | YesAffect opaque objects only. | YesAffect opaque and transparent objects. |
| Fog Volume | No | No | Yes |
| TerrainThe landscape in your scene. A Terrain GameObject adds a large flat plane to your scene and you can use the Terrain’s Inspector window to create a detailed landscape. More infoSee in Glossary | No | No | No |
| Physically Based Sky | No | No | Yes |

## World building

### Environment

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Terrain system: Physically Based Shader | No | Yes | Yes |
| Terrain system: Simple Lit (Blinn-Phong) Shader | Yes | No | No |
| Terrain system: SpeedTree Shader | Yes | Yes | Yes |
| Terrain system: Paint Trees | Yes | Yes | Yes |
| Terrain system: Vegetation | Yes | Yes | Yes |
| Terrain system: Terrain Details | Yes | Yes | Yes |
| Terrain system: number of Terrain Layers | YesUnlimited | YesWith height-based blending: 4With alpha blending: unlimited | Yes8 |
| Terrain system: GPU Instanced Rendering | Yes | Yes | Yes |
| Terrain system: Terrain Holes | Yes | Yes | Yes |
| Water system: Physically Based Shader | No | No | Yes |
| Water system: Compute based wave simulation | No | No | Yes |
| Water system: CPU wave simulation for gameplay integration | No | No | YesSimulation on CPU (no latency) or on GPU with GPU readback (low latency but high performance). |
| Water system: Local currents | No | No | Yes |
| Water system: Local foam | No | No | Yes |
| Water system: Surface deformer | No | No | Yes |
| Water system: Water excluder | No | No | Yes |
| Water system: Support for decals (eg: Foam) | No | No | Yes |
| Water system: Underwater Caustics | No | No | Yes |
| Water system: Under water rendering | No | No | YesIncludes Water line rendering. |
| Water system: Under water volumetrics | No | No | Yes |
| SpeedTree 8 | Yes | YesBoth Shader Graph and ShaderLab shaders available. | YesShader Graph shader only. Support for subsurface map and motion vectors. |
| SpeedTree 9 | Yes | YesShader Graph shaders only. | YesShader Graph shaders only. |
| Wind ZoneA GameObject that adds the effect of wind to your terrain. For instance, Trees within a wind zone will bend in a realistic animated fashion and the wind itself will move in pulses to create natural patterns of movement among the tree. More infoSee in Glossary | Yes | Yes | Yes |

### Sky

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Procedural Skybox | Yes | Yes | NoThis sky type is deprecated, but you can still use if if you install the Procedural Sky Sample. |
| 6 sided Skybox | Yes | Yes | YesHDRI Sky supports cubemaps. Unity can build cubemaps from this type on import. |
| Cubemap | Yes | Yes | YesHDRI Sky supports cubemaps. |
| Panoramic | Yes | Yes | YesHDRI Sky supports cubemaps. Unity can build cubemaps from this type on import. |
| Physical Sky | No | No | Yes |
| Gradient Sky | No | No | Yes |
| Sky distortion | No | No | YesProcedural or Flowmap |
| Cloud layers | No | No | Yes |
| Atmospheric Scattering | No | No | Yes |

### Volumetrics

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Volumetric Clouds | No | No | Yes |
| Linear Fog | YesConfigure in Graphics Settings. | YesConfigure in Graphics Settings. | No |
| Exponential Fog | YesConfigure in Graphics Settings. | YesConfigure in Graphics Settings. | YesConfigure with the Fog Override. |
| Exponential Squared | YesConfigure in Graphics Settings. | YesConfigure in Graphics Settings. | No |
| Local Volumetrics | No | No | Yes |
| 3D Render texture for local volumetric fog | No | No | Yes |
| Volumetric Material (use ShaderGraph for local volumetric fog) | No | No | Yes |
| Fog Scattering & Atmospheric scattering | No | No | Yes |

## Visual effects

### Post-processing

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Feature support | YesUses separate package: Post-Processing V2 | YesUses integrated post-processing solution | YesUses integrated post-processing solution |
| Per-project default effects | No | YesA default volume can be applied to the project using HDRP default settings. | YesA default volume can be applied to the project using HDRP default settings. |
| Ambient Occlusion | YesSupported types: Multi-scale ambient occlusion | YesSupported types: Screen Space Ambient Occlusion (Depth or normal) | YesSupported types: Screen Space Ground Truth Ambient Occlusion (Normal + temporal, tinted multi bounced, specular occlusion), Ray-traced ambient occlusion |
| Exposure | YesSupported types: Fixed, Automatic | YesSupported types: Fixed | YesSupported types: Fixed, Automatic (Eye adaptation), Curve Mapping, Physical Camera settings and Histogram. |
| Bloom | Yes | Yes | Yes |
| Chromatic Aberration | Yes | Yes | Yes |
| TonemappingThe process of remapping HDR values of an image into a range suitable to be displayed on screen. More infoSee in Glossary (Neutral, ACES, Custom) | Yes | Yes | Yes |
| White balance | No | Yes | Yes |
| Color Channel Mixer | No | Yes | Yes |
| Color Adjustments | Yes | Yes | Yes |
| Color Curves | Yes | Yes | Yes |
| Lift, Gamma, Gain | Yes | Yes | Yes |
| Shadows, Midtones, Highlights | Yes | Yes | Yes |
| Split Toning | No | No | Yes |
| Depth of Field | YesSupported types: Bokeh | YesSupported types: Bokeh and Gaussian | YesSupported types: Bokeh |
| Physical Depth of Field | No | No | Yes |
| Film Grain | Yes | Yes | Yes |
| Lens Distortion | Yes | Yes | Yes |
| CameraA component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. More infoSee in Glossary Motion Blur | Yes | Yes | Yes |
| Object Motion Blur | Yes | Yes | Yes |
| Screen Space Reflections | Yes | No | Yes |
| Screen Space Refractions | No | No | Yes |
| Vignette | Yes | Yes | Yes |
| Panini Projection | No | Yes | Yes |
| Screen Space Lens FlaresA component that simulates the effect of lights refracting inside a camera lens. Use a Lens Flare to represent very bright lights or add atmosphere to your scene. More infoSee in Glossary | No | Yes | Yes |
| Custom post-processing | Yes | YesAvailable with Full Screen Pass Renderer Feature. | YesEither with script or ShaderGraph. |

### CPU Particles (Shuriken)

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Feature support | Yes | Yes | YesGPU instancing is not supported. Distortion and flipbook blending can be done with Shader Graph. No standard particle shader available, but example particles ShaderGraph shaders can be found in the HDRP package samples. |
| Lit Particles | Yes | Yes | Yes |
| Simple lit particles | YesUses Blinn Phong. | Yes | Yes |
| Unlit particles | Yes | Yes | Yes |
| Soft Particles | Yes | Yes | YesAvailable via Shader Graph. Examples available in the particles system shader samples in the HDRP package sample. |
| Distortion | Yes | Yes | YesAvailable via Shader Graph. Examples available in the particles system shader samples in the HDRP package sample. |
| Flipbook blending | Yes | Yes | YesAvailable via Shader Graph. Examples available in the particles system shader samples in the HDRP package sample. |
| Trail | Yes | Yes | Yes |
| GPU Instancing | Yes | Yes | No |

### GPU Particles (VFX Graph)

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Feature support | No | YesCompute capable hardware only. OpenGL ES not supported. | YesCompute capable hardware only. |
| Supported Shader graph shaders | No | YesVFX Shader Graph, Lit, Unlit, 2D Sprite Lit, 2D Custom Lit | YesVFX Shader Graph, Lit, Unlit, Hair, Fabric (no support for tessellation, nor decal) |
| Renders with 2D | No | Yes3D particles and support for sorting layers and sprites. No support for 2D Physics, 2D sprites emitters, nor 2D Lights | No |
| Lit Particles | No | Yes | Yes |
| Simple lit particles | No | No | Yes |
| Unlit particles | No | Yes | Yes |
| Soft ParticlesParticles that create semi-transparent effects like smoke, fog or fire. Soft particles fade out as they approach an opaque object, to prevent intersections with the geometry. More infoSee in Glossary | No | Yes | Yes |
| Distortion | No | No | Yes |
| Flipbook blending | No | YesLinear interpolation or flipbook motion vectors | YesLinear interpolation or flipbook motion vectors |
| Trail | No | YesExperimental | YesExperimental |
| Half-resolution | No | No | Yes |
| Decals | No | Yes | Yes |
| Motion Vectors | No | Yes | Yes |
| Camera Buffer | No | YesDepth collision, Color buffer | YesDepth collision, Color buffer |
| Instancing | No | Yes | Yes |
| Skinned Mesh Sampling | No | Yes | Yes |
| 6-way lighting | No | Yes | Yes |
| Volumetric Fog Output | No | No | Yes |
| Custom HLSL Blocks | No | Yes | Yes |

### Decals

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Decals | NoSuggested alternative: Projector component. | YesProjector decals (Forward or Forward+, using a Decal buffer) or Screen Space Decals (Deferred or Deferred+), decal layers, no emissive decals | YesProjector decals (Forward or Deferred, using a Decal Buffer) or Mesh decals, support on transparents (Cluster decals), support decal layers, surface gradients, emissive decals |
| Decal layers | No | No | Yes |

### Other visual effects

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Projector component | Yes | NoUse the Decal Renderer Feature instead. | NoUse the Decal Projector instead. |
| Line RendererA component that takes an array of two or more points in 3D space and draws a straight line between each one. You can use a single Line Renderer component to draw anything from a simple straight line to a complex spiral. More infoSee in Glossary component | Yes | Yes | Yes |
| Trail Renderer component | Yes | YesYou can also use VFX Graph to create a custom trail effect. | YesYou can also use VFX Graph to create a custom trail effect. |
| Billboard Renderer component | Yes | Yes | NoSuggested alternative: Use VFX Graph. |
| Halo component | Yes | NoSuggested alternative: Use a Lens Flare (SRP) Data asset and a Lens Flare (SRP) component. | NoSuggested alternative: Use a Lens Flare (SRP) Data asset and a Lens Flare (SRP) component, or use a celestial body in a directional light. |
| Lens flares | YesUse a Flare asset and either a Light component or a Lens Flare component. | YesUse a Lens Flare (SRP) Data asset and a Lens Flare (SRP) component. Also check Screen Space Lens Flares (Post processing) that offer an alternative or complementary solution for lens flares. | YesUse a Lens Flare (SRP) Data asset and a Lens Flare (SRP) component. Also check Screen Space Lens Flares (Post processing) that offer an alternative or complementary solution for lens flares. |

## 2D and UI

### 2D

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| SpriteA 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. More infoSee in Glossary | Yes | Yes | No |
| TilemapA GameObject that allows you to quickly create 2D levels using tiles and a grid overlay. More infoSee in Glossary | Yes | Yes | No |
| Sprite Shape | Yes | Yes | No |
| Pixel-Perfect | YesUsing the “2D Pixel Perfect” package. | YesUsing the “2D Pixel Perfect” package. | No |
| 2D Lights | No | YesAvailable when Using 2D Renderer | No |
| 2D Shadows | No | YesAvailable when Using 2D Renderer | No |
| VFX Graph | No | YesSupports 3D particles, sorting layers, ShaderGraph Sprite Lit and Custom Lit targets, Alpha Clipping with Shadergraph Sprite Lit, Unlit and Custom Lit targets.Does not support 2D Physics, 2D sprites emitters, or 2D Lights. | No |

### UI

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Screen Space - Overlay | Yes | Yes | Yes |
| Screen Space - Camera | Yes | Yes | Yes |
| World Space | Yes | Yes | Yes |
| Text MeshA Mesh component that displays a Text string More infoSee in Glossary Pro | Yes | Yes | Yes |

## XR

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Multipass | Yes | Yes | Yes |
| Single Pass (double-wide) | Yes | NoDeprecated | NoDeprecated |
| Single Pass Instanced | Yes | Yes | YesWindows and PSVR only |
| Multiview | Yes | Yes | No |
| ARAugmented Reality More infoSee in Glossary Foundation | Yes | Yes | No |
| Foveated Rendering | No | YesCompatible with Forward on Oculus Quest (Fixed foveated rendering), PSVR2 and VisionPro (eye tracking). | No |
| HDR | Yes | Yes | Yes |

## Scripting

### Render Pipeline Hooks

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Camera.RenderWithShader | Yes | NoSuggested alternative: ScriptableRenderPass | NoSuggested alternative: CustomPass with material override |
| Camera.AddCommandBuffer (Camera.Remove[All]CommandBuffer) | Yes | No | NoAlternative: Custom Passes |
| Camera.Render | Yes | Yes | Yes |
| Light.AddCommandBuffer (LightRemove[All]CommandBuffer) | Yes | No | No |
| OnPreCull | Yes | NoSuggested alternative: RenderPipelineManager.beginCameraRendering or ScriptableRenderPass | No |
| OnPreRender | Yes | NoSuggested alternative: RenderPipelineManager.beginCameraRendering or ScriptableRenderPass | No |
| OnPostRender | Yes | No | No |
| OnRenderImage | Yes | NoSuggested alternative: ScriptableRenderPass | NoSuggested alternative: Fullscreen CustomPass |
| OnRenderObject | Yes | YesRenderPipelineManager.endCameraRendering orScriptableRenderPass API | NoRenderPipelineManager.endCameraRendering orCustom Pass |
| OnWillRenderObject | Yes | Yes | Yes |
| OnBecameVisible | Yes | Yes | Yes |
| OnBecameInvisible | Yes | Yes | Yes |
| Camera Replacement Material | No | NoSuggested alternative: use Render Feature to replace materials per-Pass. | NoSuggested alternative: Custom Pass with Shader override |
| RenderPipeline.BeginFrameRendering | No | Yes | Yes |
| RenderPipeline.EndFrameRendering | No | Yes | Yes |
| RenderPipeline.BeginCameraRendering | No | Yes | Yes |
| RenderPIpeline.EndCameraRendering | No | Yes | Yes |
| UniversalRenderPipeline.RenderSingleCamera | No | Yes | No |
| ScriptableRenderPass | No | YesThis is similar to the CustomPass feature in HDRP. | No |
| Custom Renderers | No | Yes | No |
| CustomPass | No | No | YesThis is similar to the ScriptableRenderPass feature in URP. |
| Custom Post Process Pass | No | No | Yes |
| Arbitrary Output Variables (AOV) API | No | No | Yes |
| Recording API | No | No | Yes |

## Optimizations

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| Batching By Shader | No | Yes | Yes |
| Batching By Material | Yes | Yes | Yes |
| Batching by Material Property Blocks | Yes | YesBatched separately from the SRP Batcher | YesBatched separately from the SRP Batcher |
| Dynamic batchingAn automatic Unity process which attempts to render multiple meshes as if they were a single mesh for optimized graphics performance. The technique transforms all of the GameObject vertices on the CPU and groups many similar vertices together. More infoSee in Glossary (without SRP Batcher) | Yes | Yes | Yes |
| Real-time batching with SRP Batcher | No | YesRequires OpenGLES 3.1. | Yes |
| Dynamic Shadows Batching | Yes | NoDeprecated. | Yes |
| GPU Resident Drawer | No | YesDisabled by default. Supported on Forward+ and Deferred+. Supported on Vulkan, DirectX 11, DirectX 12, Metal, and consoles. Disabled on other platforms. | YesEnabled by default. |
| GPU Occlusion Culling | No | YesSupported on Forward+ and Deferred+. Supported on Vulkan, DirectX 11, DirectX 12, Metal, and consoles. Disabled on other platforms. | Yes |
| GPU Instancing | Yes | YesDisabled by default when SRP Batcher is enabled. | YesDisabled by default when SRP Batcher is enabled. |
| Render Graph | No | YesOptimized for tile-based GPUs with raster pass merging. | Yes |
| Dynamic Render Pass Culling | No | Yes | YesDisabled by default. |
| Variable Rate Shading API | YesAPI only. | YesAPI, and integration with custom Scriptable Renderer Features. | YesAPI, and integration with custom passes. |

## Debug

| Feature | Built-in Render Pipeline | URP | HDRP |
| --- | --- | --- | --- |
| SceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary View Modes | Yes | Yes | Yes |
| Volume Explorer | No | Yes | Yes |
| Rendering debugger | No | Yes | Yes |
| Runtime GPU profilerA window that helps you to optimize your game. It shows how much time is spent in the various areas of your game. For example, it can report the percentage of time spent rendering, animating, or in your game logic. More infoSee in Glossary | No | Yes | Yes |
| Render Graph viewer | No | Yes | Yes |
| Probe volume debugger | No | Yes | Yes |
| Color Monitors | NoUse post processing stack v2 | No | YesWaveform, Parade, Vectorscope |
| Shader Graph Heatmap | Yes | Yes | Yes |
| VFX Graph profiler | No | Yes | Yes |

Choose a render pipeline

Set up a render pipeline
