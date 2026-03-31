This version of Unity is unsupported.



# MeshGenerationResult





struct in
          UnityEngine.XR



/



Implemented in:[UnityEngine.XRModule](UnityEngine.XRModule.html)


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



Contains event information related to a generated mesh.





This struct is used by the [XRMeshSubsystem](XR.XRMeshSubsystem.html) to provide information about the result of [XRMeshSubsystem.GenerateMeshAsync](XR.XRMeshSubsystem.GenerateMeshAsync.html).





### Properties



| Property | Description |
| --- | --- |
| Attributes | The MeshVertexAttributes that were written to the MeshGenerationResult.Mesh. |
| Mesh | If the generation was successful, data has been written to this Mesh. |
| MeshCollider | If the generation was successful, physics data has been written to this MeshCollider. |
| MeshId | The MeshId of the tracked mesh that was generated. |
| Position | The position associated with the generated mesh relative to the session origin. |
| Rotation | The rotation associated with the generated mesh relative to the session origin. |
| Scale | The scale associated with the generated mesh relative to the session origin. |
| Status | The MeshGenerationStatus of the mesh generation task. |
| Timestamp | The timestamp associated with the generated mesh. |


            
