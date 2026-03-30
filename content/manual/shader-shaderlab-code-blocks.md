This version of Unity is unsupported.

Pass tags in ShaderLab reference

GPU render state commands in ShaderLab reference

# Shader code blocks in ShaderLab reference

This page contains information about using **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) code blocks. For information about writing HLSL itself, refer to [Writing HLSL shader programs](writing-shader-writing-shader-programs-hlsl.html).

## HLSL

`HLSLPROGRAM` and `HLSLINCLUDE` are compatible with all **render pipelines**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline).

| Signature | Function |
| --- | --- |
| HLSLPROGRAM    [source code for shader programs]ENDHLSL | Creates a shader program block. Unity adds the HLSL shader program to the pass that includes this shader program block. |
| HLSLINCLUDE    [code that you want to share]ENDHLSL | Creates a shader include block. Unity includes this code in all shader programs that are defined in HLSLPROGRAM blocks, anywhere in this source file. |

## CG

`CGPROGRAM` and `CGINCLUDE` are compatible only with the Built-In Render Pipeline. For most uses, use `HLSLPROGRAM` and `HLSLINCLUDE` instead, unless you write [surface shaders](SL-SurfaceShaders.html)A streamlined way of writing shaders for the Built-in Render Pipeline. [More info](SL-SurfaceShaders.html)
See in [Glossary](Glossary.html#SurfaceShader).

If you use `CGPROGRAM`, Unity includes several of Unity’s built-in shader include files by default, enabling you to use built-in variables and functions. As a result, shaders that use `CGPROGRAM` might not work if you change the keyword to `HLSLPROGRAM`.

**Note**: Although [the shader library files in the Built-In Render Pipeline](SL-BuiltinIncludes.html) have a .cginc file extension, they contain HLSL code rather than CG code.

| Signature | Function |
| --- | --- |
| CGPROGRAM    [source code for shader programs]ENDCG | Creates a shader program block. Unity adds the shader program to the pass that includes this shader program block. |
| CGINCLUDE    [code that you want to share]ENDCG | Create a shader include block. Unity includes this code in all shader programs that are defined in CGPROGRAM blocks, anywhere in this source file. |

## Additional resources

- [Writing HLSL shader programs](writing-shader-writing-shader-programs-hlsl.html)

- [Import a file from the shader library in the Built-In Render Pipeline](SL-BuiltinIncludes.html)

- [Shader methods in URP](urp/use-built-in-shader-methods.html)

Pass tags in ShaderLab reference

GPU render state commands in ShaderLab reference
