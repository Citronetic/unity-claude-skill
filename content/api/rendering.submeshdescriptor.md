This version of Unity is unsupported.



# SubMeshDescriptor





struct in
          UnityEngine.Rendering



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Contains information about a single sub-mesh of a [Mesh](Mesh.html).





Simple usage of [Mesh](Mesh.html) scripting API involves using functions like [Mesh.triangles](Mesh-triangles.html), [Mesh.vertices](Mesh-vertices.html) and so on.

For advanced use cases that require maximum performance, you can use the advanced API, which has functions like [Mesh.SetSubMesh](Mesh.SetSubMesh.html), [Mesh.SetIndexBufferParams](Mesh.SetIndexBufferParams.html), and [Mesh.SetIndexBufferData](Mesh.SetIndexBufferData.html). This advanced API gives access to the underlying mesh data structures that primarily work on raw index buffers, vertex buffers and mesh subset data.

A single sub-mesh represents part of the Mesh that is using one material. Many Meshes use just one material, but some
might use more. Information in a sub-mesh is composed of:



          - [indexStart](Rendering.SubMeshDescriptor-indexStart.html) - starting point inside the whole Mesh index buffer where the face index data of this subset is found. See [Mesh.SetIndexBufferParams](Mesh.SetIndexBufferParams.html) and [Mesh.SetIndexBufferData](Mesh.SetIndexBufferData.html).

          - [indexCount](Rendering.SubMeshDescriptor-indexCount.html) - index count for this sub-mesh. For example, in meshes with triangle topology, each triangle needs three indices.

          - [topology](Rendering.SubMeshDescriptor-topology.html) - topology of this sub-mesh, most often [MeshTopology.Triangles](MeshTopology.Triangles.html).

          - [baseVertex](Rendering.SubMeshDescriptor-baseVertex.html) - offset that is added to each value in the index buffer, to compute the final vertex index.

          - [bounds](Rendering.SubMeshDescriptor-bounds.html) - bounding box of vertices in local space.

          - [firstVertex](Rendering.SubMeshDescriptor-firstVertex.html) and [vertexCount](Rendering.SubMeshDescriptor-vertexCount.html) - range of vertices that are referenced by the index buffer of this sub-mesh.





The [bounds](Rendering.SubMeshDescriptor-bounds.html), [firstVertex](Rendering.SubMeshDescriptor-firstVertex.html) and [vertexCount](Rendering.SubMeshDescriptor-vertexCount.html) values are calculated automatically by [Mesh.SetSubMesh](Mesh.SetSubMesh.html), unless
[MeshUpdateFlags.DontRecalculateBounds](Rendering.MeshUpdateFlags.DontRecalculateBounds.html) flag is passed.

Additional resources: [Mesh.SetSubMesh](Mesh.SetSubMesh.html), [Mesh.GetSubMesh](Mesh.GetSubMesh.html), [Mesh.SetIndexBufferParams](Mesh.SetIndexBufferParams.html), [Mesh.SetIndexBufferData](Mesh.SetIndexBufferData.html).





### Properties



| Property | Description |
| --- | --- |
| baseVertex | Offset that is added to each value in the index buffer, to compute the final vertex index. |
| bounds | Bounding box of vertices in local space. |
| firstVertex | First vertex in the index buffer for this sub-mesh. |
| indexCount | Index count for this sub-mesh face data. |
| indexStart | Starting point inside the whole Mesh index buffer where the face index data is found. |
| topology | Face topology of this sub-mesh. |
| vertexCount | Number of vertices used by the index buffer of this sub-mesh. |





### Constructors



| Constructor | Description |
| --- | --- |
| SubMeshDescriptor | Create a submesh descriptor. |


            
