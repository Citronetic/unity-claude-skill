This version of Unity is unsupported.

Enable or disable asynchronous shader compilation

Troubleshooting asynchronous shader compilation

# Detect asynchronous shader compilation

You can use C# APIs to monitor the state of asynchronous **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) compilation, and perform operations when this state changes.

This is most likely useful in [advanced rendering](AsynchronousShaderCompilation-avoid-cyan-placeholder-shaders.html); if the placeholder shader pollutes your generated data, you can wait until compilation is complete, discard the polluted data, and regenerate a new set with the correct shader variants.

If you already know which material you are interested in, you can use `ShaderUtil.IsPassCompiled` to check the compilation status of the shader variant. When the status changes *Uncompiled* to *Compiled*, compilation is complete.

If you do not know which material you are interested in, or if you are interested in more than one material, you can use `ShaderUtil.anythingCompiling` to detect whether Unity is compiling any shader variants asynchronously. When this changes from `true` to `false`, all current compilation is complete.

Enable or disable asynchronous shader compilation

Troubleshooting asynchronous shader compilation
