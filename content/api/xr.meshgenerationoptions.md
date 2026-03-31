This version of Unity is unsupported.



# MeshGenerationOptions





enumeration


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



Options for generating meshes.





Use this enum with [XRMeshSubsystem.GenerateMeshAsync](XR.XRMeshSubsystem.GenerateMeshAsync.html) to tell Unity how to handle data from the mesh provider.

                The mesh provider can supply a transform along with the mesh data. When this happens, the value of `MeshGenerationOptions` determines what Unity does with the supplied transform. If `ConsumeTransform` is set, Unity ignores the supplied transform. Otherwise, Unity applies the supplied transform to the vertices of the mesh, and rebakes the physics mesh. These transformation and rebaking operations can be CPU-intensive; if you do not need to perform these operations, you should set `ConsumeTransform`.

                If the mesh provider does not supply a transform, the value of `MeshGenerationOptions` has no effect.

                Additional resources: [XRMeshSubsystem.GenerateMeshAsync](XR.XRMeshSubsystem.GenerateMeshAsync.html), [MeshGenerationResult](XR.MeshGenerationResult.html)





### Properties



| Property | Description |
| --- | --- |
| None | No options are specified. |
| ConsumeTransform | Indicates you plan to consume the resulting mesh's transform. |


            
