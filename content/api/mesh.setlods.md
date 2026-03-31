This version of Unity is unsupported.



# [Mesh](Mesh.html).SetLods




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

public void SetLods(MeshLodRange[] levels,
int start,
int count,
int submesh,
[Rendering.MeshUpdateFlags](Rendering.MeshUpdateFlags.html) flags);






## Declaration

public void SetLods(MeshLodRange[] levels,
int submesh,
[Rendering.MeshUpdateFlags](Rendering.MeshUpdateFlags.html) flags);






### Parameters



| Parameter | Description |
| --- | --- |
| flags | Mesh update flags. If set to DontValidateIndices, then index range validation is skipped. |
| start | Starting index in the array. |
| count | Count of elements in array. |
| submesh | The sub-mesh index to set LODS for. |
| levelRanges | Index ranges for the mesh. |





### Description



Sets the Mesh LOD ranges (index start and index count) for a given sub-mesh with an array.





Note that each Mesh LOD range should be relative to the sub-mesh holding the LOD. See [MeshLodRange](MeshLodRange.html) for more information.




---








## Declaration

public void SetLods(List<MeshLodRange> levels,
int submesh,
[Rendering.MeshUpdateFlags](Rendering.MeshUpdateFlags.html) flags);






## Declaration

public void SetLods(List<MeshLodRange> levels,
int start,
int count,
int submesh,
[Rendering.MeshUpdateFlags](Rendering.MeshUpdateFlags.html) flags);






### Parameters



| Parameter | Description |
| --- | --- |
| submesh | Sub-mesh index to set LODs for. |
| levelRanges | Index ranges for the mesh. |
| flags | Mesh update flags.  If set to DontValidateIndices, then index range validation is skipped. |
| start | Starting index in the array. |
| count | Count of elements in array. |





### Description



Sets the Mesh LOD ranges (index start and index count) for a given sub-mesh and Mesh LOD with a list.





Note that each Mesh LOD range should be relative to the sub-mesh holding the LOD. See [MeshLodRange](MeshLodRange.html) for more information.




---








## Declaration

public void SetLods(NativeArray<MeshLodRange> levels,
int start,
int count,
int submesh,
[Rendering.MeshUpdateFlags](Rendering.MeshUpdateFlags.html) flags);






## Declaration

public void SetLods(NativeArray<MeshLodRange> levels,
int submesh,
[Rendering.MeshUpdateFlags](Rendering.MeshUpdateFlags.html) flags);






### Parameters



| Parameter | Description |
| --- | --- |
| submesh | Sub-mesh index to set LODs for. |
| levelRanges | Index ranges for the mesh. |
| flags | Mesh update flags.  If set to DontValidateIndices, then index range validation is skipped. |
| start | Starting index in the array. |
| count | Count of elements in array. |





### Description



Set a LOD ranges for a given submesh with a NativeArray.





Note that each Mesh LOD range should be relative to the sub-mesh holding the LOD. See [MeshLodRange](MeshLodRange.html) for more information.


            
