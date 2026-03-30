This version of Unity is unsupported.

Configuring lightmaps and baking

Group GameObjects together in a lightmap with Baked Tags

# Select the CPU or GPU for baking

To generate baked ****lightmaps**A pre-rendered texture that contains the effects of light sources on static objects in the scene. Lightmaps are overlaid on top of scene geometry to create the effect of lighting. [More info](Lightmapping.html)
See in [Glossary](Glossary.html#Lightmap)** and ****Light Probes**Light probes store information about how light passes through space in your scene. A collection of light probes arranged within a given space can improve lighting on moving objects and static LOD scenery within that space. [More info](LightProbes.html)
See in [Glossary](Glossary.html#LightProbe)**, you can choose between two backends for the [Progressive Lightmapper](progressive-lightmapper.html):

- The [Progressive GPU Lightmapper](GPUProgressiveLightmapper.html) default backend uses your computer’s GPU and Video Ram (VRAM).

- The Progressive CPU **Lightmapper**A tool in Unity that bakes lightmaps according to the arrangement of lights and geometry in your scene. [More info](Lightmapping.html)
See in [Glossary](Glossary.html#Lightmapper) backend uses your computer’s CPU and system RAM.

## Hardware and software requirements

In order to use the Progressive GPU Lightmapper, your computer must meet these minimum specifications:

- At least one GPU with OpenCL 1.2 support

- At least 2GB of VRAM dedicated to that GPU

- A CPU that supports SSE4.1 instructions

If the **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) you are baking requires more VRAM than is available on the designated GPU, bake times can significantly increase.

The Progressive GPU Lightmapper does not support OpenCL CPU devices.

The Apple silicon version of the Unity Editor is not compatible with the CPU Progressive Lightmapper. However, it is compatible with the [Progressive GPU Lightmapper](GPUProgressiveLightmapper.html).

## Render pipeline support

Refer to [render pipeline feature comparison](render-pipelines-feature-comparison.html) for more information about support for the Progressive Lightmapper across **render pipelines**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline).

## Select the Progressive Lightmapper

To select the Progressive Lightmapper:

1. Go to **Window** > **Rendering** > **Lighting**

2. Navigate to **Lightmapping Settings**

3. Set **Lightmapper** to **Progressive CPU** or **Progressive GPU**

You can perform many of the functions available in this window via **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts), using the [LightmapEditorSettings](../ScriptReference/LightmapEditorSettings.html) and [Lightmapping](../ScriptReference/Lightmapping.html) APIs.

Configuring lightmaps and baking

Group GameObjects together in a lightmap with Baked Tags
