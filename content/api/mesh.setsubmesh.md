This version of Unity is unsupported.



# [Mesh](Mesh.html).SetSubMesh




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

public void SetSubMesh(int index,
[Rendering.SubMeshDescriptor](Rendering.SubMeshDescriptor.html) desc,
[Rendering.MeshUpdateFlags](Rendering.MeshUpdateFlags.html) flags);






### Parameters



| Parameter | Description |
| --- | --- |
| index | Sub-mesh index. See subMeshCount. Out of range indices throw an exception. |
| desc | Sub-mesh data. |
| flags | Flags controlling the function behavior, see MeshUpdateFlags. |





### Description



Sets the information about a sub-mesh of the Mesh.





Note that `SetSubMesh`, [SubMeshDescriptor](Rendering.SubMeshDescriptor.html), and [SetIndexBufferData](Mesh.SetIndexBufferData.html) are designed for advanced users aiming for maximum performance, because they operate on the underlying mesh data structures that primarily work on raw index buffers, vertex buffers and mesh subset data. Using these methods, Unity performs very little data validation, so you must ensure your data is valid.

                    In particular, you must ensure that the SubMesh index range and topology are set to correct values. SubMesh indices, both indexStart and indexCount, must not overlap with any other SubMesh indices.

                    If using Mesh LODs, you must also ensure that the provided index range for each of the sub-meshes is large enough to contain all levels of detail used within that sub-mesh. You may be required to invoke [Mesh.SetLods](Mesh.SetLods.html) prior to setting the subMesh. You can disable validation by setting `flags` to [MeshUpdateFlags.DontValidateLodRanges](Rendering.MeshUpdateFlags.DontValidateLodRanges.html).

                    For information about the difference between the simpler and more advanced methods of assigning data to a Mesh from script, see the notes on the [Mesh](Mesh.html) page.

                    The [SubMeshDescriptor-bounds](Rendering.SubMeshDescriptor-bounds.html), [SubMeshDescriptor-firstVertex](Rendering.SubMeshDescriptor-firstVertex.html) and [SubMeshDescriptor-vertexCount](Rendering.SubMeshDescriptor-vertexCount.html) values of [SubMeshDescriptor](Rendering.SubMeshDescriptor.html)
are calculated automatically by `SetSubMesh`, unless [MeshUpdateFlags.DontRecalculateBounds](Rendering.MeshUpdateFlags.DontRecalculateBounds.html) flag is passed. Note that this only applies to the bounds of the SubMesh. You must call [Mesh.RecalculateBounds](Mesh.RecalculateBounds.html) to recalculate the bounds of the Mesh itself.

                    General usage pattern is:


              


```
var mesh = new Mesh();// setup vertex buffer data
mesh.vertices = ...;// set index buffer
mesh.SetIndexBufferParams(...);
mesh.SetIndexBufferData(...);// setup information about mesh subsets
mesh.subMeshCount = ...;
mesh.SetSubMesh(index, ...);// update bounds of the mesh
mesh.RecalculateBounds();
```





For details on what data to set up for each sub-mesh, see [SubMeshDescriptor](Rendering.SubMeshDescriptor.html).

Additional resources: [subMeshCount](Mesh-subMeshCount.html), [GetSubMesh](Mesh.GetSubMesh.html), [SetIndexBufferParams](Mesh.SetIndexBufferParams.html), [SetIndexBufferData](Mesh.SetIndexBufferData.html), [MeshUpdateFlags](Rendering.MeshUpdateFlags.html).


            
