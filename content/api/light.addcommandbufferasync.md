This version of Unity is unsupported.



# [Light](Light.html).AddCommandBufferAsync




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

public void AddCommandBufferAsync([Rendering.LightEvent](Rendering.LightEvent.html) evt,
[Rendering.CommandBuffer](Rendering.CommandBuffer.html) buffer,
[Rendering.ComputeQueueType](Rendering.ComputeQueueType.html) queueType);






## Declaration

public void AddCommandBufferAsync([Rendering.LightEvent](Rendering.LightEvent.html) evt,
[Rendering.CommandBuffer](Rendering.CommandBuffer.html) buffer,
[Rendering.ShadowMapPass](Rendering.ShadowMapPass.html) shadowPassMask,
[Rendering.ComputeQueueType](Rendering.ComputeQueueType.html) queueType);






### Parameters



| Parameter | Description |
| --- | --- |
| evt | The point during the graphics processing at which this command buffer should commence on the GPU. |
| buffer | The buffer to execute. |
| queueType | The desired async compute queue type to execute the buffer on. |
| shadowPassMask | A mask specifying which shadow passes to execute the buffer for. |





### Description



Adds a command buffer to the GPU's async compute queues and executes that command buffer when graphics processing reaches a given point.





Execute an async compute command buffer on the GPU when the graphics queues processing reaches a point described by the evt parameter.

Multiple command buffers can be set to execute at the same light event (or even the same buffer can be added multiple times). To remove a command buffer from execution, use [RemoveCommandBuffer](Light.RemoveCommandBuffer.html).

Passing a shadow pass mask allows detailed control over which shadow passes will execute the buffer.

The command buffer can only call the following commands for execution on the async compute queues, otherwise an error is logged and displayed in the Editor window:

[CommandBuffer.BeginSample](Rendering.CommandBuffer.BeginSample.html)

[CommandBuffer.BuildRayTracingAccelerationStructure](Rendering.CommandBuffer.BuildRayTracingAccelerationStructure.html)

[CommandBuffer.CopyCounterValue](Rendering.CommandBuffer.CopyCounterValue.html)

[CommandBuffer.CopyTexture](Rendering.CommandBuffer.CopyTexture.html)

CommandBuffer.CreateGPUFence

[CommandBuffer.DispatchCompute](Rendering.CommandBuffer.DispatchCompute.html)

[CommandBuffer.EndSample](Rendering.CommandBuffer.EndSample.html)

[CommandBuffer.IssuePluginEvent](Rendering.CommandBuffer.IssuePluginEvent.html)

[CommandBuffer.SetComputeBufferParam](Rendering.CommandBuffer.SetComputeBufferParam.html)

[CommandBuffer.SetComputeFloatParam](Rendering.CommandBuffer.SetComputeFloatParam.html)

[CommandBuffer.SetComputeFloatParams](Rendering.CommandBuffer.SetComputeFloatParams.html)

[CommandBuffer.SetComputeTextureParam](Rendering.CommandBuffer.SetComputeTextureParam.html)

[CommandBuffer.SetComputeVectorParam](Rendering.CommandBuffer.SetComputeVectorParam.html)

CommandBuffer.WaitOnGPUFence

All of the commands within the buffer are guaranteed to be executed on the same queue. If the target platform does not support async compute queues then the work is dispatched on the graphics queue.

Additional resources:GPUFence, [SystemInfo.supportsAsyncCompute](SystemInfo-supportsAsyncCompute.html), [CommandBuffer](Rendering.CommandBuffer.html), [RemoveCommandBuffer](Light.RemoveCommandBuffer.html), [GetCommandBuffers](Light.GetCommandBuffers.html).


            
