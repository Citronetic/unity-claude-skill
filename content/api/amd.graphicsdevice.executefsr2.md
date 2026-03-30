This version of Unity is unsupported.



# [GraphicsDevice](AMD.GraphicsDevice.html).ExecuteFSR2




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

public void ExecuteFSR2([Rendering.CommandBuffer](Rendering.CommandBuffer.html) cmd,
[AMD.FSR2Context](AMD.FSR2Context.html) fsr2Context,
ref [AMD.FSR2TextureTable](AMD.FSR2TextureTable.html) textures);






### Parameters



| Parameter | Description |
| --- | --- |
| cmd | The rendering command buffer to record commands into. This call does not execute the command buffer. You must execute the command buffer yourself at any time after this call. |
| fsr2Context | The source feature context to execute. You must set the parameters for this command in the FSR2Context object prior to this call. |
| textures | The collection of textures represented by FSR2TextureTable, where inputs/outputs are specified for the FSR 2.0 pass to execute. |





### Description



Records the execution of the FSR2 pass into a rendering command buffer. This call does not execute the command buffer, it only appends custom commands into it.


            
