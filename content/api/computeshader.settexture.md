This version of Unity is unsupported.



# [ComputeShader](ComputeShader.html).SetTexture




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




                [Switch to Manual](../Manual/class-ComputeShader.html)










## Declaration

public void SetTexture(int kernelIndex,
string name,
[Texture](Texture.html) texture);






## Declaration

public void SetTexture(int kernelIndex,
int nameID,
[Texture](Texture.html) texture);






## Declaration

public void SetTexture(int kernelIndex,
string name,
[Texture](Texture.html) texture,
int mipLevel);






## Declaration

public void SetTexture(int kernelIndex,
int nameID,
[Texture](Texture.html) texture,
int mipLevel);






## Declaration

public void SetTexture(int kernelIndex,
string name,
[RenderTexture](RenderTexture.html) texture,
int mipLevel,
[Rendering.RenderTextureSubElement](Rendering.RenderTextureSubElement.html) element);






## Declaration

public void SetTexture(int kernelIndex,
int nameID,
[RenderTexture](RenderTexture.html) texture,
int mipLevel,
[Rendering.RenderTextureSubElement](Rendering.RenderTextureSubElement.html) element);






### Parameters



| Parameter | Description |
| --- | --- |
| kernelIndex | For which kernel the texture is being set. See FindKernel. |
| nameID | Property name ID, use Shader.PropertyToID to get it. |
| name | Name of the buffer variable in shader code. |
| texture | Texture to set. |
| mipLevel | Optional mipmap level of the read-write texture. |
| element | Optional parameter that specifies the type of data to set from the RenderTexture. |





### Description



Set a texture parameter.





This function can either set a regular texture that is read in the
compute shader, or an output texture that is written into by the shader.
For an output texture, it has to be a [RenderTexture](RenderTexture.html) with random write
flag enabled, see [RenderTexture.enableRandomWrite](RenderTexture-enableRandomWrite.html).

Please note that the mipLevel parameter is ignored unless the shader specifies a read-write (unordered access) texture.

Buffers and textures are set per-kernel. Use [FindKernel](ComputeShader.FindKernel.html) to find kernel index by function name.

By specifying a `RenderTextureSubElement`, you can indicate which type of data to set from the RenderTexture. The possible options are: [RenderTextureSubElement.Color](Rendering.RenderTextureSubElement.Color.html), [RenderTextureSubElement.Depth](Rendering.RenderTextureSubElement.Depth.html), and [RenderTextureSubElement.Stencil](Rendering.RenderTextureSubElement.Stencil.html).

Additional resources: [FindKernel](ComputeShader.FindKernel.html), Additional resources: [SetFloat](ComputeShader.SetFloat.html), [SetFloats](ComputeShader.SetFloats.html), [SetInt](ComputeShader.SetInt.html), [SetInts](ComputeShader.SetInts.html), [SetBool](ComputeShader.SetBool.html), [SetBuffer](ComputeShader.SetBuffer.html), [SetMatrix](ComputeShader.SetMatrix.html), [SetMatrixArray](ComputeShader.SetMatrixArray.html),  [SetVector](ComputeShader.SetVector.html), [SetVectorArray](ComputeShader.SetVectorArray.html)., [RenderTexture.enableRandomWrite](RenderTexture-enableRandomWrite.html), [RenderTextureSubElement](Rendering.RenderTextureSubElement.html).


            
