This version of Unity is unsupported.



# [SubMeshDescriptor](Rendering.SubMeshDescriptor.html).firstVertex




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












                    public int firstVertex;






### Description



First vertex in the index buffer for this sub-mesh.





Together with [vertexCount](Rendering.SubMeshDescriptor-vertexCount.html), this defines the range of vertices that are possibly used by this sub-mesh.
These values are important for any CPU-based mesh processing that would be done, for example
dynamic batching or CPU skinning.

The [bounds](Rendering.SubMeshDescriptor-bounds.html), [firstVertex](Rendering.SubMeshDescriptor-firstVertex.html) and [vertexCount](Rendering.SubMeshDescriptor-vertexCount.html) values are calculated automatically by [Mesh.SetSubMesh](Mesh.SetSubMesh.html), unless
[MeshUpdateFlags.DontRecalculateBounds](Rendering.MeshUpdateFlags.DontRecalculateBounds.html) flag is passed.

Additional resources: [vertexCount](Rendering.SubMeshDescriptor-vertexCount.html).


            
