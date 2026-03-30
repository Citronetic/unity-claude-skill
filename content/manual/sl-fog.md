This version of Unity is unsupported.

ShaderLab legacy functionality reference

ShaderLab: legacy lighting

# ShaderLab: legacy fog

**Note**: The **ShaderLab**Unity’s language for defining the structure of Shader objects. [More info](SL-Shader.html)
See in [Glossary](Glossary.html#ShaderLab) functionality on this page is legacy, and is documented for backwards compatibility only. If your **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) source file includes HLSL code, Unity ignores these commands completely. If your shader source file does not include HLSL code, Unity compiles these commands into regular shader programs on import.

## Render pipeline compatibility

| Feature name | Built-in Render PipelineA series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. More infoSee in Glossary | Universal Render Pipeline (URP) | High Definition Render Pipeline (HDRP) | Custom SRP |
| --- | --- | --- | --- | --- |
| Legacy fog | Yes | No | No | No |

# Overview

Use the Fog command to enable or disable Unity’s built-in fog, in shaders that are written using legacy fixed-function style commands.

Configure the **project settings**A broad collection of settings which allow you to configure how Physics, Audio, Networking, Graphics, Input and many other areas of your project behave. [More info](comp-ManagerGroup.html)
See in [Glossary](Glossary.html#ProjectSettings) for the built-in fog effect using the [RenderSettings](../ScriptReference/RenderSettings.html) class, or the [Lighting window](lighting-window.html), and then use this command to enable or disable fog in a given Pass.

Fogging blends the color of the generated pixels down towards a given color, based on the distance from the **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera). Fogging does not modify a blended **pixel**The smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. [More info](ShadowPerformance.html)
See in [Glossary](Glossary.html#pixel)’s alpha value, only its RGB components.

## Valid parameter values

| Parameter | Value | Function |
| --- | --- | --- |
| Mode | Off | Do not apply built-in fog to this Pass. |
|  | Global | Apply built-in fog to this Pass, based on the project settings.Note that if fog is disabled in the project settings, Unity will not apply it to this Pass. |

## Examples

This example code demonstrates the syntax for using this command in a Pass block.

```hlsl
Shader "Examples/FogExample"
{
    SubShader
    {
         // The rest of the code that defines the SubShader goes here.

        Pass
        {
              Fog Off

              // The rest of the code that defines the Pass goes here.
        }
    }
}
```

ShaderLab legacy functionality reference

ShaderLab: legacy lighting
