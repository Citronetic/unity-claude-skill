This version of Unity is unsupported.

Example of a Scriptable Renderer Feature in Compatibility mode in URP

Universal Render Pipeline reference

# Scriptable Render Pass Compatibility Mode API reference for URP

You can use the following methods within a Scriptable Render Pass to handle its core functions.

**Note:** Unity no longer develops or improves the rendering path that doesn’t use the [render graph API](../../render-graph.html). Use the render graph API instead when developing new graphics features. To use the instructions on this page, enable **Compatibility Mode (Render Graph Disabled)** in URP graphics settings (**Project Settings** > **Graphics**).

| Method | Description |
| --- | --- |
| Execute | Use this method to implement the rendering logic for the Scriptable Renderer Feature.Note: You must not call ScriptableRenderContext.Submit on a command buffer provided by URP. The render pipeline handles this at specific points in the pipeline. |
| OnCameraCleanup | Use this method to clean up any resources that were allocated during the render pass. |
| OnCameraSetup | Use this method to configure render targets and their clear state. You can also use it to create temporary render target textures.Note: When this method is empty, the render pass renders to the active camera render target. |

## Additional resources

- [Scriptable Render Passes](../intro-to-scriptable-render-passes.html)

- [How to create a Custom Renderer Feature](../create-custom-renderer-feature.html)

Example of a Scriptable Renderer Feature in Compatibility mode in URP

Universal Render Pipeline reference
