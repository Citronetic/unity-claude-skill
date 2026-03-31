This version of Unity is unsupported.



# [Mesh.MeshData](Mesh.MeshData.html).GetVertexAttributeStream




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

public int GetVertexAttributeStream([Rendering.VertexAttribute](Rendering.VertexAttribute.html) attr);






### Parameters



| Parameter | Description |
| --- | --- |
| attr | The vertex data attribute to check for. |





### Returns



**int**
        Stream index of the data attribute, or -1 if it is not present.





### Description



Get the vertex buffer stream index of a specific vertex data attribute on this `MeshData`.





Meshes usually use a single vertex buffer stream, but it is possible to set up a vertex layout where attributes
use different vertex buffers (see [SetVertexBufferParams](Mesh.MeshData.SetVertexBufferParams.html)). When you use such a layout, use this function to query which vertex buffer stream a given attribute is part of.

Note that this function returns the index of the stream, without specifying where the attribute is within the stream. To identify the location of a given attribute in the stream, use [GetVertexAttributeOffset](Mesh.MeshData.GetVertexAttributeOffset.html).

Additional resources: [GetVertexAttributeOffset](Mesh.MeshData.GetVertexAttributeOffset.html), [vertexBufferCount](Mesh.MeshData-vertexBufferCount.html), [GetVertexBufferStride](Mesh.MeshData.GetVertexBufferStride.html), [Mesh.GetVertexAttributeStream](Mesh.GetVertexAttributeStream.html).


            
