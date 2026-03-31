This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetComputeBufferParam




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

public void SetComputeBufferParam([ComputeShader](ComputeShader.html) computeShader,
int kernelIndex,
string name,
[ComputeBuffer](ComputeBuffer.html) buffer);






## Declaration

public void SetComputeBufferParam([ComputeShader](ComputeShader.html) computeShader,
int kernelIndex,
int nameID,
[ComputeBuffer](ComputeBuffer.html) buffer);






## Declaration

public void SetComputeBufferParam([ComputeShader](ComputeShader.html) computeShader,
int kernelIndex,
string name,
[GraphicsBuffer](GraphicsBuffer.html) buffer);






## Declaration

public void SetComputeBufferParam([ComputeShader](ComputeShader.html) computeShader,
int kernelIndex,
int nameID,
[GraphicsBuffer](GraphicsBuffer.html) buffer);






## Declaration

public void SetComputeBufferParam([ComputeShader](ComputeShader.html) computeShader,
int kernelIndex,
int nameID,
[GraphicsBufferHandle](GraphicsBufferHandle.html) bufferHandle);






## Declaration

public void SetComputeBufferParam([ComputeShader](ComputeShader.html) computeShader,
int kernelIndex,
string name,
[GraphicsBufferHandle](GraphicsBufferHandle.html) bufferHandle);






### Parameters



| Parameter | Description |
| --- | --- |
| computeShader | ComputeShader to set parameter for. |
| kernelIndex | Which kernel the buffer is being set for. See ComputeShader.FindKernel. |
| name | Name of the buffer variable in shader code. |
| nameID | Property name ID. Use Shader.PropertyToID to get this ID. |
| buffer | Buffer to set. |
| bufferHandle | The handle of the buffer to set. |





### Description



Adds a command to set an input or output buffer parameter on a [ComputeShader](ComputeShader.html).





Buffers and textures are set per-kernel. Use [ComputeShader.FindKernel](ComputeShader.FindKernel.html) to find kernel index by function name.

Setting a compute buffer to a kernel will leave the append/consume counter value unchanged. To set or reset the value, use [ComputeBuffer.SetCounterValue](ComputeBuffer.SetCounterValue.html) or [GraphicsBuffer.SetCounterValue](GraphicsBuffer.SetCounterValue.html).

Additional resources: [DispatchCompute](Rendering.CommandBuffer.DispatchCompute.html), [SetComputeFloatParam](Rendering.CommandBuffer.SetComputeFloatParam.html), [SetComputeFloatParams](Rendering.CommandBuffer.SetComputeFloatParams.html), [SetComputeIntParam](Rendering.CommandBuffer.SetComputeIntParam.html), [SetComputeIntParams](Rendering.CommandBuffer.SetComputeIntParams.html), [SetComputeMatrixParam](Rendering.CommandBuffer.SetComputeMatrixParam.html), [SetComputeMatrixArrayParam](Rendering.CommandBuffer.SetComputeMatrixArrayParam.html), [SetComputeVectorParam](Rendering.CommandBuffer.SetComputeVectorParam.html), [SetComputeVectorArrayParam](Rendering.CommandBuffer.SetComputeVectorArrayParam.html), [SetComputeTextureParam](Rendering.CommandBuffer.SetComputeTextureParam.html).


            
