This version of Unity is unsupported.

XR graphics

Stereo rendering

# Universal Render Pipeline compatibility in XR

Support for **XR**An umbrella term encompassing Virtual Reality (VR), Augmented Reality (AR) and Mixed Reality (MR) applications. Devices supporting these forms of interactive applications can be referred to as XR devices. [More info](XR.html)
See in [Glossary](Glossary.html#XR) features in the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline) (URP) varies by URP package version. This page details compatibility between XR features in Unity 6 and the latest compatible URP version.

To determine which version of URP is compatible with your current Unity version, refer to the [Requirements and compatibility](urp/requirements.html) page in the Universal Render Pipeline documentation.

Unity 6 supports the following **AR**Augmented Reality [More info](AROverview.html)
See in [Glossary](Glossary.html#AR) and **VR**Virtual Reality [More info](VROverview.html)
See in [Glossary](Glossary.html#VR) features in the Universal Render Pipeline:

| Feature | Supported in XR |
| --- | --- |
| Post-processingA process that improves product visuals by applying filters and effects before the image appears on screen. You can use post-processing effects to simulate physical camera and film properties, for example Bloom and Depth of Field. More info post processing, postprocessing, postprocessSee in Glossary effects: Bloom | Yes |
| Post-processing effects: MotionBlur | Yes |
| Post-processing effects: Lens Distortion | No |
| Post-processing effects: Depth of FieldA post-processing effect that simulates the focus properties of a camera lens. More infoSee in Glossary | Yes |
| Post-processing effects: ToneMappingThe process of remapping HDR values of an image into a range suitable to be displayed on screen. More infoSee in Glossary | Yes |
| Spatial Temporal Post-Processing | No |
| Other post-processing effects (color adjustment, etc.) | Yes |
| GI (Global Illumination) | Yes |
| HDRhigh dynamic rangeSee in Glossary | Yes |
| MSAA | Yes |
| Physical CameraA component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. More infoSee in Glossary | No |
| CopyColor / ColorDepth | Yes |
| Multi Display | No |
| Camera Stacking | Yes |
| Cascaded Shadow | Yes |
| sRGB | Yes |
| SkyboxA special type of Material used to represent skies. Usually six-sided. More infoSee in Glossary | Yes |
| Fog | Yes |
| BillboardA textured 2D object that rotates so that it always faces the Camera. More infoSee in Glossary | Yes |
| ShaderA program that runs on the GPU. More infoSee in Glossary Graph | Yes (1) |
| Particles | Yes |
| TerrainThe landscape in your scene. A Terrain GameObject adds a large flat plane to your scene and you can use the Terrain’s Inspector window to create a detailed landscape. More infoSee in Glossary | Yes |
| 2D UI (Canvas Renderer, Text Mesh Pro) | Yes |
| URP Debug (Scene View Mode, Frame Debug) | Yes (2) |

- (1) Although Shader Graph shaders can run in XR, Shader Graph doesn’t currently support the XR utility feature to create SPI-compatible shader input textures. Unity will expand support for Shader Graph functionality in future releases.

- (2) Unity supports frame debugging for mock HMDs. Currently, there is no support for Meta/Oculus.

To learn more about post-processing effects, refer to the [Effect list](post-processing-effect-availability-reference.html) page in the Universal Render Pipeline documentation.

XR graphics

Stereo rendering
