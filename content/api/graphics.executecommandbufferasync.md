This version of Unity is unsupported.



# [Graphics](Graphics.html).ExecuteCommandBufferAsync




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

public static void ExecuteCommandBufferAsync([Rendering.CommandBuffer](Rendering.CommandBuffer.html) buffer,
[Rendering.ComputeQueueType](Rendering.ComputeQueueType.html) queueType);






### Parameters



| Parameter | Description |
| --- | --- |
| buffer | The CommandBuffer to be executed. |
| queueType | Describes the desired async compute queue the supplied CommandBuffer should be executed on. |





### Description



Executes a command buffer on an async compute queue with the queue selected based on the [ComputeQueueType](Rendering.ComputeQueueType.html) parameter passed.





It is required that all of the commands within the command buffer be of a type suitable for execution on the async compute queues. If the buffer contains any commands that are not appropriate then an error will be logged and displayed in the editor window.  Specifically the following commands are permitted in a [CommandBuffer](Rendering.CommandBuffer.html) intended for async execution:

[CommandBuffer.BeginSample](Rendering.CommandBuffer.BeginSample.html)

[CommandBuffer.BuildRayTracingAccelerationStructure](Rendering.CommandBuffer.BuildRayTracingAccelerationStructure.html)

[CommandBuffer.CopyCounterValue](Rendering.CommandBuffer.CopyCounterValue.html)

[CommandBuffer.CopyTexture](Rendering.CommandBuffer.CopyTexture.html)

[CommandBuffer.CreateGraphicsFence](Rendering.CommandBuffer.CreateGraphicsFence.html)

[CommandBuffer.DisableShaderKeyword](Rendering.CommandBuffer.DisableShaderKeyword.html)

[CommandBuffer.DispatchCompute](Rendering.CommandBuffer.DispatchCompute.html)

[CommandBuffer.EnableShaderKeyword](Rendering.CommandBuffer.EnableShaderKeyword.html)

[CommandBuffer.EndSample](Rendering.CommandBuffer.EndSample.html)

[CommandBuffer.GetTemporaryRT](Rendering.CommandBuffer.GetTemporaryRT.html)

[CommandBuffer.GetTemporaryRTArray](Rendering.CommandBuffer.GetTemporaryRTArray.html)

[CommandBuffer.IssuePluginEvent](Rendering.CommandBuffer.IssuePluginEvent.html)

[CommandBuffer.ReleaseTemporaryRT](Rendering.CommandBuffer.ReleaseTemporaryRT.html)

CommandBuffer.SetComputeBufferData

[CommandBuffer.SetComputeBufferParam](Rendering.CommandBuffer.SetComputeBufferParam.html)

[CommandBuffer.SetComputeFloatParam](Rendering.CommandBuffer.SetComputeFloatParam.html)

[CommandBuffer.SetComputeFloatParams](Rendering.CommandBuffer.SetComputeFloatParams.html)

[CommandBuffer.SetComputeIntParam](Rendering.CommandBuffer.SetComputeIntParam.html)

[CommandBuffer.SetComputeIntParams](Rendering.CommandBuffer.SetComputeIntParams.html)

[CommandBuffer.SetComputeMatrixArrayParam](Rendering.CommandBuffer.SetComputeMatrixArrayParam.html)

[CommandBuffer.SetComputeMatrixParam](Rendering.CommandBuffer.SetComputeMatrixParam.html)

[CommandBuffer.SetComputeTextureParam](Rendering.CommandBuffer.SetComputeTextureParam.html)

[CommandBuffer.SetComputeVectorParam](Rendering.CommandBuffer.SetComputeVectorParam.html)

[CommandBuffer.SetComputeVectorArrayParam](Rendering.CommandBuffer.SetComputeVectorArrayParam.html)

[CommandBuffer.SetGlobalBuffer](Rendering.CommandBuffer.SetGlobalBuffer.html)

[CommandBuffer.SetGlobalColor](Rendering.CommandBuffer.SetGlobalColor.html)

[CommandBuffer.SetGlobalFloat](Rendering.CommandBuffer.SetGlobalFloat.html)

[CommandBuffer.SetGlobalFloatArray](Rendering.CommandBuffer.SetGlobalFloatArray.html)

[CommandBuffer.SetGlobalInt](Rendering.CommandBuffer.SetGlobalInt.html)

[CommandBuffer.SetGlobalMatrix](Rendering.CommandBuffer.SetGlobalMatrix.html)

[CommandBuffer.SetGlobalMatrixArray](Rendering.CommandBuffer.SetGlobalMatrixArray.html)

[CommandBuffer.SetGlobalTexture](Rendering.CommandBuffer.SetGlobalTexture.html)

[CommandBuffer.SetGlobalVector](Rendering.CommandBuffer.SetGlobalVector.html)

[CommandBuffer.SetGlobalVectorArray](Rendering.CommandBuffer.SetGlobalVectorArray.html)

CommandBuffer.WaitOnGraphicsFence

All of the commands within the buffer are guaranteed to be executed on the same queue. If the target platform does not support async compute queues then the work is dispatched on the graphics queue.





Additional resources: [SystemInfo.supportsAsyncCompute](SystemInfo-supportsAsyncCompute.html) , GPUFence, [CommandBuffer](Rendering.CommandBuffer.html).


            
