This version of Unity is unsupported.

Set the depth testing mode in a shader

Check or write to the stencil buffer in a shader

# Disable writing to the depth buffer in a shader

`ZWrite` sets whether the **depth buffer**A memory store that holds the z-value depth of each pixel in an image, where the z-value is the depth for each rendered pixel from the projection plane. [More info](class-RenderTexture.html)
See in [Glossary](Glossary.html#depthbuffer) contents are updated during rendering. Normally, ZWrite is enabled for opaque objects and disabled for semi-transparent ones.

Disabling ZWrite can lead to incorrect depth ordering. In this case, you need to sort geometry on the CPU.

## Examples

This example code demonstrates the syntax for using this command in a Pass block.

```hlsl
Shader "Examples/CommandExample"
{
    SubShader
    {
         // The rest of the code that defines the SubShader goes here.

        Pass
        {
              // Disables writing to the depth buffer for this Pass
              ZWrite Off

              // The rest of the code that defines the Pass goes here.
        }
    }
}
```

This example code demonstrates the syntax for using this command in a SubShader block.

```hlsl
Shader "Examples/CommandExample"
{
    SubShader
    {
         // Disables writing to the depth buffer for this SubShader
         ZWrite Off

         // The rest of the code that defines the SubShader goes here.

        Pass
        {
              // The rest of the code that defines the Pass goes here.
        }
    }
}
```

## Additional Resources

- [ZWrite command in ShaderLab reference](SL-ZWrite.html)

Set the depth testing mode in a shader

Check or write to the stencil buffer in a shader
