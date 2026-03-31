This version of Unity is unsupported.



# RayTracingMode





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



Options for updating a ray tracing instance added to a [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).





Additional resources: [SystemInfo.supportsRayTracing](SystemInfo-supportsRayTracing.html).





### Properties



| Property | Description |
| --- | --- |
| Off | Use this mode to ensure the ray tracing instances are not added to a RayTracingAccelerationStructure, and that they cannot be ray traced. |
| Static | Use this mode to have the ray tracing instances remain static, and never update their transformation or geometry. |
| DynamicTransform | Use this mode to have ray tracing instances update the transformation. This mode does not update their geometry. |
| DynamicGeometry | Use this mode when the associated geometry or transformation can change. |
| DynamicGeometryManualUpdate | Use this mode when the associated geometry or transformation can change. Call RayTracingAccelerationStructure.UpdateInstanceGeometry to mark the geometry as dirty. |


            
