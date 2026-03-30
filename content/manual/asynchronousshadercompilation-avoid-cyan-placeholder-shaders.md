This version of Unity is unsupported.

Detect asynchronous shader compilation

Reducing the size or number of shaders

# Troubleshooting asynchronous shader compilation

Advanced rendering solutions rely on generating data once and reusing it in later frames. If the Editor uses a placeholder **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) during this process, it might pollute the generated data. If this happens, you can see the cyan color or other rendering artifacts in your **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene), even after the shader variants have finished compiling.

To avoid this, you can [Disable asynchronous shader compilation](AsynchronousShaderCompilation-enable-or-disable.html).

## Customize compile time rendering

You can make your custom tools draw something other than the placeholder shader for each material. This way, you can avoid rendering in plain cyan, and instead draw something else while the shader variant compiles.

To check if a specific shader variant has compiled, see [Detecting asynchronous shader compilation](AsynchronousShaderCompilation-detect.html).

To trigger compilation manually, you can use [`ShaderUtil.CompilePass`](../ScriptReference/ShaderUtil.CompilePass.html). This way, you can avoid rendering with the cyan placeholder, and draw something else while the shader variant compiles.

Detect asynchronous shader compilation

Reducing the size or number of shaders
