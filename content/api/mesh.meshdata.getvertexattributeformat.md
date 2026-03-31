This version of Unity is unsupported.



# [Mesh.MeshData](Mesh.MeshData.html).GetVertexAttributeFormat




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

public [Rendering.VertexAttributeFormat](Rendering.VertexAttributeFormat.html) GetVertexAttributeFormat([Rendering.VertexAttribute](Rendering.VertexAttribute.html) attr);






### Parameters



| Parameter | Description |
| --- | --- |
| attr | The vertex attribute to check the format of. |





### Returns



**VertexAttributeFormat**
        Returns the format of the given vertex attribute.





### Description



Gets the format of a given vertex attribute in the `MeshData`.





Most vertex attributes have a standard data format. For example, a position is a [Vector3](Vector3.html). Some vertex attributes have more than one possible data format. For example, [Mesh.colors32](Mesh-colors32.html) and [Mesh.colors](Mesh-colors.html) are different formats for vertex colors.
Use this function to query the format of a given vertex attribute.
Additional resources: [Mesh.GetVertexAttributeFormat](Mesh.GetVertexAttributeFormat.html), [HasVertexAttribute](Mesh.MeshData.HasVertexAttribute.html), [GetVertexAttributeDimension](Mesh.MeshData.GetVertexAttributeDimension.html).


            
