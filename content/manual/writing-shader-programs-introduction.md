This version of Unity is unsupported.

Writing HLSL shader programs

Add an HLSL shader program

# Shader program fundamentals

In Unity, you usually write **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) programs in HLSL. To add HLSL code to your [shader asset](SL-Shader.html), you put the code inside a **shader code block**.

**Note:** Unity also supports writing shader programs in other languages, although this is not generally needed or recommended. For more information, see [Writing shaders](shader-writing.html).

This section of the manual includes information on using HLSL in a Unity-specific way. For general information on writing HLSL, see [Microsoft’s HLSL documentation](https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl).

**Note:** Avoid using `CGPROGRAM` in shader code, unless you write [surface shaders](SL-SurfaceShaders.html)A streamlined way of writing shaders for the Built-in Render Pipeline. [More info](SL-SurfaceShaders.html)
See in [Glossary](Glossary.html#SurfaceShader).

## HLSL syntax

HLSL has two syntaxes: a legacy DirectX 9-style syntax, and a more modern DirectX 10+ style syntax. The difference is mostly in how texture sampling functions work:

- The legacy syntax uses sampler2D, tex2D() and similar functions. This syntax works on all platforms.

- The DX10+ syntax uses Texture2D, SamplerState and .Sample() functions. Some forms of this syntax do not work on OpenGL platforms, because textures and samplers are not different objects in OpenGL.

Unity provides shader libraries that contain preprocessor macros to help you manage these differences. For more information, see [Built-in shader macros](use-built-in-shader-methods-birp.html).

## Vertex and fragment shaders

The **Vertex Shader**A program that runs on each vertex of a 3D model when the model is being rendered. [More info](writing-shader-writing-shader-programs-hlsl.html)
See in [Glossary](Glossary.html#vertexshader) is a program that runs on each vertex of the 3D model. Quite often it does not do anything particularly interesting. Here we just transform vertex position from object space into so called “clip space”, which is what’s used by the GPU to rasterize the object on screen. We also pass the input texture coordinate unmodified - we’ll need it to sample the texture in the fragment shader.

The **Fragment Shader** is a program that runs on each and every **pixel**The smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. [More info](ShadowPerformance.html)
See in [Glossary](Glossary.html#pixel) that object occupies on-screen, and is usually used to calculate and output the color of each pixel. Usually there are millions of pixels on the screen, and the fragment shaders are executed
for all of them! Optimizing fragment shaders is quite an important part of overall game performance work.

Some variable or function definitions are followed by a **Semantic Signifier** - for example **: POSITION** or **: SV_Target**. These semantics signifiers communicate the “meaning” of these variables to the GPU. See the [shader semantics](SL-VertexProgramInputs.html) page for details.

Writing HLSL shader programs

Add an HLSL shader program
