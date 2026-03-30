This version of Unity is unsupported.

Shadows

Real-time shadows

# Enable shadows

Each Light in a **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) can cast the following types of shadows:

- [Real-time shadows](shadow-realtime.html). Unity stores the shadows cast from each Light in [shadow map textures](shadow-mapping.html). The textures update each frame; shadows move when the lights move.

- Baked shadows. The Unity [lightmapper](Lightmappers.html)A tool in Unity that bakes lightmaps according to the arrangement of lights and geometry in your scene. [More info](Lightmapping.html)
See in [Glossary](Glossary.html#Lightmapper) stores the shadows received by each **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) in static **lightmap**A pre-rendered texture that contains the effects of light sources on static objects in the scene. Lightmaps are overlaid on top of scene geometry to create the effect of lighting. [More info](Lightmapping.html)
See in [Glossary](Glossary.html#Lightmap) textures, shadow mask textures, or **Light Probes**Light probes store information about how light passes through space in your scene. A collection of light probes arranged within a given space can improve lighting on moving objects and static LOD scenery within that space. [More info](LightProbes.html)
See in [Glossary](Glossary.html#LightProbe). Shadows don’t move when the lights move.

To configure which type of shadows a Light casts, use the **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector) window of the [Light component](class-Light.html). For more information, refer to the following:

- [Setting a light as real-time or baked](LightModes-landing.html).

- [Lighting Mode](lighting-mode.html), if you set the ****Light Mode**A Light property that defines the use of the Light. Can be set to Realtime, Baked and Mixed. [More info](LightModes.html)
See in [Glossary](Glossary.html#LightMode)** of a Light to Mixed.

## Set a GameObject to receive shadows

GameObjects receive real-time shadows by default.

To set a static GameObject so it receives shadows from baked shadows, follow these steps:

1. Select the GameObject.

2. In the Inspector window, in the [Mesh Renderer](class-MeshRenderer.html)A mesh component that takes the geometry from the Mesh Filter and renders it at the position defined by the object’s Transform component. [More info](class-MeshRenderer.html)
See in [Glossary](Glossary.html#MeshRenderer) component, enable **Contribute **Global Illumination**A group of techniques that model both direct and indirect lighting to provide realistic lighting results.
See in [Glossary](Glossary.html#globalillumination)**.

3. Set **Receive Global Illumination** to **Lightmaps**.

## Set a GameObject to shadow other GameObjects

Follow these steps:

1. Select the GameObject.

2. In the [Mesh Renderer](class-MeshRenderer.html) component of the Inspector window, set **Cast shadows** to **On**.

## Configure shadows

To configure shadows for your whole project or a specific scene, refer to the following:

- [Lighting window reference](lighting-window.html)

- [Graphics settings](class-GraphicsSettings.md)

- [Universal Render Pipeline (URP) asset reference](urp/universalrp-asset.html)

- [Universal Renderer asset](urp/urp-universal-renderer.html)

## Additional resources

- [Shadows in URP](urp/Shadows-in-URP.html)

- [Shadows in the High Definition Render Pipeline (HDRP)](https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@17.3/manual/shadows.html)

- [Use shadows in a custom URP shader](urp/use-built-in-shader-methods-shadows.html)

Shadows

Real-time shadows
