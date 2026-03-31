This version of Unity is unsupported.



# [MeshUpdateFlags](Rendering.MeshUpdateFlags.html).DontRecalculateBounds




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



Indicates that Unity should not recalculate the bounds when you set Mesh data using [Mesh.SetSubMesh](Mesh.SetSubMesh.html).





When you use [Mesh.SetSubMesh](Mesh.SetSubMesh.html) to modify a Mesh's data, Unity's default behaviour is to re-calculate the values of the [SubMeshDescriptor.bounds](Rendering.SubMeshDescriptor-bounds.html), SubMeshDescriptor.startVertex and
[SubMeshDescriptor.vertexCount](Rendering.SubMeshDescriptor-vertexCount.html) fields from the current vertex and index buffer data.

You can make Unity skip these calculations by using the `MeshUpdateFlags.DontRecalculateBounds` flag. This can be beneficial to performance, however if you use this flag you must make sure that you pass correct values of the `bounds`, `startVertex` and `vertexCount` fields.

Additional resources: [Mesh.SetSubMesh](Mesh.SetSubMesh.html).


            
