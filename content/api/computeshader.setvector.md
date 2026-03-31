This version of Unity is unsupported.



# [ComputeShader](ComputeShader.html).SetVector




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

public void SetVector(string name,
[Vector4](Vector4.html) val);






## Declaration

public void SetVector(int nameID,
[Vector4](Vector4.html) val);






### Parameters



| Parameter | Description |
| --- | --- |
| name | Variable name in shader code. |
| nameID | Property name ID, use Shader.PropertyToID to get it. |
| val | Value to set. |





### Description



Set a vector parameter.





Constant buffers are shared between all kernels in a single compute shader asset. Therefore this function affects all kernels in this ComputeShader.

Additional resources: [SetFloat](ComputeShader.SetFloat.html), [SetFloats](ComputeShader.SetFloats.html), [SetInt](ComputeShader.SetInt.html), [SetInts](ComputeShader.SetInts.html), [SetBool](ComputeShader.SetBool.html), [SetBuffer](ComputeShader.SetBuffer.html), [SetMatrix](ComputeShader.SetMatrix.html), [SetMatrixArray](ComputeShader.SetMatrixArray.html), [SetTexture](ComputeShader.SetTexture.html),  [SetVectorArray](ComputeShader.SetVectorArray.html).


            
