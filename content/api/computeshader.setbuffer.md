This version of Unity is unsupported.



# [ComputeShader](ComputeShader.html).SetBuffer




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

public void SetBuffer(int kernelIndex,
string name,
[ComputeBuffer](ComputeBuffer.html) buffer);






## Declaration

public void SetBuffer(int kernelIndex,
int nameID,
[ComputeBuffer](ComputeBuffer.html) buffer);






## Declaration

public void SetBuffer(int kernelIndex,
string name,
[GraphicsBuffer](GraphicsBuffer.html) buffer);






## Declaration

public void SetBuffer(int kernelIndex,
int nameID,
[GraphicsBuffer](GraphicsBuffer.html) buffer);






### Parameters



| Parameter | Description |
| --- | --- |
| kernelIndex | For which kernel the buffer is being set. See FindKernel. |
| nameID | Property name ID, use Shader.PropertyToID to get it. |
| name | Name of the buffer variable in shader code. |
| buffer | Buffer to set. |





### Description



Sets an input or output compute buffer.





Buffers and textures are set per-kernel. Use [FindKernel](ComputeShader.FindKernel.html) to find kernel index by function name.

Setting a compute buffer to a kernel will leave the append/consume counter value unchanged. To set or reset the value, use [ComputeBuffer.SetCounterValue](ComputeBuffer.SetCounterValue.html) or [GraphicsBuffer.SetCounterValue](GraphicsBuffer.SetCounterValue.html).

Additional resources: [SetFloat](ComputeShader.SetFloat.html), [SetFloats](ComputeShader.SetFloats.html), [SetInt](ComputeShader.SetInt.html), [SetInts](ComputeShader.SetInts.html), [SetBool](ComputeShader.SetBool.html),  [SetMatrix](ComputeShader.SetMatrix.html), [SetMatrixArray](ComputeShader.SetMatrixArray.html), [SetTexture](ComputeShader.SetTexture.html), [SetVector](ComputeShader.SetVector.html), [SetVectorArray](ComputeShader.SetVectorArray.html).


            
