This version of Unity is unsupported.

Drawing to textures with shaders via Custom Render Textures

Create a Custom Render Texture

# Introduction to Custom Render Textures

**Custom Render Textures** are a special type of texture that allow you to update a texture with a **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader). They are an extension to [Render Textures](class-RenderTexture.html)A special type of Texture that is created and updated at runtime. To use them, first create a new Render Texture and designate one of your Cameras to render into it. Then you can use the Render Texture in a Material just like a regular Texture. [More info](class-RenderTexture.html)
See in [Glossary](Glossary.html#RenderTexture). You can use Custom Render Textures to create complex simulations like caustics, ripple simulation for rain effects, and liquid splatters.

The Custom Render Textures feature provides a scripting and Shader framework to help with complicated configuration like varying update frequency, partial or multi-pass updates.

To use this framework you need to assign a Material to the Custom Render Texture asset. Custom Render Textures require a compatible Material. For more information, see [Writing a shader for a Custom Render Texture](class-CustomRenderTexture-write-shader.html).

## Render Pipeline Compatibility

The following table describes the compatibility between the **Custom Render Textures** feature and each **render pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline):

| Feature | Universal Render Pipeline (URP) | High Definition Render Pipeline (HDRP) | Custom Scriptable Render Pipeline (SRP) | Built-in Render Pipeline |
| --- | --- | --- | --- | --- |
| Custom Render Textures | Yes (1) | Yes (1) | Yes (1) | Yes (1) |

**Note:**

1. To create Materials that update and initialize **Custom Render Textures** in [Shader Graph](https://docs.unity3d.com/Packages/com.unity.shadergraph@latest), selecting **Custom Render Texture** as the target of the shader graph.

Drawing to textures with shaders via Custom Render Textures

Create a Custom Render Texture
