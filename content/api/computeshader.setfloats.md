This version of Unity is unsupported.



# [ComputeShader](ComputeShader.html).SetFloats




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

public void SetFloats(string name,
params float[] values);






## Declaration

public void SetFloats(int nameID,
params float[] values);






### Parameters



| Parameter | Description |
| --- | --- |
| name | Array variable name in the shader code. |
| nameID | Property name ID, use Shader.PropertyToID to get it. |
| values | Value array to set. |





### Description



Set multiple consecutive float parameters at once.





This function can be used to set float vector, float array or float vector array values. For example, float4 myArray[4] in the compute shader can be filled by passing 16 floats. See [Compute Shaders](../Manual/class-ComputeShader.html) for information on data layout rules and cross-platform compatibility.

This API feeds raw data to the constant buffer, so the provided data must follow the HLSL constant buffer data layout rules. This means that the the array elements must be aligned on float4; for example, float4 data requires no padding, float3 data needs one float padding for each element, float2 data needs two floats, and so on.

Constant buffers are shared between all kernels in a single compute shader asset. Therefore this function affects all kernels in this ComputeShader.

Additional resources: [SetFloat](ComputeShader.SetFloat.html), [SetInt](ComputeShader.SetInt.html), [SetInts](ComputeShader.SetInts.html), [SetBool](ComputeShader.SetBool.html), [SetBuffer](ComputeShader.SetBuffer.html), [SetMatrix](ComputeShader.SetMatrix.html), [SetMatrixArray](ComputeShader.SetMatrixArray.html), [SetTexture](ComputeShader.SetTexture.html), [SetVector](ComputeShader.SetVector.html), [SetVectorArray](ComputeShader.SetVectorArray.html).


            
