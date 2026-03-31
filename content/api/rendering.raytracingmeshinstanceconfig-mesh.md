This version of Unity is unsupported.



# [RayTracingMeshInstanceConfig](Rendering.RayTracingMeshInstanceConfig.html).mesh




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












                    public [Mesh](Mesh.html) mesh;






### Description



The [mesh](Mesh.html) to add to a [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).





If the mesh is destroyed then Unity automatically removes all ray tracing instances that were using the mesh from the [RayTracingAccelerationStructure](Rendering.RayTracingAccelerationStructure.html).

Unity only ray traces triangle-based geometries. It does not ray trace other [MeshTopology](MeshTopology.html) types.


            
