This version of Unity is unsupported.

Add a shader tag to a SubShader or Pass

Set a shader to require a graphics API or platform

# Set a shader to require URP or HDRP

The `RenderPipeline` tag tells Unity whether a SubShader is compatible with the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline) (URP) or the High Definition Render Pipeline (HDRP).

## Example

This example code declares that a SubShader is compatible with URP:

```hlsl
Shader "ExampleShader" {
    SubShader {
        Tags { "RenderPipeline" = "UniversalPipeline" }
        Pass {
            …
        }
    }
}
```

## Additional resources

- [SubShader tags in ShaderLab reference](SL-SubShaderTags.html)

- [Pass tags in ShaderLab reference](SL-PassTags.html)

Add a shader tag to a SubShader or Pass

Set a shader to require a graphics API or platform
