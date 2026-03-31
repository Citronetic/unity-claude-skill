This version of Unity is unsupported.



# MeshInfo





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



Contains state information related to a tracked mesh.





This struct is used by the [XRMeshSubsystem](XR.XRMeshSubsystem.html) to determine which meshes have been added, updated, or removed.

                Additional resources: [XRMeshSubsystem.TryGetMeshInfos](XR.XRMeshSubsystem.TryGetMeshInfos.html)





### Properties



| Property | Description |
| --- | --- |
| ChangeState | The change state (e.g., Added, Removed) of the tracked mesh. |
| MeshId | The MeshId of the tracked mesh. |
| PriorityHint | A hint that can be used to determine when this mesh should be processed. |


            
