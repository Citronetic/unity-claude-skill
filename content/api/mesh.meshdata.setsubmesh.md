This version of Unity is unsupported.



# [Mesh.MeshData](Mesh.MeshData.html).SetSubMesh




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
| index | The index of the sub-mesh to set data for. See subMeshCount. If you specify an out of range index, Unity throws an exception. |
| desc | Sub-mesh data. |
| flags | Flags controlling the function behavior. See MeshUpdateFlags. |





### Description



Sets the data for a sub-mesh of the Mesh that Unity creates from the `MeshData`.





See [Mesh.SetSubMesh](Mesh.SetSubMesh.html) for more information on setting sub-mesh data.
If you call this method on a read-only `MeshData`, Unity throws an exception.


            
