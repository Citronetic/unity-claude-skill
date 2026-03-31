This version of Unity is unsupported.



# [MeshGenerationResult](XR.MeshGenerationResult.html).Attributes




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












                    public [XR.MeshVertexAttributes](XR.MeshVertexAttributes.html) Attributes;






### Description



The [MeshVertexAttributes](XR.MeshVertexAttributes.html) that were written to the [MeshGenerationResult.Mesh](XR.MeshGenerationResult.Mesh.html).





The vertex attributes will be the intersection of those requested by the caller of [XRMeshSubsystem.GenerateMeshAsync](XR.XRMeshSubsystem.GenerateMeshAsync.html) and what the subsystem's mesh provider is able to supply. For example, if you request vertex tangents, but the mesh provider cannot supply them, then [MeshGenerationResult.Attributes](XR.MeshGenerationResult.Attributes.html) will not include tangents.

                    Additional resources: [XRMeshSubsystem.GenerateMeshAsync](XR.XRMeshSubsystem.GenerateMeshAsync.html)


            
