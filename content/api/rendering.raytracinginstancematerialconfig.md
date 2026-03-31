This version of Unity is unsupported.



# RayTracingInstanceMaterialConfig





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



This structure is used by [RayTracingAccelerationStructure.CullInstances](Rendering.RayTracingAccelerationStructure.CullInstances.html) function to determine which types of Materials are used by Renderers when populating the acceleration structure with ray tracing instances.





[RayTracingAccelerationStructure.CullInstances](Rendering.RayTracingAccelerationStructure.CullInstances.html) function can ignore Renderers or sub-meshes that use different types of Materials as defined by this configuration. [RayTracingInstanceCullingConfig](Rendering.RayTracingInstanceCullingConfig.html) parameter contains one Material configuration for alpha tested Materials and one for transparent Materials. If a Material is not classified as transparent or alpha tested then is considered being opaque.

The Material type is defined by testing one of the following properties:



          - The render queue value used by the Shader or the one overriden by the Material using the Shader (see [Shader.renderQueue](Shader-renderQueue.html) and [Material.renderQueue](Material-renderQueue.html)). The value of the render queue has to be between renderQueueLowerBound and renderQueueUpperBound interval including these two values.

          - An optional [Shader Tag](../Manual/SL-SubShaderTags.html)  (e.g. Tags { "RenderType"="Transparent" }). The Shader used by a Material has to contain a Shader Tag from optionalShaderTags array.

          - An optional [Shader Keyword](../Manual/shader-keywords.html) (e.g. #pragma shader_feature_local _ALPHATEST_ON). A Shader Keyword from optionalShaderKeywords array has to be enabled at the time when [RayTracingAccelerationStructure.CullInstances](Rendering.RayTracingAccelerationStructure.CullInstances.html) is called.





Additional resources: [RayTracingInstanceCullingTest](Rendering.RayTracingInstanceCullingTest.html), [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).





### Properties



| Property | Description |
| --- | --- |
| optionalShaderKeywords | An array of Shader Keyword names used to determine the Material type. |
| optionalShaderTags | An array of Shader Tags used to determine the Material type. |
| renderQueueLowerBound | The lower limit of a render queue interval. |
| renderQueueUpperBound | The upper limit of a render queue interval. |


            
