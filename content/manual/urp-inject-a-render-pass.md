This version of Unity is unsupported.

Render Graph Viewer window reference for URP

Injecting a render pass via a Scriptable Renderer Feature in URP

# Adding a Scriptable Render Pass to the frame rendering loop in URP

Add a custom render pass to the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#Renderpipeline) (URP) frame rendering loop by creating a Scriptable Renderer Feature, or using the `RenderPipelineManager` API.

| Page | Description |
| --- | --- |
| Injecting a render pass via a Scriptable Renderer Feature | Write a class that inherits ScriptableRendererFeature, and use it to creates an instance of the custom render pass you created, and insert the custom render pass into the rendering pipeline. |
| Inject a render pass via scripting | Use the RenderPipelineManager API to insert a custom render pass into the rendering pipeline. |
| Restrict a render pass to a scene area | Enable a custom rendering effect only if the cameraA component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. More infoSee in Glossary is inside a volume in a sceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary. |
| Injection points reference | URP contains multiple injection points that let you inject render passes at different points in the frame rendering loop. |

## Additional resources

- [Custom post-processing](post-processing/custom-post-processing.html)

Render Graph Viewer window reference for URP

Injecting a render pass via a Scriptable Renderer Feature in URP
