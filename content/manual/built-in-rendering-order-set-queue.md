This version of Unity is unsupported.

Render queues and sorting behaviours in the Built-in Render Pipeline

Set how a camera sorts materials in the Built-In Render Pipeline

# Set the render queue for a material in the Built-In Render Pipeline

By default, Unity places objects in the render queue specified in their Unity **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader). You define this value using the `[Queue]` [SubShader tag](SL-SubShaderTags.html).

You can override this value on a per-material basis.

In the Unity Editor, you can do this in the [material Inspector](class-Material.html) by setting the **Render Queue** property. In a C# script, you can do this by setting the value of [Material.renderQueue](../ScriptReference/Material-renderQueue.html) using the [Rendering.RenderQueue](../ScriptReference/Rendering.RenderQueue.html) enum.

Render queues and sorting behaviours in the Built-in Render Pipeline

Set how a camera sorts materials in the Built-In Render Pipeline
