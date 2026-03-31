This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetComputeIntParams




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

public void SetComputeIntParams([ComputeShader](ComputeShader.html) computeShader,
string name,
params int[] values);






## Declaration

public void SetComputeIntParams([ComputeShader](ComputeShader.html) computeShader,
int nameID,
params int[] values);






### Parameters



| Parameter | Description |
| --- | --- |
| computeShader | ComputeShader to set parameter for. |
| name | Name of the variable in shader code. |
| nameID | Property name ID. Use Shader.PropertyToID to get this ID. |
| values | Values to set. |





### Description



Adds a command to set multiple consecutive integer parameters on a [ComputeShader](ComputeShader.html).





This function can be used to set an integer vector, integer array or integer vector array
values. For example, `int4 myArray[2]` in the compute shader
can be filled by passing 8 integers. See [Compute Shaders](../Manual/class-ComputeShader.html) for information on data layout rules.

Constant buffers are shared between all kernels in a single compute shader asset. Therefore this function affects all kernels in the passed ComputeShader.

Additional resources: [DispatchCompute](Rendering.CommandBuffer.DispatchCompute.html), [SetComputeFloatParam](Rendering.CommandBuffer.SetComputeFloatParam.html), [SetComputeFloatParams](Rendering.CommandBuffer.SetComputeFloatParams.html), [SetComputeIntParam](Rendering.CommandBuffer.SetComputeIntParam.html), [SetComputeMatrixParam](Rendering.CommandBuffer.SetComputeMatrixParam.html), [SetComputeMatrixArrayParam](Rendering.CommandBuffer.SetComputeMatrixArrayParam.html), [SetComputeVectorParam](Rendering.CommandBuffer.SetComputeVectorParam.html), [SetComputeVectorArrayParam](Rendering.CommandBuffer.SetComputeVectorArrayParam.html), [SetComputeTextureParam](Rendering.CommandBuffer.SetComputeTextureParam.html), [SetComputeBufferParam](Rendering.CommandBuffer.SetComputeBufferParam.html).


            
