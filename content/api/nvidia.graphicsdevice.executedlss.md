This version of Unity is unsupported.



# [GraphicsDevice](NVIDIA.GraphicsDevice.html).ExecuteDLSS




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

public void ExecuteDLSS([Rendering.CommandBuffer](Rendering.CommandBuffer.html) cmd,
[NVIDIA.DLSSContext](NVIDIA.DLSSContext.html) dlssContext,
ref [NVIDIA.DLSSTextureTable](NVIDIA.DLSSTextureTable.html) textures);






### Parameters



| Parameter | Description |
| --- | --- |
| cmd | The rendering command buffer to record commands into. This call does not execute the command buffer, you must execute the command buffer yourself at any time after this call. |
| dlssContext | The source feature context to execute. You must set the parameters for this command in the DLSSContext object prior to this call. |
| textures | The texture table, where inputs / outputs are specified for DLSS to execute. |





### Description



Records the execution of DLSS into a rendering command buffer. This call does not execute the command buffer, it only appends custom commands into it.


            
