This version of Unity is unsupported.



# [Light](Light.html).AddCommandBuffer




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




                [Switch to Manual](../Manual/class-Light.html)










## Declaration

public void AddCommandBuffer([Rendering.LightEvent](Rendering.LightEvent.html) evt,
[Rendering.CommandBuffer](Rendering.CommandBuffer.html) buffer);






## Declaration

public void AddCommandBuffer([Rendering.LightEvent](Rendering.LightEvent.html) evt,
[Rendering.CommandBuffer](Rendering.CommandBuffer.html) buffer,
[Rendering.ShadowMapPass](Rendering.ShadowMapPass.html) shadowPassMask);






### Parameters



| Parameter | Description |
| --- | --- |
| evt | When to execute the command buffer during rendering. |
| buffer | The buffer to execute. |
| shadowPassMask | A mask specifying which shadow passes to execute the buffer for. |





### Description



Add a command buffer to be executed at a specified place.





Multiple command buffers can be set to execute at the same light event (or even the same buffer can be added multiple times). To remove command buffer from execution, use [RemoveCommandBuffer](Light.RemoveCommandBuffer.html).

Passing a shadow pass mask allows detailed control over which shadow passes will execute the buffer.

Additional resources: [CommandBuffer](Rendering.CommandBuffer.html), [ShadowMapPass](Rendering.ShadowMapPass.html), [RemoveCommandBuffer](Light.RemoveCommandBuffer.html), [GetCommandBuffers](Light.GetCommandBuffers.html).


            
