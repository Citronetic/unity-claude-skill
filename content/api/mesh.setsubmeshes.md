This version of Unity is unsupported.



# [Mesh](Mesh.html).SetSubMeshes




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

public void SetSubMeshes(SubMeshDescriptor[] desc,
int start,
int count,
[Rendering.MeshUpdateFlags](Rendering.MeshUpdateFlags.html) flags);






## Declaration

public void SetSubMeshes(SubMeshDescriptor[] desc,
[Rendering.MeshUpdateFlags](Rendering.MeshUpdateFlags.html) flags);






## Declaration

public void SetSubMeshes(List<SubMeshDescriptor> desc,
int start,
int count,
[Rendering.MeshUpdateFlags](Rendering.MeshUpdateFlags.html) flags);






## Declaration

public void SetSubMeshes(List<SubMeshDescriptor> desc,
[Rendering.MeshUpdateFlags](Rendering.MeshUpdateFlags.html) flags);






## Declaration

public void SetSubMeshes(NativeArray<T> desc,
int start,
int count,
[Rendering.MeshUpdateFlags](Rendering.MeshUpdateFlags.html) flags);






## Declaration

public void SetSubMeshes(NativeArray<T> desc,
[Rendering.MeshUpdateFlags](Rendering.MeshUpdateFlags.html) flags);






### Parameters



| Parameter | Description |
| --- | --- |
| desc | An array or list of sub-mesh data descriptors. |
| start | Index of the first element to take from the array or list in desc. |
| count | Number of elements to take from the array or list in desc. |
| flags | (Optional) Flags controlling the function behavior, see MeshUpdateFlags. |





### Description



Sets information defining all sub-meshes in this [Mesh](Mesh.html), replacing any existing sub-meshes.





Note that [SetSubMeshes](Mesh.SetSubMeshes.html), [SetSubMesh](Mesh.SetSubMesh.html), [SubMeshDescriptor](Rendering.SubMeshDescriptor.html), and [SetIndexBufferData](Mesh.SetIndexBufferData.html) are designed for maximum performance. These functions operate on the underlying mesh data structures involving raw index buffers, vertex buffers and mesh subset data. When you use these methods, Unity performs very little data validation, so you must ensure your data is valid.

                    In particular, you must ensure that the [SubMeshDescriptor](Rendering.SubMeshDescriptor.html) index ranges and [SubMeshDescriptor.topology](Rendering.SubMeshDescriptor-topology.html) values are set to correct values. SubMesh indices, both indexStart and indexCount, must not overlap with any other SubMesh indices.

                    You must also ensure that for each of the SubMesh's meshLod the lodrange is contained within the newly set index range. You may be required to invoke [Mesh.SetLods](Mesh.SetLods.html) prior to setting the SubMesh. You can disable validation by setting `flags` to [MeshUpdateFlags.DontValidateLodRanges](Rendering.MeshUpdateFlags.DontValidateLodRanges.html).
                    If using Mesh LODs, you must also ensure that the provided index range for each of the sub-meshes is large enough to contain all levels of detail used within that sub-mesh. You may be required to invoke [Mesh.SetLods](Mesh.SetLods.html) prior to setting the subMesh. You can disable validation by setting `flags` to [MeshUpdateFlags.DontValidateLodRanges](Rendering.MeshUpdateFlags.DontValidateLodRanges.html).

                    For information about the difference between the simpler and more advanced methods of assigning data to a Mesh from script, see [Mesh](Mesh.html).

The [SubMeshDescriptor-bounds](Rendering.SubMeshDescriptor-bounds.html), [SubMeshDescriptor-firstVertex](Rendering.SubMeshDescriptor-firstVertex.html) and [SubMeshDescriptor-vertexCount](Rendering.SubMeshDescriptor-vertexCount.html) values of [SubMeshDescriptor](Rendering.SubMeshDescriptor.html) are calculated automatically by `SetSubMeshes`, unless [MeshUpdateFlags.DontRecalculateBounds](Rendering.MeshUpdateFlags.DontRecalculateBounds.html) flag is passed. Note that this only applies to the bounds of the SubMesh. You must call [Mesh.RecalculateBounds](Mesh.RecalculateBounds.html) to recalculate the bounds of the Mesh itself.

                    General usage pattern is:


              


```
var mesh = new Mesh();// setup vertex buffer data
mesh.vertices = ...;// set index buffer
mesh.SetIndexBufferParams(...);
mesh.SetIndexBufferData(...);// setup information about mesh subsets
SubMeshDescriptor[] sm = new SubMeshDescriptor[] {...}
mesh.SetSubMeshes(sm);// update bounds of the mesh
mesh.RecalculateBounds();
```





For details on what data to set up for each sub-mesh, see [SubMeshDescriptor](Rendering.SubMeshDescriptor.html).

Additional resources: [subMeshCount](Mesh-subMeshCount.html), [GetSubMesh](Mesh.GetSubMesh.html), [SetSubMesh](Mesh.SetSubMesh.html), [SetIndexBufferParams](Mesh.SetIndexBufferParams.html), [SetIndexBufferData](Mesh.SetIndexBufferData.html), [MeshUpdateFlags](Rendering.MeshUpdateFlags.html).


            
