This version of Unity is unsupported.

Create a 2D texture array in a script

Sample a 2D texture array in a shader

# Render to a 2D texture array

To render to a 2D texture array, create a [render texture](render-texture-landing.html)A special type of Texture that is created and updated at runtime. To use them, first create a new Render Texture and designate one of your Cameras to render into it. Then you can use the Render Texture in a Material just like a regular Texture. [More info](class-RenderTexture.html)
See in [Glossary](Glossary.html#RenderTexture) and set the **Dimension** property to **2D Array**.

If you use the [`Graphics.SetRenderTarget`](../ScriptReference/Graphics.SetRenderTarget.html) API, set the `depthSlice` parameter to the slice you want to render to.

If the platform supports geometry shaders, use a geometry **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) to render to individual slices, or set `depthSlice` to `-1` to render to all the slices.

Create a 2D texture array in a script

Sample a 2D texture array in a shader
