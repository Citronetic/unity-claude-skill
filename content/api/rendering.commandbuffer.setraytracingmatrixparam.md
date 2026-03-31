This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetRayTracingMatrixParam




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

public void SetRayTracingMatrixParam([Rendering.RayTracingShader](Rendering.RayTracingShader.html) rayTracingShader,
string name,
[Matrix4x4](Matrix4x4.html) val);






## Declaration

public void SetRayTracingMatrixParam([Rendering.RayTracingShader](Rendering.RayTracingShader.html) rayTracingShader,
int nameID,
[Matrix4x4](Matrix4x4.html) val);






### Parameters



| Parameter | Description |
| --- | --- |
| rayTracingShader | RayTracingShader to set parameter for. |
| name | Name of the variable in shader code. |
| nameID | Property name ID. Use Shader.PropertyToID to get this ID. |
| val | Value to set. |





### Description



Adds a command to set a matrix parameter on a [RayTracingShader](Rendering.RayTracingShader.html).





Only shaders defined in the .raytrace file can access the matrix you designate as the argument for this method. To make this matrix accessible to all ray tracing shader types (closest hit, any hit, or miss, for example), call the [CommandBuffer.SetGlobalMatrix](Rendering.CommandBuffer.SetGlobalMatrix.html) method instead.


            
