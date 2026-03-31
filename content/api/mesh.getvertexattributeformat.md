This version of Unity is unsupported.



# [Mesh](Mesh.html).GetVertexAttributeFormat




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
| attr | Vertex data attribute to check for. |





### Returns



**VertexAttributeFormat**
        Format of the data attribute.





### Description



Get format of a specific vertex data attribute on this Mesh.





Meshes usually use a known format for data layout, for example, a normal is a [Vector3](Vector3.html) by default. But meshes can use different vertex
data formats, for example [colors32](Mesh-colors32.html) and [colors](Mesh-colors.html) set up vertex color in different formats. You can use this function to query this format.

Additional resources: [VertexAttribute](Rendering.VertexAttribute.html), [HasVertexAttribute](Mesh.HasVertexAttribute.html), [GetVertexAttributeDimension](Mesh.GetVertexAttributeDimension.html), [GetVertexAttributes](Mesh.GetVertexAttributes.html).


            
