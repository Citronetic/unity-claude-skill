This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetRayTracingMatrixArrayParam




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

public void SetRayTracingMatrixArrayParam([Rendering.RayTracingShader](Rendering.RayTracingShader.html) rayTracingShader,
string name,
params Matrix4x4[] values);






## Declaration

public void SetRayTracingMatrixArrayParam([Rendering.RayTracingShader](Rendering.RayTracingShader.html) rayTracingShader,
int nameID,
params Matrix4x4[] values);






### Parameters



| Parameter | Description |
| --- | --- |
| rayTracingShader | RayTracingShader to set parameter for. |
| name | Name of the variable in shader code. |
| nameID | Property name ID. Use Shader.PropertyToID to get this ID. |
| values | Value to set. |





### Description



Adds a command to set a matrix array parameter on a [RayTracingShader](Rendering.RayTracingShader.html).





Only shaders defined in the .raytrace file can access the matrix array you designate as the argument for this method. To make this matrix array accessible to all ray tracing shader types (closest hit, any hit, or miss, for example), call the [CommandBuffer.SetGlobalMatrixArray](Rendering.CommandBuffer.SetGlobalMatrixArray.html) method instead.


            
