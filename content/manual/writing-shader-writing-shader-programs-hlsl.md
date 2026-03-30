This version of Unity is unsupported.

Include a shader pass with the UsePass command

Shader program fundamentals

# Writing HLSL shader programs

Resources for writing HLSL **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) programs inside a `Pass` block in a custom **ShaderLab**Unity’s language for defining the structure of Shader objects. [More info](SL-Shader.html)
See in [Glossary](Glossary.html#ShaderLab) shader.

| Page | Description |
| --- | --- |
| Shader program fundamentals | Learn about writing shader programs in HLSL in Unity, and vertex and fragment shaders. |
| Add an HLSL shader program | Use the HLSLPROGRAM directive to add a shader program to a shader pass. |
| Duplicate HLSL in multiple programs | Use the HLSLINCLUDE directive to add a block of HLSL code that the compiler duplicates in each shader program. |
| Shader input | Resources for HLSL data types, using 16-bit precision, input vertex data, and texture samplers. |
| Include another HLSL file in a shader | Use the HLSL #include directive, or the #include_with_pragmas directive if you want to share #pragma directives between multiple files. |
| Pass information to the shader compiler | Use the #pragma or #define_for_platform_compiler directives to pass information to the shader compiler. |
| Writing shaders for different graphics APIs | Write shaders to take into account how graphics rendering differs between different graphics APIs. |
| GLSL in Unity | If a platform supports OpenGL Core and OpenGL ES, you can write OpenGL Shading Language (GLSL) shader programs in Unity. |

## Additional resources

- [Shader languages reference](shaders-reference.html)

- [HLSL pragma directives reference](SL-PragmaDirectives.html)

- [HLSL shader examples in the Built-In Render Pipeline](built-in-shader-examples.html)

Include a shader pass with the UsePass command

Shader program fundamentals
