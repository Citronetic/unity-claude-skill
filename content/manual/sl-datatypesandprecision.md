This version of Unity is unsupported.

Shader input

Use 16-bit precision in shaders

# HLSL data types in Unity

Unity supports HLSL data types, but handles some differently to provide better support on mobile platforms.

## Floating point suffixes

Unity doesn’t support [HLSL floating point suffixes](https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-appendix-grammar#floating-point-numbers).

For example if you use `2.0h` to create a half precision float, Unity treats it as a high precision float instead.

## Floating point exception handling

Test your **shaders**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) on the target platform to know how it handles floating point exceptions (for example, division by zero).

Desktop GPUs that support Direct3D 10 support the IEEE 754 floating point standard. This means that float numbers behave exactly as they do in regular programming languages on the CPU.

Mobile GPUs might not support that standard and handle floating point exceptions differently. For example, division by zero might result in `NaN`, zero or another value.

## Additional resources

- [Use 16-bit precision in shaders](SL-Use16BitPrecisionInShaders.html)

- [Data Types (HLSL)](https://learn.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-data-types) in the Microsoft HLSL documentation.

- [Writing shaders for different graphics APIs](SL-PlatformDifferences.html)

- [Optimizing Shader Runtime Performance](SL-ShaderPerformance.html)

Shader input

Use 16-bit precision in shaders
