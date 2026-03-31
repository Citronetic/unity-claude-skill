This version of Unity is unsupported.



# [Mesh](Mesh.html).SetIndices




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

public void SetIndices(int[] indices,
[MeshTopology](MeshTopology.html) topology,
int submesh,
int meshLod,
bool calculateBounds,
int baseVertex);






## Declaration

public void SetIndices(int[] indices,
[MeshTopology](MeshTopology.html) topology,
int submesh,
bool calculateBounds = true,
int baseVertex = 0);






## Declaration

public void SetIndices(List<int> indices,
[MeshTopology](MeshTopology.html) topology,
int submesh,
bool calculateBounds,
int baseVertex);






## Declaration

public void SetIndices(List<int> indices,
[MeshTopology](MeshTopology.html) topology,
int submesh,
int meshLod,
bool calculateBounds,
int baseVertex);






## Declaration

public void SetIndices(ushort[] indices,
[MeshTopology](MeshTopology.html) topology,
int submesh,
bool calculateBounds,
int baseVertex);






## Declaration

public void SetIndices(ushort[] indices,
[MeshTopology](MeshTopology.html) topology,
int submesh,
int meshLod,
bool calculateBounds,
int baseVertex);






## Declaration

public void SetIndices(List<ushort> indices,
[MeshTopology](MeshTopology.html) topology,
int submesh,
bool calculateBounds,
int baseVertex);






## Declaration

public void SetIndices(List<ushort> indices,
[MeshTopology](MeshTopology.html) topology,
int submesh,
int meshLod,
bool calculateBounds,
int baseVertex);






## Declaration

public void SetIndices(NativeArray<T> indices,
[MeshTopology](MeshTopology.html) topology,
int submesh,
bool calculateBounds,
int baseVertex);






## Declaration

public void SetIndices(NativeArray<T> indices,
[MeshTopology](MeshTopology.html) topology,
int submesh,
int meshLod,
bool calculateBounds,
int baseVertex);






### Parameters



| Parameter | Description |
| --- | --- |
| indices | The array of indices that define the mesh faces. |
| topology | The topology of the Mesh, e.g: Triangles, Lines, Quads, Points, etc. See MeshTopology. |
| submesh | The sub-mesh to modify. |
| calculateBounds | Calculate the bounding box of the sub-mesh after setting the indices. Unity does this by default.
Use false when you want to use the existing bounding box and reduce the CPU cost of setting the indices. |
| baseVertex | Optional vertex offset that is added to all vertex indices. |
| meshLod | The Mesh LOD to modify. Use -1 to modify the entire sub-mesh. If not provided, LOD0 is modified. |





### Description



Sets the index buffer for the sub-mesh.





A sub-mesh represents a list of triangles (or indices with a different [MeshTopology](MeshTopology.html)) that are rendered using a single [Material](Material.html). When the Mesh is used with a [Renderer](Renderer.html) that has multiple materials, you should ensure that there is one sub-mesh per Material.

[SetTriangles](Mesh.SetTriangles.html) and [triangles](Mesh-triangles.html) always set the Mesh to be composed of triangle
faces. Use SetIndices to create a Mesh composed of lines or points.

The `baseVertex` argument can be used to achieve meshes that are larger than 65536 vertices while using 16 bit index buffers,
as long as each sub-mesh index fits within its own 65535 value range. For example, if the index buffer that is passed to SetIndices
contains indices 10,11,12 and `baseVertex` is set to 100000, then effectively vertices 100010, 100011 and 100012 will be
used for rendering.

Note that meshes use 16-bit [indexFormat](Mesh-indexFormat.html) by default, i.e. the maximum value supported in the index buffer is 65535 (even when using int[] input data). In order to use larger index buffer values, you should first set the [indexFormat](Mesh-indexFormat.html) to [IndexFormat.UInt32](Rendering.IndexFormat.UInt32.html).

Call [Mesh.RecalculateBounds](Mesh.RecalculateBounds.html) after updating all sub-meshes if you want to update the [Mesh](Mesh.html)'s bounding box.

Additional resources: [subMeshCount](Mesh-subMeshCount.html), [MeshTopology](MeshTopology.html), [indexFormat](Mesh-indexFormat.html).




---








## Declaration

public void SetIndices(int[] indices,
int indicesStart,
int indicesLength,
[MeshTopology](MeshTopology.html) topology,
int submesh,
bool calculateBounds,
int baseVertex);






## Declaration

public void SetIndices(int[] indices,
int indicesStart,
int indicesLength,
[MeshTopology](MeshTopology.html) topology,
int submesh,
int meshLod,
bool calculateBounds,
int baseVertex);






## Declaration

public void SetIndices(List<int> indices,
int indicesStart,
int indicesLength,
[MeshTopology](MeshTopology.html) topology,
int submesh,
bool calculateBounds,
int baseVertex);






## Declaration

public void SetIndices(List<int> indices,
int indicesStart,
int indicesLength,
[MeshTopology](MeshTopology.html) topology,
int submesh,
int meshLod,
bool calculateBounds,
int baseVertex);






## Declaration

public void SetIndices(ushort[] indices,
int indicesStart,
int indicesLength,
[MeshTopology](MeshTopology.html) topology,
int submesh,
bool calculateBounds,
int baseVertex);






## Declaration

public void SetIndices(ushort[] indices,
int indicesStart,
int indicesLength,
[MeshTopology](MeshTopology.html) topology,
int submesh,
int meshLod,
bool calculateBounds,
int baseVertex);






## Declaration

public void SetIndices(List<ushort> indices,
int indicesStart,
int indicesLength,
[MeshTopology](MeshTopology.html) topology,
int submesh,
bool calculateBounds,
int baseVertex);






## Declaration

public void SetIndices(List<ushort> indices,
int indicesStart,
int indicesLength,
[MeshTopology](MeshTopology.html) topology,
int submesh,
int meshLod,
bool calculateBounds,
int baseVertex);






## Declaration

public void SetIndices(NativeArray<T> indices,
int indicesStart,
int indicesLength,
[MeshTopology](MeshTopology.html) topology,
int submesh,
bool calculateBounds,
int baseVertex);






## Declaration

public void SetIndices(NativeArray<T> indices,
int indicesStart,
int indicesLength,
[MeshTopology](MeshTopology.html) topology,
int submesh,
int meshLod,
bool calculateBounds,
int baseVertex);






### Parameters



| Parameter | Description |
| --- | --- |
| indices | The array of indices that define the mesh faces. |
| indicesStart | Index of the first element to take from the input array. |
| indicesLength | Number of elements to take from the input array. |
| topology | The topology of the Mesh, e.g: Triangles, Lines, Quads, Points, etc. See MeshTopology. |
| submesh | The sub-mesh to modify. |
| calculateBounds | Calculate the bounding box of the sub-mesh after setting the indices. Unity does this by default.
Use false when you want to use the existing bounding box and reduce the CPU cost of setting the indices. |
| baseVertex | Optional vertex offset that is added to all vertex indices. |
| meshLod | Mesh level of detail to modify. |





### Description



Sets the index buffer of a sub-mesh, using a part of the input array.





This method behaves as if you called SetIndices with an array that is a slice of the whole array, starting at `indicesStart` index and being of a given `indicesLength` length. The resulting sub-mesh will have `indicesLength` amount of vertex indices.


            
