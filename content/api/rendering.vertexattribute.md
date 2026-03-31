This version of Unity is unsupported.



# VertexAttribute





enumeration


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



Options for the attributes a vertex can store in a mesh.





Vertices in a mesh can store a variety of attributes, such as position, normal, tangent, texture coordinates, or colors. Most attributes are optional, and different meshes may have different sets of attributes. Use this enum together with the [Mesh](Mesh.html) API to modify and reason about the attributes in a given mesh.

Additional resources: [VertexAttributeDescriptor](Rendering.VertexAttributeDescriptor.html), [Mesh.HasVertexAttribute](Mesh.HasVertexAttribute.html), [Mesh.GetVertexAttributes](Mesh.GetVertexAttributes.html).





### Properties



| Property | Description |
| --- | --- |
| Position | The location of the vertex in space. |
| Normal | The direction perpendicular to the surface at the vertex position. |
| Tangent | The direction tangential to the surface at the vertex position. |
| Color | The color of the vertex, using the Color or Color32 format. |
| TexCoord0 | The primary UV coordinates of the vertex. |
| TexCoord1 | The second set of UV coordinates of the vertex. |
| TexCoord2 | The third set of UV coordinates of the vertex. |
| TexCoord3 | The fourth set of UV coordinates of the vertex. |
| TexCoord4 | The fifth set of UV coordinates of the vertex. |
| TexCoord5 | The sixth set of UV coordinates of the vertex. |
| TexCoord6 | The seventh set of UV coordinates of the vertex. |
| TexCoord7 | The eighth set of UV coordinates of the vertex. |
| BlendWeight | The values that describe how much influence bones have on a vertex in skinning calculations. |
| BlendIndices | The indices that map a vertex to specific bones in skinning calculations. |


            
