This version of Unity is unsupported.

Use HLSL and ShaderLab in a compute shader

Writing compute shaders for multiple platforms

# Run a compute shader

In your script, define a variable of ComputeShader type and assign a reference to the Asset. This allows you to invoke them with [ComputeShader.Dispatch](../ScriptReference/ComputeShader.Dispatch.html) function. See Unity documentation on [ComputeShader class](../ScriptReference/ComputeShader.html) for more details.

Closely related to compute **shaders**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) is a [ComputeBuffer](../ScriptReference/ComputeBuffer.html) class, which defines arbitrary data buffer (“structured buffer” in DX11 lingo). [Render Textures](../ScriptReference/RenderTexture.html)A special type of Texture that is created and updated at runtime. To use them, first create a new Render Texture and designate one of your Cameras to render into it. Then you can use the Render Texture in a Material just like a regular Texture. [More info](class-RenderTexture.html)
See in [Glossary](Glossary.html#RenderTexture) can also be written into from compute shaders, if they have “random access” flag set (“unordered access view” in DX11). See [RenderTexture.enableRandomWrite](../ScriptReference/RenderTexture-enableRandomWrite.html) to learn more about this.

Use HLSL and ShaderLab in a compute shader

Writing compute shaders for multiple platforms
