This version of Unity is unsupported.



# [GraphicsDevice](AMD.GraphicsDevice.html).DestroyFeature




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

public void DestroyFeature([Rendering.CommandBuffer](Rendering.CommandBuffer.html) cmd,
[AMD.FSR2Context](AMD.FSR2Context.html) fsrContext);






### Parameters



| Parameter | Description |
| --- | --- |
| cmd | The rendering command buffer to record commands into. This call does not execute the command buffer. You must execute the command buffer yourself at any time after this call. |
| fsrContext | The command object to destroy. |





### Description



Destroys a specific FSR2Context created with GraphicsDevice.CreateFeature.


            
