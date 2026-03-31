This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetComputeConstantBufferParam




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

public void SetComputeConstantBufferParam([ComputeShader](ComputeShader.html) computeShader,
int nameID,
[ComputeBuffer](ComputeBuffer.html) buffer,
int offset,
int size);






## Declaration

public void SetComputeConstantBufferParam([ComputeShader](ComputeShader.html) computeShader,
string name,
[ComputeBuffer](ComputeBuffer.html) buffer,
int offset,
int size);






## Declaration

public void SetComputeConstantBufferParam([ComputeShader](ComputeShader.html) computeShader,
int nameID,
[GraphicsBuffer](GraphicsBuffer.html) buffer,
int offset,
int size);






## Declaration

public void SetComputeConstantBufferParam([ComputeShader](ComputeShader.html) computeShader,
string name,
[GraphicsBuffer](GraphicsBuffer.html) buffer,
int offset,
int size);






### Parameters



| Parameter | Description |
| --- | --- |
| computeShader | The ComputeShader to set parameter for. |
| nameID | The ID of the property name for the constant buffer in shader code. Use Shader.PropertyToID to get this ID. |
| name | The name of the constant buffer in shaders code. |
| buffer | The buffer to bind as constant buffer. |
| offset | The offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0. |
| size | The number of bytes to bind. |





### Description



Adds a command to set a constant buffer on a [ComputeShader](ComputeShader.html).





See [ComputeShader.SetConstantBuffer](ComputeShader.SetConstantBuffer.html) for usage.


            
