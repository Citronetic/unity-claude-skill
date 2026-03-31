This version of Unity is unsupported.



# [Mesh](Mesh.html).GetIndices




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










## Declaration

public int[] GetIndices(int submesh,
bool applyBaseVertex = true);






## Declaration

public int[] GetIndices(int submesh,
int meshLod,
bool applyBaseVertex);






### Parameters



| Parameter | Description |
| --- | --- |
| submesh | The sub-mesh index. See subMeshCount. |
| applyBaseVertex | True (default value) will apply base vertex offset to returned indices. |
| meshLod | The Mesh LOD index. Use -1 to get the entire sub-mesh. |





### Returns



**int[]**
        Array with face indices.





### Description



Fetches the index list for the specified sub-mesh.





Each integer in the returned list is a vertex index, which is used as an offset into the Mesh's vertex arrays. See [vertices](Mesh-vertices.html) and [GetVertices](Mesh.GetVertices.html). The layout of the indices depends on the [MeshTopology](MeshTopology.html) of the sub-mesh. For example, a triangular mesh will return indices in multiples of three.

A sub-mesh represents a list of triangles (or indices with a different [MeshTopology](MeshTopology.html)) that are rendered using a single [Material](Material.html). When the Mesh is used with a [Renderer](Renderer.html) that has multiple materials, you should ensure that there is one sub-mesh per Material.

Call the method overload with a `List` parameter if you control the life cycle of the index buffer and wish to avoid allocation of a new array with every access.

Additional resources: [subMeshCount](Mesh-subMeshCount.html), [GetTopology](Mesh.GetTopology.html), [MeshTopology](MeshTopology.html) enum, [AcquireReadOnlyMeshData](Mesh.AcquireReadOnlyMeshData.html) function.




---








## Declaration

public void GetIndices(List<int> indices,
int submesh,
bool applyBaseVertex = true);






## Declaration

public void GetIndices(List<int> indices,
int submesh,
int meshLod,
bool applyBaseVertex);






## Declaration

public void GetIndices(List<ushort> indices,
int submesh,
bool applyBaseVertex);






## Declaration

public void GetIndices(List<ushort> indices,
int submesh,
int meshLod,
bool applyBaseVertex);






### Parameters



| Parameter | Description |
| --- | --- |
| indices | A list of indices to populate. |
| submesh | The sub-mesh index. See subMeshCount. |
| applyBaseVertex | True (default value) will apply base vertex offset to returned indices. |
| meshLod | The Mesh LOD index. |





### Description



Use this method overload if you control the life cycle of the list passed in and you want to avoid allocating a new array with every access.


            
