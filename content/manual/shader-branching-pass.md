This version of Unity is unsupported.

Branch based on Unity version

Configure when and if Unity uses a shader

# Branch based on shader pass or shader stage

## Shader stage being compiled

Preprocessor macros `SHADER_STAGE_VERTEX`, `SHADER_STAGE_FRAGMENT`, `SHADER_STAGE_DOMAIN`, `SHADER_STAGE_HULL`, `SHADER_STAGE_GEOMETRY`, `SHADER_STAGE_COMPUTE` are defined when compiling each **Shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) stage. Typically they are useful when sharing Shader code between **pixel**The smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. [More info](ShadowPerformance.html)
See in [Glossary](Glossary.html#pixel) Shaders and compute Shaders, to handle cases where some things have to be done slightly differently.

## Surface Shader pass

When [Surface Shaders](SL-SurfaceShaders.html)A streamlined way of writing shaders for the Built-in Render Pipeline. [More info](SL-SurfaceShaders.html)
See in [Glossary](Glossary.html#SurfaceShader) are compiled, they generate a lot of code for various passes to do lighting. When compiling each pass, one of the following macros is defined:

| Macro: | Use: |
| --- | --- |
| UNITY_PASS_FORWARDBASE | Forward renderingA rendering path that renders each object in one or more passes, depending on lights that affect the object. Lights themselves are also treated differently by Forward Rendering, depending on their settings and intensity. More infoSee in Glossary base pass (main directional light, lightmaps, SH). |
| UNITY_PASS_FORWARDADD | Forward rendering additive pass (one light per pass). |
| UNITY_PASS_DEFERRED | Deferred shadingA rendering path in the Built-in Render Pipeline that places no limit on the number of Lights that can affect a GameObject. All Lights are evaluated per-pixel, which means that they all interact correctly with normal maps and so on. Additionally, all Lights can have cookies and shadows. More infoSee in Glossary pass (renders G-buffer). |
| UNITY_PASS_SHADOWCASTER | Shadow caster and depth Texture rendering pass. |

## Additional resources

- [HLSL pragma directives reference](SL-PragmaDirectives.html)

- [HLSL pragma target command reference](SL-Pragma-target.html)

- [HLSL pragma require command reference](SL-Pragma-require.html)

Branch based on Unity version

Configure when and if Unity uses a shader
