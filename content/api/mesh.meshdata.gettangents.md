This version of Unity is unsupported.



# [Mesh.MeshData](Mesh.MeshData.html).GetTangents




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

public void GetTangents(NativeArray<Vector4> outTangents);






### Parameters



| Parameter | Description |
| --- | --- |
| outTangents | The destination vertex tangents array. |





### Description



Populates an array with the vertex tangents from the `MeshData`.





The destination array must have at least [vertexCount](Mesh.MeshData-vertexCount.html) elements. The tangent at each index corresponds to the vertex with the same index.
Vertex tangent data will be converted into [Vector4](Vector4.html) format if needed.
Additional resources: [Mesh.GetTangents](Mesh.GetTangents.html), [HasVertexAttribute](Mesh.MeshData.HasVertexAttribute.html), [Mesh.AcquireReadOnlyMeshData](Mesh.AcquireReadOnlyMeshData.html).


            
