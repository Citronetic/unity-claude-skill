This version of Unity is unsupported.

ColorMask command in ShaderLab reference

Cull command in ShaderLab reference

# Conservative command in ShaderLab reference

Enables or disables conservative **rasterization**The process of generating an image by calculating pixels for each polygon or triangle in the geometry. This is an alternative to ray tracing.
See in [Glossary](Glossary.html#Rasterization).

## Render pipeline compatibility

| Feature name | Universal Render PipelineA series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. More infoSee in Glossary (URP) | High Definition Render Pipeline (HDRP) | Custom SRP | Built-in Render Pipeline |
| --- | --- | --- | --- | --- |
| Conservative | Yes | Yes | Yes | Yes |

## Syntax

This command makes a change to the render state. Use it in a `Pass` block to set the render state for that Pass, or use it in a `SubShader` block to set the render state for all Passes in that SubShader.

| Signature | Example syntax | Function |
| --- | --- | --- |
| Conservative <enabled> | Conservative True | Enables or disables conservative rasterization.Requires DX 11.3+, or GL_NV_conservative_raster. |

## Parameters

| Parameter | Value | Function |
| --- | --- | --- |
| enabled | True | Enables conservative rasterization. |
|  | False | Disables conservative rasterization. |

## Additional resources

- [Enable conservative rasterization in a shader](writing-shader-conservative-rasterization.html)

ColorMask command in ShaderLab reference

Cull command in ShaderLab reference
