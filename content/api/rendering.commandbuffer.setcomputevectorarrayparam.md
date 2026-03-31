This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetComputeVectorArrayParam




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

public void SetComputeVectorArrayParam([ComputeShader](ComputeShader.html) computeShader,
string name,
Vector4[] values);






## Declaration

public void SetComputeVectorArrayParam([ComputeShader](ComputeShader.html) computeShader,
int nameID,
Vector4[] values);






### Parameters



| Parameter | Description |
| --- | --- |
| computeShader | ComputeShader to set parameter for. |
| name | Property name. |
| nameID | Property name ID. Use Shader.PropertyToID to get this ID. |
| values | Value to set. |





### Description



Adds a command to set a vector array parameter on a [ComputeShader](ComputeShader.html).





Constant buffers are shared between all kernels in a single compute shader asset. Therefore this function affects all kernels in the passed ComputeShader.

Additional resources: [DispatchCompute](Rendering.CommandBuffer.DispatchCompute.html), [SetComputeFloatParam](Rendering.CommandBuffer.SetComputeFloatParam.html), [SetComputeFloatParams](Rendering.CommandBuffer.SetComputeFloatParams.html), [SetComputeIntParam](Rendering.CommandBuffer.SetComputeIntParam.html), [SetComputeIntParams](Rendering.CommandBuffer.SetComputeIntParams.html), [SetComputeMatrixParam](Rendering.CommandBuffer.SetComputeMatrixParam.html), [SetComputeMatrixArrayParam](Rendering.CommandBuffer.SetComputeMatrixArrayParam.html), [SetComputeVectorParam](Rendering.CommandBuffer.SetComputeVectorParam.html), [SetComputeTextureParam](Rendering.CommandBuffer.SetComputeTextureParam.html), [SetComputeBufferParam](Rendering.CommandBuffer.SetComputeBufferParam.html).


            
