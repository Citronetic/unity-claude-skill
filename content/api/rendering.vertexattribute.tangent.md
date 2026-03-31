This version of Unity is unsupported.



# [VertexAttribute](Rendering.VertexAttribute.html).Tangent




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



The direction tangential to the surface at the vertex position.





This attribute is optional but plays an important role, for example, in advanced lighting and texture mapping effects such as normal mapping.

Tangents are commonly represented using the [Vector4](Vector4.html) format, which consists of four 32-bit floating-point values, resulting in 16 bytes per vertex. If [vertex compression](../Manual/configure-vertex-compression.html) is applied to this attribute, each component is compressed to 16-bit floating-point values, reducing the total to 8 bytes per vertex.

This attribute corresponds to the `TANGENT` semantic in the HLSL shading language.

You can access vertex tangents using methods such as [Mesh.GetTangents](Mesh.GetTangents.html) and [Mesh.SetTangents](Mesh.SetTangents.html).

For more information, refer to [mesh vertex data](../Manual/mesh-vertex-data.html).


            
