This version of Unity is unsupported.



# [SystemInfo](SystemInfo.html).supportsIndirectDispatchRays




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












                    public static bool supportsIndirectDispatchRays;






### Description



Returns `true` if the graphics system supports indirect ray tracing dispatch. (Read Only)





This feature enables scenarios where shaders generate ray tracing data (for example ray buffers) and call arguments for the `DispatchRays` method directly into a GPU buffer allowing a GPU-driven execution flow.

In DirectX 12, this feature is part of DirectX Raytracing (DXR) Tier 1.1.

Additional resources: [RayTracingShader.DispatchIndirect](Rendering.RayTracingShader.DispatchIndirect.html), [CommandBuffer.DispatchRays](Rendering.CommandBuffer.DispatchRays.html), [SystemInfo.supportsRayTracingShaders](SystemInfo-supportsRayTracingShaders.html).


            
