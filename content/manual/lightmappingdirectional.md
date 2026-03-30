This version of Unity is unsupported.

Change the fade distance of lights with fall-off

Lightmap UVs

# Store light direction with Directional Mode

There are two **Directional Modes** for **lightmaps**A pre-rendered texture that contains the effects of light sources on static objects in the scene. Lightmaps are overlaid on top of scene geometry to create the effect of lighting. [More info](Lightmapping.html)
See in [Glossary](Glossary.html#Lightmap): **Directional** and **Non-Directional**. Both modes are compatible with real-time lightmaps from Unity’s **Enlighten**A lighting system by Geomerics used in Unity for Enlighten Realtime Global Illumination. [More info](https://www.siliconstudio.co.jp/en/products-service/enlighten/)
See in [Glossary](Glossary.html#Enlighten) Realtime **Global Illumination**A group of techniques that model both direct and indirect lighting to provide realistic lighting results.
See in [Glossary](Glossary.html#globalillumination) system, and baked lightmaps from Unity’s Progressive **Lightmapper**A tool in Unity that bakes lightmaps according to the arrangement of lights and geometry in your scene. [More info](Lightmapping.html)
See in [Glossary](Glossary.html#Lightmapper). The default mode is Directional.

When you bake a Directional lightmap, Unity generates two lightmap textures. One texture stores information about the intensity and color of the lighting received across the target surface. This is identical to the Non-Directional lightmap. The other texture stores the dominant light direction, along with a factor describing how much of the total light received comes from that dominant direction.

[Image: The barrels in this image have baked Non-directional lightmaps.]
The barrels in this image have baked Non-directional lightmaps.

[Image: The barrels in this image have baked Directional lightmaps. ]
The barrels in this image have baked Directional lightmaps.

**Note:** Since lightmaps are used exclusively for diffuse lighting, this mode doesn’t preserve specular response. For more information about including baked specular effects, refer to [Reflection Probes](ReflectionProbes.html)A rendering component that captures a spherical view of its surroundings in all directions, rather like a camera. The captured image is then stored as a Cubemap that can be used by objects with reflective materials. [More info](class-ReflectionProbe.html)
See in [Glossary](Glossary.html#ReflectionProbe).

## Performance

Directional mode lightmaps consist of two textures, and **shaders**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) sample both textures during rendering. The additional texture increases video memory requirements. Generating the additional directionality texture also has an impact on baking performance.

Non-Directional mode lightmaps only include a single texture. As a result, they require less video memory and less storage than Directional maps, and are faster to decode in shaders. These optimizations reduce visual quality.

## Setting your lightmap mode

To set the mode in your [**Lighting Settings Asset**](https://docs.unity3d.com/2020.1/Documentation/Manual/class-LightingSettings.html), open the Lighting window (**Window** > **Rendering** > **Lighting**), click **Scene**, navigate to the [Lightmapping Settings](https://docs.unity3d.com/Manual/lighting-window.html#LightmappingSettings), and select **Directional Mode**.

You can set the lightmap mode for an instance of the Lighting Settings asset which can apply to one or more **Scenes**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene). You cannot set the lightmap mode for individual lightmaps.

## Using Directional Mode with additive loading

Unity can load Scenes additively. This means you can use [Multi-Scene editing](https://docs.unity3d.com/Manual/MultiSceneEditing.html), for example.
When you load Scenes additively, all of them must use the same Directional Mode. This includes Scenes that are not baked, such as UI elements or loading screens. Using the same [Lightmap Parameters asset](https://docs.unity3d.com/Manual/class-LightmapParameters.html) for all of the Scenes in your project can help you avoid settings conflicts.

Change the fade distance of lights with fall-off

Lightmap UVs
