This version of Unity is unsupported.

Name directive in ShaderLab reference

Shader code blocks in ShaderLab reference

# Pass tags in ShaderLab reference

This page contains information on using a `Tags` block in your **ShaderLab**Unity’s language for defining the structure of Shader objects. [More info](SL-Shader.html)
See in [Glossary](Glossary.html#ShaderLab) code to assign tags to a Pass. It also contains information on using the `LightMode` tag.

For information on how a **Shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) object works, and the relationship between **Shader objects**An instance of the Shader class, a Shader object is container for shader programs and GPU instructions, and information that tells Unity how to use them. Use them with materials to determine the appearance of your scene. [More info](shader-objects.html)
See in [Glossary](Glossary.html#Shaderobject), SubShaders and Passes, see [Shader object fundamentals](Shaders.html).

## Render pipeline compatibility

| Feature name | Universal Render PipelineA series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. More infoSee in Glossary (URP) | High Definition Render Pipeline (HDRP) | Custom SRP | Built-in Render Pipeline |
| --- | --- | --- | --- | --- |
| ShaderLab: Pass Tags block | Yes | Yes | Yes | Yes |
| ShaderLab: LightMode Pass tag | Yes | Yes | Yes | Yes |

## Syntax

| Signature | Function |
| --- | --- |
| Tags {"<name1>" = "<value1>" "<name2>" = "<value2>"} | Applies the given tags to the Pass.You can define as many tags as you like. |

### LightMode tag

| Signature | Function |
| --- | --- |
| “LightMode” = “[value]” | Sets the LightMode value for this Pass. |

Valid values for this tag depend on the render pipeline.

#### LightMode tag valid values

These are the valid values for the `LightMode` Pass tag in the Built-in Render Pipeline. For more information on the LightMode tag, see [ShaderLab: using Pass tags](SL-PassTags.html).

| Value | Function | Supported in Built-In Render Pipeline | Supported in HDRP | Supported in URP |
| --- | --- | --- | --- | --- |
| Always | Always rendered; does not apply any lighting. This is the default value. | Yes | No | No |
| ForwardBase | Used in Forward renderingA rendering path that renders each object in one or more passes, depending on lights that affect the object. Lights themselves are also treated differently by Forward Rendering, depending on their settings and intensity. More infoSee in Glossary; applies ambient, main directional light, vertex/SH lights and lightmapsA pre-rendered texture that contains the effects of light sources on static objects in the scene. Lightmaps are overlaid on top of scene geometry to create the effect of lighting. More infoSee in Glossary. | Yes | No | No |
| ForwardAdd | Used in Forward rendering; applies additive per-pixel lights, one Pass per light. | Yes | No | No |
| Deferred | Used in Deferred ShadingA rendering path in the Built-in Render Pipeline that places no limit on the number of Lights that can affect a GameObject. All Lights are evaluated per-pixel, which means that they all interact correctly with normal maps and so on. Additionally, all Lights can have cookies and shadows. More infoSee in Glossary; renders G-buffer. | Yes | No | No |
| ShadowCaster | Renders object depth into the shadowmap or a depth texture. | Yes | Yes | Yes |
| MotionVectors | Used to calculate per-object motion vectors. | Yes | Yes | Yes |
| Vertex | Used in legacy Vertex Lit rendering when the object is not lightmapped; applies all vertex lights. | Yes | No | No |
| VertexLMRGBM | Used in legacy Vertex Lit rendering when the object is lightmapped, and on platforms where the lightmap is RGBM encoded (PC & console). | Yes | No | No |
| VertexLM | Used in legacy Vertex Lit rendering when the object is lightmapped, and on platforms where lightmap is double-LDR encoded (mobile platforms). | Yes | No | No |
| Meta | This Pass is not used during regular rendering, only for lightmap baking or EnlightenA lighting system by Geomerics used in Unity for Enlighten Realtime Global Illumination. More infoSee in Glossary Realtime Global IlluminationA group of techniques that model both direct and indirect lighting to provide realistic lighting results.See in Glossary. For more information, see Lightmapping and shaders. | Yes | Yes | Yes |

### PassFlags tag

In the Built-in Render Pipeline, use the `PassFlags` Pass tag to specify what data Unity provides to the Pass.

| Value | Function |
| --- | --- |
| OnlyDirectional | Valid only in the Built-in Render Pipeline, when the rendering path is set to Forward, in a Pass with a LightMode tag value of ForwardBase.Unity provides only the main directional light and ambient/light probe data to this Pass. This means that data of non-important lights is not passed into vertex-light or spherical harmonics shader variables. See Forward rendering path for details. |

#### Example

```hlsl
Shader "Examples/ExamplePassFlag"
{
    SubShader
    {
        Pass
        {
              Tags { "LightMode" = "ForwardBase" "PassFlags" = "OnlyDirectional" }

              // The rest of the code that defines the Pass goes here.
        }
    }
}
```

### RequireOptions tag

In the Built-in Render Pipeline, the `RequireOptions` Pass tag enables or disables a Pass based on **project settings**A broad collection of settings which allow you to configure how Physics, Audio, Networking, Graphics, Input and many other areas of your project behave. [More info](comp-ManagerGroup.html)
See in [Glossary](Glossary.html#ProjectSettings).

| Value | Function |
| --- | --- |
| SoftVegetation | Render this Pass only if QualitySettings-softVegetation is enabled. |

## Additional resources

- [Configure if or when Unity uses a shader](writing-shader-tags.html)

Name directive in ShaderLab reference

Shader code blocks in ShaderLab reference
