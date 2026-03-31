This version of Unity is unsupported.



# RayTracingInstanceTriangleCullingConfig





struct in
          UnityEngine.Rendering



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



This structure is used by [RayTracingAccelerationStructure.CullInstances](Rendering.RayTracingAccelerationStructure.CullInstances.html) function to determine triangle culling and vertex winding order for ray tracing instances.





Additional resources: [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).





### Properties



| Property | Description |
| --- | --- |
| checkDoubleSidedGIMaterial | Whether to check Material.doubleSidedGI property for determine if a ray tracing instance is considered having double sided geometry. |
| forceDoubleSided | Disables triangle culling when rays encounter geometries during acceleration structure traversal on the GPU. All other options that affect triangle culling are ignored. |
| frontTriangleCounterClockwise | This property reverses front and back facings triangles, which is useful if for example, the application’s natural winding order differs from the default. |
| optionalDoubleSidedShaderKeywords | An array of Shader Keywords for defining double-sided geometries. |


            
