This version of Unity is unsupported.

SubShader block in ShaderLab reference

SubShader tags in ShaderLab reference

# LOD directive in ShaderLab reference

This page contains information on using a `LOD` block in your **ShaderLab**Unity’s language for defining the structure of Shader objects. [More info](SL-Shader.html)
See in [Glossary](Glossary.html#ShaderLab) code to assign a **LOD**The *Level Of Detail* (LOD) technique is an optimization that reduces the number of triangles that Unity has to render for a GameObject when its distance from the Camera increases. [More info](LevelOfDetail.html)
See in [Glossary](Glossary.html#LOD) (level of detail) value to a SubShader.

## Render pipeline compatibility

| Feature name | Universal Render PipelineA series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. More infoSee in Glossary (URP) | High Definition Render Pipeline (HDRP) | Custom SRP | Built-in Render Pipeline |
| --- | --- | --- | --- | --- |
| ShaderLab: SubShader LOD block | Yes | Yes | Yes | Yes |

## Syntax

In ShaderLab, you assign a LOD value to a SubShader by placing a `LOD` block inside a `SubShader` block.

| Signature | Function |
| --- | --- |
| LOD [value] | Assigns the given LOD value to the SubShader. |

## LOD values for Unity’s built-in shaders

In the Built-in Render Pipeline, Unity’s built-in **shaders**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) have the following LOD values:

| LOD value | Shader name |
| --- | --- |
| 100 | Unlit/TextureUnlit/ColorUnlit/TransparentUnlit/Transparent Cutout |
| 300 | StandardStandard (Specular Setup)Autodesk Interactive |

## LOD values for legacy shaders

In the Built-in Render Pipeline, Unity’s built-in [legacy shaders](Built-inShaderGuide.html) have the following LOD values:

| LOD value | Shader name |
| --- | --- |
| 100 | VertexLit |
| 150 | DecalReflective VertexLit |
| 200 | Diffuse |
| 250 | Diffuse DetailReflective Bumped UnlitReflective Bumped VertexLit |
| 300 | BumpedSpecular |
| 400 | Bumped Specular |
| 500 | Parallax |
| 600 | Parallax Specular |

## Additional resources

- [Prioritize lower quality shaders with the LOD command](writing-shader-prioritize-lower-quality-shaders.html)

SubShader block in ShaderLab reference

SubShader tags in ShaderLab reference
