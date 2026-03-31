This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).DispatchCompute




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

public void DispatchCompute([ComputeShader](ComputeShader.html) computeShader,
int kernelIndex,
int threadGroupsX,
int threadGroupsY,
int threadGroupsZ);






## Declaration

public void DispatchCompute([ComputeShader](ComputeShader.html) computeShader,
int kernelIndex,
[ComputeBuffer](ComputeBuffer.html) indirectBuffer,
uint argsOffset);






## Declaration

public void DispatchCompute([ComputeShader](ComputeShader.html) computeShader,
int kernelIndex,
[GraphicsBuffer](GraphicsBuffer.html) indirectBuffer,
uint argsOffset);






### Parameters



| Parameter | Description |
| --- | --- |
| computeShader | ComputeShader to execute. |
| kernelIndex | Kernel index to execute, see ComputeShader.FindKernel. |
| threadGroupsX | Number of work groups in the X dimension. |
| threadGroupsY | Number of work groups in the Y dimension. |
| threadGroupsZ | Number of work groups in the Z dimension. |
| indirectBuffer | ComputeBuffer with dispatch arguments. |
| argsOffset | Byte offset indicating the location of the dispatch arguments in the buffer. |





### Description



Add a command to execute a [ComputeShader](ComputeShader.html).





When the command buffer executes, a compute shader kernel is dispatched, with work group size either specified directly (see [ComputeShader.Dispatch](ComputeShader.Dispatch.html))
or read from the GPU buffer (see [ComputeShader.DispatchIndirect](ComputeShader.DispatchIndirect.html)).


            
