This version of Unity is unsupported.



# RayTracingGeometryInstanceConfig





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



Parameters you can use to configure ray tracing triangle geometry instances that are part of a [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).





The triangle geometry is specified using [GraphicsBuffers](GraphicsBuffer.html) containing vertex and index data and additional parameters.

Additional resources: [RayTracingAccelerationStructure.AddInstance](Rendering.RayTracingAccelerationStructure.AddInstance.html), [RayTracingAccelerationStructure.AddInstancesIndirect](Rendering.RayTracingAccelerationStructure.AddInstancesIndirect.html).





### Properties



| Property | Description |
| --- | --- |
| accelerationStructureBuildFlags | The flags Unity uses when it builds the acceleration structure for the geometry referenced by this ray tracing instance configuration. |
| accelerationStructureBuildFlagsOverride | Whether to override the build flags specified when creating a RayTracingAccelerationStructure. |
| enableTriangleCulling | Whether front/back face culling for this ray tracing instance is enabled. |
| frontTriangleCounterClockwise | Whether to flip the way triangles face in this ray tracing instance. |
| indexBuffer | The index buffer that Unity uses to define the ray tracing geometry instance. |
| indexCount | The amount of indices from indexBuffer that defines this ray tracing geometry instance. |
| indexStart | The first index from indexBuffer that defines this ray tracing geometry instance. |
| layer | The layer used by the ray tracing instance. |
| lightProbeProxyVolume | The LightProbeProxyVolume the ray tracing instance uses. |
| lightProbeUsage | The Light Probe interpolation type for this instance. |
| mask | The ray tracing instance mask. |
| material | The material the ray tracing instance uses. |
| materialProperties | Additional material properties to apply onto material. |
| motionVectorMode | Motion vector mode. |
| rayTracingMode | The RayTracingMode that you can use to control how the geometry associated with a ray tracing instance is updated. |
| renderingLayerMask | A mask that you can access in HLSL with unity_RenderingLayer built-in shader uniform. |
| subMeshFlags | Flags that determine the ray-geometry intersection behavior relative to material type during ray tracing. |
| vertexAttributes | An array of vertex attributes that define the vertex format of vertexBuffer. |
| vertexBuffer | The vertex buffer that Unity uses to define the ray tracing geometry instance. |
| vertexCount | The amount of vertices from vertexBuffer that defines this ray tracing geometry instance. |
| vertexStart | The index of the first vertex from vertexBuffer that defines this ray tracing geometry instance. |


            
