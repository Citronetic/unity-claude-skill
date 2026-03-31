This version of Unity is unsupported.



# [Mesh](Mesh.html).GetVertexAttributeDimension




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

public int GetVertexAttributeDimension([Rendering.VertexAttribute](Rendering.VertexAttribute.html) attr);






### Parameters



| Parameter | Description |
| --- | --- |
| attr | Vertex data attribute to check for. |





### Returns



**int**
        Dimensionality of the data attribute, or zero if it is not present.





### Description



Get dimension of a specific vertex data attribute on this Mesh.





Meshes usually use a known format for data layout, for example, a position is always a 3-component Vector, and a tangent is always a 4-component Vector. But, in some cases (usually regarding texture coordinates), the data layout can be of different dimensionality. For example, [SetUVs](Mesh.SetUVs.html) accepts either a 2D, 3D or 4D texture coordinates. You can use this function to query this layout.

Additional resources: [VertexAttribute](Rendering.VertexAttribute.html), [HasVertexAttribute](Mesh.HasVertexAttribute.html), [GetVertexAttributeFormat](Mesh.GetVertexAttributeFormat.html), [GetVertexAttributes](Mesh.GetVertexAttributes.html).


            
