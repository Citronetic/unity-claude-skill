This version of Unity is unsupported.



# [MaterialPropertyBlock](MaterialPropertyBlock.html).SetTexture




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

public void SetTexture(string name,
[Texture](Texture.html) value);






## Declaration

public void SetTexture(int nameID,
[Texture](Texture.html) value);






## Declaration

public void SetTexture(string name,
[RenderTexture](RenderTexture.html) value,
[Rendering.RenderTextureSubElement](Rendering.RenderTextureSubElement.html) element);






## Declaration

public void SetTexture(int nameID,
[RenderTexture](RenderTexture.html) value,
[Rendering.RenderTextureSubElement](Rendering.RenderTextureSubElement.html) element);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of the property. |
| nameID | The name ID of the property retrieved by Shader.PropertyToID. |
| value | The Texture to set. |
| element | Optional parameter that specifies the type of data to set from the RenderTexture. |





### Description



Set a texture property.





Adds a property to the block. If a texture property with the given name already exists, the old value is replaced.

By specifying a `RenderTextureSubElement`, you can indicate which type of data to set from the RenderTexture. The possible options are: [RenderTextureSubElement.Color](Rendering.RenderTextureSubElement.Color.html), [RenderTextureSubElement.Depth](Rendering.RenderTextureSubElement.Depth.html), and [RenderTextureSubElement.Stencil](Rendering.RenderTextureSubElement.Stencil.html).

Additional resources: [SetColor](MaterialPropertyBlock.SetColor.html), [SetVector](MaterialPropertyBlock.SetVector.html), [SetFloat](MaterialPropertyBlock.SetFloat.html), [SetMatrix](MaterialPropertyBlock.SetMatrix.html), [RenderTextureSubElement](Rendering.RenderTextureSubElement.html).


            
