This version of Unity is unsupported.

Enable accurate G-buffer normals in the Deferred and Deferred+ rendering path in URP

Troubleshooting the Forward+ rendering path in URP

# Make a shader compatible with the Deferred or Deferred+ rendering paths in URP

## Use a shader in the Deferred or Deferred+ rendering paths

To use a **shader**A program that runs on the GPU. [More info](../../Shaders.html)
See in [Glossary](../../Glossary.html#Shader) in the Deferred **rendering path**The technique that a render pipeline uses to render graphics. Choosing a different rendering path affects how lighting and shading are calculated. Some rendering paths are more suited to different platforms and hardware than others. [More info](../../RenderingPaths.html)
See in [Glossary](../../Glossary.html#RenderingPath), add the `UniversalGBuffer` tag to the Pass in your **ShaderLab**Unity’s language for defining the structure of Shader objects. [More info](../../SL-Shader.html)
See in [Glossary](../../Glossary.html#ShaderLab) code. Unity executes the shader during the G-buffer render pass.

For example:

```hlsl
Shader "Examples/ExamplePassFlag"
{
    SubShader
    {
        Pass
        {
              Tags
              {
                "RenderPipeline" = "UniversalPipeline"
                "LightMode" = "UniversalGBuffer"
              }

              // The rest of the code that defines the Pass goes here.
        }
    }
}
```

## Use a shader in the forward pass of the Deferred or Deferred+ rendering paths

To use a shader in the Deferred rendering path, add the `UniversalForwardOnly` and `DepthNormalsOnly` tags to the Pass in your ShaderLab code. Unity executes the shader during the G-buffer render pass.

For example:

```hlsl
Shader "Examples/ExamplePassFlag"
{
    SubShader
    {
        Pass
        {
              Tags {
                "RenderPipeline" = "UniversalPipeline"
                "LightMode" = "UniversalForwardOnly"
                "LightMode" = "DepthNormalsOnly"
              }

              // The rest of the code that defines the Pass goes here.
        }
    }
}
```

## Specify the shader lighting model

To specify the shader lighting model as Lit or Simple Lit, use the `UniversalMaterialType` tag. For example:

```hlsl
Shader "Examples/ExamplePassFlag"
{
    SubShader
    {
        Pass
        {
              Tags
              {
                "RenderPipeline" = "UniversalPipeline"
                "LightMode" = "UniversalGBuffer"
                "UniversalMaterialType" = "Lit"
              }

              // The rest of the code that defines the Pass goes here.
        }
    }
}
```

## Additional resources

- [ShaderLab Pass tags in URP](../urp-shaders/urp-shaderlab-pass-tags.html)

- [Pass tags in ShaderLab reference](../../SL-PassTags.html)

Enable accurate G-buffer normals in the Deferred and Deferred+ rendering path in URP

Troubleshooting the Forward+ rendering path in URP
