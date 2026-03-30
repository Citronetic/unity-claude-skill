This version of Unity is unsupported.

Reduce aliasing with AlphaToMask mode

Adding material properties to shaders

# Group commands with the Category block

Use the **Category** block to group commands that set the render state, so that you can “inherit” the grouped rendering state within the block.

For example, your **Shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) object might have multiple [SubShaders](SL-SubShader.html), each of which requires [blending](SL-Blend.html) set to additive. You can use the Category block for that:

```hlsl
Shader "example" {
Category {
    Blend One One
    SubShader {
        // ...
    }
    SubShader {
        // ...
    }
    // ...
}
}
```

The Category block does not have an impact on shader performance; it is essentially the same as copy-pasting the code.

Reduce aliasing with AlphaToMask mode

Adding material properties to shaders
