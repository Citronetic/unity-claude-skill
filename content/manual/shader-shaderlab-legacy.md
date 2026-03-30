This version of Unity is unsupported.

PackageRequirements block in ShaderLab reference

ShaderLab: legacy fog

# ShaderLab legacy functionality reference

ShaderLab includes a number of “fixed-function style” commands that allow you to write **shaders**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) without using any HLSL code.

**Note**: These commands are legacy, and are documented for backwards compatibility only. If your **Shader object**An instance of the Shader class, a Shader object is container for shader programs and GPU instructions, and information that tells Unity how to use them. Use them with materials to determine the appearance of your scene. [More info](shader-objects.html)
See in [Glossary](Glossary.html#Shaderobject) source file includes HLSL code, Unity ignores these commands completely. If your shader source file does not include HLSL code, Unity compiles these commands into regular shader programs on import.

- [Legacy fog](SL-Fog.html)

- [Legacy lighting](SL-Material.html)

- [Legacy alpha testing](SL-AlphaTest.html)

- [Legacy texture combining](SL-SetTexture.html)

- [Legacy vertex data channel mapping](SL-BindChannels.html)

PackageRequirements block in ShaderLab reference

ShaderLab: legacy fog
