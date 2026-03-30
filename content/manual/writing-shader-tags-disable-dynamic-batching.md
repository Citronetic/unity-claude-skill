This version of Unity is unsupported.

Prioritize lower quality shaders with the LOD command

Get tag values in a script

# Disable dynamic batching of a shader

The `DisableBatching` SubShader Tag prevents Unity from applying [Dynamic Batching](DrawCallBatching.html)An automatic Unity process which attempts to render multiple meshes as if they were a single mesh for optimized graphics performance. The technique transforms all of the GameObject vertices on the CPU and groups many similar vertices together. [More info](DrawCallBatching.html)
See in [Glossary](Glossary.html#DynamicBatching) to geometry that uses this SubShader.

This is useful for **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) programs that perform object space operations. Dynamic Batching transforms all geometry into world space, meaning that shader programs can no longer access object space. Shader programs that rely on object space therefore do not render correctly. To avoid this problem, use this SubShader Tag to prevent Unity from applying Dynamic Batching.

## Examples

This example code creates a SubShader with a DisableBatching value of `True`:

```hlsl
Shader "ExampleShader" {

    SubShader {

        Tags { "DisableBatching" = "True" }
        Pass {
            …
        }

    }

}
```

Prioritize lower quality shaders with the LOD command

Get tag values in a script
