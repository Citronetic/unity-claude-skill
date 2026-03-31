This version of Unity is unsupported.



# [Camera](Camera.html).RemoveCommandBuffer




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

public void RemoveCommandBuffer([Rendering.CameraEvent](Rendering.CameraEvent.html) evt,
[Rendering.CommandBuffer](Rendering.CommandBuffer.html) buffer);






### Parameters



| Parameter | Description |
| --- | --- |
| evt | When to execute the command buffer during rendering. |
| buffer | The buffer to execute. |





### Description



Remove command buffer from execution at a specified place.





If the same buffer is added multiple times on this camera event, all occurrences of it will be removed.
                    This API is only available with the Built-in renderer.

Additional resources: [CommandBuffer](Rendering.CommandBuffer.html), [RemoveCommandBuffers](Camera.RemoveCommandBuffers.html), [RemoveAllCommandBuffers](Camera.RemoveAllCommandBuffers.html), [AddCommandBuffer](Camera.AddCommandBuffer.html), [GetCommandBuffers](Camera.GetCommandBuffers.html).


            
