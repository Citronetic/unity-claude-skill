This version of Unity is unsupported.



# RayTracingModeMask





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



Flags that determine which RayTracingAccelerationStructure.RayTracingModes ray tracing instances must have in order to be added to the [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).





Additional resources: [Settings](Rendering.RayTracingAccelerationStructure.Settings.html).





### Properties



| Property | Description |
| --- | --- |
| Nothing | Disable adding ray tracing instances to a RayTracingAccelerationStructure. |
| Static | Add only ray tracing instances set to RayTracingMode.Static to the RayTracingAccelerationStructure. |
| DynamicTransform | Add only ray tracing instances that use RayTracingMode.DynamicTransform to a RayTracingAccelerationStructure. |
| DynamicGeometry | Add only ray tracing instances that use RayTracingMode.DynamicGeometry to a RayTracingAccelerationStructure. |
| DynamicGeometryManualUpdate | Add only ray tracing instances that use RayTracingMode.DynamicGeometryManualUpdate to a RayTracingAccelerationStructure. |
| Everything | Add all ray tracing instances to a RayTracingAccelerationStructure except for those that use RayTracingMode.Off. |


            
