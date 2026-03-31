This version of Unity is unsupported.



# [Camera](Camera.html).AddCommandBuffer




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

public void AddCommandBuffer([Rendering.CameraEvent](Rendering.CameraEvent.html) evt,
[Rendering.CommandBuffer](Rendering.CommandBuffer.html) buffer);






### Parameters



| Parameter | Description |
| --- | --- |
| evt | When to execute the command buffer during rendering. |
| buffer | The buffer to execute. |





### Description



Add a command buffer to be executed at a specified place.





Multiple command buffers can be set to execute at the same camera event (or even the same buffer can be added multiple times). To remove command buffer from execution, use [RemoveCommandBuffer](Camera.RemoveCommandBuffer.html).
This API is only available with the Built-in renderer.

Additional resources: [CommandBuffer](Rendering.CommandBuffer.html), [RemoveCommandBuffer](Camera.RemoveCommandBuffer.html), [GetCommandBuffers](Camera.GetCommandBuffers.html).


            
