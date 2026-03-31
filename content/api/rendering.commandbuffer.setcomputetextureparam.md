This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetComputeTextureParam




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

public void SetComputeTextureParam([ComputeShader](ComputeShader.html) computeShader,
int kernelIndex,
string name,
[Rendering.RenderTargetIdentifier](Rendering.RenderTargetIdentifier.html) rt);






## Declaration

public void SetComputeTextureParam([ComputeShader](ComputeShader.html) computeShader,
int kernelIndex,
int nameID,
[Rendering.RenderTargetIdentifier](Rendering.RenderTargetIdentifier.html) rt);






## Declaration

public void SetComputeTextureParam([ComputeShader](ComputeShader.html) computeShader,
int kernelIndex,
string name,
[Rendering.RenderTargetIdentifier](Rendering.RenderTargetIdentifier.html) rt,
int mipLevel);






## Declaration

public void SetComputeTextureParam([ComputeShader](ComputeShader.html) computeShader,
int kernelIndex,
int nameID,
[Rendering.RenderTargetIdentifier](Rendering.RenderTargetIdentifier.html) rt,
int mipLevel);






## Declaration

public void SetComputeTextureParam([ComputeShader](ComputeShader.html) computeShader,
int kernelIndex,
string name,
[Rendering.RenderTargetIdentifier](Rendering.RenderTargetIdentifier.html) rt,
int mipLevel,
[Rendering.RenderTextureSubElement](Rendering.RenderTextureSubElement.html) element);






## Declaration

public void SetComputeTextureParam([ComputeShader](ComputeShader.html) computeShader,
int kernelIndex,
int nameID,
[Rendering.RenderTargetIdentifier](Rendering.RenderTargetIdentifier.html) rt,
int mipLevel,
[Rendering.RenderTextureSubElement](Rendering.RenderTextureSubElement.html) element);






### Parameters



| Parameter | Description |
| --- | --- |
| computeShader | ComputeShader to set parameter for. |
| kernelIndex | Which kernel the texture is being set for. See ComputeShader.FindKernel. |
| name | Name of the texture variable in shader code. |
| nameID | Property name ID. Use Shader.PropertyToID to get this ID. |
| rt | Texture value or identifier to set, see RenderTargetIdentifier. |
| mipLevel | Optional mipmap level of the read-write texture. |
| element | Optional parameter that specifies the type of data to set from the RenderTexture. |





### Description



Adds a command to set a texture parameter on a [ComputeShader](ComputeShader.html).





Textures and buffers are set per-kernel. Use [ComputeShader.FindKernel](ComputeShader.FindKernel.html) to find kernel index by function name.
Please note that the mipLevel parameter is ignored unless the shader specifies a read-write (unordered access) texture.

By specifying a `RenderTextureSubElement`, you can indicate which type of data to set from the RenderTexture. The possible options are: [RenderTextureSubElement.Color](Rendering.RenderTextureSubElement.Color.html), [RenderTextureSubElement.Depth](Rendering.RenderTextureSubElement.Depth.html), and [RenderTextureSubElement.Stencil](Rendering.RenderTextureSubElement.Stencil.html).

Additional resources: [DispatchCompute](Rendering.CommandBuffer.DispatchCompute.html), [SetComputeFloatParam](Rendering.CommandBuffer.SetComputeFloatParam.html), [SetComputeFloatParams](Rendering.CommandBuffer.SetComputeFloatParams.html), [SetComputeIntParam](Rendering.CommandBuffer.SetComputeIntParam.html), [SetComputeIntParams](Rendering.CommandBuffer.SetComputeIntParams.html), [SetComputeMatrixParam](Rendering.CommandBuffer.SetComputeMatrixParam.html), [SetComputeMatrixArrayParam](Rendering.CommandBuffer.SetComputeMatrixArrayParam.html), [SetComputeVectorParam](Rendering.CommandBuffer.SetComputeVectorParam.html), [SetComputeVectorArrayParam](Rendering.CommandBuffer.SetComputeVectorArrayParam.html), [SetComputeBufferParam](Rendering.CommandBuffer.SetComputeBufferParam.html), [RenderTextureSubElement](Rendering.RenderTextureSubElement.html).


            
