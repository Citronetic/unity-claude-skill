This version of Unity is unsupported.



# [Mesh.MeshData](Mesh.MeshData.html).GetVertices




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

public void GetVertices(NativeArray<Vector3> outVertices);






### Parameters



| Parameter | Description |
| --- | --- |
| outVertices | The destination vertex positions array. |





### Description



Populates an array with the vertex positions from the `MeshData`.





The destination array must have at least [vertexCount](Mesh.MeshData-vertexCount.html) elements.
Unity will convert vertex position data into [Vector3](Vector3.html) format if needed.
Additional resources: [Mesh.GetVertices](Mesh.GetVertices.html), [HasVertexAttribute](Mesh.MeshData.HasVertexAttribute.html), [Mesh.AcquireReadOnlyMeshData](Mesh.AcquireReadOnlyMeshData.html).


            
