This version of Unity is unsupported.



# RayTracingMeshInstanceConfig





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



Parameters you can use to configure ray tracing [Mesh](Mesh.html) instances that are part of a [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).





This structure groups common parameters between different ray tracing instances.

Additional resources: [RayTracingAccelerationStructure.AddInstance](Rendering.RayTracingAccelerationStructure.AddInstance.html), [RayTracingAccelerationStructure.AddInstances](Rendering.RayTracingAccelerationStructure.AddInstances.html).





### Properties



| Property | Description |
| --- | --- |
| accelerationStructureBuildFlags | The flags Unity uses when it builds the acceleration structure for the geometry referenced by this ray tracing instance configuration. |
| accelerationStructureBuildFlagsOverride | Whether to override the build flags specified when creating a RayTracingAccelerationStructure. |
| enableTriangleCulling | Whether front/back face culling for this ray tracing instance is enabled. |
| frontTriangleCounterClockwise | Whether to flip the way triangles face in this ray tracing instance. |
| layer | The Layer used by the ray tracing instance. |
| lightProbeProxyVolume | The LightProbeProxyVolume the ray tracing instance uses. |
| lightProbeUsage | The Light probe interpolation type for this instance. |
| mask | The ray tracing instance mask. |
| material | The material the ray tracing instance uses. |
| materialProperties | Additional material properties to apply onto material. |
| mesh | The mesh to add to a RayTracingAccelerationStructure. |
| meshLod | The Mesh LOD to select for this instance. Does nothing if the mesh does not have Mesh LODs. A value of -1 will include the entire index range. |
| motionVectorMode | Motion vector mode. |
| rayTracingMode | The RayTracingMode that you can use to control how the geometry associated with a mesh ray tracing instance is updated. |
| renderingLayerMask | A mask that you can access in HLSL with unity_RenderingLayer built-in shader uniform. |
| subMeshFlags | Flags that determine how rays intersect the geometry for each sub-mesh relative to material type during ray tracing. |
| subMeshIndex | The index of a sub-mesh when the mesh contains multiple sub-meshes. |


            
