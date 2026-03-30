This version of Unity is unsupported.

Render Objects Renderer Feature reference for URP

Blit in URP

# Custom render pass workflow in URP

A custom render pass is a way to change how the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../../render-pipelines.html)
See in [Glossary](../../Glossary.html#Renderpipeline) (URP) renders a **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../../CreatingScenes.html)
See in [Glossary](../../Glossary.html#Scene) or the objects within a scene. A custom render pass contains your own rendering code, which you insert into the rendering pipeline at an injection point.

To add a custom render pass, complete the following tasks:

- [Create the code](#create-code) for a custom render pass using the Scriptable Render Pass API.

- Add the custom render pass to URP’s frame rendering loop by [creating a Scriptable Renderer Feature](#create-srf), or [using the `RenderPipelineManager` API](#inject-pass).

## Create the code for a custom render pass

To create the code for a custom render pass, write a class that inherits `ScriptableRenderPass`. In the class, use the [render graph API](../render-graph-introduction.html) to tell Unity what textures and render targets to use, and what operations to do on them.

Refer to [Scriptable Render Passes](intro-to-scriptable-render-passes.html) for more information.

## Create a Scriptable Renderer Feature

To add your custom render pass to URP’s frame rendering loop, write a class that inherits `ScriptableRendererFeature`.

The Scriptable Renderer Feature does the following:

1. Creates an instance of the custom render pass you created.

2. Inserts the custom render pass into the rendering pipeline.

Refer to [Inject a pass using a Scriptable Renderer Feature](scriptable-renderer-features/inject-a-pass-using-a-scriptable-renderer-feature.html) for more information.

## Use the RenderPipelineManager API

To add your custom render pass to URP’s frame rendering loop, you can also subscribe a method to one of the events in the [RenderPipelineManager](https://docs.unity3d.com/ScriptReference/Rendering.RenderPipelineManager.html) class.

Refer to [Inject a render pass via scripting](../customize/inject-render-pass-via-script.html) for more information.

## Additional resources

- [Render graph system](../render-graph-introduction.html)

- [Example of a complete Scriptable Renderer Feature](../renderer-features/create-custom-renderer-feature.html)

Render Objects Renderer Feature reference for URP

Blit in URP
