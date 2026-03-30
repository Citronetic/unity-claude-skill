This version of Unity is unsupported.

Custom rendering in the Built-In Render Pipeline

CameraEvent and LightEvent events order reference for the Built-In Render Pipeline

# CommandBuffer fundamentals in the Built-In Render Pipeline

A [CommandBuffer](../ScriptReference/Rendering.CommandBuffer.html) holds a list of rendering commands (such as setting the render target, or drawing a given mesh). You can instruct Unity to schedule and execute those commands at various points in the Built-in **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline), which allows you to customize and extend Unity’s rendering functionality.

[Image: Blurry refraction, using Command Buffers.]
Blurry refraction, using Command Buffers.

You can execute CommandBuffers immediately using the [Graphics.ExecuteCommandBuffer](../ScriptReference/Graphics.ExecuteCommandBuffer.html) API, or you can schedule them so that they occur at a given point in the render pipeline. To schedule them, use the [Camera.AddCommandBuffer](../ScriptReference/Camera.AddCommandBuffer.html) API with the [CameraEvent enum](../ScriptReference/Rendering.CameraEvent.html), and the [Light.AddCommandBuffer](../ScriptReference/Light.AddCommandBuffer.html) API with the [LightEvent enum](../ScriptReference/Rendering.LightEvent.html). To see when Unity executes CommandBuffers that you schedule in this way, see [CameraEvent and LightEvent order of execution](built-in-rendering-order-landing.html).

For a full list of the commands that you can execute using CommandBuffers, see the [CommandBuffer API documentation](../ScriptReference/Rendering.CommandBuffer.html). Note that some commands are supported only on certain hardware; for example, the commands relating to **ray tracing**The process of generating an image by tracing out rays from the Camera through each pixel and recording the color contribution at the hit point. This is an alternative to rasterization. raytracing
See in [Glossary](Glossary.html#Raytracing) are supported only in DX12.

- [Introduction to render pipelines](render-pipelines-overview.html)

- [Execute rendering commands in a Scriptable Render Pipeline](https://docs.unity3d.com/Packages/com.unity.render-pipelines.core@17.0/manual/index.html)

- [Custom rendering and post-processing in URP](urp/customizing-urp.html)

Custom rendering in the Built-In Render Pipeline

CameraEvent and LightEvent events order reference for the Built-In Render Pipeline
