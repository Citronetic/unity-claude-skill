This version of Unity is unsupported.

Reducing shader variants in URP

Check how many shader variants your build has in URP

# Introduction to reducing shader variants in URP

The **shaders**A program that runs on the GPU. [More info](../Shaders.html)
See in [Glossary](../Glossary.html#Shader) in the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#Renderpipeline) (URP) use [shader keywords](https://docs.unity3d.com/Manual/shader-keywords) to support many different features, which can mean Unity compiles a lot of [shader variants](https://docs.unity3d.com/Manual/shader-variants)A verion of a shader program that Unity generates according to a specific combination of shader keywords and their status. A Shader object can contain multiple shader variants. [More info](../shader-variants.html)
See in [Glossary](../Glossary.html#Shadervariant).

If you disable features in the [URP Asset](universalrp-asset.html), URP automatically excludes (‘strips’) the related shader variants. This speeds up builds, and reduces memory usage and file sizes.

For example, if your project doesn’t use shadows for directional lights, by default Unity still includes variants that support directional light shadows in your build. If you disable **Cast Shadows** in the URP Asset, URP strips these variants.

If you want to examine the code that strips shaders in URP, check the `Editor/ShaderPreprocessor.cs` file. The file uses the [IPreprocessShaders](https://docs.unity3d.com/ScriptReference/Build.IPreprocessShaders.html) API.

For more information on stripping shader variants, refer to the following pages:

- [Check how many shader variants you have](../shader-how-many-variants.html).

- [General guidance on shader stripping](../shader-variant-stripping.html), which applies to all render pipelines.

## Additional resources

- [Troubleshooting shaders](../shader-troubleshooting.html)

Reducing shader variants in URP

Check how many shader variants your build has in URP
