This version of Unity is unsupported.



# [Mesh.MeshData](Mesh.MeshData.html).GetColors




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

public void GetColors(NativeArray<Color> outColors);






## Declaration

public void GetColors(NativeArray<Color32> outColors);






### Parameters



| Parameter | Description |
| --- | --- |
| outColors | The destination vertex colors array. |





### Description



Populates an array with the vertex colors from the `MeshData`.





The destination array must have at least [vertexCount](Mesh.MeshData-vertexCount.html) elements. The color at each index corresponds to the vertex with the same index.
Vertex color data will be converted into [Color](Color.html) or [Color32](Color32.html) format if needed.
Additional resources: [Mesh.GetColors](Mesh.GetColors.html), [HasVertexAttribute](Mesh.MeshData.HasVertexAttribute.html), [Mesh.AcquireReadOnlyMeshData](Mesh.AcquireReadOnlyMeshData.html).


            
