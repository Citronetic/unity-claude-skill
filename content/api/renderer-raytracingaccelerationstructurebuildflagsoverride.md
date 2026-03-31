This version of Unity is unsupported.



# [Renderer](Renderer.html).rayTracingAccelerationStructureBuildFlagsOverride




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












                    public bool rayTracingAccelerationStructureBuildFlagsOverride;






### Description



Whether to override the default build flags specified when creating a [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).





If you set this value to `true`, Unity uses [Renderer.rayTracingAccelerationStructureBuildFlags](Renderer-rayTracingAccelerationStructureBuildFlags.html) when it builds the acceleration structure associated with this renderer.

If you set this value to false (default) and if [Renderer.rayTracingMode](Renderer-rayTracingMode.html) is [RayTracingMode.DynamicGeometry](Experimental.Rendering.RayTracingMode.DynamicGeometry.html) then Unity uses [RayTracingAccelerationStructure.Settings.buildFlagsDynamicGeometries](Rendering.RayTracingAccelerationStructure.Settings-buildFlagsDynamicGeometries.html) value as build flags, otherwise [RayTracingAccelerationStructure.Settings.buildFlagsStaticGeometries](Rendering.RayTracingAccelerationStructure.Settings-buildFlagsStaticGeometries.html) is used.

Additional resources: [RayTracingAccelerationStructure.Build](Rendering.RayTracingAccelerationStructure.Build.html), [RayTracingAccelerationStructure.CullInstances](Rendering.RayTracingAccelerationStructure.CullInstances.html), [SystemInfo.supportsRayTracing](SystemInfo-supportsRayTracing.html).


            
