This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetRayTracingTextureParam




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

public void SetRayTracingTextureParam([Rendering.RayTracingShader](Rendering.RayTracingShader.html) rayTracingShader,
string name,
[Rendering.RenderTargetIdentifier](Rendering.RenderTargetIdentifier.html) rt);






## Declaration

public void SetRayTracingTextureParam([Rendering.RayTracingShader](Rendering.RayTracingShader.html) rayTracingShader,
int nameID,
[Rendering.RenderTargetIdentifier](Rendering.RenderTargetIdentifier.html) rt);






### Parameters



| Parameter | Description |
| --- | --- |
| rayTracingShader | RayTracingShader to set parameter for. |
| name | Name of the texture variable in shader code. |
| nameID | The ID of the property name for the texture in shader code. Use Shader.PropertyToID to get this ID. |
| rt | Texture value or identifier to set, see RenderTargetIdentifier. |





### Description



Adds a command to set a texture parameter on a [RayTracingShader](Rendering.RayTracingShader.html).





Only shaders defined in the .raytrace file can access the texture you designate as the argument for this method. To make this texture accessible to all ray tracing shader types (closest hit, any hit, or miss, for example), call the [CommandBuffer.SetGlobalTexture](Rendering.CommandBuffer.SetGlobalTexture.html) method instead.


            
