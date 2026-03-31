This version of Unity is unsupported.



# [Mesh.MeshData](Mesh.MeshData.html).SetIndexBufferParams




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

public void SetIndexBufferParams(int indexCount,
[Rendering.IndexFormat](Rendering.IndexFormat.html) format);






### Parameters



| Parameter | Description |
| --- | --- |
| indexCount | The size of the index buffer. |
| format | The format of the indices. |





### Description



Sets the index buffer size and format of the Mesh that Unity creates from the `MeshData`.





Use this method to set the index buffer size and format for the Mesh that Unity creates from the `MeshData` struct. For details, see [Mesh.SetIndexBufferParams](Mesh.SetIndexBufferParams.html).

After you have set the index buffer parameters, you can write the indices into the array returned by [Mesh.MeshData.GetIndexData](Mesh.MeshData.GetIndexData.html). If you call this method on a read-only `MeshData`, Unity throws an exception.

Additional resources: [Mesh.AllocateWritableMeshData](Mesh.AllocateWritableMeshData.html), [Mesh.AcquireReadOnlyMeshData](Mesh.AcquireReadOnlyMeshData.html).


            
