This version of Unity is unsupported.

Modify URP source code

Write a Scriptable Render Pass in Compatibility Mode in URP

# Compatibility Mode in URP

If you enable **Compatibility Mode (Render Graph Disabled)** in URP graphics settings, you can write a Scriptable Render Pass without using the [render graph API](render-graph.html). The setting is in **Project Settings** > **Graphics** > **Pipeline Specific Settings** > **URP** > **Render Graph**.

**Note:** Unity no longer develops or improves the **rendering path**The technique that a render pipeline uses to render graphics. Choosing a different rendering path affects how lighting and shading are calculated. Some rendering paths are more suited to different platforms and hardware than others. [More info](../RenderingPaths.html)
See in [Glossary](../Glossary.html#RenderingPath) that doesn’t use the [render graph API](render-graph.html). Use the render graph API instead when developing new graphics features.

| Page | Description |
| --- | --- |
| Write a Scriptable Render Pass in Compatibility Mode | An example of creating a Scriptable Render Pass in Compatibility Mode. |
| Example of a Scriptable Renderer Feature in Compatibility mode | An example that describes how to create a custom Renderer Feature that performs a full screen blitA shorthand term for “bit block transfer”. A blit operation is the process of transferring blocks of data from one place in memory to another.See in Glossary. |
| Scriptable Render Pass Compatibility Mode API reference for URP | Reference for the Scriptable Render Pass API. |

Modify URP source code

Write a Scriptable Render Pass in Compatibility Mode in URP
