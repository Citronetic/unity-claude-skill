This version of Unity is unsupported.



# [RayTracingInstanceTriangleCullingConfig](Rendering.RayTracingInstanceTriangleCullingConfig.html).optionalDoubleSidedShaderKeywords




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












                    public string[] optionalDoubleSidedShaderKeywords;






### Description



An array of Shader Keywords for defining double-sided geometries.





If a Shader Keyword from the list is enabled at the time when [RayTracingAccelerationStructure.CullInstances](Rendering.RayTracingAccelerationStructure.CullInstances.html) is called, then the geometry that uses that Shader will be considered double-sided when rays encounter the geometry during acceleration structure traversal on the GPU.

Additional resources: [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).


            
