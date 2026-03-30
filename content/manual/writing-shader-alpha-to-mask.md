This version of Unity is unsupported.

Set the color channels the GPU renders to

Group commands with the Category block

# Reduce aliasing with AlphaToMask mode

Alpha-to-coverage mode can reduce the excessive aliasing that occurs when you use multisample anti-aliasing (MSAA) with shaders that use alpha testing, such as vegetation shaders. To do this, it modifies the multisample coverage mask proportionally to the alpha value in the output of the fragment **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) result.

This command is intended for use with MSAA. If you enable alpha-to-coverage mode when you are not using MSAA, the results can be unpredictable; different graphics APIs and GPUs handle this differently.

## Examples

```hlsl
Shader "Examples/CommandExample"
{
    SubShader
    {
         // The rest of the code that defines the SubShader goes here.

        Pass
        {
              // Enable alpha-to-coverage mode for this Pass
              AlphaToMask On

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
         // Enable alpha-to-coverage mode for this SubShader
         AlphaToMask On

         // The rest of the code that defines the SubShader goes here.

        Pass
        {
              // The rest of the code that defines the Pass goes here.
        }
    }
}
```

## Additional resources

- [AlphaToMask command in ShaderLab reference](SL-AlphaToMask.html)

Set the color channels the GPU renders to

Group commands with the Category block
