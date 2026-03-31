This version of Unity is unsupported.



# RayTracingAccelerationStructureBuildFlags





enumeration


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



















### Description



Specifies how Unity builds the acceleration structure on the GPU.





Note that some flags might not be compatible with each other.

Additional resources: [Settings](Rendering.RayTracingAccelerationStructure.Settings.html), [RayTracingMeshInstanceConfig](Rendering.RayTracingMeshInstanceConfig.html), [RayTracingAABBsInstanceConfig](Rendering.RayTracingAABBsInstanceConfig.html), [BuildSettings](Rendering.RayTracingAccelerationStructure.BuildSettings.html).





### Properties



| Property | Description |
| --- | --- |
| None | Specify no options for the acceleration structure build. |
| PreferFastTrace | Build a high quality acceleration structure, increasing build time but maximizing ray tracing performance. |
| PreferFastBuild | Build a lower quality acceleration structure, minimizing build time but decreasing ray tracing performance. |
| MinimizeMemory | Minimize the amount of temporary memory Unity uses when it builds the acceleration structure, and minimize the size of the result. |


            
