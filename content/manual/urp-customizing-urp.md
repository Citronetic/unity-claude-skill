This version of Unity is unsupported.

Add anti-aliasing in the Universal Render Pipeline

Introduction to Scriptable Render Passes in URP

# Custom rendering and post-processing in URP

Customize and extend the rendering process in the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#Renderpipeline) (URP). Create a custom render pass in a C# script and inject it into the URP frame rendering loop.

| Page | Description |
| --- | --- |
| Introduction to Scriptable Render Passes | Learn about using Scriptable Render Passes to alter how Unity renders a sceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary or the objects within a scene. |
| Adding pre-built effects with Renderer Features in URP | Resources for adding pre-built render passes to URP, and configuring their behaviour. |
| Custom render pass workflow in URP | Add and inject a custom render pass. |
| BlitA shorthand term for “bit block transfer”. A blit operation is the process of transferring blocks of data from one place in memory to another.See in Glossary | Understand the different ways to perform a blit operation in URP and best practices to follow when writing custom render passes. |
| Render graph system | Resources and approaches for using the RenderGraph APIs to create a Scriptable Render Pass. |
| Adding a Scriptable Render Pass to the frame rendering loop | Resources and techniques for injecting a custom render pass via a Scriptable Renderer Feature, or the RenderPipelineManager API. |
| Modify URP source code | Modify URP source code to implement advanced customizations. |
| Compatibility Mode | Write a Scriptable Render Pass if you enable Compatibility Mode (Render Graph Disabled) in URP graphics settings. Unity no longer develops or improves this rendering pathThe technique that a render pipeline uses to render graphics. Choosing a different rendering path affects how lighting and shading are calculated. Some rendering paths are more suited to different platforms and hardware than others. More infoSee in Glossary. |

## Additional resources

- [Rendering](rendering-in-universalrp.html)

- [Render pipeline concepts](urp-concepts.html)

- [Pre-built effects (Renderer Features)](urp-renderer-feature.html)

- [How to create a custom post-processing effect](post-processing/post-processing-custom-effect-low-code.html)

- [Execute rendering commands in a custom render pipeline](https://docs.unity3d.com/Packages/com.unity.render-pipelines.core@17.0/manual/srp-using-scriptable-render-context.html)

- [Universal Render Pipeline scripting API](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@17.2/api/index.html)

Add anti-aliasing in the Universal Render Pipeline

Introduction to Scriptable Render Passes in URP
