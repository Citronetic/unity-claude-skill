This version of Unity is unsupported.



# [ShaderData.Pass](ShaderData.Pass.html).PreprocessVariant




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

public [ShaderData.PreprocessedVariant](ShaderData.PreprocessedVariant.html) PreprocessVariant([Rendering.ShaderType](Rendering.ShaderType.html) shaderType,
string[] keywords,
[Rendering.ShaderCompilerPlatform](Rendering.ShaderCompilerPlatform.html) shaderCompilerPlatform,
[BuildTarget](BuildTarget.html) buildTarget,
bool stripLineDirectives);






## Declaration

public [ShaderData.PreprocessedVariant](ShaderData.PreprocessedVariant.html) PreprocessVariant([Rendering.ShaderType](Rendering.ShaderType.html) shaderType,
string[] keywords,
[Rendering.ShaderCompilerPlatform](Rendering.ShaderCompilerPlatform.html) shaderCompilerPlatform,
[BuildTarget](BuildTarget.html) buildTarget,
[Rendering.GraphicsTier](Rendering.GraphicsTier.html) tier,
bool stripLineDirectives);






## Declaration

public [ShaderData.PreprocessedVariant](ShaderData.PreprocessedVariant.html) PreprocessVariant([Rendering.ShaderType](Rendering.ShaderType.html) shaderType,
string[] keywords,
[Rendering.ShaderCompilerPlatform](Rendering.ShaderCompilerPlatform.html) shaderCompilerPlatform,
[BuildTarget](BuildTarget.html) buildTarget,
BuiltinShaderDefine[] platformKeywords,
bool stripLineDirectives);






## Declaration

public [ShaderData.PreprocessedVariant](ShaderData.PreprocessedVariant.html) PreprocessVariant([Rendering.ShaderType](Rendering.ShaderType.html) shaderType,
string[] keywords,
[Rendering.ShaderCompilerPlatform](Rendering.ShaderCompilerPlatform.html) shaderCompilerPlatform,
[BuildTarget](BuildTarget.html) buildTarget,
BuiltinShaderDefine[] platformKeywords,
[Rendering.GraphicsTier](Rendering.GraphicsTier.html) tier,
bool stripLineDirectives);






### Parameters



| Parameter | Description |
| --- | --- |
| shaderType | The shader type within this pass to preprocess. (e.g. Vertex, Fragment, etc.)  Some platforms (OpenGLCore, GLES3x, Switch and Vulkan) include all stages within the Vertex shader type. |
| keywords | The keywords to use during the preprocessing. |
| shaderCompilerPlatform | The shader compiler platform to preprocess for. |
| buildTarget | The build target to preprocess for. |
| tier | An optional graphics tier. |
| platformKeywords | An optional set of platform keywords. If you do not provide any, Unity uses the default keywords for the given platform, target, and tier. |
| stripLineDirectives | Whether to skip line number directives in the preprocessed output. When enabled, Unity produces more human-readable preprocessed source code and skips the line directives when the file name doesn't change. Otherwise, this method produces the exact preprocessed source that Unity passes to the compiler. |





### Returns



**PreprocessedVariant**
        The preprocessed variant result. If the pass doesn't include the requested program, or if the pass is not the correct type, this function still succeeds but returns empty preprocessed code.





### Description



Preprocesses a shader variant for this shader pass and returns the preprocessed code.


            
