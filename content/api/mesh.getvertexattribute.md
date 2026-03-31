This version of Unity is unsupported.



# [Mesh](Mesh.html).GetVertexAttribute




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

public [Rendering.VertexAttributeDescriptor](Rendering.VertexAttributeDescriptor.html) GetVertexAttribute(int index);






### Parameters



| Parameter | Description |
| --- | --- |
| index | The vertex attribute index (0 to vertexAttributeCount-1). |





### Returns



**VertexAttributeDescriptor**
        Information about the vertex attribute.





### Description



Returns information about a vertex attribute based on its index.





This function can be used together with [vertexAttributeCount](Mesh-vertexAttributeCount.html) to query information about vertex attributes that
are present in the mesh, without needing any managed allocations.

Additional resources: [vertexAttributeCount](Mesh-vertexAttributeCount.html), [GetVertexAttributes](Mesh.GetVertexAttributes.html), [VertexAttributeDescriptor](Rendering.VertexAttributeDescriptor.html).


            
