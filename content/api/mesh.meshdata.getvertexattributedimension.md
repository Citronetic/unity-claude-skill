This version of Unity is unsupported.



# [Mesh.MeshData](Mesh.MeshData.html).GetVertexAttributeDimension




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
| attr | The vertex attribute to get the dimension of. |





### Returns



**int**
        Returns the dimension of the vertex attribute. Returns 0 if the vertex attribute is not present.





### Description



Gets the dimension of a given vertex attribute in the `MeshData`.





Most vertex attributes have a standard data layout. For example, a normal is a 3-component vector. Some vertex attributes (usually texture coordinates) have more than one possible data layout. For example, [SetUVs](Mesh.SetUVs.html) accepts either 2 dimensional, 3 dimensional or 4 dimensional texture coordinates. You can use this function to query the layout of a given vertex attribute.
Additional resources: [HasVertexAttribute](Mesh.MeshData.HasVertexAttribute.html), [GetVertexAttributeFormat](Mesh.MeshData.GetVertexAttributeFormat.html).


            
