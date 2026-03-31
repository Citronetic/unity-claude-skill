This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetRayTracingBufferParam




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

public void SetRayTracingBufferParam([Rendering.RayTracingShader](Rendering.RayTracingShader.html) rayTracingShader,
string name,
[ComputeBuffer](ComputeBuffer.html) buffer);






## Declaration

public void SetRayTracingBufferParam([Rendering.RayTracingShader](Rendering.RayTracingShader.html) rayTracingShader,
int nameID,
[ComputeBuffer](ComputeBuffer.html) buffer);






## Declaration

public void SetRayTracingBufferParam([Rendering.RayTracingShader](Rendering.RayTracingShader.html) rayTracingShader,
string name,
[GraphicsBuffer](GraphicsBuffer.html) buffer);






## Declaration

public void SetRayTracingBufferParam([Rendering.RayTracingShader](Rendering.RayTracingShader.html) rayTracingShader,
int nameID,
[GraphicsBuffer](GraphicsBuffer.html) buffer);






## Declaration

public void SetRayTracingBufferParam([Rendering.RayTracingShader](Rendering.RayTracingShader.html) rayTracingShader,
string name,
[GraphicsBufferHandle](GraphicsBufferHandle.html) bufferHandle);






## Declaration

public void SetRayTracingBufferParam([Rendering.RayTracingShader](Rendering.RayTracingShader.html) rayTracingShader,
int nameID,
[GraphicsBufferHandle](GraphicsBufferHandle.html) bufferHandle);






### Parameters



| Parameter | Description |
| --- | --- |
| rayTracingShader | The RayTracingShader to set parameter for. |
| name | The name of the buffer in shader code. |
| nameID | The ID of the property name for the buffer in shader code. Use Shader.PropertyToID to get this ID. |
| buffer | The buffer to set. |
| bufferHandle | The handle of the buffer to set. |





### Description



Adds a command to set an input or output buffer parameter on a RayTracingShader.





Only shaders defined in the .raytrace file can access the buffer you designate as the argument for this method. To make this buffer accessible to all ray tracing shader types (closest hit, any hit, or miss, for example), call the [CommandBuffer.SetGlobalBuffer](Rendering.CommandBuffer.SetGlobalBuffer.html) or [Shader.SetGlobalBuffer](Shader.SetGlobalBuffer.html) method instead.

Additional resources: [DispatchRays](Rendering.CommandBuffer.DispatchRays.html).


            
