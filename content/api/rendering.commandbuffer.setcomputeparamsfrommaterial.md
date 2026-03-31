This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetComputeParamsFromMaterial




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

public void SetComputeParamsFromMaterial([ComputeShader](ComputeShader.html) computeShader,
int kernelIndex,
[Material](Material.html) material);






### Parameters



| Parameter | Description |
| --- | --- |
| computeShader | The ComputeShader to set parameters for. |
| kernelIndex | The index of the kernel to set the material parameters. See ComputeShader.FindKernel. |
| material | The material to set the compute parameters. |





### Description



Sets the parameters for a compute shader kernel from a [Material](Material.html).





Use this function to copy over the properties of a material into a compute shader kernel.


            
