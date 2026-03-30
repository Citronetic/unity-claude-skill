This version of Unity is unsupported.

Troubleshooting reflections

Lighting in URP

# Reflection Probe Inspector window reference

[Switch to Scripting](../ScriptReference/ReflectionProbe.html)

| Property | Description |
| --- | --- |
| Type | Choose whether the probe is for a Baked, Custom, or Realtime setup. If you select Baked, the Reflection Probe does not capture GameObjectsThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary at runtime that have their Reflection Probe Static flag disabled. If you want to capture dynamic GameObjects in a baked Reflection Probe, select Custom and enable Dynamic Objects. |
| Dynamic Objects | (Custom type only) Forces objects not marked as Static to be baked in to the reflection. |
| CubemapA collection of six square textures that can represent the reflections in an environment or the skybox drawn behind your geometry. The six squares form the faces of an imaginary cube that surrounds an object; each face represents the view along the directions of the world axes (up, down, left, right, forward and back). More infoSee in Glossary | (Custom type only) Sets a custom cubemap for the probe. |
| Refresh Mode | (Realtime type only) Selects if and how the probe will refresh at runtime. The On Awake option renders the probe only once when it first becomes active. Every Frame renders the probe every frame update, optionally using Time Slicing (see below). The Via Scripting option refreshes the probe from a user script command rather than an automatic update. |
| Time Slicing | (Realtime type only) How should the probe distribute its updates over time? The options are All Faces At Once (spreads update over nine frames), Individual Faces (updates over fourteen frames) and No Time Slicing (the update happens entirely within one frame). See below for further details. |

## Runtime Settings

| Property | Description |
| --- | --- |
| Importance | A value that indicates the relative priority of this Reflection Probe for sorting. Unity renders probes with a higher value on top of those with a lower value where an object is in range of more than one probe. This setting also affects Blending. Refer to Using Reflection Probes for more information about reflection probe blending. |
| Intensity | The intensity modifier that is applied to the texture of this probe in its shaderA program that runs on the GPU. More infoSee in Glossary. |
| Box Projection | Check this box to enable projection for reflection UV mappings. If you use the Universal Render PipelineA series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. More infoSee in Glossary (URP), you must also enable Box Projection in the URP asset. |
| Box Size | The size of the probe’s bounding box in which the probe can contribute to reflections. The size is in world space. Also used by Box Projection. |
| Box Offset | The center of the probe’s bounding box in which the probe can contribute to reflections. The offset is relative to the position of the probe. Also used by Box Projection. |

## Cubemap Capture Settings

| Property | Description |
| --- | --- |
| Resolution | The resolution of the captured reflection image. |
| HDRhigh dynamic rangeSee in Glossary | Should High Dynamic Range rendering be enabled for the cubemap? This also determines whether probe data is saved in OpenEXR or PNG format. |
| Shadow Distance | Distance at which shadows are drawn when rendering the probe. |
| Clear Flags | Option to specify how empty background areas of the cubemap will be filled. The options are SkyboxA special type of Material used to represent skies. Usually six-sided. More infoSee in Glossary and Solid Color. |
| Background | Background colour to which the reflection cubemap is cleared before rendering. |
| Culling MaskAllows you to include or omit objects to be rendered by a Camera, by Layer.See in Glossary | Allows objects on specified layers to be included or excluded in the reflection. See the section about the CameraA component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. More infoSee in Glossary’s culling mask on the LayersLayers in Unity can be used to selectively opt groups of GameObjects in or out of certain processes or calculations. This includes camera rendering, lighting, physics collisions, or custom calculations in your own code. More infoSee in Glossary page. |
| Use Occlusion Culling | Should occlusion cullingA process that disables rendering GameObjects that are hidden (occluded) from the view of the camera. More infoSee in Glossary be used when baking the probe? |
| Clipping PlanesA plane that limits how far or close a camera can see from its current position. A camera’s viewable range is between the far and near clipping planes. See far clipping plane and near clipping plane. More infoSee in Glossary | Near and far clipping planesThe maximum draw distance for a camera. Geometry beyond the plane defined by this value is not rendered. The plane is perpendicular to the camera’s forward (Z) direction.See in Glossary of the probe’s “camera”. |

## Additional resources

- [Reflections in URP](urp/lighting/reflection-probes.html)

- [Reflection and refraction in the High-Definition Render Pipeline (HDRP)](https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@17.0/manual/Reflection-in-HDRP.html)

ReflectionProbe

Troubleshooting reflections

Lighting in URP
