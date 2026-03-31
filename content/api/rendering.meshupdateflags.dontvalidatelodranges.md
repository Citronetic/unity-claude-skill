This version of Unity is unsupported.



# [MeshUpdateFlags](Rendering.MeshUpdateFlags.html).DontValidateLodRanges




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



Use this value to disable the validation of Mesh LOD ranges when modifying mesh data.





When you use Mesh.MeshData.SetLodData, [Mesh.SetSubMesh](Mesh.SetSubMesh.html), or [Mesh.ApplyAndDisposeWritableMeshData](Mesh.ApplyAndDisposeWritableMeshData.html) to modify mesh data, Unity's default behavior is to validate the LOD ranges you provided. The validation checks for out-of-bounds index ranges, and Unity throws an exception if it finds any.

                You can make Unity skip the validation by using this flag, which might improve performance. If you use this flag, make sure that you pass valid data to the mesh importer.

Additional resources: Mesh.MeshData.SetLodData, [Mesh.SetSubMesh](Mesh.SetSubMesh.html), [Mesh.ApplyAndDisposeWritableMeshData](Mesh.ApplyAndDisposeWritableMeshData.html).


            
