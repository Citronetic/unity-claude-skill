This version of Unity is unsupported.



# RayTracingInstanceCullingTest





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



A testing configuration used in [RayTracingAccelerationStructure.CullInstances](Rendering.RayTracingAccelerationStructure.CullInstances.html) for adding Renderers to an acceleration structure based on their layer, [ShadowCastingMode](Rendering.ShadowCastingMode.html) and Material type.





Typically, each ray tracing effect can use a dedicated [RayTracingInstanceCullingTest](Rendering.RayTracingInstanceCullingTest.html) configuration.

If the test passes, the value of instanceMask will be ORed into a final 8-bit ray tracing instance mask. When casting rays on the GPU using *TraceRay* HLSL function, the *instanceInclusionMask* argument of *TraceRay* is ANDed with the final 8-bit instance mask to include or reject ray tracing instances during acceleration structure traversal.

Additional resources: [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).





### Properties



| Property | Description |
| --- | --- |
| allowAlphaTestedMaterials | Whether to allow Renderers that use alpha tested Materials. |
| allowOpaqueMaterials | Whether to allow Renderers that use opaque Materials. |
| allowTransparentMaterials | Whether to allow Renderers that use transparent Materials. |
| allowVisualEffects | Whether to allow VFXRenderers. |
| instanceMask | An instance mask which affects ray-instance masking during ray tracing on the GPU. |
| layerMask | A value that indicates which layers are accepted by this testing configuration. |
| shadowCastingModeMask | A value that indicates which ShadowCastingMode values are acccepted by this testing configuration. |


            
