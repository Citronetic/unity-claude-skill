This version of Unity is unsupported.



# [Mesh.MeshData](Mesh.MeshData.html).subMeshCount




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




                [Switch to Manual](../Manual/class-Mesh.html)







                    public int subMeshCount;






### Description



The number of sub-meshes in the `MeshData`.





Each sub-mesh corresponds to a [Material](Material.html) in a [Renderer](Renderer.html), such as [MeshRenderer](MeshRenderer.html) or [SkinnedMeshRenderer](SkinnedMeshRenderer.html). A sub-mesh consists of a list of triangles, which refer to a set of vertices. Vertices can be shared between multiple sub-meshes.

If the `MeshData` is writeable, you can set the number of sub-meshes using this property. If the `MeshData` is read-only, this property is read-only.

Setting the submesh count to 0 clears any generated Mesh LODs.

Additional resources: [Mesh.subMeshCount](Mesh-subMeshCount.html), [GetSubMesh](Mesh.MeshData.GetSubMesh.html), [SetSubMesh](Mesh.MeshData.SetSubMesh.html), [GetIndices](Mesh.MeshData.GetIndices.html), [Mesh.AllocateWritableMeshData](Mesh.AllocateWritableMeshData.html), [Mesh.AcquireReadOnlyMeshData](Mesh.AcquireReadOnlyMeshData.html).


            
