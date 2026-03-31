This version of Unity is unsupported.



# RayTracingInstanceCullingConfig





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



Parameters for culling and filtering ray tracing instances in [RayTracingAccelerationStructure.CullInstances](Rendering.RayTracingAccelerationStructure.CullInstances.html).





Additional resources: [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).





### Properties



| Property | Description |
| --- | --- |
| alphaTestedMaterialConfig | A configuration for defining when a Material is considered being alpha tested. |
| flags | The flags that control different options in RayTracingAccelerationStructure.CullInstances function. |
| instanceTests | An array of RayTracingInstanceCullingTest objects used add Renderers to the acceleration structure based on their layer, ShadowCastingMode and Material type. |
| lodParameters | Parameters used for LOD culling. |
| materialTest | A Material-based test used in RayTracingAccelerationStructure.CullInstances. |
| minSolidAngle | The minimum solid angle in degrees that Unity uses for culling ray tracing instances associated with the Renderers in a Scene. |
| planes | An array of planes used for culling ray tracing instances associated with the Renderers in a Scene. |
| sphereCenter | The center of the sphere used for culling ray tracing instances associated with the Renderers in a Scene. |
| sphereRadius | The radius of the sphere used for culling ray tracing instances associated with the Renderers in a Scene. |
| subMeshFlagsConfig | The configuration that defines the RayTracingSubMeshFlags values for different types of Materials. |
| transparentMaterialConfig | A configuration for defining when a Material is considered being transparent. |
| triangleCullingConfig | A structure used for specifying ray tracing instance triangle culling options and vertex winding. |


            
