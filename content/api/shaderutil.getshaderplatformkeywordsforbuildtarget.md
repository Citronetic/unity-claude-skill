This version of Unity is unsupported.



# [ShaderUtil](ShaderUtil.html).GetShaderPlatformKeywordsForBuildTarget




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

public static BuiltinShaderDefine[] GetShaderPlatformKeywordsForBuildTarget([Rendering.ShaderCompilerPlatform](Rendering.ShaderCompilerPlatform.html) shaderCompilerPlatform,
[BuildTarget](BuildTarget.html) buildTarget,
[Rendering.GraphicsTier](Rendering.GraphicsTier.html) tier);






## Declaration

public static BuiltinShaderDefine[] GetShaderPlatformKeywordsForBuildTarget([Rendering.ShaderCompilerPlatform](Rendering.ShaderCompilerPlatform.html) shaderCompilerPlatform,
[BuildTarget](BuildTarget.html) buildTarget);






### Parameters



| Parameter | Description |
| --- | --- |
| shaderCompilerPlatform | The shader compiler platform. |
| buildTarget | The build target. |
| tier | An optional graphics tier. |





### Returns



**BuiltinShaderDefine[]**
        Returns an array of built-in shader defines needed to compile a shader for the given target.





### Description



Gets the platform keywords for a shader, given a shader compiler platform, build target, and optional graphics tier. These platform keywords are necessary to properly compile a shader for a given target.


            
