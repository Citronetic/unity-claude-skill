This version of Unity is unsupported.



# [VertexAttribute](Rendering.VertexAttribute.html).Color




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



The color of the vertex, using the [Color](Color.html) or [Color32](Color32.html) format.





This attribute is optional. You can use it for shading, tinting, gradients, or other custom effects in your materials.

Colors are commonly represented using the [Color32](Color32.html) format, which consists of four 8-bit unsigned integer values (red, green, blue, and alpha), resulting in 4 bytes per vertex. If more precision is needed, you can use the [Color](Color.html) format, which represents each channel with a 32-bit floating-point value, resulting in 16 bytes per vertex.

This attribute corresponds to the `COLOR` semantic in the HLSL shading language.

You can access vertex colors using methods such as [Mesh.GetColors](Mesh.GetColors.html) and [Mesh.SetColors](Mesh.SetColors.html).

For more information, refer to [mesh vertex data](../Manual/mesh-vertex-data.html).


            
