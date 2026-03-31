This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetRayTracingConstantBufferParam




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

public void SetRayTracingConstantBufferParam([Rendering.RayTracingShader](Rendering.RayTracingShader.html) rayTracingShader,
int nameID,
[ComputeBuffer](ComputeBuffer.html) buffer,
int offset,
int size);






## Declaration

public void SetRayTracingConstantBufferParam([Rendering.RayTracingShader](Rendering.RayTracingShader.html) rayTracingShader,
string name,
[ComputeBuffer](ComputeBuffer.html) buffer,
int offset,
int size);






## Declaration

public void SetRayTracingConstantBufferParam([Rendering.RayTracingShader](Rendering.RayTracingShader.html) rayTracingShader,
int nameID,
[GraphicsBuffer](GraphicsBuffer.html) buffer,
int offset,
int size);






## Declaration

public void SetRayTracingConstantBufferParam([Rendering.RayTracingShader](Rendering.RayTracingShader.html) rayTracingShader,
string name,
[GraphicsBuffer](GraphicsBuffer.html) buffer,
int offset,
int size);






### Parameters



| Parameter | Description |
| --- | --- |
| rayTracingShader | The RayTracingShader to set parameter for. |
| nameID | The ID of the property name for the constant buffer in shader code. Use Shader.PropertyToID to get this ID. |
| name | The name of the constant buffer in shader code. |
| buffer | The buffer to bind as constant buffer. |
| offset | The offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0. |
| size | The number of bytes to bind. |





### Description



Adds a command to set a constant buffer on a [RayTracingShader](Rendering.RayTracingShader.html).





Only shaders defined in the .raytrace file can access the constant buffer you designate as the argument for this method. To make this constant buffer accessible to all ray tracing shader types (closest hit, any hit, or miss, for example), call the [CommandBuffer.SetGlobalConstantBuffer](Rendering.CommandBuffer.SetGlobalConstantBuffer.html) method instead.

See [RayTracingShader.SetConstantBuffer](Rendering.RayTracingShader.SetConstantBuffer.html) for usage.


            
