This version of Unity is unsupported.



# MeshTransform





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



Contains transform information related to a tracked mesh.





This struct is used by the [XRMeshSubsystem](XR.XRMeshSubsystem.html) to communication information about a mesh's transform.

                Additional resources: [XRMeshSubsystem.GetUpdatedMeshTransforms](XR.XRMeshSubsystem.GetUpdatedMeshTransforms.html)





### Properties



| Property | Description |
| --- | --- |
| MeshId | The session-unique identifier of the tracked mesh. |
| Position | The position of the mesh, relative to the session origin. |
| Rotation | The rotation of the mesh, relative to the session origin. |
| Scale | The scale of the mesh, relative to the session origin. |
| Timestamp | The timestamp associated with this transform. |





### Constructors



| Constructor | Description |
| --- | --- |
| MeshTransform | Creates a new MeshTransform. |


            
