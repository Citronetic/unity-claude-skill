This version of Unity is unsupported.

Branch in a shader via built-in macros

Branch based on shader model

# Platform and graphics API macros

| Macro: | Target platform: |
| --- | --- |
| SHADER_API_D3D11 | Direct3D 11 |
| SHADER_API_GLCORE | Desktop OpenGL “core” (GL 3/4) |
| SHADER_API_GLES3 | OpenGL ES 3.0/3.1 |
| SHADER_API_METAL | iOS/Mac Metal |
| SHADER_API_VULKAN | Vulkan |
| SHADER_API_D3D11_9X | Direct3D 11 “feature level 9.x” target for Universal Windows Platform |
| SHADER_API_DESKTOP | Windows, Mac and Linux desktop platforms, Web |
| SHADER_API_MOBILE | iOS and Android mobile platforms, tvOS |
| SHADER_API_WEBGPU | Web |

Additionally, `SHADER_TARGET_GLSL` is defined when the target shading language is GLSL (always true for OpenGL/GLES platforms).

## Additional resources

- [HLSL pragma directives reference](SL-PragmaDirectives.html)

- [HLSL pragma target command reference](SL-Pragma-target.html)

- [HLSL pragma require command reference](SL-Pragma-require.html)

Branch in a shader via built-in macros

Branch based on shader model
