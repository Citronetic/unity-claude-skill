This version of Unity is unsupported.



# [Mesh.MeshData](Mesh.MeshData.html).SetVertexBufferParams




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

public void SetVertexBufferParams(int vertexCount,
params VertexAttributeDescriptor[] attributes);






## Declaration

public void SetVertexBufferParams(int vertexCount,
NativeArray<VertexAttributeDescriptor> attributes);






### Parameters



| Parameter | Description |
| --- | --- |
| vertexCount | The number of vertices in the Mesh. |
| attributes | Layout of the vertex data: which attributes are present, their data types and so on. |





### Description



Sets the vertex buffer size and layout of the Mesh that Unity creates from the `MeshData`.





Use this function to set vertex buffer size and layout for newly created Mesh data (see [Mesh.AllocateWritableMeshData](Mesh.AllocateWritableMeshData.html)). For details, see [Mesh.SetVertexBufferParams](Mesh.SetVertexBufferParams.html).

After you have set the vertex buffer parameters, you can write the vertices into the array returned by [Mesh.MeshData.GetVertexData](Mesh.MeshData.GetVertexData.html).
If you call this method on a read-only `MeshData`, Unity throws an exception.


            
