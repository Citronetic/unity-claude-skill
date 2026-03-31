This version of Unity is unsupported.



# [Mesh.MeshData](Mesh.MeshData.html).GetUVs




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

public void GetUVs(int channel,
NativeArray<Vector2> outUVs);






## Declaration

public void GetUVs(int channel,
NativeArray<Vector3> outUVs);






## Declaration

public void GetUVs(int channel,
NativeArray<Vector4> outUVs);






### Parameters



| Parameter | Description |
| --- | --- |
| channel | The UV channel, in [0..7] range. |
| outUVs | The destination texture coordinates array. |





### Description



Populates an array with the UVs from the `MeshData`.





The destination array must have at least [vertexCount](Mesh.MeshData-vertexCount.html) elements. The UV at each index corresponds to the vertex with the same index.
Texture coordinate data will be converted into [Vector2](Vector2.html), [Vector3](Vector3.html) or [Vector4](Vector4.html) format as needed.
Additional resources: [Mesh.GetUVs](Mesh.GetUVs.html), [HasVertexAttribute](Mesh.MeshData.HasVertexAttribute.html), [Mesh.AcquireReadOnlyMeshData](Mesh.AcquireReadOnlyMeshData.html).


            
