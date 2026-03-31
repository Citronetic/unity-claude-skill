This version of Unity is unsupported.



# [ShaderData.Pass](ShaderData.Pass.html).CompileVariant




                  Leave feedback




                  Suggest a change












## Success!



Thank you for helping us improve the quality of Unity Documentation. Although we cannot accept all submissions, we do read each suggested change from our users and will make updates where applicable.

                      Close




## Submission failed



For some reason your suggested change could not be submitted. Please <a>try again</a> in a few minutes. And thank you for taking the time to help us improve the quality of Unity Documentation.

                      Close


                      Your name


                      Your email


                      Suggestion*

                      Submit suggestion


Cancel















## Declaration

public [ShaderData.VariantCompileInfo](ShaderData.VariantCompileInfo.html) CompileVariant([Rendering.ShaderType](Rendering.ShaderType.html) shaderType,
string[] keywords,
[Rendering.ShaderCompilerPlatform](Rendering.ShaderCompilerPlatform.html) shaderCompilerPlatform,
[BuildTarget](BuildTarget.html) buildTarget);






## Declaration

public [ShaderData.VariantCompileInfo](ShaderData.VariantCompileInfo.html) CompileVariant([Rendering.ShaderType](Rendering.ShaderType.html) shaderType,
string[] keywords,
[Rendering.ShaderCompilerPlatform](Rendering.ShaderCompilerPlatform.html) shaderCompilerPlatform,
[BuildTarget](BuildTarget.html) buildTarget,
bool forExternalTool);






## Declaration

public [ShaderData.VariantCompileInfo](ShaderData.VariantCompileInfo.html) CompileVariant([Rendering.ShaderType](Rendering.ShaderType.html) shaderType,
string[] keywords,
[Rendering.ShaderCompilerPlatform](Rendering.ShaderCompilerPlatform.html) shaderCompilerPlatform,
[BuildTarget](BuildTarget.html) buildTarget,
[Rendering.GraphicsTier](Rendering.GraphicsTier.html) tier);






## Declaration

public [ShaderData.VariantCompileInfo](ShaderData.VariantCompileInfo.html) CompileVariant([Rendering.ShaderType](Rendering.ShaderType.html) shaderType,
string[] keywords,
[Rendering.ShaderCompilerPlatform](Rendering.ShaderCompilerPlatform.html) shaderCompilerPlatform,
[BuildTarget](BuildTarget.html) buildTarget,
[Rendering.GraphicsTier](Rendering.GraphicsTier.html) tier,
bool forExternalTool);






## Declaration

public [ShaderData.VariantCompileInfo](ShaderData.VariantCompileInfo.html) CompileVariant([Rendering.ShaderType](Rendering.ShaderType.html) shaderType,
string[] keywords,
[Rendering.ShaderCompilerPlatform](Rendering.ShaderCompilerPlatform.html) shaderCompilerPlatform,
[BuildTarget](BuildTarget.html) buildTarget,
BuiltinShaderDefine[] platformKeywords);






## Declaration

public [ShaderData.VariantCompileInfo](ShaderData.VariantCompileInfo.html) CompileVariant([Rendering.ShaderType](Rendering.ShaderType.html) shaderType,
string[] keywords,
[Rendering.ShaderCompilerPlatform](Rendering.ShaderCompilerPlatform.html) shaderCompilerPlatform,
[BuildTarget](BuildTarget.html) buildTarget,
BuiltinShaderDefine[] platformKeywords,
bool forExternalTool);






## Declaration

public [ShaderData.VariantCompileInfo](ShaderData.VariantCompileInfo.html) CompileVariant([Rendering.ShaderType](Rendering.ShaderType.html) shaderType,
string[] keywords,
[Rendering.ShaderCompilerPlatform](Rendering.ShaderCompilerPlatform.html) shaderCompilerPlatform,
[BuildTarget](BuildTarget.html) buildTarget,
BuiltinShaderDefine[] platformKeywords,
[Rendering.GraphicsTier](Rendering.GraphicsTier.html) tier);






## Declaration

public [ShaderData.VariantCompileInfo](ShaderData.VariantCompileInfo.html) CompileVariant([Rendering.ShaderType](Rendering.ShaderType.html) shaderType,
string[] keywords,
[Rendering.ShaderCompilerPlatform](Rendering.ShaderCompilerPlatform.html) shaderCompilerPlatform,
[BuildTarget](BuildTarget.html) buildTarget,
BuiltinShaderDefine[] platformKeywords,
[Rendering.GraphicsTier](Rendering.GraphicsTier.html) tier,
bool forExternalTool);






### Parameters



| Parameter | Description |
| --- | --- |
| shaderType | The shader type within this pass to compile. (e.g. Vertex, Fragment, etc.)  Some platforms (OpenGLCore, GLES3x, Switch and Vulkan) include all stages within the Vertex shader type. |
| keywords | The keywords to use during the compilation. |
| shaderCompilerPlatform | The shader compiler platform to compile for. |
| buildTarget | The build target to compile for. |
| forExternalTool | Indicates whether to prepare the bytecode for Unity or to use with external tools. |
| tier | An optional graphics tier. |
| platformKeywords | An optional set of platform keywords. If you do not provide any, Unity uses the default keywords for the given platform, target, and tier. |





### Returns



**VariantCompileInfo**
        The compiled variant result, including resource layout information and bytecode. If the pass doesn't include the requested program, or if the pass is not the correct type, this function still succeeds but returns empty bytecode.





### Description



Compiles a shader variant for this shader pass and returns its bytecode and resource layout.


            
