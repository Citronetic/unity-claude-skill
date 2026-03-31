This version of Unity is unsupported.



# [Mesh.MeshData](Mesh.MeshData.html).GetNormals




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

public void GetNormals(NativeArray<Vector3> outNormals);






### Parameters



| Parameter | Description |
| --- | --- |
| outNormals | The destination vertex normals array. |





### Description



Populates an array with the vertex normals from the `MeshData`.





The destination array must have at least [vertexCount](Mesh.MeshData-vertexCount.html) elements. The normal at each index corresponds to the vertex with the same index.
Vertex normal data will be converted into [Vector3](Vector3.html) format if needed.
Additional resources: [Mesh.GetNormals](Mesh.GetNormals.html), [HasVertexAttribute](Mesh.MeshData.HasVertexAttribute.html), [Mesh.AcquireReadOnlyMeshData](Mesh.AcquireReadOnlyMeshData.html).


            
