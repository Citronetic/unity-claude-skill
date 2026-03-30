This version of Unity is unsupported.

Metal

Debug Metal graphics

# Metal requirements and compatibility

This page lists the requirements for using Metal as well as the features that Metal is compatible with.

## Platform compatibility

Unity supports Metal for the Unity Player on iOS, tvOS, and macOS. Unity also supports Metal for the Unity Editor on macOS.

## Hardware compatibility

Unity supports Metal for all Apple devices that Unity supports.

## Render pipeline compatibility

| Feature | Built-in Render PipelineA series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. More infoSee in Glossary | Universal Render Pipeline (URP) | High Definition Render Pipeline (HDRP) | Custom Scriptable Render Pipeline (SRP) |
| --- | --- | --- | --- | --- |
| Metal | Yes | Yes | Yes (macOS only) | Yes |

## Shader compatibility

- Metal supports **shaders**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) that have a minimum [shader compilation target](SL-ShaderCompileTargets.html) of 3.5.

- Metal doesn’t support geometry shaders.

## Additional resources

- [Use 16-bit precision in shaders](SL-Use16BitPrecisionInShaders.html)

- [Writing shaders for different graphics APIs](SL-PlatformDifferences.html)

Metal

Debug Metal graphics
