This version of Unity is unsupported.



# [BuiltinShaderMode](Rendering.BuiltinShaderMode.html).UseCustom




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



Use custom shader instead of built-in one.





This is useful for implementing custom functionality. For example, by default deferred shading does shading calculations
that match the Standard shader lighting model. But if you'd want to use a different BRDF, or use a custom deferred G-buffer
layout, then you'd need to override [BuiltinShaderType.DeferredShading](Rendering.BuiltinShaderType.DeferredShading.html) with your own custom shader.

Additional resources: [GraphicsSettings.SetShaderMode](Rendering.GraphicsSettings.SetShaderMode.html), GraphicsSettings.SetCustomMode, [BuiltinShaderType](Rendering.BuiltinShaderType.html), [Graphics Settings](../Manual/class-GraphicsSettings.html).


            
