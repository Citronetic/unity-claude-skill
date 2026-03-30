This version of Unity is unsupported.

Branch based on shader pass or shader stage

Introduction to shader tags

# Configure when and if Unity uses a shader

Resources for using tags and blocks in a **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) to configure if and when Unity uses the shader.

| Page | Description |
| --- | --- |
| Introduction to shader tags | Understand creating tags, accessing their values in scriptsA piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. More infoSee in Glossary, and how tags vary by pipeline. |
| Add a shader tag to a SubShader or Pass | Assign tags to a subshader or a shader pass by placing a Tags block. |
| Set a shader to require URP or HDRP | Use a RenderPipeline tag to require the Universal Render PipelineA series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. More infoSee in Glossary or the High Definition Render Pipeline. |
| Set a shader to require a graphics API or platform | Use a #pragma directive to target a graphics API or platform. |
| Set a shader to require a shader model or GPU feature | Use a #pragma directive to target a shader model or GPU feature. |
| set a shader to require a package | Use a PackageRequirements block to add package requirements to a SubShader or Pass. |
| Set the render queue of a shader | Use a Queue tag to set when Unity runs a shader. |
| Set when Unity runs a shader pass via a LightMode tag | Use a LightMode tag to set when Unity runs a shader. |
| Prioritize lower quality shaders with the LOD command | Use a LOD command to fine-tune shader performance on different hardware. |
| Disable dynamic batching of a shader | Use a DisableBatching tag to prevent Unity from applying dynamic batchingAn automatic Unity process which attempts to render multiple meshes as if they were a single mesh for optimized graphics performance. The technique transforms all of the GameObject vertices on the CPU and groups many similar vertices together. More infoSee in Glossary to geometry. |
| Get tag values in C# | Use APIs to get the value of tags in a subshader or a shader pass |
| Troubleshooting package requirement definitions | Solve common issues with the PackageRequirements block, such as incorrect version values. |

Branch based on shader pass or shader stage

Introduction to shader tags
