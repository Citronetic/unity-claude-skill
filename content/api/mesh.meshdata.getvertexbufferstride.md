This version of Unity is unsupported.



# [Mesh.MeshData](Mesh.MeshData.html).GetVertexBufferStride




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

public int GetVertexBufferStride(int stream);






### Parameters



| Parameter | Description |
| --- | --- |
| stream | The vertex data stream index to check for. |





### Returns



**int**
        Vertex data size in bytes in this stream, or zero if the stream is not present.





### Description



Get the vertex buffer stream stride in bytes.





Meshes usually use a single vertex buffer stream, but it is possible to set up a vertex layout where attributes
use different vertex buffers (see [SetVertexBufferParams](Mesh.MeshData.SetVertexBufferParams.html)). When you use such a layout, use this function to query the vertex data size in bytes within a given stream.

Additional resources: [vertexBufferCount](Mesh.MeshData-vertexBufferCount.html), [GetVertexAttributeOffset](Mesh.MeshData.GetVertexAttributeOffset.html), [SetVertexBufferParams](Mesh.MeshData.SetVertexBufferParams.html), [Mesh.GetVertexBufferStride](Mesh.GetVertexBufferStride.html).


            
