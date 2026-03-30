This version of Unity is unsupported.

Pass block in ShaderLab reference

Pass tags in ShaderLab reference

# Name directive in ShaderLab reference

This page contains information on using a `Name` block in your **ShaderLab**Unity’s language for defining the structure of Shader objects. [More info](SL-Shader.html)
See in [Glossary](Glossary.html#ShaderLab) code to assign a name to a Pass. For information on defining Passes, see [ShaderLab: defining a Pass](SL-Pass.html). For information on how a **Shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) object works, and the relationship between **Shader objects**An instance of the Shader class, a Shader object is container for shader programs and GPU instructions, and information that tells Unity how to use them. Use them with materials to determine the appearance of your scene. [More info](shader-objects.html)
See in [Glossary](Glossary.html#Shaderobject), SubShaders and Passes, see [Shader object fundamentals](Shaders.html).

## Render pipeline compatibility

| Feature name | Universal Render PipelineA series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. More infoSee in Glossary (URP) | High Definition Render Pipeline (HDRP) | Custom SRP | Built-in Render Pipeline |
| --- | --- | --- | --- | --- |
| ShaderLab: Name block | Yes | Yes | Yes | Yes |

## Syntax

| Signature | Function |
| --- | --- |
| Name "<name>" | Sets the name of the Pass. |

## Additional resources

- [Add a shader pass in a custom shader](writing-shader-create-shader-pass.html)

Pass block in ShaderLab reference

Pass tags in ShaderLab reference
