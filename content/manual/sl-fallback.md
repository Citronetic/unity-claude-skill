This version of Unity is unsupported.

Properties block reference in ShaderLab

Custom Editor block in ShaderLab reference

# Fallback block in ShaderLab reference

This page contains information on using a `Fallback` block in your **ShaderLab**Unity’s language for defining the structure of Shader objects. [More info](SL-Shader.html)
See in [Glossary](Glossary.html#ShaderLab) code to assign a fallback **Shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) object. For information on how a **Shader object**An instance of the Shader class, a Shader object is container for shader programs and GPU instructions, and information that tells Unity how to use them. Use them with materials to determine the appearance of your scene. [More info](shader-objects.html)
See in [Glossary](Glossary.html#Shaderobject) works, and how Unity chooses when to use a fallback, see [Shader objects introduction](shader-objects.html).

## Render pipeline compatibility

| Feature name | Universal Render PipelineA series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. More infoSee in Glossary (URP) | High Definition Render Pipeline (HDRP) | Custom SRP | Built-in Render Pipeline |
| --- | --- | --- | --- | --- |
| ShaderLab: Fallback block | Yes | Yes | Yes | Yes |

## Syntax

To assign a fallback, you place a `Fallback` block inside a `Shader` block.

| Signature | Function |
| --- | --- |
| Fallback "<name>" | If no compatible SubShaders are found, use the named Shader object. |
| Fallback Off | Do not use a fallback Shader object in place of this one. If no compatible SubShaders are found, display the error shader. |

## Example

This example code demonstrates the syntax for creating a Shader object that has a named fallback.

```hlsl
Shader "Examples/ExampleFallback"
{
    SubShader
    {
        // Code that defines the SubShader goes here.

        Pass
        {
              // Code that defines the Pass goes here.
        }
    }

    Fallback "ExampleOtherShader"
}
```

Properties block reference in ShaderLab

Custom Editor block in ShaderLab reference
