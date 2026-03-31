This version of Unity is unsupported.



# RayTracingAABBsInstanceConfig





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



The parameters you use to add an instance of ray tracing axis-aligned bounding boxes (AABBs) to a [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).





Use this structure to share parameters across different ray tracing AABBs instances.

Additional resources: [RayTracingAccelerationStructure.AddInstance](Rendering.RayTracingAccelerationStructure.AddInstance.html), [RayTracingAccelerationStructure.RemoveInstance](Rendering.RayTracingAccelerationStructure.RemoveInstance.html).





### Properties



| Property | Description |
| --- | --- |
| aabbBuffer | The GraphicsBuffer that defines a list of axis-aligned bounding boxes (AABBs). |
| aabbCount | The number of AABBs Unity uses when you build the acceleration structure for this ray tracing instance. |
| aabbOffset | The index of the first AABB Unity uses from RayTracingAABBsInstanceConfig.aabbBuffer. |
| accelerationStructureBuildFlags | The flags Unity uses when it builds the acceleration structure for the geometry referenced by this ray tracing instance configuration. |
| accelerationStructureBuildFlagsOverride | Whether to override the build flags specified when creating a RayTracingAccelerationStructure. |
| dynamicGeometry | Whether the data in RayTracingAABBsInstanceConfig.aabbBuffer is dynamic. |
| layer | The Layer used by the ray tracing instance. |
| mask | The ray tracing instance mask. |
| material | The Material the ray tracing instance uses. |
| materialProperties | Additional MaterialPropertyBlock properties to apply to the Material. |
| opaqueMaterial | Determines whether Unity considers the material opaque. |


            
