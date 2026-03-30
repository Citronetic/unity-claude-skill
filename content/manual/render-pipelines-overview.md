This version of Unity is unsupported.

Render pipelines

Scriptable Render Pipeline fundamentals

# Introduction to render pipelines

A **render pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline) takes the objects in a **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) and displays them on-screen.

## How a render pipeline works

[Image: Stages of a render pipeline workflow.]
Stages of a render pipeline workflow.

A render pipeline follows these steps:

1. Culling, where the pipeline decides which objects from the scene to display. This usually means it removes objects that are outside the **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera) view ([frustum culling](https://docs.unity3d.com/Manual/UnderstandingFrustum.html)) or hidden behind other objects ([occlusion culling](https://docs.unity3d.com/Manual/OcclusionCulling.html)A process that disables rendering GameObjects that are hidden (occluded) from the view of the camera. [More info](OcclusionCulling.html)
See in [Glossary](Glossary.html#Occlusionculling)).

2. Rendering, where the pipeline draws the objects with their correct lighting into **pixel**The smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. [More info](ShadowPerformance.html)
See in [Glossary](Glossary.html#pixel) buffers.

3. **Post-processing**A process that improves product visuals by applying filters and effects before the image appears on screen. You can use post-processing effects to simulate physical camera and film properties, for example Bloom and Depth of Field. [More info](PostProcessingOverview.html) post processing, postprocessing, postprocess
See in [Glossary](Glossary.html#post-processing), where the pipeline modifies the pixel buffers to generate the final output frame for the display. Example of modifications include color grading, bloom, and **depth of field**A post-processing effect that simulates the focus properties of a camera lens. [More info](PostProcessingOverview.html)
See in [Glossary](Glossary.html#DepthofField).

A render pipeline repeats these steps each time Unity generates a new frame.

## Render pipelines in Unity

In Unity, you can choose between different render pipelines. Unity provides three prebuilt render pipelines with different capabilities and performance characteristics, or you can create your own.

The [Universal Render Pipeline (URP)](universal-render-pipeline.html) is a Scriptable Render Pipeline that you can customize. It lets you create scalable graphics across a wide range of platforms.

[Image: URP 3D sample]
URP 3D sample

The [High Definition Render Pipeline (HDRP)](high-definition-render-pipeline.html) is a Scriptable Render Pipeline that lets you create cutting-edge, high-fidelity graphics on high-end platforms.

[Image: HDRP 3D sample: The Enemies Unity demo]
HDRP 3D sample: The Enemies Unity demo

The [Built-In Render Pipeline](built-in-render-pipeline.html) is a general purpose render pipeline with limited options for customization.

[Image: Built-In Render Pipeline 3D sample]
Built-In Render Pipeline 3D sample

The Scriptable Render Pipelines let you inspect and change how culling, rendering, and post-processing work directly in C#. This level of customization is also possible in the Built-In Render Pipeline when you [purchase access to the Unity engine’s source code](https://unity.com/products/source-code?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774937438016) in C++.

If you’re an experienced graphics developer with advanced customization needs, you can also [create your own custom render pipeline](https://docs.unity3d.com/Packages/com.unity.render-pipelines.core@17.0/manual/srp-custom.html) using Unity’s Scriptable Render Pipeline API.

Refer to [Choose a render pipeline](choose-a-render-pipeline.html) for more information about choosing the right pipeline for your project.

## Additional resources

- [Introduction to Lighting and Rendering tutorial](https://learn.unity.com/tutorial/introduction-to-lighting-and-rendering-2019-3?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774937438016)

Render pipelines

Scriptable Render Pipeline fundamentals
