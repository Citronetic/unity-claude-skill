This version of Unity is unsupported.



# [MeshGenerationResult](XR.MeshGenerationResult.html).Timestamp




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












                    public ulong Timestamp;






### Description



The timestamp associated with the generated mesh.





Because generation is asynchronous, the transform provided by this [MeshGenerationResult](XR.MeshGenerationResult.html) may be older than the most recent transform provided by
                    [XRMeshSubsystem.GetUpdatedMeshTransforms](XR.XRMeshSubsystem.GetUpdatedMeshTransforms.html). Compare timestamps to ensure you are using the most recent transform.

                    Additional resources: [XRMeshSubsystem.GenerateMeshAsync](XR.XRMeshSubsystem.GenerateMeshAsync.html), [XRMeshSubsystem.GetUpdatedMeshTransforms](XR.XRMeshSubsystem.GetUpdatedMeshTransforms.html)


            
