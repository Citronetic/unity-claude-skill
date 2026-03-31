This version of Unity is unsupported.



# [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).Build




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

public void Build();






## Declaration

public void Build([Vector3](Vector3.html) relativeOrigin);






## Declaration

public void Build([Rendering.RayTracingAccelerationStructure.BuildSettings](Rendering.RayTracingAccelerationStructure.BuildSettings.html) buildSettings);






### Description



Builds acceleration structures on the GPU. Allocates any GPU memory required for storing acceleration structure data.





To ensure that the acceleration structure is up to date, call this method before using the acceleration structure in ray tracing shaders (for example before a [RayTracingShader.Dispatch](Rendering.RayTracingShader.Dispatch.html) call) or when using inline ray tracing.

Additional resources: [SystemInfo.supportsRayTracingShaders](SystemInfo-supportsRayTracingShaders.html), [SystemInfo.supportsInlineRayTracing](SystemInfo-supportsInlineRayTracing.html), [CommandBuffer.BuildRayTracingAccelerationStructure](Rendering.CommandBuffer.BuildRayTracingAccelerationStructure.html).


            
