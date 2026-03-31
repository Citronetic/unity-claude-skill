This version of Unity is unsupported.



# PlatformKeywordSet





struct in
          UnityEngine.Rendering



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



















### Description



A collection of [ShaderKeyword](Rendering.ShaderKeyword.html) that represents a specific platform variant.





A `PlatformKeywordKeywordSet` represents a part of one [shader variant](../Manual/shader-variants.html), a unique combination of keywords you can use to enable or disable functionality within a shader.

`PlatformKeywordSet` mirrors [ShaderKeywordSet](Rendering.ShaderKeywordSet.html)'s functionality, but does not contain user-defined keywords.
Instead, this struct provides information on the rendering capabilities and rendering API of the target platform.
For example, [framebuffer fetch](../Manual/SL-PlatformDifferences.html) (represented via the keyword [BuiltinShaderDefine.UNITY_FRAMEBUFFER_FETCH_AVAILABLE](Rendering.BuiltinShaderDefine.UNITY_FRAMEBUFFER_FETCH_AVAILABLE.html)) may be available when compiling a shader for [BuildTarget.Android](BuildTarget.Android.html), but not for [BuildTarget.StandaloneWindows](BuildTarget.StandaloneWindows.html).

For more information on shader variants and keywords, refer to [Shader variants and keywords](../Manual/shader-variants-and-keywords.html) and [Changing how shaders work via branching and keywords](../Manual/SL-MultipleProgramVariants.html).

Additional resources: [ShaderKeyword](Rendering.ShaderKeyword.html), [Shader.EnableKeyword](Shader.EnableKeyword.html), [Shader.EnableKeyword](Shader.EnableKeyword.html).





### Public Methods



| Method | Description |
| --- | --- |
| Disable | Disable a specific shader keyword. |
| Enable | Enable a specific shader keyword. |
| IsEnabled | Check whether a specific shader keyword is enabled. |


            
