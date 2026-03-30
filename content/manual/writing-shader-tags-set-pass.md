This version of Unity is unsupported.

Set the render queue of a shader

Prioritize lower quality shaders with the LOD command

# Set when Unity runs a shader pass via a LightMode tag

The `LightMode` tag is a predefined Pass tag that Unity uses to determine whether to execute the Pass during a given frame, when during the frame Unity executes the Pass, and what Unity does with the output.

**Note:** The `LightMode` tag is not related to the [LightMode](../ScriptReference/Experimental.GlobalIllumination.LightMode.html) enum, which relates to lighting.

Every **render pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline) uses the `LightMode` tag, but the predefined values and their meanings vary. For more information, see [Syntax and valid values](SL-PassTags.html#lightmode-tag).

In the Built-in Render Pipeline, if you do not set a `LightMode` tag, Unity renders the Pass without any lighting or shadows; this essentially the same as having a `LightMode` value of `Always`. In the Scriptable Render Pipeline, you can use the `SRPDefaultUnlit` value to reference Passes without a LightMode tag.

## Example in a Shader block

```hlsl
Shader "Examples/ExampleLightMode"
{
    SubShader
    {
        Pass
        {
              Tags { "LightMode" = "Always" }

              // The rest of the code that defines the Pass goes here.
        }
    }
}
```

## Example in a SubShader block

```hlsl
Shader "Examples/ExampleLightMode"
{
    SubShader
    {
        Pass
        {
            Tags { "LightMode" = "Always" }
            // The rest of the code that defines the Pass goes here.
        }
    }
}
```

## Additional resources

- [SubShader tags in ShaderLab reference](SL-SubShaderTags.html)

- [Pass tags in ShaderLab reference](SL-PassTags.html)

Set the render queue of a shader

Prioritize lower quality shaders with the LOD command
