This version of Unity is unsupported.



# [GraphicsSettings](Rendering.GraphicsSettings.html).SetShaderMode




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

public static void SetShaderMode([Rendering.BuiltinShaderType](Rendering.BuiltinShaderType.html) type,
[Rendering.BuiltinShaderMode](Rendering.BuiltinShaderMode.html) mode);






### Parameters



| Parameter | Description |
| --- | --- |
| type | Built-in shader type to change. |
| mode | Mode to use for built-in shader. |





### Description



Set built-in shader mode.





By default, certain parts of rendering pipeline in Unity (e.g. deferred shading light calculations) use built-in shader.
However, it is possible to setup a custom shader to replace the built-in functionality, or to turn off support for it
altogether.

When setting [BuiltinShaderMode.UseCustom](Rendering.BuiltinShaderMode.UseCustom.html), you also need to indicate which shader to use. See [SetCustomShader](Rendering.GraphicsSettings.SetCustomShader.html).

Additional resources: [GetShaderMode](Rendering.GraphicsSettings.GetShaderMode.html), [SetCustomShader](Rendering.GraphicsSettings.SetCustomShader.html), [Graphics Settings](../Manual/class-GraphicsSettings.html).


            
