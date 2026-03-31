This version of Unity is unsupported.



# [Mesh.MeshData](Mesh.MeshData.html).GetIndices




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

public void GetIndices(NativeArray<ushort> outIndices,
int submesh,
bool applyBaseVertex = true);






## Declaration

public void GetIndices(NativeArray<int> outIndices,
int submesh,
bool applyBaseVertex = true);






## Declaration

public void GetIndices(NativeArray<ushort> outIndices,
int submesh,
int meshlod,
bool applyBaseVertex = true);






## Declaration

public void GetIndices(NativeArray<int> outIndices,
int submesh,
int meshlod,
bool applyBaseVertex = true);






### Parameters



| Parameter | Description |
| --- | --- |
| outIndices | The destination indices array. |
| submesh | The index of the sub-mesh to get the indices for. See subMeshCount. |
| applyBaseVertex | If true, Unity will apply base vertex offset to the returned indices. The default value is true. |
| meshlod | The Mesh LOD index to get the indices for. Use -1 to get the entire submesh. See also: lodCount. |





### Description



Populates an array with the indices for a given sub-mesh from the `MeshData`.





The destination array must have enough elements to hold the index buffer of the given sub-mesh. See [GetSubMesh](Mesh.MeshData.GetSubMesh.html) and [SubMeshDescriptor.indexCount](Rendering.SubMeshDescriptor-indexCount.html).
Additional resources: [Mesh.GetIndices](Mesh.GetIndices.html), [subMeshCount](Mesh.MeshData-subMeshCount.html), [GetSubMesh](Mesh.MeshData.GetSubMesh.html).


            
