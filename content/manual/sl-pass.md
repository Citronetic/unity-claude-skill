This version of Unity is unsupported.

Pass in ShaderLab reference

Name directive in ShaderLab reference

# Pass block in ShaderLab reference

To define a Pass in **ShaderLab**Unity’s language for defining the structure of Shader objects. [More info](SL-Shader.html)
See in [Glossary](Glossary.html#ShaderLab), use a `Pass` block. This page contains information on using `Pass` blocks. For information on how a **Shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) object works, and the relationship between **Shader objects**An instance of the Shader class, a Shader object is container for shader programs and GPU instructions, and information that tells Unity how to use them. Use them with materials to determine the appearance of your scene. [More info](shader-objects.html)
See in [Glossary](Glossary.html#Shaderobject), SubShaders and Passes, see [Shader object fundamentals](Shaders.html).

Inside the `Pass` block, you can:

- Assign a name to the Pass, using a Name block. See [ShaderLab: assigning a name to a Pass](SL-Name.html).

- Assign key-value pairs of data to the Pass, using a Tags block. See [ShaderLab: assigning tags to a Pass](SL-PassTags.html).

- Perform operations using ShaderLab commands. See [ShaderLab: using commands](SL-Reference.html).

- Add shader code to the Pass, using a shader code block. See [ShaderLab: shader code blocks](shader-shaderlab-code-blocks.html).

- Specify package requirements using the `PackageRequirements` block. This makes Unity only run the Pass if the required packages are installed. See [ShaderLab: specifying package requirements](SL-PackageRequirements.html).

## Render pipeline compatibility

| Feature name | Universal Render PipelineA series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. More infoSee in Glossary (URP) | High Definition Render Pipeline (HDRP) | Custom SRP | Built-in Render Pipeline |
| --- | --- | --- | --- | --- |
| ShaderLab: Pass block | Yes | Yes | Yes | Yes |

## Syntax

| Signature | Function |
| --- | --- |
| Pass{    <optional: name> <optional: tags>    <optional: commands>   <optional: shader code>} | Defines a Pass. |

## Additional resources

- [Add a shader pass in a custom shader](writing-shader-create-shader-pass.html)

Pass in ShaderLab reference

Name directive in ShaderLab reference
