This version of Unity is unsupported.



# [Mesh.MeshData](Mesh.MeshData.html).HasVertexAttribute




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

public bool HasVertexAttribute([Rendering.VertexAttribute](Rendering.VertexAttribute.html) attr);






### Parameters



| Parameter | Description |
| --- | --- |
| attr | The vertex attribute to check for. |





### Returns



**bool**
        Returns true if the data attribute is present in the Mesh. Returns false if it is not.





### Description



Checks if a given vertex attribute exists in the `MeshData`.





Most Mesh vertex attributes are optional. For example, a Mesh might contain only vertex positions, normals, and one UV coordinate. Use this method to check whether a given vertex attribute is present in a Mesh.
Additional resources: [Mesh.HasVertexAttribute](Mesh.HasVertexAttribute.html), [GetVertexAttributeDimension](Mesh.MeshData.GetVertexAttributeDimension.html), [GetVertexAttributeFormat](Mesh.MeshData.GetVertexAttributeFormat.html), [Mesh.AcquireReadOnlyMeshData](Mesh.AcquireReadOnlyMeshData.html).


            
