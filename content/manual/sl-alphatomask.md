This version of Unity is unsupported.

GPU render state commands in ShaderLab reference

Blend command in ShaderLab reference

# AlphaToMask command in ShaderLab reference

Enables or disables [alpha-to-coverage](https://en.wikipedia.org/wiki/Alpha_to_coverage) mode on the GPU.

## Render pipeline compatibility

| Feature name | Universal Render PipelineA series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. More infoSee in Glossary (URP) | High Definition Render Pipeline (HDRP) | Custom SRP | Built-in Render Pipeline |
| --- | --- | --- | --- | --- |
| AlphaToMask | Yes | Yes | Yes | Yes |

## Syntax

This command makes a change to the render state. Use it in a `Pass` block to set the render state for that Pass, or use it in a `SubShader` block to set the render state for all Passes in that SubShader.

| Signature | Example syntax | Function |
| --- | --- | --- |
| AlphaToMask <state> | AlphaToMask Off | Enables or disables alpha-to-coverage mode. |

## Parameters

| Parameter | Value | Function |
| --- | --- | --- |
| state | On | Enables alpha-to-coverage mode. |
|  | Off | Disables alpha-to-coverage mode. |

## Additional resources

- [Reduce aliasing with AlphaToMask mode](writing-shader-alpha-to-mask.html)

GPU render state commands in ShaderLab reference

Blend command in ShaderLab reference
