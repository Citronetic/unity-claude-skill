This version of Unity is unsupported.



# [Mesh.MeshData](Mesh.MeshData.html).GetVertexAttributeOffset




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

public int GetVertexAttributeOffset([Rendering.VertexAttribute](Rendering.VertexAttribute.html) attr);






### Parameters



| Parameter | Description |
| --- | --- |
| attr | The vertex data attribute to check for. |





### Returns



**int**
        The byte offset within a atream of the data attribute, or -1 if it is not present.





### Description



Gets the offset within a vertex buffer stream of a given vertex data attribute on this `MeshData`.





Meshes usually use a single vertex buffer stream, but it is possible to set up a vertex layout where attributes
use different vertex buffers (see [SetVertexBufferParams](Mesh.MeshData.SetVertexBufferParams.html)). When you use such a layout, use this function to query where a given attribute is located in a stream.

Note that this function returns the byte offset within a stream, without specifying which stream. To identify the stream that contains a given attribute, use [GetVertexAttributeStream](Mesh.MeshData.GetVertexAttributeStream.html).

Additional resources: [GetVertexAttributeStream](Mesh.MeshData.GetVertexAttributeStream.html), [vertexBufferCount](Mesh.MeshData-vertexBufferCount.html), [GetVertexBufferStride](Mesh.MeshData.GetVertexBufferStride.html), [Mesh.GetVertexAttributeOffset](Mesh.GetVertexAttributeOffset.html).


            
