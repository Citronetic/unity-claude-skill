This version of Unity is unsupported.

Introduction to shaders

Configuring material properties in prebuilt shaders

# Prebuilt shaders render pipeline compatibility reference

| ShadersA program that runs on the GPU. More infoSee in Glossary | Universal Render PipelineA series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. More infoSee in Glossary (URP) | High Definition Render Pipeline (HDRP) | Custom SRP | Built-in Render Pipeline |
| --- | --- | --- | --- | --- |
| URP shaders | Yes | No | No | No |
| HDRP shaders | No | Yes | No | No |
| Standard Shader | NoCan convert Standard Shader to equivalent on import | NoCan convert Standard Shader to equivalent on import | No | Yes |
| Standard Particle Shaders | No | No | No | Yes |
| Legacy shaders | YesSimple unlit Legacy shaders will likely render fine, but they might not be SRP Batcher compatible. | YesSimple unlit Legacy shaders will likely render fine, but they might not be SRP Batcher compatible. They also do not support any HDRP features. For an unlit shader that supports HDRP features, use the HDRP/Unlit shader. | YesSimple unlit Legacy shaders will likely render fine, but they might not be SRP Batcher compatible. | Yes |

Introduction to shaders

Configuring material properties in prebuilt shaders
