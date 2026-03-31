This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetRayTracingIntParams




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

public void SetRayTracingIntParams([Rendering.RayTracingShader](Rendering.RayTracingShader.html) rayTracingShader,
string name,
params int[] values);






## Declaration

public void SetRayTracingIntParams([Rendering.RayTracingShader](Rendering.RayTracingShader.html) rayTracingShader,
int nameID,
params int[] values);






### Parameters



| Parameter | Description |
| --- | --- |
| rayTracingShader | RayTracingShader to set parameter for. |
| name | Name of the variable in shader code. |
| nameID | Property name ID. Use Shader.PropertyToID to get this ID. |
| values | Values to set. |





### Description



Adds a command to set multiple consecutive integer parameters on a [RayTracingShader](Rendering.RayTracingShader.html).





The values specified as argument can be used only by the shaders defined inside the .raytrace file associated with the RayTracingShader.

This function can be used to set an integer vector, integer array or integer vector array
values. For example, `int4 myArray[2]` in the ray tracing shader
can be filled by passing 8 integers.


            
