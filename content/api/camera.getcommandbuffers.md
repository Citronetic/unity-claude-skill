This version of Unity is unsupported.



# [Camera](Camera.html).GetCommandBuffers




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




                [Switch to Manual](../Manual/class-Camera.html)










## Declaration

public CommandBuffer[] GetCommandBuffers([Rendering.CameraEvent](Rendering.CameraEvent.html) evt);






### Parameters



| Parameter | Description |
| --- | --- |
| evt | When to execute the command buffer during rendering. |





### Returns



**CommandBuffer[]**
        Array of command buffers.





### Description



Get command buffers to be executed at a specified place. This API is only available with the Built-in renderer.





Additional resources: [CommandBuffer](Rendering.CommandBuffer.html), [AddCommandBuffer](Camera.AddCommandBuffer.html), [RemoveCommandBuffer](Camera.RemoveCommandBuffer.html).


            
