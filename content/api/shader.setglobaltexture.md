This version of Unity is unsupported.



# [Shader](Shader.html).SetGlobalTexture




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




                [Switch to Manual](../Manual/class-Shader.html)










## Declaration

public static void SetGlobalTexture(string name,
[Texture](Texture.html) value);






## Declaration

public static void SetGlobalTexture(int nameID,
[Texture](Texture.html) value);






## Declaration

public static void SetGlobalTexture(string name,
[RenderTexture](RenderTexture.html) value,
[Rendering.RenderTextureSubElement](Rendering.RenderTextureSubElement.html) element);






## Declaration

public static void SetGlobalTexture(int nameID,
[RenderTexture](RenderTexture.html) value,
[Rendering.RenderTextureSubElement](Rendering.RenderTextureSubElement.html) element);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | The name ID of the property retrieved by Shader.PropertyToID. |
| name | The name of the property. |
| value | The texture to set. |
| element | Optional parameter that specifies the type of data to set from the RenderTexture. |





### Description



Sets a global texture property for all shaders.





Global properties are used if a shader needs them but the material does
not have them defined (for example, if the shader does not expose them
in `Properties` block).

Usually this is used if you have a set of custom shaders that all use
the same "global" texture (for example, custom diffuse-lighting cubemap).
Then you can set the global property from script and don't have to setup
the same texture in all materials.

By specifying a `RenderTextureSubElement`, you can indicate which type of data to set from the RenderTexture. The possible options are: [RenderTextureSubElement.Color](Rendering.RenderTextureSubElement.Color.html), [RenderTextureSubElement.Depth](Rendering.RenderTextureSubElement.Depth.html), and [RenderTextureSubElement.Stencil](Rendering.RenderTextureSubElement.Stencil.html).

Additional resources: [SetGlobalColor](Shader.SetGlobalColor.html), [SetGlobalFloat](Shader.SetGlobalFloat.html); [Material](Material.html) class, [ShaderLab documentation](../Manual/Shaders.html), [RenderTextureSubElement](Rendering.RenderTextureSubElement.html).


            
