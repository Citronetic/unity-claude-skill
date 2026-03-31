This version of Unity is unsupported.



# RayTracingInstanceCullingMaterialTest





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



This structure is used by [RayTracingAccelerationStructure.CullInstances](Rendering.RayTracingAccelerationStructure.CullInstances.html) function to avoid adding Renderers to the acceleration structure or to ignore individual sub-meshes in a Mesh based on Shaders used by Materials when building the acceleration structure.





The Shader Tags and Shader Pass names defined in the Shader used by a Material are part of the test. The test passes if the following conditions are met:



          - If deniedShaderPasses array is empty or the Shader used by a Material doesn’t contain Shader Passes from the array.

          - If requiredShaderTags array is empty or the Shader used by a Material contains one of the Shader Tags from the array.





Additional resources: [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).





### Properties



| Property | Description |
| --- | --- |
| deniedShaderPasses | An array of Shader Pass names used by RayTracingAccelerationStructure.CullInstances to ignore Renderers or individual sub-meshes. |
| requiredShaderTags | An array of Shader Tags used by RayTracingAccelerationStructure.CullInstances to ignore Renderers or individual sub-meshes. |


            
