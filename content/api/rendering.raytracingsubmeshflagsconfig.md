This version of Unity is unsupported.



# RayTracingSubMeshFlagsConfig





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



A structure used by [RayTracingAccelerationStructure.CullInstances](Rendering.RayTracingAccelerationStructure.CullInstances.html) that defines the [RayTracingSubMeshFlags](Rendering.RayTracingSubMeshFlags.html) values for different Material types.





This configuration determines the behavior of Meshes or individual sub-meshes based on their Material type when building an acceleration structure or when performing ray tracing.

Additional resources: [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).





### Properties



| Property | Description |
| --- | --- |
| alphaTestedMaterials | The corresponding RayTracingSubMeshFlags value for alpha tested Materials. |
| opaqueMaterials | The corresponding RayTracingSubMeshFlags value for opaque Materials. |
| transparentMaterials | The corresponding RayTracingSubMeshFlags value for transparent Materials. |


            
