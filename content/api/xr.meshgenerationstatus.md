This version of Unity is unsupported.



# MeshGenerationStatus





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



The status of a [XRMeshSubsystem.GenerateMeshAsync](XR.XRMeshSubsystem.GenerateMeshAsync.html).





[XRMeshSubsystem.GenerateMeshAsync](XR.XRMeshSubsystem.GenerateMeshAsync.html) will always invoke the provided delegate when the generation completes. This enum contains information about whether the generation was successful, or if an error occurred.

                Additional resources: [XRMeshSubsystem.GenerateMeshAsync](XR.XRMeshSubsystem.GenerateMeshAsync.html)





### Properties



| Property | Description |
| --- | --- |
| Success | The mesh generation was successful. |
| InvalidMeshId | The mesh generation failed because the mesh does not exist. |
| GenerationAlreadyInProgress | The XRMeshSubsystem was already generating the requested mesh. |
| Canceled | The mesh generation was canceled. |
| UnknownError | The mesh generation failed for unknown reasons. |


            
