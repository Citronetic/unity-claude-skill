This version of Unity is unsupported.



# [Mesh](Mesh.html).ApplyAndDisposeWritableMeshData




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

public static void ApplyAndDisposeWritableMeshData([Mesh.MeshDataArray](Mesh.MeshDataArray.html) data,
[Mesh](Mesh.html) mesh,
[Rendering.MeshUpdateFlags](Rendering.MeshUpdateFlags.html) flags);






## Declaration

public static void ApplyAndDisposeWritableMeshData([Mesh.MeshDataArray](Mesh.MeshDataArray.html) data,
Mesh[] meshes,
[Rendering.MeshUpdateFlags](Rendering.MeshUpdateFlags.html) flags);






## Declaration

public static void ApplyAndDisposeWritableMeshData([Mesh.MeshDataArray](Mesh.MeshDataArray.html) data,
List<Mesh> meshes,
[Rendering.MeshUpdateFlags](Rendering.MeshUpdateFlags.html) flags);






### Parameters



| Parameter | Description |
| --- | --- |
| data | The mesh data array, see MeshDataArray. |
| mesh | The destination Mesh. Mesh data array must be of size 1. |
| meshes | The destination Meshes. Must match the size of mesh data array. |
| flags | The mesh data update flags, see MeshUpdateFlags. |





### Description



Applies data defined in `MeshData` structs to Mesh objects.





`ApplyAndDisposeWritableMeshData` takes a [MeshDataArray](Mesh.MeshDataArray.html) containing writeable `MeshData` structs, and applies the vertex buffer, index buffer, and sub-mesh data to [Mesh](Mesh.html) objects. Use this to create new Meshes using the C# Job System and Burst.

After `ApplyAndDisposeWritableMeshData` is called, the `MeshDataArray` struct is disposed and can no longer be used.

                    Using this method, Unity performs very little data validation, so you must ensure your data is valid. In particular, you must ensure that the sub-mesh index range and topology are set to correct values. Sub-mesh indices, both indexStart and indexCount from [SubMeshDescriptor](Rendering.SubMeshDescriptor.html), must not overlap with any other sub-mesh indices.

                    When using Mesh LODs, you must also ensure that the provided index range for each of the sub-meshes is large enough to contain all levels of detail used within that sub-mesh. You can disable validation by setting `flags` to [MeshUpdateFlags.DontValidateLodRanges](Rendering.MeshUpdateFlags.DontValidateLodRanges.html).

                    Additional resources: [AllocateWritableMeshData](Mesh.AllocateWritableMeshData.html), [MeshDataArray](Mesh.MeshDataArray.html), [MeshData](Mesh.MeshData.html).


            
