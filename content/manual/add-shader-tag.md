This version of Unity is unsupported.

Introduction to shader tags

Set a shader to require URP or HDRP

# Add a shader tag to a SubShader or Pass

In **ShaderLab**Unity’s language for defining the structure of Shader objects. [More info](SL-Shader.html)
See in [Glossary](Glossary.html#ShaderLab), you assign tags to a SubShader or Pass by placing a `Tags` block inside the block.

Note that both SubShaders and Passes use the `Tags` block, but they work differently. Assigning SubShader tags to a Pass has no effect, and vice versa. The difference is where you put the `Tags` block:

- To define Pass tags, place the `Tags` block inside a `Pass` block.

- To define SubShader tags, place the `Tags` block inside a `SubShader` block but outside a `Pass` block.

# Example in a Pass block

```hlsl
Shader "Examples/ExampleRequireOptions"
{
    SubShader
    {
        Pass
        {
              Tags { "RequireOptions" = "SoftVegetation" }

              // The rest of the code that defines the Pass goes here.
        }
    }
}
```

## Additional resources

- [SubShader tags in ShaderLab reference](SL-SubShaderTags.html)

- [Pass tags in ShaderLab reference](SL-PassTags.html)

Introduction to shader tags

Set a shader to require URP or HDRP
