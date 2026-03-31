This version of Unity is unsupported.



# [VertexAttribute](Rendering.VertexAttribute.html).Position




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



















### Description



The location of the vertex in space.





Meshes require this attribute for rendering.

Positions are commonly represented using the [Vector3](Vector3.html) format, which consists of three 32-bit floating-point values, resulting in 12 bytes per vertex. If [vertex compression](../Manual/configure-vertex-compression.html) is applied to this attribute, each component is compressed to 16-bit floating point values, reducing the total to 6 bytes per vertex.

This attribute corresponds to the `POSITION` semantic in the HLSL shading language.

You can access vertex positions using methods such as [Mesh.GetVertices](Mesh.GetVertices.html) and [Mesh.SetVertices](Mesh.SetVertices.html).

For more information, refer to [mesh vertex data](../Manual/mesh-vertex-data.html).


            
