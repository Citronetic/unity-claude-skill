This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetRayTracingFloatParams




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

public void SetRayTracingFloatParams([Rendering.RayTracingShader](Rendering.RayTracingShader.html) rayTracingShader,
string name,
params float[] values);






## Declaration

public void SetRayTracingFloatParams([Rendering.RayTracingShader](Rendering.RayTracingShader.html) rayTracingShader,
int nameID,
params float[] values);






### Parameters



| Parameter | Description |
| --- | --- |
| rayTracingShader | RayTracingShader to set parameter for. |
| name | Name of the variable in shader code. |
| nameID | Property name ID. Use Shader.PropertyToID to get this ID. |
| values | Values to set. |





### Description



Adds a command to set multiple consecutive float parameters on a [RayTracingShader](Rendering.RayTracingShader.html).





Only shaders defined in the .raytrace file can access the float array values you designate as the argument for this method. To make these float array values accessible to all ray tracing shader types (closest hit, any hit, or miss, for example), call the [CommandBuffer.SetGlobalFloatArray](Rendering.CommandBuffer.SetGlobalFloatArray.html) method instead.

This function can be used to set float vector, float array or float vector array
values. For example, `float4 myArray[4]` in the ray tracing shader
can be filled by passing 16 floats.


            
