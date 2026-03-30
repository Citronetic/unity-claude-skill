This version of Unity is unsupported.

Surface Shader language reference for the Built-In Render Pipeline

Surface Shader optional directives reference for the Built-In Render Pipeline

# Surface Shader required directives reference for the Built-In Render Pipeline

- `surfaceFunction` - which Cg function has surface **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) code. The function should have the form of `void surf (Input IN, inout SurfaceOutput o)`, where Input is a structure you have defined. Input should contain any texture coordinates and extra automatic variables needed by surface function.

- `lightModel` - lighting model to use. Built-in ones are physically based `Standard` and `StandardSpecular`, as well as simple non-physically based `Lambert` (diffuse) and `BlinnPhong` (specular). See [Custom Lighting Models](SL-SurfaceShaderLighting.html) page for how to write your own.

- `Standard` lighting model uses `SurfaceOutputStandard` output struct, and matches the Standard (metallic workflow) shader in Unity.

- `StandardSpecular` lighting model uses `SurfaceOutputStandardSpecular` output struct, and matches the Standard (specular setup) shader in Unity.

- `Lambert` and `BlinnPhong` lighting models are not physically based (coming from Unity 4.x), but the shaders using them can be faster to render on low-end hardware.

Surface Shader language reference for the Built-In Render Pipeline

Surface Shader optional directives reference for the Built-In Render Pipeline
