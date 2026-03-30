This version of Unity is unsupported.

Shader object fundamentals

Create a shader file

# Writing a custom shader in ShaderLab and HLSL

Resources and techniques for writing **Shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) objects, subshaders and shader passes in **ShaderLab**Unity’s language for defining the structure of Shader objects. [More info](SL-Shader.html)
See in [Glossary](Glossary.html#ShaderLab) and HLSL.

| Page | Description |
| --- | --- |
| Create a shader file | Create a customshader asset file either using the Unity Editor or manually. |
| Add a subshader in a custom shader | Use a SubShader block to add one or more sections that define different GPU settings and shader programs for different hardware, render pipelinesA series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. More infoSee in Glossary, and runtime settings. |
| Add a shader pass in a custom shader | Use a Pass block to write instructions for setting the state of the GPU, and the shader programs that run on the GPU. |
| Include a shader pass with the UsePass command | Insert a named Pass from another Shader objectAn instance of the Shader class, a Shader object is container for shader programs and GPU instructions, and information that tells Unity how to use them. Use them with materials to determine the appearance of your scene. More infoSee in Glossary, to avoid reduce code duplication in shader source files. |
| Writing HLSL shader programs | Resources for writing HLSL shader programs inside a Pass block in a custom ShaderLab shader. |
| Setting the render state on the GPU | Resources for using commands in a subshader or shader pass that change the render state on the GPU. |

## Additional resources

- [Shader languages reference](shaders-reference.html)

- [Writing custom shaders in URP](urp/writing-custom-shaders-urp.html)

- [Writing custom shaders in the Built-In Render Pipeline](writing-shaders-birp.html)

- [HLSL shader examples in the Built-In Render Pipeline](built-in-shader-examples.html)

Shader object fundamentals

Create a shader file
