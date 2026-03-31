This version of Unity is unsupported.



# [VertexAttribute](Rendering.VertexAttribute.html).TexCoord0




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



The primary UV coordinates of the vertex.





This attribute is optional. The attribute is used for texture mapping, as it defines the UV coordinates used to apply textures to a mesh's surface. By default, Unity uses the primary UVs for regular textures such as diffuse maps and specular maps.

UV coordinates are commonly represented using the [Vector2](Vector2.html) format, which consists of two 32-bit floating-point values, resulting in 8 bytes per vertex. If [vertex compression](../Manual/configure-vertex-compression.html) is applied to this attribute, each component is compressed to 16-bit floating-point values, reducing the total to 4 bytes per vertex.

This attribute corresponds to the `TEXCOORD0` semantic in the HLSL shading language.

You can access vertex UVs using methods such as [Mesh.GetUVs](Mesh.GetUVs.html) and [Mesh.SetUVs](Mesh.SetUVs.html).

For more information, refer to [mesh vertex data](../Manual/mesh-vertex-data.html).


            
