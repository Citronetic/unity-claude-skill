This version of Unity is unsupported.

Shader methods in URP

Transform positions in a custom URP shader

# Import a file from the URP shader library

The High-Level **Shader**A program that runs on the GPU. [More info](../Shaders.html)
See in [Glossary](../Glossary.html#Shader) Language (HLSL) shader files for the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#Renderpipeline) (URP) are in the `Packages/com.unity.render-pipelines.universal/ShaderLibrary/` folder in your project.

To import a shader file into a custom shader file, add an `#include` directive inside the `HLSLPROGRAM` in your shader file. For example:

```hlsl
HLSLPROGRAM
...
#include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"
...
ENDHLSL
```

You can then use the helper methods from the file. For example:

```hlsl
float3 cameraPosition = GetCameraPositionWS();
```

Refer to [Shader methods in URP](use-built-in-shader-methods.html) for more information about the different shader files.

You can also import shader files from the core Scriptable Render Pipeline (SRP). Refer to [Shader methods in Scriptable Render Pipeline (SRP) Core](https://docs.unity3d.com/Packages/com.unity.render-pipelines.core@17.0/manual/built-in-shader-methods.html).

## Examples

Refer to [Writing custom shaders](writing-custom-shaders-urp.html) for examples of using variables and helper methods from the files in the URP shader library.

## Additional resources

- [include and include_with_pragmas directives in HLSL](https://docs.unity3d.com/Manual/shader-include-directives.html)

Shader methods in URP

Transform positions in a custom URP shader
