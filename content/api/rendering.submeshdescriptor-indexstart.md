This version of Unity is unsupported.



# [SubMeshDescriptor](Rendering.SubMeshDescriptor.html).indexStart




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












                    public int indexStart;






### Description



Starting point inside the whole Mesh index buffer where the face index data is found.





This property, together with [indexCount](Rendering.SubMeshDescriptor-indexCount.html), determines which part of the whole index buffer is used by
a particular sub-mesh. Values in the index buffer are interpreted according to the [topology](Rendering.SubMeshDescriptor-topology.html) property,
for example the usual [MeshTopology.Triangles](MeshTopology.Triangles.html) topology needs three indices for each triangle.

Additional resources: [indexCount](Rendering.SubMeshDescriptor-indexCount.html), [Mesh.SetSubMesh](Mesh.SetSubMesh.html), [Mesh.GetSubMesh](Mesh.GetSubMesh.html), [Mesh.SetIndexBufferParams](Mesh.SetIndexBufferParams.html), [Mesh.SetIndexBufferData](Mesh.SetIndexBufferData.html).


            
