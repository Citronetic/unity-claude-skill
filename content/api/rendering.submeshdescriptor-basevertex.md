This version of Unity is unsupported.



# [SubMeshDescriptor](Rendering.SubMeshDescriptor.html).baseVertex




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












                    public int baseVertex;






### Description



Offset that is added to each value in the index buffer, to compute the final vertex index.





You can use the Base vertex to achieve meshes that are larger than 65535 vertices while using 16 bit index buffers,
as long as each sub-mesh fits within its own 65535 vertex area. For example, if the index buffer values are 10,11,12 and
`baseVertex` is set to 100000, then effectively vertices 100010, 100011 and 100012 will be
used for rendering.

Additional resources: [Mesh.SetSubMesh](Mesh.SetSubMesh.html), [Mesh.GetSubMesh](Mesh.GetSubMesh.html), [Mesh.SetIndexBufferParams](Mesh.SetIndexBufferParams.html), [Mesh.SetIndexBufferData](Mesh.SetIndexBufferData.html).


            
