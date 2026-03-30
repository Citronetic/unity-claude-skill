This version of Unity is unsupported.

Set a shader to require URP or HDRP

Set a shader to require a shader model or GPU feature

# Set a shader to require a graphics API or platform

Some [`#pragma` directives](SL-PragmaDirectives.html) take parameters that allow you to target specific graphics APIs and platforms. This page contains information on using those directives, and provides a list of valid parameter values.

## Including or excluding graphics APIs

By default, Unity compiles all **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) programs for each graphics API in the list for the current build target. Sometimes, you might want to compile certain shader programs only for certain graphics APIs; for example, if you use features that are not supported on all platforms.

To compile a shader program only for given APIs, use the `#pragma only_renderers` directive. You can pass multiple values, space delimited.

This example demonstrates how to compile shaders only for Metal and Vulkan:

```hlsl
#pragma only_renderers metal vulkan
```

To exclude shader code from compilation by given compilers, use the `#pragma exclude_renderers` directive. You can pass multiple values, space delimited.

This example demonstrates how to exclude a shader from compilation for Metal and Vulkan:

```hlsl
#pragma exclude_renderers metal vulkan
```

## Generating shader variants for graphics tiers for a given graphics API

In the Built-in **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline), Unity automatically generates [shader variants](shader-variants.html)A verion of a shader program that Unity generates according to a specific combination of shader keywords and their status. A Shader object can contain multiple shader variants. [More info](shader-variants.html)
See in [Glossary](Glossary.html#Shadervariant) that correspond to [graphics tiers](graphics-tiers.html) under certain conditions. You can also force Unity to generate these variants, if required.

To do this, use the `#pragma hardware_tier_variants` preprocessor directive and specify the graphics APIs for which you want to generate tier shader variants.

For example, this instructs Unity to compile tier shader variants for Metal:

```hlsl
#pragma hardware_tier_variants metal
```

## List of valid parameter values

Supported values are:

| Value | Description |
| --- | --- |
| d3d11 | DirectX 11 feature level 10 and above, DirectX 12 |
| glcore | OpenGL 3.x, OpenGL 4.x |
| gles3 | OpenGL ES 3.x, WebGLA JavaScript API that renders 2D and 3D graphics in a web browser. The Unity Web build option allows Unity to publish content as JavaScript programs which use HTML5 technologies and the WebGL rendering API to run Unity content in a web browser. More infoSee in Glossary 2.0 |
| metal | Metal on iOS or Mac |
| ps4 | PlayStation®4 |
| ps5 | PlayStation®5 |
| switch | Nintendo Switch™ |
| vulkan | Vulkan |
| webgpu | WebGPU |
| xboxseries | Xbox Series S\|X |

## Additional resources

- [HLSL pragma directives reference](SL-PragmaDirectives.html)

- [HLSL pragma target command reference](SL-Pragma-target.html)

- [HLSL pragma require command reference](SL-Pragma-require.html)

- [SubShader tags in ShaderLab reference](SL-SubShaderTags.html)

- [Pass tags in ShaderLab reference](SL-PassTags.html)

Set a shader to require URP or HDRP

Set a shader to require a shader model or GPU feature
