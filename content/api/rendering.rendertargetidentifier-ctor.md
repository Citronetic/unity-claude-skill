This version of Unity is unsupported.



# RenderTargetIdentifier Constructor




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

public RenderTargetIdentifier([Rendering.BuiltinRenderTextureType](Rendering.BuiltinRenderTextureType.html) type);






## Declaration

public RenderTargetIdentifier(string name);






## Declaration

public RenderTargetIdentifier(int nameID);






## Declaration

public RenderTargetIdentifier([Texture](Texture.html) tex);






## Declaration

public RenderTargetIdentifier([Rendering.RenderTargetIdentifier](Rendering.RenderTargetIdentifier.html) renderTargetIdentifier,
int mipLevel,
[CubemapFace](CubemapFace.html) cubeFace,
int depthSlice);






### Parameters



| Parameter | Description |
| --- | --- |
| type | Built-in temporary render texture type. |
| name | Temporary render texture name. |
| nameID | Temporary render texture name (as integer, see Shader.PropertyToID). |
| tex | RenderTexture or Texture object to use. |
| mipLevel | MipLevel of the RenderTexture to use. |
| cubemapFace | Cubemap face of the Cubemap RenderTexture to use. |
| depthSlice | Depth slice of the Array RenderTexture to use. The symbolic constant RenderTargetIdentifier.AllDepthSlices indicates that all slices should be bound for rendering. The default value is 0. |
| renderTargetIdentifier | An existing render target identifier. |





### Description



Creates a render target identifier.





Textures can be identified in a number of ways, for example a [RenderTexture](RenderTexture.html) object, or a [Texture](Texture.html) object, or one of built-in render textures ([BuiltinRenderTextureType](Rendering.BuiltinRenderTextureType.html)), or a temporary render texture with a name (that was created using [CommandBuffer.GetTemporaryRT](Rendering.CommandBuffer.GetTemporaryRT.html)).

RenderTargetIdentifier can be implicitly created from a RenderTexture reference, or a Texture reference, or a BuiltinRenderTextureType, or a name.

A RenderTargetIdentifier created from Texture reference is only valid when passed to [CommandBuffer.SetGlobalTexture](Rendering.CommandBuffer.SetGlobalTexture.html)

See Also: [CommandBuffer.SetRenderTarget](Rendering.CommandBuffer.SetRenderTarget.html), [CommandBuffer.SetGlobalTexture](Rendering.CommandBuffer.SetGlobalTexture.html).


            
