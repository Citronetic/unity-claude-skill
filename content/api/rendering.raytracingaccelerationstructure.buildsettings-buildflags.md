This version of Unity is unsupported.



# [RayTracingAccelerationStructure.BuildSettings](Rendering.RayTracingAccelerationStructure.BuildSettings.html).buildFlags




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












                    public [Rendering.RayTracingAccelerationStructureBuildFlags](Rendering.RayTracingAccelerationStructureBuildFlags.html) buildFlags;






### Description



The [build flags](Rendering.RayTracingAccelerationStructureBuildFlags.html) Unity uses to build a [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).





For acceleration structure implementations that use a two-level hierarchy, for example DirectX Raytracing (DXR), Unity uses these flags to build the top-level acceleration structure (TLAS).

To customize the flags Unity uses to build the bottom-level acceleration structures (BLAS), use [Renderer](Renderer.html) settings or the parameters in the [RayTracingAccelerationStructure.AddInstance](Rendering.RayTracingAccelerationStructure.AddInstance.html) method.


            
