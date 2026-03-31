This version of Unity is unsupported.



# [Mesh](Mesh.html).HasVertexAttribute




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
| attr | Vertex data attribute to check for. |





### Returns



**bool**
        Returns true if the data attribute is present in the mesh.





### Description



Checks if a specific vertex data attribute exists on this Mesh.





Most of possible mesh vertex data attributes are optional, for example a mesh might contain only vertex positions, normals and one UV coordinate. HasVertexAttribute check for these attributes will return true in that case, and will return false for all other attributes.

Additional resources: [VertexAttribute](Rendering.VertexAttribute.html), [GetVertexAttributeDimension](Mesh.GetVertexAttributeDimension.html), [GetVertexAttributes](Mesh.GetVertexAttributes.html).


            
