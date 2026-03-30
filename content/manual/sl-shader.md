This version of Unity is unsupported.

Shader in ShaderLab reference

Properties block reference in ShaderLab

# Shader block in ShaderLab reference

A **Shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) object is a Unity-specific concept; it is a wrapper for shader programs and other information. It lets you define multiple shader programs in the same file, and tell Unity how to use them.

A **Shader object**An instance of the Shader class, a Shader object is container for shader programs and GPU instructions, and information that tells Unity how to use them. Use them with materials to determine the appearance of your scene. [More info](shader-objects.html)
See in [Glossary](Glossary.html#Shaderobject) has a nested structure; it organizes information into structures called SubShaders and Passes.

Inside the `Shader` block, you can:

- Define material properties, using the `Properties` block. See [ShaderLab: defining material properties](SL-Properties.html).

- Define one or more SubShaders, using the `SubShader` block. See [ShaderLab: defining a SubShader](SL-SubShader.html).

- Assign a [custom editor](editor-CustomEditors.html), which determines how the shader asset appears in the Unity Editor. Optionally, you can assign different custom editors for different **render pipelines**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline). See [ShaderLab: assigning custom editors](SL-CustomEditor.html).

- Assign a fallback Shader object, using the `Fallback` block. See [ShaderLab: assigning a fallback](SL-Fallback.html).

## Render pipeline compatibility

| Feature name | Universal Render Pipeline (URP) | High Definition Render Pipeline (HDRP) | Custom SRP | Built-in Render Pipeline |
| --- | --- | --- | --- | --- |
| ShaderLab: Shader block | Yes | Yes | Yes | Yes |

## Syntax

| Signature | Function |
| --- | --- |
| Shader "<name>"{    <optional: Material properties>    <One or more SubShader definitions>    <optional: custom editor>    <optional: fallback>} | Defines a Shader object with a given name. |

## Additional resources

- [Define a Shader object in ShaderLab](shader-objects.html)

Shader in ShaderLab reference

Properties block reference in ShaderLab
